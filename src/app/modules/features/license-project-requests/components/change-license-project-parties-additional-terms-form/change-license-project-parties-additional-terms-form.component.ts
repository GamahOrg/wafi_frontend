import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, finalize } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { BeneficiaryPopupData } from 'src/app/shared/models/popup.model';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { ChangeLicenseProjectAccountantRequestService } from '../../services/change-license-project-accountant-request.service';
import { ChangeLicenseProjectAdditionalTermDto } from '../../models/change-license-project-accountant-request-data-dto';

@Component({
  selector: 'app-change-license-project-parties-additional-terms-form',
  templateUrl: './change-license-project-parties-additional-terms-form.component.html',
  styleUrls: ['./change-license-project-parties-additional-terms-form.component.scss'],
})
export class ChangeLicenseProjectPartiesAdditionalTermsFormComponent
  implements OnInit, OnDestroy
{
  subscriptions: Subscription[] = [];
  showValidation = false;
  isSaving = false;
  maxItemNumber = 1;
  licenseProjectRequestId: string | null = null;
  termsPartType: number = 3;
  editingTerm: ChangeLicenseProjectAdditionalTermDto | null = null;
  editingChildren: ChangeLicenseProjectAdditionalTermDto[] = [];
  private popupDataInitialized = false;

  form = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000'],
    itemNumber: [0, [Validators.required]],
    itemTitle: ['', [Validators.required, Validators.maxLength(150)]],
    itemText: ['', [Validators.required, Validators.maxLength(2000)]],
    additionalTermsAcknowledgment: [false, [Validators.requiredTrue]],
    additionalTerms: this._formBuilder.array([]),
  });

  localization = {
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    maxLengthErrorMsg150: 'يجب ألا يتجاوز عنوان البند 150 حرفًا.',
    maxLengthErrorMsg2000: 'يجب ألا يتجاوز نص البند 2000 حرف',
  };

  constructor(
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _popupService: PopupService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _service: ChangeLicenseProjectAccountantRequestService,
  ) {}

  ngOnInit(): void {
    this.licenseProjectRequestId =
      this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    this.observePopupData();
    this.observeConfirmAction();
    this.observeCancelAction();
  }

  get controls() {
    return this.form.controls;
  }

  get additionalTermsArray(): FormArray {
    return this.form.get('additionalTerms') as FormArray;
  }

  get acknowledgmentMessage(): string {
    return 'أقر بأن البنود الإضافية لا تتعارض مع البنود الأساسية.';
  }

  toArabicIndic(num: number): string {
    const d = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    return num.toString().split('').map(c => d[parseInt(c)] ?? c).join('');
  }

  addAdditionalTerm(): void {
    this.additionalTermsArray.push(
      this._formBuilder.group({ itemText: ['', [Validators.required, Validators.maxLength(2000)]] })
    );
  }

  removeAdditionalTerm(index: number): void {
    this.additionalTermsArray.removeAt(index);
  }

  getAdditionalTermGroup(index: number): FormGroup {
    return this.additionalTermsArray.at(index) as FormGroup;
  }

  private observePopupData(): void {
    this.subscriptions.push(
      this._popupService.popupData.subscribe((res: BeneficiaryPopupData) => {
        if (this.popupDataInitialized || !res?.data) return;
        this.popupDataInitialized = true;

        const data = res.data as any;
        if (data.termsPartType != null) {
          this.termsPartType = data.termsPartType;
        }
        if (data.maxItemNumber != null) {
          this.maxItemNumber = data.maxItemNumber;
          this.form.get('itemNumber')?.setValue(this.maxItemNumber);
        }
        if (data.pageNode === 'edit' && data.obj) {
          this.mapToForm(data.obj.parent, data.obj.children ?? []);
        }
      })
    );
  }

  private mapToForm(parent: ChangeLicenseProjectAdditionalTermDto, children: ChangeLicenseProjectAdditionalTermDto[]): void {
    this.editingTerm = parent;
    this.editingChildren = children;
    this.maxItemNumber = parent.itemNumber;
    this.form.patchValue({
      id: parent.id,
      itemNumber: parent.itemNumber,
      itemTitle: parent.itemTitle ?? '',
      itemText: parent.itemText,
    });
    this.clearAdditionalTerms();
    const sorted = [...children].sort((a, b) => a.itemNumber - b.itemNumber);
    sorted.forEach((c) => {
      this.additionalTermsArray.push(
        this._formBuilder.group({ itemText: [c.itemText, [Validators.required, Validators.maxLength(2000)]] })
      );
    });
  }

  private clearAdditionalTerms(): void {
    while (this.additionalTermsArray.length) this.additionalTermsArray.removeAt(0);
  }

  private generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }

  private observeConfirmAction(): void {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe(() => this.save())
    );
  }

  private observeCancelAction(): void {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe(() => this._popupService.dismissDialog())
    );
  }

  save(): void {
    if (this.isSaving) return;

    if (!this.form.valid) {
      this.showValidation = true;
      if (this.controls['additionalTermsAcknowledgment']?.hasError('required')) {
        this._toastr.error('نأمل الموافقة على الاقرار حتى يتم تسجيل البند');
      } else {
        this._toastr.error(this.localization.PleaseAddAllRequiredFields);
      }
      this.form.markAllAsTouched();
      return;
    }

    const fv = this.form.value;
    const mainId = fv.id === '00000000-0000-0000-0000-000000000000' || !fv.id
      ? this.generateGuid()
      : fv.id as string;

    const terms: ChangeLicenseProjectAdditionalTermDto[] = [];

    terms.push({
      id: mainId,
      licenseProjectRequestId: this.licenseProjectRequestId ?? '',
      termsPartType: this.termsPartType,
      itemNumber: fv.itemNumber ?? this.maxItemNumber,
      itemTitle: fv.itemTitle ?? null,
      itemText: fv.itemText ?? '',
      isMainTerm: true,
      additionalTermsAcknowledgment: fv.additionalTermsAcknowledgment ?? false,
      parentId: null,
    });

    const additionalArr = fv.additionalTerms as any[] ?? [];
    additionalArr.forEach((sub: any, i: number) => {
      if (sub.itemText?.trim()) {
        const existingChild = this.editingChildren[i];
        terms.push({
          id: existingChild?.id ?? this.generateGuid(),
          licenseProjectRequestId: this.licenseProjectRequestId ?? '',
          termsPartType: this.termsPartType,
          itemNumber: i + 1,
          itemTitle: null,
          itemText: sub.itemText.trim(),
          isMainTerm: false,
          additionalTermsAcknowledgment: true,
          parentId: mainId,
        });
      }
    });

    this.isSaving = true;
    this.setPopupButtonsDisabled(true);

    this.subscriptions.push(
      this._service.saveTermsData(terms).pipe(
        finalize(() => {
          this.isSaving = false;
          this.setPopupButtonsDisabled(false);
        })
      ).subscribe({
        next: (res: any) => {
          if (res?.isDone) {
            this._toastr.success(this.localization.savedSuccessfully);
            this._popupService.dismissDialog();
            this._popupService.confirmAction.emit();
          } else {
            this._toastr.error(res?.message || 'حدث خطأ أثناء الحفظ');
          }
        },
        error: () => this._toastr.error('حدث خطأ أثناء حفظ البيانات'),
      })
    );
  }

  private setPopupButtonsDisabled(disabled: boolean): void {
    const current = this._popupService.popupData.getValue();
    const buttons = [
      { title: 'إلغاء', actionType: ButtonType.cancel, isVisable: true, isDisables: disabled },
      { title: current.submitButtonTitle || 'إضافة بند', actionType: ButtonType.confirm, isVisable: true, isDisables: disabled },
    ];
    this._popupService.popupData.next({ ...current, buttons });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
    this._popupService.popupData.next({title: '', data: null, component: null, buttons: []});
  }
}
