import { FileManagerBE } from "../../facilities/dataModels/financial-capability.model";

export class AccountKeeperDto {
    id: string = "";
    accountNumber : string = "";
    bankId : string = "";
    // accountKeeperName : string = "";
    accountKeeperMobile : string = "";
    accountKeeperTelephone : string = "";
    accountKeeperEmail : string = "";
    accountKeeperExtentionNumber : string = "";
    accountKeeperAgreementFileId : string = "";
    accountKeeperJobTitle : string = "";
    accountKeeperFax: string = "";
    accountKeeperAgreementFile : FileManagerBE | null =null;
}
