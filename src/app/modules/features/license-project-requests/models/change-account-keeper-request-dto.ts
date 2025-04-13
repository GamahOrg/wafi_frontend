import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { LicenseProjectRequestStatusEnum } from "../enums/license-project-request-status.enum";

export interface ChangeAccountKeeperRequestDetailsDto {
    licenseProjectId:string;
    projectName:string
    id:string;
    reasons: string;
    bankId:string;
    bankName:string;
    accountNumber:string;
    escrowAccountAgreementwithAlternativeBank: SysFileManagerCreateUpdateDto;
    clearanceAcknowledgmentFromPreviousBankForProject: SysFileManagerCreateUpdateDto;
    letterFromPreviousBankToNewBank: SysFileManagerCreateUpdateDto;
    reportFromPreviousBankOnCurrentAccountStatus: SysFileManagerCreateUpdateDto;
    previousAccountKeeperAgreementFile: SysFileManagerCreateUpdateDto;
    accountKeeperEmail: string;
    accountKeeperFax: string;
    accountKeeperMobile: string;
    accountKeeperJobTitle: string;
    accountKeeperExtentionNumber: string;
    accountKeeperTelephone: string;
    accountKeeperAgreementFileId: string;
    previousAccountKeeperEmail: string;
    previousAccountKeeperFax: string;
    previousAccountKeeperMobile: string;
    previousAccountKeeperJobTitle: string;
    previousAccountKeeperExtentionNumber: string;
    previousAccountKeeperTelephone: string;
    previousAccountKeeperAgreementFileId: string;
    externalRequestStatusId: LicenseProjectRequestStatusEnum
  }
  
  export interface CreateOrUpdateChangeAccountKeeperRequestDto {
    id?: string;
    facilityId: string;
    licenseProjectId: string;
    bankId:string;
    accountNumber:string;
    reasons: string;
    escrowAccountAgreementwithAlternativeBankId: string;
    clearanceAcknowledgmentFromPreviousBankForProjectId: string;
    letterFromPreviousBankToNewBankId: string;
    reportFromPreviousBankOnCurrentAccountStatusId: string;
    accountKeeperEmail: string;
    accountKeeperFax: string;
    accountKeeperMobile: string;
    accountKeeperJobTitle: string;
    accountKeeperExtentionNumber: string;
    accountKeeperTelephone: string;
    // accountKeeperAgreementFileId: string;
  }
  