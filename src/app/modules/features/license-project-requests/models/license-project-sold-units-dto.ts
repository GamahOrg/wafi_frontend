export interface LicenseProjectSoldUnitsDto {
  id: string;
  licenseProjectBuyerId: string;
  licenseProjectChangePlanRequestId: string;
  unitCode: string;
  buyerName: string;
  contractedHandoverDate: string | null;
  newUnitHandoverDate: string | null;
}
