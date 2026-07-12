import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { SocialInsuranceEmployeeLockUpList } from 'src/app/shared/models/social-insurance-employee-lock-up-list';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { QualificationCertifiedEngineerCreateUpdateDto } from '../../dataModels/qualification-certified-engineer-create-update-dto';
import { CertifiedEngineerService } from '../../services/QualificationCertifiedEngineer/certified-engineer.service';
import { SocialInsuranceEmployeeListService } from '../../services/QualificationSocialInsuranceEmployeeList/social-insurance-employee-list.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { CertifiedEngineerDto } from '../../dataModels/certified-engineer-dto';
import { QualificationEngineerType } from '../../dataModels/qualification-engineer-type.model';
import { ErrorCodes } from 'src/app/core/models/core.model';

@Component({
  selector: 'app-wafi-training-engineers-form',
  templateUrl: './wafi-training-engineers-form.component.html',
  styleUrls: ['./wafi-training-engineers-form.component.scss']
})
export class WafiTrainingEngineersFormComponent implements OnInit, OnDestroy {
  userData: customerResponse | null = null;
  models: CertifiedEngineerDto[] = [] as CertifiedEngineerDto[];
  subscriptions: Subscription[] = [];
  readonly QualificationEngineerTypeEnum = QualificationEngineerType;
  qualificationCertifiedEngineerDto: QualificationCertifiedEngineerCreateUpdateDto = new QualificationCertifiedEngineerCreateUpdateDto();
  socialInsuranceEmployeeList: SocialInsuranceEmployeeLockUpList[] = [];
  qualificationCertifiedEngineersForm = this._formBuilder.group({
    identityNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    hasCourses: [true],
    engineerType: [QualificationEngineerType.Employee as number],
  });
  showValidation = false;
  errorMessage: string | null = null;

  constructor(
    private _formBuilder: FormBuilder,
    private certifiedEngineerService: CertifiedEngineerService,
    private socialInsuranceEmployeeListService: SocialInsuranceEmployeeListService,
    private _userDataService: UserDataService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeCertifiedEngineerObj();
    this.GetByFacilityId();
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res;
        if (this.userData) {
          this.GetLockUpEmps();
        }
      })
    );
  }

  GetLockUpEmps() {
    this.subscriptions.push(
      this.socialInsuranceEmployeeListService.getByFacilityId(this.userData?.facilities[0].id as string).subscribe((res) => {
        this.socialInsuranceEmployeeList = res;
      })
    );
  }

  observeCertifiedEngineerObj(): void {
    this.subscriptions.push(
      this.certifiedEngineerService.getCertifiedEngineerObj().subscribe((Engineer) => {
        if (Engineer && (Object.keys(Engineer).length != 0))
          this.getCertifiedEngineerObj(Engineer.id);
      })
    );
  }

  getCertifiedEngineerObj(id: string) {
    this.subscriptions.push(
      this.certifiedEngineerService.GetById(id).subscribe((res) => {
        if (res) {
          this.qualificationCertifiedEngineerDto = res;
          this.qualificationCertifiedEngineersForm.patchValue(this.qualificationCertifiedEngineerDto as any);
        }
      })
    );
  }

  delete(id: string) {
    this.subscriptions.push(
      this.certifiedEngineerService.Delete(id).subscribe(res => {
        if (res.isDone) {
          this.GetByFacilityId();
          this.certifiedEngineerService.setCertifiedEngineerList(this.models.filter(m => m.id !== id));
        }
      })
    );
  }

  GetByFacilityId() {
    this.subscriptions.push(
      this.certifiedEngineerService.GetFacilityByIdWithCourses(this.userData?.facilities[0].id as string).subscribe(res => {
        this.models = res as CertifiedEngineerDto[];
      })
    );
  }



  save(): void {
    if (this.qualificationCertifiedEngineersForm?.invalid) {
      this.showValidation = true;
      this._toastrNotificationService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.qualificationCertifiedEngineersForm?.markAllAsTouched();
      return;
    }


    const formValues = this.qualificationCertifiedEngineersForm.getRawValue();
    this.qualificationCertifiedEngineerDto.identityNumber = formValues.identityNumber as string;
    this.qualificationCertifiedEngineerDto.hasCourses = formValues.hasCourses as boolean;
    this.qualificationCertifiedEngineerDto.qualificationEngineerType = formValues.engineerType as number;
    this.qualificationCertifiedEngineerDto.facilityId = this.userData?.facilities[0].id as string;
    this.qualificationCertifiedEngineerDto.id = this.qualificationCertifiedEngineerDto.id ? this.qualificationCertifiedEngineerDto.id : "00000000-0000-0000-0000-000000000000";
    this.subscriptions.push(
      this.certifiedEngineerService.SaveWithCourses(this.qualificationCertifiedEngineerDto).subscribe(res => {
        if (res.isDone) {
          this.models = res.data as CertifiedEngineerDto[];
          this.certifiedEngineerService.setCertifiedEngineerList(this.models);
          this.qualificationCertifiedEngineerDto = new QualificationCertifiedEngineerCreateUpdateDto();
          this.qualificationCertifiedEngineersForm.reset({
            identityNumber: '',
            hasCourses: true,
            engineerType: QualificationEngineerType.Employee as number,
          });
          this.showValidation = false;
          this.errorMessage = null;

        } else {
          this.errorMessage =
            res.errorCode == ErrorCodes.RequiredCourseNotCompleted
              ? 'عذرًا، لا يمكن إضافة هذا الموظف إلى قائمة الحاصلين على التدريب؛ لعدم اجتياز الدورة التدريبية المطلوبة لدى المعهد العقاري.'
              : res.message?.trim() || 'حدث خطأ، يرجى المحاولة مرة أخرى';

        }
      })
    );
  }

  onIdentityNumberInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const digitsOnly = input.value.replace(/\D/g, '');
    if (input.value !== digitsOnly) {
      this.controls.identityNumber.setValue(digitsOnly);
    }
  }

  get controls() {
    return this.qualificationCertifiedEngineersForm.controls;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
