import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

import { formatDate } from '@angular/common';
import { ActualValueReportPagingListDto } from '../../../models/actual-value-report-paging-list-dto';
import { LicenseProjectEngineeringProjectZonesBlocksDetailActualDto, LicenseProjectEngineeringElectricityDto, LicenseProjectEngineeringWaterDto, type LicenseProjectEngineerSewageDto, LicenseProjectEngineerUnitsReadinessToUseDto, LicenseProjectUnitEngineeringSupervisionReportActualDto } from '../../../models/license-project-engineering-project-zones-blocks-detail-actual-dto';
import { unitslist as unitList } from '../../../models/zonelist';
import { EngineeringSupervisionReportActualProjectDeteilsService } from '../../../services/engineering-supervision-report-actual-project-deteils.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../../services/engineering-supervision-report-actual-project-status-summary.service';
import { licenseProjectSubUnitsListCodes } from '../../../models/project-units';

@Component({
  selector: 'app-add-edit-actual-project-details',
  templateUrl: './add-edit-actual-project-details.component.html',
  styleUrls: ['./add-edit-actual-project-details.component.scss']
})
export class AddEditActualProjectDetailsComponent {
  subscriptions: Subscription[] = [];
  licenseProjectSubUnitsListCodes: licenseProjectSubUnitsListCodes[] = []
  licenseProjectEngineeringProjectZonesBlocksDetailActual?: LicenseProjectEngineeringProjectZonesBlocksDetailActualDto;
  licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate?: LicenseProjectEngineeringProjectZonesBlocksDetailActualDto;
  monthDate?: Date;
  actualValueReport?: ActualValueReportPagingListDto
  selectedUnitCodes: string[] = [];

  actualProjectDetailsForm =
  this._formBuilder.group({
      //نسبة الإنجاز الفعلى الشهرية
      actualMonthlyPlannedCompletionPercentage: this._formBuilder.control<number | null>(null, [Validators.required]),
      //تاريخ النهاية المتوقعة
      forecastFinishDate: this._formBuilder.control<string | null>(null, [Validators.required]),
      //عدد الوحدات الجاهزة للتسليم للربط خلال الشهر
      noOfUnitsReadyForConnection: this._formBuilder.control<number | null>(null, [Validators.required]),
      //عدد الوحدات التراكمي الكاملة التشطيبات
      cumulativeNoOfFullyFinishedUnits: this._formBuilder.control<number | null>(null, [Validators.required]),
      // كهرباء Electricity
      //شبكات البنية التحية
      isInfrastructureNetworkElectricity: this._formBuilder.control<string | null>(null, [Validators.required]),
      //سداد رسوم الخدمة
      serviceFeesPaymentElectricity: this._formBuilder.control<number | null>(null, [Validators.required]),
      //عدد عدادات الكهرباء التى تم تركيبه
      noOfElectricityMetersInstalled: this._formBuilder.control<number | null>(null, [Validators.required]),
      //عدد الوحدات التى تم ربط الخدمة بها
      noOfConnectedUnitsElectricity: this._formBuilder.control<number | null>(null, [Validators.required]),
      //عدد الوحدات التى تم إطلاق تيار بها
      noOfUnitsWithActiveElectricityService: this._formBuilder.control<number | null>(null, [Validators.required]),
      //المياه Wate
      //شبكات البنية التحية
      isInfrastructureNetworkWater: this._formBuilder.control<string | null>(null, [Validators.required]),
      //سداد رسوم الخدمة
      serviceFeesPaymentWater: this._formBuilder.control<number | null>(null, [Validators.required]),
      //عدد عدادات المياه التى تم تركيبها
      noOfWaterMetersInstalled: this._formBuilder.control<number | null>(null, [Validators.required]),
      //عدد الوحدات التى تم ربط الخدمة بها
      noOfConnectedUnitsWater: this._formBuilder.control<number | null>(null, [Validators.required]),
      //عدد الوحدات التى تم تفعيل الخدمة بها
      noOfUnitsWithActiveWaterService: this._formBuilder.control<number | null>(null, [Validators.required]),
      //   صرف صحيSewage
      //شبكات البنية التحية
      isInfrastructureNetworkSewage: this._formBuilder.control<string | null>(null, [Validators.required]),
      //عدد الوحدات التى تم ربط الخدمة بها
      noOfConnectedUnits: this._formBuilder.control<number | null>(null, [Validators.required]),
      //عدد الوحدات التى تم تفعيل الخدمة بها
      noOfUnitsWithActiveSewagerService: this._formBuilder.control<number | null>(null, [Validators.required]),
      //الجاهزية للسكن Units readiness to Use
      //عدد الوحدات الجاهزة للتسليم للمستفيدين (موصولة بالخدمات)
      noOfUnitsReadyForHandover: this._formBuilder.control<number | null>(null, [Validators.required]),
      //جاهزية البلوكات للتسليم متضمنة المرافق الخارجية للسكن (السلفتة - الإنارة - الأرصفة)
      blocksReadyForHandover: this._formBuilder.control<string | null>(null, [Validators.required]),
      //ملاحظات
      notes: this._formBuilder.control<string | null>(null, [Validators.required]),
      unitIds: this._formBuilder.control<any[] | null>(null, [Validators.required]),
    });

