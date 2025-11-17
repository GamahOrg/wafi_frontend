export interface ProjectPartiesStatusDto {
  id: string;
  name: string;
  projectPartiesType: ProjectPartiesType;
  contarctValue?: number | null;
  nId: string;
  sendDate: string;
  sendUpdatedDate: string;
  status: ProjectPartiesStatusEnum;
  owningArea?: number | null;
  totalLandValue?: number | null;
  rejectReason?: string | null;
}

export enum ProjectPartiesType {
  EngineeringConsultant = 1,
  CharteredAccountant = 2,
  Owners = 3,
}

export enum ProjectPartiesStatusEnum {
  Approve = 1,
  Reject = 2,
  UnderApproval = 3,
}
