export interface LicenseCertificateTemplatePagingDto {
    id:number;
     //اسم المشروع
 projectOrContributionName :string;
 //نوع المشروع
  projectOrContributionType :string;
 //تاريخ بداية المشروع
 projectOrContributionStartOn :Date;
 //تاريخ نهاية المشروع
  projectOrContributionEndOn :Date;
 //رقم الرخصة
  certificateNumber :string;
 //تاريخ بداية الترخيص
  certificateStartOn :Date;
 //تاريخ نهاية الترخيص
 certificateEndOn :Date;
 approve :boolean;

}
