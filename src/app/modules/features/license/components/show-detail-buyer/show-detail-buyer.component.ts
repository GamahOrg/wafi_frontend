import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LicenseProjectBuyerDto, LicenseProjectBuyerTypeEnum, type LicenseProjectBuyerSettingDto } from '../../dataModels/license-project-buyer-dto';
import { LicenseProjectBuyerService } from '../../services/license-project-buyer.service';
import { DatePipe } from '@angular/common';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { LoginUserTypeEnum } from 'src/app/modules/auth/models/login.model';
import { environment } from 'src/environments/environment';
import { SupervisionFollowUpCostsRatioService } from '../../services/supervision-follow-up-costs-ratio.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
@Component({
  selector: 'app-show-detail-buyer',
  templateUrl: './show-detail-buyer.component.html',
  styleUrls: ['./show-detail-buyer.component.scss']
})
export class ShowDetailBuyerComponent {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  licenseProjectBuyer: LicenseProjectBuyerDto[] = [];
  loginUserTypeEnum = LoginUserTypeEnum;
  averagePricePerMeter?: number;
  licenseProjectBuyerId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;
  licenseProjectBuyerTypeEnum = LicenseProjectBuyerTypeEnum;
  licenseProjectBuyerSettingDto!: LicenseProjectBuyerSettingDto;
  selectedBuyerType = LicenseProjectBuyerTypeEnum.Lands;
  userType?: string;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";


  // Track which buyers are expanded
  expandedBuyers: Set<number> = new Set();

  constructor(
    private _licenseProjectBuyerService: LicenseProjectBuyerService,
    private _supervisionFollowUpCostsRatioService: SupervisionFollowUpCostsRatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private datePipe: DatePipe,
    private _storageService: StorageService,
    private router: Router
  ) { this.getLoginUserType() }

  ngOnInit(): void {
    // this.getLicenseProjectBuyerIdStorage();
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
        this.licenseProjectBuyer = res as LicenseProjectBuyerDto[];

        if (this.licenseProjectBuyer && this.licenseProjectBuyer.length > 0) {
          // Process each buyer in the list
          this.licenseProjectBuyer.forEach(buyer => {
            this.processBuyerData(buyer);
          });
        }
        // if (this.licenseProjectBuyer) {
          // this.onLicenseProjecTypeChanged(this.licenseProjectBuyer.licenseProjectBuyerTypeId)
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
        // }
      })
    )
  }

  private processBuyerData(buyer: LicenseProjectBuyerDto) {
    if (buyer.licenseProjectBuyerTypeId == this.licenseProjectBuyerTypeEnum.Units) {
      this.calculateRatiosForUnit(buyer);
    } else {
      this.calculateRatiosForLand(buyer);
    }
  }

  calculateRatiosForLand(buyer: LicenseProjectBuyerDto) {
    //سعر الارض
    let price = buyer.price;
    if (!price) price = 0;

    let tax = (this.licenseProjectBuyerSettingDto?.currentTaxForLand as number) / 100;
    //الضريبة المضافة
    buyer.currentTax = tax;

    //قيمة الضريبة المضافة من سعر البيع
    let taxValue = tax * price;
    buyer.priceAfterTax = taxValue;

    //قيمة الأرض شامل الضريبة المضافة
    buyer.totalPrice = (taxValue + price);

    let fees = (this.licenseProjectBuyerSettingDto?.percentageSupervisionOrFeesForLand as number) / 100;
    //نسبة الرسوم
    buyer.percentageSupervisionOrFees = fees;

    //تكاليف رسوم الاراضى
    let landFeeCosts = fees * price;
    buyer.landFeeCosts = landFeeCosts;
  }

  calculateRatiosForUnit(buyer: LicenseProjectBuyerDto) {
    //سعر الوحدة
    let price = buyer.price;
    if (!price) price = 0;

    // حساب سعر المتر
    if (buyer.space && buyer.space > 0) {
      buyer.averagePricePerMeter = +(price / buyer.space).toFixed(4);
    }

    let tax = (this.licenseProjectBuyerSettingDto?.currentTaxForUnit as number) / 100;
    //الضريبة المضافة
    buyer.currentTax = tax;

    //قيمة الضريبة المضافة من سعر البيع
    let taxValue = tax * price;
    buyer.priceAfterTax = taxValue;

    //قيمة الوحدة شامل الضريبة المضافة
    buyer.totalPrice = (taxValue + price);

    this.getSupervisionFollowupCostsRatio(price, buyer);
  }

  getSupervisionFollowupCostsRatio(price: number, buyer: LicenseProjectBuyerDto) {
    if (price > 0) {
      this._supervisionFollowUpCostsRatioService.getSupervisionFollowupCostsRatio(price).subscribe((value: number) => {
        
        let ratio = value;
        //نسبة الإشراف والمتابعة
        buyer.percentageSupervisionOrFees = ratio;
        
        //نسبة الإشراف والمتابع من بداية المشروع
        let secondDate = new Date();
        if (buyer.deliveryDate) {
          secondDate = new Date(buyer.deliveryDate);
        }
        
        let days = this.getDays(new Date(this.licenseProjectBuyerSettingDto?.startProjectDate), secondDate);
        console.log('days for buyer ' + buyer.name, days);

        let total = (((price * ratio) / 365) * days).toFixed(4);
        buyer.supervisionFromProjectBeginning = +total;
      });
    }
  }

  getDays(firstDate: Date, secondDate: Date) {
    const millisecondsDiff = secondDate.getTime() - firstDate.getTime();
    return Math.round(millisecondsDiff / (24 * 60 * 60 * 1000));
  }

  // Helper method to get buyer type display name
  getBuyerTypeName(typeId: number): string {
    return typeId === this.licenseProjectBuyerTypeEnum.Lands ? 'أراضي' : 'وحدات';
  }


  /**
   * Toggle buyer expansion state
   */
  toggleBuyer(index: number): void {
    if (this.expandedBuyers.has(index)) {
      this.expandedBuyers.delete(index);
    } else {
      this.expandedBuyers.add(index);
    }
  }

  /**
   * Check if buyer is expanded
   */
  isBuyerExpanded(index: number): boolean {
    return this.expandedBuyers.has(index);
  }

  /**
   * Expand all buyers
   */
  expandAll(): void {
    this.licenseProjectBuyer.forEach((_, index) => {
      this.expandedBuyers.add(index);
    });
  }

  /**
   * Collapse all buyers
   */
  collapseAll(): void {
    this.expandedBuyers.clear();
  }

  /**
   * Navigate to contract viewer page
   */
  viewContract(buyer: LicenseProjectBuyerDto): void {
    if (buyer.contractFile && buyer.contractFile.id) {
      const navigationPath = `${Configuration.modules.wafi}/${Configuration.modules.license}/contract-viewer`;
      const queryParams = {
        fileId: buyer.contractFile.id,
      };
      this.router.navigate([navigationPath], {
        queryParams: queryParams
      });
    } else {
    }
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
