import { SysLicenseProjectQualityStatusDto } from "./sys-license-project-quality-status-dto";

export interface LicenseProjectHealthAndSafetyMonitoringDto {
    id:string;
    hsePlanStatusId :number;
 //الإجراءات الوقائية التي يجب اتباعها
  preventiveMeasures :string;
 
 licenseProjectEngineeringSupervisionPlannedReportDetailId:string;
 
 //عدد الحوادث الكبيرة في فترة التقرير
  majorIncidentsAtReportDate :number;
 //عدد الاصابات مع وقت ضائع في فترة التقرير
  lostTimeInjuriesAtReportDate :number;
 //عدد تقارير الأخطاء القريبة في فترة التقرير
  nearMissReportsAtReportDate :number;

    //عدد الحوادث الكبيرة منذ بداية المشروع
     totalMajorIncidentsAtReportDate:number;
    //عدد الاصابات مع وقت ضائع منذ بداية المشروع
     totalLostTimeInjuriesAtReportDate :number;
    //عدد تقارير الأخطاء القريبة منذ بدايه المشروع
    totalNearMissReportsAtReportDate :number;

    hsePlanStatus:SysLicenseProjectQualityStatusDto;
 //ملاحظات الصحة والسلامة
  notes :string;
}
