export interface CharteredAccountProjectStatistics {
  // إجمالي عدد الوحدات
  totalUnits?: number;

  // إجمالي الوحدات المباعة
  totalUnitsSold?: number;

  // إجمالي الوحدات المتبقية
  totalRemainingUnits?: number;

  // إجمالي قيمة الوحدات المباعة
  totalSoldUnitsValue?: number;

  // إجمالي المبالغ المحصلة
  totalCollectedAmount?: number;

  // نسبة الإنجاز
  completionPercentage?: number;

  // إجمالي التكاليف الإنشائية
  totalConstructionCosts?: number;

  // إجمالي المصاريف الإدارية والتسويقية
  totalAdministrativeExpenses?: number;

  // رصيد حساب الضمان
  escrowAccountBalance?: number;

  // عدد المشترين
  totalBuyers?: number;

  // نسبة المبيعات
  salesPercentage?: number;
}

export interface LicenseProjectBuyerTotalDto {
  totalSoldUnitsCount: number;
  totalSoldUnitsValue: number;
  totalRealEstateTransactionTax: number;
  totalSoldUnitsValueIncludingTax: number;
  totalRemainingAmountOfUnitsValue: number;
  totalSupervisionAmount: number;
  highestSalePrice: number;
  lowestSalePrice: number;
  averageSalePrice: number;
  averagePricePerMeter: number;
  medianSalePrice: number;
}

export interface StatisticCard {
  label: string;
  value: string | number;
  icon?: string;
  color?: string;
  percentage?: number;
  trend?: 'up' | 'down' | 'neutral';
}
