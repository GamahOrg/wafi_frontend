import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { SocialInsuranceEmployeeLockUpList } from 'src/app/shared/models/social-insurance-employee-lock-up-list';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { QualificationQualifiedAccountantCreateUpdateDto } from '../../dataModels/qualification-qualified-accountant-create-update-dto';
import { QualificatedAccountantService } from '../../services/QualificationQualificatedAccountant/qualificated-accountant.service';
import { SocialInsuranceEmployeeListService } from '../../services/QualificationSocialInsuranceEmployeeList/social-insurance-employee-list.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { Router } from '@angular/router';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { QualificationQualificatedAccountantDto } from '../../dataModels/qualification-qualificated-accountant-dto';
import { CertifiedEngineerDto } from '../../dataModels/certified-engineer-dto';
import { CertifiedEngineerService } from '../../services/QualificationCertifiedEngineer/certified-engineer.service';
import { QualificationEngineerType } from '../../dataModels/qualification-engineer-type.model';

@Component({
  selector: 'app-accountants-completed-wafi-training-form',
  templateUrl: './accountants-completed-wafi-training-form.component.html',
  styleUrls: ['./accountants-completed-wafi-training-form.component.scss']
})
export class AccountantsCompletedWafiTrainingFormComponent {
  userData: customerResponse | null = null;
  subscriptions: Subscription[] = [];
  qualificationCertifiedEngineers: CertifiedEngineerDto[] = [];
  qualificatedAccountantDto: QualificationQualifiedAccountantCreateUpdateDto = new QualificationQualifiedAccountantCreateUpdateDto();
  socialInsuranceEmployeeList: SocialInsuranceEmployeeLockUpList[] = [];
  qualificatedAccountantsForm = this._formBuilder.group({
    qualificationCertifiedEngineerId: ['', [Validators.required]]
  });
  showValidation: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _qualificatedAccountantService: QualificatedAccountantService,
    private socialInsuranceEmployeeListService: SocialInsuranceEmployeeListService,
    // public dialogRef: MatDialogRef<PopupComponent>,
    private _userDataService: UserDataService,
    private _popupService: PopupService,
    private _certifiedEngineerService: CertifiedEngineerService,
    private _router: Router,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    // this.GetLockUpEmps();
    this.observeQualificatedAccountantForm();
    this.observeQualificatedAccountantObj();
    this.observePopupEvents();
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
        console.log(res)
        this.qualificatedAccountantDto;
        this.save()
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }

  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        if (this.userData) {
          this.getQualificationCertifiedEngineers();
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
    );
  }

  getQualificationCertifiedEngineers() {
    this.subscriptions.push(
      this._certifiedEngineerService.GetFacilityById(this.userData?.facilities[0].id as string,QualificationEngineerType.Accountant).subscribe(res => {
        this.qualificationCertifiedEngineers = res;
      })
    );
  }

  observeQualificatedAccountantForm(): void {
    this.subscriptions.push(
      this.qualificatedAccountantsForm.valueChanges.subscribe(changes => {
      })
    )
  }

  observeQualificatedAccountantObj(): void {
    this.subscriptions.push(
      this._qualificatedAccountantService.getCertifiedAccountantrObj().subscribe((Acc) => {

        if (Acc && (Object.keys(Acc).length != 0))
          this.getQualificatedAccountantObj(Acc.id);
      })
    )
  }

  getQualificatedAccountantObj(id: string) {
    this.subscriptions.push(
      this._qualificatedAccountantService.GetById(id).subscribe((res) => {
        if (res) {
          this.qualificatedAccountantDto = res;
          this.qualificatedAccountantsForm.patchValue(this.qualificatedAccountantDto as any);
        }
      })
    )
  }

  save(): void {
    if (this.qualificatedAccountantsForm?.invalid) {
      this.showValidation = true;
      this._toastrNotificationService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.qualificatedAccountantsForm?.markAllAsTouched();
      return;
    }
    this.qualificatedAccountantDto.qualificationCertifiedEngineerId = this.qualificatedAccountantsForm.value.qualificationCertifiedEngineerId as string;
    this.qualificatedAccountantDto.facilityId = this.userData?.facilities[0].id as string;
    this.qualificatedAccountantDto.id = this.qualificatedAccountantDto.id ? this.qualificatedAccountantDto.id : "00000000-0000-0000-0000-000000000000";
    this.subscriptions.push(
      this._qualificatedAccountantService.Save(this.qualificatedAccountantDto).subscribe(res => {
        if (res != undefined && res != null) {
          this._qualificatedAccountantService.SetFCertifiedAccountantrList(res.data as QualificationQualificatedAccountantDto[])
          // this.dialogRef.close();
          this.closeDialog()
        }
      })
    )
  }

  onTrainingCertificateFileRemoved(fileRemovedData: any) {
    let file = fileRemovedData.eventRes.file;
  }

  onTrainingCertificateFileUploaded(fileRemovedData: any) {
    this.qualificatedAccountantDto.trainingCertificateFileId = fileRemovedData.eventRes.data[0].id;
  }

  get controls() {
    return this.qualificatedAccountantsForm.controls;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
