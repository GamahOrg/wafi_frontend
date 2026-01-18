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

import * as momentHijri from 'moment-hijri';

import { ProjectInstantLicenseDeedService } from 'src/app/modules/features/real-estate-contributions-license/services/project-instant-license-deed.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import {
  PopupData,
  confirmationPopupData,
} from 'src/app/shared/models/popup.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import {
  DeedIntegrationTypeEnum,
  ConstructionLicenseTypeEnum,
  DeedIntegrationErrorCode,
  FawriaLicenseDeedAndConstructionLicenseResponseDto,
  FawriaLicenseDeedAndConstructionLicenseDto,
  LicenseInfoList,
} from 'src/app/modules/features/license/dataModels/project-land-deed.dto';
import { Pagemode } from 'src/app/modules/features/license/enums/pagemode.enum';
import { LicenseRequestService } from 'src/app/modules/features/license/services/license-request.service';
import { ProjectLandDeedService } from 'src/app/modules/features/license/services/project-land-deed.service';
import { BankDto } from 'src/app/shared/models/bank.dto';
import { SysBankService } from 'src/app/modules/features/license/services/sysBank/sys-bank.service';
import { SharedLicenseProjectService } from 'src/app/modules/features/license/services/sharedLicenseProject/shared-license-project.service';
import { ConstructionLicenseDto } from 'src/app/modules/features/license/dataModels/construction-license.dto';
import { ConstructionLicenseService } from 'src/app/modules/features/license/services/licenseProjects/construction-license.service';

