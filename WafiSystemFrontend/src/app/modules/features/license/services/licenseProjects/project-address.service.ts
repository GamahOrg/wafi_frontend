import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ProjectAddressCreateUpdateDto, ProjectAddressDto } from '../../dataModels/project-address.dto';
import { Observable, map } from 'rxjs';

@Injectable()
export class ProjectAddressService {
    
    constructor(private _httpClient: HttpClient) { }

  
  
    GetByLicenseProjectId(id: string) {
      return this._httpClient.get<CoreResponseDTO<ProjectAddressDto>>
        (`${Configuration.APIs.LicenseProjectAddress.GetByLicenseProjectId}/${id}`).pipe(
          map((res: CoreResponseDTO<ProjectAddressDto>) => {
            return res.data;
          })
        )
    }

    Save(obj: ProjectAddressCreateUpdateDto): Observable<CoreResponseDTO<ProjectAddressDto>> {
      
      return this._httpClient.post<CoreResponseDTO<ProjectAddressDto>>
        (Configuration.APIs.LicenseProjectAddress.Save,obj).pipe(
        map((res: CoreResponseDTO<ProjectAddressDto>) => {
          return res;
        })
      )
    }
    GetById(id: string) : Observable<ProjectAddressDto | undefined>{
      return this._httpClient.get<CoreResponseDTO<ProjectAddressDto>>
      (`${Configuration.APIs.LicenseProjectAddress.GetById}?id=${id}`).pipe(
        map((res: CoreResponseDTO<ProjectAddressDto>) => {
          return res.data ;
        })
      )
    }
  
}
