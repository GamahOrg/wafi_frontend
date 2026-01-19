import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { LicenseProjectCompletionData, LicenseProjectModelDto } from '../../../dataModels/license-project-model.dto';
import { DropDownNameDto } from '../../../dataModels/drop-down-name.dto';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrService } from 'ngx-toastr';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ProjectModuleModelsFormComponent } from '../../project-module-models-form/project-module-models-form.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { environment } from 'src/environments/environment';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { DataVisibilityOfLicenseProjectService } from '../../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabCode } from '../../../models/tab-code.model';
import { LicenseRequestService } from '../../../services/license-request.service';
import { CorrectionProjectSubUnitService } from '../../../services/correction-project-sub-unit.service';
import { CorrectionProjectModelService } from '../../../services/correct-units/correction-project-model-service.service';

@Component({
  selector: 'app-correction-sub-unit-models',
  templateUrl: './correction-sub-unit-models.component.html',
  styleUrls: ['./correction-sub-unit-models.component.scss']
})
export class CorrectionSubUnitModelsComponent implements OnInit, OnDestroy {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  selectedSubUnit: string | null = null;
  selectedSubUnitTitle: string | null = null;
  types: DropDownNameDto[] = [];
  models: LicenseProjectModelDto[] = [];
  hideActionButtons: boolean = false;
  localization = {
    title: 'إضافة بيانات النموذج داخل نوع الوحدة',
    BlocksAndbuildingsAndunitsComponent: "نمازج وحدات المشروع ",
    requiredErrorMsg: 'حقل مطلوب',
    save: 'حفظ البيانات',
    savedSuccessfully: 'تم الحفظ',
    dateValidator: 'يجب ان يكون تاريخ الرخصة اقل من تاريخ الحالي',

  };
  constructor(
    private _projectSubUnitService: CorrectionProjectSubUnitService,
    private _projectModelService: CorrectionProjectModelService,
    private _popupService: PopupService,
    private _toastrService: ToastrService,
    //private _licenseRequestService: LicenseRequestService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService
  ) { }

  ngOnInit(): void {
    this.getSelectedProjectSubUnit();
    this.unitTitle();
    // this.checkIfShouldHideActionButtons();
  }



  // private checkIfShouldHideActionButtons(): void {
  //   const typeCode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
  //    const licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  //   if (typeCode === 'FSRSU' && licenseProjectId) {

  //     const requests = [
  //       this._dataVisibilityOfLicenseProjectService.GetCompletedLicenseProjectProfileTaps(licenseProjectId),
  //       this._licenseRequestService.GetLicenseProjectCompletionData(licenseProjectId)
  //     ];
  //     const subscriptions = forkJoin(requests).subscribe((results) => {
  //       if (results) {
  //         let completedTabs = results[0] as string[];
  //         let complete = results[1] as LicenseProjectCompletionData | null;
  //         if (completedTabs && complete)
  //           this.hideActionButtons = completedTabs.includes(TabCode.fawriaArchitecturalUnitsAndDesigns) && complete && (complete.isProfileCompleted || complete.isProjectHasUnitForFarzIntegration);

  //       }
  //     });
  //     this.subscriptions.push(subscriptions);

  //     // this.subscriptions.push(
  //     //   this._dataVisibilityOfLicenseProjectService
  //     //     .GetCompletedLicenseProjectProfileTaps(this.licenseProjectId)
  //     //     .subscribe((completedTabs: string[]) => {
  //     //       this.hideActionButtons = completedTabs.includes(TabCode.fawriaArchitecturalUnitsAndDesigns);
  //     //     })
  //     // );


  //   }
  // }

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

  openDialog(license: LicenseProjectModelDto | undefined): void {
    if (!this.selectedSubUnit) return;
    if (!license || !license.id) {
      license = new LicenseProjectModelDto();
      license.licenseProjectSubUnitId = this.selectedSubUnit;
    }
    this._projectModelService.SetSubjectObj(license as LicenseProjectModelDto);
    let Data = {
      title: this.localization.title + " - " + this._sharedLicenseProjectService.stripHtml(this.selectedSubUnitTitle ?? ''),
      component: ProjectModuleModelsFormComponent,
      id: "ProjectModuleModelsFormComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  delete(id: string) {
    this.subscriptions.push(
      this._projectModelService.Delete(id).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)
          this._projectModelService.SetSubjectListObjs(res.data as LicenseProjectModelDto[]);
        }
        else
          this._toastrService.error(res.message);
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
