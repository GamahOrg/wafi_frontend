import { FileManagerBE } from "../../../facilities/dataModels/financial-capability.model";

export interface FilesData {
    id: string;
    licenseProjectId: string;
    createdOn: Date;
    monthDate : string | null ;
    licenseProjectProgramStatusId: number;
    isResponsibleEngineerReviewed: boolean;
    allowCompile: boolean ,
    formatedmonthDate? : string,
    allowCustomerFeedback: boolean,
    allowCertify: boolean,
    allowToEdit: boolean;
    threeDReportFileId: string;
    generalSitePlanFileId: string;
    primaveraFileId: string;
    scheduleFileId: string;
    workProgressCurveMonthlyAndCumulativePercentageOfCompletionFileId: string;
    cashFlowCurveFileId: string;
    employmentCountCurveFileId: string;
    threeDReportFile: FileManagerBE;
    generalSitePlanFile: FileManagerBE;
    primaveraFile: FileManagerBE;
    scheduleFile: FileManagerBE;
    workProgressCurveMonthlyAndCumulativePercentageOfCompletionFile?: any;
    cashFlowCurveFile: FileManagerBE;
    employmentCountCurveFile: FileManagerBE;
    externalStatus? : SysLicenseProjectTimeScheduleStauts
    internalStatus? : SysLicenseProjectTimeScheduleStauts;
    licenseProjectTimeScheduleOtherAttachments: LicenseProjectTimeScheduleOtherAttachment[];
    licenseProjectTimeScheduleStudyNotes: LicenseProjectTimeScheduleStudyNoteDto[];
    licenseProjectTimeScheduleVerificationElementValues: LicenseProjectTimeScheduleVerificationElementValue[];
  }
   interface LicenseProjectTimeScheduleVerificationElementValue {
    licenseProjectTimeScheduleId: string;
    verificationElementId: number;
    elementStatus: boolean;
    notes?: any;
    sysLicenseProjectTimeScheduleVerificationElement: LicenseProjectTimeScheduleNote;
    id: string;
  }
  interface SysLicenseProjectTimeScheduleStauts {
    id: number;
    name: string;
  }
  interface LicenseProjectTimeScheduleOtherAttachment {
    licenseProjectTimeScheduleId: string;
    otherAttachmentFileId: string;
    otherAttachmentFile: FileManagerBE;
    id: string;
  }


  interface LicenseProjectTimeScheduleNote {
    name : string;
    id : string
  }
  

   export interface LicenseProjectTimeScheduleStudyNoteDto {
    id: string;
    licenseProjectTimeScheduleId: string;
    ownerTypeId : LicenseProjectTimeScheduleOwnerType
    notes: string | null;
    createdOn: string;
    employeeId?: string | null;
    employee?: null;
} 



export enum LicenseProjectTimeScheduleOwnerType
 {
     ProjectManager = 0,
     ResponsibleEngineer = 1
 }








export interface addNoteModel {

    id: string,
    notes: string | undefined
  
}
