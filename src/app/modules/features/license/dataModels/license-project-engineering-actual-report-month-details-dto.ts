import { LicenseProjectEngineeringSupervisionPlannedReportDetailImageDto, LicenseProjectEngineeringSupervisionPlannedReportDetailMapDto, LicenseProjectEngineeringSupervisionPlannedReportDetailVideoDto } from "./license-project-engineering-actual-report-details-dto";
import { LicenseProjectAddressesDto } from "./master-license-project-engineering-supervision-planned-report-dto";

export interface LicenseProjectEngineeringActualReportMonthDetailsDto {
    id:string;
    name :string;
    projectCode :string;
    startOn :Date;
       endOn :Date;
       buildingFlatArea:number
       landTotalSpace :number
        landValue :number
       //التكلفة الانشائية المتوقعة (ريال سعودي)
        expectedConstructionCost :number
       //المقاول
       contractor :string
       //مقاول البنية التحتية
      infrastructureContractor :string
       //استشاري أعمال البنية التحتية
      infrastructureConsultant :string
       //تكلفة أعمال البنية التحتية (ر.س.) 
        infrastructureCost:string
       //تاريخ بداية الأعمال التعاقدي 
       contractualStartDate :Date
       //تاريخ نهاية الأعمال التعاقدي 
       contractualFinishDate :Date
       cumulativeAmountPriorToThatMonth :number
        cumulativeActualAmountPriorToThatMonth :number
        monthsCount :number
        zonesCount :number
       uniteCount :number
        blockCount :number
       buildingsCount :number
       engineeringConsultantName :string
       developerName:string
       projectManagerCustomerName :string
       licenseProjectAddresses:LicenseProjectAddressesDto[];
       licenseProjectEngineeringSupervisionActualMonthReportDetails:LicenseProjectEngineeringSupervisionPlannedActualReportDetailDto;
}

export interface LicenseProjectEngineeringSupervisionPlannedActualReportDetailDto
{
   id:string;
   monthName :string;
   monthDate :Date;
   cumulativeplannedcompletionpercentage:number
   cumulativeAcualcompletionpercentage:number
   //نسب الإنجاز المخططة الشهرية للمشروع
   projectMonthlyPlannedCompletionRate:number;
   //نسب الإنجاز الفعلىة الشهرية
   projectMonthlyActualCompletionRate :number;
   //التكلفة الفعلىة خلال الشهر (ريال سعودي)
   actualMonthCost:number;
//إجمالي التكلفة الفعلىة حتى تاريخه (ريال سعودي)
   totalActualCostToDate:number
   //إجمالي عدد العمالة المخطط للشهر
   monthlyTotalPlannedEmployees :number;
   //متوسط عدد العمالة الفعلى للشهر
   monthlyTotalActualEmployees :number;

   // التمديد المعتمد (يوم)
   approvedExtensionPerDay :number;

   //تاريخ النهاية المتوقع من تحديث البرنامج الزمني
   expectedEndDateFromTimelineUpdate :Date;

   //تاريخ بداية الأعمال الفعلى 
    actualStartDate :Date;
   //تاريخ النهاية التعاقدي المعدل بناء على التمديد المعتمد
   contractualEndDateAdjustedBasedOnApprovedExtension :Date;
    //أسباب التأخير (ان وجد)
   delayReasons:string;
   // تفرير الإشراف الهندسي الشهري صور المشروع
   licenseProjectEngineeringSupervisionPlannedReportDetailImages :LicenseProjectEngineeringSupervisionPlannedReportDetailImageDto[];
   // تفرير الإشراف الهندسي الشهري فيديو المشروع
  licenseProjectEngineeringSupervisionPlannedReportDetailVideos :LicenseProjectEngineeringSupervisionPlannedReportDetailVideoDto[];
   // تفرير الإشراف الهندسي الشهري خريطة موقع عام المشروع
   licenseProjectEngineeringSupervisionPlannedReportDetailMaps:LicenseProjectEngineeringSupervisionPlannedReportDetailMapDto[];
}
