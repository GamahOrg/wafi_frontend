export class FawriaLicenseBankInfoDto {
  licenseProjectId: string = "";
  delegatorCustomerIds!: string[];
  bankId: string ="";
  approvedBankTermsConditions: boolean = false;
  saudiTaxNumber: string ="";
  fatcaTaxNumber: string | null = null;
  crsTaxNumber: string | null = null;
}
