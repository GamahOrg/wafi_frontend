import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { RegisterationCustomerResponseDto, RegistrationResponse, RegistrationStatus, customerResponse, facilityResponse, registration, FacilityPreviewResponse, LinkCustomerToFacilityRequest } from 'src/app/shared/models/customer.model';
import { contactFE } from '../../models/registration.model';
@Injectable()
export class RegistrationService {
  userDataUpdatedEventEmitter: EventEmitter<customerResponse> = new EventEmitter();
  nextClickedEventEmmitter: EventEmitter<null> = new EventEmitter();
  previousClickedEventEmmitter: EventEmitter<null> = new EventEmitter();
  registrationStatus: BehaviorSubject<RegistrationStatus|null> = new BehaviorSubject<RegistrationStatus|null>(null);
  registrationObj: BehaviorSubject<registration | null> = new BehaviorSubject<registration | null>(null);
  customerMobile:  BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  constructor(private _httpClient: HttpClient) { }

  // Customer 
  CustomerRegister(registrationObj: registration): Observable<CoreResponseDTO<RegistrationResponse>> {
    return this._httpClient.post<CoreResponseDTO<RegistrationResponse>>(`${Configuration.APIs.Customer.Register}`, registrationObj).pipe(
      map((res: CoreResponseDTO<RegistrationResponse>) => {
        return res as CoreResponseDTO<RegistrationResponse>
      })
    )
  }

  // Facility
  FacilityRegister(CommercialRegisterNumber: string, customerId: string): Observable<facilityResponse | null> {
    return this._httpClient.get<CoreResponseDTO<facilityResponse>>(`${Configuration.APIs.facility.Register}/${CommercialRegisterNumber}/${customerId}`).pipe(
      map((res: CoreResponseDTO<facilityResponse>) => {
        return res.data ? res.data : null
      })
    )
  }

  GetFacilityData(CommercialRegisterNumber: string, customerId: string): Observable<CoreResponseDTO<FacilityPreviewResponse>> {
    return this._httpClient.get<CoreResponseDTO<FacilityPreviewResponse>>(
      `${Configuration.APIs.facility.GetFacilityData}/${CommercialRegisterNumber}/${customerId}`
    );
  }

  LinkCustomerToFacility(input: LinkCustomerToFacilityRequest): Observable<CoreResponseDTO<facilityResponse>> {
    return this._httpClient.post<CoreResponseDTO<facilityResponse>>(
      Configuration.APIs.facility.LinkCustomerToFacility,
      input
    );
  }

  // Contact
  updateContact(contactInfo: contactFE): Observable<CoreResponseDTO<RegisterationCustomerResponseDto>> {
    return this._httpClient.put<CoreResponseDTO<RegisterationCustomerResponseDto>>(Configuration.APIs.Contact.Update, contactInfo).pipe(
      map((res: CoreResponseDTO<RegisterationCustomerResponseDto>) => {
        return res as CoreResponseDTO<RegisterationCustomerResponseDto>
      })
    )
  }



}
