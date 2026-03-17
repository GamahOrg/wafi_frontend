export interface SysRequestApprovalDto {
  id: number;
  order: number;
  description: string;
  requestTypeId: SysRequestApprovalTypeEnum;
  actionTypeId: SysRequestApprovalActionTypeEnum;
  isApproved?: boolean;
}

export enum SysRequestApprovalTypeEnum {
  //البرنامج الزمنى
  TimeSchedule = 1,
  //القيم المخططة
  PlannedValues = 2,
  //التقرير الشهرى
  MonthlyReport = 3,
  //تقرير حالة المشروع
  ProjectStatusReport = 4,
}

export enum SysRequestApprovalActionTypeEnum {
  //إرسال الطلب
  SendRequest = 1,
  //اعادة إرسال الطلب للدراسة
  ResendForReview = 2,
}

export interface RequestApproval {
  requestTypeId: SysRequestApprovalTypeEnum;
  actionTypeId: SysRequestApprovalActionTypeEnum;
}
