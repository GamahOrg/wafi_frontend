import { Component, Input } from '@angular/core';
import { Subscription, finalize } from 'rxjs';
import { BeneficiaryContractFormAdditionalTermsDto } from '../../models/beneficiary-contract-form-additional-terms-dto';
import { BeneficiaryContractFormAdditionalTermsService } from '../../services/beneficiary-contract-form-additional-terms.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SysLicenseBeneficiaryContractFormDto } from '../../dataModels/sys-license-beneficiary-contract-form-dto';
import { BeneficiaryPopupData, PopupData } from 'src/app/shared/models/popup.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { MatDialog } from '@angular/material/dialog';
import { SaveUpdateConfirmationComponent } from 'src/app/shared/components/save-update-confirmation/save-update-confirmation.component';
import { LicenseProjectPartiesAdditionalTermsDto, TermsPartType } from '../../models/license-project-parties-additional-terms-model';
import { LicenseProjectPartiesAdditionalTermsService } from '../../services/LicenseProjectPartiesAdditionalTerms.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-license-project-parties-additional-terms-form',
  templateUrl: './license-project-parties-additional-terms-form.component.html',
  styleUrls: ['./license-project-parties-additional-terms-form.component.scss'],
})
export class LicenseProjectPartiesAdditionalTermsFormComponent {
  // Input property to receive action type from parent component
  private _termsPartType: TermsPartType = null as any;

  @Input()
  set TermsPartType(value: TermsPartType) {
    this._termsPartType = value;
    // Update max item number when TermsPartType changes
    if (value != null && value !== undefined && this.licenseProjectId) {
      this.getMaxItemNumber();
    }
  }

  get TermsPartType(): TermsPartType {
    return this._termsPartType;
  }

  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  licenseProjectPartiesAdditionalTermsDto!: LicenseProjectPartiesAdditionalTermsDto
  showValidation: boolean = false;
  maxItemNumber: number = 0;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';

