import { Component } from '@angular/core';
import { LicenseRequestTypeService } from '../../services/license-request-type.service';
import { SysLicenseRequestTypeDto } from '../../models/sys-license-request-type-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LicenseRequestService } from '../../services/license-request.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import {
  RequestSuccessResponse,
  RequestValidation,
} from '../../dataModels/request-validation.model';
import {
  PopupData,
  confirmationPopupData,
  notePopupData,
} from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseRequestValidationPopupComponent } from '../../components/license-request-validation-popup/license-request-validation-popup.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { LicenseRequestTypeTypeCodeEnum } from '../../enums/license-requestType-typeCode.model';

@Component({
  selector: 'app-create-license',
  templateUrl: './create-license.component.html',
  styleUrls: ['./create-license.component.scss'],
})
export class CreateLincenseComponent {
  requestSummeryLink: string =
    `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseSummary}` as string;
  requestTypeCode: string = '';
  subscriptions: Subscription[] = [];
  createRequstForm = this._formBuilder.group({
    priod: this._formBuilder.control<number | null>(null, [Validators.required,]),
  });
  showValidation: boolean = false;
  licenseRequestType: SysLicenseRequestTypeDto = new SysLicenseRequestTypeDto();
  price: Number = 0;
  periodTypeId: string = '';
  userData: customerResponse | null = null;

  get controls() {
    return this.createRequstForm.controls;
  }
  renewLicense: boolean = false;
  licenseProjectId: string = '';
  facilityId: string = '';
  requestStudyingDuration: any
  paymentMethod: string = ''

