//financial capability

import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto"

export interface financialCapabilityResponse {
  id: string
  cpalicenseNumber: string
  creditRecordIntegrityCertificateDate: Date
  financialStatementDescription: string
  certificateOfZakatIncome: string
  facilityId:string
  qualificationFinancialStatements: QualificationFinancialStatement[]
  creditRecordIntegrityCertificateFile:SysFileManagerCreateUpdateDto
}
export interface financialCapabilityDto {
  
  id: string
  cpalicenseNumber: string
  creditRecordIntegrityCertificateDate: Date
  creditRecordIntegrityCertificateFileId: string|null;
  financialStatementDescription: string
  certificateOfZakatIncome: string
  facilityId:string
  addedQualificationFinancialStatements: any[]
}

// financial statement

export interface QualificationFinancialStatement {
  id: string 
  description: string
  financialStatementFile: SysFileManagerCreateUpdateDto 
}

//file manager

