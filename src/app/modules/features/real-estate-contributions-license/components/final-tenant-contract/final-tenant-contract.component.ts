import { Component, OnDestroy, OnInit } from '@angular/core';
import { SysLicenseBeneficiaryContractFormService } from '../../services/sys-license-beneficiary-contract-form.service';
import { SysLicenseBeneficiaryContractFormListDto } from '../../dataModels/sys-license-beneficiary-contract-form-list-dto';
import { Subscription, takeUntil } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { environment } from 'src/environments/environment';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { UploadFileModel } from 'src/app/shared/models/upload-file.model';
import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';

@Component({
  selector: 'app-final-tenant-contract',
  templateUrl: './final-tenant-contract.component.html',
  styleUrls: ['./final-tenant-contract.component.scss']
})
export class FinalTenantContractComponent  implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  sysLicenseBeneficiaryContractForm = this._formBuilder.group({
    beneficiaryContractFormApproval: [false],
  });
  baseUrl = `${environment.baseURL}/`;
  sysLicenseBeneficiaryContractFormListDto: SysLicenseBeneficiaryContractFormListDto =
    new SysLicenseBeneficiaryContractFormListDto();

  localization = {
    addingNewItem: ' إضافة بند جديد',
    Save: 'حفظ البيانات',
    send: 'إرسال الطلب',
    previous: 'السابق',
  };
  activeTabIndex: number = 0;
  beneficiaryFiles: SysFileManagerCreateUpdateDto[] = [];
  multiFilesUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  constructor(
    private _sysLicenseBeneficiaryContractFormService: SysLicenseBeneficiaryContractFormService,
    private _formBuilder: FormBuilder,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _popupService: PopupService
  ) {}
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
    this.subscriptions.push(
      this._sysLicenseBeneficiaryContractFormService
        .GetLicenseBeneficiaryContractForm(this.licenseProjectId as string)
        .subscribe((res) => {
          if (res) {
            this.beneficiaryFiles = res.beneficiaryFiles;
            this.sysLicenseBeneficiaryContractFormListDto =
              res as SysLicenseBeneficiaryContractFormListDto;
            this.sysLicenseBeneficiaryContractForm.patchValue(
              this.sysLicenseBeneficiaryContractFormListDto
            );
          }
        })
    );
  }

  UpdateLicenseBeneficiaryContractForm(moveToNextTab: boolean = false): void {
    this.sysLicenseBeneficiaryContractFormListDto = this
      .sysLicenseBeneficiaryContractForm
      .value as SysLicenseBeneficiaryContractFormListDto;
    this.sysLicenseBeneficiaryContractFormListDto.licenseProjectId = this
      .licenseProjectId as string;
    this.sysLicenseBeneficiaryContractFormListDto.BeneficiaryFilesId =
      this.beneficiaryFiles.flatMap((f) => f.id);
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
            if (moveToNextTab) this.moveToNextTab();
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
        (res: null) => {
          this.UpdateLicenseBeneficiaryContractForm(true);
        }
      )
    );
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(
        (res: null) => {
          this.UpdateLicenseBeneficiaryContractForm();
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
    if (filesData.eventRes.data.length == 0) {
      this.beneficiaryFiles = [];
      return;
    }
    this.beneficiaryFiles = filesData.eventRes.data?.map((file) => {
      return {
        id: file.id,
        fileDescription: file.fileName,
        filePath: file.path,
        fileType: file.fileType,
      };
    });
  }
}