  constructor(
    private _formBuilder: FormBuilder,
    private _licenseRequestTypeService: LicenseRequestTypeService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _licenseRequestService: LicenseRequestService,
    private _userDataService: UserDataService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService
  ) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeRouterParams();
    this.getRequestTypeCode();
    this.observeconfirmAction();
    this.getFacilityId();
  }
  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.CheckCreateOrRenewLicense();
        this._popupService.closeDialog.emit();
      })
    );
  }
  private getLicenseProjectId(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage() as string;
  }
  private getFacilityId(): void {
    this.facilityId =
      this._sharedLicenseProjectService.getFacilityIdFromLocalStorage() as string;
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
        })
    );
  }

  observeRouterParams() {
    this.subscriptions.push(
      this._activatedRoute.params.subscribe((params) => {
        this.requestTypeCode = params['code'];
        this.renewLicense =
          this._activatedRoute.snapshot.url[0].path ==
          Configuration.pages.license.renewLincense;
        console.log(
          'this._activatedRoute.snapshot.url[0].path',
          this._activatedRoute.snapshot.url[0].path
        );
        console.log(
          'Configuration.pages.license.renewLincense',
          Configuration.pages.license.renewLincense
        );
        console.log('this.renewLicense', this.renewLicense);
        if (this.renewLicense) {
          this.getLicenseProjectId();
          this.getFacilityId();
        }
              
        this.updateDataWhenFawria();
      })
    )
  }


  updateDataWhenFawria(){
    if(this.requestTypeCode  == 'FSRSU'){
      this.requestStudyingDuration = 'فورية'
      this.paymentMethod = 'طريقة الدفع'
    }else{
      this.requestStudyingDuration = this.licenseRequestType.requestStudyingDuration
      this.paymentMethod = 'طريقة الدفع'
    }
  }

  getRequestTypeCode(): void {
    if (this.requestTypeCode) {
      this.GetByCode();
    }
  }

  navigate() {
    this._router.navigate([this.requestSummeryLink]);
  }

  GetByCode(): void {
    this.subscriptions.push(
      this._licenseRequestTypeService
        .GetByCode(this.requestTypeCode, this.renewLicense)
        .subscribe((res) => {
          if (res) {
            this.licenseRequestType = res;

            // If requestTypeCode is 'FSRSU', set first item as default and disable
            if (this.requestTypeCode === 'FSRSU' && this.licenseRequestType.licenseRequestPeriods && this.licenseRequestType.licenseRequestPeriods.length > 0) {
              const firstItem = this.licenseRequestType.licenseRequestPeriods[0];
              this.createRequstForm.patchValue({
                priod: firstItem.period
              });
              this.price = firstItem.price;
              this.periodTypeId = firstItem.sysPeriodType?.id as string;
              this.controls.priod.disable();
            }
          }
          console.log(this.licenseRequestType);
        })
    );
  }
  /**
   * CreateOrRenewLicense
   */
  public CreateOrRenewLicense(): void {
    const formValue = this.createRequstForm.getRawValue();
    if (formValue.priod) {
      if (this.licenseRequestType.typeCode == LicenseRequestTypeTypeCodeEnum.SellRealEstateUnits ||
        this.licenseRequestType.typeCode == LicenseRequestTypeTypeCodeEnum.Fawria
      ) {
        this.showSRSULicenseRequestTypeWarnings();
      } else {
        this.CheckCreateOrRenewLicense();
      }
    } else {
      this.showValidation = true;
    }
  }
  CheckCreateOrRenewLicense() {
    if (this.renewLicense) {
      this.renew();
    } else {
      this.Create();
    }
  }
  private showSRSULicenseRequestTypeWarnings() {
    let deleteConfirmationObj: confirmationPopupData = {
      staticMessage: `يجب على المنشأة إضافة مفوض للتوقيع على وثيقة الصرف عن طريق "إدارة المنشأة"
                <br/> يجب أن يكون لدى الاستشاري الهندسي حساب في منصة البيع على الخارطة وبأن يكون مؤهل
                <br/> يجب أن يكون لدى المحاسب القانوني حساب في منصة البيع على الخارطة وبأن يكون مؤهل`,
      dynamicMessage: '',
      secondeStaticMessage: '',
      title:
        'تقديم طلب رخصة بيع على الخارطة يجب الحرص على تحقيق الشروط التالية:',
    };
    this._popupService.updateConfirmationPopupData(
      deleteConfirmationObj,
      '50vw',
      '30vh'
    );
  }
  private renew(): void {
    const formValue = this.createRequstForm.getRawValue();
    this.subscriptions.push(
      this._licenseRequestService
        .renew(
          this.facilityId as string,
          this.requestTypeCode,
          formValue.priod as number,
          this.periodTypeId as string,
          this.licenseProjectId
        )
        .subscribe((res: RequestValidation | RequestSuccessResponse | null) => {
          if (res) {
            if ('id' in res && 'requestCode' in res) {
              // this.requestSubmittedSuccessfully=true;
              this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(
                res.id
              );
              this.openConfirmaDialog(res.requestCode as string);
              this._sharedLicenseProjectService.removeFacilityIdfromLocalStorage();
              this._sharedLicenseProjectService.removeLicenseProjectIdfromLocalStorage();
            } else {
              this.updateRequestValidation(res as RequestValidation);
              this.openValidationDialog();
            }
          }
        })
    );
  }
  openConfirmaDialog(res: string): void {
    let Data = {
      imagePath: 'assets/images/auth/ForgotPass-rega.svg',
      title: 'تم إنشاء طلب التجديد',
      staticMessage: 'تم انشاء طلب التجديد بنجاح ويمكنك عرض الطلب',
      dynamicMessage: res,
      buttonText: 'عرض الطلب',
      buttonLink:
        Configuration.modules.wafi +
        '/' +
        Configuration.modules.license +
        '/' +
        Configuration.pages.license.lincenseDetails,
    } as notePopupData;
    this._popupService.updateNotePopupData(Data);
  }
  openValidationDialog(): void {
    let Data = {
      title: `التحقق من بيانات المشروع`,
      component: LicenseRequestValidationPopupComponent,
      id: 'LicenseRequestValidationPopupComponent',
      buttons: [
        {
          icon: '',
          title: 'إلغاء',
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openNotesDialog()
        },
        {
          icon: '',
          title: 'إستكمال البيانات',
          actionType: ButtonType.confirm,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openAssignEmployeeDialog()
        },
      ],
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  private updateRequestValidation(data: RequestValidation) {
    this._licenseRequestService.updateRequestValidation(
      data as RequestValidation
    );
  }
  Create(): void {
    const formValue = this.createRequstForm.getRawValue();

    if (this.facilityId == '00000000-0000-0000-0000-000000000000' || this.facilityId == null)
      this.facilityId = this.userData?.facilities[0].id as string;

    // this.subscriptions.push(
    //   this._licenseRequestService.CreateLicense(this.facilityId as string, this.requestTypeCode,
    //     formValue.priod as number, this.periodTypeId as string, this.controls.startDate.value as Date)
    //     .subscribe((res) => {
    //       if (res) {

    //         this.setProjectIdInlocalStorage(res);
    //         this.navigate();
    //       }
    //     })
    // );

    this.subscriptions.push(
      this._licenseRequestService.Create(this.facilityId as string, this.requestTypeCode,
        formValue.priod as number, this.periodTypeId as string)
        .subscribe((res) => {
          if (res) {
            this.setProjectIdInlocalStorage(res);
            this.navigate();
          }
        })
    );
  }
  private setProjectIdInlocalStorage(projectId: string): void {
    this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
      projectId
    );
  }

  changePriod(data: any) {
    if (data.target.value === '') {
      this.price = 0;
    } else {
      let priod = data.target.value;
      this.price = this.licenseRequestType.licenseRequestPeriods.filter(
        (x) => x.period == priod
      )[0].price;

      this.periodTypeId = this.licenseRequestType?.licenseRequestPeriods.filter(
        (x) => x.period == priod
      )[0].sysPeriodType?.id as string;
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
