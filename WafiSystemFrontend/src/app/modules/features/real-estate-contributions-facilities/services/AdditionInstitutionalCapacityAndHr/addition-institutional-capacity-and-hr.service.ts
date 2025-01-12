import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { additionhrrequirementcreateupdatedto } from '../../dataModels/addition-hr-requirement-create-update-dto';
import { QualificationAdditionInstitutionalCapacityAndHrRequirementDto } from '../../dataModels/qualification-addition-institutional-capacity-and-hr-requirement-dto';

@Injectable()
export class AdditionInstitutionalCapacityAndHrService {

  constructor(private _httpClient: HttpClient) { }
  private hrSubject = new BehaviorSubject<QualificationAdditionInstitutionalCapacityAndHrRequirementDto>(new QualificationAdditionInstitutionalCapacityAndHrRequirementDto());

  private hrSubject$ = this.hrSubject.asObservable();
  getHrObj(): Observable<QualificationAdditionInstitutionalCapacityAndHrRequirementDto> {
    return this.hrSubject$;
  }
  SetHRObj(LatestValue: QualificationAdditionInstitutionalCapacityAndHrRequirementDto) {
    return this.hrSubject.next(LatestValue);
  }
  GetFacilityById(facilityId: string): Observable<QualificationAdditionInstitutionalCapacityAndHrRequirementDto> {

    return this._httpClient.get(`${Configuration.APIs.InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources.GetByFacilityId}/${facilityId}`).pipe(
      map((res: any) => {

        return res.data as QualificationAdditionInstitutionalCapacityAndHrRequirementDto;
      })
    )
  }
  GetById(id: string): Observable<additionhrrequirementcreateupdatedto | null> {
    return this._httpClient.get<CoreResponseDTO<additionhrrequirementcreateupdatedto>>
      (`${Configuration.APIs.InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources.GetById}?id=${id}`).pipe(
        map((res: CoreResponseDTO<additionhrrequirementcreateupdatedto>) => {
          return res.data ? res.data : null;
        })
      )
  }

  Create(model: additionhrrequirementcreateupdatedto): Observable<CoreResponseDTO<additionhrrequirementcreateupdatedto>> {
    if (!model.id) model.id = '00000000-0000-0000-0000-000000000000';

    return this._httpClient.post<CoreResponseDTO<additionhrrequirementcreateupdatedto>>
      (Configuration.APIs.InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources.Create, model).pipe(
        map((res: CoreResponseDTO<additionhrrequirementcreateupdatedto>) => {
          return res;
        })
      )
  }
  Update(model: additionhrrequirementcreateupdatedto): Observable<CoreResponseDTO<additionhrrequirementcreateupdatedto>> {
    return this._httpClient.put<CoreResponseDTO<additionhrrequirementcreateupdatedto>>
      (Configuration.APIs.InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources.Update, model).pipe(
        map((res: any) => {
          return res;
        })
      )
  }
  Save(model: additionhrrequirementcreateupdatedto): Observable<CoreResponseDTO<QualificationAdditionInstitutionalCapacityAndHrRequirementDto>> {
    if (!model.id) model.id = '00000000-0000-0000-0000-000000000000';

    return this._httpClient.post<CoreResponseDTO<additionhrrequirementcreateupdatedto>>
      (Configuration.APIs.InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources.Save, model).pipe(
        map((res: any) => {
          return res;
        })
      )
  }
}
