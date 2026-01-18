import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { LicenseProjectModelDto } from '../../../dataModels/license-project-model.dto';
import { DropDownNameDto } from '../../../dataModels/drop-down-name.dto';
import { CorrectionProjectModelService } from '../../../services/correct-units/correction-project-model-service.service';
import { CorrectionProjectSubUnitService } from '../../../services/correction-project-sub-unit.service';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-correcting-sub-unit-models',
  templateUrl: './correcting-sub-unit-models.component.html',
  styleUrls: ['./correcting-sub-unit-models.component.scss']
})
export class CorrectingSubUnitModelsComponent implements OnInit, OnDestroy {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  selectedSubUnit: string | null = null;
  selectedSubUnitTitle: string | null = null;
  types: DropDownNameDto[] = [];
  models: LicenseProjectModelDto[] = [];

  constructor(
    private _projectSubUnitService: CorrectionProjectSubUnitService,
    private _projectModelService: CorrectionProjectModelService,
  ) { }

  ngOnInit(): void {
    this.getSelectedProjectSubUnit();
    this.unitTitle();
  }

  private getSelectedProjectSubUnit(): void {
    this.subscriptions.push(
      this._projectSubUnitService.getSelectedProjectSubUnit().subscribe((res: string | null) => {
        this.selectedSubUnit = res;
        if (this.selectedSubUnit) this.loadComponentData();
      })
    );
  }

  private loadComponentData() {
    const requests = [
      this._projectModelService.GetByProjectSubUnitId(this.selectedSubUnit as string),
      this._projectModelService.GetSysLicenseProjectSubUnitTypeDropDown(),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.models = (results[0] as CoreResponseDTO<LicenseProjectModelDto[]>).data as LicenseProjectModelDto[];
        this.types = (results[1] as CoreResponseDTO<DropDownNameDto[]>).data as DropDownNameDto[];
        this._projectModelService.SetSubjectListObjs(this.models);
        this._projectModelService.getSubjectListObjs().subscribe((subjectObj) => {
          this.models = subjectObj;
        })
      }
    });
    this.subscriptions.push(subscriptions);
  }

  private unitTitle(): void {
    this.subscriptions.push(
      this._projectSubUnitService.selectedProjectSubUnitTitle.subscribe((res: string | null) => {
        if (res) this.selectedSubUnitTitle = res
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
