export interface RequestTimelineResponseDto {
  //تم ارسال الطلب لاطراف المشروع
  isRequestSentToDevelopers: boolean;
  //موافقة اطراف المشروع
  isRequestApprovedFromDevelopers: boolean;
  //إرسال الطلب للدراسة
  isRequestSent: boolean;
  //تم إصدار الرخصة
  isLicenseApproved: boolean;
}
