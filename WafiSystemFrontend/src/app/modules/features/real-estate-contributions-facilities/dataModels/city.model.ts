export class cityResponseBE {
    id: string = "";
    cityName: string = "";
    areasId: string = "";
}

export class cityResponseFE {
    constructor(private _cityResponseBE:cityResponseBE){
        this.Id=_cityResponseBE.id;
        this.CityName=_cityResponseBE.cityName;
        this.AreaId=_cityResponseBE.areasId;
    }
    Id: string = "";
    CityName: string = "";
    AreaId: string = "";
}