  // Prevent multiple submissions
  isSaving: boolean = false;

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
    private _licenseProjectPartiesAdditionalTermsService: LicenseProjectPartiesAdditionalTermsService,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _dialog: MatDialog
  ) {}

  partiesAdditionalTermsForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    licenseProjectId: [
      '00000000-0000-0000-0000-000000000000',
      [Validators.required],
    ],
    itemNumber: [0, [Validators.required]],
    itemTitle: ['', [Validators.required]],
    itemText: ['', [Validators.required]],
    isMainTerm: [true, [Validators.required]],
    additionalTermsAcknowledgment: [false, [Validators.required]],
    additionalTerms: this._formBuilder.array([]),
  });

  get controls() {
    return this.partiesAdditionalTermsForm.controls;
  }

  get additionalTermsArray(): FormArray {
    return this.partiesAdditionalTermsForm.get(
      'additionalTerms'
    ) as FormArray;
  }

  get acknowledgmentMessage(): string {
    if(this.TermsPartType === TermsPartType.EngineeringConsultant){
        return `أقر بأن البنود الإضافية لا تتعارض مع البنود الأساسية المرفقة في <a href="${this.baseUrl}Resources/AgreementsTemplates/agreement_engineering_temp.pdf" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">النموذج الموحّد لاتفاقية الاستشاري الهندسي</a>.`;
    }else if(this.TermsPartType === TermsPartType.Owners){
        return `أقر بأن البنود الإضافية لا تتعارض مع البنود الأساسية المرفقة في <a href="${this.baseUrl}Resources/AgreementsTemplates/agreement_developer_temp.pdf" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">النموذج الموحّد لاتفاقية الملاك</a>.`;
    }else if(this.TermsPartType === TermsPartType.Accountant){
        return `أقر بأن البنود الإضافية لا تتعارض مع البنود الأساسية المرفقة في <a href="${this.baseUrl}Resources/AgreementsTemplates/agreement_accountant_temp.pdf" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">النموذج الموحّد لاتفاقية المحاسب القانوني</a>.`;
    }
    return '';
  }

  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.observePopupEvents();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if(this.licenseProjectId){
      // Only get max item number if TermsPartType is already set
      if(this.TermsPartType != null && this.TermsPartType !== undefined){
        this.getMaxItemNumber();
      }
      this.subscriptions.push(
        this._popupService.popupData.subscribe((res: BeneficiaryPopupData) => {

          if (res && res.data) {
            if (typeof res.data === 'object' && 'actionType' in res.data) {
              // Setter will automatically call getMaxItemNumber() when value changes
              this.TermsPartType = (res.data as any).actionType;
            }
            if (typeof res.data === 'object' && 'obj' in res.data) {
              // this.partiesAdditionalTermsForm.patchValue((res.data as any).obj);
              this.mapPopupDataToForm((res.data as any).obj);
            }
          // } else {
          }
      })
      );
    }
  }

  getMaxItemNumber() {
    this._licenseProjectPartiesAdditionalTermsService
      .GetMaxItemNumberByLicenseProjectId(this.licenseProjectId as string, this.TermsPartType)
      .subscribe((res) => {
        this.maxItemNumber = (res.data as number) + 1;
      });
  }

  addAdditionalTerm(): void {
    const additionalTermGroup = this._formBuilder.group({
      itemText: ['', [Validators.required]],
    });
    this.additionalTermsArray.push(additionalTermGroup);
  }

  removeAdditionalTerm(index: number): void {
    this.additionalTermsArray.removeAt(index);
  }

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
    while (this.additionalTermsArray.length !== 0) {
      this.additionalTermsArray.removeAt(0);
    }
  }

  private mapMainTermToForm(mainTerm: any): void {
    this.licenseProjectPartiesAdditionalTermsDto = {
      id: mainTerm.id,
      licenseProjectId: mainTerm.licenseProjectId,
      itemNumber: mainTerm.itemNumber,
      itemTitle: mainTerm.itemTitle,
      itemText: mainTerm.itemText,
      // additionalTermsAcknowledgment: mainTerm.additionalTermsAcknowledgment,
      isMainTerm: true,
      parentId: null,
      termsPartType: this.TermsPartType,
      additionalTermsAcknowledgment: mainTerm.additionalTermsAcknowledgment,
    };

    this.partiesAdditionalTermsForm.patchValue({
      id: this.licenseProjectPartiesAdditionalTermsDto.id,
      licenseProjectId:
        this.licenseProjectPartiesAdditionalTermsDto.licenseProjectId,
      itemNumber: this.licenseProjectPartiesAdditionalTermsDto.itemNumber,
      itemTitle: this.licenseProjectPartiesAdditionalTermsDto.itemTitle,
      itemText: this.licenseProjectPartiesAdditionalTermsDto.itemText,
      isMainTerm: this.licenseProjectPartiesAdditionalTermsDto.isMainTerm,
      // additionalTermsAcknowledgment: this.licenseProjectPartiesAdditionalTermsDto.additionalTermsAcknowledgment,
    });
  }

  private mapAdditionalTermsToForm(additionalTerms: any[]): void {
    additionalTerms.sort((a, b) => {
      const aNum = parseFloat(a.itemNumber?.toString() || '0');
      const bNum = parseFloat(b.itemNumber?.toString() || '0');
      return aNum - bNum;
    });

    additionalTerms.forEach((term) => {
      const additionalTermGroup = this._formBuilder.group({
        itemText: [term.itemText || '', [Validators.required]],
      });
      this.additionalTermsArray.push(additionalTermGroup);
    });
  }

  private mapPopupDataToForm(data: any): void {
    try {
      this.clearAdditionalTerms();

      if (data && data.parent) {
        this.maxItemNumber = data.parent.itemNumber;
        this.mapMainTermToForm(data.parent);
      }
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

  toArabicIndic(num: number): string {
    const arabicIndic = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(digit => arabicIndic[parseInt(digit)]).join('');
  }

  save(): void {
    // Prevent multiple submissions
    if (this.isSaving) {
      return;
    }

    this.controls.licenseProjectId.setValue(this.licenseProjectId);

    const isUpdate = this.controls.id.value && this.controls.id.value !== '00000000-0000-0000-0000-000000000000';

    if (!this.controls.id.value || this.controls.id.value === '00000000-0000-0000-0000-000000000000' ) {
      this.controls.id.setValue(this.generateGuid());
    }

    if (!this.partiesAdditionalTermsForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
      this.partiesAdditionalTermsForm?.markAllAsTouched();
      return;
    }

    // const isactiveFlag = this.stringToBoolean(this._sharedLicenseProjectService.getIsActiveTermsFlag()!);

    const formValues = this.partiesAdditionalTermsForm.value;

    this.licenseProjectPartiesAdditionalTermsDto = {
      id: formValues.id as string,
      licenseProjectId: this.licenseProjectId || '',
      itemNumber: formValues.itemNumber || this.maxItemNumber,
      itemTitle: formValues.itemTitle ?? null,
      itemText: formValues.itemText || '',
      additionalTermsAcknowledgment: formValues.additionalTermsAcknowledgment || false,
      isMainTerm: true,
      parentId: null,
      termsPartType: this.TermsPartType,
    };

    if (!this.licenseProjectPartiesAdditionalTermsDto.additionalTermsAcknowledgment) {
      this._toastrService.error(
        'نأمل الموافقه على الاقرار حتى يتم تسجيل البند'
      );
      return;
    }

    const termsToSave: LicenseProjectPartiesAdditionalTermsDto[] = [];

    termsToSave.push(this.licenseProjectPartiesAdditionalTermsDto);

    const additionalTermsArray = formValues.additionalTerms;
    if (additionalTermsArray && additionalTermsArray.length > 0) {
      additionalTermsArray.forEach((additionalTerm: any, index: number) => {
        if (additionalTerm.itemText && additionalTerm.itemText.trim()) {
          const additionalTermDto: LicenseProjectPartiesAdditionalTermsDto = {
            id: this.generateGuid(),
            licenseProjectId: this.licenseProjectId || '',
            itemNumber: index + 1,
            itemTitle: null,
            itemText: additionalTerm.itemText.trim(),
            // additionalTermsAcknowledgment: false,
            isMainTerm: false,
            parentId: this.licenseProjectPartiesAdditionalTermsDto.id,
            termsPartType: this.TermsPartType,
            additionalTermsAcknowledgment: true,
          };
          termsToSave.push(additionalTermDto);
        }
      });
    }

    this.isSaving = true;
    this.subscriptions.push(
      this._licenseProjectPartiesAdditionalTermsService
        .SaveAsync(termsToSave)
        .pipe(
          finalize(() => this.isSaving = false)
        )
        .subscribe((res) => {
          if (res.isDone) {
            this._toastrService.success(this.localization.savedSuccessfully);
            this._popupService.dismissDialog();
            this._popupService.confirmAction.emit();
          } else this._toastrService.error(res.message);
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
