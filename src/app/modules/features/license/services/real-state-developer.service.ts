import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Configuration } from "src/app/core/configurations/shared.config";
import { CancelContractRequestDto, ContractStatusDto, GenerateContractRequestDto, GenerateContractResponseDto, GetBuyerContractResponseDto, GetDeveloperProjectsResponseDto, GetProjectDetailsResponseDto, GetProjectUnitContractDetailsResponseDto, GetProjectUnitDetailsResponseDto, GetProjectUnitsListResponseDto, GetUnitCodeTaxesFeesDto, LicenseProjectBusinessPaymentResponseDto, LicenseProjectBuyerContractListDto, LicenseProjectBuyerPaymentTypeDto, LicenseProjectBuyerUnitListFilterDto, LicenseProjectUnitCodeStatus, SaveContractRequestDto, SaveContractResponseDto, SubUnitTypesDto, SysBuyerTypeDto, UnitCodeStatusDto, UpdateContractStatusRequestDto } from "../models/real-state-developer-dto";
import { CoreResponseDTO } from "src/app/core/models/core.model";
import { Observable } from "rxjs";
import { Pagination } from "src/app/shared/models/pagination.model";
import { LicenseProjectBuyerContractFilterDto } from "../../real-estate-contributions-license/models/license-project-buyer-contracts-dto";
import { BaseResponse } from "src/app/shared/models/base-response";
import type { CustomerShortDto } from "../models/facility-short-dto";

@Injectable()
export class RealStateDeveloperService {
  setContractId(id:string): void {
    localStorage.setItem('contractId', id)
  }
  getContractIdFromLocalStorage(): string | null {
    return localStorage.getItem('contractId')
  }
  removeContractfromLocalStorage(): void {
    localStorage.removeItem('contractId')
  }

    setContractRequesId(id:string): void {
    localStorage.setItem('contractRequestId', id)
  }
  getContractRequestIdFromLocalStorage(): string | null {
    return localStorage.getItem('contractRequestId')
  }
  removeContractRequestfromLocalStorage(): void {
    localStorage.removeItem('contractRequestId')
  }

 constructor(private http: HttpClient) { }
   getDeveloperProjects(nationalNumber: string): Observable<CoreResponseDTO<GetDeveloperProjectsResponseDto[]>> {
    return this.http.get<CoreResponseDTO<GetDeveloperProjectsResponseDto[]>>(
      `${Configuration.APIs.RealStateDeveloper.GetDeveloperProjects}/${nationalNumber}`
    );
  }

  getDeveloperProjectDetails(licenseNumber: string): Observable<CoreResponseDTO<GetProjectDetailsResponseDto>> {
    return this.http.get<CoreResponseDTO<GetProjectDetailsResponseDto>>(
      `${Configuration.APIs.RealStateDeveloper.GetDeveloperProjectDetails}/${licenseNumber}`
    );
  }
  checkFacilityName(nationalNumber: string):Observable<CoreResponseDTO<any>> {
        let params = new HttpParams()
        params = params.set('nationalNumber', nationalNumber);
       return this.http.get<CoreResponseDTO<any>>(
      `${Configuration.APIs.RealStateDeveloper.CheckFacility}`,{params}
    );
  }
  getProjectUnitsList(
 filter :LicenseProjectBuyerUnitListFilterDto
  ): Observable<CoreResponseDTO<Pagination<GetProjectUnitsListResponseDto[]>>> {
    let params = new HttpParams()
      .set('licenseProjectId', filter.licenseProjectId)
      .set('pageNumber', filter.pageNumber.toString())
      .set('pageSize', filter.pageSize.toString());

    if (filter.statusId && +filter.statusId !== 0) {
      params = params.set('statusId', filter.statusId.toString());
    }

    if (filter.unitType && +filter.unitType !== 0) {
      params = params.set('unitType', filter.unitType.toString());
    }

    if (filter.searchText) {
      params = params.set('searchText', filter.searchText);
    }

    return this.http.get<CoreResponseDTO<Pagination<GetProjectUnitsListResponseDto[]>>>(
      `${Configuration.APIs.RealStateDeveloper.GetProjectUnitsList}`,
      { params }
    );
  }

  getProjectPaymentPlans(
    licenseProjectId: string
  ): Observable<CoreResponseDTO<LicenseProjectBusinessPaymentResponseDto[]>> {
    let params = new HttpParams()
    params = params.set('licenseProjectId', licenseProjectId);
    return this.http.get<CoreResponseDTO<LicenseProjectBusinessPaymentResponseDto[]>>(
      `${Configuration.APIs.RealStateDeveloper.GetProjectPaymentPlans}`,{params}
    );
  }

  getUnitDetails(unitCodeId: string): Observable<CoreResponseDTO<GetProjectUnitDetailsResponseDto>> {
    let params = new HttpParams()
    params = params.set('unitCodeId', unitCodeId);
    return this.http.get<CoreResponseDTO<GetProjectUnitDetailsResponseDto>>(
      `${Configuration.APIs.RealStateDeveloper.GetUnitDetails}`,{params}
    );
  }

  GetCustomerAddress(): Observable<CoreResponseDTO<string[]>> {
  
    return this.http.get<CoreResponseDTO<string[]>>(
      `${Configuration.APIs.Customer.GetCustomerAddress}`
    );
  }

    GetCommercialAddress(entity700Number:string): Observable<CoreResponseDTO<string[]>> {
  
    return this.http.get<CoreResponseDTO<string[]>>(
      `${Configuration.APIs.Customer.GetCommercialAddress}${entity700Number}`
    );
  }

