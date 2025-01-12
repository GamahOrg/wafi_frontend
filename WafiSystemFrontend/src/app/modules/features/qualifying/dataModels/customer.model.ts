import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { nationality } from "./nationality.model";
import { facilityDTO } from "./request-details.model";

export interface Customer {
    customerCode: string;
    fullName: string;
    mobile1: string;
    mobile2: string;
    email: string;
    id: string;
    nidnumber: string;
    facility: null | facilityDTO
    jobTitle: string
    nationality: nationality | null;
    profileImageFile:SysFileManagerCreateUpdateDto|null;
    profileImageFileId:string;
    nationalityId: string

}
