export class ApproveDeedOwnerDto {
    id: string = '';
    isApproved: boolean = false;
    agreementFileId: string | null = null;
}

export interface DeedOwnerData{
    id:string;
}