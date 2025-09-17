import { internalStatusId } from "../../qualifying/dataModels/request-list.model";
import { Customer } from "../../real-estate-contributions-qualifying/dataModels/customer.model";

export interface LicenseRequest {
    id: string,
    isRenewal: boolean;
    assignedOn: Date,
    requestCode: string,
    licenseRequestTypeId: string,
    period: number,
    price: number,
    sentOn: Date,
    startOn: Date,
    endOn: Date | null,
    ownerEmployeeId: null,
    requestOn: Date,
    isStudyNotAvailable: boolean,
    internalStatusId: internalStatusId,
    externalStatusId: number,
    internalStatus: null,
    externalStatus: null,
    isLocked: boolean,
    lockedOn: Date,
    lockedByEmployeeId: null,
    availableForRenew: null,
    lockReason: null,
    periodTypeId: number,
    periodType: periodType
    facility: {
        facilityCode: string;
        commercialRegisterNumber: string;
        facilityName: string;
        id: string;
    },
    customer: Customer,
    licenseRequestType: {
        name: string;
    }


}
export interface periodType {
    name: string;
    id: number
} 