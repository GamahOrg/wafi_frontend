import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Configuration} from "../../../core/configurations/shared.config";
import {CoreResponseDTO} from "../../../core/models/core.model";
import {CityDto, CityWithChambersOfCommerceCityCodeDto} from "../../models/lookups/city-dto";
import {Observable, map} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CityService {

  constructor(public httpClient: HttpClient) {
  }

  getList(): Observable<CoreResponseDTO<CityDto[]>> {
    let url = `${Configuration.APIs.City.GetDropDown}`;
    return this.httpClient.get<CoreResponseDTO<CityDto[]>>(url);
  }

  getListWithChambersOfCommerceCityCodeAsync(): Observable<CityWithChambersOfCommerceCityCodeDto[] | null> {
    return this.httpClient.get<CoreResponseDTO<CityWithChambersOfCommerceCityCodeDto[]>>(`${Configuration.APIs.City.GetListWithChambersOfCommerceCityCodeAsync}`).pipe(
      map((res: CoreResponseDTO<CityWithChambersOfCommerceCityCodeDto[]>) => {
        if (res.data) {
          return res.data as CityWithChambersOfCommerceCityCodeDto[]
        } else {
          return null
        }
      })
    )
  }

  
}
