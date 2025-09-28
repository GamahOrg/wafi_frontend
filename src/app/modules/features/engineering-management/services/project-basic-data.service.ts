import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Observable, map } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { BankingAccountDto } from '../../license/dataModels/banking-account-dto';
import { LicenseNatureTypeListDto } from '../models/license-nature-type-list-dto';
import { ProjectBasicDataCreateUpdateDto, ProjectBasicDataDto, ProjectCategoryDto, SysLicenseRequestTypeDto } from '../models/project-basic-data.dto';
import { DropDownNameDto, DropDownSubUnitTypeDto } from '../models/drop-down-name.dto';
import { ExternalProjectDataCreateUpdateDto, ExternalProjectDataDto, ProjectDocumentDataCreateUpdateDto, ProjectDocumentDataDto } from '../models/external-project-data-dto';

@Injectable()
export class ProjectBasicDataService {

  constructor(private _httpClient: HttpClient) { }

  GetBankingAccountByLicenseProjectId(licenseProjectId: string) {
    return this._httpClient.get<CoreResponseDTO<BankingAccountDto>>
      (`${Configuration.APIs.LicenseProject.GetBankingAccountByLicenseProjectId}/${licenseProjectId}`)
  }
  SaveBankingAccounAsync(model: BankingAccountDto): Observable<BankingAccountDto> {
    return this._httpClient.post<CoreResponseDTO<BankingAccountDto>>
      (Configuration.APIs.LicenseProject.SaveBankingAccounAsync, model).pipe(
        map((res: any) => {
          return res.data as BankingAccountDto;
        })
      );
  }
  GetLicenseNatureType(): Observable<LicenseNatureTypeListDto[]> {
    return this._httpClient
      .get<CoreResponseDTO<LicenseNatureTypeListDto[]>>(`${Configuration.APIs.SysLicenseNatureType.GetAll}`)
      .pipe(
        map((res: CoreResponseDTO<LicenseNatureTypeListDto[]>) => {
          return res.data as LicenseNatureTypeListDto[];
        })
      );
  }
  GetProjectDocumentDataByLicenseProjectId(licenseProjectId: string): Observable<ProjectDocumentDataDto> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProject.GetProjectDocumentDataByLicenseProjectId}/${licenseProjectId}`).pipe(
      map((res: any) => {
        return res.data as ProjectDocumentDataDto;
      })
    )
  }
  SaveProjectDocumentData(model: ProjectDocumentDataCreateUpdateDto): Observable<ProjectDocumentDataDto> {
    return this._httpClient.post<CoreResponseDTO<ProjectDocumentDataCreateUpdateDto>>
      (Configuration.APIs.LicenseProject.SaveProjectDocumentData, model).pipe(
        map((res: any) => {
          return res.data as ProjectDocumentDataDto;
        })
      )
  }
  GetExternalProjectDataByLicenseProjectId(licenseProjectId: string): Observable<ExternalProjectDataDto> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProject.GetExternalProjectDataByLicenseProjectId}/${licenseProjectId}`).pipe(
      map((res: any) => {
        return res.data as ExternalProjectDataDto;
      })
    )
  }
  SaveExternalProjectData(model: ExternalProjectDataCreateUpdateDto): Observable<ExternalProjectDataDto> {
    return this._httpClient.post<CoreResponseDTO<ExternalProjectDataCreateUpdateDto>>
      (Configuration.APIs.LicenseProject.SaveExternalProjectData, model).pipe(
        map((res: any) => {
          return res.data as ExternalProjectDataDto;
        })
      )
  }
  GetMainDataByLicenseProjectId(id: string) {
    return this._httpClient.get<CoreResponseDTO<ProjectBasicDataDto>>
      (`${Configuration.APIs.LicenseProject.GetMainDataByLicenseProjectId}/${id}`)
  }

  SaveMainData(obj: ProjectBasicDataCreateUpdateDto): Observable<CoreResponseDTO<ProjectBasicDataDto>> {

    return this._httpClient.post<CoreResponseDTO<ProjectBasicDataDto>>
      (Configuration.APIs.LicenseProject.SaveMainData, obj).pipe(

        map((res: CoreResponseDTO<ProjectBasicDataDto>) => {
          return res;
        })
      )
  }
  GetLicenseProjectScopeDropDown(): Observable<DropDownNameDto[]> {
    return this._httpClient
      .get<CoreResponseDTO<DropDownNameDto[]>>(`${Configuration.APIs.LicenseProjectScope.GetDropDown}`)
      .pipe(
        map((res: CoreResponseDTO<DropDownNameDto[]>) => {
          return res.data as DropDownNameDto[];
        })
      );
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
  GetAllProjectCategory(): Observable<ProjectCategoryDto[]> {
    return this._httpClient
      .get<CoreResponseDTO<ProjectCategoryDto[]>>(`${Configuration.APIs.ProjectCategory.Get}`)
      .pipe(
        map((res: CoreResponseDTO<ProjectCategoryDto[]>) => {
          return res.data as ProjectCategoryDto[];
        })
      );
  }
  GetSysLicenseProjectTypeDropDown(): Observable<DropDownSubUnitTypeDto[]> {
    return this._httpClient
      .get<CoreResponseDTO<DropDownSubUnitTypeDto[]>>(`${Configuration.APIs.SysLicenseProjectType.GetDropDown}`)
      .pipe(
        map((res: CoreResponseDTO<DropDownSubUnitTypeDto[]>) => {
          return res.data as DropDownSubUnitTypeDto[];
        })
      );
  }



  GetRequetTypeLicenseProjectId(licenseProjectId: string): Observable<SysLicenseRequestTypeDto> {
    return this._httpClient.get(`${Configuration.APIs.LicenseProject.GetRequetType}/${licenseProjectId}`).pipe(
      map((res: any) => {
        return res.data as SysLicenseRequestTypeDto;
      })
    )
  }

}