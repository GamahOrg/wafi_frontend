import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Configuration } from "src/app/core/configurations/shared.config";
import { CoreResponseDTO } from "src/app/core/models/core.model";
import { EmployeeFacilityRegistrationDto, RegistrationStatus } from "src/app/shared/models/customer.model";
import { facilityResponse } from "../models/facility-response";


@Injectable()

export class EmployeeCreateLicenseService {
  nextClickedEventEmmitter: EventEmitter<null> = new EventEmitter();
  previousClickedEventEmmitter: EventEmitter<null> = new EventEmitter();
  registrationStatus: BehaviorSubject<RegistrationStatus|null> = new BehaviorSubject<RegistrationStatus|null>(null);

  constructor(private _httpClient: HttpClient) { }



  // Facility
  FacilityRegister(CommercialRegisterNumber: string): Observable<EmployeeFacilityRegistrationDto | null> {
    return this._httpClient.get<CoreResponseDTO<EmployeeFacilityRegistrationDto>>(`${Configuration.APIs.facility.checkFacilityDataByCRNumber}/${CommercialRegisterNumber}`).pipe(
      map((res: CoreResponseDTO<EmployeeFacilityRegistrationDto>) => {
        return res.data ? res.data : null
      })
    )
  }

  CreateFacility(facilityResponse: facilityResponse): Observable<string | null> {
    return this._httpClient.post<CoreResponseDTO<string>>(Configuration.APIs.facility.createFacility, facilityResponse).pipe(
      map((res: CoreResponseDTO<string>) => {
        return res.isDone? res.data as string : null
      })
    )
  }

}

