import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { customerResponse, facilityResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
// import { customerResponseFE, facilityResponseBE, facilityResponseFE } from '../../models/registration.model';
import { RegistrationService } from '../../services/registration/registration.service';
import { Router } from '@angular/router';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Component({
  selector: 'app-adding-commercial-register-number',
  templateUrl: './adding-commercial-register-number.component.html',
  styleUrls: ['./adding-commercial-register-number.component.scss']
})

export class AddingCommercialRegisterNumberComponent {
  subscriptions: Subscription[] = [];
  viewMode: boolean = false;
  facilityData: facilityResponse = new facilityResponse;
  userData: customerResponse | null = null;
  facilityForm = this._formBuilder.group({
    commercialRegistrationNo: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(Configuration.validators.numberOnly)]],
    socialNumber: []
  });

  get commercialRegistrationNo(): FormControl {
    return this.facilityForm.controls.commercialRegistrationNo
  }

  localization = {
    commercialRegistrationNo: "الرقم الوطني للسجل التجاري",
    alert: "تم التحقق من الرقم الوطني للسجل التجاري من قبل وزارة التجارة",
    title: "البيانات الخاصة بالرقم الوطني للسجل التجاري التي تم استرجاعها من قبل وزارة التجارة",
    startDateLabel: "تاريخ إصدار السجل التجاري",
    endDateLabel: "تاريخ إنتهاء السجل التجاري",
    facilityData: "بيانات المنشأة ",
    facilityType: "نوع المنشأة",
    facilityName: "اسم المنشأه",
    facilityActivities: "نشاط / انشطة المنشأه",
    requiredErrorMsg: 'حقل مطلوب',
    maxLengthErrorMsg: "طول الارقام يجب الا يزيد عن 20 رقم",
    verification: "تحقق",
    pattern: "accept no. only",
    next: "التالي",
    previous: "السابق",
     commercialRegisterNumber:'رقم السجل التجارى'
  }
  constructor(
    private _router: Router,
    private _toastrNotificatioService: ToastrNotificatioService,
    private _formBuilder: FormBuilder,
    private _registrationService: RegistrationService,
    private _userDataService: UserDataService,
    private _storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.obseveCustomerData();
  }



  onClickOnVerification() {
    this.subscriptions.push(
      this._registrationService.FacilityRegister(this.commercialRegistrationNo.value, this.userData?.id as string).subscribe((facilityDataRes: facilityResponse | null) => {
        if (facilityDataRes) {

          this.viewMode = true;
          this.userData?.facilities && this.userData?.facilities.length > 0 ? this.userData.facilities[0] = facilityDataRes : {};
          this.facilityData = facilityDataRes;
          this._storageService.saveTokens(facilityDataRes.token!);

          this.updateCustomerData(this.userData as customerResponse)
        }
      })
    )
  }
  // helper method
  private updateCustomerData(userData: customerResponse): void {
    this._userDataService.updateCustomerData(userData)
  }
  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res

      })
    )
  }
  onClickOnNext(): void {
    // this._registrationService.nextClickedEventEmmitter.emit();
    this.showSuccess('تم التسجيل بنجاح');
    // this.navigateToDashboard();
    this.navigateToLogin();
  }


  private navigateToDashboard(): void {
    this._router.navigate([`${Configuration.modules.wafi}`]);
  }
  onClickOnPrevious(): void {
    this.viewMode = false;
  }
  private navigateToLogin(): void {
    this._router.navigateByUrl(
      `${Configuration.modules.auth}/${Configuration.pages.auth.login}`
    );
  }
  showSuccess(msg: string) {
    this._toastrNotificatioService.showSuccess(msg);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

}
