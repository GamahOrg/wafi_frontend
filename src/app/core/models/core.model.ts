export interface CoreResponseDTO<T> {
    exception? : string;
    data?: T;
    isDone: boolean;
    message: string,
    errorCode?:string
}


export enum ErrorCodes {
  DeedNotValid = 'DeedNotValid',
  ConstructionLicenseNotValid = 'ConstructionLicenseNotValid',
  GeneralError = 'GeneralError',
  AiniDeed = 'AiniDeed',
  RequiredCourseNotCompleted='QUAL_COURSE_001'
}