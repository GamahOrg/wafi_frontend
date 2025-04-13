export interface zonelist {

    id : string,
    licenseProjectsId : string,
    code : string,
    
}


export interface unitslist {

    id: string,
    zoneCode : string,
    code : string,
    unitType : string,
    subUnitCount : string,
    subUnitTypes : string
}


export interface CompletionRatesDTO {
    id: string
    lastYearTotalCumulativePercentages: number
    plannedEndDate: string
    licenseProjectEngineeringProjectZonesBlocksDetails: LicenseProjectEngineeringProjectZonesBlocksDetail[]
  }
  
  export interface LicenseProjectEngineeringProjectZonesBlocksDetail {
    id: string
    monthlyPlannedCompletionPercentage: number
    month: string
  }
  
