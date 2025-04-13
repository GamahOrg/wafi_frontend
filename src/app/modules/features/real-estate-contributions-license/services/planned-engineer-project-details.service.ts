import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { CompletionRatesDTO, Zonelist, unitslist } from '../models/zonelist';

@Injectable()
export class PlannedEngineerProjectDetailsService {

  _isUpdated$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private _httpClient : HttpClient) { }

 
  GetZonesList(id : string | null): Observable<CoreResponseDTO<Zonelist[]>>{
    return this._httpClient.get<CoreResponseDTO<Zonelist[]>>(`${Configuration.APIs.PlannedEngineerProjectDetails.GetByLicenseProjectId}/${id}`);
  }
  



  GetLicenseProjectBuildingBlocks(id : string | null, pageIndex: number, pageSize: number) :Observable<Pagination<unitslist[]> | null>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageIndex", pageIndex);
    queryParams = queryParams.append("pageSize", pageSize);
    if(id)
      queryParams = queryParams.append("zoneId",  id);
    return this._httpClient.get<CoreResponseDTO<Pagination<unitslist[]>>>(`${Configuration.APIs.PlannedEngineerProjectDetails.GetLicenseProjectBuildingBlocks}`, { params: queryParams }).pipe(
      map((res: CoreResponseDTO<Pagination<unitslist[]>>)=>{
        if(res.isDone){
          return res.data as Pagination<unitslist[]>;
        }else{
          return {} as Pagination<unitslist[]>
        }
      })
    );
   }



   GetLicenseProjectEngineeringProjectZonesBlockesDetailsByYear(unitId : string | null , selectedYear : number | null): Observable<CoreResponseDTO<CompletionRatesDTO>>{
    return this._httpClient.get<CoreResponseDTO<CompletionRatesDTO>>(`${Configuration.APIs.PlannedEngineerProjectDetails.GetLicenseProjectEngineeringProjectZonesBlockesDetailsByYear}/${unitId}/${selectedYear}`);

   }


   UpdateLicenseProjectEngineeringProjectZonesBlocksDetailYearly(model : CompletionRatesDTO): Observable<CoreResponseDTO<CompletionRatesDTO>>{
    return this._httpClient.post<CoreResponseDTO<CompletionRatesDTO>> (Configuration.APIs.PlannedEngineerProjectDetails.UpdateLicenseProjectEngineeringProjectZonesBlocksDetailYearly,model)
  
   }
 


}
