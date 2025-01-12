import { SysBank } from "../models/license-project.model";

export class BankingAccountDto {
        id:string="";
        accountNumber: string="";
        bankId: string="";
        bankAccountDelegatorName: string="";
        bankAccountDelegatorEmail: string="";
        bankAccountDelegatorMobile: string="";
        sysBank = {} as SysBank
    }
