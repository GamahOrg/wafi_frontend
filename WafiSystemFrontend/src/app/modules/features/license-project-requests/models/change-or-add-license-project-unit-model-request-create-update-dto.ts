export interface ChangeOrAddLicenseProjectUnitModelRequestCreateUpdateDto {
    id:string;
    licenseProjectId :string;
    facilityId :string;
          LicenseProjectRequestId :string;
        //نموذج الطلب، موضحاً به مبررات الطلب ومتضمناً تعهد بعدم التعديل على الوحدات المباعة
        applicationFormFileId :string;
        //البرنامج الزمني شامل كافة منحنيات البرنامج الزمني
       timelineIncludingAllTimelineCurvesId :string;
        //جدول الأوزان النسبية المحدث
        updatedRelativeWeightsTableId :string;
}
