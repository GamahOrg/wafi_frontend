import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ApprovalDeedConstructionDto, DeedData, FawriaLicenseDeedAndConstructionLicenseDto, FawriaLicenseDeedAndConstructionLicenseResponseDto, OwnersDto, ProjectLandDeedCreateUpdateDto, ProjectLandDeedDto, type SaveLicenseProjectDeed } from '../dataModels/project-land-deed.dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { DropDownSubUnitTypeDto } from '../dataModels/drop-down-name.dto';

@Injectable()
export class CorrectionProjectLandDeedService {

  constructor(private _httpClient: HttpClient) { }

  private objSubject = new BehaviorSubject<ProjectLandDeedDto>(new ProjectLandDeedDto());
  private deedIntegrationResponse = new BehaviorSubject<DeedData>(new DeedData());

  private objSubject$ = this.objSubject.asObservable();
  private listObjSubject = new BehaviorSubject<ProjectLandDeedDto[]>([]);
  private listObjSubject$ = this.listObjSubject.asObservable();

  private deedIntegrationResponse$ = this.deedIntegrationResponse.asObservable();
  getDeedIntegrationResponseDto(): Observable<DeedData> {
    return this.deedIntegrationResponse$;
  }
  SetDeedIntegrationResponseDto(LatestValue: DeedData) {
    return this.deedIntegrationResponse.next(LatestValue);
  }

  getSubjectObj(): Observable<ProjectLandDeedDto> {
    return this.objSubject$;
  }
  SetSubjectObj(LatestValue: ProjectLandDeedDto) {
    return this.objSubject.next(LatestValue);
  }
  getSubjectListObjs(): Observable<ProjectLandDeedDto[]> {
    return this.listObjSubject$;
  }
  SetSubjectListObjs(LatestValue: ProjectLandDeedDto[]) {
    return this.listObjSubject.next(LatestValue);
  }

  GetByLicenseProjectId(id: string) {
    return this._httpClient.get<CoreResponseDTO<ProjectLandDeedDto[]>>
      (`${Configuration.APIs.CorrectionLicenseProjectDeed.GetByLicenseProjectId}/${id}`).pipe(
        map((res: CoreResponseDTO<ProjectLandDeedDto[]>) => {
          return res.data;
        })
      )
  }

  GetDeedConstructionApprovalList(id: string) {
    return this._httpClient.get<CoreResponseDTO<ApprovalDeedConstructionDto[]>>
      (`${Configuration.APIs.CorrectionLicenseProjectDeed.GetDeedConstructionApprovalList}/${id}`).pipe(
        map((res: CoreResponseDTO<ApprovalDeedConstructionDto[]>) => {
          return res.data;
        })
      )
  }

  Save(obj: ProjectLandDeedDto): Observable<CoreResponseDTO<ProjectLandDeedDto[]>> {
    return this._httpClient.post<CoreResponseDTO<ProjectLandDeedDto[]>>
      (Configuration.APIs.CorrectionLicenseProjectDeed.Save, obj).pipe(
        map((res: CoreResponseDTO<ProjectLandDeedDto[]>) => {
          return res;
        })
      )
  }

  SaveDeedData(obj: SaveLicenseProjectDeed): Observable<CoreResponseDTO<ProjectLandDeedDto[]>> {
    return this._httpClient.post<CoreResponseDTO<ProjectLandDeedDto[]>>
      (Configuration.APIs.CorrectionLicenseProjectDeed.SaveDeedData, obj).pipe(
        map((res: CoreResponseDTO<ProjectLandDeedDto[]>) => {
          return res;
        })
      )
  }

  UpdateDeedOwners(obj: OwnersDto): Observable<CoreResponseDTO<ProjectLandDeedDto[]>> {
    return this._httpClient.post<CoreResponseDTO<ProjectLandDeedDto[]>>
      (Configuration.APIs.CorrectionLicenseProjectDeed.UpdateDeedOwners, obj).pipe(
        map((res: CoreResponseDTO<ProjectLandDeedDto[]>) => {
          return res;
        })
      )
  }

