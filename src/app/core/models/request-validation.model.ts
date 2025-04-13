export interface RequestValidation {
  period: number;
  requestTypeCode: string;
  tabs: TabsError[];
}

export interface TabsError {
  tabCode: string;
  tabErrors: TabErrors[];
}

export interface TabErrors {
  errorCode: string;
  errorMessage: string;
}
export interface RequestSuccessResponse{
  id: string;
  requestCode: string;
}