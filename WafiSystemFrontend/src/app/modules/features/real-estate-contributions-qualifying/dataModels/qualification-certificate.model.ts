import { RequestCodeEnum } from "./enum/request-code.model"

export interface QualificationCertificate {
    facilityName: string
    qualificationRequestId: string
    committeeDecisionDate : Date
    // committeeDecisionNumber: string
    decisionNo: string
    qualificationRequestType: string 
    qualificationRequestTypeName:string
    certificateHTMLFile: string 
    certificateExpirationDate: Date 
    requestCode: string 
    certificateNumber: string 
    certificateFile: string      
    certificatePeriod:number   
}
