import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forkJoin, Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectBuyerCreateUpdateDto } from '../../dataModels/license-project-buyer-create-update-dto';
import { LicenseProjectBuyerService } from '../../services/license-project-buyer.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectBuyerStatusEnum } from '../../dataModels/license-project-buyer-list-paging-dto';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { ProjectUnit } from '../../models/project-units';
import { ProjectUnitCodeDto } from '../../dataModels/project-unit-code.dto';
import { LicenseProjectBuyerDto, LicenseProjectBuyerTypeEnum, type LicenseProjectBuyerPaymentTypeDto, type LicenseProjectBuyerSettingDto } from '../../dataModels/license-project-buyer-dto';
import { DatePipe } from '@angular/common';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { SupervisionFollowUpCostsRatioService } from '../../services/supervision-follow-up-costs-ratio.service';

@Component({
  selector: 'app-add-buyer',
  templateUrl: './add-buyer.component.html',
  styleUrls: ['./add-buyer.component.scss']
})
export class AddBuyerComponent {
  subscriptions: Subscription[] = [];
  licenseProjectBuyerCreateUpdate?: LicenseProjectBuyerCreateUpdateDto;
  licenseProjectBuyer?: LicenseProjectBuyerDto;
  projectUnits?: ProjectUnit[];
  projectUnitCodes?: ProjectUnitCodeDto[];
  averagePrice?: number;
  blockName?: string;
  licenseProjectBuyerTypeEnum = LicenseProjectBuyerTypeEnum;
  paymentTypes: LicenseProjectBuyerPaymentTypeDto[] = [];
  licenseProjectBuyerForm = this._formBuilder.group({
    licenseProjectBuyerTypeId: this._formBuilder.control<number | null>(1, [Validators.required]),
    paymentTypeId: this._formBuilder.control<number | null>(null, [Validators.required]),
    name: this._formBuilder.control<string | null>(null, [Validators.required]),
    nidNumber: this._formBuilder.control<string | null>(null, [Validators.required]),
    mobile: this._formBuilder.control<string | null>(null, [Validators.required]),
    landNumbers: this._formBuilder.control<number | null>(null),
    unitCodeId: this._formBuilder.control<string | null>(null),
    blockId: this._formBuilder.control<string | null>(null, [Validators.required]),
    contractNumber: this._formBuilder.control<string | null>(null, [Validators.required]),
    saleDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    deliveryDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    currentTax: this._formBuilder.control<number | null>(null),
    price: this._formBuilder.control<number | null>(null, [Validators.required]),
    priceAfterTax: this._formBuilder.control<number | null>(null),
    totalPrice: this._formBuilder.control<number | null>(null),
    percentageSupervisionOrFees: this._formBuilder.control<number | null>(null),
    landFeeCosts: this._formBuilder.control<number | null>(null),
    supervisionFromProjectBeginning: this._formBuilder.control<number | null>(null),
  });
  licenseProjectBuyerStatus = LicenseProjectBuyerStatusEnum;
  contractFileId?: string;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  licenseProjectBuyerId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;
  get controls() {
    return this.licenseProjectBuyerForm.controls;
  }
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  constructor(
    private _licenseProjectBuyerService: LicenseProjectBuyerService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _supervisionFollowUpCostsRatioService: SupervisionFollowUpCostsRatioService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private datePipe: DatePipe,



  ) { }
  ngOnInit(): void {
    this.observePopupEvents();
    this.getLicenseProjectIdStorage();

  }
  selectedBuyerType = LicenseProjectBuyerTypeEnum.Lands;
  onlicenseProjectypeChanged(licensePTojectbuyerTypeId: number) {
    if (licensePTojectbuyerTypeId == this.licenseProjectBuyerTypeEnum.Lands) {
      this.selectedBuyerType = LicenseProjectBuyerTypeEnum.Lands
    } else {
      this.selectedBuyerType = LicenseProjectBuyerTypeEnum.Units
    }
    // this.controls.blockId.setValue(null);
    this.observelicenseProjectBuyerForm()
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getLicenseProjectBuyerIdStorage();
    }

  }


  licenseProjectBuyerSettingDto!: LicenseProjectBuyerSettingDto;

  private getLicenseProjectBuyerIdStorage(): void {
    this.licenseProjectBuyerId = this._licenseProjectBuyerService.getLicenseProjectBuyerIdStorage();
    this.loadComponentData();
   
  }

  // getLicenseProjectBuyersDetails() {
  //   this._licenseProjectBuyerService.getLicenseProjectBuyerDetail(this.licenseProjectBuyerId as string).subscribe(results => {
  //     this.licenseProjectBuyer = results as LicenseProjectBuyerDto;
  //     if (this.licenseProjectBuyer) {
  //       this.contractFileId=this.licenseProjectBuyer.contractFileId;
  //       this.licenseProjectBuyer.saleDate = this.datePipe.transform(this.licenseProjectBuyer.saleDate, 'yyyy-MM-dd') as any;
  //       this.licenseProjectBuyer.deliveryDate = this.datePipe.transform(this.licenseProjectBuyer.deliveryDate, 'yyyy-MM-dd') as any;
  //       this.licenseProjectBuyerForm.patchValue(this.licenseProjectBuyer as any);
  //       this.licenseProjectBuyerForm.controls.saleDate.setValue(this.licenseProjectBuyer.saleDate as any);
  //       this.licenseProjectBuyerForm.controls.deliveryDate.setValue(this.licenseProjectBuyer.deliveryDate as any);
  //       if (this.controls.licenseProjectBuyerTypeId.value){
  //         this.onlicenseProjectypeChanged(+this.controls.licenseProjectBuyerTypeId.value);
  //       }
  //     }
  //   })
  // }
  loadAveragePrice(): void {
    
    const filteredItem = this.projectUnitCodes?.find(x => x.id === (this.controls.unitCodeId.value as string))

    this.controls.blockId.setValue(filteredItem?.unitId as string)

    this.blockName = this.projectUnits?.find(x => x.id === filteredItem?.unitId)?.code

    let price = this.controls.price.value;

    if (filteredItem?.space && this.controls.price.value && this.controls.price.value > 0) {
      this.averagePrice = +(this.controls.price.value / filteredItem?.space as number).toFixed(4)
    }
  }
  loadComponentData(): void {

    const requests = [
      this._licenseProjectBuyerService.getProjectUnitesList(this.licenseProjectId as string),
      this._licenseProjectBuyerService.getProjectBlockAndBuildingList(this.licenseProjectId as string),
      this._licenseProjectBuyerService.GetBuyerSettings(this.licenseProjectId as string),
      this._licenseProjectBuyerService.getLicenseProjectBuyerPaymentTypes(),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.projectUnitCodes = results[0] as ProjectUnitCodeDto[];
        this.projectUnits = results[1] as ProjectUnit[];
        this.licenseProjectBuyerSettingDto = results[2] as LicenseProjectBuyerSettingDto;
        this.paymentTypes = results[3] as LicenseProjectBuyerPaymentTypeDto[];
        if (this.licenseProjectBuyerId) {
          // this.getLicenseProjectBuyersDetails()
        }
      }

    });
    this.subscriptions.push(subscriptions);
  }
  save(): void {
    
    if (!this.licenseProjectBuyerForm.valid) {
      this.showValidation = true;
      return;
    }

    this.licenseProjectBuyerCreateUpdate = this.licenseProjectBuyerForm.value as {} as LicenseProjectBuyerCreateUpdateDto;
    this.licenseProjectBuyerCreateUpdate.licenseProjectId = this.licenseProjectId as string;

    if (this.licenseProjectBuyerId)
      this.licenseProjectBuyerCreateUpdate.id = this.licenseProjectBuyerId as string;
    else
      this.licenseProjectBuyerCreateUpdate.id = '00000000-0000-0000-0000-000000000000'
    this.licenseProjectBuyerCreateUpdate.contractFileId = this.contractFileId as string;

    this.licenseProjectBuyerCreateUpdate.statusId = this.licenseProjectBuyerStatus.New;
    this.subscriptions.push(
      this._licenseProjectBuyerService.saveBuyer(this.licenseProjectBuyerCreateUpdate).subscribe((res) => {

        if (res?.isDone) {
          this._licenseProjectBuyerService.submitSuccessfullyEventEmitter.emit()
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }

      })
    )
  }

  observelicenseProjectBuyerForm() {

    if (this.selectedBuyerType == this.licenseProjectBuyerTypeEnum.Units) {
      this.calcaulateRatiosForUnit();
    } else {
      this.calculateRatiosForLand();
    }
  }

  calculateRatiosForLand() {

    //سعر الارض
    let price = this.controls.price.value;
    if (!price) price = 0;

    let tax = (this.licenseProjectBuyerSettingDto?.currentTaxForLand as number) / 100;
    //الضريبة المضافة
    this.licenseProjectBuyerForm.controls.currentTax.setValue(tax);

    //قيمة الضريبة المضافة من سعر البيع
    let taxValue = tax * price;
    this.licenseProjectBuyerForm.controls.priceAfterTax.setValue(taxValue);

    //قيمة الأرض شامل الضريبة المضافة
    this.licenseProjectBuyerForm.controls.totalPrice.setValue(taxValue + price);

    let fees = (this.licenseProjectBuyerSettingDto?.percentageSupervisionOrFeesForLand as number) / 100
    //نسبة الرسوم
    this.licenseProjectBuyerForm.controls.percentageSupervisionOrFees.setValue(fees);

    //تكاليف رسوم الاراضى
    let landFeeCosts = fees * price;
    this.licenseProjectBuyerForm.controls.landFeeCosts.setValue(landFeeCosts);
  }

  calcaulateRatiosForUnit() {
    //سعر الارض
    let price = this.controls.price.value;
    if (!price) price = 0;

    if (price > 0) {
      this.loadAveragePrice()
    }

    let tax = (this.licenseProjectBuyerSettingDto?.currentTaxForUnit as number) / 100;
    //الضريبة المضافة
    this.licenseProjectBuyerForm.controls.currentTax.setValue(tax);

    //قيمة الضريبة المضافة من سعر البيع
    let taxValue = tax * price;
    this.licenseProjectBuyerForm.controls.priceAfterTax.setValue(taxValue);

    //قيمة الأرض شامل الضريبة المضافة
    this.licenseProjectBuyerForm.controls.totalPrice.setValue(taxValue + price);

    this.getSupervisionFollowupCostsRatio(price)
  }

  getSupervisionFollowupCostsRatio(price: number) {
    if (price > 0) {
      this._supervisionFollowUpCostsRatioService.getSupervisionFollowupCostsRatio(price).subscribe((value: number) => {
        
        let ratio = value;
        //نسبة الإشراف والمتابعة
        this.licenseProjectBuyerForm.controls.percentageSupervisionOrFees.setValue(ratio);
        //نسبة الإشراف والمتابع من بد المشروع
       // let secondDate = new Date();
       //new Date(this.licenseProjectBuyerSettingDto?.startProjectDate)
        // if (this.controls.deliveryDate.value != null && this.controls.deliveryDate.value != '') {
        //   secondDate = new Date(this.controls.deliveryDate.value)
        // }
        let firstDate=new Date(this.licenseProjectBuyerForm.controls.saleDate.value as string);
        let secondDate = new Date(this.licenseProjectBuyerForm.controls.deliveryDate.value as string);
        let days = this.getDays(firstDate, secondDate);
        console.log('days');
        console.log(days);

        let total = (((price * ratio) / 365) * days).toFixed(4);

        this.licenseProjectBuyerForm.controls.supervisionFromProjectBeginning.setValue(+total);

        // this.licenseProjectBuyerForm.controls.supervisionFromProjectBeginning.setValue(price * ratio);
      })
    }
  }

  getDays(firstDate: Date, secondDate: Date) {

    const millisecondsDiff = secondDate.getTime() - firstDate.getTime();
    return Math.ceil(millisecondsDiff / (1000 * 3600 * 24));
  }
  onExistContractFileUploaded(filesData: any) {
    if (filesData.eventRes.data.length == 0) {
      this.contractFileId = '';
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.contractFileId = data.id
    });
  }
  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
        this.save()
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
