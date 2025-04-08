import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { HttpClient } from '@angular/common/http';
import { LicenseProjectRequestTemplateFileDto, RequestTemplateDetailsDto } from '../models/request-template-details-dto';
import { LicenseProjectRequestTypeEnum } from '../enums/license-project-request-type.enum';
import { CreateOrUpdateRequestTemplateDto } from '../models/create-update-request-template-dto';

@Injectable()

export class RequestTemplateService {
  selectedRequest$: BehaviorSubject<RequestTemplateDetailsDto[] | null> = new BehaviorSubject<RequestTemplateDetailsDto[] | null>(null);
  dataIsUpdate: EventEmitter<null> = new EventEmitter<null>()
  
  constructor(private _httpClient: HttpClient) {}

  getDetails(
    id: string
  ): Observable<RequestTemplateDetailsDto[]> {
    return this._httpClient
      .get<CoreResponseDTO<RequestTemplateDetailsDto[]>>(
        `${
          Configuration.APIs.RequestTemplate
            .GetDetails + id
        }`
      )
      .pipe(
        map((res: CoreResponseDTO<RequestTemplateDetailsDto[]>) => {
          return res.data as RequestTemplateDetailsDto[];
        })
      );
  }
  getLicenseProjectRequestTemplateFile(
    typeId: LicenseProjectRequestTypeEnum
  ): Observable<LicenseProjectRequestTemplateFileDto[]> {
    return this._httpClient
      .get<CoreResponseDTO<LicenseProjectRequestTemplateFileDto[]>>(
        `${
          Configuration.APIs.LicenseProjectRequestTemplateFile
            .GetLicenseProjectRequestTemplateFile + typeId
        }`
      )
      .pipe(
        map((res: CoreResponseDTO<LicenseProjectRequestTemplateFileDto[]>) => {
          return res.data as LicenseProjectRequestTemplateFileDto[];
        })
      );
  }
  saveRequestTemplate(
    dto: CreateOrUpdateRequestTemplateDto
  ): Observable<any> {
    return this._httpClient.post(
      `${Configuration.APIs.RequestTemplate.SaveRequestTemplate}`,
      dto
    );
  }
  
}
