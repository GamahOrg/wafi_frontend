import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { LicenseProjectRequestDto } from "./request-header-details";
export interface WithdrawSurplusBeforeProjectEndRequestDto {
    id:string;
      licenseProjectRequestId :string;
       licenseProjectRequest :LicenseProjectRequestDto; 
   
   
    //نموذج الطلب
     applicationFormFileId :string;
      applicationFormFile :SysFileManagerCreateUpdateDto;
   
    //تقرير المكتب الاستشاري
     consultingEngineeringId :string;
      consultingEngineering :SysFileManagerCreateUpdateDto;
    //تقرير المحاسب القانون
     charteredAccountantReportId :string;
    charteredAccountantReport :SysFileManagerCreateUpdateDto;
    //تقرير البنك
     bankReportId :string;
      bankReport :SysFileManagerCreateUpdateDto;
   
    //اتفاقيات الموردين
     supplierAgreementsId :string;
      supplierAgreements :SysFileManagerCreateUpdateDto;
   
    //اتفاقيات المقاولين
     contractorAgreementsId :string;
       contractorAgreements :SysFileManagerCreateUpdateDto;
   
    //اتفاقيات مقدمى الخدمات
     serviceProviderAgreementsId :string;
       serviceProviderAgreements :SysFileManagerCreateUpdateDto;
   
    //تقرير المقاول
     contractorReportId :string;
      contractorReport :SysFileManagerCreateUpdateDto;
   
    //تقرير مالي لإنهاء المشروع متضمن تكلفة المشروع الفعلية( ) مصادقاُ عليها من المكتب الهندسي والمحاسب القانوني.
     financialReportId :string;
      financialReport :SysFileManagerCreateUpdateDto;
   
    //خطاب التزام من المحاسب القانوني يفيد بالإبقاء على ما نسبته (20%) في حساب الضمان، إلى حين انتهاء المشروع عقاري
     letterOfCommitmentFromCharteredAccountantId :string;
       letterOfCommitmentFromCharteredAccountant :SysFileManagerCreateUpdateDto;
}
