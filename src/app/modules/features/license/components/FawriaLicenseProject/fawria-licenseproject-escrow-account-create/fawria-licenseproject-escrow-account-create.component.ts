import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription, forkJoin } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ToastrNotificatioService } from '../../../../../../core/services/toastr-notification/toastr-notificatio.service';
import { UserDataService } from '../../../../../../core/services/user-data/user-data.service';
import { BankDto } from '../../../dataModels/bank.dto';
import { customerResponse } from '../../../../../../shared/models/customer.model';
import { FawriaLicenseBankInfoDto } from '../../../models/FawriaLicenseProject/fawria-license-bank-info-dto';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { SysBankService } from '../../../services/sysBank/sys-bank.service';
import { ProjectRealStateDeveloperService } from '../../../services/licenseProjects/project-real-state-developer.service';
import { FawriaLicenseProjectBankInfoService } from '../../../services/licenseProjects/fawria-license-project-bank-info.service';
import { CustomerShortDto } from '../../../models/facility-short-dto';
import { FawriaLicenseBankInfoResponseDto } from '../../../models/FawriaLicenseProject/fawria-license-bank-info-response-dto';
import { environment } from 'src/environments/environment';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { BankTermsConditionsPopupComponent } from '../bank-terms-conditions-popup/bank-terms-conditions-popup.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { LicenseRequestService } from '../../../services/license-request.service';
import { PopupData, notePopupData } from 'src/app/shared/models/popup.model';
import { ProjectApprovalsService } from '../../../services/licenseProjects/project-approvals.service';
import { ApprovalComponent } from '../../approval/approval.component';
import {
  RequestSuccessResponse,
  RequestValidation,
} from '../../../dataModels/request-validation.model';
import { LicenseRequestValidationPopupComponent } from '../../license-request-validation-popup/license-request-validation-popup.component';
import { Configuration } from 'src/app/core/configurations/shared.config';

interface Delegator {
  id: string;
  name: string;
  selected?: boolean;
}

