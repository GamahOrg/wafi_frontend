import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { nationalAddressDto, nationalAddressResponseBE, nationalAddressResponseFE } from 'src/app/modules/features/facilities/dataModels/national-address.model';
import { areaResponseBE, areaResponseFE } from '../../../dataModels/area.model';
import { cityResponseBE, cityResponseFE } from '../../../dataModels/city.model';

@Injectable()
export class NationalAddressService {

  constructor(private _httpClient: HttpClient) { }

  private objSubject = new BehaviorSubject<nationalAddressResponseFE>(new nationalAddressResponseFE(new nationalAddressResponseBE()));

  private objSubject$ = this.objSubject.asObservable();

  getSubjectObj(): Observable<nationalAddressResponseFE> {
    return this.objSubject$;
  }
  SetSubjectObj(LatestValue: nationalAddressResponseFE) {
  return this.objSubject.next(LatestValue) ;
  }


  GetFacilityById(facilityId: string): Observable<nationalAddressResponseFE | null> {
    return this._httpClient.get<CoreResponseDTO<nationalAddressResponseBE>>(`${Configuration.APIs.QualificationNationalAddressDetail.GetByFacilityId}/${facilityId}`).pipe(
      map((res: CoreResponseDTO<nationalAddressResponseBE>) => {
        if(res == null || res.data == null)
        {
          return null;
        }
        return new nationalAddressResponseFE(res.data);
      })
    )
  }

  Save(model: nationalAddressDto): Observable<CoreResponseDTO<nationalAddressResponseBE> | null> {
    if(!model.id) model.id = '00000000-0000-0000-0000-000000000000';

    return this._httpClient.post<CoreResponseDTO<nationalAddressResponseBE>>
      (Configuration.APIs.QualificationNationalAddressDetail.Save,model).pipe(
      map((res: CoreResponseDTO<nationalAddressResponseBE>) => {
        if(res == null || res.data == null)
        {
          return null;
        }
        return res;
      })
    )
  }

    GetAreasDropDown(): Observable<areaResponseBE[] | null> {
    return this._httpClient.get<CoreResponseDTO<areaResponseBE[]>>(`${Configuration.APIs.Area.GetDropDown}`).pipe(
      map((res: CoreResponseDTO<areaResponseBE[]>) => {
        if(res == null || res.data == null)
        {
          return null;
        }
        return res.data as areaResponseBE[]
      })
    )
  }

  GetCitiessDropDown(): Observable<cityResponseBE[] | null> {
    return this._httpClient.get<CoreResponseDTO<cityResponseBE[]>>(`${Configuration.APIs.City.GetDropDown}`).pipe(
      map((res: CoreResponseDTO<cityResponseBE[]>) => {
        if(res == null || res.data == null)
        {
          return null;
        }
        return res.data as cityResponseBE[];
      })
    )
  }

  GetById(id: string) : Observable<nationalAddressDto | null>{
    return this._httpClient.get<CoreResponseDTO<nationalAddressDto>>
    (`${Configuration.APIs.QualificationNationalAddressDetail.GetById}?id=${id}`).pipe(
      map((res: CoreResponseDTO<nationalAddressDto>) => {
        if(res == null || res.data == null)
        {
          return null;
        }
        return res.data;
      })
    )
  }

}
