import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectDocumentDataCreateUpdateDto, ProjectDocumentDataDto } from '../../models/external-project-data-dto';
import { environment } from 'src/environments/environment';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ProjectBasicDataService } from '../../services/licenseProjects/project-basic-data.service';
import { ToastrService } from 'ngx-toastr';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { LicenseProjectOwnershipApprovedDocumentCreateUpdateDto } from '../../models/license-project-ownership-approved-document-create-update-dto';
import { LicenseProjectRightOfSaudisToOwnRealEstateFileCreateUpdateDto } from '../../models/license-project-right-of-saudis-to-own-real-estate-file-create-update-dto';
import { LicenseProjectLicenseDocumentCreateUpdateDto } from '../../models/license-project-license-document-create-update-dto';

@Component({
  selector: 'app-project-document-data',
  templateUrl: './project-document-data.component.html',
  styleUrls: ['./project-document-data.component.scss']
})
export class ProjectDocumentDataComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectId: string = "";
  projectDocumentData: ProjectDocumentDataDto = new ProjectDocumentDataDto();
  ProjectDocumentDataCreateUpdateDto:ProjectDocumentDataCreateUpdateDto = new ProjectDocumentDataCreateUpdateDto();
  baseUrl = `${environment.baseURL}/`;
  multipleFileUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  
  localization = {
    title: 'وثائق المشروع',
    LicenseProjectOwnershipApprovedDocument: 'وثائق ملكية المشروع معتمدة في بلد المشروع',
    LicenseProjectLicenseDocument: "صورة لترخيص المشروع من بلد المشروع",
    RightOfSaudisToOwnRealEstateFile: "ملف بأحقية السعوديين بتملك العقارات في بلد المشروع",
    requiredErrorMsg: 'حقل مطلوب',
    dateValidator: 'يجب ان يكون تاريخ البداية اقل من تاريخ النهاية',
    yes: 'نعم',
    no: 'لا',
    savedSuccessfully: 'تم الحفظ',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
  };
  constructor(
    private _projectBasicDataService: ProjectBasicDataService,
    private _toastrService: ToastrService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) { }
  
  ngOnInit(): void {
    this.getFilesLicenseProjectId();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }

  getFilesLicenseProjectId(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage() as string;
    if (this.licenseProjectId) {
      this.subscriptions.push(
        this._projectBasicDataService.GetProjectDocumentDataByLicenseProjectId(this.licenseProjectId).subscribe((res) => {
          this.projectDocumentData = res as ProjectDocumentDataDto;
          this.observeForm();
        })
      )
    }
  }
  onOwnershipApprovedDocumentFileUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.ProjectDocumentDataCreateUpdateDto.licenseProjectOwnershipApprovedDocuments.push({
        ownershipApprovedDocumentFileId: data.id,
        licenseProjectsId: this.licenseProjectId,
        id: '00000000-0000-0000-0000-000000000000',
      });
    });
  }
 
  onLicenseDocumentFileUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.ProjectDocumentDataCreateUpdateDto.licenseProjectLicenseDocuments.push({
        licenseDocumentFileId: data.id,
        licenseProjectsId: this.licenseProjectId,
        id: '00000000-0000-0000-0000-000000000000',
      });
    });
  }
  onRightOfSaudisToOwnRealEstateFileUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.ProjectDocumentDataCreateUpdateDto.licenseProjectRightOfSaudisToOwnRealEstateFiles.push({
        rightOfSaudisToOwnRealEstateFileId: data.id,
        licenseProjectId: this.licenseProjectId,
        id: '00000000-0000-0000-0000-000000000000',
      });
    });
  }
  save(moveToNextTab: boolean = false): void {
    

    if (this.licenseProjectId) {
      this.ProjectDocumentDataCreateUpdateDto.id = this.licenseProjectId;

      this.subscriptions.push(
        this._projectBasicDataService.SaveProjectDocumentData(this.ProjectDocumentDataCreateUpdateDto).subscribe(res => {
          if (res) {
            this.projectDocumentData = res as ProjectDocumentDataDto;
            if (moveToNextTab) this.moveToNextTab()
          }
          else {
            this._toastrService.error("حدث خطأ غير متوقع");
            return;
          }
        })
      )
    }
  }

  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.save(true)
      })
    )
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe((res: null) => {
        this.save()
      })
    )
  }
  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked()
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  setlicenseProjectOwnershipApprovedDocuments() {
    if (this.projectDocumentData.licenseProjectOwnershipApprovedDocuments && this.projectDocumentData.licenseProjectOwnershipApprovedDocuments.length != 0) {
      this.projectDocumentData.licenseProjectOwnershipApprovedDocuments.forEach(item => {
        let obj = new LicenseProjectOwnershipApprovedDocumentCreateUpdateDto();
        obj.id = item.id;
        obj.licenseProjectsId = item.LicenseProjectsId;
        obj.ownershipApprovedDocumentFileId = item.ownershipApprovedDocumentFileId;
        this.ProjectDocumentDataCreateUpdateDto.licenseProjectOwnershipApprovedDocuments.push(obj);
      });
    }
  }
  setlicenseProjectRightOfSaudisToOwnRealEstateFiles() {
    if (this.projectDocumentData.licenseProjectRightOfSaudisToOwnRealEstateFiles && this.projectDocumentData.licenseProjectRightOfSaudisToOwnRealEstateFiles.length != 0) {
      this.projectDocumentData.licenseProjectRightOfSaudisToOwnRealEstateFiles.forEach(item => {
        let obj = new LicenseProjectRightOfSaudisToOwnRealEstateFileCreateUpdateDto();
        obj.id = item.id;
        obj.licenseProjectId = item.licenseProjectId;
        obj.rightOfSaudisToOwnRealEstateFileId = item.rightOfSaudisToOwnRealEstateFileId;
        this.ProjectDocumentDataCreateUpdateDto.licenseProjectRightOfSaudisToOwnRealEstateFiles.push(obj);
      });
    }
  }

  setlicenseProjectLicenseDocuments() {
    if (this.projectDocumentData.licenseProjectLicenseDocuments && this.projectDocumentData.licenseProjectLicenseDocuments.length != 0) {
      this.projectDocumentData.licenseProjectLicenseDocuments.forEach(item => {
        let obj = new LicenseProjectLicenseDocumentCreateUpdateDto();
        obj.id = item.id;
        obj.licenseProjectsId = item.licenseProjectsId;
        obj.licenseDocumentFileId = item.licenseDocumentFileId;
        this.ProjectDocumentDataCreateUpdateDto.licenseProjectLicenseDocuments.push(obj);
      })
    }
  }
  observeForm() {
    this.setlicenseProjectOwnershipApprovedDocuments();
    this.setlicenseProjectRightOfSaudisToOwnRealEstateFiles();
    this.setlicenseProjectLicenseDocuments();
  }
}
