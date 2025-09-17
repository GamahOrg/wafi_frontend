import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { QuantitiesTableFilesService } from '../../services/licenseProjects/quantities-table-files.service';
import { Subscription } from 'rxjs';
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
import { notePopupData } from 'src/app/shared/models/popup.model';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';


@Component({
  selector: 'app-project-quantities-table',
  templateUrl: './project-quantities-table.component.html',
  styleUrls: ['./project-quantities-table.component.scss']
})
export class ProjectQuantitiesTableComponent implements OnInit, OnDestroy {
  public licenseProjectRelativeWeightForm!: FormGroup;
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = null;
  licenseProjectQuantitiesTableFileAndRelativeWeight: LicenseProjectQuantitiesTableFileAndRelativeWeightDto = new LicenseProjectQuantitiesTableFileAndRelativeWeightDto();
  licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate: LicenseProjectQuantitiesTableFileRelativeWeightsCreateUpdateDto = new LicenseProjectQuantitiesTableFileRelativeWeightsCreateUpdateDto();
  total: number = 0;
  showValidation: boolean = false;
  isExistingValidation: boolean = false;
  userData: customerResponse | null = null;
  isTotalCalculated: boolean = false;
  enableValidation: boolean = false;
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
    elementName:'البند',
    adjustedReferenceWeights: 'الأوزان النسبية المرجعية المعدلة',
    proposedRelativeWeights: 'الأوزان النسبية المقترحة',
    variance: 'نسبة التباين',
    requiredErrorMsg: 'حقل مطلوب',
    minValueError: 'القيمة يجب أن تكون أكبر من أو تساوي',
    maxValueError: 'القيمة يجب أن تكون أقل من أو تساوي',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    savedSuccessfully: 'تم الحفظ',
  };
  showTabsButton: boolean = false;
  constructor(private _quantitiesTableFilesService: QuantitiesTableFilesService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _tabsService: TabsService,
    private _fb: FormBuilder,
    private _filemangementService: FileManagementService,
    private _toastrNotificatioService: ToastrNotificatioService,
    private _toastrService: ToastrService,
    private _licenseDetailsService: LicenseDetailsService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _popupService: PopupService,
    private _userDataService: UserDataService,
  ) { }


  ngOnInit() {
    this.getCustomerData();
    this.getFilesLicenseProjectId();
    this.initForm();
    this.observeFormValueChanges();
    this.observeTabsButton();
    this.observeSaveQWTableEventEmitter();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }
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
    this._filemangementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.getFilesLicenseProjectId();
      }
    })
  }
  private initRows(values: LicenseProjectRelativeWeightDto[]) {
    this.formArr.clear();

    values.forEach(relativeWeight => {
      let row: FormGroup;

        const validators = this.enableValidation ? [
          Validators.required,
          Validators.min(relativeWeight.sysLicenseRelativeWeight?.minimumValue),
          Validators.max(relativeWeight.sysLicenseRelativeWeight?.maximumValue)
        ] : [];
        
        const varianceValidators = this.enableValidation ? [
          Validators.max(relativeWeight.sysLicenseRelativeWeight?.maximumAllowedVariancePercentage)
        ] : [];

        row = this._fb.group({
          elementName: [relativeWeight.sysLicenseRelativeWeight?.elementName],
          adjustedReferenceWeights: [{ value: 0, disabled: true }],
          modifiedRelativeWeight: [
            relativeWeight.modifiedRelativeWeight,
            validators
        ],
          variance: [
            0,
            varianceValidators
          ],
          referenceWeight: [relativeWeight.sysLicenseRelativeWeight?.maximumValue],
          licenseRelativeWeightId: [relativeWeight.licenseRelativeWeightId],
          licenseProjectId: [this.licenseProjectId],
          maxVariance: [relativeWeight.sysLicenseRelativeWeight?.maximumAllowedVariancePercentage],
          id: [relativeWeight.id ? relativeWeight.id : "00000000-0000-0000-0000-000000000000"],
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
    // إذا كان أحد البندين مدخل، المجموع يجب أن يكون 100%
    // إذا لم يتم إدخال أي من البندين، المجموع يجب أن يكون 95.5%
    if (hasConcreteWork || hasBuildingWork) {
      this.targetTotalPercentage = 100;
    } else {
      this.targetTotalPercentage = 95.5;
    }
  }
  private hasElementWithValue(rows: any[], elementName: string): boolean {
    return rows.some((row: any) => {
      const hasMatchingName = row.elementName === elementName;
      const hasValue = row.modifiedRelativeWeight !== null && row.modifiedRelativeWeight !== undefined && row.modifiedRelativeWeight !== '' && +row.modifiedRelativeWeight > 0;
      
      return hasMatchingName && hasValue;
    });
  }
  onProposedRelativeWeightsChange(index: number) {
    this.observeFormValueChanges();
    const formRow = this.formArr.at(index);
    const modifiedRelativeWeight = formRow.get('modifiedRelativeWeight')?.value;
    const adjustedReferenceWeights = formRow.get('adjustedReferenceWeights')?.value;
    
    if (modifiedRelativeWeight && adjustedReferenceWeights && adjustedReferenceWeights > 0) {
      const variance = (modifiedRelativeWeight - adjustedReferenceWeights) / adjustedReferenceWeights;
      formRow.patchValue({
        variance: this.roundToTwoDecimals(variance)
      }, { emitEvent: false });
    }
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
      data.Rows.forEach((row: any, index: number) => {
        if(row.referenceWeight) {
          if (this.total != 0 || this.total != null) {
         const adjustedReferenceWeights = +row.modifiedRelativeWeight != 0 ?(row.referenceWeight) / (this.total) : 0;
          const formRow = this.formArr.at(index);
            if (formRow) {
              formRow.patchValue({
                adjustedReferenceWeights: this.roundToTwoDecimals(adjustedReferenceWeights),
              }, { emitEvent: false }); 
            }
          }
        }
      });
      
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
          }
        })
      )
    }
  }

  onQuantitiesTableFileUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) {
      this._toastrNotificatioService.showError(this.localization.PleaseAddAllRequiredFields);
      return;
    }
    filesData.eventRes.data.forEach((data: any) => {
      const allowedExtensions = [".xls", ".xlsx", ".pdf"];
      if (!allowedExtensions.includes(data.fileType.toLowerCase())) {
        this._toastrNotificatioService.showError(this.localization.fileType);
        return;
      }
      this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.licenseProjectQuantitiesTableFileCreateUpdateList.push({
        quantitiesTableFileId: data.id,
        licenseProjectId: this.licenseProjectId as string,
        id: '00000000-0000-0000-0000-000000000000',
        fileType: data.fileType
      });
    });
  }

  save(moveToNextTab: boolean = false): void {
    // if (!this.isExistingValidation) {
    //   if (this.total > 100) {
    //     this._toastrNotificatioService.showError(this.localization.greaterThan100);
    //     return;
    //   }
    //   if (this.total < 100) {
    //     this._toastrNotificatioService.showError(this.localization.lessThan100);
    //     return;
    //   }
    // }
    // if(!this.isExistingValidation && this.selectedTab === 'calculation')
    // {
    //   this._toastrNotificatioService.showError(this.localization.requiredErrorMsg);
    //   return;
    // }
    this.updateTargetPercentage(this.licenseProjectRelativeWeightForm.value);

    // Only apply validation if enableValidation is true and user is not an existing validation user
    if (this.enableValidation && !this.isExistingValidation) {
      
      if (this.total > this.targetTotalPercentage) {
        this._toastrNotificatioService.showError(`الإجمالي أكبر من ${this.targetTotalPercentage}%`);
        return;
      }
      if (this.total < this.targetTotalPercentage) {
        this._toastrNotificatioService.showError(`الإجمالي أقل من ${this.targetTotalPercentage}%`);
        return;
      }
    }
    this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.quantitiesTableAcknowledgment = true;

    this.licenseProjectQuantitiesTableFileAndRelativeWeight.licenseProjectRelativeWeightList = []
    this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.licenseProjectRelativeWeightList = [];
 
    this.licenseProjectRelativeWeightForm.value.Rows.forEach((element: any) => {
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
          this._toastrService.success(this.localization.savedSuccessfully);
          if (moveToNextTab) {
            this.moveToNextTab()
          } else {
            this.getFilesLicenseProjectId();
          }
        }
        else {
          this._toastrNotificatioService.showError(res.message);
        }
      })
    )
  }

  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.save(true)
      })
    )
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe((res: null) => {
        this.save()
      })
    )
  }
  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked()
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}

