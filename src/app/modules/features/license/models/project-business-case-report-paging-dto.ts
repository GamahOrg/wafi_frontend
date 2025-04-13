export interface ProjectBusinessCaseReportPagingDto {
    id:string;
    projectExpectedWorkStartDate :Date;
    ownerTypeId:number;
            //حالة البرنامج للمهندس المسئول
 internalStatusId:number;
            //حالة البرنامج لمدير المشروع
 externalStatusId:number;
}
