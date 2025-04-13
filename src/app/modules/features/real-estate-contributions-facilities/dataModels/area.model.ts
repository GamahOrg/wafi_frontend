export class areaResponseBE {
    id: string = "";
    areaName: string = "";
}

export class areaResponseFE {
    constructor(private _areaResponseBE:areaResponseBE){
        this.Id=_areaResponseBE.id;
        this.AreaName=_areaResponseBE.areaName;
    }
    Id: string = "";
    AreaName: string = "";
}