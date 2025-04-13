export class UpdateCertifiedLicenseDataDto
{
    certifiedNumber: string = "";
    startOn: string = "";
    endOn: string = "";
}

export interface CertifiedLicenseDataDto
{
    certificateNumber?: string;
    startOn: Date ;
    endOn: Date;
}