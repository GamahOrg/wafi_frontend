import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ArchitecturalDesignFilesDto } from '../../dataModels/architectural-design-files.dto';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Injectable()
export class ArchitecturalDesignFilesService {

constructor(private _httpClient: HttpClient) { }

GetDesignFilesByLicenseProjectId(id: string) {
  return this._httpClient.get<CoreResponseDTO<ArchitecturalDesignFilesDto>>
    (`${Configuration.APIs.LicenseProjectDesignFile.GetDesignFilesByLicenseProjectId}/${id}`)
}

SaveDesignFilesForProjectLicenseAsync(obj: ArchitecturalDesignFilesDto): Observable<CoreResponseDTO<ArchitecturalDesignFilesDto>> {
  
  return this._httpClient.post<CoreResponseDTO<ArchitecturalDesignFilesDto>>
    (Configuration.APIs.LicenseProjectDesignFile.SaveDesignFilesForProjectLicenseAsync,obj)
}

}