  ValidateDeedInfo(obj: ProjectLandDeedCreateUpdateDto): Observable<CoreResponseDTO<DeedData>> {
    return this._httpClient.post<CoreResponseDTO<DeedData>>
      (Configuration.APIs.CorrectionLicenseProjectDeed.ValidateDeedInfoByNumber, obj).pipe(
        map((res: CoreResponseDTO<DeedData>) => {
          return res;
        })
      )
  }

  Delete(id: string): Observable<any> {
    return this._httpClient.delete<any>
      (`${Configuration.APIs.CorrectionLicenseProjectDeed.Delete}?id=${id}`).pipe(
        map((res: any) => {
          return res;
        })
      )
  }

  GetSysLicenseProjectLandOwnerDeedTypeDropDown(): Observable<DropDownSubUnitTypeDto[]> {
    return this._httpClient
      .get<CoreResponseDTO<DropDownSubUnitTypeDto[]>>(`${Configuration.APIs.SysLicenseProjectLandOwnerDeedType.GetDropDown}`)
      .pipe(
        map((res: CoreResponseDTO<DropDownSubUnitTypeDto[]>) => {
          return res.data as DropDownSubUnitTypeDto[];
        })
      );
  }

  FawriaLicenseValidateIntegration(obj: FawriaLicenseDeedAndConstructionLicenseDto): Observable<CoreResponseDTO<FawriaLicenseDeedAndConstructionLicenseResponseDto>> {
    return this._httpClient.post<CoreResponseDTO<FawriaLicenseDeedAndConstructionLicenseResponseDto>>
      (Configuration.APIs.CorrectionLicenseProjectDeed.FawriaLicenseDeedAndConstructionLicense, obj).pipe(
        map((res: CoreResponseDTO<FawriaLicenseDeedAndConstructionLicenseResponseDto>) => {
          return res;
        })
      )
  }

  SaveFawriaLicenseDeedAndConstructionLicense(obj: FawriaLicenseDeedAndConstructionLicenseResponseDto): Observable<CoreResponseDTO<any>> {
    return this._httpClient.post<CoreResponseDTO<any>>
      (Configuration.APIs.CorrectionLicenseProjectDeed.SaveFawriaLicenseDeedAndConstructionLicense, obj).pipe(
        map((res: CoreResponseDTO<any>) => {
          return res;
        })
      )
  }

  GetFawriaLicenseDeedAndConstructionLicenseByLicenseProjectId(id: string) {
    return this._httpClient.get<CoreResponseDTO<FawriaLicenseDeedAndConstructionLicenseResponseDto>>
      (`${Configuration.APIs.CorrectionLicenseProjectDeed.GetFawriaLicenseDeedAndConstructionLicenseByLicenseProjectId}/${id}`).pipe(
        map((res: CoreResponseDTO<FawriaLicenseDeedAndConstructionLicenseResponseDto>) => {
          return res.data;
        })
      )
  }

  /**
   * Retrieves all deed details including construction license data for update operations.
   * Used when IsVerifiedByIntegration is true to display existing deed data without re-verification.
   * @param deedId The deed ID to retrieve details for
   */
  GetDeedDetailsById(deedId: string): Observable<CoreResponseDTO<FawriaLicenseDeedAndConstructionLicenseResponseDto>> {
    return this._httpClient.get<CoreResponseDTO<FawriaLicenseDeedAndConstructionLicenseResponseDto>>
      (`${Configuration.APIs.CorrectionLicenseProjectDeed.GetDeedDetailsById}/${deedId}`).pipe(
        map((res: CoreResponseDTO<FawriaLicenseDeedAndConstructionLicenseResponseDto>) => {
          return res;
        })
      )
  }

}
