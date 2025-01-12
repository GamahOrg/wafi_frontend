import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { LicenseProjectFinancialStatementDto } from "../../models/LicenseProjectFinancialStatementDto";
import { LicenseDetailsService } from "../../services/license-details/license-details.service";

@Component({
  selector: "app-LicenseProjectFinancialStatementList",
  templateUrl: "./LicenseProjectFinancialStatementList.component.html",
  styleUrls: ["./LicenseProjectFinancialStatementList.component.scss"]
})

export class LicenseProjectFinancialStatementListComponent implements OnInit {
  financialStatement: LicenseProjectFinancialStatementDto = new LicenseProjectFinancialStatementDto();
  subscriptions: Subscription[] = [];

  localization = {
    title: "البيان المالي لمشروع الترخيص",
    projectCost: "سعر المشروع",
    projectSaleEstimatedValue: "القيمة التقديرية لبيع المشروع",
    cashSources: "المصادر النقدية",
    prepaidCost: "تكلفة الدفع المسبق",
    deficitCoveragePlanAndWaysToFinanceTheProject: "خطة تغطية العجز وطرق تمويل المشروع",
    landPrice: "سعر الأرض",
    financialObligations: "الالتزامات المالية",
    marketingPlanAndTargetSegment: "خطة التسويق والقطاع المستهدف",
    expectedConstructionCost: "تكلفة البناء المتوقعة",
    expectedProfitMargin: "هامش الربح المتوقع",
  }


  constructor(private _licenseDetailService: LicenseDetailsService) { }
  ngOnInit(): void {
    this.getFinancialStatement();
  }

  getFinancialStatement(): void {
    this.subscriptions.push(
      this._licenseDetailService.financialStatement$.subscribe((res: LicenseProjectFinancialStatementDto[] | null) => {
        if (res && res.length > 0) {
          this.financialStatement = res[0];
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}

