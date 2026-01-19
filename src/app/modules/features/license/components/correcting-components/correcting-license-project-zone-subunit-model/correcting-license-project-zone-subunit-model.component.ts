import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectModelDto, LicenseProjectModelDesignFileDto, LicenseProjectCompletionData } from '../../../dataModels/license-project-model.dto';
import { forkJoin, Subscription } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { environment } from 'src/environments/environment';
import { CorrectionProjectModelService } from '../../../services/correct-units/correction-project-model-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-correcting-license-project-zone-subunit-model',
  templateUrl: './correcting-license-project-zone-subunit-model.component.html',
  styleUrls: ['./correcting-license-project-zone-subunit-model.component.scss']
})
export class CorrectingLicenseProjectZoneSubunitModelComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  projectModel: LicenseProjectModelDto = new LicenseProjectModelDto();
  licenseProjectModelDesignFiles: LicenseProjectModelDesignFileDto[] = [];
  baseUrl = `${environment.baseURL}/`;
  models: LicenseProjectModelDto[] = [];

  constructor(
    private _projectModelService: CorrectionProjectModelService,
    private _formBuilder: FormBuilder
  ) { }

  localization = {
    title: 'بيانات النموذج داخل نوع الوحدة',
  };

  ngOnInit() {
    this.getSelectedProjectSubUnit();
  }

  selectModel?: LicenseProjectModelDto | null = null;
  selectedModelIndex: number = 0;

  onSelectedModel(model: LicenseProjectModelDto, index: number) {
    this.projectModel = model;
    this.selectedModelIndex = index;
  }

  private getSelectedProjectSubUnit(): void {
    this.subscriptions.push(
      this._projectModelService.getSubjectObj().subscribe(res => {
        if (res) {
          this.loadComponentData(res.licenseProjectSubUnitId);
          this.projectModel = res;
          if (!this.projectModel.id) this.projectModel.id = '00000000-0000-0000-0000-000000000000';
          if (this.projectModel.licenseProjectModelDesignFiles)
            this.licenseProjectModelDesignFiles = this.projectModel.licenseProjectModelDesignFiles;
        }
      })
    );
  }

  private loadComponentData(licenseProjectSubUnitId: string) {
    const requests = [
      this._projectModelService.GetByProjectSubUnitId(licenseProjectSubUnitId as string),
      this._projectModelService.GetSysLicenseProjectSubUnitTypeDropDown(),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.models = (results[0] as CoreResponseDTO<LicenseProjectModelDto[]>).data as LicenseProjectModelDto[];
      }
    });
    this.subscriptions.push(subscriptions);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
