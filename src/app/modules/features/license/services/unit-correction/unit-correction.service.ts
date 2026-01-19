import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {
  correctionUnitsModel,
  DeedsTabData,
  UnitCorrectionModel,
  UnitTypesTabData,
  //Zone,
  ZonesAndBlocksTabData,
  type Unit,
} from '../../models/unit-correction.model';
import { ArchitecturalDesignFilesDto } from '../../dataModels/architectural-design-files.dto';
import { ConstructionLicenseDto } from '../../dataModels/construction-license.dto';
import type { licenseProjectModels, ProjectUnit } from '../../models/project-units';
import type { ProjectSubUnitDto } from '../../dataModels/project-sub-unit.dto';
import type { ProjectUnitCodeDto } from '../../dataModels/project-unit-code.dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { HttpClient } from '@angular/common/http';
import { Zone } from '../../models/zone.model';

@Injectable({
  providedIn: 'root'
})
export class UnitCorrectionService {

  constructor(private _httpClient: HttpClient) { }

  unitsCorrectionData$: BehaviorSubject<UnitCorrectionModel | null> =
    new BehaviorSubject<UnitCorrectionModel | null>(null);
  zonesAndBlocksTabData$: BehaviorSubject<ZonesAndBlocksTabData | null> =
    new BehaviorSubject<ZonesAndBlocksTabData | null>(null);

  unitTypesTabData$: BehaviorSubject<UnitTypesTabData | null> =
    new BehaviorSubject<UnitTypesTabData | null>(null);





  zonesData$: BehaviorSubject<Zone[]> =
    new BehaviorSubject<Zone[]>([]);

  blocksData$: BehaviorSubject<Unit[]> =
    new BehaviorSubject<Unit[]>([]);

  licenseProjectSubUnitsData$: BehaviorSubject<ProjectSubUnitDto[]> =
    new BehaviorSubject<ProjectSubUnitDto[]>([]);

  licenseProjectModelsData$: BehaviorSubject<licenseProjectModels[]> =
    new BehaviorSubject<licenseProjectModels[]>([]);

  licenseProjectSubUnitsListCodesData$: BehaviorSubject<ProjectUnitCodeDto[]> =
    new BehaviorSubject<ProjectUnitCodeDto[]>([]);

  licenseProjectDesignFilesTabData$: BehaviorSubject<
    ArchitecturalDesignFilesDto | null
  > = new BehaviorSubject<ArchitecturalDesignFilesDto | null>(null);

  deedsTabData$: BehaviorSubject<DeedsTabData | null> =
    new BehaviorSubject<DeedsTabData | null>(null);

  constructionLicensesTabData$: BehaviorSubject<ConstructionLicenseDto[] | null> =
    new BehaviorSubject<ConstructionLicenseDto[] | null>(null);


  setUnitsCorrectionData(data: UnitCorrectionModel | null): void {
    this.unitsCorrectionData$.next(data);
  }
  getUnitsCorrectionData(): Observable<UnitCorrectionModel | null> {
    return this.unitsCorrectionData$.asObservable();
  }

  setZonesAndBlocksTabData(data: ZonesAndBlocksTabData | null): void {
    this.zonesAndBlocksTabData$.next(data);
  }
  getZonesAndBlocksTabData(): Observable<ZonesAndBlocksTabData | null> {
    return this.zonesAndBlocksTabData$.asObservable();
  }
  setUnitTypesTabData(data: UnitTypesTabData | null): void {
    this.unitTypesTabData$.next(data);
  }
  getUnitTypesTabData(): Observable<UnitTypesTabData | null> {
    return this.unitTypesTabData$.asObservable();
  }

  projectUnitsData$: BehaviorSubject<ProjectUnit[]> =
    new BehaviorSubject<ProjectUnit[]>([]);

  setProjectUnits(data: ProjectUnit[]): void {
    this.projectUnitsData$.next(data);
  }

  getProjectUnits(): Observable<ProjectUnit[]> {
    return this.projectUnitsData$.asObservable();
  }
  setZonesTabData(data: Zone[]): void {
    this.zonesData$.next(data);
  }
  getZonesTabData(): Observable<Zone[]> {
    return this.zonesData$.asObservable();
  }


  setBlockOrBuildingsTabData(data: Unit[]): void {
    this.blocksData$.next(data);
  }
  getBlockOrBuildingsTabData(): Observable<Unit[]> {
    return this.blocksData$.asObservable();
  }


  setSubUnitsTabData(data: ProjectSubUnitDto[]): void {
    this.licenseProjectSubUnitsData$.next(data);
  }

  getSubUnitsTabData(): Observable<ProjectSubUnitDto[]> {
    return this.licenseProjectSubUnitsData$.asObservable();
  }


  setModelsTabData(data: licenseProjectModels[]): void {
    this.licenseProjectModelsData$.next(data);
  }
  getModelsTabData(): Observable<licenseProjectModels[]> {
    return this.licenseProjectModelsData$.asObservable();
  }


  setSubUnitsListCodesTabData(data: ProjectUnitCodeDto[]): void {
    this.licenseProjectSubUnitsListCodesData$.next(data);
  }
  getSubUnitsListCodesTabData(): Observable<ProjectUnitCodeDto[]> {
    return this.licenseProjectSubUnitsListCodesData$.asObservable();
  }

  setLicenseProjectDesignFilesTabData(
    data: ArchitecturalDesignFilesDto | null
  ): void {
    this.licenseProjectDesignFilesTabData$.next(data);
  }
  getLicenseProjectDesignFilesTabData(): Observable<
    ArchitecturalDesignFilesDto | null
  > {
    return this.licenseProjectDesignFilesTabData$.asObservable();
  }


  setDeedsTabData(data: DeedsTabData | null): void {
    this.deedsTabData$.next(data);
  }
  getDeedsTabData(): Observable<DeedsTabData | null> {
    return this.deedsTabData$.asObservable();
  }
  setConstructionLicensesTabData(data: ConstructionLicenseDto[] | null): void {
    this.constructionLicensesTabData$.next(data);
  }
  getConstructionLicensesTabData(): Observable<ConstructionLicenseDto[] | null> {
    return this.constructionLicensesTabData$.asObservable();
  }


  GetCorrectedUnitDataByLicenseProjectId(licenseProjectId: string): Observable<correctionUnitsModel> {
    return this._httpClient.get<CoreResponseDTO<correctionUnitsModel>>(
      `${Configuration.APIs.CorrectedUnitRequest.GetCorrectedUnitDataByLicenseProjectId}/${licenseProjectId}`
    ).pipe(
      map((res: CoreResponseDTO<correctionUnitsModel>) => {
        let data = res.data as correctionUnitsModel;
        this.setZonesTabData(data.zones);
        this.setBlockOrBuildingsTabData(data.blocks);
        this.setSubUnitsTabData(data.licenseProjectSubUnits);
        this.setModelsTabData(data.licenseProjectModels);
        this.setSubUnitsListCodesTabData(data.licenseProjectSubUnitsListCodes);
        this.setLicenseProjectDesignFilesTabData(data.licenseProjectDesignFiles);
        this.setDeedsTabData(data.deedsData);
        this.setConstructionLicensesTabData(data.constructionLicensesData);
        return data;
      })
    );
  }

  CheckCorrectingUnitAvailability(requestId: string): Observable<any> {
    return this._httpClient.get<CoreResponseDTO<any>>(
      `${Configuration.APIs.CorrectedUnitRequest.CheckCorrectingUnitAvailability}/${requestId}`
    ).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res;
      })
    );
  }
}
