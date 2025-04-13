export class ProjectAddressDto {
    id: string = "";
    licenseProjectsId : string = "";
    areasId : string|null = "";
    citiesId : string|null ="";
    neighborhoodName : string = ""; 
    streetName : string = "";
    longitude : string = "";
    latitude : string = "";
}
export class ProjectAddressCreateUpdateDto {
    id: string = "";
    licenseProjectsId : string = "";
    areasId : string|null = "";
    citiesId : string|null = "";
    neighborhoodName : string = ""; 
    streetName : string = "";
    longitude : string = "";
    latitude : string = "";
}