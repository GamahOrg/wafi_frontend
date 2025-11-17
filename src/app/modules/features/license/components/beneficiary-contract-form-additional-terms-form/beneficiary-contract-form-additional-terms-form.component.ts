import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BeneficiaryContractFormAdditionalTermsDto } from '../../models/beneficiary-contract-form-additional-terms-dto';
import { BeneficiaryContractFormAdditionalTermsService } from '../../services/beneficiary-contract-form-additional-terms.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SysLicenseBeneficiaryContractFormDto } from '../../dataModels/sys-license-beneficiary-contract-form-dto';
import {
  BeneficiaryPopupData,
  PopupData,
} from 'src/app/shared/models/popup.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { MatDialog } from '@angular/material/dialog';
import { SaveUpdateConfirmationComponent } from 'src/app/shared/components/save-update-confirmation/save-update-confirmation.component';

@Component({
  selector: 'app-beneficiary-contract-form-additional-terms-form',
  templateUrl:
    './beneficiary-contract-form-additional-terms-form.component.html',
  styleUrls: [
    './beneficiary-contract-form-additional-terms-form.component.scss',
  ],
})
export class BeneficiaryContractFormAdditionalTermsFormComponent {
  subscriptions: Subscription[] = [];
  sysLicenseBeneficiaryContractFormList: SysLicenseBeneficiaryContractFormDto[] =
    [];
  beneficiaryContractFormAdditionalTermsDto: BeneficiaryContractFormAdditionalTermsDto =
    new BeneficiaryContractFormAdditionalTermsDto();
  showValidation: boolean = false;
  maxItemNumber: number = 0;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';

  localization = {
    title: 'إضافة البنود الإضافية لكل نموذج عقد المستفيد النهائي',
    itemNumber: 'رقم البند التسلسلي',
    itemTitle: 'عنوان البند',
    itemTitlePlaceholder: 'برجاء إدخال عنوان البند',
    itemText: 'نص الأساسي',
    itemTextPlaceholder: 'برجاء إدخال نص البند الأساسي',
    additionalTermsAcknowledgment: 'إقرار البنود الاضافية',
    licenseBeneficiaryContractFormId: ' نوع البند',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    addAdditionalTerm: 'اضافة بند اضافي',
    additionalTermText: 'نص البند الاضافي',
    additionalTermTextPlaceholder: 'برجاء إدخال نص البند الإضافي',
    remove: 'حذف',
  };

  constructor(
    private _beneficiaryContractFormAdditionalTermsService: BeneficiaryContractFormAdditionalTermsService,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _dialog: MatDialog
  ) {}

  beneficiaryContractFormAdditionalTermsForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    // licenseBeneficiaryContractFormId: ['', [Validators.required]],
    licenseProjectId: [
      '00000000-0000-0000-0000-000000000000',
      [Validators.required],
    ],
    itemNumber: [0, [Validators.required]],
    itemTitle: ['', [Validators.required]],
    itemText: ['', [Validators.required]],
    isMainTerm: [true, [Validators.required]],
    additionalTermsAcknowledgment: [false, [Validators.required]],
    additionalTerms: this._formBuilder.array([]), // FormArray for dynamic additional terms
  });

  get controls() {
    return this.beneficiaryContractFormAdditionalTermsForm.controls;
  }

  get additionalTermsArray(): FormArray {
    return this.beneficiaryContractFormAdditionalTermsForm.get(
      'additionalTerms'
    ) as FormArray;
  }

  ngOnInit() {
   
    this.getLicenseProjectIdStorage();
    // this.getList();
    this.observePopupEvents();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();

    this.subscriptions.push(
      this._popupService.popupData.subscribe((res: BeneficiaryPopupData) => {
        if (res && res.data) {
          this.mapPopupDataToForm(res.data);
        } else {
          this.getMaxItemNumber();
        }
      })
    );
  }

  getMaxItemNumber() {
    this._beneficiaryContractFormAdditionalTermsService
      .GetMaxItemNumberByLicenseProjectId(this.licenseProjectId as string)
      .subscribe((res) => {
        this.maxItemNumber = (res.data as number) + 1;
      });
  }

  // getList() {
  
  //   this._beneficiaryContractFormAdditionalTermsService
  //     .GetList()
  //     .subscribe((res) => {
  //       this.sysLicenseBeneficiaryContractFormList =
  //         res.data as SysLicenseBeneficiaryContractFormDto[];
  //     });
  // }

  // Add new additional term
  addAdditionalTerm(): void {
    const additionalTermGroup = this._formBuilder.group({
      itemText: ['', [Validators.required]],
    });
    this.additionalTermsArray.push(additionalTermGroup);
  }

  removeAdditionalTerm(index: number): void {
    this.additionalTermsArray.removeAt(index);
  }

  // Get FormGroup for specific additional term
  getAdditionalTermGroup(index: number): FormGroup {
    return this.additionalTermsArray.at(index) as FormGroup;
  }

  observePopupEvents(): void {
    this.observeCancelAction();
    this.observeConfirmAction();
  }

  private observeCancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        this._popupService.dismissDialog();
      })
    );
  }

  private clearAdditionalTerms(): void {
    // Clear the FormArray
    while (this.additionalTermsArray.length !== 0) {
      this.additionalTermsArray.removeAt(0);
    }
  }

  private mapMainTermToForm(mainTerm: any): void {
    // Update the DTO object
    this.beneficiaryContractFormAdditionalTermsDto = {
      id: mainTerm.id,
      licenseBeneficiaryContractFormId:
        mainTerm.licenseBeneficiaryContractFormId,
      licenseProjectId: mainTerm.licenseProjectId,
      itemNumber: mainTerm.itemNumber,
      itemTitle: mainTerm.itemTitle,
      itemText: mainTerm.itemText,
      additionalTermsAcknowledgment: mainTerm.additionalTermsAcknowledgment,
      isMainTerm: true,
      parentId: null,
      licenseBeneficiaryContractForm: mainTerm.licenseBeneficiaryContractForm,
      isActive: mainTerm.isActive,
      createdOn : ''
    };

    // Patch the form with main term data
    this.beneficiaryContractFormAdditionalTermsForm.patchValue({
      id: this.beneficiaryContractFormAdditionalTermsDto.id,
      licenseProjectId:
        this.beneficiaryContractFormAdditionalTermsDto.licenseProjectId,
      itemNumber: this.beneficiaryContractFormAdditionalTermsDto.itemNumber,
      itemTitle: this.beneficiaryContractFormAdditionalTermsDto.itemTitle,
      itemText: this.beneficiaryContractFormAdditionalTermsDto.itemText,
      isMainTerm: this.beneficiaryContractFormAdditionalTermsDto.isMainTerm,
      additionalTermsAcknowledgment:
        this.beneficiaryContractFormAdditionalTermsDto
          .additionalTermsAcknowledgment,
    });
  }

  private mapAdditionalTermsToForm(additionalTerms: any[]): void {
    // Sort additional terms by itemNumber to maintain order
    additionalTerms.sort((a, b) => {
      const aNum = parseFloat(a.itemNumber?.toString() || '0');
      const bNum = parseFloat(b.itemNumber?.toString() || '0');
      return aNum - bNum;
    });

    // Add each additional term to the form array
    additionalTerms.forEach((term) => {
      const additionalTermGroup = this._formBuilder.group({
        itemText: [term.itemText || '', [Validators.required]],
      });
      this.additionalTermsArray.push(additionalTermGroup);
    });
  }

  private mapPopupDataToForm(data: any): void {
    try {
      // Clear existing additional terms
      this.clearAdditionalTerms();

      // Check if data is an array (multiple terms) or single object
      if (data && data.parent) {
        this.maxItemNumber = data.parent.itemNumber;
        // Map parent as main term
        this.mapMainTermToForm(data.parent);
      }
      // Map children as additional terms
      if (
        data &&
        data.parent &&
        data.child &&
        Array.isArray(data.child) &&
        data.child.length > 0
      ) {
        this.mapAdditionalTermsToForm(data.child);
      }
    } catch (error) {
      console.error('Error mapping popup data to form:', error);
      this._toastrService.error('خطأ في تحميل البيانات');
    }
  }

  private observeConfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    );
  }

  // Generate new GUID
  private generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

   stringToBoolean(str:string) {
  return str.toLowerCase() === "true";
}

  save(): void {
    
    this.controls.licenseProjectId.setValue(this.licenseProjectId);

    // Check if this is an update (existing record)
    const isUpdate = this.controls.id.value &&
                     this.controls.id.value !== '00000000-0000-0000-0000-000000000000';

    // Generate new GUID if id is default
    if (
      !this.controls.id.value ||
      this.controls.id.value === '00000000-0000-0000-0000-000000000000'
    ) {
      this.controls.id.setValue(this.generateGuid());
    }

    if (!this.beneficiaryContractFormAdditionalTermsForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(
        this.localization.PleaseAddAllRequiredFields
      );
      this.beneficiaryContractFormAdditionalTermsForm?.markAllAsTouched();
      return;
    }

     const isactiveFlag =
      this.stringToBoolean(this._sharedLicenseProjectService.getIsActiveTermsFlag()!);


    // Get form values
    const formValues = this.beneficiaryContractFormAdditionalTermsForm.value;

    // Prepare main term (البند الأساسي)
    this.beneficiaryContractFormAdditionalTermsDto = {
      id: formValues.id as string,
      licenseBeneficiaryContractFormId: null,
      licenseProjectId: this.licenseProjectId || '',
      itemNumber: formValues.itemNumber || this.maxItemNumber,
      itemTitle: formValues.itemTitle ?? null,
      itemText: formValues.itemText || '',
      additionalTermsAcknowledgment:
        formValues.additionalTermsAcknowledgment || false,
      isMainTerm: true, // Main term
      parentId: null,
      isActive:isactiveFlag,
      licenseBeneficiaryContractForm:
        new SysLicenseBeneficiaryContractFormDto(),
      createdOn: ''
    };

    if (
      !this.beneficiaryContractFormAdditionalTermsDto
        .additionalTermsAcknowledgment
    ) {
      this._toastrService.error(
        'نأمل الموافقه على الاقرار حتى يتم تسجيل البند'
      );
      return;
    }

    // Prepare array to save (main term + additional terms)
    const termsToSave: BeneficiaryContractFormAdditionalTermsDto[] = [];

    // Add main term
    termsToSave.push(this.beneficiaryContractFormAdditionalTermsDto);

    // Add additional terms if they exist
    const additionalTermsArray = formValues.additionalTerms;
    if (additionalTermsArray && additionalTermsArray.length > 0) {
      additionalTermsArray.forEach((additionalTerm: any, index: number) => {
        if (additionalTerm.itemText && additionalTerm.itemText.trim()) {
          const additionalTermDto: BeneficiaryContractFormAdditionalTermsDto = {
            id: this.generateGuid(), // Generate new GUID for each additional term
            licenseBeneficiaryContractFormId: null,
            licenseProjectId: this.licenseProjectId || '',
            itemNumber: index + 1, // Format: maxItemNumber.index
            itemTitle: null,
            itemText: additionalTerm.itemText.trim(),
            additionalTermsAcknowledgment: false,
            isMainTerm: false, // Additional term
            isActive:isactiveFlag,
            parentId: this.beneficiaryContractFormAdditionalTermsDto.id, // Reference to main term
            licenseBeneficiaryContractForm:
              new SysLicenseBeneficiaryContractFormDto(),
              createdOn : ''
          };
          termsToSave.push(additionalTermDto);
        }
      });
    }

    this.subscriptions.push(
      this._beneficiaryContractFormAdditionalTermsService
        .SaveAsync(termsToSave)
        .subscribe((res) => {
          if (res.isDone) {
            this._toastrService.success(this.localization.savedSuccessfully);
            this._beneficiaryContractFormAdditionalTermsService.setBeneficiaryList(
              res.data as BeneficiaryContractFormAdditionalTermsDto[]
            );

             const title ='تم تعديل البنود';
             const message =  'سيتم إنشاء نسخة بنود جديدة';

            // Show confirmation popup only if this was an update
            if (isUpdate) {
              const dialogRef = this._dialog.open(SaveUpdateConfirmationComponent, {
                width: '600px',
                disableClose: true,
                panelClass: 'save-update-confirmation-dialog',
                data:{
                  title,
                  message
                }
              });

              // Close the form popup when user clicks OK on the confirmation
              this.subscriptions.push(
                dialogRef.afterClosed().subscribe(() => {
                  this._popupService.dismissDialog();
                })
              );
            } else {
              // For new records, just close the form popup
              this._popupService.dismissDialog();
            }
          } else this._toastrService.error(res.message);
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
