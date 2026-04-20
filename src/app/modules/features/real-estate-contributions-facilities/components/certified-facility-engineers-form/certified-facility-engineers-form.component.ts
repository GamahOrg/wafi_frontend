import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
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

@Component({
  selector: 'app-certified-facility-engineers-form',
  templateUrl: './certified-facility-engineers-form.component.html',
  styleUrls: ['./certified-facility-engineers-form.component.scss']
})
export class CertifiedFacilityEngineersFormComponent implements OnInit, OnDestroy {
  userData: customerResponse | null = null;
  subscriptions: Subscription[] = [];
  qualificationCertifiedEngineerDto: QualificationCertifiedEngineerCreateUpdateDto = new QualificationCertifiedEngineerCreateUpdateDto();
  socialInsuranceEmployeeList: SocialInsuranceEmployeeLockUpList[] = [];
  qualificationCertifiedEngineersForm = this._formBuilder.group({
    identityNumber: ['', [Validators.required]],
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
    public toastService: ToastrNotificatioService,
  ) {
  }

  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeCertifiedEngineerObj();
    this.observePopupEvents()
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

  private getQualificationEngineerType(): number {
    const facilityTypeCategory = this.userData?.facilities[0]?.facilityTypeCategory;
    // Accountant facility type → QualificationEngineerType.Accountant = 2
    // Engineering/Developer → QualificationEngineerType.Engineering = 1
    if (facilityTypeCategory === FacilityTypeCategory.Accountant) {
      return 2;
    }else if (facilityTypeCategory === FacilityTypeCategory.Developer) {
      return 3;
    }
    return 1;
  }

    isDeveloper(): boolean {
  const facilityTypeCategory = this.userData?.facilities[0]?.facilityTypeCategory;
  return facilityTypeCategory === FacilityTypeCategory.Developer;
}

  save(): void {
    if (!this.qualificationCertifiedEngineersForm.valid) {
      this.toastService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.showValidation = true;
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
        if (res.isDone && res.data) {
          this.certifiedEngineerService.setCertifiedEngineerList(res.data as CertifiedEngineerDto[]);
          this.closeDialog();
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
