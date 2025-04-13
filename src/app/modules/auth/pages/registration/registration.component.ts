import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map, mergeMap, switchMap } from 'rxjs';
import { LanguageService } from 'src/app/core/services/language/language.service';
import {
  RegistrationStatus,
  YaqeenCustomer,
  customerResponse,
  registration,
} from 'src/app/shared/models/customer.model';
import { orientationStepper } from 'src/app/shared/models/enums/stepper';
import { Step } from 'src/app/shared/models/stepper';
import { StepperService } from 'src/app/shared/services/stepper/stepper.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
// import { customerResponseBE, customerResponseFE } from '../../models/registration.model';
import { RegistrationService } from '../../services/registration/registration.service';
import { AddingCommercialRegisterNumberComponent } from '../../components/adding-commercial-register-number/adding-commercial-register-number.component';
import { AddingContactInfoComponent } from '../../components/adding-contact-info/adding-contact-info.component';
import { YaqeenService } from '../../services/yaqeen/yaqeen.service';
import { Direction } from 'src/app/core/models/enums/direction';
import { LoginUserTypeEnum } from '../../models/login.model';
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  subtitle: string = 'عليك استكمال بياناتك  لانشاء الحساب الشخصي';
  subscriptions: Subscription[] = [];
  bodyDirection: any = Direction.rtl;

  baseURl: string = '../assets/images/';
  wafiLogo: string = 'layout/sidebar/logo-herizontal.png';
  steps: Step[] = [];
  userData: customerResponse | null = null;
  yaqeenUserData: YaqeenCustomer | null = null;
  registrationObj: registration | null = null;
  localization = {
    title: 'مرحبا بك في منصة البيع على الخارطة ',
    natinalIdData: 'بيانات الهوية الشخصية ',
    nationalID: 'رقم الهوية ',
    fullName: 'الاسم بالكامل',
    nationality: 'الجنسية',
  };

  get RegistrationStatus(): typeof RegistrationStatus {
    return RegistrationStatus;
  }
  constructor(
    private _stepperService: StepperService,
    private _languageService: LanguageService,
    private _registrationService: RegistrationService,
    private _userDataService: UserDataService,
    private _storageService: StorageService,
    private _yaqeenService: YaqeenService
  ) { }
  ngOnInit(): void {
    this.observeRegistrationStatus();
    this.observeDirectionChange();
    this.observeEventEmitters();
    this.obseveCustomerData();
    this.observeRegistrationObjBs();
    this.observeYaqeenCustomer();
  }

  private observeRegistrationObjBs(): void {
    this.subscriptions.push(
      this._registrationService.registrationObj.subscribe(
        (res: registration | null) => {
          this.registrationObj = res;
          if (this.registrationObj) this.GetYakeenDetails();
        }
      )
    );
  }

  private GetYakeenDetails(): void {
    this.subscriptions.push(
      this._yaqeenService
        .getYakeenDetails(this.registrationObj as registration)
        .subscribe((res) => {
          if (res) this.updateYaqeenCustomer(res);
        })
    );
  }

  private updateYaqeenCustomer(yaqeenCustomer: YaqeenCustomer) {
    this._yaqeenService.updateYaqeenCustomer(yaqeenCustomer);
  }

  private observeYaqeenCustomer(): void {
    this.subscriptions.push(
      this._yaqeenService
        .getYaqeenCustomer()
        .subscribe((res: YaqeenCustomer | null) => {
          if (res) this.yaqeenUserData = res;
        })
    );
  }

  private observeRegistrationStatus(): void {
    this.subscriptions.push(
      this._registrationService.registrationStatus.subscribe(
        (status: RegistrationStatus | null) => {
          if (status) {
            switch (status) {
              case this.RegistrationStatus.existIdWithoutFacility:
                this.steps.push({
                  title: 'إضافة رقم السجل التجاري ',
                  Component: AddingCommercialRegisterNumberComponent,
                  state: '',
                  completed: true,
                  isEditable: true,
                  hasError: false,
                });

                break;
              case this.RegistrationStatus.isDelegator:
                this.steps.push({
                  title: 'بيانات التواصل ',
                  Component: AddingContactInfoComponent,
                  state: '',
                  completed: true,
                  isEditable: true,
                  hasError: false,
                });
                break;
              case this.RegistrationStatus.finalBeneficiary:
                this.steps.push({
                  title: 'بيانات التواصل ',
                  Component: AddingContactInfoComponent,
                  state: '',
                  completed: true,
                  isEditable: true,
                  hasError: false,
                });
                break;
              default:
                this.steps.push(
                  {
                    title: 'بيانات التواصل ',
                    Component: AddingContactInfoComponent,
                    state: '',
                    completed: true,
                    isEditable: true,
                    hasError: false,
                  },
                  {
                    title: 'إضافة رقم السجل التجاري ',
                    Component: AddingCommercialRegisterNumberComponent,
                    state: '',
                    completed: false,
                    isEditable: false,
                    hasError: false,
                  }
                );
                break;
            }
          }
          this.updateStepper();
        }
      )
    );
  }

  private observeDirectionChange(): void {
    this.subscriptions.push(
      this._languageService
        .observeDirection()
        .subscribe((direction: Direction) => {
          this.bodyDirection = Direction[direction];
        })
    );
  }
  private observeEventEmitters(): void {
    this.observeUserDataUpdatedEventEmitter();
    this.observeNextClickedEventEmmitter();
    this.observePreviousClickedEventEmmitter();
  }
  private updateStepper(): void {
    this._stepperService.updateSteps(this.steps);
    this._stepperService.updateOrientation(orientationStepper.horizontal);
  }
  private observeUserDataUpdatedEventEmitter(): void {
    this.subscriptions.push(
      this._registrationService.userDataUpdatedEventEmitter.subscribe(
        (data: customerResponse) => {
          this.moveToNextStep();
        }
      )
    );
  }
  private observeNextClickedEventEmmitter(): void {
    this.subscriptions.push(
      this._registrationService.nextClickedEventEmmitter.subscribe((res) => {
        this._stepperService.updateSteps(this.steps);
        this.moveToNextStep();
      })
    );
  }
  private observePreviousClickedEventEmmitter(): void {
    this.subscriptions.push(
      this._registrationService.previousClickedEventEmmitter.subscribe(
        (res) => {
          this.moveToPreviousStep();
        }
      )
    );
  }
  // helper method
  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;

          // console.log("res && res.facilities.length == 0 && !res.isDelegator && !this.RegistrationStatus", res && res.facilities.length == 0 && !res.isDelegator && !this.RegistrationStatus)
          // console.log("res ", res )
          // console.log("res && res.facilities.length == 0 ",res&& res.facilities.length == 0 )
          // console.log("res && res.facilities.length == 0 && !res.isDelegator ", res && res.facilities.length == 0 && !res.isDelegator )
          // console.log("res && res.facilities.length == 0 && !res.isDelegator && !this.RegistrationStatus", res && res.facilities.length == 0 && !res.isDelegator && !this.RegistrationStatus)
          // console.log("this.RegistrationStatus", this.RegistrationStatus)

          let loginUserType = this._storageService.getLoginUserType()
          let loginUserTypeEnum = Number(loginUserType) as LoginUserTypeEnum;

          if (res && (res.facilities == undefined || res.facilities == null || res.facilities.length == 0) && loginUserTypeEnum == LoginUserTypeEnum.wafiPartner) {
            this.steps.push({
              title: 'إضافة رقم السجل التجاري ',
              Component: AddingCommercialRegisterNumberComponent,
              state: '',
              completed: true,
              isEditable: true,
              hasError: false,
            });
          }
        })
    );
  }

  private moveToNextStep(): void {
    this._stepperService.stepperNext.emit();
  }
  private moveToPreviousStep(): void {
    this._stepperService.stepperPrevious.emit();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
