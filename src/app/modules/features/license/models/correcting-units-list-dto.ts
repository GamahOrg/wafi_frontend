export interface CorrectingUnitsListDto {
  id: string;
  requestCode: string;
  certificateNumber: string | null;
  customerName: string | null;
  customerId: string;
  facilityId: string;
  licenseProjectId: string;
  createdOn: Date;
  requestOn:Date;
  projectName: string | null;
  licenseTypeName: string | null;
  licenseRequestTypeId: string | null;
  externalRequestStatusId: number | null;
  externalRequestStatusName: string | null;
}
