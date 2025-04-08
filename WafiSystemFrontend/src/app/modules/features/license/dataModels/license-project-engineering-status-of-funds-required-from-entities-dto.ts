import { LicenseProjectEngineeringServiceTypeDto } from "./license-project-engineering-service-type-dto";
import {LicenseProjectEngineeringAccreditationStatusDto} from './license-project-engineering-accreditation-status-dto'
export interface LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto {
    id:string;
     licenseProjectEngineeringSupervisionPlannedReportDetailId :string;
    isForDelivery :boolean;
    //نوع الخدمة جهة الاعتماد
    serviceTypeId :number;
    serviceType :LicenseProjectEngineeringServiceTypeDto;
    //حالة الاعتماد /الموافقة
    accreditationStatusId :number;
      accreditationStatus :LicenseProjectEngineeringAccreditationStatusDto;
    //تاريخ أول تقديم
     firstSubmissionDate :Date;
    //تاريخ اخر تقديم
    lastSubmissionDate :Date;
    //تاريخ الاعتماد النهائى
    finalApprovalDate:Date;
    //ملاحظات
    notes:string;
}

