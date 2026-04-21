import { Injectable } from '@angular/core';
import {
  FacilityTypeCategory,
  customerResponse,
} from '../../../shared/models/customer.model';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseResponse } from '../../../shared/models/base-response';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from '../../models/core.model';
import { LoginUserTypeEnum } from 'src/app/modules/auth/models/login.model';
import { EmployeeRegistrationDto } from 'src/app/modules/features/license/models/employee-registration-dto';
import { UserTypeEnum } from 'src/app/modules/features/engineering-management/enums/user-type.enum';

@Injectable()
export class UserDataService {
  customerData$: BehaviorSubject<customerResponse | null> =
    new BehaviorSubject<customerResponse | null>(null);
  constructor(private _httpClient: HttpClient) {}
  // API
  GetCustomer(
    loginUserType: LoginUserTypeEnum,
  ): Observable<customerResponse | null> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('loginUserTypeEnum', loginUserType);

    return this._httpClient
      .get<
        BaseResponse<customerResponse>
      >(`${Configuration.APIs.Customer.GetById}`, { params: queryParams })
      .pipe(
        map((res: BaseResponse<customerResponse>) => {
          if (res.data) {
            return res.data as customerResponse;
          } else {
            return null;
          }
        }),
      );
  }

  GetUserType(id: string): Observable<UserTypeEnum | null> {
    return this._httpClient
      .get<
        BaseResponse<UserTypeEnum>
      >(`${Configuration.APIs.Customer.GetUserType}` + '/' + id)
      .pipe(
        map((res: BaseResponse<UserTypeEnum>) => {
          if (res.data) {
            return res.data as UserTypeEnum;
          } else {
            return null;
          }
        }),
      );
  }

  // local Storage
  setCustomerDataInLocalStorage(customerData: customerResponse): void {
    let customerDataStringified = JSON.stringify(customerData);
    localStorage.setItem('customerData', customerDataStringified);
    this.customerData$.next(customerData);
  }
  getCustomerDataFromLocalStorage(): customerResponse | null {
    let CustomerData = localStorage.getItem('customerData');
    return CustomerData && JSON.parse(CustomerData);
    // return this.customerData$.asObservable()
  }
  removeCustomerDatafromLocalStorage(): void {
    localStorage.removeItem('customerData');
  }
  // Observable method
  getCustomerData(): Observable<customerResponse | null> {
    return this.customerData$.asObservable();
  }
  getEmployeeDataFromLocalStorage(): EmployeeRegistrationDto | null {
    let EmployeeData = localStorage.getItem('EmployeeData');
    return EmployeeData && JSON.parse(EmployeeData);
    // return this.EmployeeData$.asObservable()
  }
  updateCustomerData(customerData: customerResponse) {
    this.customerData$.next(customerData);
  }
  getFacilityQualificationTypeCode(
    facilityId: string,
  ): Observable<string | null> {
    return this._httpClient
      .get<
        CoreResponseDTO<string>
      >(`${Configuration.APIs.LicenseProjectBuyer.GetFacilityQualificationTypeCode}/${facilityId}`)
      .pipe(
        map((res: CoreResponseDTO<string>) => {
          return res.data ?? null;
        }),
      );
  }
  getFacilityTypeCategory(
    facilityId: string,
  ): Observable<FacilityTypeCategory | null> {
    return this._httpClient
      .get<
        CoreResponseDTO<FacilityTypeCategory>
      >(`${Configuration.APIs.facility.getFacilityTypeCategory}/${facilityId}`)
      .pipe(
        map((res: CoreResponseDTO<FacilityTypeCategory>) => {
          return res.data ?? null;
        }),
      );
  }

  // FacilityTypeCategory localStorage
  setFacilityTypeCategoryInLocalStorage(category: FacilityTypeCategory): void {
    localStorage.setItem('facilityTypeCategory', category.toString());
  }
  getFacilityTypeCategoryFromLocalStorage(): FacilityTypeCategory | null {
    const value = localStorage.getItem('facilityTypeCategory');
    return value ? (Number(value) as FacilityTypeCategory) : null;
  }

    removeFacilityTypeCategoryFromLocalStorage() {
      localStorage.removeItem('facilityTypeCategory');
  }
}
