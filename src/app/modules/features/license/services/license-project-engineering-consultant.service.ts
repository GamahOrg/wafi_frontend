import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, map} from "rxjs";
import {
  LicenseProjectEngineeringConsultantCreateUpdateDto
} from '../dataModels/license-project-engineering-consultant/license-project-engineering-consultant-create-update-dto';
import {Configuration} from 'src/app/core/configurations/shared.config';
import {CoreResponseDTO} from 'src/app/core/models/core.model';
import {
  LicenseProjectEngineeringConsultantDto
} from '../dataModels/license-project-engineering-consultant/license-project-engineering-consultant-dto';
import { CustomerShortDto, FacilityShortDto } from '../models/facility-short-dto';

@Injectable()
export class LicenseProjectEngineeringConsultantService {
  baseUrl = Configuration.APIs.LicenseProjectEngineeringConsultant.baseUrl;

  constructor(public httpClient: HttpClient) {
  }

/*   validateCommercialRegister(commercialRegister: string, typeCode: string): Observable<CoreResponseDTO<CustomerShortDto>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectEngineeringConsultant.ValidateCommercialRegister}`;
    return this.httpClient.get<CoreResponseDTO<CustomerShortDto>>(url, {
      params: {
        commercialRegister,
        typeCode
      }
    });
  } */
  GetnumberOfMonths(licenseProjectId: string): Observable<any> {
    return this.httpClient.get(`${Configuration.APIs.LicenseProjectEngineeringConsultant.GetnumberOfMonths}/${licenseProjectId}`).pipe(
      map((res: any) => {
        return res.data ;
      })
    )
  }
  validateCommercialRegister(commercialRegister: string, typeCode: string, licenseProjectId: string | null): Observable<CoreResponseDTO<FacilityShortDto>> {
    let url = `${Configuration.APIs.facility.validateCommercialRegister}`;
    return this.httpClient.get(`${url}/${commercialRegister}/${typeCode}/${licenseProjectId}`).pipe(
      map((res: any) => {
        return res;
      }))
  }

  validateCommercialRegisterNumber(commercialRegister: string, typeCode: string, licenseProjectId: string | null, skipErrorToast: boolean = false): Observable<CoreResponseDTO<CustomerShortDto>> {
    let url = `${Configuration.APIs.facility.validateCommercialRegister}`;
    let headers = new HttpHeaders();
    if (skipErrorToast) {
      headers = headers.set('X-Skip-Error-Toast', 'true');
    }
    return this.httpClient.get(`${url}/${commercialRegister}/${typeCode}/${licenseProjectId}`, { headers }).pipe(
      map((res: any) => {
        return res;
      }))
  }
  ValidateCommercialRegisterNumberForAddingChangeAccountantRequest(commercialRegister: string, typeCode: string, licenseProjectId: string | null, skipErrorToast: boolean = false): Observable<CoreResponseDTO<CustomerShortDto>> {
    let url = `${Configuration.APIs.facility.ValidateCommercialRegisterNumberForAddingChangeAccountantRequest}`;
    let headers = new HttpHeaders();
    if (skipErrorToast) {
      headers = headers.set('X-Skip-Error-Toast', 'true');
    }
    return this.httpClient.get(`${url}/${commercialRegister}/${typeCode}/${licenseProjectId}`, { headers }).pipe(
      map((res: any) => {
        return res;
      }))
  }

  updateAsync(model: LicenseProjectEngineeringConsultantCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectEngineeringConsultantDto>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectEngineeringConsultant.Update}`;
    return this.httpClient.put<CoreResponseDTO<LicenseProjectEngineeringConsultantDto>>(url, model);
  }

  createAsync(model: LicenseProjectEngineeringConsultantCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectEngineeringConsultantDto>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectEngineeringConsultant.Create}`;
    return this.httpClient.post<CoreResponseDTO<LicenseProjectEngineeringConsultantDto>>(url, model);
  }

  getAsync(licenseProjectId: any): Observable<CoreResponseDTO<LicenseProjectEngineeringConsultantDto>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectEngineeringConsultant.Get}`;
    return this.httpClient.get<CoreResponseDTO<LicenseProjectEngineeringConsultantDto>>(`${url}`, {
      params: {id: licenseProjectId}
    });
  }

  fawryLicenseUpdateAsync(model: LicenseProjectEngineeringConsultantCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectEngineeringConsultantDto>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectEngineeringConsultant.FawryLicenseUpdate}`;
    return this.httpClient.put<CoreResponseDTO<LicenseProjectEngineeringConsultantDto>>(url, model);
  }

  fawryLicenseUpdateComplatedInfo(model: LicenseProjectEngineeringConsultantCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectEngineeringConsultantDto>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectEngineeringConsultant.FawryLicenseUpdateComplatedInfo}`;
    return this.httpClient.put<CoreResponseDTO<LicenseProjectEngineeringConsultantDto>>(url, model);
  }

  fawryLicenseCreateAsync(model: LicenseProjectEngineeringConsultantCreateUpdateDto): Observable<CoreResponseDTO<LicenseProjectEngineeringConsultantDto>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectEngineeringConsultant.FawryLicenseCreate}`;
    return this.httpClient.post<CoreResponseDTO<LicenseProjectEngineeringConsultantDto>>(url, model);
  }

  fawryLicenseGetAsync(licenseProjectId: any): Observable<CoreResponseDTO<LicenseProjectEngineeringConsultantDto>> {
    let url = `${this.baseUrl}${Configuration.APIs.LicenseProjectEngineeringConsultant.FawryLicenseGet}`;
    return this.httpClient.get<CoreResponseDTO<LicenseProjectEngineeringConsultantDto>>(`${url}`, {
      params: {id: licenseProjectId}
    });
  }

  
}
