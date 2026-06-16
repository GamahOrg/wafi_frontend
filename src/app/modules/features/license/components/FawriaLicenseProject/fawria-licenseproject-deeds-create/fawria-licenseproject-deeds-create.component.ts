import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ProjectLandDeedService } from '../../../services/project-land-deed.service';
import {
  DeedIntegrationErrorCode,
  DeedIntegrationTypeEnum,
  ConstructionLicenseTypeEnum,
  FawriaLicenseDeedAndConstructionLicenseDto,
  FawriaLicenseDeedAndConstructionLicenseResponseDto,
  LicenseInfoList,
} from '../../../dataModels/project-land-deed.dto';
import { SysBankService } from '../../../services/sysBank/sys-bank.service';
import { BankDto } from '../../../dataModels/bank.dto';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import * as momentHijri from 'moment-hijri';
import { Pagemode } from '../../../enums/pagemode.enum';
import { ProjectInstantLicenseDeedService } from 'src/app/modules/features/real-estate-contributions-license/services/project-instant-license-deed.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import {
  PopupData,
  confirmationPopupData,
} from 'src/app/shared/models/popup.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { LicenseRequestService } from '../../../services/license-request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fawria-licenseproject-deeds-create',
  templateUrl: './fawria-licenseproject-deeds-create.component.html',
  styleUrls: ['./fawria-licenseproject-deeds-create.component.scss'],
})
export class FawriaLicenseprojectDeedsCreateComponent
  implements OnInit, OnChanges, OnDestroy
{
  @Input() isIntegration: boolean | null = null;
  @Input() isUnit: boolean | null = null;
  @Output() changePage = new EventEmitter<Pagemode>();

  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  deedForm!: FormGroup;
  verifyForm!: FormGroup;

  DeedIntegrationTypeEnum = DeedIntegrationTypeEnum;
  ConstructionLicenseTypeEnum = ConstructionLicenseTypeEnum;
  deedIntegrationErrorCode: typeof DeedIntegrationErrorCode =
    DeedIntegrationErrorCode;
  fawriaLicenseDeedAndConstructionLicenseResponse?: FawriaLicenseDeedAndConstructionLicenseResponseDto;
  deedIntegrationError: string = '';
  constractionIntegrationError: string = '';
  generalIntegrationError: string = '';
  isAiniDeed: boolean = false;

  totalLand: number = 0;
  landValue: number = 0;
  requestDto: FawriaLicenseDeedAndConstructionLicenseDto =
    {} as FawriaLicenseDeedAndConstructionLicenseDto;

  bankDtoList: BankDto[] = [];
  showCancelModal: boolean = false;
  showAiniDeedModal: boolean = false;
  isEditMode: boolean = false;
  ownerAgreementFilesInfo: { id: string; filePath: string }[] = [];
  mortgageeFilesInfo: { id: string; filePath: string }[] = [];

  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';

  singleFileUploaderData: FileUploader = {
    multiple: false,
    size: 3072,
    allowedExtensions: ['.pdf'],
    allowedExtensionsText: '.pdf',
  } as FileUploader;

  licenseConstractionFileUploaderData: FileUploader = {
    multiple: false,
    // size: 3072,
    // allowedExtensions: ['.pdf'],
    // allowedExtensionsText: '.pdf'
  } as FileUploader;

  multiFileUploaderData: FileUploader = {
    multiple: true,
    // size: 3072,
    // allowedExtensions: ['.pdf'],
    // allowedExtensionsText: '.pdf'
  } as FileUploader;

  constructor(
    private fb: FormBuilder,
    private _projectLandDeedService: ProjectLandDeedService,
    private _sysBankService: SysBankService,
    private _shareservice: SharedLicenseProjectService,
    private cdr: ChangeDetectorRef,
    private _popupService: PopupService,
    private _licenseRequestService: LicenseRequestService,
    private _projectInstantDeedService: ProjectInstantLicenseDeedService,
    private _tabsService: TabsService,
  ) {}

  ngOnInit(): void {
    this.observeconfirmAction();
    this.getLicenseProjectId();
    this.initializeForm();

    this.initializeVerifyForm();
    this.getBankList();
    this.getNatureTypeIdByLicenseProjectId();
    this.trackFormChanges();
  }

  ngOnDestroy(): void {
    this._tabsService.setUnsavedChanges(false);
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  private trackFormChanges(): void {
    this.subscriptions.push(
      this.deedForm.valueChanges.subscribe(() => {
        if (this.deedForm.dirty) {
          this._tabsService.setUnsavedChanges(true);
        }
      }),
    );
    this.subscriptions.push(
      this.verifyForm.valueChanges.subscribe(() => {
        if (this.verifyForm.dirty) {
          this._tabsService.setUnsavedChanges(true);
        }
      }),
    );
  }

  getNatureTypeIdByLicenseProjectId(): void {
    this._projectInstantDeedService
      .GetNatureTypeIdByLicenseProjectId(this.licenseProjectId)
      .subscribe((res: any) => {
        if (res) {
          this.isUnit = res.data;
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Log isUnit changes
    if (changes['isUnit']) {
      console.log('isUnit changed:', changes['isUnit'].currentValue);
      console.log('isUnit value:', this.isUnit);
    }

    if (changes['isIntegration'] && this.verifyForm) {
      const currentValue = this.verifyForm.get(
        'constructionLicenseType',
      )?.value;

      // When isIntegration = true, only Balady is allowed
      if (this.isIntegration === true) {
        // If current value is Itmam or RiyadhAmanah, reset to Balady
        if (
          currentValue === ConstructionLicenseTypeEnum.Itmam ||
          currentValue === ConstructionLicenseTypeEnum.RiyadhAmanah
        ) {
          this.verifyForm.patchValue({
            constructionLicenseType: ConstructionLicenseTypeEnum.Balady,
          });
        }
      }
      // When isIntegration = false, Balady is disabled
      else if (this.isIntegration === false) {
        // If current value is Balady, reset to Itmam (default non-Balady option)
        if (currentValue === ConstructionLicenseTypeEnum.Balady) {
          this.verifyForm.patchValue({
            constructionLicenseType: ConstructionLicenseTypeEnum.Itmam,
          });
        }
      }
      // When isIntegration = null, no restrictions - do nothing
    }
  }

  isConstructionLicenseTypeDisabled(
    licenseType: ConstructionLicenseTypeEnum,
  ): boolean {
    // When isIntegration = null, nothing is disabled
    if (this.isIntegration === null) {
      return false;
    }

    // When isIntegration = true, disable Itmam and RiyadhAmanah (only Balady allowed)
    if (this.isIntegration === true) {
      return (
        licenseType === ConstructionLicenseTypeEnum.Itmam ||
        licenseType === ConstructionLicenseTypeEnum.RiyadhAmanah
      );
    }

    // When isIntegration = false, disable Balady (only Itmam and RiyadhAmanah allowed)
    if (this.isIntegration === false) {
      return licenseType === ConstructionLicenseTypeEnum.Balady;
    }

    return false;
  }

  private getLicenseProjectId() {
    this.licenseProjectId =
      this._shareservice.getLicenseProjectIdStorage() as string;
  }

  private initializeVerifyForm(): void {
    this.verifyForm = this.fb.group({
      deedSource: [
        DeedIntegrationTypeEnum.JusticeMinistry,
        [Validators.required],
      ],
      deedNumber: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      deedDate: ['', [Validators.required]],
      licenseNumber: ['', [Validators.required]],
      fawriaRERNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]*$/)],
      ],
      // firstRegistrationDate: ['', [Validators.required]],
      constructionLicenseType: [
        this.isUnit ? ConstructionLicenseTypeEnum.Balady : null,
        [Validators.required],
      ],
      riyadhAmanahLicenseNumber: ['', [Validators.required]],
      constructionLicenseFileId: [null, [Validators.required]],
      approvedPlansFileIds: [[], [Validators.required]], // For multi-file upload when isUnit = false
      totalUnit: [null, [Validators.required]], // Total number of lands when isUnit = false
    });

    // Clear fawriaLicenseDeedAndConstructionLicenseResponse when key fields change
    this.verifyForm.get('deedNumber')?.valueChanges.subscribe(() => {
      this.clearVerificationResponse();
    });

    this.verifyForm.get('deedDate')?.valueChanges.subscribe(() => {
      this.clearVerificationResponse();
    });

    this.verifyForm.get('licenseNumber')?.valueChanges.subscribe(() => {
      this.clearVerificationResponse();
    });

    this.verifyForm.get('fawriaRERNumber')?.valueChanges.subscribe(() => {
      this.clearVerificationResponse();
    });

    // Subscribe to valueChanges to prevent selecting disabled options
    this.verifyForm
      .get('constructionLicenseType')
      ?.valueChanges.subscribe((value) => {
        // When isIntegration = true, only Balady is allowed
        if (this.isIntegration === true) {
          // If user tries to select Itmam or RiyadhAmanah, revert to Balady
          if (
            value === ConstructionLicenseTypeEnum.Itmam ||
            value === ConstructionLicenseTypeEnum.RiyadhAmanah
          ) {
            this.verifyForm.patchValue(
              {
                constructionLicenseType: ConstructionLicenseTypeEnum.Balady,
              },
              { emitEvent: false },
            );
          }
        }
        // When isIntegration = false, Balady is disabled
        else if (this.isIntegration === false) {
          // If user tries to select Balady, revert to Itmam
          if (value === ConstructionLicenseTypeEnum.Balady) {
            this.verifyForm.patchValue(
              {
                constructionLicenseType: ConstructionLicenseTypeEnum.Itmam,
              },
              { emitEvent: false },
            );
          }
        }
        // When isIntegration = null, no restrictions - allow any selection

        // Update validators for totalLandArea and totalUnit based on construction license type
        this.updateTotalLandAreaAndUnitValidators(value);
      });
  }

  private updateTotalLandAreaAndUnitValidators(
    constructionLicenseType: ConstructionLicenseTypeEnum,
  ): void {
    // totalLandArea and totalUnit - required only for Itmam or RiyadhAmanah (NOT for Balady - data comes from integration)
    if (
      constructionLicenseType === ConstructionLicenseTypeEnum.Itmam ||
      constructionLicenseType === ConstructionLicenseTypeEnum.RiyadhAmanah
    ) {
      this.deedForm.get('totalLandArea')?.setValidators([Validators.required]);
      this.deedForm.get('totalUnit')?.setValidators([Validators.required]);
    } else {
      this.deedForm.get('totalLandArea')?.clearValidators();
      this.deedForm.get('totalUnit')?.clearValidators();
    }
    this.deedForm
      .get('totalLandArea')
      ?.updateValueAndValidity({ emitEvent: false });
    this.deedForm
      .get('totalUnit')
      ?.updateValueAndValidity({ emitEvent: false });
  }

  private initializeForm(): void {
    this.deedForm = this.fb.group({
      totalArea: ['', [Validators.required]],
      ownerBanks: this.fb.array([]),
      ownerAccountNumber: this.fb.array([]),
      ownerAgreementFiles: this.fb.array([]),
      mortgageeFiles: this.fb.array([]),
      totalLandArea: [''], // اجمالي مساحة مسطح البناء - for Itmam/RiyadhAmanah
      totalUnit: [''], // اجمالي عدد الوحدات - for Itmam/RiyadhAmanah
    });
  }

  get ownerBanks(): FormArray {
    return this.deedForm.get('ownerBanks') as FormArray;
  }

  get ownerAccountNumber(): FormArray {
    return this.deedForm.get('ownerAccountNumber') as FormArray;
  }

  get ownerAgreementFiles(): FormArray {
    return this.deedForm.get('ownerAgreementFiles') as FormArray;
  }

  get mortgageeFiles(): FormArray {
    return this.deedForm.get('mortgageeFiles') as FormArray;
  }

  // Check if any owner has isOwnerByDeveloper = false
  get hasNonDeveloperOwner(): boolean {
    const owners =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData
        ?.deedOwners;
    if (!owners || owners.length === 0) {
      return false;
    }
    return owners.some((owner) => owner.isOwnerByDeveloper === false);
  }

  // Check if totalArea field should be shown and required
  get shouldShowTotalArea(): boolean {
    const owners =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData
        ?.deedOwners;
    const hasMultipleOwners = (owners?.length ?? 0) > 1;
    return (
      this.isUnit === true && hasMultipleOwners && this.hasNonDeveloperOwner
    );
  }

  // Check if owner bank columns (اسم البنك, رقم الآيبان, الاتفاقية) should be shown
  get shouldShowOwnerBankColumns(): boolean {
    return this.isUnit === true && this.hasNonDeveloperOwner;
  }

  private initializeOwnerFormsForOwners(ownersCount: number): void {
    this.ownerBanks.clear();
    this.ownerAccountNumber.clear();
    this.ownerAgreementFiles.clear();
    this.ownerAgreementFilesInfo = [];
    const owners =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData
        ?.deedOwners || [];

    for (let i = 0; i < ownersCount; i++) {
      const owner = owners[i];
      // Bank and Account required when: isUnit && !owner.isOwnerByDeveloper
      const isBankAndAccountRequired =
        this.isUnit === true && owner?.isOwnerByDeveloper === false;

      // Initialize with existing values if available
      this.ownerBanks.push(
        this.fb.control(
          owner?.bankId || null,
          isBankAndAccountRequired ? [Validators.required] : [],
        ),
      );
      this.ownerAccountNumber.push(
        this.fb.control(
          owner?.accountNumber || '',
          isBankAndAccountRequired
            ? [Validators.required, Validators.pattern(/^SA[0-9]{22}$/)]
            : [Validators.pattern(/^SA[0-9]{22}$/)],
        ),
      );

      // File required when: isUnit && !owner.isOwnerByDeveloper && !owner.isCustomer
      const isFileRequired =
        this.isUnit === true &&
        owner?.isOwnerByDeveloper === false &&
        owner?.isCustomer === false;
      // Initialize with existing file ID if available
      this.ownerAgreementFiles.push(
        this.fb.control(
          owner?.agreementFileId || '',
          isFileRequired ? [Validators.required] : [],
        ),
      );

      // Initialize file info (check if owner already has a file from response)
      this.ownerAgreementFilesInfo.push({
        id: owner?.agreementFileId || '',
        filePath: owner?.agreementFile?.filePath || '',
      });
    }
  }

  private initializeMortgageeFormsForMortgagees(mortgageesCount: number): void {
    this.mortgageeFiles.clear();
    this.mortgageeFilesInfo = [];
    const mortgagees =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData
        ?.deedMortgageeList || [];
    const isRealEstateMortgaged =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData
        ?.isRealEstateMortgaged;

    for (let i = 0; i < mortgageesCount; i++) {
      const mortgagee = mortgagees[i];
      // File is required only when the property is actually mortgaged (isRealEstateMortgaged = true)
      // Initialize with existing file ID if available
      this.mortgageeFiles.push(
        this.fb.control(
          mortgagee?.mortgageeFileId || '',
          isRealEstateMortgaged ? [Validators.required] : [],
        ),
      );

      // Initialize file info (check if mortgagee already has a file from response)
      this.mortgageeFilesInfo.push({
        id: mortgagee?.mortgageeFileId || '',
        filePath: mortgagee?.mortgageeFile?.filePath || '',
      });
    }
  }

  onMortgageeFileUploaded(fileData: any, mortgageeIndex: number): void {
    if (fileData.eventRes.data.length === 0) {
      this.mortgageeFiles.at(mortgageeIndex).setValue(null);
      this.mortgageeFilesInfo[mortgageeIndex] = { id: '', filePath: '' };
      return;
    }
    if (
      fileData &&
      fileData.eventRes &&
      fileData.eventRes.data &&
      fileData.eventRes.data.length > 0
    ) {
      const uploadedFile = fileData.eventRes.data[0];
      this.mortgageeFiles.at(mortgageeIndex).setValue(uploadedFile.id);
      this.mortgageeFilesInfo[mortgageeIndex] = {
        id: uploadedFile.id,
        filePath: uploadedFile.filePath,
      };
      console.log(`Mortgagee ${mortgageeIndex} file uploaded:`, uploadedFile);
    }
  }

  hasMortgageeRowError(index: number): boolean {
    return this.mortgageeFiles.at(index)?.invalid;
  }

  deleteMortgageeFile(index: number): void {
    this.mortgageeFiles.at(index).setValue(null);
    this.mortgageeFilesInfo[index] = { id: '', filePath: '' };
  }

  onOwnerFileUploaded(fileData: any, ownerIndex: number): void {
    if (fileData.eventRes.data.length === 0) {
      this.ownerAgreementFiles.at(ownerIndex).setValue(null);
      this.ownerAgreementFilesInfo[ownerIndex] = { id: '', filePath: '' };
      return;
    }
    if (
      fileData &&
      fileData.eventRes &&
      fileData.eventRes.data &&
      fileData.eventRes.data.length > 0
    ) {
      const uploadedFile = fileData.eventRes.data[0];
      this.ownerAgreementFiles.at(ownerIndex).setValue(uploadedFile.id);
      this.ownerAgreementFilesInfo[ownerIndex] = {
        id: uploadedFile.id,
        filePath: uploadedFile.filePath,
      };
      console.log(
        `Owner ${ownerIndex} documentation file uploaded:`,
        uploadedFile,
      );
    }
  }

  deleteOwnerAgreementFile(ownerIndex: number): void {
    this.ownerAgreementFiles.at(ownerIndex).setValue(null);
    this.ownerAgreementFilesInfo[ownerIndex] = { id: '', filePath: '' };
  }

  getBankList(): void {
    this._sysBankService.GetBankDropDown().subscribe({
      next: (response) => {
        if (response && response.data) {
          this.bankDtoList = response.data;
        }
      },
      error: (error) => {
        console.error('Error retrieving bank list:', error);
      },
    });
  }

  onVerify(): void {
    const formData = this.verifyForm.value;
    // Validate based on deedSource and constructionLicenseType
    let isValid = true;
    if (!this.isUnit) {
      this.verifyForm.get('constructionLicenseType')?.clearValidators();
      this.verifyForm
        .get('licenseProjectConstructionLicenseTypeId')
        ?.clearValidators();
      this.verifyForm
        .get('approvedPlansFileIds')
        ?.setValidators([Validators.required]);
      this.verifyForm.get('totalUnit')?.setValidators([Validators.required]);
      this.verifyForm.updateValueAndValidity();
    }
    if (formData.deedSource === DeedIntegrationTypeEnum.JusticeMinistry) {
      if (!formData.deedNumber || !formData.deedDate) {
        isValid = false;
      }

      if (
        formData.constructionLicenseType === ConstructionLicenseTypeEnum.Balady
      ) {
        if (!formData.licenseNumber) {
          isValid = false;
        }
      } else if (
        formData.constructionLicenseType === ConstructionLicenseTypeEnum.Itmam
      ) {
        if (!formData.constructionLicenseFileId) {
          isValid = false;
        }
      }
    } else if (formData.deedSource === DeedIntegrationTypeEnum.RER) {
      if (!formData.fawriaRERNumber || !formData.deedDate) {
        isValid = false;
      }

      if (
        formData.constructionLicenseType === ConstructionLicenseTypeEnum.Balady
      ) {
        if (!formData.licenseNumber) {
          isValid = false;
        }
      } else if (
        formData.constructionLicenseType ===
        ConstructionLicenseTypeEnum.RiyadhAmanah
      ) {
        if (
          !formData.riyadhAmanahLicenseNumber ||
          !formData.constructionLicenseFileId
        ) {
          isValid = false;
        }
      } else if (
        formData.constructionLicenseType === ConstructionLicenseTypeEnum.Itmam
      ) {
        if (!formData.constructionLicenseFileId) {
          isValid = false;
        }
      }
    }

    // If validation fails, mark all fields as touched and return
    if (!isValid) {
      Object.keys(this.verifyForm.controls).forEach((key) => {
        this.verifyForm.get(key)?.markAsTouched();
      });
      return;
    }

    let hijriDateString = '';
    const dateToConvert =
      formData.deedSource === DeedIntegrationTypeEnum.JusticeMinistry
        ? formData.deedDate
        : formData.deedDate;

    // const dateToConvertWhenIsLand = !this.isUnit && formData.deedSource === DeedIntegrationTypeEnum.JusticeMinistry
    // ? formData.deedDate
    // : formData.deedDate;

    if (dateToConvert) {
      const date = new Date(dateToConvert);
      const m = momentHijri(date);
      const hijriDay = (m as any).iDate();
      const hijriMonth = (m as any).iMonth() + 1;
      const hijriYear = (m as any).iYear();
      hijriDateString = `${this.pad(hijriDay)}-${this.pad(
        hijriMonth,
      )}-${hijriYear}`;
    }

    // if (dateToConvertWhenIsLand) {
    //   const date = new Date(dateToConvertWhenIsLand);
    //   const m = momentHijri(date);
    //   const hijriDay = (m as any).iDate();
    //   const hijriMonth = (m as any).iMonth() + 1;
    //   const hijriYear = (m as any).iYear();
    //   hijriDateString = `${this.pad(hijriDay)}-${this.pad(
    //     hijriMonth
    //   )}-${hijriYear}`;
    // }

    if (formData.deedSource === DeedIntegrationTypeEnum.RER) {
      this.requestDto = {
        fawriaLicenseDeed: {
          licenseProjectsId: this.licenseProjectId,
          number: formData.fawriaRERNumber,
          date: hijriDateString,
          deedIntegrationType: DeedIntegrationTypeEnum.RER,
        },
        constructionLicenseNumber:
          formData.constructionLicenseType ===
          ConstructionLicenseTypeEnum.Balady
            ? formData.licenseNumber
            : formData.constructionLicenseType ===
                ConstructionLicenseTypeEnum.RiyadhAmanah
              ? formData.riyadhAmanahLicenseNumber
              : null,
        constructionLicenseFileId:
          formData.constructionLicenseType ===
          ConstructionLicenseTypeEnum.Balady
            ? null
            : formData.constructionLicenseFileId,
        licenseProjectConstructionLicenseTypeId:
          formData.constructionLicenseType == null
            ? null
            : Number(formData.constructionLicenseType),
        approvedPlansFileIds: this.isUnit
          ? null
          : this.verifyForm.get('approvedPlansFileIds')?.value,
        isUnit: !!this.isUnit,
      };
    } else {
      this.requestDto = {
        fawriaLicenseDeed: {
          licenseProjectsId: this.licenseProjectId,
          number: formData.deedNumber,
          date: hijriDateString,
          deedIntegrationType: DeedIntegrationTypeEnum.JusticeMinistry,
        },
        constructionLicenseNumber:
          formData.constructionLicenseType ===
          ConstructionLicenseTypeEnum.Balady
            ? formData.licenseNumber
            : null,
        constructionLicenseFileId:
          formData.constructionLicenseType === ConstructionLicenseTypeEnum.Itmam
            ? formData.constructionLicenseFileId
            : null,
        licenseProjectConstructionLicenseTypeId:
          formData.constructionLicenseType == null
            ? null
            : Number(formData.constructionLicenseType),
        approvedPlansFileIds: this.isUnit
          ? null
          : this.verifyForm.get('approvedPlansFileIds')?.value,
        isUnit: !!this.isUnit,
      };
    }

    this._projectLandDeedService
      .FawriaLicenseValidateIntegration(this.requestDto)
      .subscribe({
        next: (response) => {
          if (response) {
            if (response.data) {
              this.fawriaLicenseDeedAndConstructionLicenseResponse =
                response.data;
              this.processResponseData();
            }
          }
        },
      });
  }

  private processResponseData(): void {
    this.totalLand =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.licenseInfoList?.reduce(
        (sum, info) => {
          let total = 0;
          info.buildingInfo?.componentList.component
            .filter(
              (x) =>
                !(
                  x.componentUsage.code == '10' || x.componentUsage.code == '16'
                ),
            )
            .forEach((element) => {
              total += +element.componentArea;
            });
          return sum + total;
        },
        0,
      ) || 0;

    const ownersCount =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData?.deedOwners
        ?.length || 0;
    if (ownersCount > 0) {
      this.initializeOwnerFormsForOwners(ownersCount);
    }

    // Initialize mortgagee forms if property is mortgaged
    const mortgageesCount =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData
        ?.deedMortgageeList?.length || 0;
    if (mortgageesCount > 0) {
      this.initializeMortgageeFormsForMortgagees(mortgageesCount);
    }

    // Update totalArea validator based on shouldShowTotalArea condition
    const totalAreaControl = this.deedForm.get('totalArea');
    if (this.shouldShowTotalArea) {
      totalAreaControl?.setValidators([Validators.required]);
    } else {
      totalAreaControl?.clearValidators();
    }
    totalAreaControl?.updateValueAndValidity();

    this.deedIntegrationError = '';
    this.constractionIntegrationError = '';
    this.generalIntegrationError = '';

    if (
      this.fawriaLicenseDeedAndConstructionLicenseResponse &&
      this.fawriaLicenseDeedAndConstructionLicenseResponse.errorCodes.length > 0
    ) {
      this.deedIntegrationError =
        this.fawriaLicenseDeedAndConstructionLicenseResponse.errorCodes
          .filter(
            (code) =>
              code.errorCode === this.deedIntegrationErrorCode.DeedNotValid,
          )
          .map((code) => code.message)
          .join(', ');

      this.constractionIntegrationError =
        this.fawriaLicenseDeedAndConstructionLicenseResponse.errorCodes
          .filter(
            (code) =>
              code.errorCode ===
              this.deedIntegrationErrorCode.ConstructionLicenseNotValid,
          )
          .map((code) => code.message)
          .join(', ');

      this.generalIntegrationError =
        this.fawriaLicenseDeedAndConstructionLicenseResponse.errorCodes
          .filter(
            (code) =>
              code.errorCode === this.deedIntegrationErrorCode.GeneralError,
          )
          .map((code) => code.message)
          .join(', ');

      this.isAiniDeed =
        this.fawriaLicenseDeedAndConstructionLicenseResponse.errorCodes.some(
          (code) => code.errorCode === this.deedIntegrationErrorCode.AiniDeed,
        );

      if (this.isAiniDeed) {
        this.showAiniDeedModal = true;
      }
    }
  }

  updateLandValue() {
    const area =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData
        ?.deedArea ?? 0;
    const totalLandValue = +this.deedForm.get('totalArea')?.value;
    this.landValue = totalLandValue / area;
  }

  openCancelModal(): void {
    let cancelConfirmationObj: confirmationPopupData = {
      popupType: 'danger',
      title: 'هل أنت متأكد أنك تريد إلغاء الصك؟',
      staticMessage: '',
      acceptButtonText: ' إلغاء الصك',
      dynamicMessage: '',
      secondeStaticMessage: '',
    };
    this._popupService.updateConfirmationPopupData(cancelConfirmationObj);

    // this._popupService.updateConfirmationPopupData
    //  this.changePage.emit(Pagemode.List);
    // this.showCancelModal = true;
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.changePage.emit(Pagemode.List);
        this.closeDialog();
      }),
    );
  }

  closeCancelModal(): void {
    this.showCancelModal = false;
  }

  confirmCancelDeed(): void {
    this._popupService.confirmAction.emit();
    // this.deedForm.reset();
    // this.verifyForm.reset();
    // this.verifyForm.patchValue({
    //   deedSource: DeedIntegrationTypeEnum.JusticeMinistry,
    //   constructionLicenseType: ConstructionLicenseTypeEnum.Balady
    // });
    // this.fawriaLicenseDeedAndConstructionLicenseResponse = undefined;
    // this.deedIntegrationError = '';
    // this.constractionIntegrationError = '';
    // this.generalIntegrationError = '';
    // this.closeCancelModal();
  }

  closeAiniDeedModal(): void {
    this.showAiniDeedModal = false;
  }

  changeLicenseType(): void {
    this.closeAiniDeedModal();
    console.log('Change license type requested');
  }

  getConstructionLicenseTypeName(): string {
    const licenseType = this.verifyForm.get('constructionLicenseType')?.value;
    switch (licenseType) {
      case ConstructionLicenseTypeEnum.Balady:
        return 'رخصة بناء صادرة من بلدي';
      case ConstructionLicenseTypeEnum.Itmam:
        return 'إتمام';
      case ConstructionLicenseTypeEnum.RiyadhAmanah:
        return 'رخصة بناء صادرة من أمانة الرياض';
      default:
        return '';
    }
  }

  private clearVerificationResponse(): void {
    if (this.fawriaLicenseDeedAndConstructionLicenseResponse) {
      this.fawriaLicenseDeedAndConstructionLicenseResponse = undefined;
      this.deedIntegrationError = '';
      this.constractionIntegrationError = '';
      this.generalIntegrationError = '';
    }
  }

  private pad(num: number): string {
    return num < 10 ? '0' + num : '' + num;
  }

  formatNumberWithCommas(event: any): void {
    const input = event.target as HTMLInputElement;
    const controlName = input.getAttribute('formControlName');

    if (!controlName) return;

    // Remove all commas and non-numeric characters except decimal point
    let numericValue = input.value.replace(/,/g, '').replace(/[^\d.]/g, '');

    // Convert Arabic numbers to English
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    arabicNumbers.forEach((arabic, index) => {
      numericValue = numericValue.replace(
        new RegExp(arabic, 'g'),
        englishNumbers[index],
      );
    });

    // Update form control with numeric value (without commas)
    if (numericValue) {
      this.deedForm
        .get(controlName)
        ?.setValue(parseFloat(numericValue), { emitEvent: false });
    } else {
      this.deedForm.get(controlName)?.setValue(null, { emitEvent: false });
    }

    // Format with commas for display
    const parts = numericValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    input.value = parts.join('.');
  }

  // Handle focus - remove commas for editing
  onNumberInputFocus(event: any): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/,/g, '');
  }

  // Handle blur - add commas for display
  onNumberInputBlur(event: any): void {
    this.formatNumberWithCommas(event);
  }

  onConstructionLicenseFileUploaded(fileData: any): void {
    if (fileData.eventRes.data.length === 0) {
      this.verifyForm.get('constructionLicenseFileId')?.setValue(null);
      return;
    }
    if (
      fileData &&
      fileData.eventRes &&
      fileData.eventRes.data &&
      fileData.eventRes.data.length > 0
    ) {
      const uploadedFile = fileData.eventRes.data[0];
      this.verifyForm
        .get('constructionLicenseFileId')
        ?.setValue(uploadedFile.id);
      console.log('Construction license file uploaded:', uploadedFile);
    }
  }

  onApprovedPlansUploaded(fileData: any): void {
    if (fileData.eventRes.data.length === 0) {
      this.verifyForm.get('approvedPlansFileIds')?.setValue([]);
      return;
    }
    if (
      fileData &&
      fileData.eventRes &&
      fileData.eventRes.data &&
      fileData.eventRes.data.length > 0
    ) {
      const uploadedFiles = fileData.eventRes.data;
      const fileIds = uploadedFiles.map((file: any) => file.id);
      this.verifyForm.get('approvedPlansFileIds')?.setValue(fileIds);
      console.log('Approved plans files uploaded:', uploadedFiles);
    }
  }

  // Helper method to mark all controls in a FormGroup as touched
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      control?.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else if (control instanceof FormArray) {
        control.controls.forEach((c) => {
          if (c instanceof FormGroup) {
            this.markFormGroupTouched(c);
          } else {
            c.markAsTouched();
          }
        });
      }
    });
  }

  // Explicitly mark all FormArray controls as touched
  private markFormArraysTouched(): void {
    // Mark all owner banks controls as touched
    this.ownerBanks.controls.forEach((control, index) => {
      control.markAsTouched();
      control.markAsDirty();
      control.updateValueAndValidity();
    });
    this.ownerBanks.markAsTouched();
    this.ownerBanks.markAsDirty();

    // Mark all owner account number controls as touched
    this.ownerAccountNumber.controls.forEach((control, index) => {
      control.markAsTouched();
      control.markAsDirty();
      control.updateValueAndValidity();
    });
    this.ownerAccountNumber.markAsTouched();
    this.ownerAccountNumber.markAsDirty();

    // Mark all owner agreement files controls as touched
    this.ownerAgreementFiles.controls.forEach((control, index) => {
      control.markAsTouched();
      control.markAsDirty();
      control.updateValueAndValidity();
    });
    this.ownerAgreementFiles.markAsTouched();
    this.ownerAgreementFiles.markAsDirty();

    // Mark all mortgagee files controls as touched
    this.mortgageeFiles.controls.forEach((control, index) => {
      control.markAsTouched();
      control.markAsDirty();
      control.updateValueAndValidity();
    });
    this.mortgageeFiles.markAsTouched();
    this.mortgageeFiles.markAsDirty();

    // Force change detection to update the view
    this.cdr.detectChanges();
  }

  // Helper method to log FormArray validation errors
  private logFormArrayErrors(): void {
    const ownerBanksErrors: number[] = [];
    const ownerAccountErrors: number[] = [];
    const ownerFilesErrors: number[] = [];
    const mortgageeFilesErrors: number[] = [];

    this.ownerBanks.controls.forEach((control, index) => {
      if (control.invalid) {
        ownerBanksErrors.push(index + 1); // +1 for 1-based index
      }
    });

    this.ownerAccountNumber.controls.forEach((control, index) => {
      if (control.invalid) {
        ownerAccountErrors.push(index + 1);
      }
    });

    this.ownerAgreementFiles.controls.forEach((control, index) => {
      if (control.invalid) {
        ownerFilesErrors.push(index + 1);
      }
    });

    this.mortgageeFiles.controls.forEach((control, index) => {
      if (control.invalid) {
        mortgageeFilesErrors.push(index + 1);
      }
    });
  }

  // Helper method to check if a specific owner row has any validation errors
  hasOwnerRowError(index: number): boolean {
    return (
      this.ownerBanks.at(index).invalid ||
      this.ownerAccountNumber.at(index).invalid ||
      this.ownerAgreementFiles.at(index).invalid
    );
  }

  // Get list of owner names with errors
  getOwnersWithErrors(): string[] {
    const ownersWithErrors: string[] = [];
    const owners =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData
        ?.deedOwners || [];

    owners.forEach((owner, index) => {
      if (this.hasOwnerRowError(index)) {
        const errorDetails: string[] = [];
        if (
          this.ownerBanks.at(index).invalid &&
          this.ownerBanks.at(index).touched
        ) {
          errorDetails.push('البنك');
        }
        if (
          this.ownerAccountNumber.at(index).invalid &&
          this.ownerAccountNumber.at(index).touched
        ) {
          errorDetails.push('رقم الآيبان');
        }
        if (
          this.ownerAgreementFiles.at(index).invalid &&
          this.ownerAgreementFiles.at(index).touched
        ) {
          errorDetails.push('الاتفاقية');
        }

        if (errorDetails.length > 0) {
          const ownerName = owner.ownerName || `المالك ${index + 1}`;
          ownersWithErrors.push(`${ownerName} (${errorDetails.join(', ')})`);
        }
      }
    });

    return ownersWithErrors;
  }

  // Get detailed error message for a specific owner field
  getOwnerFieldError(
    index: number,
    field: 'bank' | 'account' | 'file',
  ): string | null {
    let control;
    switch (field) {
      case 'bank':
        control = this.ownerBanks.at(index);
        break;
      case 'account':
        control = this.ownerAccountNumber.at(index);
        break;
      case 'file':
        control = this.ownerAgreementFiles.at(index);
        break;
    }

    if (control && control.invalid && control.touched) {
      if (control.errors?.['required']) {
        return 'حقل مطلوب';
      }
    }
    return null;
  }

  saveDeed(): void {
    if (!this.fawriaLicenseDeedAndConstructionLicenseResponse) {
      console.error('No deed data to save. Please verify the deed first.');
      return;
    }

    if (!this.isUnit) {
      // Clear validators on the FormArray itself
      this.ownerBanks.clearValidators();
      this.ownerAccountNumber.clearValidators();
      this.ownerAgreementFiles.clearValidators();

      // Clear validators on each control within the FormArrays
      this.ownerBanks.controls.forEach((control) => {
        control.clearValidators();
        control.updateValueAndValidity();
      });

      this.ownerAccountNumber.controls.forEach((control) => {
        control.clearValidators();
        control.updateValueAndValidity();
      });

      this.ownerAgreementFiles.controls.forEach((control) => {
        control.clearValidators();
        control.updateValueAndValidity();
      });

      // Update the FormArrays validity
      this.ownerBanks.updateValueAndValidity();
      this.ownerAccountNumber.updateValueAndValidity();
      this.ownerAgreementFiles.updateValueAndValidity();

      // Update the entire form validity
      this.deedForm.updateValueAndValidity();
    }

    // Mark all controls as touched to show validation errors
    this.markFormGroupTouched(this.deedForm);

    if (this.isUnit)
      // Explicitly mark all FormArray controls as touched
      this.markFormArraysTouched();

    // Mark mortgagee arrays as touched if property is mortgaged
    if (
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData
        ?.isRealEstateMortgaged
    ) {
      this.mortgageeFiles.controls.forEach((control) => {
        control.markAsTouched();
        control.markAsDirty();
        control.updateValueAndValidity();
      });
    }

    
    
    if (this.deedForm.invalid) {
      console.log(this.deedForm);
      // Log which owner rows have errors for debugging
      this.logFormArrayErrors();
      console.error('Form is invalid. Please check all required fields.');
      return;
    }

    // Validate totalLandArea and totalUnit when required (Itmam or RiyadhAmanah)
    const constructionLicenseType = this.verifyForm.get(
      'constructionLicenseType',
    )?.value;
    if (
      this.isUnit &&
      (constructionLicenseType === ConstructionLicenseTypeEnum.Itmam ||
        constructionLicenseType === ConstructionLicenseTypeEnum.RiyadhAmanah)
    ) {
      const totalLandAreaValue = this.deedForm.get('totalLandArea')?.value;
      const totalUnitValue = this.deedForm.get('totalUnit')?.value;

      this.deedForm.get('totalLandArea')?.markAsTouched();
      this.deedForm.get('totalUnit')?.markAsTouched();

      if (!totalLandAreaValue || !totalUnitValue) {
        console.error('totalLandArea and totalUnit are required.');
        return;
      }
    }

    const formData = this.deedForm.value;
    this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.totalLandValue =
      formData.totalArea || 0;
    this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseProjectId =
      this.licenseProjectId;

    // Map mortgagee data
    if (
      this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData
        .deedMortgageeList &&
      this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData
        .deedMortgageeList.length > 0
    ) {
      this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedMortgageeList.forEach(
        (mortgagee, index) => {
          // Map file ID from FormArray or fallback to mortgageeFilesInfo
          const fileId =
            this.mortgageeFiles.at(index)?.value ||
            this.mortgageeFilesInfo[index]?.id;
          mortgagee.mortgageeFileId = fileId || null;
        },
      );
    }

    if (this.isUnit) {
      if (
        this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedOwners
      ) {
        this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedOwners.forEach(
          (owner, index) => {
            // Map bank ID from FormArray
            const bankId = this.ownerBanks.at(index)?.value;
            if (bankId) {
              owner.bankId = bankId;
            }
            // Map account number from FormArray
            const accountNumber = this.ownerAccountNumber.at(index)?.value;
            if (accountNumber) {
              owner.accountNumber = accountNumber;
            }
            // Map agreement file ID from FormArray or fallback to ownerAgreementFilesInfo
            const agreementFileId =
              this.ownerAgreementFiles.at(index)?.value ||
              this.ownerAgreementFilesInfo[index]?.id;
            if (agreementFileId) {
              owner.agreementFileId = agreementFileId;
            }
            owner.owningAmount = +(
              (this.landValue ?? 0) * (owner?.owningArea ?? 0)
            ).toFixed(2);
          },
        );
      }
    }

    if (this.isUnit) {
      if (
        !this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseInfoList
      ) {
        this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseInfoList =
          [];
      }

      if (
        this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseInfoList
          .length > 0
      ) {
        this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseInfoList[0].licenseFileId =
          this.verifyForm.get('constructionLicenseFileId')?.value;
        this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseInfoList[0].licenseProjectConstructionLicenseTypeId =
          this.verifyForm.get('constructionLicenseType')?.value;
      } else {
        this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseInfoList.push(
          {
            licenseFileId: this.verifyForm.get('constructionLicenseFileId')
              ?.value,
            licenseProjectConstructionLicenseTypeId: this.verifyForm.get(
              'constructionLicenseType',
            )?.value,
          } as LicenseInfoList,
        );
      }
    }

    this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.integrationTypeId =
      this.verifyForm.get('deedSource')?.value;
    this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.certifiedPlansFilesIds =
      this.verifyForm.get('approvedPlansFileIds')?.value;
    this.fawriaLicenseDeedAndConstructionLicenseResponse.totalUnits =
      this.verifyForm.get('totalUnit')?.value;

    // Map totalUnits and buildingFlatArea from deedForm for Itmam/RiyadhAmanah
    if (this.isUnit) {
      const licenseType = this.verifyForm.get('constructionLicenseType')?.value;
      if (
        licenseType === ConstructionLicenseTypeEnum.Itmam ||
        licenseType === ConstructionLicenseTypeEnum.RiyadhAmanah
      ) {
        this.fawriaLicenseDeedAndConstructionLicenseResponse.totalUnits =
          this.deedForm.get('totalUnit')?.value || null;
        this.fawriaLicenseDeedAndConstructionLicenseResponse.buildingFlatArea =
          this.deedForm.get('totalLandArea')?.value || null;
      }
    }

    if (
      this.verifyForm.get('constructionLicenseType')?.value ===
        ConstructionLicenseTypeEnum.RiyadhAmanah &&
      this.verifyForm.get('deedSource')?.value === DeedIntegrationTypeEnum.RER
    ) {
      if (
        this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseInfoList ==
        undefined
      ) {
        this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseInfoList =
          [];
      }
      this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseInfoList[0].licenseNumber =
        this.verifyForm.get('riyadhAmanahLicenseNumber')?.value;
    }

    this._projectLandDeedService
      .SaveFawriaLicenseDeedAndConstructionLicense(
        this.fawriaLicenseDeedAndConstructionLicenseResponse,
      )
      .subscribe({
        next: (response) => {
          if (response) {
            console.log('Deed saved successfully:', response);
            this.deedForm.markAsPristine();
            this.verifyForm.markAsPristine();
            this._tabsService.setUnsavedChanges(false);
            this._licenseRequestService.updateCompletedTapCodesIsClicked.emit();
            this.changePage.emit(Pagemode.List);
          }
        },
        error: (error) => {
          console.error('Error saving deed:', error);
        },
      });
  }
}
