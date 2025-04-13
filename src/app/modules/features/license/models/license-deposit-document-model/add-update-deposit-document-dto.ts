export interface AddUpdateLicenseProjectDepositDto {
    id: string | null,
    licenseProjectId: string,
    LicenseProjectBuyerId: string|null,
    amount: number,
    referenceNumber: string,
    depositDate:Date,
    item: string,
    mianItemDescription: string,
    batchNumber: string,
    statment: string,
    mainItemId:LicenseProjectDepositDocumentMainItemEnum
}
export enum LicenseProjectDepositDocumentMainItemEnum {
    collectionFromClients = 1,
    //تمويل بنكى
    bankFinancing = 2,
    //تمويل ذاتى
    selfFinancing = 3,
    //تمويل وزارى
    ministerialFinancing = 4,
    //أخرى
    others = 5
}
export class MainItemsDto
{
    id: string = "";
    name: string = "";
}