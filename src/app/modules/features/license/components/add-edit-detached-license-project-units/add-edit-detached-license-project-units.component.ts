import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import {
  LicenseProjectDetachedUnit,
  LicenseProjectDetachedUnits,
} from '../../dataModels/license-project-detached-unit.model';
import { DropDownSubUnitTypeDto } from '../../dataModels/drop-down-name.dto';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { DetachedLicenseProjectUnitsService } from '../../services/detached-license-project-units/detached-license-project-units.service';
import { ProjectModelService } from '../../services/project-model.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-add-edit-detached-license-project-units',
  templateUrl: './add-edit-detached-license-project-units.component.html',
  styleUrls: ['./add-edit-detached-license-project-units.component.scss'],
})
export class AddEditDetachedLicenseProjectUnitsComponent
  implements OnInit, OnDestroy
{
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '000000 00-0000-0000-0000-000000000000';
  subUnitType: DropDownSubUnitTypeDto[] | null = null;
  showValidation: boolean = false;
  licenseProjectSubUnits: LicenseProjectDetachedUnit[] = [];

  licenseProjectSubUnitsForm = this._formBuilder.group({
    id: '00000000-0000-0000-0000-000000000000',
    licenseProjectId: [
      '00000000-0000-0000-0000-000000000000',
      Validators.required,
    ],
    subUnitTypeId: this._formBuilder.control<number>(0, [Validators.required]),
    subUnitCount: this._formBuilder.control<number | null>(null, [
      Validators.required,
      Validators.min(0),
    ]),
  });

  localization = {
    chooseUnitTitle: 'تحديد نوع الوحدات داخل البلوك',
    addingNewUnit: 'حفظ و إضافة نوع وحدة جديد ',
    chooseUnitTitleHint: '( يمكنك اختيار أكثر من نوع من الوحدات داخل البلوك )',
    subUnitsType: 'اضاقة أنواع الوحدات ',
    subUnitCount: 'عدد وحدات',
    actions: 'إجراءات',
    errorMsg: 'لا يمكن اضافة او تعديل وحدات الآن',
    saveSuccessfully: 'تم أضافة الوحدات بنجاح',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
  };

  get SubUnitsFormControls() {
    return this.licenseProjectSubUnitsForm.controls;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _popupService: PopupService,
    private _detachedLicenseProjectUnitsService: DetachedLicenseProjectUnitsService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _projectModelService: ProjectModelService,
    private _toastrService: ToastrService,
    private _toastrNotificationService: ToastrNotificatioService
  ) {}

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.getLookups();
    this.observePopupEvents();
  }

  getLookups(): void {
    this.subscriptions.push(
      this._detachedLicenseProjectUnitsService
        .getUnitTypeLookup()
        .pipe(take(1))
        .subscribe((res: DropDownSubUnitTypeDto[] | null) => {
          this.subUnitType = res as DropDownSubUnitTypeDto[] | null;
        })
    );
  }

  public addNewFormGroup(): void {
    this.SubUnitsFormControls.licenseProjectId.setValue(
      this.licenseProjectId as string
    );
    if (
      this.licenseProjectSubUnitsForm?.invalid ||
      this.SubUnitsFormControls.subUnitTypeId.value == 0
    ) {
      this.showValidation = true;
      this._toastrNotificationService.showError(
        this.localization.PleaseAddAllRequiredFields
      );
      this.licenseProjectSubUnitsForm?.markAllAsTouched();
      return;
    }
    this.SubUnitsFormControls.id.setValue(
      '00000000-0000-0000-0000-000000000000' as string
    );
    this.SubUnitsFormControls.subUnitTypeId.setValue(
      Number(this.SubUnitsFormControls.subUnitTypeId.value)
    );
    this.licenseProjectSubUnits.push(
      this.licenseProjectSubUnitsForm.value as LicenseProjectDetachedUnit
    );
    this.licenseProjectSubUnitsForm.reset();
  }

  public getSubUnitName(unit: LicenseProjectDetachedUnit): string | undefined {
    if (this.subUnitType) {
      let subUnitNameType = this.subUnitType.filter(
        (item: DropDownSubUnitTypeDto) => unit.subUnitTypeId == item.id
      );
      return subUnitNameType[0].name;
    }
    return undefined;
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }

  deleteSubUnit(index: number): void {
    this.licenseProjectSubUnits.splice(index, 1);
  }
  // popup
  observePopupEvents(): void {
    this.observeconfirmAction();
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.submit();
      })
    );
  }

  private submit(): void {
    if (this.licenseProjectSubUnits && this.licenseProjectSubUnits.length > 0) {
      this.subscriptions.push(
        this._detachedLicenseProjectUnitsService
          .SaveLicenseProjectSubUnitsAsync({
            licenseProjectSubUnits: this.licenseProjectSubUnits,
          } as LicenseProjectDetachedUnits)
          .subscribe((res: LicenseProjectDetachedUnits | null) => {
            if (res && res.licenseProjectSubUnits.length > 0) {
              this.updateDetachedUnits(res.licenseProjectSubUnits);
              this.closeDialog();
              this.showSaveSuccessfully();
            }
          })
      );
    }
  }

  showSaveSuccessfully(): void {
    this._toastrService.success(this.localization.saveSuccessfully);
  }

  updateDetachedUnits(res: LicenseProjectDetachedUnit[] | null) {
    this._detachedLicenseProjectUnitsService.updateDetachedUnits(res);
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
