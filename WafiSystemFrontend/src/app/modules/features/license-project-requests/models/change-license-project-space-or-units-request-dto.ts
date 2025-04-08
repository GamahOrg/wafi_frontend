import { SysFileManagerCreateUpdateDto } from "src/app/shared/models/sys-file-manager-create-update-dto";
import { LicenseProjectRequestDto } from "./request-header-details";

export interface ChangeLicenseProjectSpaceOrUnitsRequestDto {
    id:string;
     licenseProjectRequestId:string;
       licenseProjectRequest :LicenseProjectRequestDto;
     //نموذج الطلب، موضحاً به أسباب طلب التغيير
     applicationFormFileId :string;
      applicationFormFile:SysFileManagerCreateUpdateDto;
    //تقرير عن حالة المشروع الحالية
     reportForCurrentProjectStatusId :string;
      reportForCurrentProjectStatus:SysFileManagerCreateUpdateDto;
    //تقرير مساحى للمساحة المحدثة
     reportForUpdateSpaceId :string;
      reportForUpdateSpace:SysFileManagerCreateUpdateDto;
    //جدول الاوزان النسبية المحدث
     updatedRelativeWeightTableId :string;
      updatedRelativeWeightTable:SysFileManagerCreateUpdateDto;
    //جدول الكميات المحدث
     updatedQuantityTableId :string;
      updatedQuantityTable:SysFileManagerCreateUpdateDto;
    //البرنامج الزمنى المحدث
     updatedTimeSchedualeId :string;
      updatedTimeScheduale:SysFileManagerCreateUpdateDto;
    //بيان محدث يتضمن رقم مميز لكل وحدة من وحدات المشروع بالاضافة إلى عدع الوحدات
     updatedStatementForUnitsId :string;
    updatedStatementForUnits:SysFileManagerCreateUpdateDto;
    //محضر فرز الوحدات
     unitSortingMinutesId :string;
      unitSortingMinutes:SysFileManagerCreateUpdateDto;
    //ملحق الاتفاقية المبرم بين المطور والمحاسب القانونى
     agreementBetweenDevelperAndAccountantId :string;
      agreementBetweenDevelperAndAccountant:SysFileManagerCreateUpdateDto;
    //ملحق الاتفاقية المبرم بين المطور المكتب الاستشارى 
     agreementBetweenDevelperAndEngineeringId :string;
      agreementBetweenDevelperAndEngineering:SysFileManagerCreateUpdateDto;
    //ملحق الاتفاقية المبرم بين المطور وبين مالك الأرض او مالك منفعتها  
     agreementBetweenDeveloperAndLandOwnerId :string;
      agreementBetweenDeveloperAndLandOwner:SysFileManagerCreateUpdateDto;
    //تقرير البنك عن حساب الضمان 
     bankReportOnEscrowAccountId :string;
      bankReportOnEscrowAccount :SysFileManagerCreateUpdateDto;
    //تحديث دراسة الجدوى الخاصة بالمشروع 
     updatedFeasibilityStudyId :string;
      updatedFeasibilityStudy:SysFileManagerCreateUpdateDto;
    //التصاميم المعمارية والمخططات الهندسية المعتمدة من الجهات المختصة
     architecturalDesignsAndEngineeringPlansId :string;
      architecturalDesignsAndEngineeringPlans:SysFileManagerCreateUpdateDto;
    //تحديث رخصة البناء او الخطاب المقدم من مركز اتمام
     updatedBuildingLicenseOrLetterId :string;
      updatedBuildingLicenseOrLetter:SysFileManagerCreateUpdateDto;
    //خطاب من المحاسب القانونى يفيد بعدم وجود مبيعات على الوحدات الملغاة مرفقا به تقرير عن حالة المشروع
     accountantLetterForCancelledUnitsId :string;
      accountantLetterForCancelledUnits:SysFileManagerCreateUpdateDto;
}
