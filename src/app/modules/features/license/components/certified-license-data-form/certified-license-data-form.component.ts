import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { LicenseRequestHeaderService } from '../../services/license-request-header.service';
import { UpdateCertifiedLicenseDataDto } from '../../models/certified-license-data-dto';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-certified-license-data-form',
  templateUrl: './certified-license-data-form.component.html',
  styleUrls: ['./certified-license-data-form.component.scss']
})
export class CertifiedLicenseDataFormComponent implements OnInit, OnDestroy {
  showValidation: boolean = false;
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  isExistingValidation: boolean = false;
  userData: customerResponse | null = null;
  certifiedLicenseData: UpdateCertifiedLicenseDataDto = new UpdateCertifiedLicenseDataDto()
  localization = {
    startOn: 'تاريخ بداية الرخصة المتوقع',
    endOn: 'تاريخ نهاية الرخصة المتوقع',
    title: 'بيانات ر خصة المشروع ',
    certifiedNumber: 'رقم الرخصة',
    savedSuccessfully: 'تم الحفظ',
    save: 'حفظ كمسودة',
    requiredErrorMsg: 'حقل مطلوب',
    dateValidator: 'يجب أن يكون تاريخ البداية اقل من تاريخ النهاية',
    yes: 'نعم',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    no: 'لا'
  }
  constructor(
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _userDataService: UserDataService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licesneRequestHeaderService: LicenseRequestHeaderService
  ) { }
  certifiedLicenseDataForm = this._formBuilder.group({
    certifiedNumber: ['', [Validators.required]],
    startOn: ['', [Validators.required]],
    endOn: ['', [Validators.required]],
  }, { validators: dateValidator });
  get controls() {
    return this.certifiedLicenseDataForm.controls;
  }
  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.getCustomerData();
    this.ObserveSelectedRequest();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  getCustomerData() {

    this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
      this.userData = res;
      this.isExistingValidation = this.userData?.isEmployee as boolean;
    })
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true)
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.save(true)
      })
    )
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe((res: null) => {
        this.save()
      })
    )
  }
  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked()
  }
  save(moveToNextTab: boolean = false): void {

    if (!this.isExistingValidation) {
      if (!this.certifiedLicenseDataForm.valid) {
        this.showValidation = true;
        this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
        this.certifiedLicenseDataForm?.markAllAsTouched();
        return;
      }
    }

    var request = new UpdateCertifiedLicenseDataDto();
    request.certifiedNumber = this.certifiedLicenseDataForm.controls.certifiedNumber.value as string,
    request.startOn = this.certifiedLicenseDataForm.controls.startOn.value as string,
    request.endOn = this.certifiedLicenseDataForm.controls.endOn.value as string,

    this.subscriptions.push(
      this._licesneRequestHeaderService.UpdateCertifiedLicenseData(request,this.licenseProjectId as string).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully);
          if (moveToNextTab) this.moveToNextTab()
        } else {
          this._toastrNotificationService.showError(res.message);
        }
      })
    )
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._licesneRequestHeaderService.GetCertifiedLicenseData(this.licenseProjectId as string).subscribe(res =>{
        this.certifiedLicenseData = res as UpdateCertifiedLicenseDataDto
        this.certifiedLicenseDataForm.controls.certifiedNumber.setValue(res?.certifiedNumber as string)
        this.certifiedLicenseDataForm.controls.startOn.setValue(res?.startOn as string)
        this.certifiedLicenseDataForm.controls.endOn.setValue(res?.endOn as string)
      })
    )} 
  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
export const dateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const start = control.get('startOn');
  const end = control.get('endOn');
  return start?.value !== null && end?.value !== null && new Date(start?.value) < new Date(end?.value)
    ? null : { dateValid: true };
}