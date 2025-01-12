import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Configuration } from "src/app/core/configurations/shared.config";
import { CoreResponseDTO } from "src/app/core/models/core.model";
import {
    ProjectCategoryDto,
    ProjectSubCategoryDto,
    ProjectTypeFullDto,
    QualificationProjectFullDto,
    QualificationTechnicalCapabilitiesRequirementCreateUpdateDto,
    QualificationTechnicalCapabilitiesRequirementFullDto
} from "../../dataModels/qualificationTechnicalCapabilitiesRequirement.model";

@Injectable()
export class TechnicalCapabilitiesRequirementsService {

    technicalCapabilitiesRequirementsBehaviorSubject: BehaviorSubject<QualificationTechnicalCapabilitiesRequirementFullDto> =
        new BehaviorSubject<QualificationTechnicalCapabilitiesRequirementFullDto>({} as QualificationTechnicalCapabilitiesRequirementFullDto);
    projectTOEdit: BehaviorSubject<QualificationProjectFullDto | undefined> =
        new BehaviorSubject<QualificationProjectFullDto | undefined>(undefined);

    constructor(private _httpClient: HttpClient) { }

    UpdateTechnicalCapabilitiesRequirementsBehaviorSubject(data: QualificationTechnicalCapabilitiesRequirementFullDto): void {
        this.technicalCapabilitiesRequirementsBehaviorSubject.next(data)
    }

    Save(technicalCapabilitiesRequirement: QualificationTechnicalCapabilitiesRequirementCreateUpdateDto): Observable<CoreResponseDTO<QualificationTechnicalCapabilitiesRequirementFullDto>> {
      if(!technicalCapabilitiesRequirement.id) technicalCapabilitiesRequirement.id = '00000000-0000-0000-0000-000000000000';

        return this._httpClient
            .post<CoreResponseDTO<QualificationTechnicalCapabilitiesRequirementFullDto>>(
                `${Configuration.APIs.QualificationTechnicalCapabilitiesRequirement.Save}`, technicalCapabilitiesRequirement)
            .pipe(
                map((res: CoreResponseDTO<QualificationTechnicalCapabilitiesRequirementFullDto>) => {
                    return res
                })
            )
    }

    GetByFacilityId(facilityId: string): Observable<QualificationTechnicalCapabilitiesRequirementFullDto> {
        return this._httpClient
            .get<CoreResponseDTO<QualificationTechnicalCapabilitiesRequirementFullDto>>(
                `${Configuration.APIs.QualificationTechnicalCapabilitiesRequirement.GetByFacilityId}/${facilityId}`)
            .pipe(
                map((res: CoreResponseDTO<QualificationTechnicalCapabilitiesRequirementFullDto>) => {
                    return res.data as QualificationTechnicalCapabilitiesRequirementFullDto;
                })
            )
    }


    GetProjectCategoryDropDown(licenseProjectId: string): Observable<ProjectCategoryDto[]> {
        return this._httpClient
            .get<CoreResponseDTO<ProjectCategoryDto[]>>(`${Configuration.APIs.ProjectCategory.GetAllSysProjectCategoryAsync}/${licenseProjectId}`)
            .pipe(
                map((res: CoreResponseDTO<ProjectCategoryDto[]>) => {
                    return res.data as ProjectCategoryDto[];
                })
            );
    }

    GetProjectSubCategoryDropDown(): Observable<ProjectSubCategoryDto[]> {
        return this._httpClient
            .get<CoreResponseDTO<ProjectSubCategoryDto[]>>(`${Configuration.APIs.ProjectSubCategory.Get}`)
            .pipe(
                map((res: CoreResponseDTO<ProjectSubCategoryDto[]>) => {
                    return res.data as ProjectSubCategoryDto[];
                })
            );
    }
    GetProjectCategory(): Observable<ProjectCategoryDto[]> {
        return this._httpClient
            .get<CoreResponseDTO<ProjectCategoryDto[]>>(`${Configuration.APIs.ProjectCategory.Get}`)
            .pipe(
                map((res: CoreResponseDTO<ProjectCategoryDto[]>) => {
                    return res.data as ProjectCategoryDto[];
                })
            );
    }
    GetProjectTypeDropDown(): Observable<ProjectTypeFullDto[]> {
        return this._httpClient
            .get<CoreResponseDTO<ProjectTypeFullDto[]>>(`${Configuration.APIs.ProjectType.Get}`)
            .pipe(
                map((res: CoreResponseDTO<ProjectTypeFullDto[]>) => {
                    return res.data as ProjectTypeFullDto[];
                })
            );
    }

    SaveQualificationProject(project: QualificationProjectFullDto): Observable<CoreResponseDTO<QualificationTechnicalCapabilitiesRequirementFullDto>> {
        return this._httpClient
        .post<CoreResponseDTO<QualificationTechnicalCapabilitiesRequirementFullDto>>(`${Configuration.APIs.QualificationProject.Save}`, project)
        .pipe(
            map((res: CoreResponseDTO<QualificationTechnicalCapabilitiesRequirementFullDto>) => {
                return res;
            })
        );
    }

    DeleteQualificationProject(projectId: string): Observable<CoreResponseDTO<any>> {
        return this._httpClient
        .delete<CoreResponseDTO<any>>(`${Configuration.APIs.QualificationProject.Delete}?id=${projectId}`)
        .pipe(
            map((res: CoreResponseDTO<any>) => {
                return res;
            })
        );
    }
}