@Component({
  selector: 'app-fawria-licenseproject-escrow-account-create',
  templateUrl: './fawria-licenseproject-escrow-account-create.component.html',
  styleUrls: ['./fawria-licenseproject-escrow-account-create.component.scss'],
})
export class FawriaLicenseprojectEscrowAccountCreateComponent
  implements OnInit, OnDestroy
{
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  escrowAccountForm: FormGroup;
  showValidation: boolean = false;
  termsCondtition: any[] = [];
  banks: BankDto[] = [];
  delegators: Delegator[] = [];
  subCustomerList: CustomerShortDto[] = [];
  userData: customerResponse | null = null;
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  facilityId: string = '00000000-0000-0000-0000-000000000000';

  isExistingValidation: boolean = false;
  isProjectDecisionsApproved: boolean = false;
  requestSubmittedSuccessfully: boolean = false;
  fawriaLicenseBankInfoDto: FawriaLicenseBankInfoDto =
    new FawriaLicenseBankInfoDto();

  // Multiselect dropdown state
  isDelegatorsDropdownOpen: boolean = false;

  localization = {
    title: 'حساب الضمان',
    bank: 'البنك',
    selectBank: 'اختر البنك',
    delegators: 'المفوضين بالتوقيع على وثائق الصرف للمطور',
    selectDelegators: 'اختر المفوضين بالتوقيع على وثائق الصرف للمطور',
    delegator: 'المفوضين',
    requiredErrorMsg: 'هذا الحقل مطلوب',
    savedSuccessfully: 'تم الحفظ بنجاح',
    PleaseAddAllRequiredFields:
      'لم يتم إدخال جميع الحقول الإلزامية، يرجى استكمال البيانات المطلوبة',
    approvedBankTermsConditionsMessage: 'يجب الموافقة على اقرار شروط البنك',
    saveAsDraft: 'حفظ كمسودة',
    next: 'السابق',
    previous: 'التالي',
    approvedBankTermsConditions:
      'أقر بأن البنود الإضافية لا تتعارض مع البنود الأساسية المرفقة في <a href="${this.baseUrl}Resources/AgreementsTemplates/agreement_engineering_temp.pdf" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">النموذج الموحّد لاتفاقية الاستشاري الهندسي</a>',
  };

  constructor(
    private _formBuilder: FormBuilder,
    private _bankService: SysBankService,
    private _toastrService: ToastrService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _userDataService: UserDataService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _projectRealStateDeveloperService: ProjectRealStateDeveloperService,
    private _projectBankInfoService: FawriaLicenseProjectBankInfoService,
    private _licenseRequestService: LicenseRequestService,
    private _tabsService: TabsService,
    private _popupService: PopupService,
    private _projectApprovalsService: ProjectApprovalsService,
  ) {
    this.escrowAccountForm = this._formBuilder.group({
      bankId: [null, [this.requiredGuidValidator()]],
      delegatorIds: [[], [Validators.required]],
      approvedBankTermsConditions: [false, [Validators.required]],
      saudiTaxNumber: ['', [Validators.required]],
      fatcaTaxNumber: [''],
      crsTaxNumber: [''],
    });
  }

  ngOnInit(): void {
    this.loadUserData();
    this.loadLicenseProjectId();
    this.observeFormChanges();
    this.loadComponentData();
    this.observeTabButtons();
    this.showSaveAsDraftButton();
    this.showSaveAsNextButton();
  }

  setSelectedBank(bankId: string) {
    const control = this.escrowAccountForm.get('bankId');

    control?.setValue(bankId);
    control?.markAsTouched();
    control?.markAsDirty();
    control?.updateValueAndValidity();
    this.loadTermsCondition();
  }
  requiredGuidValidator() {
    return (control: AbstractControl) => {
      const emptyGuid = '00000000-0000-0000-0000-000000000000';
      return !control.value || control.value === emptyGuid
        ? { required: true }
        : null;
    };
  }
  approvedBankTermsConditions(): string {
    return ' أقر بالموافقة على شروط وأحكام البنك.';
    // return `أقر بالموافقة على <a href="${this.baseUrl}Resources/AgreementsTemplates/agreement_engineering_temp.pdf" disabled="disabled" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">شروط وأحكام البنك</a>.`;
    // return `أقر بالموافقة على <a href="${this.baseUrl}Resources/AgreementsTemplates/agreement_engineering_temp.pdf" disabled="disabled" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">شروط وأحكام البنك</a>.`;
  }

  openTermsConditionsPopup(): void {
    if (this.termsCondtition.length === 0) {
      this._toastrNotificationService.showInfo(
        'لا توجد شروط وأحكام متاحة للبنك المحدد',
      );
      return;
    }

    this._popupService.updatePopupData({
      title: 'شروط وأحكام البنك',
      iconClass: 'material-icons-outlined',
      component: BankTermsConditionsPopupComponent,
      data: this.termsCondtition,
      panelClass: ['terms-conditions-dialog', 'large-dialog'],
      buttons: [],
    });
  }

  ngOnDestroy(): void {
    this._tabsService.setUnsavedChanges(false);
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  get controls() {
    return this.escrowAccountForm.controls;
  }

  private loadUserData(): void {
    const sub = this._userDataService.getCustomerData().subscribe((res) => {
      this.userData = res;
      this.isExistingValidation = this.userData?.isEmployee ?? false;
      this.facilityId = this.userData?.isEmployee
        ? '00000000-0000-0000-0000-000000000000'
        : (this.userData?.facilities[0]?.id ?? this.facilityId);
    });
    this.subscriptions.push(sub);
  }

  private loadLicenseProjectId(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage() ??
      '00000000-0000-0000-0000-000000000000';
  }

  private observeFormChanges(): void {
    const sub = this.escrowAccountForm.valueChanges.subscribe(() => {
      if (this.escrowAccountForm.dirty) {
        this._tabsService.setUnsavedChanges(true);
      }

      const rawValue = this.escrowAccountForm.getRawValue();
      this.fawriaLicenseBankInfoDto = {
        ...this.fawriaLicenseBankInfoDto,
        bankId: rawValue.bankId ?? '',
        delegatorCustomerIds: rawValue.delegatorIds ?? [],
        licenseProjectId: this.licenseProjectId,
        approvedBankTermsConditions:
          rawValue.approvedBankTermsConditions ?? false,
        crsTaxNumber: rawValue.crsTaxNumber ?? '',
        fatcaTaxNumber: rawValue.fatcaTaxNumber ?? '',
        saudiTaxNumber: rawValue.saudiTaxNumber ?? '',
      };
    });
    this.subscriptions.push(sub);
  }

  private loadTermsCondition(): void {
    const rawValue = this.escrowAccountForm.getRawValue();
    this._bankService
      .GetSysBankTermsCondition(rawValue.bankId)
      .subscribe((res) => {
        this.termsCondtition = res.data as any[];
      });
  }
  private loadComponentData(): void {
    const sub = forkJoin({
      banksResponse: this._bankService.GetIntegrationBanks(),
      subCustomers:
        this._projectRealStateDeveloperService.GetFacilitySubCustomers(
          this.facilityId,
        ),
    }).subscribe({
      next: ({ banksResponse, subCustomers }) => {
        this.banks = banksResponse.data as BankDto[];

        //set default selected Bank if only one Bank
        if (this.banks.length == 1) {
          this.setSelectedBank(this.banks[0].id);
        }

        this.subCustomerList = subCustomers;
        // Convert subCustomerList to delegators array
        this.delegators = this.subCustomerList.map((customer) => ({
          id: customer.id,
          name: customer.fullName,
          selected: false,
        }));

        // Load existing delegators if any
        this.loadExistingDelegators();
      },
      error: (err) => {
        console.error('Error loading component data', err);
      },
    });

    this.subscriptions.push(sub);
  }

  loadBanks(): void {
    // Now using actual API call via loadComponentData
  }

  loadDelegators(): void {
    // Now using actual API call via loadComponentData
  }

  toggleDelegatorsDropdown(): void {
    this.isDelegatorsDropdownOpen = !this.isDelegatorsDropdownOpen;
  }

  toggleDelegator(delegator: Delegator): void {
    delegator.selected = !delegator.selected;
    this.updateDelegatorIds();
  }

  updateDelegatorIds(): void {
    const selectedIds = this.delegators
      .filter((d) => d.selected)
      .map((d) => d.id);
    this.controls['delegatorIds'].setValue(selectedIds);
  }

  getSelectedDelegatorsCount(): number {
    return this.delegators.filter((d) => d.selected).length;
  }

  getSelectedDelegatorsText(): string {
    return this.localization.selectDelegators;
  }

  getSelectedDelegators(): Delegator[] {
    return this.delegators.filter((d) => d.selected);
  }

  removeDelegator(delegator: Delegator, event: Event): void {
    event.stopPropagation();
    delegator.selected = false;
    this.updateDelegatorIds();
  }

  save(moveToNextTab: boolean = false): void {
    const bankControl = this.escrowAccountForm.get('bankId');

    if (bankControl?.value === '00000000-0000-0000-0000-000000000000') {
      bankControl.setValue(null);
    }
    if (!this.escrowAccountForm.valid) {
      if (!this.isExistingValidation) {
        this.showValidation = true;
        this._toastrNotificationService.showError(
          this.localization.PleaseAddAllRequiredFields,
        );
      }

      this.escrowAccountForm.markAllAsTouched();
      return;
    }

    if (
      this.escrowAccountForm.get('approvedBankTermsConditions')?.value == false
    ) {
      this.showValidation = true;
      this._toastrNotificationService.showError(
        this.localization.approvedBankTermsConditionsMessage,
      );
      this.escrowAccountForm.markAllAsTouched();
      return;
    }

    // Use getRawValue to include disabled controls
    const formValue = this.escrowAccountForm.getRawValue();

    const dto: FawriaLicenseBankInfoDto = {
      licenseProjectId: this.licenseProjectId,
      bankId: formValue.bankId,
      delegatorCustomerIds: formValue.delegatorIds ?? [],
      approvedBankTermsConditions: formValue.approvedBankTermsConditions,
      crsTaxNumber: formValue.crsTaxNumber,
      fatcaTaxNumber: formValue.fatcaTaxNumber,
      saudiTaxNumber: formValue.saudiTaxNumber,
    };

    const sub = this._projectBankInfoService
      .SaveFawriaLicenseprojectBankInfo(dto)
      .subscribe((res) => {
        if (res.isDone) {
          this._licenseRequestService.updateCompletedTapCodesIsClicked.emit();
          this._toastrNotificationService.showSuccess('تم الحفظ بنجاح');
          this.escrowAccountForm.patchValue({
            bankId: res.data.bankId,
            delegatorIds: res.data.delegatorCustomerIds ?? [],
          });
          this.escrowAccountForm.markAsPristine();
          this._tabsService.setUnsavedChanges(false);
          this.fawriaLicenseBankInfoDto = res.data;
          if (moveToNextTab) this.moveToNextTab();
          // this.openApprovalDialogThenSendRequest();
        } else {
          this._toastrService.error(res.message);
        }
      });

    this.subscriptions.push(sub);
  }

  private loadExistingDelegators(): void {
    if (!this.licenseProjectId) return;

    console.log(
      'Loading existing delegators for project:',
      this.licenseProjectId,
    );

    const sub = this._projectBankInfoService
      .GetFawriaLicenseprojectBankInfoById(this.licenseProjectId)
      .subscribe({
        next: (res: FawriaLicenseBankInfoResponseDto) => {
          console.log('Existing bank info response:', res);

          if (res) {
            const emptyGuid = '00000000-0000-0000-0000-000000000000';
            // Set bank in form if exists and is not the default empty GUID
            if (res.bankId && res.bankId !== emptyGuid) {
              this.escrowAccountForm.patchValue({
                bankId: res.bankId,
              });
              this.loadTermsCondition();
            }

            // Set other fields if delegators exist
            if (
              res.delegatorCustomerIds &&
              res.delegatorCustomerIds.length > 0
            ) {
              const delegatorIds: string[] = (
                res.delegatorCustomerIds ?? []
              ).filter((id): id is string => id !== null);

              console.log('Found existing delegators:', delegatorIds);

              // Set delegators and other fields in form
              this.escrowAccountForm.patchValue({
                delegatorIds: delegatorIds,
                saudiTaxNumber: res.saudiTaxNumber,
                fatcaTaxNumber: res.fatcaTaxNumber,
                approvedBankTermsConditions: res.approvedBankTermsConditions,
                crsTaxNumber: res.crsTaxNumber,
              });

              // Update delegators selected state
              this.delegators.forEach((delegator) => {
                delegator.selected = delegatorIds.includes(delegator.id);
              });
            }

            // Update DTO
            this.fawriaLicenseBankInfoDto = {
              ...this.fawriaLicenseBankInfoDto,
              licenseProjectId: res.licenseProjectId,
              bankId: res.bankId ?? '',
              delegatorCustomerIds: (res.delegatorCustomerIds ?? []).filter(
                (id): id is string => id !== null,
              ),
            };
          } else {
            console.log('No existing data found');
          }
        },
        error: (err) => {
          console.error('Error loading existing delegators', err);
        },
      });

    this.subscriptions.push(sub);
  }

  private observeNextButtonIsClicked(): void {
    const sub =
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(() => {
        this.save(true);
      });
    this.subscriptions.push(sub);
  }

  private observeSaveAsDraftIsClicked(): void {
    const sub =
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(() => {
        this.save();
      });
    this.subscriptions.push(sub);
  }

  private observeTabButtons(): void {
    this.observeNextButtonIsClicked();
    this.observeSaveAsDraftIsClicked();
  }

  private showSaveAsNextButton(): void {
    this._nextAndPreviusButtonsService.nextBtnIsVisible.next(false);
  }

  private showSaveAsDraftButton(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true);
    this._nextAndPreviusButtonsService.saveAsDraftBtnText.next('حفظ');
  }

  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }

  onSubmit(): void {
    this.save(true);
  }

  saveAsDraft(): void {
    this.save();
  }

  openApprovalDialogThenSendRequest(): void {
    this._projectApprovalsService
      .getApprovalSubject()
      .subscribe((isApproved) => {
        this.isProjectDecisionsApproved = isApproved;

        if (!this.isProjectDecisionsApproved) {
          let Data = {
            title:
              'يجب الموافقة على جميع الإقرارات الخاصة بالرخصة حتى يتم إرسال الطلب',
            iconClass: 'hgi hgi-stroke hgi-checkmark-badge-02',
            component: ApprovalComponent,
            id: 'ApprovalComponent',
            disableClose: true,
            submitButtonTitle: 'إرسال الطلب',
            cancelButtonPosition: 'end',
          } as PopupData;
          this._popupService.updatePopupData(Data);
        }
      });

    this._projectApprovalsService
      .getApprovalSubject()
      .subscribe((isApproved) => {
        this.isProjectDecisionsApproved = isApproved;

        if (this.isProjectDecisionsApproved) {
          this.sendRequest();
        }
      });
  }

  private sendRequest(): void {
    let licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (!licenseProjectId) return;
    this.subscriptions.push(
      this._licenseRequestService
        .SendByProjectId(licenseProjectId)
        .subscribe((res: RequestValidation | RequestSuccessResponse | null) => {
          if (res) {
            if ('id' in res && 'requestCode' in res && 'typeCode' in res) {
              this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
                res.licenseProjectId,
              );
              this.requestSubmittedSuccessfully = true;
              this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(
                res.id,
              );
              this.openSuccessDialog();
            } else {
              this.updateRequestValidation(res as RequestValidation);
              this.openValidationDialog();
            }
          }
        }),
    );
  }

  private openSuccessDialog(): void {
    const successNoteData: notePopupData = {
      popupType: 'success',
      title: 'تم إرسال الطلب بنجاح !',
      dynamicMessage: 'تم إنشاء الاتفاقيات بين الأطراف وفي انتظار موافقتهم',
      buttonText: 'متابعة طلبك',
      buttonLink: `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.fawriaLicenseDetails}`,
    };
    this._popupService.updateNotePopupData(successNoteData);
  }

  private openValidationDialog(): void {
    let Data = {
      title: `التحقق من بيانات المشروع`,
      component: LicenseRequestValidationPopupComponent,
      id: 'LicenseRequestValidationPopupComponent',
      buttons: [
        {
          icon: '',
          title: 'إلغاء',
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
        },
        {
          icon: '',
          title: 'إستكمال البيانات',
          actionType: ButtonType.confirm,
          isVisable: true,
          isDisables: false,
        },
      ],
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  private updateRequestValidation(data: RequestValidation): void {
    this._licenseRequestService.updateRequestValidation(
      data as RequestValidation,
    );
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.multiselect-wrapper');

    if (!clickedInside && this.isDelegatorsDropdownOpen) {
      this.isDelegatorsDropdownOpen = false;
    }
  }
}
