import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription, forkJoin } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ToastrNotificatioService } from '../../../../../../core/services/toastr-notification/toastr-notificatio.service';
import { UserDataService } from '../../../../../../core/services/user-data/user-data.service';
import { BankDto } from '../../../dataModels/bank.dto';
import {  customerResponse } from '../../../../../../shared/models/customer.model';
import { FawriaLicenseBankInfoDto } from '../../../models/FawriaLicenseProject/fawria-license-bank-info-dto';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { SysBankService } from '../../../services/sysBank/sys-bank.service';
import { ProjectRealStateDeveloperService } from '../../../services/licenseProjects/project-real-state-developer.service';
import { FawriaLicenseProjectBankInfoService } from '../../../services/licenseProjects/fawria-license-project-bank-info.service';
import { CustomerShortDto } from '../../../models/facility-short-dto';
import { FawriaLicenseBankInfoResponseDto } from '../../../models/FawriaLicenseProject/fawria-license-bank-info-response-dto';

@Component({
  selector: 'app-fawria-licenseproject-escrow-account-container',
  templateUrl: './fawria-licenseproject-escrow-account-container.component.html',
  styleUrls: ['./fawria-licenseproject-escrow-account-container.component.scss']
})
export class FawriaLicenseprojectEscrowAccountContainerComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  banks: BankDto[] = [];
  subCustomerList: CustomerShortDto[] = [];
  userData: customerResponse | null = null;
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  facilityId: string = '00000000-0000-0000-0000-000000000000';

  showValidation: boolean = false;
  isExistingValidation: boolean = false;

  fawriaLicenseBankInfoDto: FawriaLicenseBankInfoDto = new FawriaLicenseBankInfoDto();

  bankInfoForm = this._formBuilder.group({
    bankId: ['', [Validators.required]],
    delegatorCustomerIds: [[], [Validators.required]],
    approvedBankTermsConditions: [false, [Validators.required]],
    saudiTaxNumber: ['', [Validators.required]],
    fatcaTaxNumber: ['', [Validators.required]],
    crsTaxNumber: ['', [Validators.required]],
  });

  localization = {
    title: 'حساب الضمان',
    requiredErrorMsg: 'حقل مطلوب',
    bankName: 'البنك',
    selectBankName: 'اختر اسم البنك',
    savedSuccessfully: 'تم الحفظ بنجاح',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    delegatorName: "المفوضين بالتوقيع علي وثائق الصرف المطور",
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
  ) { }

  ngOnInit(): void {
    this.loadUserData();
    this.loadLicenseProjectId();
    this.observeFormChanges();
    this.loadComponentData();

    this.observeTabButtons();
    this.showSaveAsDraftButton();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  get controls() {
    return this.bankInfoForm.controls;
  }
  get delegatorIds(): string[] {
    return this.bankInfoForm.get('delegatorCustomerIds')?.value || [];
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
    const sub = this.bankInfoForm.valueChanges.subscribe(() => {
      const rawValue = this.bankInfoForm.getRawValue();
      this.fawriaLicenseBankInfoDto = {
        ...this.fawriaLicenseBankInfoDto,
        bankId: rawValue.bankId ?? '',
        delegatorCustomerIds: rawValue.delegatorCustomerIds ?? [],
        licenseProjectId: this.licenseProjectId,
        approvedBankTermsConditions: rawValue.approvedBankTermsConditions ?? false,
        crsTaxNumber: rawValue.crsTaxNumber ?? '',
        fatcaTaxNumber: rawValue.fatcaTaxNumber ?? '',
        saudiTaxNumber: rawValue.saudiTaxNumber ?? ''
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
      this.bankInfoForm.patchValue({
        bankId: bankAlBilad.id
      });

      console.log('Bank form after patch:', this.bankInfoForm.get('bankId')?.value);

      // Always disable the bank dropdown
      this.bankInfoForm.get('bankId')?.disable();
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
            const delegators: string[] = (res.delegatorCustomerIds ?? []).filter(
              (id): id is string => id !== null
            );

            console.log('Found existing delegators:', delegators);

            // Set delegators in form
            this.bankInfoForm.get('delegatorCustomerIds')?.setValue(delegators as any);

            // Update DTO
            this.fawriaLicenseBankInfoDto = {
              ...this.fawriaLicenseBankInfoDto,
              licenseProjectId: res.licenseProjectId,
              delegatorCustomerIds: delegators
            };
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

  getCustomerName(id: string): string {
    const customer = this.subCustomerList.find(c => c.id === id);
    return customer?.fullName ?? '';
  }

  removeDelegator(id: string): void {
    const current = this.bankInfoForm.get('delegatorCustomerIds')?.value || [];
    const updated = current.filter((x: string) => x !== id);
    this.bankInfoForm.get('delegatorCustomerIds')?.setValue(updated as any);
  }

  onDelegatorChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const allOptions = Array.from(selectElement.options);
    const currentValues = this.bankInfoForm.get('delegatorCustomerIds')?.value || [];

    const newSelectedValues = allOptions
      .filter(opt => opt.selected)
      .map(opt => opt.value);

    // Update only if different
    if (JSON.stringify(currentValues) !== JSON.stringify(newSelectedValues)) {
      this.bankInfoForm.get('delegatorCustomerIds')?.setValue(newSelectedValues as any);
    }
  }
  toggleDelegator(id: string): void {
    const control = this.bankInfoForm.get('delegatorCustomerIds');
    const current: string[] = control?.value || [];

    if (current.includes(id)) {
      // remove
      control?.setValue(current.filter(x => x !== id) as any);
    } else {
      // add
      control?.setValue([...current, id] as any);
    }
  }


  save(moveToNextTab: boolean = false): void {
    if (!this.isExistingValidation && !this.bankInfoForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
      this.bankInfoForm.markAllAsTouched();
      return;
    }

    // Use getRawValue to include disabled controls
    const formValue = this.bankInfoForm.getRawValue();

    // Ensure DTO always has correct types
    const dto: FawriaLicenseBankInfoDto = {
      licenseProjectId: this.licenseProjectId,
      bankId: formValue.bankId ?? '',
      delegatorCustomerIds: formValue.delegatorCustomerIds ?? [],
      approvedBankTermsConditions: formValue.approvedBankTermsConditions ?? false,
      saudiTaxNumber: formValue.saudiTaxNumber ?? '',
      fatcaTaxNumber: formValue.fatcaTaxNumber ?? '',
      crsTaxNumber: formValue.crsTaxNumber ?? '',
    };

    const sub = this._projectBankInfoService.SaveFawriaLicenseprojectBankInfo(dto).subscribe(res => {
      if (res.isDone) {
        this._toastrService.success(this.localization.savedSuccessfully);
        this.bankInfoForm.patchValue({
          bankId: res.data.bankId,
          delegatorCustomerIds: res.data.delegatorCustomerIds ?? [],
        });
        this.fawriaLicenseBankInfoDto = res.data;
        if (moveToNextTab) this.moveToNextTab();
      } else {
        this._toastrService.error(res.message);
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



  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }
}
