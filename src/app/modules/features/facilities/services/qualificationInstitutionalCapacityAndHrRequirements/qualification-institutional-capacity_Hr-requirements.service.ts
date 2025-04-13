import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Configuration } from "src/app/core/configurations/shared.config";
import { CoreResponseDTO } from "src/app/core/models/core.model";
import { QualificationInstitutionalCapacityAndHrRequirementCreatUpdateDto, QualificationInstitutionalCapacityAndHrRequirementDto } from "../../dataModels/qualificationInstitutionalCapacityAndHrRequirement.model";

@Injectable()
export class QualificationInstitutionalCapacityAndHrRequirementsService {
    
    constructor(private _httpClient: HttpClient) { }

    private objSubject = new BehaviorSubject<QualificationInstitutionalCapacityAndHrRequirementDto>(new QualificationInstitutionalCapacityAndHrRequirementDto());
      
    private objSubject$ = this.objSubject.asObservable();
      
    getSubjectObj(): Observable<QualificationInstitutionalCapacityAndHrRequirementDto> {
      return this.objSubject$;
    }
    SetSubjectObj(LatestValue: QualificationInstitutionalCapacityAndHrRequirementDto) {
    return this.objSubject.next(LatestValue) ;
    }
  
  
    GetByFacilityId(facilityId: string): Observable<QualificationInstitutionalCapacityAndHrRequirementDto|null> {
      return this._httpClient.get<CoreResponseDTO<QualificationInstitutionalCapacityAndHrRequirementDto>>
        (`${Configuration.APIs.QualificationInstitutionalCapacityAndHrRequirement.GetByFacilityId}/${facilityId}`).pipe(
        map((res: CoreResponseDTO<QualificationInstitutionalCapacityAndHrRequirementDto>) => {
          return res.data ? res.data : null;
        })
      )
    }

    Save(obj: QualificationInstitutionalCapacityAndHrRequirementCreatUpdateDto): Observable<CoreResponseDTO<QualificationInstitutionalCapacityAndHrRequirementDto>> {
      if(!obj.id) obj.id = '00000000-0000-0000-0000-000000000000';
      
      return this._httpClient.post<CoreResponseDTO<QualificationInstitutionalCapacityAndHrRequirementDto>>
        (Configuration.APIs.QualificationInstitutionalCapacityAndHrRequirement.Save,obj).pipe(
        map((res: CoreResponseDTO<QualificationInstitutionalCapacityAndHrRequirementDto>) => {
          return res;
        })
      )
    }
    GetById(id: string) : Observable<QualificationInstitutionalCapacityAndHrRequirementCreatUpdateDto| null>{
      return this._httpClient.get<CoreResponseDTO<QualificationInstitutionalCapacityAndHrRequirementCreatUpdateDto>>
      (`${Configuration.APIs.QualificationInstitutionalCapacityAndHrRequirement.GetById}?id=${id}`).pipe(
        map((res: CoreResponseDTO<QualificationInstitutionalCapacityAndHrRequirementCreatUpdateDto>) => {
          return res.data ? res.data : null ;
        })
      )
    }
  
}