export enum LicenseRequestTypeTypeCodeEnum {
    //طلب رخصة بيع وحدات عقارية على الخارطة
    SellRealEstateUnits = "SRSU",
    //طلب رخصة بيع أراضي خام على الخارطة
    SellRawLand = "SRL",
    //طلب رخصة بيع وحدات عقارية للمشاريع الصغيرة والمتوسطة
    SellRealEstateUnitsForSmallAndMediumProjects = "SREUFSMP",
    //طلب رخصة بيع للمطور رئيسي مشارك بالتطوير
    SellToMasterDeveloperCo_Development = "STMDCD",
    //طلب رخصة بيع للمطور رئيسي غير مشارك بالتطوير
    SellToMasterDeveloperNotCo_Development = "STMDNCD",
    //طلب رخصة بيع للمطور الفرعي
    SellToSubDeveloper = "STSD",
    //طلب رخصة تأجير مع استلام مبالغ تزيد عن إيجار السنة الأولي
    RentalReceiptAmountsMoreThanFirstYear = "RRAMTFY",
    //طلب رخصة تأجير مع استلام مبالغ لا تزيد عن إيجار السنة الأولي
    RentalReceiptAmountsNotMoreFirstYear = "RRANMFY",
    //رُخصة تسويق عقارات داخلية لمشاريع البيع داخل المملكة "بدون استلام مبالغ"
    MarketingForSalesProjectsInsideKingdomWithoutReceivingPayments = "MFSPIKWORP",
    //رُخصة تسويق عقارات داخلية لمشاريع البيع على الخارطة داخل المملكة "مع استلام مبالغ"
    MarketingForSalesProjectsInsideKingdomReceivingPayments = "SIU",
    //رُخصة تسويق عقارات خارجية لمشاريع البيع داخل المملكة
    MarketingForSalesProjectsOutsideKingdomWithoutReceivingPayments = "MFSPOKWORP",
    //رُخصة تسويق مؤقت للعقارات (الداخلية والخارجية)
    MarketingRealEstateTemporaryInternalAndExternal = "MRETIAE",
    //رخصة عرض عقارات داخلية على الخارطة داخل المملكة
    ShowInternalUnits = "SEU",
    //رخصة عرض عقارات خارجية على الخارطة داخل المملكة
    ShowExternalUnits = "SAU",
    //رخصة مساهمه عقاريه
    RealEstateShareholdingLicense = "REC",
    
    PRESellRealEstateUnits = "PRESRSU",
}