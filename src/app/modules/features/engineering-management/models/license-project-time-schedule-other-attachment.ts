import type { FileManagerBE } from "../../facilities/dataModels/financial-capability.model";

export interface LicenseProjectTimeScheduleOtherAttachment {
    id?: string;
    licenseProjectTimeScheduleId?: string;
    otherAttachmentFileId: string;
    otherAttachmentFile?: FileManagerBE;
}
