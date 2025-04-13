export interface LicenseCertificateDto {
    licenseRequestHeaderId:string;
    requestCode:string;
    finishedOn:string;
    licenseNumber: string;
    projectName: string;
    facilityName: string;
    customerName: string;
    startOn: string | null;
    endOn: string | null;
    licenseRequestTypeName: string;
    licenseRequestTypeTypeCode: string;
    landTotalSpace: number | null;
    streetName: string;
    numberOfUnits: number;
    unitsType: string;
    charteredAccountantName: string;
    engineeringConsultantName: string;
    engineeringConsultantFacilityName: string;
    projectBankAccountNo: string;
    projectBankName: string;
    exhibitionName: string;
    headquarter: string;
    participationDate: string;
    showPeriod: number;
    projectCityName: string;
    projectAreaName: string;
    projectNeighborhoodName: string;
    commercialRegisterNumber: string;
    projectSize: number | null;
    decisionNo: string
    isFinalCertification: boolean;

    decisionDate: string;
    projectLocation: string;
    sharingDate: string;

    contributionName : string;
    contributionTypeName : string;
    contributionCapitalValue : number;
    contributionDuration: number;
    categoryName:string
}

export interface CertificateTemplate {
    arabicTitle: string,
    englishTitle: string,
    showSideData: boolean,
    showFooter: boolean,
    showFooterAccountNo: boolean,
    headerData: certificateData[],
    bodyData: certificateData[],
    footerData: certificateData[],
  }
  
  export interface certificateData {
    arabicTitle: string,
    englishTitle: string,
    value?: string|null,
    className?: string
  }
  