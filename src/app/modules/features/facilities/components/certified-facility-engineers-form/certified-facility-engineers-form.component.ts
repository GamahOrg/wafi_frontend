import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { customerResponse, FacilityTypeCategory } from 'src/app/shared/models/customer.model';
import { SocialInsuranceEmployeeLockUpList } from 'src/app/shared/models/social-insurance-employee-lock-up-list';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { QualificationCertifiedEngineerCreateUpdateDto } from '../../dataModels/qualification-certified-engineer-create-update-dto';
import { CertifiedEngineerService } from '../../services/QualificationCertifiedEngineer/certified-engineer.service';
import { SocialInsuranceEmployeeListService } from '../../services/QualificationSocialInsuranceEmployeeList/social-insurance-employee-list.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { CertifiedEngineerDto } from '../../dataModels/certified-engineer-dto';
import { ErrorCodes } from 'src/app/core/models/core.model';
import { QualificationEngineerType } from '../../dataModels/qualification-engineer-type.model';

@Component({
  selector: 'app-certified-facility-engineers-form',
  templateUrl: './certified-facility-engineers-form.component.html',
  styleUrls: ['./certified-facility-engineers-form.component.scss']
})
export class CertifiedFacilityEngineersFormComponent implements OnInit, OnDestroy {
  userData: customerResponse | null = null;
  models: CertifiedEngineerDto[] = [] as CertifiedEngineerDto[];
  subscriptions: Subscription[] = [];
  facilityTypeCategory: FacilityTypeCategory | null = null;
  readonly FacilityTypeCategoryEnum = FacilityTypeCategory;
  qualificationCertifiedEngineerDto: QualificationCertifiedEngineerCreateUpdateDto = new QualificationCertifiedEngineerCreateUpdateDto();
  socialInsuranceEmployeeList: SocialInsuranceEmployeeLockUpList[] = [];
  qualificationCertifiedEngineersForm = this._formBuilder.group({
    identityNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    hasCourses: [false],
  });
  showValidation = false;
  /**
   *
   */
  constructor(
    private _formBuilder: FormBuilder,
    private certifiedEngineerService: CertifiedEngineerService,
    private socialInsuranceEmployeeListService: SocialInsuranceEmployeeListService,
    // public dialogRef: MatDialogRef<PopupComponent>,
    private _userDataService: UserDataService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeCertifiedEngineerObj();
    this.observePopupEvents()
    this.GetByFacilityId();
  }

  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save()
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        if (this.userData) {
          // this.GetByFacilityId();
          this.GetLockUpEmps()
          if (this.userData.facilities && this.userData.facilities.length > 0) {
            this.facilityTypeCategory = this.userData.facilities[0].facilityTypeCategory ?? null;
          }
        }
      })
    )
  }

  GetLockUpEmps() {
    this.subscriptions.push(
      this.socialInsuranceEmployeeListService.getByFacilityId(this.userData?.facilities[0].id as string).subscribe((res) => {
        this.socialInsuranceEmployeeList = res;
      })
    )
  }

  observeCertifiedEngineerObj(): void {
    this.subscriptions.push(
      this.certifiedEngineerService.getCertifiedEngineerObj().subscribe((Engineer) => {
        if (Engineer && (Object.keys(Engineer).length != 0))
          this.getCertifiedEngineerObj(Engineer.id);
      })
    )
  }

  getCertifiedEngineerObj(id: string) {
    this.subscriptions.push(
      this.certifiedEngineerService.GetById(id).subscribe((res) => {
        if (res) {
          this.qualificationCertifiedEngineerDto = res;
          this.qualificationCertifiedEngineersForm.patchValue(this.qualificationCertifiedEngineerDto as any);
        }
      })
    )
  }

  delete(id: string) {
    this.subscriptions.push(
      this.certifiedEngineerService.Delete(id).subscribe(res => {
        if (res.isDone) {
          this.GetByFacilityId();
          this.certifiedEngineerService.setCertifiedEngineerList(this.models.filter(m => m.id !== id));
        }
      })
    )
  }

  GetByFacilityId() {
    this.subscriptions.push(
      this.certifiedEngineerService.GetAllFacilityById(this.userData?.facilities[0].id as string).subscribe(res => {
        //this.models = res as CertifiedEngineerDto[];

         const list = res as CertifiedEngineerDto[];
                 switch (this.facilityTypeCategory) {
                case FacilityTypeCategory.Accountant:
                  this.models = list.filter(x=>x.qualificationEngineerType==QualificationEngineerType.Accountant);
                  break;
               case FacilityTypeCategory.Engineering:
                  this.models = list.filter(x=>x.qualificationEngineerType==QualificationEngineerType.Engineering);
                  break;
                   case FacilityTypeCategory.Developer:
                  this.models = list.filter(x=>x.qualificationEngineerType==QualificationEngineerType.Developer);
                  break;
                default:
                  this.models = list
                  break;
                 }
      })
    )
  }

  private getQualificationEngineerType(): number {
    const facilityTypeCategory = this.userData?.facilities[0]?.facilityTypeCategory;
    // Accountant → QualificationEngineerType.Accountant = 2
    // Engineering/Developer → QualificationEngineerType.Engineering = 1
    if (facilityTypeCategory === FacilityTypeCategory.Accountant) {
      return 2;
    } else if (facilityTypeCategory === FacilityTypeCategory.Developer) {
      return 3;
    }
    return 1;
  }

  isDeveloper(): boolean {
    const facilityTypeCategory = this.userData?.facilities[0]?.facilityTypeCategory;
    return facilityTypeCategory === FacilityTypeCategory.Developer;
  }

  get trainingName(): string {
    switch (this.facilityTypeCategory) {
      case FacilityTypeCategory.Developer:
        return 'المطور العقاري لمشاريع البيع على الخارطة';
      case FacilityTypeCategory.Accountant:
        return 'المحاسب القانوني لمشاريع البيع على الخارطة';
      case FacilityTypeCategory.Engineering:
        return 'الاستشاري الهندسي لمشاريع البيع على الخارطة';
      default:
        return 'الدورة التدريبية المطلوبة';
    }
  }

  isRequiredCourseNotCompleted = false;
  save(): void {
    this.isRequiredCourseNotCompleted=false;
    if (this.qualificationCertifiedEngineersForm?.invalid) {
      this.showValidation = true;
      this._toastrNotificationService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.qualificationCertifiedEngineersForm?.markAllAsTouched();
      return;
    }
    const formValues = this.qualificationCertifiedEngineersForm.getRawValue();
    this.qualificationCertifiedEngineerDto.identityNumber = formValues.identityNumber as string;
    this.qualificationCertifiedEngineerDto.hasCourses = formValues.hasCourses as boolean;
    this.qualificationCertifiedEngineerDto.qualificationEngineerType = this.getQualificationEngineerType();
    this.qualificationCertifiedEngineerDto.facilityId = this.userData?.facilities[0].id as string;
    this.qualificationCertifiedEngineerDto.id = this.qualificationCertifiedEngineerDto.id ? this.qualificationCertifiedEngineerDto.id : "00000000-0000-0000-0000-000000000000";
    this.subscriptions.push(
      this.certifiedEngineerService.Save(this.qualificationCertifiedEngineerDto).subscribe(res => {
        if (res.isDone) {
          this.certifiedEngineerService.setCertifiedEngineerList(res.data as CertifiedEngineerDto[]);
          this.closeDialog();
        } else {
          if(res.errorCode)
          this.isRequiredCourseNotCompleted = res.errorCode == ErrorCodes.RequiredCourseNotCompleted;
        }
      })
    )
  }

  saveAndAddNew(): void {
    this.isRequiredCourseNotCompleted = false;
    if (this.qualificationCertifiedEngineersForm?.invalid) {
      this.showValidation = true;
      this._toastrNotificationService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.qualificationCertifiedEngineersForm?.markAllAsTouched();
      return;
    }
    const formValues = this.qualificationCertifiedEngineersForm.getRawValue();
    this.qualificationCertifiedEngineerDto.identityNumber = formValues.identityNumber as string;
    this.qualificationCertifiedEngineerDto.hasCourses = formValues.hasCourses as boolean;
    this.qualificationCertifiedEngineerDto.qualificationEngineerType = this.getQualificationEngineerType();
    this.qualificationCertifiedEngineerDto.facilityId = this.userData?.facilities[0].id as string;
    this.qualificationCertifiedEngineerDto.id = this.qualificationCertifiedEngineerDto.id ? this.qualificationCertifiedEngineerDto.id : "00000000-0000-0000-0000-000000000000";
    this.subscriptions.push(
      this.certifiedEngineerService.Save(this.qualificationCertifiedEngineerDto).subscribe(res => {
        if (res.isDone) {
          this.certifiedEngineerService.setCertifiedEngineerList(res.data as CertifiedEngineerDto[]);
          this.GetByFacilityId();
          this.qualificationCertifiedEngineerDto = new QualificationCertifiedEngineerCreateUpdateDto();
          this.qualificationCertifiedEngineersForm.reset({ identityNumber: '', hasCourses: false });
          this.showValidation = false;
        } else {
          if (res.errorCode)
            this.isRequiredCourseNotCompleted = res.errorCode == ErrorCodes.RequiredCourseNotCompleted;
        }
      })
    )
  }


  get controls() {
    return this.qualificationCertifiedEngineersForm.controls;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}


