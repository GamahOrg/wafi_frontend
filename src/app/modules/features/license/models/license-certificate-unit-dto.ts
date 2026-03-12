export interface LicenseCertificateUnitDto {
    id:number;
     licenseCertificateTemplateId :number;
    //اسم الزون
    zoneName:string;
    //النوع بلوك أو عمارة
    unitTypeName :string;
    //رقم البلوك أو العمارة
    unitCode :string;
    //المرحلة
     stageName:string;
    //تاريخ بداية الإنشاء
    constructionStartOn: Date
    //تاريخ نهاية الإنشاء
    constructionEndOn: Date
    //نوع الوحدة
     subUnitTypeName:string;
    //عدد الوحدات
    subUnitCount :number;
    //اسم نموذج الوحدة
    modelName :string;
    //إجمالي المساحة للوحدة
     space :number;
    //مساحة مسطح البناء للوحدة
    buildingFlatSpace :number;
    //عدد الوحدات
    unitsCount :number;
    //خصائص الوحدة
    properties :string;
    //كود الوحدة
    code :string;
    //تاريخ التسليم
    deliveryOn :Date;
    //سعر التعاقد
    price :number;
    //الدور
   floorNumber:number;
}
