import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { VisitorEngineeringConsultantDto } from '../dataModels/visitor-engineering-consultant-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Injectable()
export class VisitorEngineeringConsultantService {

  constructor(private _httpClient: HttpClient) { }
  GetVisitorEngineeringConsultantByLicenseProjectId(id: string): Observable<CoreResponseDTO<VisitorEngineeringConsultantDto>> {
    return this._httpClient.get<CoreResponseDTO<VisitorEngineeringConsultantDto>>
      (`${Configuration.APIs.VisitorEngineeringConsultant.GetByLicenseProjectId}/${id}`)
  }
  SaveVisitorEngineeringConsultant(obj: VisitorEngineeringConsultantDto): Observable<CoreResponseDTO<VisitorEngineeringConsultantDto>> {
   
    return this._httpClient.post<CoreResponseDTO<VisitorEngineeringConsultantDto>>
      (Configuration.APIs.VisitorEngineeringConsultant.Save,obj).pipe(
      map((res: CoreResponseDTO<VisitorEngineeringConsultantDto>) => {
        return res;
      })
    )
  }
}
