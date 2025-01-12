import { areaResponseBE, areaResponseFE } from "./area.model";
import { cityResponseBE, cityResponseFE } from "./city.model";
import { QualificationBrokerDocumentTypeCreateUpdateDto } from "./qualification-broker-document-type-create-update-dto";

export class nationalAddressDto {
  id: string = "";
  buildingNumber: string = "";
  streetName: string = "";
  neighborhoodName: string = "";
  postalCode: string = "";
  unitNumber: string = "";
  additionalNumber: string = "";
  facilityId: string = "";
  citiesId: string = "";
  areasId: string = "";
  brokerDocumentTypeId :number=0;
  documentNumber : string = "";
}
export class nationalAddressResponseBE {
    id: string = "";
    buildingNumber: string = "";
    streetName: string = "";
    neighborhoodName: string = "";
    postalCode: string = "";
    unitNumber: string = "";
    additionalNumber: string = "";
    citiesId: string = "";
    areasId: string = "";
    brokerDocumentTypeId :number=0;
    documentNumber : string = "";
    brokerDocumentType=new QualificationBrokerDocumentTypeCreateUpdateDto();
    areas: areaResponseBE = new areaResponseBE();
    sysCity: cityResponseBE = new cityResponseBE();

  }

  export class nationalAddressResponseFE {

    constructor(private _nationalAddressResponseBE:nationalAddressResponseBE){
        this.Id = _nationalAddressResponseBE.id;
        this.BuildingNumber = _nationalAddressResponseBE.buildingNumber;
        this.StreetName = _nationalAddressResponseBE.streetName;
        this.NeighborhoodName = _nationalAddressResponseBE.neighborhoodName;
        this.PostalCode = _nationalAddressResponseBE.postalCode;
        this.UnitNumber = _nationalAddressResponseBE.unitNumber;
        this.AdditionalNumber = _nationalAddressResponseBE.additionalNumber;
        this.CityId = _nationalAddressResponseBE.citiesId;
        this.AreaId = _nationalAddressResponseBE.areasId;
        this.brokerDocumentTypeId = _nationalAddressResponseBE.brokerDocumentTypeId;
        this.documentNumber = _nationalAddressResponseBE.documentNumber;
       this.brokerDocumentType=_nationalAddressResponseBE.brokerDocumentType;
        this.Area = new areaResponseFE(_nationalAddressResponseBE.areas);
        this.City = new cityResponseFE(_nationalAddressResponseBE.sysCity);
    }
    Id: string = "";
    BuildingNumber: string = "";
    StreetName: string = "";
    NeighborhoodName: string = "";
    PostalCode: string = "";
    UnitNumber: string = "";
    AdditionalNumber: string = "";
    CityId: string = "";
    AreaId: string = "";
    brokerDocumentTypeId :number=0;
    documentNumber : string = "";
    brokerDocumentType=new QualificationBrokerDocumentTypeCreateUpdateDto();
    Area: areaResponseFE = new areaResponseFE(new areaResponseBE());
    City: cityResponseFE = new cityResponseFE(new cityResponseBE());
  }