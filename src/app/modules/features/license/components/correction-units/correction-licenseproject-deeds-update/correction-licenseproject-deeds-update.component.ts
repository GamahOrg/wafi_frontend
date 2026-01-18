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
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ProjectLandDeedService } from '../../../services/project-land-deed.service';
import {
  DeedData,
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
import { CorrectionProjectLandDeedService } from '../../../services/correction-project-land-deed.service';
import { ConstructionLicenseDto } from '../../../dataModels/construction-license.dto';
import { CorrectionConstructionLicenseService } from '../../../services/licenseProjects/correction-construction-license.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-correction-licenseproject-deeds-update',
  templateUrl: './correction-licenseproject-deeds-update.component.html',
  styleUrls: ['./correction-licenseproject-deeds-update.component.scss'],
})
export class CorrectionLicenseprojectDeedsUpdateComponent
  implements OnInit, OnChanges, OnDestroy {
  @Input() isIntegration: boolean | null = null;
  @Input() isUnit: boolean | null = null;
  @Input() deedId: string | null = null;
  @Input() deedNumber: string | null = null;
  @Input() deedDate: string | null = null;
  @Input() integrationTypeId: number | null = null;
  @Input() constructionLicenseNumber: string | null = null;
  @Input() licenseProjectConstructionLicenseTypeId: number | null = null;
  @Input() isVerifiedByIntegration: boolean = false;
  @Output() changePage = new EventEmitter<Pagemode>();

  baseUrl = `${environment.baseURL}/`;
  deedForm!: FormGroup;
  verifyForm!: FormGroup;
  constructionLicenses: ConstructionLicenseDto[] = [];
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
  private isLoadingDeedDetails: boolean = false; // Flag to prevent clearing response during load

  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  correctionUnitRequestHeaderId: string =
    '00000000-0000-0000-0000-000000000000';

  // Store existing approved plans files for display
  existingApprovedPlansFiles: { id: string }[] = [];

  localization = {
    title: 'بيانات الرخص الإنشائية',
    constructionLicensetype: 'نوع الرخص الإنشائية',
    issueOn: 'تاريخ الرخصة',
    licenseFile: 'ملفات الرخصة الإنشائية',
    licenseNumber: 'رقم الرخصة',
    landTotalSpace: 'مساحة مسطح البناء',
    before7: 'قبل 1-7',
    after7: 'بعد 1-7',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
    dateValidator: 'يجب ان يكون تاريخ الرخصة اقل من تاريخ الحالي',
    letterType: 'خطاب تعهد إتمام',
  };

  singleFileUploaderData: FileUploader = {
    multiple: false,
    size: 3072,
    allowedExtensions: ['.pdf'],
    allowedExtensionsText: '.pdf',
  } as FileUploader;

  marginalizationSpeechFileUploaderData: FileUploader = {
    multiple: false,
    size: 3072,
    allowedExtensions: ['.pdf'],
    allowedExtensionsText: '.pdf',
  } as FileUploader;

  licenseConstractionFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;

  multiFileUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;

  constructor(
    private fb: FormBuilder,
    private _projectLandDeedService: CorrectionProjectLandDeedService,
    private _shareservice: SharedLicenseProjectService,
    private cdr: ChangeDetectorRef,
    private _popupService: PopupService,
    private _licenseRequestService: LicenseRequestService,
    private _projectInstantDeedService: ProjectInstantLicenseDeedService,
    private _tabsService: TabsService,
    private _constructionLicenseService: CorrectionConstructionLicenseService
  ) { }

  ngOnInit(): void {
    this.observeconfirmAction();
    this.getLicenseProjectId();
    this.initializeForm();
    this.loadComponentData();
    this.initializeVerifyForm();
    this.getNatureTypeIdByLicenseProjectId();
    this.trackFormChanges();

   
    if (this.deedId) {
      this.loadDeedDetails();
    }
  }

  private loadDeedDetails(): void {
    if (!this.deedId) {
      // If no deedId, construct response from @Input() properties
      this.constructResponseFromInputs();
      return;
    }

    this._projectLandDeedService.GetDeedDetailsById(this.deedId).subscribe({
      next: (response) => {
        if (response && response.isDone && response.data) {
          const responseData = response.data as any;

          // Set flag to prevent clearing response during form population
          this.isLoadingDeedDetails = true;

          // Check if the response has the expected structure with deedData property
          // or if the deed data is directly in the response (flat structure)
          if (responseData.deedData) {
            // Response has the expected structure
            this.fawriaLicenseDeedAndConstructionLicenseResponse = responseData as FawriaLicenseDeedAndConstructionLicenseResponseDto;
          } else if (responseData.deedNo !== undefined || responseData.deedSerial !== undefined) {
            // Response is flat - wrap it in the expected structure
            this.fawriaLicenseDeedAndConstructionLicenseResponse = {
              deedData: responseData as DeedData,
              licenseInfoList: responseData.licenseInfoList || [],
              errorCodes: [],
              licenseProjectId: this.licenseProjectId,
              isRiyadCity: responseData.isRiyadCity || false,
            };
          } else {
            // Unknown structure, use as-is
            this.fawriaLicenseDeedAndConstructionLicenseResponse = responseData as FawriaLicenseDeedAndConstructionLicenseResponseDto;
          }

          // Ensure errorCodes is empty array to show the data section
          if (
            !this.fawriaLicenseDeedAndConstructionLicenseResponse.errorCodes
          ) {
            this.fawriaLicenseDeedAndConstructionLicenseResponse.errorCodes =
              [];
          }
          // Ensure licenseInfoList is at least an empty array if null
          if (
            !this.fawriaLicenseDeedAndConstructionLicenseResponse
              .licenseInfoList
          ) {
            this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseInfoList =
              [];
          }

          this.processResponseData();
          this.populateFormFromDeedDetails();
          this.disableVerifiedFields();
          this.cdr.detectChanges();

          // Reset the flag after processing is complete
          this.isLoadingDeedDetails = false;

        } else {
          // API returned but no data, construct from @Input() properties
          this.constructResponseFromInputs();
        }
      },
      error: (error) => {
        console.error('Error loading deed details:', error);
        // On error, construct response from @Input() properties as fallback
        this.constructResponseFromInputs();
      },
    });
  }

  private constructResponseFromInputs(): void {
    // Set flag to prevent clearing response during form population
    this.isLoadingDeedDetails = true;

    // Construct fawriaLicenseDeedAndConstructionLicenseResponse from @Input() properties
    // This is a fallback when API doesn't return data
    this.fawriaLicenseDeedAndConstructionLicenseResponse = {
      deedData: {
        deedNo: this.deedNumber ? parseInt(this.deedNumber, 10) : 0,
        deedDate: this.deedDate || '',
        integrationTypeId: this.integrationTypeId || 0,
        deedOwners: [],
        isRealEstateMortgaged: false,
        deedArea: 0,
        deedAreaText: '',
        totalLandValue: 0,
      } as any,
      licenseInfoList: this.constructionLicenseNumber
        ? [
          {
            licenseNumber: this.constructionLicenseNumber,
            licenseProjectConstructionLicenseTypeId:
              this.licenseProjectConstructionLicenseTypeId ||
              ConstructionLicenseTypeEnum.Balady,
          } as LicenseInfoList,
        ]
        : [],
      errorCodes: [],
      licenseProjectId: this.licenseProjectId,
      isRiyadCity: false,
    };

    this.processResponseData();
    this.disableVerifiedFields();
    this.cdr.detectChanges();

    // Reset the flag after processing is complete
    this.isLoadingDeedDetails = false;
  }

  private populateFormFromDeedDetails(): void {
    if (!this.fawriaLicenseDeedAndConstructionLicenseResponse) return;

    const deedData =
      this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData;
    const licenseInfo =
      this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseInfoList?.[0];

    // Populate deedForm - use emitEvent: false to prevent triggering valueChanges
    if (deedData) {
      this.deedForm.patchValue({
        totalArea: deedData.totalLandValue,
      }, { emitEvent: false });
    }

    // Populate totalUnitsLand (عدد الاراضي) when isUnit = false from deedData.numberOfLands
    if (!this.isUnit && deedData?.numberOfLands) {
      this.deedForm.patchValue({
        totalUnitsLand: deedData.numberOfLands,
      }, { emitEvent: false });
    }

    // Populate approvedPlansFileIds from certifiedPlansFilesIds
    if (deedData?.certifiedPlansFilesIds && deedData.certifiedPlansFilesIds.length > 0) {
      this.verifyForm.patchValue({
        approvedPlansFileIds: deedData.certifiedPlansFilesIds,
      }, { emitEvent: false });
      // Store files for display
      this.existingApprovedPlansFiles = deedData.certifiedPlansFilesIds.map((id: string) => ({ id }));
    }

    // Populate verifyForm with deed and construction license info
    // Use emitEvent: false to prevent triggering clearVerificationResponse
    if (deedData) {
      // Determine deed source from integrationTypeId
      const deedSourceValue =
        deedData.integrationTypeId === 0
          ? DeedIntegrationTypeEnum.JusticeMinistry
          : DeedIntegrationTypeEnum.RER;

      // Set deed number based on source (use deedNo from DeedData and convert to string)
      const deedNumberStr = deedData.deedNo?.toString() || '';
      if (deedSourceValue === DeedIntegrationTypeEnum.JusticeMinistry) {
        this.verifyForm.patchValue({
          deedSource: deedSourceValue,
          deedNumber: deedNumberStr,
        }, { emitEvent: false });
      } else {
        this.verifyForm.patchValue({
          deedSource: deedSourceValue,
          fawriaRERNumber: deedNumberStr,
        }, { emitEvent: false });
      }

      // Convert and set deed date
      if (deedData.deedDate) {
        const gregorianDate = this.convertHijriToGregorian(deedData.deedDate);
        this.verifyForm.patchValue({
          deedDate: gregorianDate,
        }, { emitEvent: false });
      }

      // Set approved plans files if available
      if (
        deedData.certifiedPlansFilesIds &&
        deedData.certifiedPlansFilesIds.length > 0
      ) {
        this.verifyForm.patchValue({
          approvedPlansFileIds: deedData.certifiedPlansFilesIds,
        }, { emitEvent: false });
      }
    }

    // Populate verifyForm with construction license info
    if (licenseInfo) {
      this.verifyForm.patchValue({
        constructionLicenseType:
          licenseInfo.licenseProjectConstructionLicenseTypeId,
        licenseNumber: licenseInfo.licenseNumber,
        constructionLicenseFileId: licenseInfo.licenseFileId,
      }, { emitEvent: false });

      // Handle Riyadh Amanah license number
      if (
        licenseInfo.licenseProjectConstructionLicenseTypeId ===
        ConstructionLicenseTypeEnum.RiyadhAmanah
      ) {
        this.verifyForm.patchValue({
          riyadhAmanahLicenseNumber: licenseInfo.licenseNumber,
        }, { emitEvent: false });
      }
    }

    // Set license type based on isAddedFromPreviousLicenses from API response
    // true = الرخصة السابقة (1), false/null = رخصة جديدة (2)
    const isAddedFromPreviousLicenses = this.fawriaLicenseDeedAndConstructionLicenseResponse.isAddedFromPreviousLicenses;
    const constructionLicenseId = this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseInfoList?.[0]?.correctionLicenseProjectConstructionLicenseId;

    if (isAddedFromPreviousLicenses === true) {
      // الرخصة السابقة (previous license)
      // Add the license from licenseInfoList to constructionLicenses array if not already present
      if (licenseInfo && constructionLicenseId) {
        const existingLicense = this.constructionLicenses.find(l => l.id === constructionLicenseId);
        if (!existingLicense) {
          // Create a ConstructionLicenseDto from licenseInfoList data
          const newLicense: ConstructionLicenseDto = {
            id: constructionLicenseId,
            licenseProjectsId: this.licenseProjectId,
            licenseNumber: licenseInfo.licenseNumber || '',
            constructionLicenseType: licenseInfo.licenseProjectConstructionLicenseTypeId,
            landTotalSpace: licenseInfo.landTotalSpace || 0,
            licenseFileId: licenseInfo.licenseFileId || null,
            issueOn: licenseInfo.licenseIssueDate || null,
            before7: false,
            isPrevious: true,
            licenseFile: null,
          };
          this.constructionLicenses.push(newLicense);
        }
      }

      this.verifyForm.patchValue({
        licenseType: 1,
        previousLicenseNumber: constructionLicenseId || '',
      }, { emitEvent: false });

      // Map licenseProjectConstructionLicenseTypeId to constructionLicenseType if not null
      if (licenseInfo?.licenseProjectConstructionLicenseTypeId != null) {
        this.verifyForm.patchValue({
          constructionLicenseType: licenseInfo.licenseProjectConstructionLicenseTypeId,
        }, { emitEvent: false });
      }
    } else {
      // رخصة جديدة (new license) - when isAddedFromPreviousLicenses is false or null
      this.verifyForm.patchValue({
        licenseType: 2,
      }, { emitEvent: false });
    }
  }

  private disableVerifiedFields(): void {
    // Removed - allow users to edit all fields for correction
    // Fields are no longer disabled even when isVerifiedByIntegration is true
  }

  ngOnDestroy(): void {
    this._tabsService.setUnsavedChanges(false);
  }

  private loadComponentData() {
    this._constructionLicenseService
      .GetCorrectionLicenseConstructionNotTiedToDeed(
        this.correctionUnitRequestHeaderId as string
      )
      .subscribe((results) => {
        if (results) {
          this.constructionLicenses = results as ConstructionLicenseDto[];
        }
      });
  }

  private trackFormChanges(): void {
    this.deedForm.valueChanges.subscribe(() => {
      if (this.deedForm.dirty) {
        this._tabsService.setUnsavedChanges(true);
      }
    });
    this.verifyForm.valueChanges.subscribe(() => {
      if (this.verifyForm.dirty) {
        this._tabsService.setUnsavedChanges(true);
      }
    });
  }

  getNatureTypeIdByLicenseProjectId(): void {
    this._projectInstantDeedService
      .GetNatureTypeIdByCorrectionRequestId(
        this.correctionUnitRequestHeaderId as string
      )
      .subscribe((res: any) => {
        debugger;
        if (res) {
          this.isUnit = res.data;
          this.updateTotalUnitsLandValidators();
        }
      });
  }

  private updateTotalUnitsLandValidators(): void {
    if (!this.isUnit) {
      // عدد الاراضي is required when isUnit = false
      this.deedForm.get('totalUnitsLand')?.setValidators([Validators.required]);
    } else {
      this.deedForm.get('totalUnitsLand')?.clearValidators();
    }
    this.deedForm.get('totalUnitsLand')?.updateValueAndValidity();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isIntegration'] && this.verifyForm) {
      const currentValue = this.verifyForm.get(
        'constructionLicenseType'
      )?.value;

      // No restrictions on construction license type selection
    }
  }

  private getLicenseProjectId() {
    this.licenseProjectId =
      this._shareservice.getLicenseProjectIdStorage() as string;
    this.correctionUnitRequestHeaderId =
      this._shareservice.getCorrectionUnitRequestIdFromLocalStorage() as string;
  }

  private initializeVerifyForm(): void {
    // Determine deed source from integrationTypeId (0 = JusticeMinistry, other = RER)
    const deedSourceValue =
      this.integrationTypeId === 0
        ? DeedIntegrationTypeEnum.JusticeMinistry
        : this.integrationTypeId === 1
          ? DeedIntegrationTypeEnum.RER
          : DeedIntegrationTypeEnum.JusticeMinistry;

    // Determine construction license type from licenseProjectConstructionLicenseTypeId
    const constructionLicenseTypeValue =
      this.licenseProjectConstructionLicenseTypeId !== null
        ? this.licenseProjectConstructionLicenseTypeId
        : this.isUnit
          ? ConstructionLicenseTypeEnum.Balady
          : null;

    // Convert Hijri date string to Gregorian Date object
    const gregorianDate = this.convertHijriToGregorian(this.deedDate);

    this.verifyForm = this.fb.group({
      deedSource: [deedSourceValue, [Validators.required]],
      marginalizationSpeechFileId: [null],

      licenseType: [2, [Validators.required]], // Default to new license (2) for update
      deedNumber: [
        deedSourceValue === DeedIntegrationTypeEnum.JusticeMinistry
          ? this.deedNumber
          : '',
        [Validators.required],
      ],
      deedDate: [gregorianDate, [Validators.required]],
      // Conditionally validated fields - validators will be set by updateFormValidators()
      licenseNumber: [this.constructionLicenseNumber || ''],
      fawriaRERNumber: [
        deedSourceValue === DeedIntegrationTypeEnum.RER ? this.deedNumber : '',
        [Validators.required],
      ],
      previousLicenseNumber: [''],
      constructionLicenseType: [constructionLicenseTypeValue],
      totalLandArea: [''],
      totalUnit: [''],
      riyadhAmanahLicenseNumber: [''],
      constructionLicenseFileId: [null],
      approvedPlansFileIds: [[]], // For multi-file upload when isUnit = false
    });

    // Apply initial validators based on current selections
    this.updateFormValidators();

    // Subscribe to specific fields that should trigger clearVerificationResponse
    // Exclude totalLandArea and totalUnit as they are filled after verification
    const fieldsToWatch = [
      'deedSource', 'deedNumber', 'deedDate', 'fawriaRERNumber',
      'licenseType', 'previousLicenseNumber', 'constructionLicenseType',
      'licenseNumber', 'riyadhAmanahLicenseNumber', 'constructionLicenseFileId',
      'approvedPlansFileIds'
    ];

    fieldsToWatch.forEach(fieldName => {
      this.verifyForm.get(fieldName)?.valueChanges.subscribe(() => {
        this.clearVerificationResponse();
        this.updateFormValidators();
      });
    });

    // Disable deed source and deed identification fields to prevent user from changing them
    this.verifyForm.get('deedSource')?.disable();
    this.verifyForm.get('deedNumber')?.disable();
    this.verifyForm.get('deedDate')?.disable();
    this.verifyForm.get('fawriaRERNumber')?.disable();
  }

  private initializeForm(): void {
    this.deedForm = this.fb.group({
      totalArea: ['', [Validators.required]],
      totalUnitsLand: [''], // عدد الاراضي - required when isUnit = false
      // ownerBanks: this.fb.array([]),
      // ownerAccountNumber: this.fb.array([]),
      ownerAgreementFiles: this.fb.array([]),
      deedMarginalizationFiles: this.fb.array([]),
      ownerMobileNumbers: this.fb.array([]),
      mortgageeMobileNumbers: this.fb.array([]),
      mortgageeFiles: this.fb.array([]),
      mortgageeMarginalizationFiles: this.fb.array([]),
    });
  }

  // get ownerBanks(): FormArray {
  //   return this.deedForm.get('ownerBanks') as FormArray;
  // }

  // get ownerAccountNumber(): FormArray {
  //   return this.deedForm.get('ownerAccountNumber') as FormArray;
  // }

  get ownerAgreementFiles(): FormArray {
    return this.deedForm.get('ownerAgreementFiles') as FormArray;
  }

  get deedMarginalizationFiles(): FormArray {
    return this.deedForm.get('deedMarginalizationFiles') as FormArray;
  }

  get ownerMobileNumbers(): FormArray {
    return this.deedForm.get('ownerMobileNumbers') as FormArray;
  }

  get mortgageeMobileNumbers(): FormArray {
    return this.deedForm.get('mortgageeMobileNumbers') as FormArray;
  }

  get mortgageeFiles(): FormArray {
    return this.deedForm.get('mortgageeFiles') as FormArray;
  }

  get mortgageeMarginalizationFiles(): FormArray {
    return this.deedForm.get('mortgageeMarginalizationFiles') as FormArray;
  }

  private initializeOwnerFormsForOwners(ownersCount: number): void {
    // this.ownerBanks.clear();
    // this.ownerAccountNumber.clear();
    this.ownerAgreementFiles.clear();
    this.deedMarginalizationFiles.clear();
    this.ownerMobileNumbers.clear();
    const owners =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData
        ?.deedOwners || [];
    for (let i = 0; i < ownersCount; i++) {
      const owner = owners[i];
      const isRequired = owner?.isCustomer !== false;

      // this.ownerBanks.push(
      //   this.fb.control('', isRequired ? [Validators.required] : [])
      // );
      // this.ownerAccountNumber.push(
      //   this.fb.control('', isRequired ? [Validators.required, Validators.pattern(/^SA[0-9]{22}$/)] : [Validators.pattern(/^SA[0-9]{22}$/)])
      // );

      // Check if agreement file exists from API - if yes, not required
      const hasAgreementFile = !!owner?.agreementFile?.filePath;
      this.ownerAgreementFiles.push(
        this.fb.control(owner?.agreementFileId || '', hasAgreementFile ? [] : [Validators.required])
      );

      // Check if marginalization file exists from API - if yes, not required
      const hasMarginalizationFile = !!owner?.deedMarginalizationFile?.filePath;
      this.deedMarginalizationFiles.push(
        this.fb.control(owner?.deedMarginalizationFileId || '', hasMarginalizationFile ? [] : [Validators.required])
      );

      // Mobile number with pattern: starts with 05 followed by 8 digits
      this.ownerMobileNumbers.push(
        this.fb.control(owner?.mobileNo || '', [
          Validators.required,
          Validators.pattern(/^05\d{8}$/),
        ])
      );
    }
  }

  private initializeMortgageeFormsForMortgagees(mortgageesCount: number): void {
    this.mortgageeMobileNumbers.clear();
    this.mortgageeFiles.clear();
    this.mortgageeMarginalizationFiles.clear();
    const mortgagees =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData?.deedMortgageeList || [];
    for (let i = 0; i < mortgageesCount; i++) {
      const mortgagee = mortgagees[i];
      this.mortgageeMobileNumbers.push(
        this.fb.control(mortgagee?.mobile || '', [Validators.required, Validators.pattern(/^05\d{8}$/)])
      );
      // Check if mortgagee file exists from API - if yes, not required
      const hasMortgageeFile = !!mortgagee?.mortgageeFile?.filePath;
      this.mortgageeFiles.push(
        this.fb.control(mortgagee?.mortgageeFileId || '', hasMortgageeFile ? [] : [Validators.required])
      );
      // Check if marginalization letter file exists from API - if yes, not required
      const hasMarginalizationLetterFile = !!mortgagee?.marginalizationLetterFile?.filePath;
      this.mortgageeMarginalizationFiles.push(
        this.fb.control(mortgagee?.marginalizationLetterFileId || '', hasMarginalizationLetterFile ? [] : [Validators.required])
      );
    }
  }

  onMortgageeFileUploaded(fileData: any, mortgageeIndex: number): void {
    if (
      fileData &&
      fileData.eventRes &&
      fileData.eventRes.data &&
      fileData.eventRes.data.length > 0
    ) {
      const uploadedFile = fileData.eventRes.data[0];
      this.mortgageeFiles.at(mortgageeIndex).setValue(uploadedFile.id);
    }
  }

  deleteMortgageeFile(mortgageeIndex: number): void {
    this.mortgageeFiles.at(mortgageeIndex).setValue(null);
    this.mortgageeFiles.at(mortgageeIndex).setValidators([Validators.required]);
    this.mortgageeFiles.at(mortgageeIndex).updateValueAndValidity();
    if (this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData?.deedMortgageeList?.[mortgageeIndex]) {
      this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedMortgageeList[mortgageeIndex].mortgageeFileId = null;
      this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedMortgageeList[mortgageeIndex].mortgageeFile = null;
    }
  }

  onMortgageeMarginalizationFileUploaded(fileData: any, mortgageeIndex: number): void {
    if (
      fileData &&
      fileData.eventRes &&
      fileData.eventRes.data &&
      fileData.eventRes.data.length > 0
    ) {
      const uploadedFile = fileData.eventRes.data[0];
      this.mortgageeMarginalizationFiles.at(mortgageeIndex).setValue(uploadedFile.id);
    }
  }

  deleteMortgageeMarginalizationFile(mortgageeIndex: number): void {
    this.mortgageeMarginalizationFiles.at(mortgageeIndex).setValue(null);
    this.mortgageeMarginalizationFiles.at(mortgageeIndex).setValidators([Validators.required]);
    this.mortgageeMarginalizationFiles.at(mortgageeIndex).updateValueAndValidity();
    if (this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData?.deedMortgageeList?.[mortgageeIndex]) {
      this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedMortgageeList[mortgageeIndex].marginalizationLetterFileId = null;
      this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedMortgageeList[mortgageeIndex].marginalizationLetterFile = null;
    }
  }

  onOwnerFileUploaded(fileData: any, ownerIndex: number): void {
    if (
      fileData &&
      fileData.eventRes &&
      fileData.eventRes.data &&
      fileData.eventRes.data.length > 0
    ) {
      const uploadedFile = fileData.eventRes.data[0];
      this.ownerAgreementFiles.at(ownerIndex).setValue(uploadedFile.id);
      // console.log(
      //   `Owner ${ownerIndex} documentation file uploaded:`,
      //   uploadedFile
      // );
    }
  }

  onOwnerUploaddeedMarginalizationFiles(
    fileData: any,
    ownerIndex: number
  ): void {
    if (
      fileData &&
      fileData.eventRes &&
      fileData.eventRes.data &&
      fileData.eventRes.data.length > 0
    ) {
      const uploadedFile = fileData.eventRes.data[0];
      this.deedMarginalizationFiles.at(ownerIndex).setValue(uploadedFile.id);
      // console.log(
      //   `Owner ${ownerIndex} documentation file uploaded:`,
      //   uploadedFile
      // );
    }
  }

  // Delete file methods
  deleteOwnerAgreementFile(ownerIndex: number): void {
    this.ownerAgreementFiles.at(ownerIndex).setValue(null);
    // Add required validator back when file is deleted
    this.ownerAgreementFiles.at(ownerIndex).setValidators([Validators.required]);
    this.ownerAgreementFiles.at(ownerIndex).updateValueAndValidity();
    if (this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData?.deedOwners?.[ownerIndex]) {
      this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedOwners[ownerIndex].agreementFileId = '';
      this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedOwners[ownerIndex].agreementFile = null;
    }
  }

  deleteOwnerMarginalizationFile(ownerIndex: number): void {
    this.deedMarginalizationFiles.at(ownerIndex).setValue(null);
    // Add required validator back when file is deleted
    this.deedMarginalizationFiles.at(ownerIndex).setValidators([Validators.required]);
    this.deedMarginalizationFiles.at(ownerIndex).updateValueAndValidity();
    if (this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData?.deedOwners?.[ownerIndex]) {
      this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedOwners[ownerIndex].deedMarginalizationFileId = '';
      this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedOwners[ownerIndex].deedMarginalizationFile = null;
    }
  }

  onVerify(): void {
    const formData = this.verifyForm.getRawValue();
    let isValid = true;

    // Different validation logic based on isUnit
    if (!this.isUnit) {
      // Simplified form validation (isUnit = false)
      // Only needs: deedSource, deedNumber/fawriaRERNumber, deedDate, approvedPlansFileIds
      if (formData.deedSource === DeedIntegrationTypeEnum.JusticeMinistry) {
        if (!formData.deedNumber || !formData.deedDate) {
          isValid = false;
        }
      } else if (formData.deedSource === DeedIntegrationTypeEnum.RER) {
        if (!formData.fawriaRERNumber || !formData.deedDate) {
          isValid = false;
        }
      }

      // Check approvedPlansFileIds
      if (!formData.approvedPlansFileIds || formData.approvedPlansFileIds.length === 0) {
        isValid = false;
      }
    } else {
      // Full form validation (isUnit = true)
      // Check if licenseType is selected
      if (!formData.licenseType) {
        isValid = false;
      }

      // Check if constructionLicenseType is required (new license + isUnit) but not selected
      if (formData.licenseType == 2 && formData.constructionLicenseType == null) {
        isValid = false;
      }

      // Check if previousLicenseNumber is required (previous license) but not selected
      if (formData.licenseType == 1 && !formData.previousLicenseNumber) {
        isValid = false;
      }

      if (formData.deedSource === DeedIntegrationTypeEnum.JusticeMinistry) {
        if (!formData.deedNumber || !formData.deedDate) {
          isValid = false;
        }

        // Only validate construction license fields for new license (licenseType == 2)
        if (formData.licenseType == 2) {
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
        }
      } else if (formData.deedSource === DeedIntegrationTypeEnum.RER) {
        if (!formData.fawriaRERNumber || !formData.deedDate) {
          isValid = false;
        }

        // Only validate construction license fields for new license (licenseType == 2)
        if (formData.licenseType == 2) {
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
      }
    }

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

    if (dateToConvert) {
      const date = new Date(dateToConvert);
      const m = momentHijri(date);
      const hijriDay = (m as any).iDate();
      const hijriMonth = (m as any).iMonth() + 1;
      const hijriYear = (m as any).iYear();
      hijriDateString = `${this.pad(hijriDay)}-${this.pad(
        hijriMonth
      )}-${hijriYear}`;
    }

    // Check if رخصة سابقة (previous license) is selected
    const isAddedFromPreviousLicense = formData.licenseType == 1;

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
        constructionLicenseId: formData.previousLicenseNumber || null,
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
        isAddedFromPreviousLicenses: isAddedFromPreviousLicense,
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
        constructionLicenseId: formData.previousLicenseNumber || null,
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
        isAddedFromPreviousLicenses: isAddedFromPreviousLicense,
      };
    }

    this.requestDto.correctionUnitRequestHeaderId = this.correctionUnitRequestHeaderId;
    this.requestDto.deedId = this.deedId;
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
                )
            )
            .forEach((element) => {
              total += +element.componentArea;
            });
          return sum + total;
        },
        0
      ) || 0;

    // Populate totalLandArea and totalUnit from licenseInfoList
    // Use emitEvent: false to prevent triggering valueChanges which clears the response
    const licenseInfo = this.fawriaLicenseDeedAndConstructionLicenseResponse?.licenseInfoList?.[0];
    if (licenseInfo) {
      if (licenseInfo.landTotalSpace) {
        this.verifyForm.get('totalLandArea')?.setValue(licenseInfo.landTotalSpace, { emitEvent: false });
      }
      if (licenseInfo.numberOfUnits) {
        this.verifyForm.get('totalUnit')?.setValue(licenseInfo.numberOfUnits, { emitEvent: false });
      }
    }
    // If رخصة سابقة (licenseType == 1 or constructionLicenseId is set) and licenseProjectConstructionLicenseTypeId is not null,
    // set constructionLicenseType in the form
    const constructionLicenseId = this.fawriaLicenseDeedAndConstructionLicenseResponse?.constructionLicenseId;
    const isPreviousLicense = this.verifyForm.get('licenseType')?.value == 1;
    if ((constructionLicenseId || isPreviousLicense) && licenseInfo?.licenseProjectConstructionLicenseTypeId != null) {
      this.verifyForm.get('constructionLicenseType')?.setValue(licenseInfo.licenseProjectConstructionLicenseTypeId, { emitEvent: false });
      if(licenseInfo?.licenseProjectConstructionLicenseTypeId === ConstructionLicenseTypeEnum.Balady){
        this.verifyForm.get('licenseNumber')?.setValue(licenseInfo.licenseNumber, { emitEvent: false });
      }
      else if(licenseInfo?.licenseProjectConstructionLicenseTypeId === ConstructionLicenseTypeEnum.RiyadhAmanah){
        this.verifyForm.get('riyadhAmanahLicenseNumber')?.setValue(licenseInfo.licenseNumber, { emitEvent: false });
        this.verifyForm.get('constructionLicenseFileId')?.setValue(licenseInfo.licenseFileId, { emitEvent: false });
      }
      else if(licenseInfo?.licenseProjectConstructionLicenseTypeId === ConstructionLicenseTypeEnum.Itmam){
        this.verifyForm.get('constructionLicenseFileId')?.setValue(licenseInfo.licenseFileId, { emitEvent: false });
      }
    }

    const ownersCount =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData?.deedOwners
        ?.length || 0;
    if (ownersCount > 0) {
      this.initializeOwnerFormsForOwners(ownersCount);
    }

    // Initialize mortgagee forms if real estate is mortgaged
    if (this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData?.isRealEstateMortgaged) {
      const mortgageesCount =
        this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData?.deedMortgageeList?.length || 0;
      if (mortgageesCount > 0) {
        this.initializeMortgageeFormsForMortgagees(mortgageesCount);
      }
    }

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
              code.errorCode === this.deedIntegrationErrorCode.DeedNotValid
          )
          .map((code) => code.message)
          .join(', ');

      this.constractionIntegrationError =
        this.fawriaLicenseDeedAndConstructionLicenseResponse.errorCodes
          .filter(
            (code) =>
              code.errorCode ===
              this.deedIntegrationErrorCode.ConstructionLicenseNotValid
          )
          .map((code) => code.message)
          .join(', ');

      this.generalIntegrationError =
        this.fawriaLicenseDeedAndConstructionLicenseResponse.errorCodes
          .filter(
            (code) =>
              code.errorCode === this.deedIntegrationErrorCode.GeneralError
          )
          .map((code) => code.message)
          .join(', ');

      this.isAiniDeed =
        this.fawriaLicenseDeedAndConstructionLicenseResponse.errorCodes.some(
          (code) => code.errorCode === this.deedIntegrationErrorCode.AiniDeed
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
    this.cdr.detectChanges();
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
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  private observeconfirmAction() {
    this._popupService.confirmAction.subscribe((res: PopupData) => {
      this.changePage.emit(Pagemode.List);
      this.closeDialog();
    });
  }

  closeCancelModal(): void {
    this.showCancelModal = false;
  }

  confirmCancelDeed(): void {
    this._popupService.confirmAction.emit();
  }

  closeAiniDeedModal(): void {
    this.showAiniDeedModal = false;
  }

  changeLicenseType(): void {
    this.closeAiniDeedModal();
    console.log('Change license type requested');
  }

  private clearVerificationResponse(): void {
    // Don't clear if we're currently loading deed details
    if (this.isLoadingDeedDetails) {
      return;
    }
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

  private convertHijriToGregorian(hijriDateStr: string | null): Date | null {
    if (!hijriDateStr) {
      return null;
    }

    try {

      // Handle different Hijri date formats: "dd-MM-yyyy" or "yyyy-MM-dd" or "dd/MM/yyyy"
      let day: number, month: number, year: number;

      // Replace slashes with dashes for uniform handling
      const normalizedDate = hijriDateStr.replace(/\//g, '-');
      const parts = normalizedDate.split('-');


      if (parts.length !== 3) {
        return null;
      }

      // Determine format based on the first part length
      if (parts[0].length === 4) {
        // Format: yyyy-MM-dd
        year = parseInt(parts[0], 10);
        month = parseInt(parts[1], 10);
        day = parseInt(parts[2], 10);
      } else {
        // Format: dd-MM-yyyy
        day = parseInt(parts[0], 10);
        month = parseInt(parts[1], 10);
        year = parseInt(parts[2], 10);
      }


      if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return null;
      }

      // Convert Hijri to Gregorian using moment-hijri
      // Pad day and month with leading zero if single digit (1-9 becomes 01-09)
      const hijriDateFormatted = `${year}/${this.pad(month)}/${this.pad(day)}`;

      const m = momentHijri(hijriDateFormatted, 'iYYYY/iMM/iDD');
      const gregorianDate = (m as any).toDate();
      return gregorianDate;
    } catch (error) {
      console.error('Error converting Hijri to Gregorian:', error);
      return null;
    }
  }

  formatNumberWithCommas(event: any): void {
    const input = event.target as HTMLInputElement;
    const controlName = input.getAttribute('formControlName');

    if (!controlName) return;

    let numericValue = input.value.replace(/,/g, '').replace(/[^\d.]/g, '');

    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    arabicNumbers.forEach((arabic, index) => {
      numericValue = numericValue.replace(
        new RegExp(arabic, 'g'),
        englishNumbers[index]
      );
    });

    if (numericValue) {
      this.deedForm
        .get(controlName)
        ?.setValue(parseFloat(numericValue), { emitEvent: false });
    } else {
      this.deedForm.get(controlName)?.setValue(null, { emitEvent: false });
    }

    const parts = numericValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    input.value = parts.join('.');

    // Update land value when totalArea changes
    if (controlName === 'totalArea') {
      this.updateLandValue();
    }
  }

  onNumberInputFocus(event: any): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/,/g, '');
  }

  onNumberInputBlur(event: any): void {
    this.formatNumberWithCommas(event);
  }

  onConstructionLicenseFileUploaded(fileData: any): void {
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

  deleteConstructionLicenseFile(): void {
    this.verifyForm.get('constructionLicenseFileId')?.setValue(null);
    this.verifyForm.get('constructionLicenseFileId')?.setValidators([Validators.required]);
    this.verifyForm.get('constructionLicenseFileId')?.updateValueAndValidity();

    // Clear response to hide deed data sections and show verify button
    this.fawriaLicenseDeedAndConstructionLicenseResponse = undefined;
    this.deedIntegrationError = '';
    this.constractionIntegrationError = '';
    this.generalIntegrationError = '';

    // Reset related data
    this.totalLand = 0;
    this.landValue = 0;

    // Clear form arrays
    this.ownerAgreementFiles.clear();
    this.deedMarginalizationFiles.clear();
    this.ownerMobileNumbers.clear();
    this.mortgageeMobileNumbers.clear();
    this.mortgageeFiles.clear();
    this.mortgageeMarginalizationFiles.clear();

    // Reset totalLandArea and totalUnit
    this.verifyForm.get('totalLandArea')?.setValue('');
    this.verifyForm.get('totalUnit')?.setValue('');

    // Reset deedForm totalArea
    this.deedForm.get('totalArea')?.setValue('');
  }

  onApprovedPlansUploaded(fileData: any): void {
    console.log('onApprovedPlansUploaded called with:', fileData);
    if (
      fileData &&
      fileData.eventRes &&
      fileData.eventRes.data &&
      fileData.eventRes.data.length > 0
    ) {
      const uploadedFiles = fileData.eventRes.data;
      const newFileIds = uploadedFiles.map((file: any) => file.id);

      // Get existing file IDs and add new ones
      const existingIds = this.verifyForm.get('approvedPlansFileIds')?.value || [];
      const allFileIds = [...existingIds, ...newFileIds];

      this.verifyForm.get('approvedPlansFileIds')?.setValue(allFileIds);

      // Add new files to existing files list for display
      const newFiles = newFileIds.map((id: string) => ({ id }));
      this.existingApprovedPlansFiles = [...this.existingApprovedPlansFiles, ...newFiles];

      console.log('Approved plans files uploaded:', uploadedFiles);
      console.log('All File IDs:', allFileIds);
    }
  }

  deleteApprovedPlanFile(fileId: string): void {
    // Remove from existingApprovedPlansFiles array
    this.existingApprovedPlansFiles = this.existingApprovedPlansFiles.filter(file => file.id !== fileId);

    // Remove from form value
    const currentIds = this.verifyForm.get('approvedPlansFileIds')?.value || [];
    const updatedIds = currentIds.filter((id: string) => id !== fileId);
    this.verifyForm.get('approvedPlansFileIds')?.setValue(updatedIds);

    // Update validity
    this.verifyForm.get('approvedPlansFileIds')?.updateValueAndValidity();
  }

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

  private markFormArraysTouched(): void {
    // this.ownerBanks.controls.forEach((control, index) => {
    //   control.markAsTouched();
    //   control.markAsDirty();
    //   control.updateValueAndValidity();
    // });
    // this.ownerBanks.markAsTouched();
    // this.ownerBanks.markAsDirty();

    // this.ownerAccountNumber.controls.forEach((control, index) => {
    //   control.markAsTouched();
    //   control.markAsDirty();
    //   control.updateValueAndValidity();
    // });
    // this.ownerAccountNumber.markAsTouched();
    // this.ownerAccountNumber.markAsDirty();

    this.ownerAgreementFiles.controls.forEach((control, index) => {
      control.markAsTouched();
      control.markAsDirty();
      control.updateValueAndValidity();
    });
    this.ownerAgreementFiles.markAsTouched();
    this.ownerAgreementFiles.markAsDirty();

    this.deedMarginalizationFiles.controls.forEach((control, index) => {
      control.markAsTouched();
      control.markAsDirty();
      control.updateValueAndValidity();
    });
    this.deedMarginalizationFiles.markAsTouched();
    this.deedMarginalizationFiles.markAsDirty();

    this.cdr.detectChanges();
  }

  private logFormArrayErrors(): void {
    const ownerBanksErrors: number[] = [];
    const ownerAccountErrors: number[] = [];
    const ownerFilesErrors: number[] = [];
    const deedMarginalizationFilesErrors: number[] = [];

    // this.ownerBanks.controls.forEach((control, index) => {
    //   if (control.invalid) {
    //     ownerBanksErrors.push(index + 1);
    //   }
    // });

    // this.ownerAccountNumber.controls.forEach((control, index) => {
    //   if (control.invalid) {
    //     ownerAccountErrors.push(index + 1);
    //   }
    // });

    this.ownerAgreementFiles.controls.forEach((control, index) => {
      if (control.invalid) {
        ownerFilesErrors.push(index + 1);
      }
    });

    this.deedMarginalizationFiles.controls.forEach((control, index) => {
      if (control.invalid) {
        deedMarginalizationFilesErrors.push(index + 1);
      }
    });

    // if (ownerBanksErrors.length > 0) {
    //   console.log('Owners with missing bank selection:', ownerBanksErrors);
    // }
    // if (ownerAccountErrors.length > 0) {
    //   console.log('Owners with missing account number:', ownerAccountErrors);
    // }
    if (ownerFilesErrors.length > 0) {
      console.log('Owners with missing agreement file:', ownerFilesErrors);
    }

    if (deedMarginalizationFilesErrors.length > 0) {
      console.log(
        'Owners with missing marginalization file:',
        deedMarginalizationFilesErrors
      );
    }

    if (this.deedForm.get('totalArea')?.invalid) {
      console.log('Total area field is invalid');
    }
  }

  hasOwnerRowError(index: number): boolean {
    return (
      // this.ownerBanks.at(index).invalid ||
      // this.ownerAccountNumber.at(index).invalid ||
      this.ownerAgreementFiles.at(index).invalid ||
      this.deedMarginalizationFiles.at(index).invalid
    );
  }

  hasMortgageeRowError(index: number): boolean {
    return (
      this.mortgageeMobileNumbers.at(index)?.invalid ||
      this.mortgageeFiles.at(index)?.invalid ||
      this.mortgageeMarginalizationFiles.at(index)?.invalid
    );
  }

  getOwnersWithErrors(): string[] {
    const ownersWithErrors: string[] = [];
    const owners =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData
        ?.deedOwners || [];

    owners.forEach((owner, index) => {
      if (this.hasOwnerRowError(index)) {
        const errorDetails: string[] = [];
        // if (
        //   this.ownerBanks.at(index).invalid &&
        //   this.ownerBanks.at(index).touched
        // ) {
        //   errorDetails.push('البنك');
        // }
        // if (
        //   this.ownerAccountNumber.at(index).invalid &&
        //   this.ownerAccountNumber.at(index).touched
        // ) {
        //   errorDetails.push('رقم الآيبان');
        // }
        if (
          this.ownerAgreementFiles.at(index).invalid &&
          this.ownerAgreementFiles.at(index).touched
        ) {
          errorDetails.push('الاتفاقية');
        }
        if (
          this.deedMarginalizationFiles.at(index).invalid &&
          this.deedMarginalizationFiles.at(index).touched
        ) {
          errorDetails.push('ملف التهميش');
        }

        if (errorDetails.length > 0) {
          const ownerName = owner.ownerName || `المالك ${index + 1}`;
          ownersWithErrors.push(`${ownerName} (${errorDetails.join(', ')})`);
        }
      }
    });

    return ownersWithErrors;
  }

  getOwnerFieldError(
    index: number,
    field: 'file' | 'deedMarginalizationFiles'
  ): string | null {
    let control;
    switch (field) {
      // case 'bank':
      //   control = this.ownerBanks.at(index);
      //   break;
      // case 'account':
      //   control = this.ownerAccountNumber.at(index);
      //   break;
      case 'file':
        control = this.ownerAgreementFiles.at(index);
        break;

      case 'deedMarginalizationFiles':
        control = this.deedMarginalizationFiles.at(index);
        break;
    }

    if (control && control.invalid && control.touched) {
      if (control.errors?.['required']) {
        return 'حقل مطلوب';
      }
    }
    return null;
  }

  getConstructionLicenseTypeName(): string {
    // First check if API returned a value
    const apiValue = this.fawriaLicenseDeedAndConstructionLicenseResponse?.licenseInfoList?.[0]?.licenseProjectConstructionLicenseType;
    if (apiValue && (apiValue as any).name) {
      return (apiValue as any).name;
    }

    // Otherwise get from form selection
    const formValue = this.verifyForm.get('constructionLicenseType')?.value;
    if (formValue === ConstructionLicenseTypeEnum.Itmam) {
      return 'اتمام';
    } else if (formValue === ConstructionLicenseTypeEnum.RiyadhAmanah) {
      return 'أمانة الرياض';
    }

    return '';
  }

  saveDeed(): void {
    if (!this.fawriaLicenseDeedAndConstructionLicenseResponse) {
      console.error('No deed data to save. Please verify the deed first.');
      return;
    }

    this.markFormGroupTouched(this.deedForm);
    this.markFormArraysTouched();

    // Validate approvedPlansFileIds when isUnit is false
    if (!this.isUnit) {
      const approvedPlansFileIds = this.verifyForm.get('approvedPlansFileIds')?.value;
      this.verifyForm.get('approvedPlansFileIds')?.markAsTouched();

      if (!approvedPlansFileIds || approvedPlansFileIds.length === 0) {
        console.error('رفع المخططات المعتمدة للأرض مطلوب');
        return;
      }
    }

    // Validate totalLandArea and totalUnit when required
    // Only required for Itmam or RiyadhAmanah (NOT for Balady - data comes from integration)
    const constructionLicenseType = this.verifyForm.get('constructionLicenseType')?.value;

    const isFieldsRequired =
      constructionLicenseType === ConstructionLicenseTypeEnum.Itmam ||
      constructionLicenseType === ConstructionLicenseTypeEnum.RiyadhAmanah;

    if (isFieldsRequired && this.isUnit) {
      const totalLandAreaValue = this.verifyForm.get('totalLandArea')?.value;
      const totalUnitValue = this.verifyForm.get('totalUnit')?.value;

      this.verifyForm.get('totalLandArea')?.markAsTouched();
      this.verifyForm.get('totalUnit')?.markAsTouched();

      if (!totalLandAreaValue || !totalUnitValue) {
        console.error('totalLandArea and totalUnit are required.');
        return;
      }
    }

    if (this.deedForm.invalid) {
      this.logFormArrayErrors();
      return;
    }

    const formData = this.deedForm.value;

    debugger;
    // Set update flags for update operation
    this.fawriaLicenseDeedAndConstructionLicenseResponse.isUpdate = true;
    this.fawriaLicenseDeedAndConstructionLicenseResponse.deedId = this.deedId;

    this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.totalLandValue =
      formData.totalArea;
    this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseProjectId =
      this.licenseProjectId;
    this.fawriaLicenseDeedAndConstructionLicenseResponse.correctionUnitRequestHeaderId =
      this.correctionUnitRequestHeaderId || null;
    this.fawriaLicenseDeedAndConstructionLicenseResponse.buildingFlatArea =
      formData.buildingFlatArea || null;
    this.fawriaLicenseDeedAndConstructionLicenseResponse.constructionLicenseId =
      this.verifyForm.get('previousLicenseNumber')?.value || null;
    this.fawriaLicenseDeedAndConstructionLicenseResponse.isAddedFromPreviousLicenses =
      this.verifyForm.get('licenseType')?.value == 1;

    // Set totalUnits based on isUnit value
    if (!this.isUnit) {
      // When isUnit = false, use totalUnitsLand from deedForm
      this.fawriaLicenseDeedAndConstructionLicenseResponse.totalUnits =
        formData.totalUnitsLand || null;
    } else {
      // When isUnit = true, use totalUnit from verifyForm
      this.fawriaLicenseDeedAndConstructionLicenseResponse.totalUnits =
        this.verifyForm.get('totalUnit')?.value || null;
    }
    this.fawriaLicenseDeedAndConstructionLicenseResponse.buildingFlatArea =
      this.verifyForm.get('totalLandArea')?.value || null;

    // Map owner files for both isUnit = true and isUnit = false
    if (this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedOwners) {
      this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedOwners.forEach(
        (owner, index) => {
          if (formData.ownerAgreementFiles && formData.ownerAgreementFiles[index]) {
            owner.agreementFileId = formData.ownerAgreementFiles[index];
          }
          if (formData.deedMarginalizationFiles && formData.deedMarginalizationFiles[index]) {
            owner.deedMarginalizationFileId = formData.deedMarginalizationFiles[index];
          }
          if (formData.ownerMobileNumbers && formData.ownerMobileNumbers[index]) {
            owner.mobileNo = formData.ownerMobileNumbers[index];
          }
          if (this.isUnit) {
            owner.owningAmount = +((this.landValue ?? 0) * (owner?.owningArea ?? 0)).toFixed(2);
          }
        }
      );
    }

    // Map mortgagee data if real estate is mortgaged
    if (this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData?.isRealEstateMortgaged) {
      if (this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedMortgageeList) {
        this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedMortgageeList.forEach(
          (mortgagee, index) => {
            if (formData.mortgageeMobileNumbers && formData.mortgageeMobileNumbers[index]) {
              mortgagee.mobile = formData.mortgageeMobileNumbers[index];
            }
            if (formData.mortgageeFiles && formData.mortgageeFiles[index]) {
              mortgagee.mortgageeFileId = formData.mortgageeFiles[index];
            }
            if (formData.mortgageeMarginalizationFiles && formData.mortgageeMarginalizationFiles[index]) {
              mortgagee.marginalizationLetterFileId = formData.mortgageeMarginalizationFiles[index];
            }
          }
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
          this.verifyForm.get('constructionLicenseType')?.value == null
            ? this.fawriaLicenseDeedAndConstructionLicenseResponse
              .licenseInfoList[0].licenseProjectConstructionLicenseTypeId
            : this.verifyForm.get('constructionLicenseType')?.value;
      } else {
        this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseInfoList.push(
          {
            licenseFileId: this.verifyForm.get('constructionLicenseFileId')
              ?.value,
            licenseProjectConstructionLicenseTypeId: this.verifyForm.get(
              'constructionLicenseType'
            )?.value,
          } as LicenseInfoList
        );
      }
    }

    this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.integrationTypeId =
      this.verifyForm.get('deedSource')?.value;

    // Debug: Log approvedPlansFileIds before setting
    console.log('approvedPlansFileIds from form:', this.verifyForm.get('approvedPlansFileIds')?.value);
    this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.certifiedPlansFilesIds =
      this.verifyForm.get('approvedPlansFileIds')?.value;
    console.log('certifiedPlansFilesIds set to:', this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.certifiedPlansFilesIds);

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
        this.fawriaLicenseDeedAndConstructionLicenseResponse
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

  onLicenseTypeChange(): void {
    // Reset constructionLicenseType and mark as untouched
    this.verifyForm.get('constructionLicenseType')?.setValue(null);
    this.verifyForm.get('constructionLicenseType')?.markAsUntouched();

    // Reset selected previous license and mark as untouched
    this.verifyForm.get('previousLicenseNumber')?.setValue('');
    this.verifyForm.get('previousLicenseNumber')?.markAsUntouched();

    // Clear construction license related fields and mark as untouched
    this.verifyForm.get('licenseNumber')?.setValue('');
    this.verifyForm.get('licenseNumber')?.markAsUntouched();
    this.verifyForm.get('riyadhAmanahLicenseNumber')?.setValue('');
    this.verifyForm.get('riyadhAmanahLicenseNumber')?.markAsUntouched();
    this.verifyForm.get('constructionLicenseFileId')?.setValue(null);
    this.verifyForm.get('constructionLicenseFileId')?.markAsUntouched();

    // Clear totalLandArea and totalUnit and mark as untouched
    this.verifyForm.get('totalLandArea')?.setValue('');
    this.verifyForm.get('totalLandArea')?.markAsUntouched();
    this.verifyForm.get('totalUnit')?.setValue('');
    this.verifyForm.get('totalUnit')?.markAsUntouched();

    // Note: clearVerificationResponse() and updateFormValidators() are called by valueChanges subscription
  }

  onPreviousLicenseChange(): void {
    // Set constructionLicenseType based on the selected previous license
    const selectedLicenseId = this.verifyForm.get('previousLicenseNumber')?.value;
    if (selectedLicenseId) {
      const selectedLicense = this.constructionLicenses.find(license => license.id === selectedLicenseId);
      if (selectedLicense && selectedLicense.constructionLicenseType != null) {
        this.verifyForm.get('constructionLicenseType')?.setValue(selectedLicense.constructionLicenseType);
      }
    } else {
      // Clear constructionLicenseType if no license is selected
      this.verifyForm.get('constructionLicenseType')?.setValue(null);
    }
    // Note: clearVerificationResponse() and updateFormValidators() are called by valueChanges subscription
  }

  onConstructionLicenseTypeChange(): void {
    // Clear related fields when construction license type changes and mark as untouched
    this.verifyForm.get('licenseNumber')?.setValue('');
    this.verifyForm.get('licenseNumber')?.markAsUntouched();
    this.verifyForm.get('riyadhAmanahLicenseNumber')?.setValue('');
    this.verifyForm.get('riyadhAmanahLicenseNumber')?.markAsUntouched();
    this.verifyForm.get('constructionLicenseFileId')?.setValue(null);
    this.verifyForm.get('constructionLicenseFileId')?.markAsUntouched();

    // Clear totalLandArea and totalUnit and mark as untouched
    this.verifyForm.get('totalLandArea')?.setValue('');
    this.verifyForm.get('totalLandArea')?.markAsUntouched();
    this.verifyForm.get('totalUnit')?.setValue('');
    this.verifyForm.get('totalUnit')?.markAsUntouched();

    // Note: clearVerificationResponse() and updateFormValidators() are called by valueChanges subscription
  }

  /**
   * Updates form validators based on current selections.
   * Clears old validators and applies only the relevant ones for current selections.
   */
  private updateFormValidators(): void {
    const licenseType = this.verifyForm.get('licenseType')?.value;
    const constructionLicenseType = this.verifyForm.get('constructionLicenseType')?.value;
    const deedSource = this.verifyForm.get('deedSource')?.value;

    // When isUnit is false, only validate deedSource, deedNumber/fawriaRERNumber, deedDate, and approvedPlansFileIds
    if (!this.isUnit) {
      // Clear all isUnit-specific validators
      this.verifyForm.get('licenseType')?.clearValidators();
      this.verifyForm.get('licenseType')?.updateValueAndValidity({ emitEvent: false });

      this.verifyForm.get('previousLicenseNumber')?.clearValidators();
      this.verifyForm.get('previousLicenseNumber')?.updateValueAndValidity({ emitEvent: false });

      this.verifyForm.get('constructionLicenseType')?.clearValidators();
      this.verifyForm.get('constructionLicenseType')?.updateValueAndValidity({ emitEvent: false });

      this.verifyForm.get('licenseNumber')?.clearValidators();
      this.verifyForm.get('licenseNumber')?.updateValueAndValidity({ emitEvent: false });

      this.verifyForm.get('riyadhAmanahLicenseNumber')?.clearValidators();
      this.verifyForm.get('riyadhAmanahLicenseNumber')?.updateValueAndValidity({ emitEvent: false });

      this.verifyForm.get('constructionLicenseFileId')?.clearValidators();
      this.verifyForm.get('constructionLicenseFileId')?.updateValueAndValidity({ emitEvent: false });

      this.verifyForm.get('totalLandArea')?.clearValidators();
      this.verifyForm.get('totalLandArea')?.updateValueAndValidity({ emitEvent: false });

      this.verifyForm.get('totalUnit')?.clearValidators();
      this.verifyForm.get('totalUnit')?.updateValueAndValidity({ emitEvent: false });

      // approvedPlansFileIds - required when !isUnit
      this.verifyForm.get('approvedPlansFileIds')?.setValidators([Validators.required]);
      this.verifyForm.get('approvedPlansFileIds')?.updateValueAndValidity({ emitEvent: false });

      return;
    }

    // isUnit = true: Full form validation
    const isPreviousLicense = licenseType == 1;
    const isNewLicense = licenseType == 2;
    const isBalady = constructionLicenseType === ConstructionLicenseTypeEnum.Balady;
    const isItmam = constructionLicenseType === ConstructionLicenseTypeEnum.Itmam;
    const isRiyadhAmanah = constructionLicenseType === ConstructionLicenseTypeEnum.RiyadhAmanah;
    const isRER = deedSource === DeedIntegrationTypeEnum.RER;

    // licenseType - required when isUnit
    this.verifyForm.get('licenseType')?.setValidators([Validators.required]);
    this.verifyForm.get('licenseType')?.updateValueAndValidity({ emitEvent: false });

    // previousLicenseNumber - required only for previous license
    if (isPreviousLicense) {
      this.verifyForm.get('previousLicenseNumber')?.setValidators([Validators.required]);
    } else {
      this.verifyForm.get('previousLicenseNumber')?.clearValidators();
    }
    this.verifyForm.get('previousLicenseNumber')?.updateValueAndValidity({ emitEvent: false });

    // constructionLicenseType - required for new license (اضافة رخصة جديدة)
    if (isNewLicense) {
      this.verifyForm.get('constructionLicenseType')?.setValidators([Validators.required]);
    } else {
      this.verifyForm.get('constructionLicenseType')?.clearValidators();
    }
    this.verifyForm.get('constructionLicenseType')?.updateValueAndValidity({ emitEvent: false });

    // licenseNumber - required only for new license + Balady
    if (isNewLicense && isBalady) {
      this.verifyForm.get('licenseNumber')?.setValidators([Validators.required]);
    } else {
      this.verifyForm.get('licenseNumber')?.clearValidators();
    }
    this.verifyForm.get('licenseNumber')?.updateValueAndValidity({ emitEvent: false });

    // riyadhAmanahLicenseNumber - required only for new license + Riyadh Amanah + RER
    if (isNewLicense && isRiyadhAmanah && isRER) {
      this.verifyForm.get('riyadhAmanahLicenseNumber')?.setValidators([Validators.required]);
    } else {
      this.verifyForm.get('riyadhAmanahLicenseNumber')?.clearValidators();
    }
    this.verifyForm.get('riyadhAmanahLicenseNumber')?.updateValueAndValidity({ emitEvent: false });

    // constructionLicenseFileId - required only for new license + (Itmam or Riyadh Amanah)
    if (isNewLicense && (isItmam || isRiyadhAmanah)) {
      this.verifyForm.get('constructionLicenseFileId')?.setValidators([Validators.required]);
    } else {
      this.verifyForm.get('constructionLicenseFileId')?.clearValidators();
    }
    this.verifyForm.get('constructionLicenseFileId')?.updateValueAndValidity({ emitEvent: false });

    // totalLandArea and totalUnit - required only for Itmam or Riyadh Amanah
    // When previous license is selected, constructionLicenseType is set from the selected license
    // So if previous license is Balady → no validation, if previous license is Itmam → validation required
    if (isItmam || isRiyadhAmanah) {
      this.verifyForm.get('totalLandArea')?.setValidators([Validators.required]);
      this.verifyForm.get('totalUnit')?.setValidators([Validators.required]);
    } else {
      this.verifyForm.get('totalLandArea')?.clearValidators();
      this.verifyForm.get('totalUnit')?.clearValidators();
    }
    this.verifyForm.get('totalLandArea')?.updateValueAndValidity({ emitEvent: false });
    this.verifyForm.get('totalUnit')?.updateValueAndValidity({ emitEvent: false });

    // approvedPlansFileIds - not required when isUnit
    this.verifyForm.get('approvedPlansFileIds')?.clearValidators();
    this.verifyForm.get('approvedPlansFileIds')?.updateValueAndValidity({ emitEvent: false });
  }

  onMarginalizationSpeechFileUploaded(fileData: any): void {
    if (
      fileData &&
      fileData.eventRes &&
      fileData.eventRes.data &&
      fileData.eventRes.data.length > 0
    ) {
      const uploadedFile = fileData.eventRes.data[0];
      this.verifyForm
        .get('marginalizationSpeechFileId')
        ?.setValue(uploadedFile.id);
      console.log('Marginalization speech file uploaded:', uploadedFile);
    }
  }
}
