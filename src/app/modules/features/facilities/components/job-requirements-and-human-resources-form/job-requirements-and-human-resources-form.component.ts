import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { QualificationInstitutionalCapacityAndHrRequirementCreatUpdateDto, QualificationInstitutionalCapacityAndHrRequirementDto } from '../../dataModels/qualificationInstitutionalCapacityAndHrRequirement.model';
// import { FileManagementService } from '../../../../../shared/services/fileManagement/file-management.service';
import { QualificationInstitutionalCapacityAndHrRequirementsService } from '../../services/qualificationInstitutionalCapacityAndHrRequirements/qualification-institutional-capacity_Hr-requirements.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job-requirements-and-human-resources-form',
  templateUrl: './job-requirements-and-human-resources-form.component.html',
  styleUrls: ['./job-requirements-and-human-resources-form.component.scss'],
})
export class JobRequirementsAndHumanResourcesFormComponent
  implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  institutionalCapacityAndHrRequirements: QualificationInstitutionalCapacityAndHrRequirementCreatUpdateDto =
    new QualificationInstitutionalCapacityAndHrRequirementCreatUpdateDto();
  existingInstitutionalCapacityAndHrRequirements: QualificationInstitutionalCapacityAndHrRequirementDto = new QualificationInstitutionalCapacityAndHrRequirementDto();


  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  mueltiFilesUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;

  userData: customerResponse | null = null;
  showValidation: boolean = false;
  baseUrl = `${environment.baseURL}/`;

  constructor(
    private _fileManagementService: FileManagementService,
    private _service: QualificationInstitutionalCapacityAndHrRequirementsService,
    // public dialogRef: MatDialogRef<PopupComponent>,
    private _userDataService: UserDataService,
    private _popupService: PopupService
  ) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeSubjectObj();
    this.observePopupEvents();
  }

  // popup
  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res);
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res);
        this.save();
      })
    );
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          // if(this.userData){
          //   this.GetFacilityById();
          // }
        })
    );
  }

  observeSubjectObj(): void {
    this.subscriptions.push(
      this._service
        .getSubjectObj()
        .subscribe((institutionalCapacityAndHrRequirements) => {
          if (institutionalCapacityAndHrRequirements.id)
            this.GetById(institutionalCapacityAndHrRequirements.id);
          this.existingInstitutionalCapacityAndHrRequirements = institutionalCapacityAndHrRequirements;
        })
    );
  }

  deletFile(id: string) {
    this._fileManagementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.getInstitutionalCapacityAndHrRequirement();
      }
    })
  }

  getInstitutionalCapacityAndHrRequirement() {
    this.subscriptions.push(
      //this.userData?.Id as string
      this._service.GetByFacilityId(this.userData?.facilities[0].id as string).subscribe(res => {
        if (res) {
          this.existingInstitutionalCapacityAndHrRequirements = res;
          this._service.SetSubjectObj(this.existingInstitutionalCapacityAndHrRequirements);
        }
      })
    )
  }
  GetById(id: string) {
    this.subscriptions.push(
      this._service.GetById(id).subscribe((res) => {
        console.log('GETBYID', res);
        if (res) this.institutionalCapacityAndHrRequirements = res;
      })
    );
  }

  save(): void {
    this.showValidation = true;

    if (!this.isValid()) {
      return;
    }

    // this.institutionalCapacityAndHrRequirements.facilityId
    this.institutionalCapacityAndHrRequirements.facilityId = this.userData
      ?.facilities[0].id as string;
    this.subscriptions.push(
      this._service
        .Save(this.institutionalCapacityAndHrRequirements)
        .subscribe((res) => {
          if (res.isDone && res.data) {
            this._service.SetSubjectObj(res.data);
            this.closeDialog();
          }
          // else
          //   alert(res.message);
        })
    );
  }

  onCreditSaudizationCertificateFileUploaded(fileRemovedData: any) {
    // if(fileRemovedData.eventRes.event.isTrusted){
    //   let file = fileRemovedData.eventRes.file;
    //   this.subscriptions.push(
    //     this._fileManagementService.UploadMultiple(file).subscribe((res:any)=>{
    //       if(res.data && res.data.length)
    //         this.institutionalCapacityAndHrRequirements.saudizationCertificateFileId = res.data[0].id;
    //     })
    //   )
    // }
    this.institutionalCapacityAndHrRequirements.saudizationCertificateFileId =
      fileRemovedData.eventRes.data[0].id;
  }

  onCreditOrganizationalStructureFileUploaded(fileRemovedData: any) {
    // if(fileRemovedData.eventRes.event.isTrusted){
    //   let file = fileRemovedData.eventRes.file;
    //   this.subscriptions.push(
    //     this._fileManagementService.UploadMultiple(file).subscribe((res:any)=>{
    //       if(res.data && res.data.length)
    //         this.institutionalCapacityAndHrRequirements.organizationalStructureFileId = res.data[0].id;
    //     })
    //   )
    // }
    if (fileRemovedData.eventRes.data.length == 0) {
      this.institutionalCapacityAndHrRequirements.organizationalStructureFileId =
        '';
      return;
    }
    if (!fileRemovedData.eventRes.data || !fileRemovedData.eventRes.data.length)
      return;
    this.institutionalCapacityAndHrRequirements.organizationalStructureFileId =
      fileRemovedData.eventRes.data[0].id;
  }

  onCreditLaborRegulationCertificateFileUploaded(fileRemovedData: any) {
    // if(fileRemovedData.eventRes.event.isTrusted){
    //   let file = fileRemovedData.eventRes.file;
    //   this.subscriptions.push(
    //     this._fileManagementService.UploadMultiple(file).subscribe((res:any)=>{
    //       if(res.data && res.data.length)
    //         this.institutionalCapacityAndHrRequirements.laborRegulationCertificateFileId = res.data[0].id;
    //     })
    //   )
    // }
    if (fileRemovedData.eventRes.data.length == 0) {
      this.institutionalCapacityAndHrRequirements.laborRegulationCertificateFileId =
        '';
      return;
    }
    if (!fileRemovedData.eventRes.data || !fileRemovedData.eventRes.data.length)
      return;
    this.institutionalCapacityAndHrRequirements.laborRegulationCertificateFileId =
      fileRemovedData.eventRes.data[0].id;
  }

  onCreditOccupationalSafetyAndHealthFileUploaded(fileRemovedData: any) {
    // if(fileRemovedData.eventRes.event.isTrusted){
    //   let file = fileRemovedData.eventRes.file;
    //   this.subscriptions.push(
    //     this._fileManagementService.UploadMultiple(file).subscribe((res:any)=>{
    //       if(res.data && res.data.length)
    //         this.institutionalCapacityAndHrRequirements.occupationalSafetyAndHealthFileId = res.data[0].id;
    //     })
    //   )
    // }
    if (fileRemovedData.eventRes.data.length == 0) {
      this.institutionalCapacityAndHrRequirements.occupationalSafetyAndHealthFileId =
        '';
      return;
    }
    if (!fileRemovedData.eventRes.data || !fileRemovedData.eventRes.data.length)
      return;
    this.institutionalCapacityAndHrRequirements.occupationalSafetyAndHealthFileId =
      fileRemovedData.eventRes.data[0].id;
  }

  onSocialResponsibilityProgramFilesUploaded(filesData: any) {
    // if(fileRemovedData.eventRes.event.isTrusted){

    //   let file = fileRemovedData.eventRes.file;
    //   this.subscriptions.push(
    //     this._fileManagementService.UploadMultiple(file).subscribe((res:any)=>{

    //       if(res.data && res.data.length){
    //         if(!this.institutionalCapacityAndHrRequirements.addedSocialResponsibilityProgramsFiles)
    //           this.institutionalCapacityAndHrRequirements.addedSocialResponsibilityProgramsFiles = [];

    //         this.institutionalCapacityAndHrRequirements.addedSocialResponsibilityProgramsFiles.push({
    //           socialResponsibilityProgramFileId: res.data[0].id,
    //           id: '00000000-0000-0000-0000-000000000000',
    //           qualificationInstitutionalCapacityAndHrRequirementId: this.institutionalCapacityAndHrRequirements.id
    //         });
    //       }
    //     })
    //   )
    // }
    if (filesData.eventRes.data.length == 0) {
      this.institutionalCapacityAndHrRequirements.addedSocialResponsibilityProgramsFiles =
        [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;

    filesData.eventRes.data.forEach((data: any) => {
      this.institutionalCapacityAndHrRequirements.addedSocialResponsibilityProgramsFiles.push(
        {
          socialResponsibilityProgramFileId: data.id,
          id: '00000000-0000-0000-0000-000000000000',
          qualificationInstitutionalCapacityAndHrRequirementId:
            this.institutionalCapacityAndHrRequirements.id,
        }
      );
    });
  }
  private isValid(): boolean {
    const model = this.institutionalCapacityAndHrRequirements;

    return !!(
      model.organizationalStructureFileId &&
      model.laborRegulationCertificateFileId &&
      model.occupationalSafetyAndHealthFileId &&
      model.saudizationCertificateFileId
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
