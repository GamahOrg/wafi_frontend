import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { additionhrrequirementcreateupdatedto, QualificationExistSystemsApprovalCertificationDto, QualificationLocalAndInternationalIssuedCertificationDto } from '../../dataModels/addition-hr-requirement-create-update-dto';
import { AdditionInstitutionalCapacityAndHrService } from '../../services/AdditionInstitutionalCapacityAndHr/addition-institutional-capacity-and-hr.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { QualificationAdditionInstitutionalCapacityAndHrRequirementDto } from '../../dataModels/qualification-addition-institutional-capacity-and-hr-requirement-dto';

@Component({
  selector: 'app-institutional-capabilities-and-additional-discriminatory-human-resources-form',
  templateUrl: './institutional-capabilities-and-additional-discriminatory-human-resources-form.component.html',
  styleUrls: ['./institutional-capabilities-and-additional-discriminatory-human-resources-form.component.scss']
})
export class InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesFormComponent {
  userData: customerResponse | null = null;
  subscriptions: Subscription[] = [];
  showValidation:boolean = false;
  addedExistSystemsApprovalCertifications: QualificationExistSystemsApprovalCertificationDto[] = [];
  addedLocalAndInternationalIssuedCertifications: QualificationLocalAndInternationalIssuedCertificationDto[] = [];
  mueltiFilesUploaderData: FileUploader = {
    multiple: true
  } as FileUploader;

  qualificationAdditionHRDto: additionhrrequirementcreateupdatedto = new additionhrrequirementcreateupdatedto();
  qualificationAdditionHRForm = this._formBuilder.group({
    engineeringSupervisionForWafiSalesProjectsFileId: [''],
    accountingSupervisionForWafiSalesProjectsFileId: ['']
  })
  constructor(
    private _formBuilder: FormBuilder,
    private _additionHRService: AdditionInstitutionalCapacityAndHrService,
    // public dialogRef: MatDialogRef<PopupComponent>,
    private _userDataService: UserDataService,
    public toastService: ToastrNotificatioService,
    private _popupService: PopupService,
  ) {
  }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeAdditionHRForm();
    this.observeAdditionHRObj();
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
        console.log(res)
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
        // if(this.userData){
        //   this.GetFacilityById();
        // }
      })
    )
  }
  observeAdditionHRForm(): void {
    this.subscriptions.push(
      this.qualificationAdditionHRForm.valueChanges.subscribe(changes => {
        this.qualificationAdditionHRDto.accountingSupervisionForWafiSalesProjectsFileId = this.controls.accountingSupervisionForWafiSalesProjectsFileId.value as string;
        this.qualificationAdditionHRDto.engineeringSupervisionForWafiSalesProjectsFileId = this.controls.engineeringSupervisionForWafiSalesProjectsFileId.value as string;
      })
    )
  }
  observeAdditionHRObj(): void {
    this.subscriptions.push(
      this._additionHRService.getHrObj().subscribe((Hr) => {

        if (Hr != null && Hr.id != "")
          this.getHrObj(Hr.id);
      })
    )
  }
  getHrObj(id: string) {

    this.subscriptions.push(
      this._additionHRService.GetById(id).subscribe((res) => {

        if (res) {
          this.qualificationAdditionHRDto = res;
          this.qualificationAdditionHRForm.patchValue(this.qualificationAdditionHRDto as any);
        }
      })
    )
  }
  save(): void {
    // if (this.qualificationAdditionHRForm?.invalid) {
    //   this._toastrNotificationService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
    //   this.qualificationAdditionHRForm?.markAllAsTouched();
    //   return;
    // }
    this.qualificationAdditionHRDto.facilityId = this.userData?.facilities[0].id as string;
    this.qualificationAdditionHRDto.id = this.qualificationAdditionHRDto.id ? this.qualificationAdditionHRDto.id : "00000000-0000-0000-0000-000000000000";
    this.qualificationAdditionHRDto.addedExistSystemsApprovalCertifications = this.addedExistSystemsApprovalCertifications;
    this.qualificationAdditionHRDto.addedLocalAndInternationalIssuedCertifications = this.addedLocalAndInternationalIssuedCertifications;
    this.subscriptions.push(
      this._additionHRService.Save(this.qualificationAdditionHRDto).subscribe(res => {
        if (res.isDone) {
          this._additionHRService.SetHRObj(res.data as QualificationAdditionInstitutionalCapacityAndHrRequirementDto);
          this.closeDialog();
        }
      })
    )
  }

  onAccountingSupervisionForWafiSalesProjectsFileRemoved(fileRemovedData: any) {
    let file = fileRemovedData.eventRes.file;
  }
  onAccountingSupervisionForWafiSalesProjectsFileUploaded(fileRemovedData: any) {
    this.qualificationAdditionHRDto.accountingSupervisionForWafiSalesProjectsFileId = fileRemovedData.eventRes.data[0].id;
  }
  onEngineeringSupervisionForWafiSalesProjectsFileRemoved(fileRemovedData: any) {
    let file = fileRemovedData.eventRes.file;
  }
  onEngineeringSupervisionForWafiSalesProjectsFileUploaded(fileRemovedData: any) {

    this.qualificationAdditionHRDto.engineeringSupervisionForWafiSalesProjectsFileId = fileRemovedData.eventRes.data[0].id;
  }

  onExistSystemsApprovalCertificationsFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.addedExistSystemsApprovalCertifications) this.addedExistSystemsApprovalCertifications = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.addedExistSystemsApprovalCertifications.push({
        existSystemsApprovalCertificationFileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        additionInstitutionalCapacityAndHumanResourcesId: this.qualificationAdditionHRDto.id
      });
    });
  }
  onLocalAndInternationalIssuedCertificationsUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.addedLocalAndInternationalIssuedCertifications) this.addedLocalAndInternationalIssuedCertifications = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.addedLocalAndInternationalIssuedCertifications.push({
        LocalAndInternationalIssuedCertificationFileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        additionInstitutionalCapacityAndHumanResourcesId: this.qualificationAdditionHRDto.id
      });
    });
  }
  get controls() {
    return this.qualificationAdditionHRForm.controls;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
