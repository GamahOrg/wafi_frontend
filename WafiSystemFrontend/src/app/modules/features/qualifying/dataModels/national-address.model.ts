
export interface nationalAddressDto {
  id: string 
  buildingNumber: string 
  streetName: string 
  neighborhoodName: string 
  postalCode: string 
  unitNumber: string 
  additionalNumber: string 
  facilityId: string 
  citiesId: string 
  areasId: string 
  brokerDocumentTypeId :number
  documentNumber : string 
}
export interface nationalAddressResponse {
    id: string 
    buildingNumber: string 
    streetName: string 
    neighborhoodName: string 
    postalCode: string 
    unitNumber: string 
    additionalNumber: string 
    citiesId: string 
    areasId: string 
    brokerDocumentTypeId :number
    documentNumber : string 
    brokerDocumentType : QualificationBrokerDocumentTypeCreateUpdateDto;
    areas: areaResponse 
    sysCity: cityResponse 
  }
  export interface areaResponse {
    id: string 
    areaName: string 
}

export interface cityResponse {
  id: string 
  cityName: string 
  areasId: string 
}

export interface QualificationBrokerDocumentTypeCreateUpdateDto {
  id:string
  brokerDocumentTypeName :string
}