   GetFacilityName(nationalNumber: string): Observable<CoreResponseDTO<string>> {
    let params = new HttpParams()
    params = params.set('CRNationalNumber', nationalNumber);
    return this.http.get<CoreResponseDTO<string>>(
      `${Configuration.APIs.facility.GetFacilityName}`,{params}
    );
  }


   VerifyCustomer(nidnumber: string,birthDateHijri:string): Observable<CoreResponseDTO<CustomerShortDto>> {
    return this.http.post<CoreResponseDTO<CustomerShortDto>>(
      `${Configuration.APIs.Customer.VerifyCustomer}`,{nidnumber,birthDateHijri}
    );
  }


  calculateUnitCodeTaxes(unitPrice: number): Observable<CoreResponseDTO<GetUnitCodeTaxesFeesDto>> {
    let params = new HttpParams()
    params = params.set('unitPrice', unitPrice);
    return this.http.get<CoreResponseDTO<GetUnitCodeTaxesFeesDto>>(
      `${Configuration.APIs.RealStateDeveloper.CalculateUnitCodeTaxes}`,{params}
    );
  }

  getBuyerTypes(): Observable<CoreResponseDTO<SysBuyerTypeDto[]>> {
    return this.http.get<CoreResponseDTO<SysBuyerTypeDto[]>>(
      `${Configuration.APIs.RealStateDeveloper.GetBuyerTypes}`
    );
  }

  saveContract(request: SaveContractRequestDto): Observable<CoreResponseDTO<SaveContractResponseDto>> {
    return this.http.post<CoreResponseDTO<SaveContractResponseDto>>(
      `${Configuration.APIs.RealStateDeveloper.SaveContract}`,
      request
    );
  }

  // المشترى - مراجعة وتوثيق العقد

  getContracts(
    filter: LicenseProjectBuyerContractFilterDto
  ): Observable<CoreResponseDTO<Pagination<LicenseProjectBuyerContractListDto>>> {
    return this.http.post<CoreResponseDTO<Pagination<LicenseProjectBuyerContractListDto>>>(
      `${Configuration.APIs.RealStateDeveloper.GetContracts}`,
      filter
    );
  }

  getBuyerContractsList(
    licenseProjectId: string,
    nidNumber: string
  ): Observable<CoreResponseDTO<GetBuyerContractResponseDto[]>> {
    const params = new HttpParams()
      .set('licenseProjectId', licenseProjectId)
      .set('nidNumber', nidNumber);

    return this.http.get<CoreResponseDTO<GetBuyerContractResponseDto[]>>(
      `${Configuration.APIs.RealStateDeveloper.GetBuyerContractsList}`,
      { params }
    );
  }

  updateContractStatus(request: UpdateContractStatusRequestDto): Observable<CoreResponseDTO<any>> {
    return this.http.post<CoreResponseDTO<any>>(
      `${Configuration.APIs.RealStateDeveloper.UpdateContractStatus}`,
      request
    );
  }

  getPaymentTypes(): Observable<CoreResponseDTO<LicenseProjectBuyerPaymentTypeDto[]>> {
    return this.http.get<CoreResponseDTO<LicenseProjectBuyerPaymentTypeDto[]>>(
      `${Configuration.APIs.RealStateDeveloper.GetPaymentTypes}`
    );
  }

  getContractStatus(): Observable<CoreResponseDTO<ContractStatusDto[]>> {
    return this.http.get<CoreResponseDTO<ContractStatusDto[]>>(
      `${Configuration.APIs.RealStateDeveloper.GetContractStatus}`
    );
  }
  generateContract(request: GenerateContractRequestDto): Observable<CoreResponseDTO<GenerateContractResponseDto>> {
    return this.http.post<CoreResponseDTO<GenerateContractResponseDto>>(
      `${Configuration.APIs.RealStateDeveloper.GenerateContract}`,
      request
    );
  }

  getContractDetails(contractId: string): Observable<CoreResponseDTO<GetProjectUnitContractDetailsResponseDto>> {
        const params = new HttpParams()
      .set('contractId', contractId)
    return this.http.get<CoreResponseDTO<GetProjectUnitContractDetailsResponseDto>>(
      `${Configuration.APIs.RealStateDeveloper.GetContractDetails}`,{params}
    );
  }
  sendOtp(contractId: string): Observable<BaseResponse<any>> {
    const params = new HttpParams()
      .set('contractId', contractId)
    return this.http.get<BaseResponse<any>>(
      `${Configuration.APIs.RealStateDeveloper.SendOtp}`,{params}
    );
  }
  getSubUnitTypes(): Observable<CoreResponseDTO<SubUnitTypesDto[]>> {
    return this.http.get<CoreResponseDTO<SubUnitTypesDto[]>>(
      `${Configuration.APIs.RealStateDeveloper.GetSubUnitTypes}`
    );
  }

  getUnitCodeStatus(): Observable<CoreResponseDTO<UnitCodeStatusDto[]>> {
    return this.http.get<CoreResponseDTO<UnitCodeStatusDto[]>>(
      `${Configuration.APIs.RealStateDeveloper.GetUnitCodeStatus}`
    );
  }

  cancelContract(request: CancelContractRequestDto): Observable<CoreResponseDTO<any>> {
    return this.http.post<CoreResponseDTO<any>>(
      `${Configuration.APIs.RealStateDeveloper.CancelContract}`,
      request
    );
  }
}
