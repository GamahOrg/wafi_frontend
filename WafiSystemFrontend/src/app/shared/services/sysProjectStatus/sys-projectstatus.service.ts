import { HttpClient } from "@angular/common/http";
import { ProjectStatusDto } from "../../models/projectstatus.dto";
import { CoreResponseDTO } from "src/app/core/models/core.model";
import { Configuration } from "src/app/core/configurations/shared.config";
import { Injectable } from "@angular/core";

@Injectable()
export class SysProjectStatusService{
constructor(private _httpClient: HttpClient) { }
GetStatusListDropDown(){
    return this._httpClient.get<CoreResponseDTO<ProjectStatusDto[]>>(`${Configuration.APIs.ProjectStatus.GetDropDown}`)
}

}