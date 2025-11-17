import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import {
  LicenseProjectBusinessPaymentModel,
  CreateLicenseProjectBusinessPaymentModel,
  UpdateLicenseProjectBusinessPaymentModel,
  LicenseProjectBusinessPaymentTemplateModel,
  SaveAsTemplateModel,
  ApplyTemplateModel,
  LicenseProjectBusinessPaymentVersionDto
} from '../models/business-payment.model';
import { SysSettingsDto } from '../models/license-deposit-document-model/add-update-deposit-document-dto';

@Injectable()
export class LicenseProjectBusinessPaymentService {

  constructor(private _httpClient: HttpClient) {}

  createLicenseProjectBusinessPayment(dto: CreateLicenseProjectBusinessPaymentModel): Observable<LicenseProjectBusinessPaymentModel | null> {
    return this._httpClient.post<CoreResponseDTO<LicenseProjectBusinessPaymentModel>>(
      `${Configuration.APIs.LicenseProjectBusinessPayment.CreateLicenseProjectBusinessPayment}`, dto
    ).pipe(
      map((res: CoreResponseDTO<LicenseProjectBusinessPaymentModel>) => {
        return res.isDone ? res.data || null : null;
      })
    );
  }

  updateLicenseProjectBusinessPayment(dto: UpdateLicenseProjectBusinessPaymentModel): Observable<LicenseProjectBusinessPaymentModel | null> {
    return this._httpClient.put<CoreResponseDTO<LicenseProjectBusinessPaymentModel>>(
      `${Configuration.APIs.LicenseProjectBusinessPayment.UpdateLicenseProjectBusinessPayment}`, dto
    ).pipe(
      map((res: CoreResponseDTO<LicenseProjectBusinessPaymentModel>) => {
        return res.isDone ? res.data || null : null;
      })
    );
  }

  getLicenseProjectBusinessPaymentById(id: string): Observable<LicenseProjectBusinessPaymentModel | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectBusinessPaymentModel>>(
      `${Configuration.APIs.LicenseProjectBusinessPayment.GetLicenseProjectBusinessPaymentById}/${id}`
    ).pipe(
      map((res: CoreResponseDTO<LicenseProjectBusinessPaymentModel>) => {
        return res.isDone ? res.data || null : null;
      })
    );
  }

  getLicenseProjectBusinessPaymentVersions(projectId: string): Observable<LicenseProjectBusinessPaymentVersionDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectBusinessPaymentVersionDto[]>>(
      `${Configuration.APIs.LicenseProjectBusinessPayment.GetLicenseProjectBusinessPaymentVersions}/${projectId}`
    ).pipe(
      map((res: CoreResponseDTO<LicenseProjectBusinessPaymentVersionDto[]>) => {
        return res.isDone ? res.data || null : null;
      })
    );
  }

  getLicenseProjectBusinessPaymentsByProjectId(projectId: string): Observable<LicenseProjectBusinessPaymentModel[] | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectBusinessPaymentModel[]>>(
      `${Configuration.APIs.LicenseProjectBusinessPayment.GetLicenseProjectBusinessPaymentsByProjectId}/${projectId}`
    ).pipe(
      map((res: CoreResponseDTO<LicenseProjectBusinessPaymentModel[]>) => {
        return res.isDone ? res.data || null : null;
      })
    );
  }

  getLicenseProjectBusinessPaymentTemplates(projectId: string,isActive:boolean=true): Observable<LicenseProjectBusinessPaymentTemplateModel[] | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectBusinessPaymentTemplateModel[]>>(
      `${Configuration.APIs.LicenseProjectBusinessPayment.GetLicenseProjectBusinessPaymentTemplates}/${projectId}?isActive=${isActive}`
    ).pipe(
      map((res: CoreResponseDTO<LicenseProjectBusinessPaymentTemplateModel[]>) => {
        return res.isDone ? res.data || null : null;
      })
    );
  }

  saveLicenseProjectBusinessPaymentAsTemplate(dto: SaveAsTemplateModel): Observable<any> {
    return this._httpClient.post<CoreResponseDTO<any>>(
      `${Configuration.APIs.LicenseProjectBusinessPayment.SaveLicenseProjectBusinessPaymentAsTemplate}`,
      dto
    ).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone ? res.data || null : null;
      })
    );
  }

  applyLicenseProjectBusinessPaymentTemplate(dto: ApplyTemplateModel): Observable<any> {
    return this._httpClient.post<CoreResponseDTO<any>>(
      `${Configuration.APIs.LicenseProjectBusinessPayment.ApplyLicenseProjectBusinessPaymentTemplate}`,
      dto
    ).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone ? res.data || null : null;
      })
    );
  }

  deleteLicenseProjectBusinessPayment(id: string): Observable<any> {
    return this._httpClient.delete<CoreResponseDTO<any>>(
      `${Configuration.APIs.LicenseProjectBusinessPayment.DeleteLicenseProjectBusinessPayment}/${id}`
    ).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone ? res.data || null : null;
      })
    );
  }

  activateLicenseProjectBusinessPayment(id: string): Observable<any> {
    return this._httpClient.get<CoreResponseDTO<any>>(
      `${Configuration.APIs.LicenseProjectBusinessPayment.ActivateLicenseProjectBusinessPayment}/${id}`
    ).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone ? res.data || null : null;
      })
    );
  }

  deactivateLicenseProjectBusinessPayment(id: string): Observable<any> {
    return this._httpClient.get<CoreResponseDTO<any>>(
      `${Configuration.APIs.LicenseProjectBusinessPayment.DeactivateLicenseProjectBusinessPayment}/${id}`
    ).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone ? res.data || null : null;
      })
    );
  }

  

  getAllLicenseProjectBusinessPayments(): Observable<LicenseProjectBusinessPaymentModel[] | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseProjectBusinessPaymentModel[]>>(
      `${Configuration.APIs.LicenseProjectBusinessPayment.GetAllLicenseProjectBusinessPayments}`
    ).pipe(
      map((res: CoreResponseDTO<LicenseProjectBusinessPaymentModel[]>) => {
        return res.isDone ? res.data || null : null;
      })
    );
  }
  
  getAllConfigration(): Observable<SysSettingsDto[] | null> {
    return this._httpClient.get<CoreResponseDTO<SysSettingsDto[]>>(
      `${Configuration.APIs.LicenseProjectBusinessPayment.GetAllConfigration}`
    ).pipe(
      map((res: CoreResponseDTO<SysSettingsDto[]>) => {
        return res.isDone ? res.data || null : null;
      })
    );
  }
}