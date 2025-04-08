export interface ChangeLicenseProjectSpaceOrUnitsRequestCreateUpdateDto {
    id:string;
     licenseProjectId :string;
     facilityId :string;
    //نموذج الطلب، موضحاً به أسباب طلب التغيير
     applicationFormFileId :string;
    //تقرير عن حالة المشروع الحالية
     reportForCurrentProjectStatusId :string;
    //تقرير مساحى للمساحة المحدثة
     reportForUpdateSpaceId :string;
    //جدول الاوزان النسبية المحدث
     updatedRelativeWeightTableId :string;
    //جدول الكميات المحدث
     updatedQuantityTableId :string;
    //البرنامج الزمنى المحدث
     updatedTimeSchedualeId :string;
    //بيان محدث يتضمن رقم مميز لكل وحدة من وحدات المشروع بالاضافة إلى عدع الوحدات
     updatedStatementForUnitsId :string;
    //محضر فرز الوحدات
     unitSortingMinutesId :string;
    //ملحق الاتفاقية المبرم بين المطور والمحاسب القانونى
     agreementBetweenDevelperAndAccountantId :string;
    //ملحق الاتفاقية المبرم بين المطور المكتب الاستشارى 
     agreementBetweenDevelperAndEngineeringId :string;
    //ملحق الاتفاقية المبرم بين المطور وبين مالك الأرض او مالك منفعتها  
     agreementBetweenDeveloperAndLandOwnerId :string;
    //تقرير البنك عن حساب الضمان 
     bankReportOnEscrowAccountId :string;
    //تحديث دراسة الجدوى الخاصة بالمشروع 
     updatedFeasibilityStudyId :string;
    //التصاميم المعمارية والمخططات الهندسية المعتمدة من الجهات المختصة
     architecturalDesignsAndEngineeringPlansId :string;
    //تحديث رخصة البناء او الخطاب المقدم من مركز اتمام
     updatedBuildingLicenseOrLetterId :string;
    //خطاب من المحاسب القانونى يفيد بعدم وجود مبيعات على الوحدات الملغاة مرفقا به تقرير عن حالة المشروع
     accountantLetterForCancelledUnitsId :string;
}
