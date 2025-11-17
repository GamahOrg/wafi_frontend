import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UploadFileModel } from 'src/app/shared/models/upload-file.model';
import { SysFileManagerCreateUpdateDto } from '../../models/license-request-project-details-dto';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { SysLicenseBeneficiaryContractFormListDto } from '../../dataModels/sys-license-beneficiary-contract-form-list-dto';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { SysLicenseBeneficiaryContractFormService } from '../../services/sys-license-beneficiary-contract-form.service';
@Component({
  selector: 'app-license-request-final-beneficiary-contract',
  templateUrl: './license-request-final-beneficiary-contract.component.html',
  styleUrls: ['./license-request-final-beneficiary-contract.component.scss'],
})
export class LicenseRequestFinalBeneficiaryContractComponent implements OnInit, OnDestroy{
  sysLicenseBeneficiaryContractFormListDto: SysLicenseBeneficiaryContractFormListDto = new SysLicenseBeneficiaryContractFormListDto();
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  baseUrl = `${environment.baseURL}/`;
  // baseUrl = 'https://localhost:7253/';

  beneficiaryFiles: SysFileManagerCreateUpdateDto[] = [];
  savedBeneficiaryFiles: SysFileManagerCreateUpdateDto[] = [];

  // PDF Viewer Properties
  selectedPdfUrl: string = '';
  isFullscreen: boolean = false;
  isLoadingPdf: boolean = false;
  pdfLoadError: string = '';
  retryGenerateContract = () => this.GenerateContractWithLogo();
  activeTabIndex: number = 0;

  constructor(
    private _licenseDetailService: LicenseDetailsService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _sysLicenseBeneficiaryContractFormService: SysLicenseBeneficiaryContractFormService,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.updateEngineeringConsultants();
  }

  private updateEngineeringConsultants(): void {
    this.subscriptions.push(
      this._licenseDetailService.sysLicenseBeneficiary$.subscribe(
        (res: SysLicenseBeneficiaryContractFormListDto | null) => {
          if (res) {
            this.sysLicenseBeneficiaryContractFormListDto = res;
            this.licenseProjectId = res.licenseProjectId;
            this.GenerateContractWithLogo();
            // this.sysLicenseBeneficiaryContractForm.patchValue(this.sysLicenseBeneficiaryContractFormListDto);
          }
        }
      )
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
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
            console.log('Contract generation response:', res);
            this.isLoadingPdf = false;
            if (res && res.filePath) {
              // Construct the full URL for the download endpoint
              this.selectedPdfUrl = this.baseUrl + res.filePath;
              console.log('Document URL:', this.selectedPdfUrl);
              this._cdr.detectChanges();
            } else {
              console.error('Invalid response structure:', res);
              this.selectedPdfUrl = '';
              this.pdfLoadError = 'لم يتم استلام مسار الملف';
            }
          },
          error: (error) => {
            console.error('Error:', error);
            this.isLoadingPdf = false;
            this.selectedPdfUrl = '';
            this.pdfLoadError = 'حدث خطأ أثناء تحميل العقد';
            this._cdr.detectChanges();
          }
        })
    );
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
