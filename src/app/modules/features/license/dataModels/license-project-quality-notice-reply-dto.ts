import { EmpolyeeByAdminIdResponse } from "./license-project-quality-notice-dto";

export interface LicenseProjectQualityNoticeReplyDto {
    employeeeId :string;
    employeee :EmpolyeeByAdminIdResponse;
   notes :string;
   licenseProjectQualityNoticeId :string;
   createdBy :string;
  createdOn :Date;
}
