import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { EscrowAccountDto } from '../../../license-project-requests/models/license-project.model';
import { LicenseProjectService } from '../../../license-project-requests/services/license-project.service';
import { LicenseRequest } from '../../models/license-request-dto';
import { LicenseRequestListService } from '../../services/license-request-list-service/license-request-list-service.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fawria-escrow-account',
  templateUrl: './fawria-escrow-account.component.html',
  styleUrls: ['./fawria-escrow-account.component.scss']
})
export class FawriaEscrowAccountComponent implements OnInit {
  request?: LicenseRequest;
  requestId?: string;

  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  entity: EscrowAccountDto = <EscrowAccountDto>{};
  escrowAccountForm: FormGroup;
  bankDocumentToActivateEscrowAccountsFileId: string | null = null;
  fileSubmitAttempted = false;
  uploaderConfig: FileUploader = {
    allowedExtensionsText : 'jpg, jpeg, pdf أو png',
    allowedExtensions : ['.jpg','.jpeg','.pdf','.png']
  } as FileUploader;
  baseUrl = `${environment.baseURL}/`;

  constructor(
    private location: Location,
    private _requestListService: LicenseRequestListService,
    private _licenseProjectService: LicenseProjectService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.escrowAccountForm = this.createForm();
  }

  ngOnInit(): void {
    this.licenseProjectId = this._requestListService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.onGet();
    }
  }

  createForm(): FormGroup {
    const ibanPattern = /^SA[A-Z0-9]{22}$/;
    return this.formBuilder.group({
      constructionCostsAccountNumber: ['', [Validators.required, Validators.pattern(ibanPattern)]],
      administrativeAndMarketingAccountNumber: ['', [Validators.required, Validators.pattern(ibanPattern)]],
      custodyAccountNumber: ['', [Validators.required, Validators.pattern(ibanPattern)]],
      incentivesSubIBAN:[null,Validators.pattern(ibanPattern)],
      financingSubIBAN:[null,Validators.pattern(ibanPattern)]
    },
      { validators: this.accountsNotDuplicateValidator.bind(this) });
  }

  onGet() {
    this.subscriptions.push(
      this._licenseProjectService.getEscrowAccount(this.licenseProjectId as string).subscribe((result) => {
        if (result) {
          this.entity = result;
          this.populateForm();
        }
      })
    );
  }

  populateForm(): void {
    this.escrowAccountForm.patchValue({
      constructionCostsAccountNumber: this.entity.constructionCostsAccountNumber || '',
      administrativeAndMarketingAccountNumber: this.entity.administrativeAndMarketingAccountNumber || '',
      custodyAccountNumber: this.entity.custodyAccountNumber || '',
      incentivesSubIBAN: this.entity.incentivesSubIBAN || '',
      financingSubIBAN: this.entity.financingSubIBAN || ''
    });
    if (this.entity.bankDocumentToActivateEscrowAccountsFileId) {
      this.bankDocumentToActivateEscrowAccountsFileId = this.entity.bankDocumentToActivateEscrowAccountsFileId;
    }
  }
  

  onFileUploaded(event: any): void {
    this.bankDocumentToActivateEscrowAccountsFileId = event?.eventRes?.data?.[0]?.id ?? null;
  }

  updateEscrowAccount(): void {
    this.fileSubmitAttempted = true;

    if (this.escrowAccountForm.invalid) {
      this.escrowAccountForm.markAllAsTouched();
      return;
    }

    if (!this.bankDocumentToActivateEscrowAccountsFileId && !this.entity.bankDocumentToActivateEscrowAccountsFile?.filePath) {
      this.fileSubmitAttempted = true;
      return;
    }

    this.entity.licenseProjectId = this.licenseProjectId as string;
    this.entity.administrativeAndMarketingAccountNumber = this.escrowAccountForm.get('administrativeAndMarketingAccountNumber')?.value;
    this.entity.constructionCostsAccountNumber = this.escrowAccountForm.get('constructionCostsAccountNumber')?.value;
    this.entity.custodyAccountNumber = this.escrowAccountForm.get('custodyAccountNumber')?.value;
    this.entity.financingSubIBAN = this.escrowAccountForm.get('financingSubIBAN')?.value;
    this.entity.incentivesSubIBAN = this.escrowAccountForm.get('incentivesSubIBAN')?.value;
    this.entity.bankDocumentToActivateEscrowAccountsFileId = this.bankDocumentToActivateEscrowAccountsFileId ?? undefined;

    this.subscriptions.push( 
      this._licenseProjectService.UpdateEscrowAccount(this.entity).subscribe({next: (response) => {
          if (response.isDone) {
            this.toastr.success('تم تحديث حساب الضمان بنجاح');
            this.fileSubmitAttempted = false;
            this.onGet();
          } else {
            this.toastr.error(response.message);
          }
        },
       
      })
    )
  }


  private accountsNotDuplicateValidator(form: FormGroup) {
    const values = [
      form.get('constructionCostsAccountNumber')?.value,
      form.get('administrativeAndMarketingAccountNumber')?.value,
      form.get('custodyAccountNumber')?.value,
      form.get('financingSubIBAN')?.value,
      form.get('incentivesSubIBAN')?.value,
    ].filter(v => !!v);

    const isDuplicate = values.length !== new Set(values).size;
    return isDuplicate ? { accountsDuplicate: true } : null;
  }
  goBack(): void {
    this.location.back();
  }

  activateEscrowAccount(): void {
    if (this.escrowAccountForm.invalid) {
      this.toastr.error('يرجى ملء جميع الحقول المطلوبة');
      this.escrowAccountForm.markAllAsTouched();
      return;
    }

    const formData = this.escrowAccountForm.value;
    console.log('Form Data:', formData);

    // TODO: Implement the API call to save the escrow account data
    // Example:
    // this.subscriptions.push(
    //   this._licenseProjectService.updateEscrowAccount(this.licenseProjectId, formData).subscribe(
    //     (result) => {
    //       this.toastr.success('تم تفعيل حساب الضمان بنجاح');
    //       this.goBack();
    //     },
    //     (error) => {
    //       this.toastr.error('حدث خطأ أثناء تفعيل حساب الضمان');
    //     }
    //   )
    // );

    this.toastr.success('تم تفعيل حساب الضمان بنجاح');
    this.goBack();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
