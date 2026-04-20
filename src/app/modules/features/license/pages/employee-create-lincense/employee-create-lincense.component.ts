import { Component } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { EmployeeFacilityRegistrationDto } from 'src/app/shared/models/customer.model';
import { EmployeeCreateLicenseService } from '../../services/employee-create-lincense.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-employee-create-lincense',
  templateUrl: './employee-create-lincense.component.html',
  styleUrls: ['./employee-create-lincense.component.scss']
})

export class EmployeeCreateLincenseComponent {
  subscriptions: Subscription[] = [];
  viewMode: boolean = false;
  employeeFacilityRegistration: EmployeeFacilityRegistrationDto = new EmployeeFacilityRegistrationDto;
  facilityId: string | null = null;

  facilityForm = this._formBuilder.group({
    nationalNumber: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(Configuration.validators.numberOnly)]],
  });

  get nationalNumber(): FormControl {
    return this.facilityForm.controls.nationalNumber
  }

  localization = {
    commercialRegistrationNo: "رقم السجل التجاري",
    nationalNumber: "الرقم الوطنى للسجل التجارى",
    alert: "تم التحقق من الرقم الوطني للسجل التجاري   من قبل وزارة التجارة",
    title: "البيانات الخاصة بالرقم الوطني للسجل التجاري التي تم استرجاعها من قبل وزارة التجارة",
    startDateLabel: "تاريخ إصدار السجل التجاري",
    endDateLabel: "تاريخ إنتهاء السجل التجاري",
    facilityData: "بيانات المنشأة ",
    facilityType: "نوع المنشأة",
    facilityName: "اسم المنشأة",
    facilityActivities: "نشاط / انشطة المنشأة",
    requiredErrorMsg: 'حقل مطلوب',
    maxLengthErrorMsg: "طول الارقام يجب الا يزيد عن 20 رقم",
    verification: "تحقق",
    pattern: "accept no. only",
    createNewLicense: "انشاء رخصة",
    previous: "السابق"
  }
  constructor(
    private _router: Router,
    private _toastrNotificatioService: ToastrNotificatioService,
    private _formBuilder: FormBuilder,
    private _employeeCreateLincenseService: EmployeeCreateLicenseService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
  ) { }

  ngOnInit(): void {
    // this.obseveCustomerData();
  }

  onClickOnVerification() {
    this.subscriptions.push(
      this._employeeCreateLincenseService.FacilityRegister(this.nationalNumber.value).subscribe((employeeFacilityRegistrationRes: EmployeeFacilityRegistrationDto | null) => {
        if (employeeFacilityRegistrationRes) {

          this.viewMode = true;
          this.employeeFacilityRegistration = employeeFacilityRegistrationRes;
        }
      })
    )
  }

  createFacility(): void {
    if (this.employeeFacilityRegistration.isNewFacility) {
      this.subscriptions.push(
        this._employeeCreateLincenseService.CreateFacility(this.employeeFacilityRegistration.facilityRegistration).subscribe((res: string | null) => {
          if (res) {
            this.facilityId = res ? res : '00000000-0000-0000-0000-000000000000';
            this._sharedLicenseProjectService.setfacilityIdInLocalStorage(this.facilityId);
            this.navigateToLicenseTypes();
          }
        }))
    } else {
      this._sharedLicenseProjectService.setfacilityIdInLocalStorage(this.employeeFacilityRegistration.facilityRegistration.id);
      this.navigateToLicenseTypes();
    }
  }

  private navigateToLicenseTypes(): void {
    this._router.navigateByUrl(
      `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseTypes}`
    );
  }

  onClickOnPrevious(): void {
    this.viewMode = false;
  }

  showSuccess(msg: string) {
    this._toastrNotificatioService.showSuccess(msg);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

}
