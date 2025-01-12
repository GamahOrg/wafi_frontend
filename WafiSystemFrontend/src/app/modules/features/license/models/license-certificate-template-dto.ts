export interface LicenseCertificateTemplateDto {
    id:number;
    //رقم السجل التجارى
commercialRegisterNumber :string;
//رقم هوية المطور
 nidnumber :string;
//رقم السجل التجارى للاستشارى
consultanatCommercialRegisterNumber :string;
//رقم السجل التجارى للمحاسب
accountantCommercialRegisterNumber :string;
//رقم الرخصة
 certificateNumber :string;
//تاريخ بداية الترخيص
certificateStartOn :Date;
//تاريخ نهاية الترخيص
certificateEndOn :Date;
//مدة الرخصة
certificatePeriod :number;

//نوع الرخصة
licenseType :string;
//اسم المشروع
projectOrContributionName :string;
////حالة المشروع
// projectStatus :string;
//تاريخ بداية المشروع
projectOrContributionStartOn :Date;
//تاريخ نهاية المشروع
projectOrContributionEndOn :Date;
//وصف المشروع
projectOrContributionDescription :string;
//نوع المشروع
projectOrContributionType :string;
////حجم المشروع
//public string? ProjectSize :string;
//تصنيف المشروع
categoryName :string;
//نطاق الأعمال
 projectScopeName :string;
//هل المشروع او المساهمة بدات
 IsProjectOrContributionStarted :boolean;
//نسبة الانجاز
achievementRate :number;


//مساحة مسطح البناء للمشروع
buildingFlatArea :string;
//مساحة المشروع حسب الصك
landTotalSpace :string;
////قيمة الارض التقديرية
//public decimal? LandValue :string;
//public Guid? LicenseRequestTypeId :string;

 approve :boolean;
 isAdded :boolean;

licenseCertifcateRelativeWeights :LicenseCertifcateRelativeWeightDto[];
licenseCertifcateDeedTemplates :LicenseCertifcateDeedTemplateDto[];
}
export interface LicenseCertifcateRelativeWeightDto
{
id:number;
licenseCertificateTemplateId:number;
 name :string;
value :number;
}
export interface LicenseCertifcateDeedTemplateDto
{
    id:number;
    licenseCertificateTemplateId:number;
    //رقم الصك
    deedNumber :string;
    //نوع الصك
     deedType :string;
    //اليوم
    day:number;
    //الشهر
    month :number;
    //السنة
    year :number;
}
