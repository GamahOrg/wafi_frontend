export interface FawriaLicenseBankInfoResponseDto {
  licenseProjectId: string;
  bankId: string | null;
  delegatorCustomerIds: (string | null)[];
  approvedBankTermsConditions: boolean
  saudiTaxNumber: string
  fatcaTaxNumber: string
  crsTaxNumber: string
}
