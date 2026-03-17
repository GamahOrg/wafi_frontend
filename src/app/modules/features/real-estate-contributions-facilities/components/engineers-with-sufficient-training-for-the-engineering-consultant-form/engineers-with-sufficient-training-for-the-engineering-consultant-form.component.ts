import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { SocialInsuranceEmployeeLockUpList } from 'src/app/shared/models/social-insurance-employee-lock-up-list';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { QualificationQualifiedEngineerCreateUpdateDto } from '../../dataModels/qualification-qualified-engineer-create-update-dto';
import { QualificatedEngineerService } from '../../services/QualificationQualificatedEngineer/qualificated-engineer.service';
import { SocialInsuranceEmployeeListService } from '../../services/QualificationSocialInsuranceEmployeeList/social-insurance-employee-list.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { CertifiedEngineerService } from '../../services/QualificationCertifiedEngineer/certified-engineer.service';
import { CertifiedEngineerDto } from '../../dataModels/certified-engineer-dto';
import { QualifiedEngineersDto } from '../../dataModels/qualified-engineers-dto';
import { QualificationEngineerType } from '../../dataModels/qualification-engineer-type.model';

@Component({
  selector: 'app-engineers-with-sufficient-training-for-the-engineering-consultant-form',
  templateUrl: './engineers-with-sufficient-training-for-the-engineering-consultant-form.component.html',
  styleUrls: ['./engineers-with-sufficient-training-for-the-engineering-consultant-form.component.scss']
})
export class EngineersWithSufficientTrainingForTheEngineeringConsultantFormComponent {
  userData: customerResponse | null = null;
  subscriptions: Subscription[] = [];
  qualificationqualificatedEngineerDto: QualificationQualifiedEngineerCreateUpdateDto = new QualificationQualifiedEngineerCreateUpdateDto();
  socialInsuranceEmployeeList: SocialInsuranceEmployeeLockUpList[] = [];
  qualificationCertifiedEngineers: CertifiedEngineerDto[] = [];
  qualificationqualificatedEngineersForm = this._formBuilder.group({
    qualificationCertifiedEngineerId: [null, [Validators.required]]
  });
  showValidation: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private qualificatedEngineerService: QualificatedEngineerService,
    private socialInsuranceEmployeeListService: SocialInsuranceEmployeeListService,
    // public dialogRef: MatDialogRef<PopupComponent>,
    private _userDataService: UserDataService,
    private _certifiedEngineerService: CertifiedEngineerService,
    private _popupService: PopupService,
    public toastService: ToastrNotificatioService,
  ) {
  }

  ngOnInit(): void {
    this.obseveCustomerData();
    // this.GetLockUpEmps();
    this.observequalificatedEngineersForm();
    this.observequalificatedEngineerObj();
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
          this.GetLockUpEmps();
          this.getQualificationCertifiedEngineers();
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

  getQualificationCertifiedEngineers() {
    this.subscriptions.push(
      this._certifiedEngineerService.GetFacilityById(this.userData?.facilities[0].id as string,QualificationEngineerType.Engineering).subscribe(res => {
        this.qualificationCertifiedEngineers = res;
      })
    );
  }

  observequalificatedEngineersForm(): void {
    this.subscriptions.push(
      this.qualificationqualificatedEngineersForm.valueChanges.subscribe(changes => {
      })
    )
  }
  observequalificatedEngineerObj(): void {
    this.subscriptions.push(
      this.qualificatedEngineerService.getQualifiedEngineerObj().subscribe((Engineer) => {
        if (Engineer && (Object.keys(Engineer).length != 0))
          this.getQualifiedEngineerObj(Engineer.id);
      })
    )
  }
  getQualifiedEngineerObj(id: string) {
    this.subscriptions.push(
      this.qualificatedEngineerService.GetById(id).subscribe((res) => {
        if (res) {
          this.qualificationqualificatedEngineerDto = res;
          this.qualificationqualificatedEngineersForm.patchValue(this.qualificationqualificatedEngineerDto as any);
        }
      })
    )
  }
  save(): void {
    if (!this.qualificationqualificatedEngineersForm.valid) {
      this.toastService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.showValidation = true;
      return;
    }
    this.qualificationqualificatedEngineerDto.qualificationCertifiedEngineerId = this.qualificationqualificatedEngineersForm.value.qualificationCertifiedEngineerId != null ? this.qualificationqualificatedEngineersForm.value.qualificationCertifiedEngineerId as string : '';
    this.qualificationqualificatedEngineerDto.facilityId = this.userData?.facilities[0].id as string;
    this.qualificationqualificatedEngineerDto.id = this.qualificationqualificatedEngineerDto.id ? this.qualificationqualificatedEngineerDto.id : "00000000-0000-0000-0000-000000000000";
    this.subscriptions.push(
      this.qualificatedEngineerService.Save(this.qualificationqualificatedEngineerDto).subscribe(res => {
        if (res) {
          this.qualificatedEngineerService.setQualifiedEngineerList(res.data as QualifiedEngineersDto[]);
          this.closeDialog();
        }
      })
    )
  }
  onTrainingCertificateFileRemoved(fileRemovedData: any) {
    let file = fileRemovedData.eventRes.file;
  }
  onTrainingCertificateFileUploaded(fileRemovedData: any) {
    if (fileRemovedData.eventRes.data.length == 0) {
      this.qualificationqualificatedEngineerDto.trainingCertificateFileId = '';
      return
    }
    this.qualificationqualificatedEngineerDto.trainingCertificateFileId = fileRemovedData.eventRes.data[0].id;
  }

  get controls() {
    return this.qualificationqualificatedEngineersForm.controls;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}

