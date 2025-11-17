export enum TermsPartType{
        //ملاك
    Owners = 1,
    //استشارى
    EngineeringConsultant = 2,
    //محاسب
    Accountant = 3
}


export interface LicenseProjectPartiesAdditionalTermsDto {
    id: string;
    licenseProjectId : string;
    termsPartType: TermsPartType
    //رقم البند
    itemNumber: number  
    //عنوان البند
    itemTitle?: string | null; 
    //نص البند
    itemText: string
    isMainTerm: boolean  
    additionalTermsAcknowledgment: boolean  
    parentId?: string | null;  
    parent? :LicenseProjectPartiesAdditionalTermsDto 
}