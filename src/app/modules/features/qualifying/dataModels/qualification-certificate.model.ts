import { QualificationRequestTypeCode } from "./enum/qualification-request-type"
import { RequestCodeEnum } from "./enum/request-code.model"


export interface QualificationCertificate {
    facilityName: string
    qualificationRequestId: string
    committeeDecisionDate : Date
    // committeeDecisionNumber: string
    qualificationRequestType: string 
    qualificationRequestTypeName:string
    certificateHTMLFile: string 
    certificateExpirationDate: Date 
    requestCode: string 
    certificateNumber: string 
    certificateFile: string         
    decisionNo: string
    certificatePeriod:number         
}
