export enum RequestCodeEnum {
    RED01 = 'مطور عقاري مستقل',
    RED02 = 'مطور عقاري مدرج فى سوق المال',
    RED03 = 'مطور عقاري  متحالف مع شركه',
    REM = 'مسوق عقاري',
    REB = 'وسيط عقاري',
    EC = 'استشاري هندسي مؤهل',
    Acc = 'محاسب مؤهل',
    REEM = 'مطور عقاري ',
}


export enum QualificationType {
    realStateDeveloperQualificationRequest="RED01",
    realStateDeveloperMoneyMarketListedQualificationRequest="RED02",
    realStateDeveloperQualifiedCompanyAllianceQualificationRequest="RED03",
    realStateMarketerQualificationRequest="REM",
    realStateBrokerQualificationRequest="REB",
    accountantQualificationRequest="Acc",
    engineeringConsultantQualificationRequest="EC",
    realEstateDeveloperSpecializingInRealEstateParticipation="REEM",
    contributionAccountantQualificationRequest="Acc-REEM",
    contributionEngineeringConsultantQualificationRequest="EC-REEM",
}
