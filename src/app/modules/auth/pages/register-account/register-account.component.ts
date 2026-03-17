import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Configuration } from 'src/app/core/configurations/shared.config';
import { RegistrationService } from '../../services/registration/registration.service';
import { RegistrationResponse, RegistrationStatus, YaqeenCustomer, customerResponse, nIdType, registration } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';

import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { PopupData, notePopupData } from 'src/app/shared/models/popup.model';
import { ToastrService } from 'ngx-toastr';
import { SignalRService } from 'src/app/core/services/signalR/signal-r.service';
import { LoginService } from '../../services/login/login.service';
import { LoginParams, UserType } from '../../models/login.model';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { IdentityStatus, UserTypeStatus } from '../../models/identity-status.model';
import { YaqeenService } from '../../services/yaqeen/yaqeen.service';

@Component({
    selector: 'app-register-account',
    templateUrl: './register-account.component.html',
    styleUrls: ['./register-account.component.scss'],
})
export class RegisterAccountComponent implements OnInit, OnDestroy {
    subscriptions: Subscription[] = [];
    errorFeedback: string = '';
    showValidation: boolean = false;
    showToastr: boolean = false;
    loginLink: string =
        '/' + Configuration.modules.auth + '/' + Configuration.pages.auth.login;
    RegistrationResponse: RegistrationResponse = {} as RegistrationResponse;
    registrationForm = this._formBuilder.group({
        nIdType: [0],
        nIdNumber: [
            '',
            [
                Validators.required,
                Validators.maxLength(10),
                Validators.minLength(10),
                Validators.pattern(Configuration.validators.numberOnly),
            ],
        ],
        // month: [0, [Validators.required]],
        // year: this._formBuilder.control<number | null>(null, [
        //     Validators.required,
        //     Validators.maxLength(4),
        //     Validators.minLength(4),
        //     Validators.pattern(Configuration.validators.numberOnly)])
    });
    setTimeout: any;
    receivedIdentityStatusSubscription!: Subscription;
    registerSubscription!: Subscription;

