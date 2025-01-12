import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectBuyerDto, LicenseProjectBuyerTypeEnum, type LicenseProjectBuyerSettingDto } from '../../dataModels/license-project-buyer-dto';
import { LicenseProjectBuyerService } from '../../services/license-project-buyer.service';
import { DatePipe } from '@angular/common';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { LoginUserTypeEnum } from 'src/app/modules/auth/models/login.model';
import { environment } from 'src/environments/environment';
import { SupervisionFollowUpCostsRatioService } from '../../services/supervision-follow-up-costs-ratio.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
@Component({
  selector: 'app-show-detail-buyer',
  templateUrl: './show-detail-buyer.component.html',
  styleUrls: ['./show-detail-buyer.component.scss']
})
export class ShowDetailBuyerComponent {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  licenseProjectBuyer?: LicenseProjectBuyerDto;
  loginUserTypeEnum = LoginUserTypeEnum;
  averagePricePerMeter?: number;
  licenseProjectBuyerId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;
  licenseProjectBuyerTypeEnum = LicenseProjectBuyerTypeEnum;
  licenseProjectBuyerSettingDto!: LicenseProjectBuyerSettingDto;
  selectedBuyerType = LicenseProjectBuyerTypeEnum.Lands;
  userType?: string;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  constructor(
    private _licenseProjectBuyerService: LicenseProjectBuyerService,
    private _supervisionFollowUpCostsRatioService: SupervisionFollowUpCostsRatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,

    private datePipe: DatePipe,
    private _storageService: StorageService
  ) { this.getLoginUserType() }
  ngOnInit(): void {
    this.getLicenseProjectBuyerIdStorage();
    this.getLicenseProjectIdStorage();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.loadSetting();
      this.getLicenseProjectBuyerIdStorage();
    }

  }


  private getLicenseProjectBuyerIdStorage(): void {
    this.licenseProjectBuyerId = this._licenseProjectBuyerService.getLicenseProjectBuyerIdStorage();
    this.getLicenseProjectBuyerDetail();
  }
  private getLoginUserType(): void {
    this.userType = this._storageService.getLoginUserType() as string;
  }

  loadSetting() {
    this._licenseProjectBuyerService.GetBuyerSettings(this.licenseProjectId as string).subscribe(res => {
      if (res) {
        this.licenseProjectBuyerSettingDto = res as LicenseProjectBuyerSettingDto;
      }
    })
  }
  private getLicenseProjectBuyerDetail() {

    this.subscriptions.push(
      this._licenseProjectBuyerService.getLicenseProjectBuyerDetail(this.licenseProjectBuyerId as string).subscribe((res) => {
        this.licenseProjectBuyer = res as LicenseProjectBuyerDto;
        if (this.licenseProjectBuyer) {
          this.onlicenseProjectypeChanged(this.licenseProjectBuyer.licenseProjectBuyerTypeId)
          // this.licenseProjectBuyer.priceAfterTax = this.licenseProjectBuyer.price * this.licenseProjectBuyer.currentTax;
          // this.licenseProjectBuyer.totalPrice = this.licenseProjectBuyer.price + this.licenseProjectBuyer.priceAfterTax;

          // if (this.licenseProjectBuyer.licenseProjectBuyerTypeId == this.licenseProjectBuyerTypeEnum.Units) {
          //   this.licenseProjectBuyer.supervisionFromProjectBeginning =
          //     ((this.licenseProjectBuyer.price * this.licenseProjectBuyer.percentageSupervisionOrFees) / 365) * this.licenseProjectBuyer.projectDayCounts;
          // }
          // if (this.licenseProjectBuyer.licenseProjectBuyerTypeId == this.licenseProjectBuyerTypeEnum.Lands) {
          //   this.licenseProjectBuyer.landFeeCosts = this.licenseProjectBuyer.price * this.licenseProjectBuyer.percentageSupervisionOrFees;
          //   this.licenseProjectBuyer.supervisionFromProjectBeginning =
          //     this.licenseProjectBuyer.price * this.licenseProjectBuyer.percentageSupervisionOrFees
          // }
          // this.licenseProjectBuyer.saleDate = this.datePipe.transform(this.licenseProjectBuyer.saleDate, 'yyyy-MM-dd') as any;
          // this.licenseProjectBuyer.deliveryDate = this.datePipe.transform(this.licenseProjectBuyer.deliveryDate, 'yyyy-MM-dd') as any;
          // if (this.licenseProjectBuyer?.space)
          //   this.averagePricePerMeter = this.licenseProjectBuyer?.price as number / this.licenseProjectBuyer?.space as number
        }
      })
    )
  }

  onlicenseProjectypeChanged(licensePTojectbuyerTypeId: number) {
    if (licensePTojectbuyerTypeId == this.licenseProjectBuyerTypeEnum.Lands) {
      this.selectedBuyerType = LicenseProjectBuyerTypeEnum.Lands
    } else {
      this.selectedBuyerType = LicenseProjectBuyerTypeEnum.Units
    }
    this.observelicenseProjectBuyerForm()
  }

  observelicenseProjectBuyerForm() {

    if (this.selectedBuyerType == this.licenseProjectBuyerTypeEnum.Units) {
      this.calcaulateRatiosForUnit();
    } else {
      this.calculateRatiosForLand();
    }
  }

  calculateRatiosForLand() {
    if (this.licenseProjectBuyer) {
      //سعر الارض
      let price = this.licenseProjectBuyer.price;
      if (!price) price = 0;

      let tax = (this.licenseProjectBuyerSettingDto?.currentTaxForLand as number) / 100;
      //الضريبة المضافة
      this.licenseProjectBuyer.currentTax = (tax);

      //قيمة الضريبة المضافة من سعر البيع
      let taxValue = tax * price;
      this.licenseProjectBuyer.priceAfterTax = taxValue;

      //قيمة الارض شامل الضريبة المضافة
      this.licenseProjectBuyer.totalPrice = (taxValue + price);

      let fees = (this.licenseProjectBuyerSettingDto?.percentageSupervisionOrFeesForLand as number) / 100
      //نسبة الرسوم
      this.licenseProjectBuyer.percentageSupervisionOrFees = (fees);

      //تكاليف رسوم الاراضى
      let landFeeCosts = fees * price;
      this.licenseProjectBuyer.landFeeCosts = (landFeeCosts);
    }
  }

  calcaulateRatiosForUnit() {
    if (this.licenseProjectBuyer) {
      //سعر الارض
      let price = this.licenseProjectBuyer.price;
      if (!price) price = 0;

      this.averagePricePerMeter = +(price /  this.licenseProjectBuyer!?.space as number).toFixed(4)

    let tax = (this.licenseProjectBuyerSettingDto?.currentTaxForUnit as number) / 100;
    //الضريبة المضافة
    this.licenseProjectBuyer.currentTax=(tax);

    //قيمة الضريبة المضافة من سعر البيع
    let taxValue = tax * price;
    this.licenseProjectBuyer.priceAfterTax=(taxValue);

    //قيمة الارض شامل الضريبة المضافة
    this.licenseProjectBuyer.totalPrice=(taxValue + price);

    this.getSupervisionFollowupCostsRatio(price)
    }
  }

  getSupervisionFollowupCostsRatio(price: number) {
    if (price > 0) {
      this._supervisionFollowUpCostsRatioService.getSupervisionFollowupCostsRatio(price).subscribe((value: number) => {
        debugger
        let ratio = value;
        //نسبة الاشراف والمتابعة
        this.licenseProjectBuyer!.percentageSupervisionOrFees=(ratio);
        //نسبة الاشراف والمتابع من بد المشروع
        debugger
        let secondDate = new Date();
        // if (this.controls.deliveryDate.value != null && this.controls.deliveryDate.value != '') {
        //   secondDate = new Date(this.controls.deliveryDate.value)
        // }
        let days = this.getDays(new Date(this.licenseProjectBuyerSettingDto?.startProjectDate), secondDate);
        console.log('days');
        console.log(days);

        let total = (((price * ratio) / 365) * days).toFixed(4);

        this.licenseProjectBuyer!.supervisionFromProjectBeginning=(+total);

      
        // this.licenseProjectBuyerForm.controls.supervisionFromProjectBeginning.setValue(price * ratio);
      })
    }
  }

  getDays(firstDate: Date, secondDate: Date) {
    const millisecondsDiff = secondDate.getTime() - firstDate.getTime();
    return Math.round(millisecondsDiff / (24 * 60 * 60 * 60));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
