import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SysLicenseBeneficiaryContractFormService } from '../../services/sys-license-beneficiary-contract-form.service';
import { FileManagementService } from '../../../../../shared/services/fileManagement/file-management.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { forkJoin, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SysFileManagerCreateUpdateDto } from '../../../../../shared/models/sys-file-manager-create-update-dto';
import { FileUploader } from '../../../../../shared/models/file-uploader.model';
import { SysLicenseBeneficiaryContractFormListDto } from '../../dataModels/sys-license-beneficiary-contract-form-list-dto';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { LicenseRequestService } from '../../services/license-request.service';
import { LicenseProjectCompletionData } from '../../dataModels/license-project-model.dto';
import { TabCode } from '../../models/tab-code.model';
import { ToastrNotificatioService } from '../../../../../core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-fawria-final-beneficiary-agreement',
  templateUrl: './fawria-final-beneficiary-agreement.component.html',
  styleUrls: ['./fawria-final-beneficiary-agreement.component.scss']
})
export class FawriaFinalBeneficiaryAgreementComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  fileId: string | null = '00000000-0000-0000-0000-000000000000';
  sysLicenseBeneficiaryContractForm = this._formBuilder.group({
    beneficiaryContractFormApproval: [false, [Validators.required]],
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
    agreeIsRequired: 'يرجى الموافقة على عقد المستفيد النهائي قبل الحفظ.',
  };
  activeTabIndex: number = 0;


  constructor(
    private _sysLicenseBeneficiaryContractFormService: SysLicenseBeneficiaryContractFormService,
    private _formBuilder: FormBuilder,
    private _filemangementService: FileManagementService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
    private _licenseRequestService: LicenseRequestService,
    private _cdr: ChangeDetectorRef,
    private _toastrNotificatioService: ToastrNotificatioService,

  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.GetLicenseBeneficiaryContractForm();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
    this.checkIfTabIsCompleted();
  }
  isTabCompleted: boolean = false
  private checkIfTabIsCompleted(): void {
    const typeCode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    if (typeCode === 'FSRSU' && this.licenseProjectId) {

      const requests = [
        this._dataVisibilityOfLicenseProjectService.GetCompletedLicenseProjectProfileTaps(this.licenseProjectId),
        this._licenseRequestService.GetLicenseProjectCompletionData(this.licenseProjectId)
      ];
      const subscriptions = forkJoin(requests).subscribe((results) => {
        if (results) {
          let completedTabs = results[0] as string[];
          let complete = results[1] as LicenseProjectCompletionData | null;
          if (completedTabs && complete)
            this.isTabCompleted = completedTabs.includes(TabCode.fawriaUnifiedSalesModel) && complete && complete.isProfileCompleted;
          if (this.isTabCompleted) {
            // Make form controls readonly
            // Show next button and hide verify button
            this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
            this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
          }
        }
      });
      this.subscriptions.push(subscriptions);
    }
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  private observeTabsButtons(): void {

    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked();
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
         
          if (!this.sysLicenseBeneficiaryContractForm.value.beneficiaryContractFormApproval) {
           
            this._toastrNotificatioService.showError(this.localization.agreeIsRequired);
           
            this.sysLicenseBeneficiaryContractForm.controls['beneficiaryContractFormApproval']
              .markAsTouched();

            return; // stop saving
          }

          this.UpdateLicenseBeneficiaryContractForm(true);
          // this.moveToNextTab();
        }
      )
    );
  }
  UpdateLicenseBeneficiaryContractForm(moveToNextTab: boolean = false): void {
    this.sysLicenseBeneficiaryContractFormListDto.isApprove = this.sysLicenseBeneficiaryContractForm.value.beneficiaryContractFormApproval as boolean;
    this.sysLicenseBeneficiaryContractFormListDto.beneficiaryContractFormApproval = this.sysLicenseBeneficiaryContractForm.value.beneficiaryContractFormApproval as boolean;
    this.sysLicenseBeneficiaryContractFormListDto.licenseProjectId = this.licenseProjectId as string;

    const beneficiaryFileIds: string[] = []
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
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }
  GetLicenseBeneficiaryContractForm(): void {
    // First get the contract data
    this.subscriptions.push(
      this._sysLicenseBeneficiaryContractFormService
        .GetLicenseBeneficiaryContractForm(this.licenseProjectId as string)
        .subscribe((res) => {
          if (res) {
            this.beneficiaryFiles = res.beneficiaryFiles;
            this.savedBeneficiaryFiles = res.beneficiaryFiles;
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

  get controls() {
    return this.sysLicenseBeneficiaryContractForm.controls;
  }
  deleteFile(id: string) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.GetLicenseBeneficiaryContractForm();
      }
    })
  }

}
