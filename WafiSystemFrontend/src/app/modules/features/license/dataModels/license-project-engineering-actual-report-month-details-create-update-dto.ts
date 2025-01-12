import { LicenseProjectEngineeringSupervisionPlannedReportDetailImageDto, LicenseProjectEngineeringSupervisionPlannedReportDetailMapDto, LicenseProjectEngineeringSupervisionPlannedReportDetailVideoDto } from "./license-project-engineering-actual-report-details-dto";

export interface LicenseProjectEngineeringActualReportMonthDetailsCreateUpdateDto {
       id:string;
       licenseProjectId :string;
        // التمديد المعتمد (يوم)
         approvedExtensionPerDay :number;
        //تاريخ النهاية المتوقع من تحديث البرنامج الزمني
        expectedEndDateFromTimelineUpdate :Date;
        //التكلفة الفعلىة خلال الشهر (ريال سعودي)
         actualMonthCost :number;
        //متوسط عدد العمالة الفعلى للشهر
          monthlyTotalActualEmployees :number;
        //أسباب التأخير (ان وجد)
        delayReasons:string;
        // تفرير الإشراف الهندسي الشهري صور المشروع
        licenseProjectEngineeringSupervisionPlannedReportDetailImages :LicenseProjectEngineeringSupervisionPlannedReportDetailImageDto[]
        // تفرير الإشراف الهندسي الشهري فيديو المشروع
         licenseProjectEngineeringSupervisionPlannedReportDetailVideos:LicenseProjectEngineeringSupervisionPlannedReportDetailVideoDto[]
        // تفرير الإشراف الهندسي الشهري خريطة موقع عام المشروع
         licenseProjectEngineeringSupervisionPlannedReportDetailMaps :LicenseProjectEngineeringSupervisionPlannedReportDetailMapDto[]
}
