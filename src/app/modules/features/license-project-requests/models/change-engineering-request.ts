import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { LicenseProjectRequestStatusEnum } from "../enums/license-project-request-status.enum";

export interface ChangeEngineeringRequestFullDetailsDto {

  // #region Identifiers
  id: string;
  licenseProjectRequestId: string;
  licenseProjectId: string;
  facilityId?: string | null;
  customerId?: string | null;
  // #endregion


  // #region 1- بيانات الطلب

  // حالة الطلب
  requestStatus: LicenseProjectRequestStatusEnum | null;
  requestStatusName?: string | null;

  // اسم المشروع
  projectName?: string | null;

  // رقم الرخصة
  certificateNumber?: string | null;

  // رقم الطلب
  requestNumber?: string | null;

  // مدينة المشروع
  cityName?: string | null;

  // اسم المطور
  developerName?: string | null;

  // رقم جوال المطور
  developerMobile?: string | null;

  // الرقم الموحد للمطور
  developerUnifiedNumber?: string | null;

  // تاريخ انتهاء الرخصة
  licenseEndOn?: string | null;

  // (اسم الاستشاري السابق (اسم المؤسسة
  previousFacilityCommercialRegister?: string | null;
  previousEngineeringFacilityName?: string | null;

  // اسم الاستشاري الجديد (اسم المؤسسة)
  engineeringFacilityId?: string | null;
  engineeringFacilityName?: string | null;

  // الرقم الموحد للاستشاري الجديد
  engineeringFacilityUnifiedNumber?: string | null;

  // مبررات تغيير الاستشاري
  reasons?: string | null;

  // تقرير تسليم الأعمال
  previousConsultingOfficeReportId?: string | null;
  previousConsultingOfficeReport?: SysFileManagerCreateUpdateDto | null;

  // #endregion


  // #region 2- الوحدات
  units: ChangeEngineeringUnitDto[];
  soldUnitsCount: number;
  // #endregion


  // #region 3- نسبة الإنجاز
  achievementRate?: number | null;
  // #endregion


  // #region 4- الاتفاقية
  alternativeConsultingOfficeAgreementId?: string | null;
  // #endregion
}export interface ChangeEngineeringUnitDto {
  unitTypeName: string | null;
  subUnitCount: number;
  soldUnitsCount: number;
}export interface ApproveRequestPayload {
  licenseProjectRequestId: string;
  facilityId: string;
}

export interface RejectRequestPayload extends ApproveRequestPayload {
  reason: string;
}export enum LicenseProjectPartiesStatusEnum {
  //قيد انتظار الاعتماد
  PendingApproval = 1,

  //موافق
  Approved = 2,

  //رافض
  Rejected = 3,
  //غير مستكمل
  NoCompleted = 4,
  //مستكمل
  Completed = 5,
}
