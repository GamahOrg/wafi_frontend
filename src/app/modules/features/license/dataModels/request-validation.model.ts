export interface RequestValidation {
    requestTypeCode: string;
    period: number;
    tabs: RequestValidationTab[]
}
export interface RequestValidationTab{
    tabCode: string;
    tabErrors: RequestValidationTabErrors[]
}

export interface RequestValidationTabErrors{
    errorCode: string;
    errorMessage: string
}

export interface RequestSuccessResponse{
    id: string;
    requestCode: string;
    licenseProjectId: string;

}