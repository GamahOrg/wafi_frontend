import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { LicenseProjectAddressesDto } from './master-license-project-engineering-supervision-planned-report-dto';
import type { LicenseProjectEngineeringRequestStatusEnum } from './actual-value-report-paging-list-dto';
import { DeedData } from '../../license/dataModels/project-land-deed.dto';
import { ProjectLandDeedDto } from './project-land-deed.dto';

export interface LicenseProjectEngineeringActualReportDetailsDto {
  id: string;
  name: string;
  projectCode: string;
  startOn: Date;
  endOn: Date;
  buildingFlatArea: number;
  landTotalSpace: number;
  landValue: number;
  //التكلفة الانشائية المتوقعة (ريال سعودي)
  expectedConstructionCost: number;
  //المقاول
  contractor: string;
  //مقاول البنية التحتية
  infrastructureContractor: string;
  //استشاري أعمال البنية التحتية
  infrastructureConsultant: string;
  //تكلفة أعمال البنية التحتية (ر.س.)
  infrastructureCost: string;
  //تاريخ بداية الأعمال التعاقدي
  contractualStartDate: Date;
  //تاريخ نهاية الأعمال التعاقدي
  contractualFinishDate: Date;
  cumulativeAmountPriorToThatYear: number;
  acualCumulativeAmountPriorToThatYear: number;
  monthsCount: number;
  zonesCount: number;
  uniteCount: number;
  blockCount: number;
  buildingsCount: number;
  engineeringConsultantName: string;
  developerName: string;
  projectManagerCustomerName: string;
  licenseProjectAddresses: LicenseProjectAddressesDto[];
  licenseProjectEngineeringSupervisionPlannedReportDetails: LicenseProjectEngineeringSupervisionPlannedActualReportDetailDto[];
  licenseProjectDeeds: ProjectLandDeedDto[];
}

export interface LicenseProjectEngineeringSupervisionPlannedActualReportDetailDto {
  id: string;
  supervisionPlannedReportStatusId?:LicenseProjectEngineeringRequestStatusEnum;
  monthName: string;
  monthDate: Date;
  cumulativeplannedcompletionpercentage: number;
  cumulativeAcualcompletionpercentage: number;
  //نسب الإنجاز المخططة الشهرية للمشروع
  projectMonthlyPlannedCompletionRate: number;
  //نسب الإنجاز الفعلىة الشهرية
  projectMonthlyActualCompletionRate: number;
  //التكلفة الفعلىة خلال الشهر (ريال سعودي)
  actualMonthCost: number;
  //إجمالي التكلفة الفعلية حتى تاريخه (ريال سعودي)
  totalActualCostToDate: number;
  //التكلفة المتوقعة خلال الشهر (ريال سعودي)
  projectMonthlyPlannedMonthCost: number;
  //إجمالي التكلفة المتوقعة حتى تاريخه (ريال سعودي)
  totalPlannedCostToDate: number;
  //إجمالي عدد العمالة المخطط للشهر
  monthlyTotalPlannedEmployees: number;
  //متوسط عدد العمالة الفعلى للشهر
  monthlyTotalActualEmployees: number;
  // التمديد المعتمد (يوم)
  approvedExtensionPerDay: number;
  //تاريخ النهاية المتوقع من تحديث البرنامج الزمني
  expectedEndDateFromTimelineUpdate: Date;
  //تاريخ بداية الأعمال الفعلى
  actualStartDate: Date;
  //تاريخ النهاية التعاقدي المعدل بناء على التمديد المعتمد
  contractualEndDateAdjustedBasedOnApprovedExtension: Date;
  //أسباب التأخير (ان وجد)
  delayReasons: string;
  // تفرير الإشراف الهندسي الشهري صور المشروع
  licenseProjectEngineeringSupervisionPlannedReportDetailImages: LicenseProjectEngineeringSupervisionPlannedReportDetailImageDto[];
  // تفرير الإشراف الهندسي الشهري فيديو المشروع
  licenseProjectEngineeringSupervisionPlannedReportDetailVideos: LicenseProjectEngineeringSupervisionPlannedReportDetailVideoDto[];
  // تفرير الإشراف الهندسي الشهري خريطة موقع عام المشروع
  licenseProjectEngineeringSupervisionPlannedReportDetailMaps: LicenseProjectEngineeringSupervisionPlannedReportDetailMapDto[];
}

export interface LicenseProjectEngineeringSupervisionPlannedReportDetailImageDto {
  id: string;
  imageFileId: string;
  imageFile: SysFileManagerCreateUpdateDto;
}
export interface LicenseProjectEngineeringSupervisionPlannedReportDetailVideoDto {
  id: string;
  videoFileId: string;
  videoFile: SysFileManagerCreateUpdateDto;
}
export interface LicenseProjectEngineeringSupervisionPlannedReportDetailMapDto {
  id: string;
  mapFileId: string;
  mapFile: SysFileManagerCreateUpdateDto;
}
export interface LicenseProjectDelayReasonDto {
  id: string;
  licenseProjectId: string;
  //نوع التاخير
  categoryDelayReasonId: number;
  categoryDelayReason: SysCategoryDelayReasonDto;
  //اسباب التاخير
  sysDelayReasonId: number;
  sysDelayReason: SysDelayReasonDto;
  //الانطباق
  isApplicable: boolean;
  //الحالة
  isExist: boolean;
}
export interface SysCategoryDelayReasonDto {
  id: number;
  name: string;
}
export interface SysDelayReasonDto {
  id: number;
  name: string;
}

export interface LicenseProjectDto {
  startOn: Date;
  endOn: Date;
}
