import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { CreateUpdateChangePlanForRealEstateDeveloperDto, type CreateChangePlanForRealEstateDeveloperDto } from '../models/create-update-change-plan-for-real-estate-developer-dto';
import { UpdateChangePlanForCharteredAccountantDto } from '../models/update-change-plan-for-chartered-accountant-dto';
import { UpdateChangePlanForEngineeringConsultantDto } from '../models/update-change-plan-for-engineering-consultant-dto';
import { LicenseProjectRequestChangePlanFullDto } from '../models/license-project-request-change-plan-full-dto';
import { ChangePlanDeedOwnerDto } from '../models/change-plan-deed-owner.model';

@Injectable()
export class CahngePlaneRequestDetailsService {

  constructor(private _httpClient: HttpClient) { }
 private licenseProjectRequestChangePlan = new BehaviorSubject<LicenseProjectRequestChangePlanFullDto|null>({} as LicenseProjectRequestChangePlanFullDto|null);

 private licenseProjectRequestChangePlan$ = this.licenseProjectRequestChangePlan.asObservable();
 getLicenseProjectRequestChangePlan(): Observable<LicenseProjectRequestChangePlanFullDto|null> {
  return this.licenseProjectRequestChangePlan$;
}
setLicenseProjectRequestChangePlan(LatestValue: LicenseProjectRequestChangePlanFullDto) {
  return this.licenseProjectRequestChangePlan.next(LatestValue);
}
getLicenseProjectDetailsById(licenseProjectRequestId : string) :Observable<LicenseProjectRequestChangePlanFullDto|null>{
  return this._httpClient.get<CoreResponseDTO<LicenseProjectRequestChangePlanFullDto>>(`${Configuration.APIs.LicenseProjectRequestChangePlan.GetLicenseProjectRequestChangePlanDetails}/${licenseProjectRequestId}`).pipe(
    map((res: CoreResponseDTO<LicenseProjectRequestChangePlanFullDto>)=>{
      return res.isDone? res.data as LicenseProjectRequestChangePlanFullDto:null;

    })
  );
 }
  createChangePlanForRealEstateDeveloper(changePlanForRealEstateDeveloper: CreateChangePlanForRealEstateDeveloperDto): Observable<CoreResponseDTO<LicenseProjectRequestChangePlanFullDto> | null> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectRequestChangePlanFullDto>>
      (Configuration.APIs.LicenseProjectRequestChangePlan.CreateChangePlanForRealEstateDeveloper, changePlanForRealEstateDeveloper).pipe(
        map((res: CoreResponseDTO<LicenseProjectRequestChangePlanFullDto>) => {
          return res.isDone ? res: null
        })
      )
  }

  createOrUpdateChangePlanForRealEstateDeveloper(changePlanForRealEstateDeveloper: CreateUpdateChangePlanForRealEstateDeveloperDto): Observable<CoreResponseDTO<LicenseProjectRequestChangePlanFullDto> | null> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectRequestChangePlanFullDto>>
      (Configuration.APIs.LicenseProjectRequestChangePlan.CreateOrUpdateChangePlanForRealEstateDeveloper, changePlanForRealEstateDeveloper).pipe(
        map((res: CoreResponseDTO<LicenseProjectRequestChangePlanFullDto>) => {
          return res.isDone ? res: null
        })
      )
  }
  updateChangePlanForEngineeringConsultant(changePlanForEngineeringConsultant: UpdateChangePlanForEngineeringConsultantDto): Observable<CoreResponseDTO<LicenseProjectRequestChangePlanFullDto> | null> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectRequestChangePlanFullDto>>
      (Configuration.APIs.LicenseProjectRequestChangePlan.UpdateChangePlanForEngineeringConsultant, changePlanForEngineeringConsultant).pipe(
        map((res: CoreResponseDTO<LicenseProjectRequestChangePlanFullDto>) => {
          return res.isDone ? res: null
        })
      )
  }
  updateChangePlanForCharteredAccountant(updateChangePlanForCharteredAccountant: UpdateChangePlanForCharteredAccountantDto): Observable<CoreResponseDTO<LicenseProjectRequestChangePlanFullDto> | null> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectRequestChangePlanFullDto>>
      (Configuration.APIs.LicenseProjectRequestChangePlan.UpdateChangePlanForCharteredAccountant, updateChangePlanForCharteredAccountant).pipe(
        map((res: CoreResponseDTO<LicenseProjectRequestChangePlanFullDto>) => {
          return res.isDone ? res: null
        })
      )
  }

  getDeedOwnersByRequestId(requestId: string, searchText?: string): Observable<ChangePlanDeedOwnerDto[]> {
    let url = `${Configuration.APIs.LicenseProjectRequestChangePlan.GetDeedOwnersByRequestId}/${requestId}`;
    if (searchText) {
      url += `?searchText=${encodeURIComponent(searchText)}`;
    }
    return this._httpClient.get<CoreResponseDTO<ChangePlanDeedOwnerDto[]>>(url).pipe(
      map((res: CoreResponseDTO<ChangePlanDeedOwnerDto[]>) => {
        return res.isDone ? (res.data as ChangePlanDeedOwnerDto[]) : [];
      })
    );
  }
}
