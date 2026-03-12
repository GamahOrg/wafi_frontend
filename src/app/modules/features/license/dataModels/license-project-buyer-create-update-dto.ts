export interface LicenseProjectBuyerCreateUpdateDto {
    id:string;
    name :string;
    nIdNumber :string;
    mobile :string;
    statusId :number
    licenseProjectId :string;
    licenseProjectBuyerTypeId :number
    contractFileId:string;
    //عدد الأراضي
    landNumbers :number
    //رقم الوحدة
     unitCodeId :string;
   
    //رقم البلوك / العمارة
     blockId :string;
    //رقم العقد
     contractNumber :string;
    //تاريخ بيع 
     saleDate: Date;
    //تاريخ تسليم 
    deliveryDate : Date;
    //سعر  قبل الضريبة المضافة
    price :number
    //نسبة الضريبة الحالية
    currentTax :number
    //نسبة الإشراف أو نسبة الرسوم
    percentageSupervisionOrFees :number
}
