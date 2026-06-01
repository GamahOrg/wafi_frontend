import { RatingTypeEnum, RatingTriggerTypeEnum } from './enums/rating.enum';

export interface UserRatingCreateDto {
  /** نوع التقييم */
  ratingType: RatingTypeEnum;

  /** قيمة التقييم (من 0 إلى 10) */
  ratingValue: number;

  /** الملاحظات (اختياري - الحد الأقصى 500 حرف) */
  notes?: string;

  /** نوع المتصفح */
  browserType?: string;

  /** معرف المشروع (للرخصة الفورية) */
  licenseProjectId?: string; // Guid => string في TS

  /** نوع محفز التقييم (للرخصة الفورية) */
  triggerType?: RatingTriggerTypeEnum;

  /** معرف المنشأة */
  facilityId?: string;

  /** معرف طلب التأهيل (لتقييم خدمة التأهيل) */
  qualificationRequestHeaderId?: string;

  /** معرف طلب التغيير (خطة / استشاري / محاسب) */
  licenseProjectRequestId?: string;
}
export interface RatingDismissDto {
  /** نوع التقييم */
  ratingType: RatingTypeEnum;

  /** معرف المشروع (للرخصة الفورية) */
  licenseProjectId?: string; // Guid => string

  /** نوع محفز التقييم (للرخصة الفورية) */
  triggerType?: RatingTriggerTypeEnum;

  /** معرف طلب التأهيل (لتقييم خدمة التأهيل) */
  qualificationRequestHeaderId?: string;

  /** معرف طلب التغيير (خطة / استشاري / محاسب) */
  licenseProjectRequestId?: string;
}
export interface UserRatingUpdateDto {
  ratingValue: number;
  notes: string;
  browserType: string;
  id: string;
}
export interface RatingStatusDto {
  /** هل يجب عرض التقييم */
  shouldShowRating: boolean;

  /** نوع التقييم */
  ratingType?: RatingTypeEnum;

  /** اسم نوع التقييم */
  ratingTypeName?: string;

  /** معرف المشروع (إن وجد) */
  licenseProjectId?: string; // Guid => string

  /** اسم المشروع (إن وجد) */
  projectName?: string;

  /** نوع محفز التقييم */
  triggerType?: RatingTriggerTypeEnum;

  /** عدد مرات العرض المتبقية */
  remainingDisplayCount: number;

  /** معرف طلب التأهيل (لتقييم خدمة التأهيل) */
  qualificationRequestHeaderId?: string;

  /** رقم طلب التأهيل */
  qualificationRequestCode?: string;

  /** معرف طلب التغيير (خطة / استشاري / محاسب) */
  licenseProjectRequestId?: string;
}
export interface LoginRatingsDto {
  ratings: RatingStatusDto[];
}
