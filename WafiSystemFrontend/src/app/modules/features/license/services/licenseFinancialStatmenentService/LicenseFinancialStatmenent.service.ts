import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { LicenseProjectFinancialStatementDto } from "../../models/LicenseProjectFinancialStatementDto";
import { Observable } from "rxjs/internal/Observable";
import { Configuration } from "src/app/core/configurations/shared.config";
import { CoreResponseDTO } from "src/app/core/models/core.model";
import { map } from "rxjs";

@Injectable()
export class LicenseFinancialStatmenentService {

  constructor(private _httpClient: HttpClient) { }

  GetByLicenseProjectId(id: string) : Observable<CoreResponseDTO<LicenseProjectFinancialStatementDto>>  {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectFinancialStatementDto>>
      (`${Configuration.APIs.LicenseProjectFinancialStatement.GetByLicenseProjectId}/${id}`)
  }

  Save(obj: LicenseProjectFinancialStatementDto): Observable<CoreResponseDTO<LicenseProjectFinancialStatementDto>> {
    
    return this._httpClient.post<CoreResponseDTO<LicenseProjectFinancialStatementDto>>
      (Configuration.APIs.LicenseProjectFinancialStatement.Save,obj).pipe(
      map((res: CoreResponseDTO<LicenseProjectFinancialStatementDto>) => {
        return res;
      })
    )
  }
}