    get controls() {
        return this.registrationForm.controls;
    }
    get nIdType(): typeof nIdType {
        return nIdType
    }
    get RegistrationStatus(): typeof RegistrationStatus {
        return RegistrationStatus
    }
    localization = {
        NIDType: "نوع الهوية",
        resident: "مقيم",
        citizen: "مواطن",
        NIDNumberDisplayName: 'رقم الهوية',
        dateHejrie: 'تاريخ الميلاد الهجري',
        date: 'تاريخ الميلاد الميلادي',
        requiredErrorMsg: 'هذا الحقل مطلوب',
        maxLengthErrorMsg: 'يجب ألا يقل طول الحقل عن 10 أرقام',
        minLength4ErrorMsg: 'يجب ألا يقل طول الحقل عن 4 أرقام',
        verification: 'تحقق',
        pattern: 'يجب أن تكون القيمة بالأرقام فقط',
        minErrorMsg: 'هذا الحقل مطلوب',
        month: "شهر",
        year: "سنه",
        verificationMsg: "نأمل فتح تطبيق نفاذ و تأكيد الطلب بأختيار الرقم ",
        notificationMsg: "لم يتم التأكيد"
    };
    transactionId: string = ''
    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _registrationService: RegistrationService,
        private _userDataService: UserDataService,
        private _popupService: PopupService,
        private _storageService: StorageService,
        private _toastrService: ToastrService,
        private _yaqeenService: YaqeenService,
        private _signalRService: SignalRService,
        private loginService: LoginService,
    ) { }
    ngOnInit(): void {
        // this.openPopupOfValidationNumber(76);
        // this.setTimeOutToDismissDialog();
        this.observeCancelAction();
        this.observeNIdNumber();
        this.observeRegisterBS();
        this.observeReceivedIdentityStatusBS();
    }
    private observeNIdNumber(): void {
        this.subscriptions.push(
            this.controls.nIdNumber.valueChanges.subscribe(value => {
                if (value) {
                    // console.log(value[0])
                    if (value[0] == '1') { this.controls.nIdType.setValue(this.nIdType.citizen) }
                    if (value[0] == '2') { this.controls.nIdType.setValue(this.nIdType.resident) }
                }
            })
        )
    }
    public onClickOnVerification() {
        if (this.registrationForm.valid) {
            // add to behaviorSubject to call yaqeen
            this.updateRegistrationObjBs()
            let loginParams = {
                userName: this.registrationForm.value.nIdNumber,
                password: '',
                userType: UserType.client,
            } as LoginParams;

            this.loginService.LoginWithIAM(loginParams).subscribe(res => {
                if (res.data) {
                    this.openPopupOfValidationNumber(+res.data.nafathLoginData.random);
                    this.transactionId = res.data.nafathLoginData.transId;
                    this.invokeTransactionIdToRegister();
                } else {

                }
            })
        } else {
            this.showValidation = true
        }
    }
    // public onClickOnVerification() {
    //     if (this.registrationForm.valid) {
    //         // add to behaviorSubject to call yaqeen
    //         this.updateRegistrationObjBs()
    //         this.subscriptions.push(
    //             this._registrationService
    //                 .CustomerRegister(this.registrationForm.value as registration)
    //                 .subscribe((res: CoreResponseDTO<RegistrationResponse>) => {
    //                     if (res.data) {
    //                         this.RegistrationResponse = res.data;
    //                         this.updateRegistrationStatus(res.data.status);
    //                         switch (this.RegistrationResponse.status) {
    //                             case this.RegistrationStatus.wrongId:
    //                                 this.errorFeedback = 'هذا الرقم غير صحيح نأمل أعادة إدخال رقم الهوية';
    //                                 break;
    //                             case this.RegistrationStatus.customerIsExist:
    //                                 this.openDialog();
    //                                 break;
    //                             case this.RegistrationStatus.rightId:
    //                             case this.RegistrationStatus.existIdWithoutFacility:
    //                             case this.RegistrationStatus.isDelegator:
    //                                 this.openPopupOfValidationNumber(this.RegistrationResponse.nafathValidationNumber);
    //                                 this.transactionId = this.RegistrationResponse.transactionId;
    //                                 this.invokeTransactionIdToRegister();
    //                                 break;
    //                         }
    //                     }

    //                 })
    //         );
    //     } else {
    //         this.showValidation = true
    //     }
    // }
    private updateRegistrationObjBs() {
        this._registrationService.registrationObj.next(this.registrationForm.value as registration)
    }
    private updateRegistrationStatus(status: number) {
        this._registrationService.registrationStatus.next(status)
    }

    private navigateToDashboard(): void {
        this._router.navigate([`${Configuration.modules.wafi}`]);
    }

    private navigateToRegister(): void {
        this._router.navigateByUrl(
            `${Configuration.modules.auth}/${Configuration.pages.auth.registration}`
        );
    }
    private updateCustomerData(userData: customerResponse): void {
        this._userDataService.updateCustomerData(userData);
    }
    private emitUserDataUpdatedEventEmitter(customer: customerResponse): void {
        this._registrationService.userDataUpdatedEventEmitter.emit(customer);
    }

    private openDialog(): void {
        let noteObject = {
            icon: '!',
            title: '',
            staticMessage: 'تم إنشاء حساب بأستخدام هذا الرقم ',
            dynamicMessage: this.controls.nIdNumber.value as string,
            secondeStaticMessage: 'من قبل',
            // dynamicMessage: this.controls.nIdNumber.value as string,
            // secondeStaticMessage: 'في  انشاء حساب من قبل نأمل تسجيل الدخول ',
            buttonText: 'تسجيل الدخول',
            buttonLink: `${Configuration.modules.auth}/${Configuration.pages.auth.login}`,
        };
        this._popupService.updateNotePopupData(noteObject);
    }

    private openPopupOfValidationNumber(nafathValidationNumber: number) {
        this.showToastr = true;
        let Data = {
            panelClass: ['validation-number'],
            id: "NafathValidationNumberPopup",
            imagePath: 'assets/images/auth/ForgotPass.svg',
            title: this.localization.verificationMsg,
            staticMessage: "",
            dynamicMessage: nafathValidationNumber.toString(),
        } as notePopupData;
        this._popupService.updateNotePopupData(Data);
        this.setTimeOutToDismissDialog();
        // let Data = {
        //   title: "تحقق من نفاذ",
        //   id: "NafathValidationNumberPopup",
        //   component: NafathValidationNumberPopupComponent,
        //   buttons: [
        //   //   {
        //   //   icon: "",
        //   //   title: "إلغاء",
        //   //   actionType: ButtonType.cancel,
        //   //   isVisable: true,
        //   //   isDisables: false,
        //   // }
        // ]
        // } as PopupData;

        // this._popupService.updatePopupData(Data);
    }

    private setTimeOutToDismissDialog(): void {
        // for test
        // setTimeout(() => {
        //   this.dismissDialog();
        //   this.navigateToRegister()
        // }, 5000);
        // 120000 = 2min.
        this.setTimeout = setTimeout(() => {
            this.dismissDialog();
            this.unsubscribeReceivedIdentityStatusBS();
            this.unsubscribeRegisterBS();
        },
            120000);
    }
    private dismissDialog(): void {
        // if(this._popupService.NotePopupData.value.id=="NafathValidationNumberPopup"){
        this._popupService.dismissDialog();
        if (this.showToastr) this._toastrService.error(this.localization.notificationMsg);
        // }
    }
    private observeCancelAction() {
        this.subscriptions.push(
            this._popupService.cancelAction.subscribe((res: PopupData) => {
                if (res.id = "NafathValidationNumberPopup") {
                    this.showToastr = false;
                    // console.log("cancelAction", res)
                    // console.log("remove setInterval")
                }
            })
        )
    }
    private observeRegisterBS() {

        this.registerSubscription = this._signalRService.register$.subscribe((res: string) => {
            console.log("_signalRService.register$", res)
        })

    }
    private invokeTransactionIdToRegister() {
        console.log("this.transactionId", this.transactionId)
        this._signalRService.connectionIdentityHub
            .invoke('Register', this.transactionId)
            .catch((error: any) => {
                console.log(`identityHubUrl.Register() error: ${error}`);
            }
            );
    }
    private invokeTransactionIdToUnregister() {
        this._signalRService.connectionIdentityHub
            .invoke('UnRegister', this.transactionId)
            .catch((error: any) => {
                console.log(`identityHubUrl.UnRegister() error: ${error}`);
            }
            );
    }
    private observeReceivedIdentityStatusBS() {
        this.receivedIdentityStatusSubscription = this._signalRService.receivedIdentityStatus$.subscribe((res: any) => {
            console.log("_signalRService.receivedIdentityStatus$", res)
            this.invokeTransactionIdToUnregister();
            this._popupService.dismissDialog();

            if (res) {

                console.log(res);
                if (res.isValid  && res.transactionId==this.transactionId) {
                    
                    if (res.token != null) {
                        this._storageService.saveTokens(res.token);
                        this.navigateToDashboard();
                    }

                    if (res.userTypeStatus == UserTypeStatus.NewCustomer || res.userTypeStatus == UserTypeStatus.Delegator || res.userTypeStatus == UserTypeStatus.CustomerWithoutFacility) {

                        switch (res.userTypeStatus) {
                            case UserTypeStatus.NewCustomer:
                                this.updateRegistrationStatus(RegistrationStatus.rightId);
                                break;
                            case UserTypeStatus.Delegator:
                                this.updateRegistrationStatus(RegistrationStatus.isDelegator);
                                break;
                            case UserTypeStatus.CustomerWithoutFacility:
                                this.updateRegistrationStatus(RegistrationStatus.existIdWithoutFacility);
                                break;
                        }

                        let yaqeenCustomer = {
                            fullName: res.userInfoUpdated?.fullName,
                            shortName: res.userInfoUpdated?.firstName,
                            nidnumber: res.userInfoUpdated?.nationalId,
                            nationality: res.userInfoUpdated?.nationality
                        } as YaqeenCustomer;

                        this._yaqeenService.updateYaqeenCustomer(yaqeenCustomer);
                        if (res.userTypeStatus == RegistrationStatus.existIdWithoutFacility) {
                            let userData = {
                                id: res.id,
                                fullName: res.userInfoUpdated?.fullName,
                                nidnumber: res.userInfoUpdated?.nationalId,
                                isDelegator: res.userTypeStatus == UserTypeStatus.Delegator,
                                nationality: res.userInfoUpdated?.nationality,

                            } as customerResponse;
                            this.updateCustomerData(userData);
                            this.emitUserDataUpdatedEventEmitter(userData);
                        }
                        this.navigateToRegister();
                    }
                }
            }
        })

    }
    private unsubscribeReceivedIdentityStatusBS() {
        this.receivedIdentityStatusSubscription.unsubscribe()
    }
    private unsubscribeRegisterBS() {
        this.registerSubscription.unsubscribe()
    }

    ngOnDestroy(): void {
        clearTimeout(this.setTimeout);
        this.unsubscribeReceivedIdentityStatusBS();
        this.unsubscribeRegisterBS();
        this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
}
