import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Configuration } from "src/app/core/configurations/shared.config";
import { CoreResponseDTO } from "src/app/core/models/core.model";
import { AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto, AdditionTechnicalCapabilitiesRequirementsDto } from "../../dataModels/additionTechnicalCapabilitiesRequirements.model";
import { ProjectCategoryDto, ProjectSubCategoryDto, ProjectTypeFullDto, QualificationTechnicalCapabilitiesRequirementFullDto } from "../../dataModels/qualificationTechnicalCapabilitiesRequirement.model";

@Injectable()
export class AdditionTechnicalCapabilitiesRequirementsService {

  constructor(private _httpClient: HttpClient) { }

  private additionTechnicalCapSubject = new BehaviorSubject<AdditionTechnicalCapabilitiesRequirementsDto>(new AdditionTechnicalCapabilitiesRequirementsDto());

  private additionTechnicalCapSubject$ = this.additionTechnicalCapSubject.asObservable();

  getAdditionTechnicalCapabilityObj(): Observable<AdditionTechnicalCapabilitiesRequirementsDto> {
    return this.additionTechnicalCapSubject$;
  }
  SetAdditionTechnicalCapabilityObj(LatestValue: AdditionTechnicalCapabilitiesRequirementsDto) {
    this.additionTechnicalCapSubject.next(LatestValue);
  }


  GetByFacilityId(facilityId: string): Observable<AdditionTechnicalCapabilitiesRequirementsDto | null> {
    return this._httpClient.get<CoreResponseDTO<AdditionTechnicalCapabilitiesRequirementsDto>>
      (`${Configuration.APIs.QualificationAdditionTechnicalCapabilitiesRequirement.GetByFacilityId}/${facilityId}`).pipe(
        map((res: CoreResponseDTO<AdditionTechnicalCapabilitiesRequirementsDto>) => {
          return res.data ? res.data : null;
        })
      )
  }

  Save(obj: AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto): Observable<CoreResponseDTO<AdditionTechnicalCapabilitiesRequirementsDto>> {
    if (!obj.id) obj.id = '00000000-0000-0000-0000-000000000000';
    return this._httpClient.post<CoreResponseDTO<AdditionTechnicalCapabilitiesRequirementsDto>>
      (Configuration.APIs.QualificationAdditionTechnicalCapabilitiesRequirement.Save, obj).pipe(
        map((res: CoreResponseDTO<AdditionTechnicalCapabilitiesRequirementsDto>) => {
          return res;
        })
      )
  }
  GetById(id: string): Observable<AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto | null> {
    return this._httpClient.get<CoreResponseDTO<AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto>>
      (`${Configuration.APIs.QualificationAdditionTechnicalCapabilitiesRequirement.GetById}?id=${id}`).pipe(
        map((res: CoreResponseDTO<AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto>) => {
          return res.data ? res.data : null;
        })
      )
  }

  Create(model: AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto): Observable<CoreResponseDTO<AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto>> {
    if (!model.id) model.id = '00000000-0000-0000-0000-000000000000';

    return this._httpClient.post<CoreResponseDTO<AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto>>
      (Configuration.APIs.QualificationAdditionTechnicalCapabilitiesRequirement.Create, model).pipe(
        map((res: CoreResponseDTO<AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto>) => {
          return res;
        })
      )
  }
  Update(model: AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto): Observable<CoreResponseDTO<AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto>> {
    return this._httpClient.put<CoreResponseDTO<AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto>>
      (Configuration.APIs.QualificationAdditionTechnicalCapabilitiesRequirement.Update, model).pipe(
        map((res: CoreResponseDTO<AdditionTechnicalCapabilitiesRequirementsCreatUpdateDto>) => {
          return res;
        })
      )
  }

}