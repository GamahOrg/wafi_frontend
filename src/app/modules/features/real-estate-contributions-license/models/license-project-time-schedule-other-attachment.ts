import { FileManagerBE } from "../../real-estate-contributions-facilities/dataModels/financial-capability.model";

export interface LicenseProjectTimeScheduleOtherAttachment {
    id?: string;
    licenseProjectTimeScheduleId?: string;
    otherAttachmentFileId: string;
    otherAttachmentFile?: FileManagerBE;
}
