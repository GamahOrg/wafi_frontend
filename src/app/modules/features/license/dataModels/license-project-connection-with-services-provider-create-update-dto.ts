export interface LicenseProjectConnectionWithServicesProviderCreateUpdateDto {
    id:string;
    licenseProjectEngineeringSupervisionPlannedReportDetailId:string;
     //حالة ربط الخدمة - كهرباء
  electricityTieConnectionStatusId :number;
 //نوع الخدمة - كهرباء
 electricityServiceTypeStatusId:number;

 //تاريخ ربط الخدمة كهرباء المتوقع/الفعلى
 electricityTieConnectionDate :Date;
   //حالة تفعيل الخدمة -  كهرباء
    electricityConnectionStatusId :number;
 //ملاحظات الكهرباء
  electricityNotes :string;

 //حالة ربط الخدمة - مياه
 waterTieConnectionStatusId :number;
 //نوع الخدمة - مياه
 waterServiceTypeStatusId :number;

 //تاريخ ربط الخدمة مياه المتوقع/الفعلى
  waterTieConnectionDate :Date;
 //حالة تفعيل الخدمة - مياه
  waterConnectionStatusId: number
 //ملاحظات مياه
  waterNotes :string;

 //حالة ربط الخدمة - صرف صحى
  sewageTieConnectionStatusId:number
 //نوع الخدمة - صرف صحى
 sewageServiceTypeStatusId :number;

 //تاريخ ربط الخدمة صرف صحى المتوقع/الفعلى
  sewageTieConnectionDate :Date;
 //حالة تفعيل الخدمة - صرف صحى
  sewageConnectionStatusId :number;
 //ملاحظات صرف صحى
  sewageNotes :string;
}
