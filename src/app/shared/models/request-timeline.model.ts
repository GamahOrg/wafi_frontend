export interface RequestTimelineResponseDto {
  //تم إرسال الطلب لاطراف المشروع
  isRequestSentToDevelopers: boolean;
  //موافقة اطراف المشروع
  isRequestApprovedFromDevelopers: boolean;
  //إرسال الطلب للدراسة
  isRequestSent: boolean;
  //تم إصدار الرخصة
  isLicenseApproved: boolean;
}
