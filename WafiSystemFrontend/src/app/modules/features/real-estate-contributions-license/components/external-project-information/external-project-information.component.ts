import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectBasicDataService } from '../../services/licenseProjects/project-basic-data.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExternalProjectDataCreateUpdateDto, ExternalProjectDataDto } from '../../models/external-project-data-dto';
import { LicenseProjectRightOfSaudisToOwnRealEstateFileCreateUpdateDto } from '../../models/license-project-right-of-saudis-to-own-real-estate-file-create-update-dto';
import { LicenseProjectOwnershipApprovedDocumentCreateUpdateDto } from '../../models/license-project-ownership-approved-document-create-update-dto';
import { LicenseProjectAdvertisingFormsElectronicFileCreateUpdateDto } from '../../models/license-project-advertising-forms-electronic-file-create-update-dto';
import { LicenseProjectLicenseDocumentCreateUpdateDto } from '../../models/license-project-license-document-create-update-dto';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';

@Component({
  selector: 'app-external-project-information',
  templateUrl: './external-project-information.component.html',
  styleUrls: ['./external-project-information.component.scss']
})
export class ExternalProjectInformationComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectId: string = "";
  externalProjectData: ExternalProjectDataDto = new ExternalProjectDataDto();
  externalProjectDataCreateUpdateDto = new ExternalProjectDataCreateUpdateDto();
  baseUrl = `${environment.baseURL}/`;
  multipleFileUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  localization = {
    title: 'وثائق الطلب',
    LicenseProjectOwnershipApprovedDocument: 'وثائق ملكية المشروع معتمدة في بلد المشروع',
    LicenseProjectLicenseDocument: "صورة لترخيص المشروع من بلد المشروع",
    LicenseProjectAdvertisingFormsElectronicFile: "ملف إلكتروني لجميع نماذج الإعلان والمنشورات متوافقة مع الدليل الايضاحي المعتمد",
    RightOfSaudisToOwnRealEstateFile: "ملف بأحقية السعوديين بتملك العقارات في بلد المشروع",
    FinancialGuaranteeOfProjectOwnershipFile: "ملف ضمان مالي بقيمة ١٪ من القيمة الإجمالية للمشروع لمدة ثلاثة أشهر بعد تاريخ انتهاء الترخيص",
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
        this._projectBasicDataService.GetExternalProjectDataByLicenseProjectId(this.licenseProjectId).subscribe((res) => {
          this.externalProjectData = res as ExternalProjectDataDto;
          this.observeForm();
        })
      )
    }
  }
  onOwnershipApprovedDocumentFileUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.externalProjectDataCreateUpdateDto.licenseProjectOwnershipApprovedDocuments.push({
        ownershipApprovedDocumentFileId: data.id,
        licenseProjectsId: this.licenseProjectId,
        id: '00000000-0000-0000-0000-000000000000',
      });
    });
  }
  onAdvertisingFormsElectronicFileUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.externalProjectDataCreateUpdateDto.licenseProjectAdvertisingFormsElectronicFiles.push({
        advertisingFormsElectronicFileId: data.id,
        licenseProjectId: this.licenseProjectId,
        id: '00000000-0000-0000-0000-000000000000',
      });
    });
  }
  onLicenseDocumentFileUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.externalProjectDataCreateUpdateDto.licenseProjectLicenseDocuments.push({
        licenseDocumentFileId: data.id,
        licenseProjectsId: this.licenseProjectId,
        id: '00000000-0000-0000-0000-000000000000',
      });
    });
  }
  onFinancialGuaranteeOfProjectOwnershipFileUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.externalProjectDataCreateUpdateDto.financialGuaranteeOfProjectOwnershipFileId = data.id;
    });
  }
  onRightOfSaudisToOwnRealEstateFileUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.externalProjectDataCreateUpdateDto.licenseProjectRightOfSaudisToOwnRealEstateFiles.push({
        rightOfSaudisToOwnRealEstateFileId: data.id,
        licenseProjectId: this.licenseProjectId,
        id: '00000000-0000-0000-0000-000000000000',
      });
    });
  }
  save(moveToNextTab: boolean = false): void {
    if(this.externalProjectDataCreateUpdateDto.financialGuaranteeOfProjectOwnershipFileId == "")
      this.externalProjectDataCreateUpdateDto.financialGuaranteeOfProjectOwnershipFileId = '00000000-0000-0000-0000-000000000000';

    if (this.licenseProjectId) {
      this.externalProjectDataCreateUpdateDto.id = this.licenseProjectId;

      this.subscriptions.push(
        this._projectBasicDataService.SaveExternalProjectData(this.externalProjectDataCreateUpdateDto).subscribe(res => {
          if (res) {
            this.externalProjectData = res as ExternalProjectDataDto;
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
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true)
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  setFinancialGuaranteeFile() {
    if (this.externalProjectData.financialGuaranteeOfProjectOwnershipFile) {
      this.externalProjectDataCreateUpdateDto.financialGuaranteeOfProjectOwnershipFileId =
        this.externalProjectData.financialGuaranteeOfProjectOwnershipFile.id;
    }
  }
  setlicenseProjectOwnershipApprovedDocuments() {
    if (this.externalProjectData.licenseProjectOwnershipApprovedDocuments && this.externalProjectData.licenseProjectOwnershipApprovedDocuments.length != 0) {
      this.externalProjectData.licenseProjectOwnershipApprovedDocuments.forEach(item => {
        let obj = new LicenseProjectOwnershipApprovedDocumentCreateUpdateDto();
        obj.id = item.id;
        obj.licenseProjectsId = item.LicenseProjectsId;
        obj.ownershipApprovedDocumentFileId = item.ownershipApprovedDocumentFileId;
        this.externalProjectDataCreateUpdateDto.licenseProjectOwnershipApprovedDocuments.push(obj);
      });
    }
  }
  setlicenseProjectRightOfSaudisToOwnRealEstateFiles() {
    if (this.externalProjectData.licenseProjectRightOfSaudisToOwnRealEstateFiles && this.externalProjectData.licenseProjectRightOfSaudisToOwnRealEstateFiles.length != 0) {
      this.externalProjectData.licenseProjectRightOfSaudisToOwnRealEstateFiles.forEach(item => {
        let obj = new LicenseProjectRightOfSaudisToOwnRealEstateFileCreateUpdateDto();
        obj.id = item.id;
        obj.licenseProjectId = item.licenseProjectId;
        obj.rightOfSaudisToOwnRealEstateFileId = item.rightOfSaudisToOwnRealEstateFileId;
        this.externalProjectDataCreateUpdateDto.licenseProjectRightOfSaudisToOwnRealEstateFiles.push(obj);
      });
    }
  }
  serlicenseProjectAdvertisingFormsElectronicFiles() {
    if (this.externalProjectData.licenseProjectAdvertisingFormsElectronicFiles && this.externalProjectData.licenseProjectAdvertisingFormsElectronicFiles.length != 0) {
      this.externalProjectData.licenseProjectAdvertisingFormsElectronicFiles.forEach(item => {
        let obj = new LicenseProjectAdvertisingFormsElectronicFileCreateUpdateDto();
        obj.id = item.id;
        obj.licenseProjectId = item.licenseProjectId;
        obj.advertisingFormsElectronicFileId = item.advertisingFormsElectronicFileId;
        this.externalProjectDataCreateUpdateDto.licenseProjectAdvertisingFormsElectronicFiles.push(obj);
      });
    }
  }
  setlicenseProjectLicenseDocuments() {
    if (this.externalProjectData.licenseProjectLicenseDocuments && this.externalProjectData.licenseProjectLicenseDocuments.length != 0) {
      this.externalProjectData.licenseProjectLicenseDocuments.forEach(item => {
        let obj = new LicenseProjectLicenseDocumentCreateUpdateDto();
        obj.id = item.id;
        obj.licenseProjectsId = item.licenseProjectsId;
        obj.licenseDocumentFileId = item.licenseDocumentFileId;
        this.externalProjectDataCreateUpdateDto.licenseProjectLicenseDocuments.push(obj);
      })
    }
  }
  observeForm() {
    this.setFinancialGuaranteeFile();
    this.setlicenseProjectOwnershipApprovedDocuments();
    this.setlicenseProjectRightOfSaudisToOwnRealEstateFiles();
    this.serlicenseProjectAdvertisingFormsElectronicFiles();
    this.setlicenseProjectLicenseDocuments();
  }
}

