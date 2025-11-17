import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

interface Delegator {
  id: string;
  name: string;
  selected?: boolean;
}

@Component({
  selector: 'app-fawria-licenseproject-escrow-account-create-view-only',
  templateUrl: './fawria-licenseproject-escrow-account-create-view-only.component.html',
  styleUrls: ['./fawria-licenseproject-escrow-account-create-view-only.component.scss']
})
export class FawriaLicenseprojectEscrowAccountViewOnlyComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  escrowAccountForm: FormGroup;
  showValidation: boolean = false;

  banks: BankDto[] = [];
  delegators: Delegator[] = [];
  subCustomerList: CustomerShortDto[] = [];
  userData: customerResponse | null = null;
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  facilityId: string = '00000000-0000-0000-0000-000000000000';

  isExistingValidation: boolean = false;
  fawriaLicenseBankInfoDto: FawriaLicenseBankInfoDto = new FawriaLicenseBankInfoDto();

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
    savedSuccessfully: 'تم حفظ الطلب كمسودة، يمكنك استكماله لاحقا',
    PleaseAddAllRequiredFields: 'لم يتم إدخال جميع الحقول الإلزامية، يرجى استكمال البيانات المطلوبة',
    saveAsDraft: 'حفظ كمسودة',
    next: 'السابق',
    previous: 'التالي',
    approvedBankTermsConditions: 'أقر بالموافقة علي شروط وأحكام البنك.'
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
    private _projectBankInfoService: FawriaLicenseProjectBankInfoService
  ) {
    this.escrowAccountForm = this._formBuilder.group({
      bankId: ['', [Validators.required]],
      delegatorIds: [[], [Validators.required]],
      approvedBankTermsConditions: [false, [Validators.required]],
      saudiTaxNumber: ['', [Validators.required]],
      fatcaTaxNumber: ['', [Validators.required]],
      crsTaxNumber: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.loadUserData();
    this.loadLicenseProjectId();
    this.observeFormChanges();
    this.loadComponentData();
    this.disableFormForViewOnly();
    this.observeTabButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }

  private disableFormForViewOnly(): void {
    // Disable all form controls for view-only mode
    if (this.escrowAccountForm) {
      this.escrowAccountForm.disable();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  get controls() {
    return this.escrowAccountForm.controls;
  }

  private loadUserData(): void {
    const sub = this._userDataService.getCustomerData().subscribe(res => {
      this.userData = res;
      this.isExistingValidation = this.userData?.isEmployee ?? false;
      this.facilityId = this.userData?.isEmployee
        ? '00000000-0000-0000-0000-000000000000'
        : this.userData?.facilities[0]?.id ?? this.facilityId;
    });
    this.subscriptions.push(sub);
  }

  private loadLicenseProjectId(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage()
      ?? '00000000-0000-0000-0000-000000000000';
  }

  private observeFormChanges(): void {
    const sub = this.escrowAccountForm.valueChanges.subscribe(() => {
      const rawValue = this.escrowAccountForm.getRawValue();
      this.fawriaLicenseBankInfoDto = {
        ...this.fawriaLicenseBankInfoDto,
        bankId: rawValue.bankId ?? '',
        delegatorCustomerIds: rawValue.delegatorIds ?? [],
        licenseProjectId: this.licenseProjectId
      };
    });
    this.subscriptions.push(sub);
  }

  private loadComponentData(): void {
    const sub = forkJoin({
      banksResponse: this._bankService.GetBankDropDown(),
      subCustomers: this._projectRealStateDeveloperService.GetFacilitySubCustomers(this.facilityId),
    }).subscribe({
      next: ({ banksResponse, subCustomers }) => {
        this.banks = banksResponse.data as BankDto[];
        this.subCustomerList = subCustomers;
        // Convert subCustomerList to delegators array
        this.delegators = this.subCustomerList.map(customer => ({
          id: customer.id,
          name: customer.fullName,
          selected: false
        }));

        // Always select بنك البلاد and disable the dropdown
        this.selectBankAlBilad();

        // Load existing delegators if any
        this.loadExistingDelegators();
      },
      error: err => {
        console.error('Error loading component data', err);
      }
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
      .filter(d => d.selected)
      .map(d => d.id);
    this.controls['delegatorIds'].setValue(selectedIds);
  }

  getSelectedDelegatorsCount(): number {
    return this.delegators.filter(d => d.selected).length;
  }

  getSelectedDelegatorsText(): string {
    const count = this.getSelectedDelegatorsCount();
    if (count === 0) {
      return this.localization.selectDelegators;
    }
    return this.localization.selectDelegators;
  }

  getSelectedDelegators(): Delegator[] {
    return this.delegators.filter(d => d.selected);
  }

  removeDelegator(delegator: Delegator, event: Event): void {
    event.stopPropagation();
    delegator.selected = false;
    this.updateDelegatorIds();
  }

  save(moveToNextTab: boolean = false): void {
    if (!this.isExistingValidation && !this.escrowAccountForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
      this.escrowAccountForm.markAllAsTouched();
      return;
    }

    // Use getRawValue to include disabled controls
    const formValue = this.escrowAccountForm.getRawValue();

    const dto: FawriaLicenseBankInfoDto = {
      licenseProjectId: this.licenseProjectId,
      bankId: formValue.bankId ?? '',
      delegatorCustomerIds: formValue.delegatorIds ?? [],
      approvedBankTermsConditions: formValue.approvedBankTermsConditions,
      crsTaxNumber: formValue.crsTaxNumber,
      fatcaTaxNumber: formValue.fatcaTaxNumber ,
      saudiTaxNumber: formValue.saudiTaxNumber,
    };

    const sub = this._projectBankInfoService.SaveFawriaLicenseprojectBankInfo(dto).subscribe(res => {
      if (res.isDone) {
        this._toastrService.success(this.localization.savedSuccessfully);
        this.escrowAccountForm.patchValue({
          bankId: res.data.bankId,
          delegatorIds: res.data.delegatorCustomerIds ?? [],
        });
        this.fawriaLicenseBankInfoDto = res.data;
        if (moveToNextTab) this.moveToNextTab();
      } else {
        this._toastrService.error(res.message);
      }
    });

    this.subscriptions.push(sub);
  }

  private selectBankAlBilad(): void {
    console.log('selectBankAlBilad called');
    console.log('Banks:', this.banks);

    // Find بنك البلاد by name or isDefaultSelected
    const bankAlBilad = this.banks.find(bank =>
      bank.name === 'بنك البلاد' || bank.isDefaultSelected
    );

    console.log('بنك البلاد found:', bankAlBilad);

    if (bankAlBilad) {
      // Set بنك البلاد as selected
      this.escrowAccountForm.patchValue({
        bankId: bankAlBilad.id
      });

      console.log('Bank form after patch:', this.escrowAccountForm.get('bankId')?.value);

      // Always disable the bank dropdown
      this.escrowAccountForm.get('bankId')?.disable();
      console.log('Bank dropdown disabled - بنك البلاد is the only option');
    } else {
      console.log('بنك البلاد not found in the banks list');
    }
  }

  private loadExistingDelegators(): void {
    if (!this.licenseProjectId) return;

    console.log('Loading existing delegators for project:', this.licenseProjectId);

    const sub = this._projectBankInfoService
      .GetFawriaLicenseprojectBankInfoById(this.licenseProjectId)
      .subscribe({
        next: (res: FawriaLicenseBankInfoResponseDto) => {
          console.log('Existing bank info response:', res);

          if (res && res.delegatorCustomerIds && res.delegatorCustomerIds.length > 0) {
            const delegatorIds: string[] = (res.delegatorCustomerIds ?? []).filter(
              (id): id is string => id !== null
            );

            console.log('Found existing delegators:', delegatorIds);

            // Set delegators in form
            this.escrowAccountForm.patchValue({
              delegatorIds: delegatorIds,
              saudiTaxNumber: res.saudiTaxNumber,
              fatcaTaxNumber: res.fatcaTaxNumber,
              approvedBankTermsConditions: res.approvedBankTermsConditions,
              crsTaxNumber: res.crsTaxNumber
            });

            // Update delegators selected state
            this.delegators.forEach(delegator => {
              delegator.selected = delegatorIds.includes(delegator.id);
            });

            // Update DTO
            this.fawriaLicenseBankInfoDto = {
              ...this.fawriaLicenseBankInfoDto,
              licenseProjectId: res.licenseProjectId,
              delegatorCustomerIds: delegatorIds
            };

            // Ensure form stays disabled after loading data
            this.disableFormForViewOnly();
          } else {
            console.log('No existing delegators found');
          }
        },
        error: err => {
          console.error('Error loading existing delegators', err);
        }
      });

    this.subscriptions.push(sub);
  }

  private observeNextButtonIsClicked(): void {
    const sub = this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(() => {
      this.save(true);
    });
    this.subscriptions.push(sub);
  }

  private observeSaveAsDraftIsClicked(): void {
    const sub = this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(() => {
      this.save();
    });
    this.subscriptions.push(sub);
  }

  private observeTabButtons(): void {
    this.observeNextButtonIsClicked();
    this.observeSaveAsDraftIsClicked();
  }

  private showSaveAsDraftButton(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true);
    this._nextAndPreviusButtonsService.saveAsDraftBtnText.next('حفظ');
  }

  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.multiselect-wrapper');

    if (!clickedInside && this.isDelegatorsDropdownOpen) {
      this.isDelegatorsDropdownOpen = false;
    }
  }
}
