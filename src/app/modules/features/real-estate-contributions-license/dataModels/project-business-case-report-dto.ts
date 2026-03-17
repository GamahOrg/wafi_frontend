export interface ProjectBusinessCaseReportDto {
    id:string;
    licenseProjectId :string;
     projectNotStartingReason :string;
    projectExpectedWorkStartDate :Date;
    //حالة البرنامج للمهندس المسئول
     internalStatusId :number;
    //حالة البرنامج لمدير المشروع
     externalStatusId:number
    ownerTypeId:number
    internalStatus:SysLicenseProjectEngineeringRequestStatusDto;
      externalStatus :SysLicenseProjectEngineeringRequestStatusDto; 
    //الملاحظات
  projectBusinessCaseReportNotes :ProjectBusinessCaseReportNoteDto[];
}
 export enum LicenseProjectEngineeringRequestStatus
 {
    
    Draf = 0,
    ///<summary>جديد</summary>
    New = 1,
    ///<summary>تحت الدراسة</summary>
    UnderStudy = 2,
    ///<summary>يوجد الملاحظات</summary>
    CustomerFeedback = 3,
    ///<summary> تم إرسال معالجة الملاحظات</summary>
    Compile = 4,
    ///<summary>تم الاعتماد</summary>
    Certified = 5,
 }
 export interface SysLicenseProjectEngineeringRequestStatusDto
 {
    id:number;
    name:string;
 }
 export interface ProjectBusinessCaseReportNoteDto
 {
    id:string;
    projectBusinessCaseReportId :string;
     employeeId:string;
     notes:string;
      employee :EmployeeLookupDto;
 }
 export interface EmployeeLookupDto
 {
    id:string;
   employeeName :string;
}
