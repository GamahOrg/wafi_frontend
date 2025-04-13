export interface licenseProjectZoneCaculations {
    totalProjectZonesNumber: number;
    totalProjectbuildingsNumber: number;
    totalProjectblocksNumber: number;
    projectSubUnitCalculations: projectSubUnitCalculations[];
    numberOfProjectUnitTypes: number;
}
export interface projectSubUnitCalculations {
    projectSubUnitName: string
    projectSubUnitNumber: number
}
