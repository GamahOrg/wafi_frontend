import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { BaseResponse } from 'src/app/shared/models/base-response';
import { environment } from 'src/environments/environment';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { OTPService } from 'src/app/shared/services/otp/otp.service';
import { EditProfileService } from '../../services/edit-profile/edit-profile.service';
import { VerificationOtpPopupComponent } from '../../component/verification-otp-popup/verification-otp-popup/verification-otp-popup.component';
import { LoginUserTypeEnum } from 'src/app/modules/auth/models/login.model';
import { StorageService } from 'src/app/core/services/storage/storage.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  editForm: FormGroup = new FormGroup({});
  subscriptions: Subscription[] = [];
  userData: customerResponse | null = null; 
  OTPInputValue: string | null = null;
  isMobile1Valid:boolean = false;
  isMobile2Valid:boolean = false;
  loginUserType: string | null =  "";
  loginUserTypeEnum:LoginUserTypeEnum | null = null;
  mobileValidating!:'mobile1'|'mobile2';
  localization = {
    save: 'حفظ البيانات',
    Mobile1: 'رقم الجوال',
    Mobile2: 'رقم الجوال 2 ( اختياري)',
    requiredErrorMsg: ' هذا حقل مطلوب ',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    nationality : 'الجنسية',
    nidnumber  : 'رقم الهوية',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
    email: 'البريد الإلكتروني',
    fullName : 'الاسم بالكامل',
    profilePic : 'صورة الملف الشخصي',
    pleaseVerifyYourMobile: 'من فضلك قم بالتحقق من OTP للرقم ',
    mobileNumberVerifiedSuccessfully: "تم التحقق بنجاح  "
  }
  baseUrl = `${environment.baseURL}/`;

  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;

  constructor(private fb: FormBuilder, private _editProfileService: EditProfileService, private _userDataService: UserDataService,
    private _toastrNotificatioService: ToastrNotificatioService,private _popupService: PopupService,
    private _OTPService: OTPService,private _storageService: StorageService,



  ) {
    this.createEditForm()
  }

  ngOnInit(): void {
    this.getLoginUserType();
    this.getUserData();
    this.observecancelAction();
    this.observeconfirmAction();
    this.observeOTPInputValue();
  }
  getLoginUserType(): void {
    this.loginUserType =  this._storageService.getLoginUserType()
    this.loginUserTypeEnum = Number(this.loginUserType ) as LoginUserTypeEnum;
    this.editForm.value.loginUserType = this.loginUserTypeEnum as LoginUserTypeEnum;
  }
  showSuccess(msg: string) {
    this._toastrNotificatioService.showSuccess(msg);
  }

  private getUserData() {
    this.subscriptions.push(
       this._userDataService.GetCustomer(this.loginUserTypeEnum as LoginUserTypeEnum).subscribe((res: customerResponse | null) => {
        this.userData = res;
        this.editForm.patchValue(this.userData as customerResponse);
        this._userDataService.updateCustomerData(res as customerResponse);
      })
    )
  }

  get controls() {
    return this.editForm.controls;
  }

  createEditForm(): void {
    this.editForm = this.fb.group({
      nidnumber: [{ value: '', disabled: true }],
      fullName: [{ value: '', disabled: true }],
      nationality: [{ value: '', disabled: true }],
      email: ['', [Validators.required, Validators.email]],
      mobile1: ['', [Validators.required, Validators.pattern(Configuration.validators.PhoneNumber),
      Validators.maxLength(10), Validators.minLength(10), Validators.pattern(Configuration.validators.numberOnly)]],
      mobile2: ['', [Validators.pattern(Configuration.validators.PhoneNumber),
      Validators.maxLength(10), Validators.minLength(10), Validators.pattern(Configuration.validators.numberOnly)]],
      profileImageFileId: [''],
      id:[''],
      loginUserType:[0]
    })
  }

  onFileUpload(fileData: any) {
    if (fileData.eventRes.data.length == 0) {
      this.editForm.patchValue({profileImageFileId :null});
      return;
    }
    this.editForm.patchValue({profileImageFileId :fileData.eventRes.data[0].id});
  }


  submit() {
    if (!this.editForm.valid)
      return;
     if(this.editForm.value.mobile1 != this.userData?.mobile1 && !this.isMobile1Valid) {
      this._OTPService.GenerateOTP(this.editForm.value.mobile1).subscribe((res: boolean) => {
        this._editProfileService.customerMobile.next(this.editForm.value.mobile1);
        this.mobileValidating = 'mobile1';
        this.openOTPDialog(this.editForm.value.mobile1);
      });
      return;
      }
      if(this.editForm.value.mobile2 != this.userData?.mobile2 && this.editForm.value.mobile2.length>0 && !this.isMobile2Valid) {
        this._OTPService.GenerateOTP(this.editForm.value.mobile2).subscribe((res: boolean) => {
          this._editProfileService.customerMobile.next(this.editForm.value.mobile2);
          this.mobileValidating = 'mobile2';
          this.openOTPDialog(this.editForm.value.mobile2);
        });
        return;
     }
    
    this.subscriptions.push(
      this._editProfileService.UpdateCustomer(this.editForm.value).subscribe((res: BaseResponse<any>) => {
        if (res.isDone) {
          this.getUserData();
          this.isMobile1Valid=false;
          this.isMobile2Valid=false;
          this.showSuccess('تم التعديل بنجاح')
        }
      })
    )
  }

  
  private observeOTPInputValue(): void {
    this.subscriptions.push(
      this._OTPService.getOTPInputValue().subscribe((res: string | null) => {
        this.OTPInputValue = res; 
      })
    )
  }
 
  private openOTPDialog(mobileNumber: number): void {
    let popupData = {
      data : mobileNumber, 
      title: `${this.localization.pleaseVerifyYourMobile} ${mobileNumber}`,
      component: VerificationOtpPopupComponent,
      buttons: [{ 
        icon: "",
        title: "إلغاء",
        actionType: ButtonType.cancel,
        isVisable: true,
        isDisables: false,
        // onclick: () => this.openNotesDialog()
      },
      {
        icon: "",
        title: "تحقق",
        actionType: ButtonType.confirm,
        isVisable: true,
        isDisables: false,
        // onclick: () => this.openAssignEmployeeDialog()
      }]
    };
    this._popupService.updatePopupData(popupData as PopupData);
  } 

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.ValidateOTP(this._editProfileService.customerMobile.value as string, this.OTPInputValue as string)
       
      })
    )
  }

  private ValidateOTP(mobileNumber: string , OTP: string): void {
    this.subscriptions.push(
      this._OTPService.ValidateOTP(mobileNumber, OTP).subscribe((res: boolean) => {
        if (res) {
          this.closeDialog();
          this._toastrNotificatioService.showSuccess(this.localization.mobileNumberVerifiedSuccessfully);
          if(this.mobileValidating == 'mobile1')
            this.isMobile1Valid = true;
          else if(this.mobileValidating == 'mobile2')
            this.isMobile2Valid = true;

          this.submit();
        }
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
