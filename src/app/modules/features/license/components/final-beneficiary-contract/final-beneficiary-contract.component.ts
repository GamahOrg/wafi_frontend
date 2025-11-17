import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { SysLicenseBeneficiaryContractFormService } from '../../services/sys-license-beneficiary-contract-form.service';
import { SysLicenseBeneficiaryContractFormListDto } from '../../dataModels/sys-license-beneficiary-contract-form-list-dto';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { environment } from 'src/environments/environment';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { UploadFileModel } from 'src/app/shared/models/upload-file.model';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';

@Component({
  selector: 'app-final-beneficiary-contract',
  templateUrl: './final-beneficiary-contract.component.html',
  styleUrls: ['./final-beneficiary-contract.component.scss'],
})
export class FinalBeneficiaryContractComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  fileId: string | null = '00000000-0000-0000-0000-000000000000';
  sysLicenseBeneficiaryContractForm = this._formBuilder.group({
    beneficiaryContractFormApproval: [false],
  });
  baseUrl = `${environment.baseURL}/`;
// baseUrl = 'https://localhost:7253/';  

  beneficiaryFiles: SysFileManagerCreateUpdateDto[] = [];
  savedBeneficiaryFiles: SysFileManagerCreateUpdateDto[] = [];
  multiFilesUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  sysLicenseBeneficiaryContractFormListDto: SysLicenseBeneficiaryContractFormListDto =
    new SysLicenseBeneficiaryContractFormListDto();

  // PDF Viewer Properties
  selectedPdfUrl: string = '';
  isFullscreen: boolean = false;
  isLoadingPdf: boolean = false;
  pdfLoadError: string = '';
  retryGenerateContract = () => this.GenerateContractWithLogo();

  localization = {
    addingNewItem: ' إضافة بند جديد',
    Save: 'حفظ البيانات',
    send: 'إرسال الطلب',
    previous: 'السابق',
  };
  activeTabIndex: number = 0;

  constructor(
    private _sysLicenseBeneficiaryContractFormService: SysLicenseBeneficiaryContractFormService,
    private _formBuilder: FormBuilder,
    private _filemangementService: FileManagementService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _cdr: ChangeDetectorRef
  ) { }
  
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.GetLicenseBeneficiaryContractForm();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  GetLicenseBeneficiaryContractForm(): void {
    // First get the contract data
    this.subscriptions.push(
      this._sysLicenseBeneficiaryContractFormService
        .GetLicenseBeneficiaryContractForm(this.licenseProjectId as string)
        .subscribe((res) => {
          if (res) {
            this.beneficiaryFiles = res.beneficiaryFiles;
            this.savedBeneficiaryFiles=res.beneficiaryFiles;
            this.sysLicenseBeneficiaryContractFormListDto =
              res as SysLicenseBeneficiaryContractFormListDto;
            this.sysLicenseBeneficiaryContractForm.patchValue(
              this.sysLicenseBeneficiaryContractFormListDto
            );
          }
        })
    );

    // Generate contract with logo
    this.GenerateContractWithLogo();
  }


  GenerateContractWithLogo(): void {
  this.isLoadingPdf = true;
  this.pdfLoadError = '';
  this.selectedPdfUrl = '';

  this.subscriptions.push(
    this._sysLicenseBeneficiaryContractFormService
      .GenerateContractWithLogo(this.licenseProjectId as string)
      .subscribe({
        next: (res) => {
          this.isLoadingPdf = false;

          if (res && res.filePath) {
            // Construct the full URL for the download endpoint
            this.selectedPdfUrl = this.baseUrl + res.filePath;
            this.fileId = res.licenseProjectBeneficiaryFileId; // Store the File ID for deletion
            this._cdr.detectChanges();
          } else {
            this.selectedPdfUrl = '';
            this.pdfLoadError = 'لم يتم استلام مسار الملف';
          }
        },
        error: (error) => {
          this.isLoadingPdf = false;
          this.selectedPdfUrl = '';
          this.pdfLoadError = 'حدث خطأ أثناء تحميل العقد';
          this._cdr.detectChanges();
        }
      })
  );
  }

  deleteFile(id: string) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.GetLicenseBeneficiaryContractForm();
      }
    })
  }

  UpdateLicenseBeneficiaryContractForm(moveToNextTab: boolean = false): void {
    this.sysLicenseBeneficiaryContractFormListDto.isApprove = this.sysLicenseBeneficiaryContractForm.value.beneficiaryContractFormApproval as boolean;
    this.sysLicenseBeneficiaryContractFormListDto.beneficiaryContractFormApproval = this.sysLicenseBeneficiaryContractForm.value.beneficiaryContractFormApproval as boolean;
    this.sysLicenseBeneficiaryContractFormListDto.licenseProjectId = this.licenseProjectId as string;
    
    const beneficiaryFileIds : string[] = []
    beneficiaryFileIds.push(this.fileId as string);

    this.sysLicenseBeneficiaryContractFormListDto.BeneficiaryFilesId = beneficiaryFileIds
    // this.sysLicenseBeneficiaryContractFormListDto.BeneficiaryFilesId = this.beneficiaryFiles.flatMap((f) => f.id);
    this.subscriptions.push(
      this._sysLicenseBeneficiaryContractFormService
        .UpdateLicenseBeneficiaryContractForm(
          this.sysLicenseBeneficiaryContractFormListDto
        )
        .subscribe((res) => {
          if (res) {
            this.sysLicenseBeneficiaryContractFormListDto =
              res as SysLicenseBeneficiaryContractFormListDto;
            this.sysLicenseBeneficiaryContractForm.patchValue(
              this.sysLicenseBeneficiaryContractFormListDto
            );
            if (moveToNextTab) {
              this.moveToNextTab();
            } else {
              this.GetLicenseBeneficiaryContractForm();
            }
          }
        })
    );
  }
  get controls() {
    return this.sysLicenseBeneficiaryContractForm.controls;
  }
  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
        () => {
          this.UpdateLicenseBeneficiaryContractForm(true);
          this.moveToNextTab();
        }
      )
    );
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(
        () => {
          this.UpdateLicenseBeneficiaryContractForm(true);
          // this.moveToNextTab();
        }
      )
    );
  }
  private observeTabsButtons(): void {
    
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked();
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true);
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }

  public onBeneficiaryFilesUploaded(filesData: {
    id: string;
    eventRes: {
      data: UploadFileModel[];
      isDone: boolean;
      message: string;
    };
  }): void {
    if (filesData?.eventRes?.data) {
      this.beneficiaryFiles = filesData.eventRes.data.map((file) => {
        return {
          id: file.id,
          fileDescription: file.fileName,
          filePath: file.path,
          fileType: file.fileType,
        };
      });
    }
  }

}
