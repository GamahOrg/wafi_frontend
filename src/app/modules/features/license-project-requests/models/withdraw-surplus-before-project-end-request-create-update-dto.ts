export interface WithdrawSurplusBeforeProjectEndRequestCreateUpdateDto {
    id:string;
    licenseProjectId :string;
    facilityId :string;
     //نموذج الطلب
         applicationFormFileId :string;
       
        //تقرير المكتب الاستشاري
         consultingEngineeringId :string;
        //تقرير المحاسب القانون
         charteredAccountantReportId :string;
        //تقرير البنك
         bankReportId :string;
       
        //اتفاقيات الموردين
         supplierAgreementsId :string;
       
        //اتفاقيات المقاولين
         contractorAgreementsId :string;
       
        //اتفاقيات مقدمى الخدمات
         serviceProviderAgreementsId :string;
       
        //تقرير المقاول
         contractorReportId :string;
       
        //تقرير مالي لإنهاء المشروع متضمن تكلفة المشروع الفعلية( ) مصادقاُ عليها من المكتب الهندسي والمحاسب القانوني.
         financialReportId :string;
       
        //خطاب التزام من المحاسب القانوني يفيد بالإبقاء على ما نسبته (20%) في حساب الضمان، إلى حين انتهاء المشروع عقاري
         letterOfCommitmentFromCharteredAccountantId :string;
}
