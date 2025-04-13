import { SysLicenseGroupingDto } from "./sys-license-grouping-dto";

export class SysLicenseRequestTypeGroupingDto {
  public sale: SysLicenseGroupingDto[] = [];
  public rent: SysLicenseGroupingDto[] = [];
  public marketing: SysLicenseGroupingDto[] = [];
  //  public showing :SysLicenseGroupingDto[]=[];
}
