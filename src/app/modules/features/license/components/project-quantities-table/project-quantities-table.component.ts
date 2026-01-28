import { Component, OnDestroy, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { QuantitiesTableFilesService } from '../../services/licenseProjects/quantities-table-files.service';
import { forkJoin, Subscription } from 'rxjs';
import { LicenseRequestService } from '../../services/license-request.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { LicenseProjectQuantitiesTableFileAndRelativeWeightDto, LicenseProjectRelativeWeightDto } from '../../dataModels/license-project-quantities-table-file-and-relative-weight-dto';
import { LicenseProjectQuantitiesTableFileRelativeWeightsCreateUpdateDto, LicenseProjectRelativeWeightCreateUpdateDto } from '../../dataModels/license-project-quantities-table-file-relative-weights-create-update-dto';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { confirmationPopupData, notePopupData, PopupData } from 'src/app/shared/models/popup.model';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { RequestValidation, RequestSuccessResponse } from '../../dataModels/request-validation.model';
import { TabCode } from '../../models/tab-code.model';
import { LicenseRequestValidationPopupComponent } from '../license-request-validation-popup/license-request-validation-popup.component';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { FileUploaderComponent } from 'src/app/shared/components/file-uploader/file-uploader.component';
import { LicenseProjectCompletionData } from '../../dataModels/license-project-model.dto';
import { LicenseProjectDeedService } from '../../../license-project-requests/services/LiftingDeeds/lifting-Deeds.service';
import { ProjectInstantLicenseDeedService } from '../../../real-estate-contributions-license/services/project-instant-license-deed.service';


@Component({
  selector: 'app-project-quantities-table',
  templateUrl: './project-quantities-table.component.html',
  styleUrls: ['./project-quantities-table.component.scss']
})
export class ProjectQuantitiesTableComponent implements OnInit, OnDestroy {
  @ViewChild(FileUploaderComponent) fileUploader!: FileUploaderComponent;

  public licenseProjectRelativeWeightForm!: FormGroup;
  isUnit: boolean | null = null;
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = null;
  licenseProjectQuantitiesTableFileAndRelativeWeight: LicenseProjectQuantitiesTableFileAndRelativeWeightDto = new LicenseProjectQuantitiesTableFileAndRelativeWeightDto();
  licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate: LicenseProjectQuantitiesTableFileRelativeWeightsCreateUpdateDto = new LicenseProjectQuantitiesTableFileRelativeWeightsCreateUpdateDto();
  total: number = 0;
  totalAdjustedReferenceWeights: number = 0;
  totalProposedWeights: number = 0;
  showValidation: boolean = false;
  isExistingValidation: boolean = false;
  dataConfirmationChecked: boolean = false;
  userData: customerResponse | null = null;
  isTotalCalculated: boolean = false;
  enableValidation: boolean = true;
  private readonly CONCRETE_WORK_ELEMENT = 'أعمال الخرسانة العادية والمسلحة';
  private readonly BUILDING_WORK_ELEMENT = 'أعمال المباني';
  private targetTotalPercentage: number = 100;

  /**
   *
   */
  multipleFileUploaderData: FileUploader = {
    multiple: true,
    allowedExtensionsText: 'XLS, XLSX,PDF'
  } as FileUploader;
  singleFileUploaderData: FileUploader = {
    multiple: false,
    allowedExtensionsText: 'XLS, XLSX,PDF'
  } as FileUploader;
  localization = {
    fileType: 'يجب رفع ملفات بصيغه PDF, XLS, أو XLSX فقط',
    title: 'جدول كميات المشروع',
    quantitiesTableFileId: 'ملف جدول الكميات',
    relativeWeight: 'جدول الاوزان النسبية',
    greaterThan100: 'الاجمالي اكبر من 100',
    lessThan100: 'الاجمالي اقل من 100',
    elementName: 'البند',
    adjustedReferenceWeights: 'الأوزان النسبية المرجعية المعدلة',
    proposedRelativeWeights: 'الأوزان النسبية المقترحة',
    variancePercentage: 'نسبة التباين',
    requiredErrorMsg: 'حقل مطلوب',
    minValueError: 'القيمة يجب أن تكون أكبر من أو تساوي',
    maxValueError: 'القيمة يجب أن تكون أقل من أو تساوي',
    PleaseAddAllRequiredFields: 'يوجد حقول ناقصة ويجب استكمال البيانات',
    exeedTheLimit:'بعض نسب التباين تتجاوز الحدود المسموح بها, يرجى المراجعة!',
    savedSuccessfully: 'تم الحفظ',
    dataConfirmationRequired: 'يجب الموافقة على إقرار صحة البيانات المدخلة',
  };
  showTabsButton: boolean = false;
  constructor(private _quantitiesTableFilesService: QuantitiesTableFilesService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _tabsService: TabsService,
    private _fb: FormBuilder,
    private _toastrNotificatioService: ToastrNotificatioService,
    private _toastrService: ToastrService,
    private _licenseDetailsService: LicenseDetailsService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _popupService: PopupService,
    private _userDataService: UserDataService,
    private _licenseRequestService: LicenseRequestService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
    private _projectInstantDeedService: ProjectInstantLicenseDeedService,
  ) { }


  ngOnInit() {
    this.getCustomerData();
    this.getFilesLicenseProjectId();
    this.initForm();
    this.observeFormValueChanges();
    this.observeTabsButton();
    this.observeSaveQWTableEventEmitter();
    this.observeCompletedTapCodesUpdate();
    // this.observeSaveAsDraftIsClicked();
    // this.updateSaveAsDraftBtnIsvisible();
  }

  isChecked: boolean = false;

  

  getCustomerData() {
    this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
      this.userData = res;
      this.isExistingValidation = this.userData?.isEmployee as boolean;
    })
  }

  observeSaveQWTableEventEmitter() {
    this._licenseDetailsService.saveQWTable.subscribe(res => {
      this.save()
    })
  }

  observeTabsButton() {
    this.subscriptions.push(
      this._licenseDetailsService.showTabsButton$.subscribe((res: boolean) => {
        this.showTabsButton = res
      })
    )
  }

  observeFormValueChanges() {
    
    if (this.isTotalCalculated)
      return;
    this.licenseProjectRelativeWeightForm.valueChanges.subscribe(data => {
      if (this.licenseProjectRelativeWeightForm.dirty) {
        this._tabsService.setUnsavedChanges(true);
      }
      this.getTotal(data)
      this.calculateFields(data)
    })
  }

  initForm() {
    this.licenseProjectRelativeWeightForm = this._fb.group({
      Rows: this._fb.array([])
    });
  }

  deletFile(id: string) {
    this._quantitiesTableFilesService.DeleteFile(id).subscribe(res => {
      if (res.isDone) {
        this.getFilesLicenseProjectId();
        // Reset the file uploader component
        if (this.fileUploader) {
          this.fileUploader.deleteAll();
        }
      }
    })
  }

  private initRows(values: LicenseProjectRelativeWeightDto[]) {
    this.formArr.clear();

    values.forEach(relativeWeight => {
      let row: FormGroup;

      const order = relativeWeight.sysLicenseRelativeWeight?.order;
      const isOrder2Or3 = order === 2 || order === 3;

      // When isUnit = false and order is 2 or 3, set value to 0 and make readonly (no validators needed)
      // When isUnit = true and order is 2 or 3, force user to enter value > 0
      // When order is not 2/3, apply normal validators
      const isDisabledForUnit = this.isUnit === false && isOrder2Or3;
      const shouldApplyValidators = this.enableValidation && !isDisabledForUnit;

      // For order 2,3 when isUnit is true, minimum must be > 0 (use 0.01 to enforce greater than zero)
      const minValue = (this.isUnit === true && isOrder2Or3)
        ? Math.max(0.01, relativeWeight.sysLicenseRelativeWeight?.minimumValue || 0)
        : relativeWeight.sysLicenseRelativeWeight?.minimumValue;

      const validators = shouldApplyValidators ? [
        Validators.required,
        Validators.min(minValue),
        Validators.max(relativeWeight.sysLicenseRelativeWeight?.maximumValue)
      ] : [];

      const varianceValidators = this.enableValidation ? [
        Validators.max(relativeWeight.sysLicenseRelativeWeight?.maximumAllowedVariancePercentage)
      ] : [];

      // When isUnit = false and order is 2 or 3, set value to 0; otherwise use backend value
      const modifiedRelativeWeightValue = isDisabledForUnit ? 0 : relativeWeight.modifiedRelativeWeight;

      row = this._fb.group({
        elementName: [relativeWeight.sysLicenseRelativeWeight?.elementName],
        adjustedReferenceWeights: [{ value: 0, disabled: true }],
        modifiedRelativeWeight: [
          { value: modifiedRelativeWeightValue, disabled: isDisabledForUnit },
          validators
        ],
        variancePercentage: [
          relativeWeight.variancePercentage
        ],
        referenceWeight: [relativeWeight.sysLicenseRelativeWeight?.maximumValue],
        licenseRelativeWeightId: [relativeWeight.licenseRelativeWeightId],
        licenseProjectId: [this.licenseProjectId],
        maxVariance: [relativeWeight.sysLicenseRelativeWeight?.maximumAllowedVariancePercentage],
        id: [relativeWeight.id ? relativeWeight.id : "00000000-0000-0000-0000-000000000000"],
        order: [order],
      });
      this.formArr.push(row);
    });
  }

  onValidationToggle() {
    this.showValidation = false;

    if (!this.enableValidation) {
      this.licenseProjectRelativeWeightForm.markAsUntouched();
      this.licenseProjectRelativeWeightForm.markAsPristine();
    }

    if (this.licenseProjectQuantitiesTableFileAndRelativeWeight?.licenseProjectRelativeWeightList) {
      this.initRows(
        this.licenseProjectQuantitiesTableFileAndRelativeWeight.licenseProjectRelativeWeightList
      );
    }
  }

  getTotal(data: any) {
    this.total = 0;
    if (data && data.Rows) {
      const numbers: number[] = data.Rows
        .filter((x: any) => x.modifiedRelativeWeight !== null && x.modifiedRelativeWeight !== undefined && x.modifiedRelativeWeight !== '' && +x.modifiedRelativeWeight > 0)
        .map((x: any) => +x.referenceWeight);
      const total = this.flexiblePreciseSum(numbers);
      this.total = total;

      this.updateTargetPercentage(this.licenseProjectRelativeWeightForm.value);
    }
  }

  private updateTargetPercentage(data: any): void {
    if (!data || !data.Rows) {
      this.targetTotalPercentage = 100;
      return;
    }
    const hasConcreteWork = this.hasElementWithValue(data.Rows, this.CONCRETE_WORK_ELEMENT);
    const hasBuildingWork = this.hasElementWithValue(data.Rows, this.BUILDING_WORK_ELEMENT);
    // // إذا كان أحد البندين مدخل، المجموع يجب أن يكون 100%
    // // إذا لم يتم إدخال أي من البندين، المجموع يجب أن يكون 95%
    // if (hasConcreteWork || hasBuildingWork) {
    //   this.targetTotalPercentage = 100;
    // } else {
    //   this.targetTotalPercentage = 95.5;
    // }
  }

  private hasElementWithValue(rows: any[], elementName: string): boolean {
    return rows.some((row: any) => {
      const hasMatchingName = row.elementName === elementName;
      const hasValue = row.modifiedRelativeWeight !== null && row.modifiedRelativeWeight !== undefined && row.modifiedRelativeWeight !== '' && +row.modifiedRelativeWeight > 0;

      return hasMatchingName && hasValue;
    });
  }

  onProposedRelativeWeightsChange(index: number) {
    // Directly trigger recalculation when user changes a value
    const formData = this.licenseProjectRelativeWeightForm.value;
    this.getTotal(formData);
    this.calculateFields(formData);
  }

  flexiblePreciseSum(numbers: number[]): number {
    const maxDecimals = numbers.reduce((max, num) => {
      const decimals = (num.toString().split('.')[1] || '').length;
      return Math.max(max, decimals);
    }, 0);

    const factor = Math.pow(10, maxDecimals);
    const sum = numbers.reduce((total, num) => {
      return total + Math.round(num * factor);
    }, 0);

    return sum / factor;
  }

  calculateFields(data: any) {
    if (data && data.Rows) {
      // Reset totals
      this.totalAdjustedReferenceWeights = 0;
      this.totalProposedWeights = 0;

      data.Rows.forEach((row: any, index: number) => {
        if (row.referenceWeight) {
          if (this.total != 0 && this.total != null) {
            const modifiedRelativeWeight = +row.modifiedRelativeWeight || 0;
            // Adjusted reference weight as percentage (multiply by 100)
            const adjustedReferenceWeights = modifiedRelativeWeight !== 0 ? (row.referenceWeight / this.total) * 100 : 0;
            const formRow = this.formArr.at(index);
            if (formRow) {
              // Calculate variance percentage
              // Formula: ((proposed - adjusted) / adjusted) * 100
              // Result is a percentage value
              let variancePercentage = 0;
              if (modifiedRelativeWeight !== 0 && adjustedReferenceWeights > 0) {
                variancePercentage = ((modifiedRelativeWeight - adjustedReferenceWeights) / adjustedReferenceWeights) * 100;
              }

              formRow.patchValue({
                adjustedReferenceWeights: this.roundToTwoDecimals(adjustedReferenceWeights),
                variancePercentage: this.roundToTwoDecimals(variancePercentage),
              }, { emitEvent: false });

              // Accumulate totals
              this.totalAdjustedReferenceWeights += adjustedReferenceWeights;
              this.totalProposedWeights += modifiedRelativeWeight;
            }
          }
        }
      });

      // Round the totals
      this.totalAdjustedReferenceWeights = this.roundToTwoDecimals(this.totalAdjustedReferenceWeights);
      this.totalProposedWeights = this.roundToTwoDecimals(this.totalProposedWeights);
    }
  }

  private roundToTwoDecimals(value: number): number {
    return Math.round(value * 100) / 100;
  }

  get formArr() {
    return this.licenseProjectRelativeWeightForm.get("Rows") as FormArray;
  }

  get validationStatusText(): string {
    return this.enableValidation ? 'مفعل' : 'معطل';
  }

  get validationStatusClass(): string {
    return this.enableValidation ? 'text-success' : 'text-warning';
  }

  public openDialog(): void {
    let Data = {
      title: 'اقرار جدول الكميات',
      staticMessage: 'أنا الموقع أدناه أوفق على التالي:',
      dynamicMessage: 'لقد قمت بقراءة وفهم أليات حساب الكميات ودورها في صرف الدفعات الخاصة بنفقات المشروع المقرة من الهيئة العامة للعقار بموجب القرار رقم (420) والمنشورة في موقع وفي الإلكتروني والمنصة المخصصة لتقديم طلبات ترخيص مشاريع الهيئة العامة للعقار أنه لم يتم تفعيل العمليات الدائنة لحساب الضمان الا بعد استيفاء متطلبات اعتماد جداول الكميات وذلك في حال صدور ترخيص البيع على الخارطة بعد تاريخ 28/04/1443هـ الموافق/12/2021 م إقرار بالموافقة ',
    } as notePopupData;
    this._popupService.updateNotePopupData(Data)
  }

  getFilesLicenseProjectId(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.subscriptions.push(
        this._quantitiesTableFilesService.GetByLicenseProjectId(this.licenseProjectId).subscribe((res) => {
          if (res) {
            
            this.licenseProjectQuantitiesTableFileAndRelativeWeight = res as LicenseProjectQuantitiesTableFileAndRelativeWeightDto;
            this.initRows(
              this.licenseProjectQuantitiesTableFileAndRelativeWeight.licenseProjectRelativeWeightList
            );
            this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.quantitiesTableAcknowledgment =
              res.quantitiesTableAcknowledgment;
            // Check read-only state after form is initialized
            this.getCompletedTabs();
            this.getNatureTypeIdByLicenseProjectId(this.licenseProjectId as string);
          }
        })
      )
    }
  }

  getNatureTypeIdByLicenseProjectId(licenseProjectId: string): void {
    this._projectInstantDeedService.GetNatureTypeIdByLicenseProjectId(licenseProjectId as string).subscribe((res:any) => {
      this.isUnit = res.data;
      // Reinitialize rows after isUnit is set to apply the correct validators and disabled state
      if (this.licenseProjectQuantitiesTableFileAndRelativeWeight?.licenseProjectRelativeWeightList) {
        this.initRows(this.licenseProjectQuantitiesTableFileAndRelativeWeight.licenseProjectRelativeWeightList);
      }
    })
  }

  onQuantitiesTableFileUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) {
      this._toastrNotificatioService.showError(this.localization.PleaseAddAllRequiredFields);
      return;
    }
    const allowedExtensions = [".xls", ".xlsx", ".pdf"];
    let hasInvalidFile = false;

    filesData.eventRes.data.forEach((data: any) => {
      if (!allowedExtensions.includes(data.fileType.toLowerCase())) {
        hasInvalidFile = true;
        return;
      }
      this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.licenseProjectQuantitiesTableFileCreateUpdateList.push({
        quantitiesTableFileId: data.id,
        licenseProjectId: this.licenseProjectId as string,
        id: '00000000-0000-0000-0000-000000000000',
        fileType: data.fileType,
        fileName: data.fileName
      });
    });

    if (hasInvalidFile) {
      this._toastrNotificatioService.showError(this.localization.fileType);
      // Clear the file uploader if any invalid file was detected
      if (this.fileUploader) {
        this.fileUploader.clearSelectedFiles();
      }
    }
  }

  deletePendingFile(index: number) {
    this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.licenseProjectQuantitiesTableFileCreateUpdateList.splice(index, 1);
  }

  save(moveToNextTab: boolean = false, verify: boolean = false): void {
    if (this.isReadOnly) {
      this.moveToNextTab()
    }

    this.updateTargetPercentage(this.licenseProjectRelativeWeightForm.value);

    // Only apply validation if enableValidation is true and user is not an existing validation user
    if (this.enableValidation && !this.isExistingValidation) {
      // Check form validity (min/max validators) first
      if (this.licenseProjectRelativeWeightForm.invalid) {
        this.showValidation = true;
        this.licenseProjectRelativeWeightForm.markAllAsTouched();
        this._toastrNotificatioService.showError('ⓘ '+this.localization.exeedTheLimit);
        return;
      }
    }

    // After form is valid, check if user has checked the الاقرار
    if (!this.dataConfirmationChecked && this.isFawriaValidation()) {
      this.showValidation = true;
      this._toastrNotificatioService.showError(this.localization.dataConfirmationRequired);
      return;
    }

    // Continue with remaining validation if enableValidation is true
    if (this.enableValidation && !this.isExistingValidation) {
      // if (this.licenseProjectQuantitiesTableFileAndRelativeWeight.licenseProjectRelativeWeightList && this.licenseProjectQuantitiesTableFileAndRelativeWeight.licenseProjectRelativeWeightList.length > 0 ) {
      //   if (this.total > this.targetTotalPercentage) {
      //     this._toastrNotificatioService.showError(`الإجمالي أكبر من ${this.targetTotalPercentage}%`);
      //     return;
      //   }
      //   if (this.total < this.targetTotalPercentage) {
      //     this._toastrNotificatioService.showError(`الإجمالي أقل من ${this.targetTotalPercentage}%`);
      //     return;
      //   }
      // }   
     
    }

    this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.quantitiesTableAcknowledgment = true;
   // this.licenseProjectQuantitiesTableFileAndRelativeWeight.licenseProjectRelativeWeightList = []
    this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.licenseProjectRelativeWeightList = [];

    // Use getRawValue() to include disabled controls (order 2,3 when isUnit = false)
    this.licenseProjectRelativeWeightForm.getRawValue().Rows.forEach((element: any) => {
      this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.licenseProjectRelativeWeightList.push(element);
    })

    // Only apply file validation if enableValidation is true and user is not an existing validation user
    if (this.enableValidation && !this.isExistingValidation) {
      if ((!this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.licenseProjectQuantitiesTableFileCreateUpdateList ||
        !this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.licenseProjectQuantitiesTableFileCreateUpdateList.length) &&
        (!this.licenseProjectQuantitiesTableFileAndRelativeWeight.licenseProjectQuantitiesTableFileList ||
          !this.licenseProjectQuantitiesTableFileAndRelativeWeight.licenseProjectQuantitiesTableFileList.length)
      ) {
        this.showValidation = true;
        this._toastrNotificatioService.showError(this.localization.PleaseAddAllRequiredFields);
        return;
      }
    }

    this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.licenseProjectId = this.licenseProjectId as string;
    this.subscriptions.push(
      this._quantitiesTableFilesService.Save(this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate).subscribe(res => {
        if (res.isDone) {
          this.licenseProjectQuantitiesTableFileAndRelativeWeight = res.data as LicenseProjectQuantitiesTableFileAndRelativeWeightDto;
          this.isTotalCalculated = true;
          this._licenseDetailsService.QWTableCompiledSuccessfully.emit()

          // ✅ Clear the file upload list after successful save
          this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.licenseProjectQuantitiesTableFileCreateUpdateList = [];

          if (!verify) {
            this.licenseProjectRelativeWeightForm.markAsPristine();
            this._licenseRequestService.updatedCompletePercentage.emit();
            this._toastrNotificatioService.showSuccess(this.localization.savedSuccessfully);
          }

          this._tabsService.setUnsavedChanges(false);

          if (moveToNextTab) {
            this.moveToNextTab()
          } else {
            this.getFilesLicenseProjectId();
          }

          if (verify)
            this.verify()
        }
        else {
          this._toastrNotificatioService.showError(res.message);
        }
      })
    )
  }

  typeCode: string | null = null;
  completedTapCodes: string[] = [];
  isReadOnly: boolean = false;
  private buttonSubscriptions: Subscription[] = [];

  getCompletedTabs() {
    if (!this.licenseProjectId) return;

    const typeCode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    if (typeCode === 'FSRSU' && this.licenseProjectId) {
      const requests = [
        this._dataVisibilityOfLicenseProjectService.GetCompletedLicenseProjectProfileTaps(this.licenseProjectId),
        this._licenseRequestService.GetLicenseProjectCompletionData(this.licenseProjectId)
      ];
      const subscriptions = forkJoin(requests).subscribe((results) => {
        if (results) {
          let completedTabs = results[0] as string[];
          let complete = results[1] as LicenseProjectCompletionData | null;
          if (completedTabs && complete) {
            let isTabCompleted = completedTabs.includes(TabCode.fawriaProjectQuantitiesTable) && complete.isProfileCompleted;
            if (isTabCompleted) {
              this.isReadOnly = true;
              this.disableFormControls();
            } else {
              this.isReadOnly = false;
            }

            this.setupButtonSubscriptions();
          }

        }
      });
      this.subscriptions.push(subscriptions);

    } else {
      // For non-FSRSU types, setup button subscriptions directly
      this.setupButtonSubscriptions();
    }
  }

  observeCompletedTapCodesUpdate() {
    this.subscriptions.push(
      this._licenseRequestService.updateCompletedTapCodesIsClicked.subscribe(() => {
        this.getCompletedTabs();
      })
    );
  }


  setupButtonSubscriptions() {
    
    console.log('setupButtonSubscriptions called', {
      isFawriaValidation: this.isFawriaValidation(),
      isReadOnly: this.isReadOnly
    });

    // ✅ UNCOMMENT THESE LINES - Clear any existing button subscriptions
    this.buttonSubscriptions.forEach(sub => sub.unsubscribe());
    this.buttonSubscriptions = [];

    if (this.isFawriaValidation()) {
      if (this.isReadOnly) {
        // Tab is completed - show next button only
        this.buttonSubscriptions.push(
          this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
            () => {
              this.moveToNextTab();
            }
          )
        );
        this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
        this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
        this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
      } else {
        // Tab is not completed - show save and next buttons
        this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
        this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true);
        this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
        this.buttonSubscriptions.push(
          this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(
            () => {
              this.save(false, false);
            }
          ),
          this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
            () => {
              this.save(true, false);
            }
          )
        );
      }
    } else {
      // Not FSRSU type - show next and save draft buttons
      this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
      this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true);
      this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
      this.buttonSubscriptions.push(
        this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
          () => {
            this.save(true, false);
          }
        )
      );
      this.buttonSubscriptions.push(
        this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(
          () => {
            this.save(false, false);
          }
        )
      );
    }
  }

  disableFormControls() {
    if (this.licenseProjectRelativeWeightForm) {
      this.licenseProjectRelativeWeightForm.disable();
    }
  }

  // licenseProjectId: string | null = null;
  verify() {
    let licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (!licenseProjectId) return;
    this.subscriptions.push(
      this._licenseRequestService.SendFawriaLicenseByProjectId(licenseProjectId, [TabCode.fawriaProjectQuantitiesTable]).subscribe((res: RequestValidation | RequestSuccessResponse | null) => {
        if (res) {
          if ('id' in res && 'requestCode' in res && 'typeCode' in res) {
            this.typeCode = res.typeCode
            this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(res.licenseProjectId);
            this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(res.id);
            this._toastrService.success('تم الحفظ والتحقق بنجاح')
            this._licenseRequestService.updateCompletedTapCodesIsClicked.emit();
            this._licenseRequestService.updatedCompletePercentage.emit();
            // this.openConfirmaDialog(res.requestCode as string);
          } else {
            this.updateRequestValidation(res as RequestValidation);
            this.openValidationDialog();
          }
        }
      })
    )
  }

  private updateRequestValidation(data: RequestValidation) {
    this._licenseRequestService.updateRequestValidation(
      data as RequestValidation
    );
  }

  openConfirmaDialog(res: string): void {
    // Check if it's a fawria license type
    if (this.typeCode === 'FSRSU') {
      // Show regular success popup
      let Data = {
        imagePath: 'assets/images/auth/ForgotPass.svg',
        title: 'تم إرسال الطلب بنجاح !',
        staticMessage: 'تم إنشاء الاتفاقيات بين الأطراف وفي انتظار موافقتهم',
        dynamicMessage: res,
        buttonText: 'متابعة طلبك',
        buttonLink: '',
      } as notePopupData;
      this._popupService.updateNotePopupData(Data);
    }
  }

  openValidationDialog(): void {
    let Data = {
      title: `التحقق من بيانات المشروع`,
      component: LicenseRequestValidationPopupComponent,
      id: "LicenseRequestValidationPopupComponent",
      buttons: [
        {
          icon: "",
          title: "إلغاء",
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openNotesDialog()
        },
        {
          icon: "",
          title: "إستكمال البيانات",
          actionType: ButtonType.confirm,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openAssignEmployeeDialog()
        },
      ]
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  openSendDataDialog(): void {
    let Data = {
      popupType: 'primary',
      title: '',
      staticMessage: 'بعد التحقق قد يتم تقييد التعديل على البيانات',
      dynamicMessage: '',
      acceptButtonText: 'تأكيد إرسال البيانات',
    } as confirmationPopupData;
    const dialogRef = this._popupService.updateConfirmationPopupData(Data);

    // Subscribe to confirm action
    const confirmSub = this._popupService.confirmAction.subscribe(() => {
      this.save(false, true);
      dialogRef.close();
      confirmSub.unsubscribe();
    });

    // Cleanup subscription when dialog closes
    dialogRef.afterClosed().subscribe(() => {
      confirmSub.unsubscribe();
    });
  }

  isFawriaValidation(): boolean {
    const typecode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    if (typecode == 'FSRSU')
      return true;
    else
      return false;
  }

  // TabsButtons
  updateSveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true);
  }

  // private observeSaveAsDraftIsClicked() {
  //   this.subscriptions.push(
  //     this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe((res: null) => {
  //       this.save()
  //     })
  //   )
  // }

  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }

  ngOnDestroy(): void {
    this._tabsService.setUnsavedChanges(false);
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    this.buttonSubscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    // this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
    this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
    this._nextAndPreviusButtonsService.verifyBtnIsvisible.next(false);
  }
}

