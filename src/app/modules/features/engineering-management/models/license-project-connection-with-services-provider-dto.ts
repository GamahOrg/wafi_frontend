export interface LicenseProjectConnectionWithServicesProviderDto {
    id:string;
    licenseProjectEngineeringSupervisionPlannedReportDetailId:string;
     monthName :string;
    //حالة ربط الخدمة - كهرباء
     electricityTieConnectionStatusId :number;
    electricityTieConnectionStatus: SysLicenseProjectTieConnectionStatusDto
    //نوع الخدمة - كهرباء
     electricityServiceTypeStatusId :number;
   
     electricityServiceTypeStatus :SysLicenseProjectServiceTypeStatusDto
    //تاريخ ربط الخدمة كهرباء المتوقع/الفعلى
      electricityTieConnectionDate :Date;
       //حالة تفعيل الخدمة -  كهرباء
    electricityConnectionStatusId :number;
    electricityConnectionStatus :SysLicenseProjectActivationStatusDto;

    //ملاحظات الكهرباء
    electricityNotes:string;
   
    //حالة ربط الخدمة - مياه
     waterTieConnectionStatusId :number;
    waterTieConnectionStatus :SysLicenseProjectTieConnectionStatusDto;
    //نوع الخدمة - مياه
     waterServiceTypeStatusId :number;
   
    waterServiceTypeStatus:SysLicenseProjectServiceTypeStatusDto;
    //تاريخ ربط الخدمة مياه المتوقع/الفعلى
     waterTieConnectionDate:Date;
    //حالة تفعيل الخدمة - مياه
     waterConnectionStatusId :number;
     waterConnectionStatus :SysLicenseProjectActivationStatusDto;
    //ملاحظات مياه
     waterNotes :string;
   
    //حالة ربط الخدمة - صرف صحى
    sewageTieConnectionStatusId :number;
     sewageTieConnectionStatus :SysLicenseProjectTieConnectionStatusDto;
    //نوع الخدمة - صرف صحى
    sewageServiceTypeStatusId :number;
   
     sewageServiceTypeStatus:SysLicenseProjectServiceTypeStatusDto;
    //تاريخ ربط الخدمة صرف صحى المتوقع/الفعلى
    sewageTieConnectionDate :Date;
    //حالة تفعيل الخدمة - صرف صحى
     sewageConnectionStatusId :number;
     sewageConnectionStatus :SysLicenseProjectActivationStatusDto;
    //ملاحظات صرف صحى
     sewageNotes :string;
}
export interface SysLicenseProjectServiceTypeStatusDto
{
    id:number;
    name:string;
}

export interface SysLicenseProjectActivationStatusDto
{
    id:number;
    name:string;
}

export interface SysLicenseProjectTieConnectionStatusDto
{
    id:number;
    name:string;
}

export enum LicenseProjectTieConnectionStatusEnum
{
    //تم الربط
    Connected = 1,
    //لم يتم الربط
    NotConnected = 2
}