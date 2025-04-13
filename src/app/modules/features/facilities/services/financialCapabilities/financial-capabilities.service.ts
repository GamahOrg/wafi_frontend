import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { financialCapabilityDto, financialCapabilityResponseBE, financialCapabilityResponseFE } from 'src/app/modules/features/facilities/dataModels/financial-capability.model';

@Injectable()
export class FinancialCapabilitiesService {

  constructor(private _httpClient: HttpClient) { }

  financialCapSubject = new BehaviorSubject<financialCapabilityResponseFE>(new financialCapabilityResponseFE(new financialCapabilityResponseBE()));

  // private financialCapSubject$ = this.financialCapSubject.asObservable();

  getFinancialCapabilityObj(): Observable<financialCapabilityResponseFE> {
    return this.financialCapSubject.asObservable();
  }
  SetFinancialCapabilityObj(LatestValue: financialCapabilityResponseFE): void {
    this.financialCapSubject.next(LatestValue);
  }


  GetByFacilityId(facilityId: string): Observable<financialCapabilityResponseFE | null> {
    return this._httpClient.get<CoreResponseDTO<financialCapabilityResponseBE>>
      (`${Configuration.APIs.QualificationFinancialCapabilityRequirement.GetByFacilityId}/${facilityId}`).pipe(
        map((res: CoreResponseDTO<financialCapabilityResponseBE>) => {
          if (res.data) {
            return new financialCapabilityResponseFE(res.data)

          } else {

            return null
          }
        })
      )
  }
  Save(model: financialCapabilityDto): Observable<CoreResponseDTO<financialCapabilityResponseBE>> {
    if (!model.id) model.id = '00000000-0000-0000-0000-000000000000';

    return this._httpClient.post<CoreResponseDTO<financialCapabilityResponseBE>>
      (Configuration.APIs.QualificationFinancialCapabilityRequirement.Save, model).pipe(
        map((res: CoreResponseDTO<financialCapabilityResponseBE>) => {
          // return new financialCapabilityResponseFE(res.data)
          return res;
        })
      )
  }

  GetById(id: string): Observable<financialCapabilityDto | null> {
    return this._httpClient.get<CoreResponseDTO<financialCapabilityDto>>
      (`${Configuration.APIs.QualificationFinancialCapabilityRequirement.GetById}?id=${id}`).pipe(
        map((res: CoreResponseDTO<financialCapabilityDto>) => {
          return res.data ? res.data : null;
        })
      )
  }

  Create(model: financialCapabilityDto): Observable<CoreResponseDTO<financialCapabilityDto>> {
    if (!model.id) model.id = '00000000-0000-0000-0000-000000000000';

    return this._httpClient.post<CoreResponseDTO<financialCapabilityDto>>
      (Configuration.APIs.QualificationFinancialCapabilityRequirement.Create, model).pipe(
        map((res: CoreResponseDTO<financialCapabilityDto>) => {
          return res;
        })
      )
  }
  Update(model: financialCapabilityDto): Observable<CoreResponseDTO<financialCapabilityDto>> {
    return this._httpClient.put<CoreResponseDTO<financialCapabilityDto>>
      (Configuration.APIs.QualificationFinancialCapabilityRequirement.Update, model).pipe(
        map((res: CoreResponseDTO<financialCapabilityDto>) => {
          return res;
        })
      )
  }

}
