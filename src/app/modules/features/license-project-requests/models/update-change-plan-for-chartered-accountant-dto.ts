export interface UpdateChangePlanForCharteredAccountantDto {
    id:string;
    licenseProjectRequestId:string;
    //التكاليف الإجمالية للمشروع (غير شاملة ثمن الأرض) مُحدثة لتاريخ الطلب
    totalProjectCosts :number;
    //رصيد حساب الضمان
    escrowAccountBalance :number;
      //حالة بدا المشروع الخاصه بالمحاسب القانوني
 isProjectStartedCharteredAccountant :boolean;
 //آخرتقرير مالي
  lastFinancialReportId:string;
 //حالة وجود وحدات مباعة
   isThereUnitsSold:boolean;
 //قائمة الوحدات المباعة
  soldUnitsAttachmentId :string;

}
