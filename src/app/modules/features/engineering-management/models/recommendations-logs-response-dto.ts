import { areaResponseBE } from "../../facilities/dataModels/area.model";
import { cityResponseBE } from "../../facilities/dataModels/city.model";

export interface RecommendationsLogsResponseDto {
  certificateNumber: string | null;
  projectName: string | null;
  projectCode: string | null;
  licenseProjectId: string ;
  unitsCount: number | null;
  sysLicenseProjectStatusName: string | null;
  projectStartOn: string | null;
  projectEndOn: string | null;
  licenseRequestVersionsinitialCertificateDate: string | null;
  cityId: string
  areaId: string 
  areaName: string | null;
  cityName:string | null;
}
