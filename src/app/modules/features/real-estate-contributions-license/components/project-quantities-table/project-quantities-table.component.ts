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
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { notePopupData } from 'src/app/shared/models/popup.model';
import  { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';


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
  isTotalCalculated: boolean = false; 

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
    lessThan100: 'الاجمالي اقل من 100'
  };
  showTabsButton: boolean = true;
  constructor(private _quantitiesTableFilesService: QuantitiesTableFilesService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _tabsService: TabsService,
    private _fb: FormBuilder,
    private _filemangementService: FileManagementService,
    private _toastrService: ToastrService,
    public toastService: ToastrNotificatioService,
    private _licenseDetailsService: LicenseDetailsService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _popupService: PopupService
  ) { }


  ngOnInit() {
    this.getFilesLicenseProjectId();
    this.initForm();
    this.observeFormValueChanges();
    this.observeTabsButton();
    this.observeSaveQWTableEventEmitter();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
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
      let arrauItems = this._fb.group({
        elementName: [{ value: relativeWeight.sysLicenseRelativeWeight?.elementName, disabled: true }],
        elementValue: [relativeWeight.elementValue],
        licenseRelativeWeightId: [relativeWeight.licenseRelativeWeightId],
        modifiedReferenceWeight: [relativeWeight.modifiedReferenceWeight],
        licenseProjectId: [this.licenseProjectId],
        id: [relativeWeight.id ? relativeWeight.id : "00000000-0000-0000-0000-000000000000"],
      })
      this.formArr.push(arrauItems);
    });
  }

getTotal(data: any) {
    this.total = 0;
    if (data && data.Rows) {
      const numbers: number[] = data.Rows.map((x: any) => +x.elementValue);
      const total = this.flexiblePreciseSum(numbers);
      console.log(total);
      this.total = total;
    }
  }

  flexiblePreciseSum(numbers: number[]): number {
    // Find the maximum number of decimals in the array
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


  get formArr() {
    return this.licenseProjectRelativeWeightForm.get("Rows") as FormArray;
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
    console.log("getFilesLicenseProjectId");

    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.subscriptions.push(
        this._quantitiesTableFilesService.GetByLicenseProjectId(this.licenseProjectId).subscribe((res) => {
          if (res) {
            this.licenseProjectQuantitiesTableFileAndRelativeWeight = res as LicenseProjectQuantitiesTableFileAndRelativeWeightDto;
            this.initRows(this.licenseProjectQuantitiesTableFileAndRelativeWeight.licenseProjectRelativeWeightList)
            this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.quantitiesTableAcknowledgment =
              res.quantitiesTableAcknowledgment;
          }
        })
      )
    }
  }


  onQuantitiesTableFileUploaded(filesData: any) {
    if (filesData.eventRes.data.length == 0) {
      this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.licenseProjectQuantitiesTableFileCreateUpdateList = [];
      return;
    }
    const allowedExtensions = [".xls", ".xlsx", ".pdf"];
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      if (!allowedExtensions.includes(data.fileType.toLowerCase())) {
        this.toastService.showError(this.localization.fileType);
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
    if (this.total > 100) {
      this._toastrService.error(this.localization.greaterThan100);
      return;
    }
    if (this.total < 100) {
      this._toastrService.error(this.localization.lessThan100);
      return;
    }

    this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.quantitiesTableAcknowledgment = true;
    
    this.licenseProjectQuantitiesTableFileAndRelativeWeight.licenseProjectRelativeWeightList = []
    this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.licenseProjectRelativeWeightList = [];

    this.licenseProjectRelativeWeightForm.value.Rows.forEach((element: any) => {
      this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.licenseProjectRelativeWeightList.push(element);
    })

    this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate.licenseProjectId = this.licenseProjectId as string;
    this.subscriptions.push(
      this._quantitiesTableFilesService.Save(this.licenseProjectQuantitiesTableFileRelativeWeightsCreateUpdate).subscribe(res => {
        if (res) {
          this.licenseProjectQuantitiesTableFileAndRelativeWeight = res as LicenseProjectQuantitiesTableFileAndRelativeWeightDto;
          this.isTotalCalculated = true;
          this._licenseDetailsService.QWTableCompiledSuccessfully.emit()
           if (moveToNextTab) {
            this.moveToNextTab()
          } else {
            this.getFilesLicenseProjectId();
          }
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

