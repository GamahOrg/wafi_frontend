export interface LicenseProjectEngineeringProjectZonesBlocksDetailActualDto {
  id: string;
  licenseProjectEngineeringSupervisionPlannedReportDetailId: string;
  monthName: string;

  //بلوكات وعمائر المشروع
  licenseProjectUnitId: string;

  //نسبة الإنجاز المخطط الشهرية
  monthlyPlannedCompletionPercentage: number;
  //نسبة الإنجاز الفعلى الشهرية
  actualMonthlyPlannedCompletionPercentage: number;
  //نسبة الإنجاز  التراكميه المخططه
  constructionWorkStatusCompletionRate: number;
  //نسبة الإنجاز  التراكميه الفعليه
  actualConstructionWorkStatusCompletionRate: number;
  //التباين
  contrastCompletionRate: number;

  //عدد الوحدات الجاهزة للتسليم للربط خلال الشهر
  noOfUnitsReadyForConnection: number;
  //عدد الوحدات التراكمي الكاملة التشطيبات
  cumulativeNoOfFullyFinishedUnits: number;
  //عدد الوحدات التراكمى المسلمة للربط
  cumulativeNoOfHandedUnits: number;
  //إجمالي سداد رسوم الخدمة
  totalElectricityServiceFeesPayment: any;

  licenseProjectEngineeringElectricity: LicenseProjectEngineeringElectricityDto;

  //إجمالي سداد رسوم الخدمة
  totalWaterServiceFeesPayment: any;
  licenseProjectEngineeringWater: LicenseProjectEngineeringWaterDto;

  licenseProjectEngineerSewage: LicenseProjectEngineerSewageDto;

  licenseProjectEngineerUnitsReadinessToUse: LicenseProjectEngineerUnitsReadinessToUseDto;

  //ملاحظات
  notes: string;

  licenseProjectUnit: LicenseProjectUnitEngineeringSupervisionReportActualDto;
}

export interface LicenseProjectUnitEngineeringSupervisionReportActualDto {
  id: string;
  //تاريخ النهاية المخططة
  plannedEndDate: Date;
  //تاريخ النهاية المتوقعة
  forecastFinishDate: Date;
}

export interface LicenseProjectEngineerUnitsReadinessToUseDto {
  id: string;
  licenseProjectEngineeringProjectZonesBlocksDetailId: string;
  //عدد الوحدات الجاهزة للتسليم للمستفيدين (موصولة بالخدمات)
  noOfUnitsReadyForHandover: number;
  //جاهزية البلوكات للتسليم متضمنة المرافق الخارجية للسكن (السلفتة - الإنارة - الأرصفة)
  blocksReadyForHandover: boolean;
  //الوحدات الجاهزة للتسليم
  unitsReadinessToUses: LicenseProjectReadyForHandoverUnit[];
}

export interface LicenseProjectReadyForHandoverUnit {
  licenseProjectEngineerUnitsReadinessToUseId: string;
  licenseProjectSubUnitsListCodeId: string;
  licenseProjectSubUnitsListCode?: LicenseProjectSubUnitsListCodeDto | null;
}

export interface LicenseProjectSubUnitsListCodeDto {
  code: string;
}
export interface LicenseProjectEngineerSewageDto {
  id: string;
  licenseProjectEngineeringProjectZonesBlocksDetailId: string;
  //شبكات البنية التحية
  isInfrastructureNetwork: boolean;
  //عدد الوحدات التى تم ربط الخدمة بها
  noOfConnectedUnits: number;
  //عدد الوحدات التى تم تفعيل الخدمة بها
  noOfUnitsWithActiveSewagerService: number;
}
export interface LicenseProjectEngineeringWaterDto {
  id: string;
  licenseProjectEngineeringProjectZonesBlocksDetailId: string;
  //شبكات البنية التحية
  isInfrastructureNetwork: boolean;
  //سداد رسوم الخدمة
  serviceFeesPayment: number;
  //عدد عدادات المياه التى تم تركيبها
  noOfWaterMetersInstalled: number;
  //عدد الوحدات التى تم ربط الخدمة بها
  noOfConnectedUnits: number;
  //عدد الوحدات التى تم تفعيل الخدمة بها
  noOfUnitsWithActiveWaterService: number;
}

export interface LicenseProjectEngineeringElectricityDto {
  id: string;
  licenseProjectEngineeringProjectZonesBlocksDetailId: string;
  //شبكات البنية التحية
  isInfrastructureNetwork: boolean;
  //سداد رسوم الخدمة
  serviceFeesPayment: number;
  //عدد عدادات الكهرباء التى تم تركيبه
  noOfElectricityMetersInstalled: number;
  //عدد الوحدات التى تم ربط الخدمة بها
  noOfConnectedUnits: number;
  //عدد الوحدات التى تم إطلاق تيار بها
  noOfUnitsWithActiveElectricityService: number;
}
