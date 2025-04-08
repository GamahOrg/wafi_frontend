import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectUnitService } from '../../../services/license-project-unit/license-project-unit.service';
import { ZonesBlocksBuildingAndUnitsService } from '../../../services/zones-blocks-building-units/zones-blocks-building-and-units.service';
import { ProjectModelService } from '../../../services/project-model.service';
import { Validators, FormBuilder } from '@angular/forms';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ToastrService } from 'ngx-toastr';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { DropDownSubUnitTypeDto } from '../../../dataModels/drop-down-name.dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ProjectSubUnitService } from '../../../services/project-sub-unit.service';
import type { LicenseProjectSubUnitCreateUpdateDto } from '../../../dataModels/project-sub-unit.dto';
import type { PopupResult } from '../../../models/popup-result.model';
import { ZoneActionType } from '../../../enums/zone-action-type.enum';

@Component({
  selector: 'app-license-project-zone-unit-subunit',
  templateUrl: './license-project-zone-unit-subunit.component.html',
  styleUrls: ['./license-project-zone-unit-subunit.component.scss']
})
export class LicenseProjectZoneUnitSubunitComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  subUnitType: DropDownSubUnitTypeDto[] | null = null;
  showValidationSubUnitsForm: boolean = false;
  constructor(
    private _licenseProjectUnitService: LicenseProjectUnitService,
    private _zonesBlocksBuildingAndUnitsService: ZonesBlocksBuildingAndUnitsService,
    private _projectModelService: ProjectModelService,
    private _formBuilder: FormBuilder,
    private _popupService: PopupService,
    private _toastrService: ToastrService,
    private _ProjectSubUnitService: ProjectSubUnitService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getLookups();
    this.observePopupEvents();
  }

  localization = {
    errorMsg: 'لا يمكن اضافة او تعديل بلوكات او عماير الآن',
    UnitType: 'إضافة بلوك / عمارة ',
    unitCode: 'رقم البلوك / رقم العمارة',
    stageNo: 'رقم المرحلة',
    constructionStartOn: 'تاريخ بداية الإنشاء',
    constructionEndOn: 'تاريخ نهاية الانشاء',
    chooseUnitTitle: 'تحديد نوع الوحدات داخل البلوك',
    addingNewUnit: 'حفظ و إضافة نوع وحدة جديد ',
    chooseUnitTitleHint: '( يمكنك اختيار اختر من نوع من الوحدات داخل البلوك )',
    dateValidator: 'يجب ان يكون تاريخ البدايه اقل من تاريخ النهايه',
    subUnitsType: 'اضاقة أنواع الوحدات بالبلوك / العمارة ',
    subUnitCount: 'عدد وحدات الخاص بالبلوك او العمارة  ',
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

  licenseProjectUnitId: string = '';
  observePopupEvents(): void {

    this._popupService.popupData.subscribe(data => {
      if (data.id)
        this.licenseProjectUnitId = data.id;
    })

    this.observeconfirmAction();
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
    // this.SubUnitsFormControls.licenseProjectUnitId.setValue(
    //   this.licenseProjectId as string
    // );

    console.log(this.licenseProjectSubUnitsForm);


    if (
      this.licenseProjectSubUnitsForm?.invalid ||
      this.SubUnitsFormControls.subUnitTypeId.value == 0
    ) {
      this.showValidationSubUnitsForm = true;
      this._toastrNotificationService.showError(
        this.localization.PleaseAddAllRequiredFields
      );
      // this.licenseProjectSubUnitsForm?.markAllAsTouched();
      return;
    }


    let model = {
      licenseProjectUnitId: this.licenseProjectUnitId,
      subUnitTypeId: this.SubUnitsFormControls.subUnitTypeId.value,
      subUnitCount: this.SubUnitsFormControls.subUnitCount.value,

    } as LicenseProjectSubUnitCreateUpdateDto;

    this._ProjectSubUnitService.addLicenseProjectSubUnit(model).subscribe(data => {
      console.log(data);
      if (data.isDone) {
        this.closeDialog({ actionType: ZoneActionType.AddSubUnit.toString(), data: data.data } as PopupResult)
      }
    })

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