@Component({
  selector: 'app-correction-license-project-deeds-create',
  templateUrl: './correction-license-project-deeds-create.component.html',
  styleUrls: ['./correction-license-project-deeds-create.component.scss'],
})
export class CorrectionLicenseProjectDeedsCreateComponent
  implements OnInit, OnChanges, OnDestroy
{
  @Input() isIntegration: boolean | null = null;
  @Input() isUnit: boolean | null = null;
  @Output() changePage = new EventEmitter<Pagemode>();

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
  marginalizationSpeechFileUploaderData: FileUploader = {
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
  constructionLicenses: ConstructionLicenseDto[] = [];
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
    private _constructionLicenseService: ConstructionLicenseService
  ) {}


  ngOnInit(): void {
    this.observeconfirmAction();
    this.getLicenseProjectId();
    this.initializeForm();
    this.loadComponentData();
    this.initializeVerifyForm();
    this.getBankList();
    this.getNatureTypeIdByLicenseProjectId();
    this.trackFormChanges();
  }
  private loadComponentData() {
    this._constructionLicenseService
      .GetByLicenseProjectId(this.licenseProjectId as string)
      .subscribe((results) => {
        if (results) {
          this.constructionLicenses = results as ConstructionLicenseDto[];
        }
      });
  }
  ngOnDestroy(): void {
    this._tabsService.setUnsavedChanges(false);
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
      .GetNatureTypeIdByLicenseProjectId(this.licenseProjectId)
      .subscribe((res: any) => {
        if (res) {
          this.isUnit = res;
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
        'constructionLicenseType'
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
    licenseType: ConstructionLicenseTypeEnum
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
      marginalizationSpeechFileId: [null, ],

      licenseType: ['', [Validators.required]],
      deedNumber: ['', [Validators.required]],
      deedDate: ['', [Validators.required]],
      licenseNumber: ['', [Validators.required]],
      fawriaRERNumber: ['', [Validators.required]],
      previousLicenseNumber: [''],
      // firstRegistrationDate: ['', [Validators.required]],
      constructionLicenseType: [
        this.isUnit ? ConstructionLicenseTypeEnum.Balady : null,
        [Validators.required],
      ],
      riyadhAmanahLicenseNumber: ['', [Validators.required]],
      constructionLicenseFileId: [null, [Validators.required]],
      approvedPlansFileIds: [[], [Validators.required]], // For multi-file upload when isUnit = false
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
              { emitEvent: false }
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
              { emitEvent: false }
            );
          }
        }
        // When isIntegration = null, no restrictions - allow any selection
      });
  }

  private initializeForm(): void {
    this.deedForm = this.fb.group({
      totalArea: ['', [Validators.required]],
      mortgageAgreement: [null],
      ownerBanks: this.fb.array([]),
      ownerAccountNumber: this.fb.array([]),
      ownerAgreementFiles: this.fb.array([]),
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

  private initializeOwnerFormsForOwners(ownersCount: number): void {
    this.ownerBanks.clear();
    this.ownerAccountNumber.clear();
    this.ownerAgreementFiles.clear();
    const owners =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData
        ?.deedOwners || [];
    for (let i = 0; i < ownersCount; i++) {
      const owner = owners[i];
      const isRequired = owner?.isCustomer !== false;

      this.ownerBanks.push(
        this.fb.control('', isRequired ? [Validators.required] : [])
      );
      this.ownerAccountNumber.push(
        this.fb.control(
          '',
          isRequired
            ? [Validators.required, Validators.pattern(/^SA[0-9]{22}$/)]
            : [Validators.pattern(/^SA[0-9]{22}$/)]
        )
      );

      const isFileRequired = owner?.isCustomer === false;
      this.ownerAgreementFiles.push(
        this.fb.control('', isFileRequired ? [Validators.required] : [])
      );
    }
  }

  onFileUploaded(fileData: any): void {
    if (
      fileData &&
      fileData.eventRes &&
      fileData.eventRes.data &&
      fileData.eventRes.data.length > 0
    ) {
      const uploadedFile = fileData.eventRes.data[0];
      this.deedForm.get('mortgageAgreement')?.setValue(uploadedFile.id);
      console.log('Mortgage agreement file uploaded:', uploadedFile);
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
      console.log(
        `Owner ${ownerIndex} documentation file uploaded:`,
        uploadedFile
      );
    }
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
        hijriMonth
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
                )
            )
            .forEach((element) => {
              total += +element.componentArea;
            });
          return sum + total;
        },
        0
      ) || 0;

    const mortgageControl = this.deedForm.get('mortgageAgreement');
    if (
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData
        ?.isRealEstateMortgaged
    ) {
      mortgageControl?.setValidators([Validators.required]);
    } else {
      mortgageControl?.clearValidators();
    }
    mortgageControl?.updateValueAndValidity();

    const ownersCount =
      this.fawriaLicenseDeedAndConstructionLicenseResponse?.deedData?.deedOwners
        ?.length || 0;
    if (ownersCount > 0) {
      this.initializeOwnerFormsForOwners(ownersCount);
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
    this._popupService.confirmAction.subscribe((res: PopupData) => {
      this.changePage.emit(Pagemode.List);
      this.closeDialog();
      //  if(res.data.cancel){

      //  }
    });
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
        englishNumbers[index]
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

  onApprovedPlansUploaded(fileData: any): void {
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

    // Force change detection to update the view
    this.cdr.detectChanges();
  }

  // Helper method to log FormArray validation errors
  private logFormArrayErrors(): void {
    const ownerBanksErrors: number[] = [];
    const ownerAccountErrors: number[] = [];
    const ownerFilesErrors: number[] = [];

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

    if (ownerBanksErrors.length > 0) {
      console.log('Owners with missing bank selection:', ownerBanksErrors);
    }
    if (ownerAccountErrors.length > 0) {
      console.log('Owners with missing account number:', ownerAccountErrors);
    }
    if (ownerFilesErrors.length > 0) {
      console.log('Owners with missing agreement file:', ownerFilesErrors);
    }

    // Check for totalArea error
    if (this.deedForm.get('totalArea')?.invalid) {
      console.log('Total area field is invalid');
    }

    // Check for mortgage agreement error
    if (this.deedForm.get('mortgageAgreement')?.invalid) {
      console.log('Mortgage agreement is required but missing');
    }
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
    field: 'bank' | 'account' | 'file'
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

    if (this.deedForm.invalid) {
      // Log which owner rows have errors for debugging
      this.logFormArrayErrors();
      console.error('Form is invalid. Please check all required fields.');
      return;
    }

    const formData = this.deedForm.value;

    this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.totalLandValue =
      formData.totalArea;
    this.fawriaLicenseDeedAndConstructionLicenseResponse.licenseProjectId =
      this.licenseProjectId;

    this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.mortgageAgreementId =
      formData.mortgageAgreement;

    if (this.isUnit) {
      if (
        this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedOwners
      ) {
        this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.deedOwners.forEach(
          (owner, index) => {
            if (formData.ownerBanks && formData.ownerBanks[index]) {
              owner.bankId = formData.ownerBanks[index];
            }
            if (
              formData.ownerAccountNumber &&
              formData.ownerAccountNumber[index]
            ) {
              owner.accountNumber = formData.ownerAccountNumber[index];
            }
            if (
              formData.ownerAgreementFiles &&
              formData.ownerAgreementFiles[index]
            ) {
              owner.agreementFileId = formData.ownerAgreementFiles[index];
            }
            owner.owningAmount = +(
              (this.landValue ?? 0) * (owner?.owningArea ?? 0)
            ).toFixed(2);
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
          this.verifyForm.get('constructionLicenseType')?.value;
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
    this.fawriaLicenseDeedAndConstructionLicenseResponse.deedData.certifiedPlansFilesIds =
      this.verifyForm.get('approvedPlansFileIds')?.value;

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
    // Clear verification response when license type changes
    this.clearVerificationResponse();
    this.verifyForm.get('constructionLicenseType')?.setValue(null);
  }
}
