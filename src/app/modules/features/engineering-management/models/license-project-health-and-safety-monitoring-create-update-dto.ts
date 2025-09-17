export interface LicenseProjectHealthAndSafetyMonitoringCreateUpdateDto {
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
//ملاحظات الصحة والسلامة
 notes :string;
}
