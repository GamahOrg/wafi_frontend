export interface LicenseProjectRecommendationDto {
  id: string;
  licenseProjectId: string;
  code: string;
  ownerTypeId: OwnerTypeEnum;
  recommendationText: string;
  executionDate: string | null;
  notes: string;
  status: SysStatusIssueTypeDto;
  licenseProjectRecommendationResponsibleParties: LicenseProjectRecommendationResponsiblePartyDto[];
  licenseProjectRecommendationReplies:LicenseProjectRecommendationReplyDto[]
}
export interface LicenseProjectRecommendationReplyDto {
  employeeeId?: string;
  notes: string;
  licenseProjectRecommendationId: string;
  createdOn?: string;
}
export interface SysStatusIssueTypeDto {
  id: number;
  name: string;
}

export interface LicenseProjectRecommendationResponsiblePartyDto {
  id: string;
  responsiblePartyId: number | null;
  licenseProjectRecommendationId: string;
  responsibleParty: SysResponsiblePartyDto;
}

export interface LicenseProjectRecommendationCreateUpdateDto {
  id: string;
  code: string;
  licenseProjectId: string;
  recommendationText: string;
  executionDate: string | null;
  notes: string;
  statusId: number;
  responsiblePartyId: number[];
}

export interface RecommendationNumberByStatus {
  closeRecommendationNumber: number;
  openRecommendationNumber: number;
  totalRecommendationNumber: number;
}

export class DropDownRecommendationResponsiblePartyDto {
  id: number = 0;
  name: string = "";
}

export interface SysResponsiblePartyDto {
  id: number;
  name: string;
  canDelete: boolean;
}
export interface LicenseProjectRecommendationReplyDto {
  employeeId?: string;
  notes: string;
  licenseProjectRecommendationId: string;
  createdDate?: string;
}
export enum OwnerTypeEnum{
  ProjectManager = 0,
  ResponsibleEngineer = 1
}