  get controls() {
    return this.actualProjectDetailsForm.controls;
  }

  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  licenseProjectUnit?: unitList;
  showValidation: boolean = false;

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private _engineeringSupervisionReportActualProjectDeteilsService: EngineeringSupervisionReportActualProjectDeteilsService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
  ) { }

  ngOnInit(): void {
    this.observePopupEvents();
    this.getLicenseProjectIdStorage();
    this.GetLicenseProjectReadyForHandoverUnit();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId)
      this.getMonthDate()
  }

  getMonthDate() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectStatusSummaryService.getmonthDate().subscribe(res => {
        if (res) {
          this.actualValueReport = res as ActualValueReportPagingListDto;
          this.monthDate = this.actualValueReport.monthDate as Date;
          this.getLicenseProjectUnit();
        }
      })
    )
  }

  getLicenseProjectUnit() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectDeteilsService.getLicenseProjectUnit().subscribe(res => {
        if (res) {
          this.licenseProjectUnit = res as unitList;
          this.getLicenseProjectEngineeringProjectZonesBlocksDetailActual();
        }
      })
    )
  }

  GetLicenseProjectReadyForHandoverUnit() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectDeteilsService.getLicenseProjectUnit().subscribe(res => {
        if(res)
          this._engineeringSupervisionReportActualProjectStatusSummaryService.GetLicenseProjectReadyForHandoverUnit(res.id as string).subscribe(res => {
          if (res) {
            this.licenseProjectSubUnitsListCodes = res as licenseProjectSubUnitsListCodes[];
          }
        })
      })
      
    )
  }

  getLicenseProjectEngineeringProjectZonesBlocksDetailActual() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectDeteilsService.getLicenseProjectEngineeringProjectZonesBlocksDetailActual(this.licenseProjectId as string, this.monthDate as Date, this.licenseProjectUnit?.id as string).subscribe(res => {
        if (res) {
          this.licenseProjectEngineeringProjectZonesBlocksDetailActual = res as LicenseProjectEngineeringProjectZonesBlocksDetailActualDto;
          if (this.licenseProjectEngineeringProjectZonesBlocksDetailActual) {
            this.actualProjectDetailsForm.patchValue(this.licenseProjectEngineeringProjectZonesBlocksDetailActual as any);
            // كهرباء Electricity
            if (this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineeringElectricity) {
              //شبكات البنية التحية
              if (this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineeringElectricity.isInfrastructureNetwork)
                this.actualProjectDetailsForm.controls.isInfrastructureNetworkElectricity.setValue('true');
              if (!this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineeringElectricity.isInfrastructureNetwork)
                this.actualProjectDetailsForm.controls.isInfrastructureNetworkElectricity.setValue('false');
              //سداد رسوم الخدمة
              this.actualProjectDetailsForm.controls.serviceFeesPaymentElectricity.setValue(this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineeringElectricity.serviceFeesPayment);
              //عدد عدادات الكهرباء التى تم تركيبه
              this.actualProjectDetailsForm.controls.noOfElectricityMetersInstalled.setValue(this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineeringElectricity.noOfElectricityMetersInstalled);
              //عدد الوحدات التى تم ربط الخدمة بها
              this.actualProjectDetailsForm.controls.noOfConnectedUnitsElectricity.setValue(this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineeringElectricity.noOfConnectedUnits);
              //عدد الوحدات التى تم إطلاق تيار بها
              this.actualProjectDetailsForm.controls.noOfUnitsWithActiveElectricityService.setValue(this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineeringElectricity.noOfUnitsWithActiveElectricityService);
            }
            //المياه Wate
            if (this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineeringWater) {
              //شبكات البنية التحية
              if (this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineeringWater.isInfrastructureNetwork)
                this.actualProjectDetailsForm.controls.isInfrastructureNetworkWater.setValue('true');
              if (!this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineeringWater.isInfrastructureNetwork)
                this.actualProjectDetailsForm.controls.isInfrastructureNetworkWater.setValue('false');
              //سداد رسوم الخدمة
              this.actualProjectDetailsForm.controls.serviceFeesPaymentWater.setValue(this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineeringWater.serviceFeesPayment);
              //عدد عدادات المياه التى تم تركيبه
              this.actualProjectDetailsForm.controls.noOfWaterMetersInstalled.setValue(this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineeringWater.noOfWaterMetersInstalled);
              //عدد الوحدات التى تم ربط الخدمة بها
              this.actualProjectDetailsForm.controls.noOfConnectedUnitsWater.setValue(this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineeringWater.noOfConnectedUnits);
              //عدد الوحدات التى تم تفعيل الخدمة بها
              this.actualProjectDetailsForm.controls.noOfUnitsWithActiveWaterService.setValue(this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineeringWater.noOfUnitsWithActiveWaterService);
            }
            //   صرف صحيSewage
            if (this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineerSewage) {
              //شبكات البنية التحية
              if (this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineerSewage.isInfrastructureNetwork)
                this.actualProjectDetailsForm.controls.isInfrastructureNetworkSewage.setValue('true');
              if (!this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineerSewage.isInfrastructureNetwork)
                this.actualProjectDetailsForm.controls.isInfrastructureNetworkSewage.setValue('false');
              //عدد الوحدات التى تم ربط الخدمة بها
              this.actualProjectDetailsForm.controls.noOfConnectedUnits.setValue(this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineerSewage.noOfConnectedUnits);
              //عدد الوحدات التى تم تفعيل الخدمة بها
              this.actualProjectDetailsForm.controls.noOfUnitsWithActiveSewagerService.setValue(this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineerSewage.noOfUnitsWithActiveSewagerService);
            }
            //الجاهزية للسكن Units readiness to Use
            if (this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineerUnitsReadinessToUse) {
              // عدد الوحدات الجاهزة للتسليم للمستفيدين (موصولة بالخدمات)
              this.actualProjectDetailsForm.controls.noOfUnitsReadyForHandover.setValue(this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineerUnitsReadinessToUse.noOfUnitsReadyForHandover);

              //جاهزية البلوكات للتسليم متضمنة المرافق الخارجية للسكن (السلفتة - الإنارة - الأرصفة)
              if (this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineerUnitsReadinessToUse.blocksReadyForHandover)
                this.actualProjectDetailsForm.controls.blocksReadyForHandover.setValue('true');
              if (!this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineerUnitsReadinessToUse.blocksReadyForHandover)
                this.actualProjectDetailsForm.controls.blocksReadyForHandover.setValue('false');
              if(this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineerUnitsReadinessToUse.unitsReadinessToUses
                && this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineerUnitsReadinessToUse.unitsReadinessToUses.length > 0){
                  this.actualProjectDetailsForm.controls.unitIds.setValue(this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineerUnitsReadinessToUse.unitsReadinessToUses.map(x => x.licenseProjectSubUnitsListCodeId))
                  this.selectedUnitCodes = (this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectEngineerUnitsReadinessToUse.unitsReadinessToUses
                    .map(x => x.licenseProjectSubUnitsListCode?.code)
                    .filter((code): code is string => typeof code === 'string')) || [];
                }
            }

            if (this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectUnit) {
              //تاريخ النهاية المتوقعة
              this.actualProjectDetailsForm.controls.forecastFinishDate.setValue(formatDate(this.licenseProjectEngineeringProjectZonesBlocksDetailActual.licenseProjectUnit.forecastFinishDate, 'yyyy-MM-dd', this.locale));
            }

            this.observeUnitIdsChanges();
          }
        }
      })
    )
  }


  save(): void {
    if (!this.actualProjectDetailsForm.valid) {
      this.showValidation = true;
      return;
    }

    if((this.actualProjectDetailsForm.controls.unitIds.value?.length || 0) > (this.actualProjectDetailsForm.controls.noOfUnitsReadyForHandover.value || 0)){
      this._toastrNotificationService.showError('عدد الوحدات المختارة الجاهزة للتسليم اكبر من عدد الوحدات الجاهزه المدخل');
      return;
    }

    if((this.actualProjectDetailsForm.controls.unitIds.value?.length || 0) < (this.actualProjectDetailsForm.controls.noOfUnitsReadyForHandover.value || 0)){
      this._toastrNotificationService.showError('عدد الوحدات المختارة الجاهزة للتسليم اقل من عدد الوحدات الجاهزه المدخل');
      return;
    }

    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate = this.actualProjectDetailsForm.value as {} as LicenseProjectEngineeringProjectZonesBlocksDetailActualDto;
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.id = this.licenseProjectEngineeringProjectZonesBlocksDetailActual?.id as string;

    // كهرباء Electricity
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.licenseProjectEngineeringElectricity = {} as LicenseProjectEngineeringElectricityDto;
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.licenseProjectEngineeringElectricity.id = this.licenseProjectEngineeringProjectZonesBlocksDetailActual?.licenseProjectEngineeringElectricity?.id as string;
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.licenseProjectEngineeringElectricity.licenseProjectEngineeringProjectZonesBlocksDetailId = this.licenseProjectEngineeringProjectZonesBlocksDetailActual?.id as string;

    //شبكات البنية التحية
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.licenseProjectEngineeringElectricity.isInfrastructureNetwork = JSON.parse(this.actualProjectDetailsForm.controls.isInfrastructureNetworkElectricity.value as string);
    //سداد رسوم الخدمة
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.licenseProjectEngineeringElectricity.serviceFeesPayment = this.actualProjectDetailsForm.controls.serviceFeesPaymentElectricity.value as number;

    //عدد عدادات الكهرباء التى تم تركيبه
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.licenseProjectEngineeringElectricity.noOfElectricityMetersInstalled = this.actualProjectDetailsForm.controls.noOfElectricityMetersInstalled.value as number;
    //عدد الوحدات التى تم ربط الخدمة بها
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.licenseProjectEngineeringElectricity.noOfConnectedUnits = this.actualProjectDetailsForm.controls.noOfConnectedUnitsElectricity.value as number;

    //عدد الوحدات التى تم إطلاق تيار بها
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.licenseProjectEngineeringElectricity.noOfUnitsWithActiveElectricityService = this.actualProjectDetailsForm.controls.noOfUnitsWithActiveElectricityService.value as number;

    //المياه Wate
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.licenseProjectEngineeringWater = {} as LicenseProjectEngineeringWaterDto;
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.licenseProjectEngineeringWater.id = this.licenseProjectEngineeringProjectZonesBlocksDetailActual?.licenseProjectEngineeringWater?.id as string;
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.licenseProjectEngineeringWater.licenseProjectEngineeringProjectZonesBlocksDetailId = this.licenseProjectEngineeringProjectZonesBlocksDetailActual?.id as string;

    //شبكات البنية التحية
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineeringWater.isInfrastructureNetwork = JSON.parse(this.actualProjectDetailsForm.controls.isInfrastructureNetworkWater.value as string);
    //سداد رسوم الخدمة
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineeringWater.serviceFeesPayment = this.actualProjectDetailsForm.controls.serviceFeesPaymentWater.value as number;
    //عدد عدادات المياه التى تم تركيبها
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineeringWater.noOfWaterMetersInstalled = this.actualProjectDetailsForm.controls.noOfWaterMetersInstalled.value as number;
    //عدد الوحدات التى تم ربط الخدمة بها
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineeringWater.noOfConnectedUnits = this.actualProjectDetailsForm.controls.noOfConnectedUnitsWater.value as number;
    //عدد الوحدات التى تم تفعيل الخدمة بها
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineeringWater.noOfUnitsWithActiveWaterService = this.actualProjectDetailsForm.controls.noOfUnitsWithActiveWaterService.value as number;


    //   صرف صحيSewage
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineerSewage = {} as LicenseProjectEngineerSewageDto;
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineerSewage.id = this.licenseProjectEngineeringProjectZonesBlocksDetailActual?.licenseProjectEngineerSewage?.id as string;
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineerSewage.licenseProjectEngineeringProjectZonesBlocksDetailId = this.licenseProjectEngineeringProjectZonesBlocksDetailActual?.id as string;
    
      //شبكات البنية التحية
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineerSewage.isInfrastructureNetwork = JSON.parse(this.actualProjectDetailsForm.controls.isInfrastructureNetworkSewage.value as string);
    //عدد الوحدات التى تم ربط الخدمة بها
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineerSewage.noOfConnectedUnits = this.actualProjectDetailsForm.controls.noOfConnectedUnits.value as number;
    //عدد الوحدات التى تم تفعيل الخدمة بها
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineerSewage.noOfUnitsWithActiveSewagerService = this.actualProjectDetailsForm.controls.noOfUnitsWithActiveSewagerService.value as number;


    //الجاهزية للسكن Units readiness to Use
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineerUnitsReadinessToUse = {} as LicenseProjectEngineerUnitsReadinessToUseDto;
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineerUnitsReadinessToUse.id = this.licenseProjectEngineeringProjectZonesBlocksDetailActual?.licenseProjectEngineerUnitsReadinessToUse?.id as string;
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineerUnitsReadinessToUse.licenseProjectEngineeringProjectZonesBlocksDetailId = this.licenseProjectEngineeringProjectZonesBlocksDetailActual?.id as string;
    //عدد الوحدات الجاهزة للتسليم للمستفيدين (موصولة بالخدمات)
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineerUnitsReadinessToUse.noOfUnitsReadyForHandover = this.actualProjectDetailsForm.controls.noOfUnitsReadyForHandover.value as number;
    //جاهزية البلوكات للتسليم متضمنة المرافق الخارجية للسكن (السلفتة - الإنارة - الأرصفة)
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.
      licenseProjectEngineerUnitsReadinessToUse.blocksReadyForHandover = JSON.parse(this.actualProjectDetailsForm.controls.blocksReadyForHandover.value as string);
    
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.licenseProjectEngineerUnitsReadinessToUse.unitsReadinessToUses = 
      this.actualProjectDetailsForm.controls.unitIds.value?.map((id: string) => ({
        licenseProjectEngineerUnitsReadinessToUseId: '00000000-0000-0000-0000-000000000000' as string,
        licenseProjectSubUnitsListCodeId: id,
      })) || [];

    //تاريخ النهاية المتوقعة
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.licenseProjectUnit = {} as LicenseProjectUnitEngineeringSupervisionReportActualDto;
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.licenseProjectUnit.id = this.licenseProjectEngineeringProjectZonesBlocksDetailActual?.licenseProjectUnit.id as string;
    this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate.licenseProjectUnit.forecastFinishDate = new Date(this.actualProjectDetailsForm.controls.forecastFinishDate.value as string);

    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectDeteilsService.saveLicenseProjectEngineeringProjectZonesBlocksDetail(this.licenseProjectEngineeringProjectZonesBlocksDetailActualCreateUpdate).subscribe((res) => {
        if (res?.isDone) {
          this._engineeringSupervisionReportActualProjectDeteilsService.submitSuccessfullyEventEmitter.emit()
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }

      })
    )
  
  }

  private observeLicenseProjectEngineeringSupervisionActualReportForm() {
    this.subscriptions.push(
      this.actualProjectDetailsForm.valueChanges.subscribe(
        (changes) => {
        }))
  }

  private observeUnitIdsChanges() {
    this.subscriptions.push(
      this.controls.unitIds.valueChanges.subscribe(() => {
        this.updateSelectedUnitCodes();
      })
    );
  }

  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
        this.save()
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

  updateSelectedUnitCodes(): void {
    const selectedUnitIds = this.controls.unitIds.value;
    if (selectedUnitIds && selectedUnitIds.length > 0) {
      this.selectedUnitCodes = selectedUnitIds.map((id: string) => {
        const unit = this.licenseProjectSubUnitsListCodes.find(unit => unit.id === id);
        return unit?.code || '';
      }).filter((code: string) => code !== '');
    } else {
      this.selectedUnitCodes = [];
    }
  }

}
