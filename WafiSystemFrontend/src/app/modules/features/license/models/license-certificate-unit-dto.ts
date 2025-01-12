export interface LicenseCertificateUnitDto {
    id:number;
     licenseCertificateTemplateId :number;
    //اسم الزون
    zoneName:string;
    //النوع بلوك او عمارة
    unitTypeName :string;
    //رقم البلوك او العمارة
    unitCode :string;
    //المرحلة
     stageName:string;
    //تاريخ بداية الانشاء
    constructionStartOn: Date
    //تاريخ نهاية الانشاء
    constructionEndOn: Date
    //نوع الوحدة
     subUnitTypeName:string;
    //عدد الوحدات
    subUnitCount :number;
    //اسم نموذج الوحدة
    modelName :string;
    //اجمالى المساحة للوحدة
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
