import { FileManagerBE } from "../../facilities/dataModels/financial-capability.model";

export class ConstructionLicenseDto {
  id: string = "";
  licenseProjectsId: string = "";
  before7: boolean = false;
  issueOn: string = "";
  landTotalSpace: number = 0;
  licenseFileId: string | null = null;
  licenseNumber: string = "";
  licenseFile: FileManagerBE | null = null;
}

export class BaladyDto {
  issueOn: string = "";
  licenseNumber: string = "";
}

export class ConstructionLicenseCreateUpdateDto {
  id: string = "";
  licenseProjectsId: string = "";
  issueOn: string = "";
  licenseFileId: string | null = null;
  licenseNumber: string = "";
}



export class ConstructionLicenseIntegrationDto {
  landInfoList: LandInfoListDto[] = [];
}

export class LandInfoListDto {
  planNumber: string = "";
  planName: string = "";
  landNumber: string = "";
  landArea: number = 0;
  landAreaSpecifiedndArea: boolean = false;
}

