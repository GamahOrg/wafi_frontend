import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectModelService } from '../../../services/project-model.service';
import { Validators, FormBuilder } from '@angular/forms';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { DropDownSubUnitTypeDto } from '../../../dataModels/drop-down-name.dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import type { LicenseProjectSubUnitCreateUpdateDto, ProjectSubUnitDto } from '../../../dataModels/project-sub-unit.dto';
import type { PopupResult } from '../../../models/popup-result.model';
import { ZoneActionType } from '../../../enums/zone-action-type.enum';
import { LicenseProjectNatureTypeDto } from '../../../models/project-units';
import { LicenseProjectNatureTypeEnum } from '../../../enums/unit-status.enum';
import { CorrectionProjectSubUnitService } from '../../../services/correction-project-sub-unit.service';
import { CorrectionLicenseProjectUnitService } from '../../../services/correction-license-project-unit.service';

@Component({
  selector: 'app-correction-license-project-zone-unit-subunit',
  templateUrl: './correction-license-project-zone-unit-subunit.component.html',
  styleUrls: ['./correction-license-project-zone-unit-subunit.component.scss']
})
export class CorrectionLicenseProjectZoneUnitSubunitComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  subUnitType: DropDownSubUnitTypeDto[] | null = null;
  showValidationSubUnitsForm: boolean = false;
  // licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  LicenseProjectNatureTypeEnum = LicenseProjectNatureTypeEnum;
  isEdit: boolean = false;
  subUnitData: ProjectSubUnitDto | null = null;
  correctionUnitId: string | null = '00000000-0000-0000-0000-000000000000';

  licenseProjectNatureType: LicenseProjectNatureTypeDto = {
    natureTypeId: 0,
    natureTypeName: '',
    projectId: ''
  };
  constructor(
    private _licenseProjectUnitService: CorrectionLicenseProjectUnitService,
    private _projectModelService: ProjectModelService,
    private _formBuilder: FormBuilder,
    private _popupService: PopupService,
    private _ProjectSubUnitService: CorrectionProjectSubUnitService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getLookups();
    this.observePopupEvents();
    this.getLicenseProjectIdStorage();
    this.getProjectNatureType();
  }

  localization = {
    errorMsg: 'لا يمكن اضافة أو تعديل بلوكات أو عماير الآن',
    UnitType: 'إضافة بلوك / عمارة ',
    unitCode: 'رقم البلوك / رقم العمارة',
    stageNo: 'رقم المرحلة',
    constructionStartOn: 'تاريخ بداية الإنشاء',
    constructionEndOn: 'تاريخ نهاية الانشاء',
    chooseUnitTitle: 'تحديد نوع الوحدات داخل البلوك',
    addingNewUnit: 'حفظ و إضافة نوع وحدة جديد ',
    chooseUnitTitleHint: '( يمكنك اختيار أكثر من نوع من الوحدات داخل البلوك )',
    dateValidator: 'يجب أن يكون تاريخ البدايه اقل من تاريخ النهايه',
    subUnitsType: 'اضاقة أنواع الوحدات بالبلوك / العمارة ',
    subUnitCount: 'عدد وحدات الخاص بالبلوك أو العمارة  ',
    actions: 'إجراءات',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
  };



  licenseProjectSubUnitsForm = this._formBuilder.group({
    id: '00000000-0000-0000-0000-000000000000',
    licenseProjectUnitId: [
      '00000000-0000-0000-0000-000000000000',
      Validators.required,
    ],
    subUnitTypeId: 0,
    subUnitCount: this._formBuilder.control<number | null>(0, [
      Validators.required,
      Validators.min(1),
    ]),
  });

  get SubUnitsFormControls() {
    return this.licenseProjectSubUnitsForm.controls;
  }

  getLookups(): void {
    this.subscriptions.push(
      this._projectModelService.GetSysLicenseProjectSubUnitTypeDropDown().subscribe(subUnitTypes => {
        this.subUnitType = subUnitTypes;
      })
    );
  }
  private getProjectNatureType(): void {
    this.subscriptions.push(
      this._licenseProjectUnitService
        .GetLicenseProjectNatureType(this.correctionUnitId ?? '')
        .subscribe((res: LicenseProjectNatureTypeDto | null) => {
          if (res) {
            this.licenseProjectNatureType.natureTypeId = res?.natureTypeId;
            this.licenseProjectNatureType.natureTypeName = res?.natureTypeName;
            this.licenseProjectNatureType.projectId = res?.projectId;


            const landsId = 28;
            if (res.natureTypeId === LicenseProjectNatureTypeEnum.Lands) {
              this.licenseProjectSubUnitsForm.patchValue({
                subUnitTypeId: landsId
              });

              this.licenseProjectSubUnitsForm.get('subUnitTypeId')?.disable();
            } else {

              this.licenseProjectSubUnitsForm.get('subUnitTypeId')?.enable();
            }

          }


        })
    );
  }
  private getLicenseProjectIdStorage(): void {
    this.correctionUnitId =
      this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage();
  }
  licenseProjectUnitId: string = '';
  observePopupEvents(): void {

    this._popupService.popupData.subscribe(data => {
      if (data.id)
        this.licenseProjectUnitId = data.id;

      if (data.data?.isEdit && data.data?.subUnit) {
        this.isEdit = true;
        this.subUnitData = data.data.subUnit;
        this.patchFormForEdit();
      }
    })

    this.observeconfirmAction();
  }

  private patchFormForEdit(): void {
    if (this.subUnitData) {
      this.licenseProjectSubUnitsForm.patchValue({
        id: this.subUnitData.id,
        licenseProjectUnitId: this.subUnitData.licenseProjectUnitId,
        subUnitTypeId: this.subUnitData.subUnitTypeId,
        subUnitCount: this.subUnitData.subUnitCount
      });
    }
  }


  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.onSubmit();
      })
    );
  }

  private closeDialog(data: any): void {
    this._popupService.dismissDialogWithData(data);
  }


  onSubmit() {
    if (
      this.licenseProjectSubUnitsForm?.invalid ||
      this.SubUnitsFormControls.subUnitTypeId.value == 0
    ) {
      this.showValidationSubUnitsForm = true;
      this._toastrNotificationService.showError(
        this.localization.PleaseAddAllRequiredFields
      );
      return;
    }

    let model = {
      licenseProjectUnitId: this.licenseProjectUnitId,
      subUnitTypeId: this.SubUnitsFormControls.subUnitTypeId.value,
      subUnitCount: this.SubUnitsFormControls.subUnitCount.value,
    } as LicenseProjectSubUnitCreateUpdateDto;

    if (this.isEdit && this.subUnitData) {
      model.id = this.subUnitData.id;
      this._ProjectSubUnitService.updateLicenseProjectSubUnit(model).subscribe(data => {
        if (data.isDone) {
          this.closeDialog({ actionType: ZoneActionType.UpdateSubUnit.toString(), data: data.data } as PopupResult)
        }
      });
    } else {
      this._ProjectSubUnitService.addLicenseProjectSubUnit(model).subscribe(data => {
        if (data.isDone) {
          this.closeDialog({ actionType: ZoneActionType.AddSubUnit.toString(), data: data.data } as PopupResult)
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
