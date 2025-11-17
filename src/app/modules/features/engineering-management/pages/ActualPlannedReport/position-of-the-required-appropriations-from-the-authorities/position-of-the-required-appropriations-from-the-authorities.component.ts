import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectEngineeringRequestStatusEnum, type ActualValueReportPagingListDto } from '../../../models/actual-value-report-paging-list-dto';
import { MasterLicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto } from '../../../models/master-license-project-engineering-status-of-funds-required-from-entities-dto';
import { LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto } from '../../../models/license-project-engineering-status-of-funds-required-from-entities-dto';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../../services/engineering-supervision-report-actual-project-status-summary.service';
import { LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService } from '../../../services/license-project-engineering-status-of-funds-required-from-entities.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';
import { AddEditDesignPhaseCreditsComponent } from '../add-edit-design-phase-credits/add-edit-design-phase-credits.component';
import { ShowDesignPhaseCreditsComponent } from '../show-design-phase-credits/show-design-phase-credits.component';
import { AddEditProjectDeliveryPhaseApprovalsComponent } from '../add-edit-project-delivery-phase-approvals/add-edit-project-delivery-phase-approvals.component';
@Component({
  selector: 'app-position-of-the-required-appropriations-from-the-authorities',
  templateUrl: './position-of-the-required-appropriations-from-the-authorities.component.html',
  styleUrls: ['./position-of-the-required-appropriations-from-the-authorities.component.scss']
})
export class PositionOfTheRequiredAppropriationsFromTheAuthoritiesComponent {
  showRateFlag: boolean = true;
  subscriptions: Subscription[] = [];
  actualValueReport?: ActualValueReportPagingListDto
  licenseProjectEngineeringRequestStatusEnum = LicenseProjectEngineeringRequestStatusEnum
  masterLicenseProjectEngineeringStatusOfFundsRequiredFromEntities?: MasterLicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto;
  licenseProjectEngineeringStatusOfFundsRequiredFromEntities?: LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto[];
  licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesProjectDeliveryPhaseList?: LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto[];
  licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDesignStageList?: LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto[];

  monthDate?: Date;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;
  constructor(
    private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
    private _licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService: LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,


  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observesubmitSuccessfullyEventEmitter();
  }


  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    
    if (this.licenseProjectId)
      this.getmonthDate()
  }
  getmonthDate() {
    
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectStatusSummaryService.getmonthDate().subscribe(res => {
        
        if (res) {
          
          this.actualValueReport = res as ActualValueReportPagingListDto;
          this.monthDate = this.actualValueReport.monthDate as Date;
          this.getLicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesList();
        }
      })
    )
  }
  getLicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesList() {
    
    this.subscriptions.push(
      this._licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService.getLicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesList(this.licenseProjectId as string, this.monthDate as Date).subscribe(res => {
        
        if (res) {
          
          this.masterLicenseProjectEngineeringStatusOfFundsRequiredFromEntities = res as MasterLicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto;
          this._licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService.
            setLicenseProjectEngineeringSupervisionPlannedReportDetailIds(this.masterLicenseProjectEngineeringStatusOfFundsRequiredFromEntities.id);

          this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities = this.masterLicenseProjectEngineeringStatusOfFundsRequiredFromEntities.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesList as LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto[];
          if (this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities && this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities.length > 0) {
            this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesProjectDeliveryPhaseList =
              this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities.filter(x => x.isForDelivery);

            this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDesignStageList =
              this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities.filter(x => !x.isForDelivery);
          }
        }
      })
    )
  }


  openAddEditDesignPhaseCreditsDialog(data: any): void {
    this._licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService.
      setLicenseProjectEngineeringStatusOfFundsRequiredFromEntities(data);
    let Data = {
      title: "تعديل بيانات اعتمادات مرحلة التصميم",
      component: AddEditDesignPhaseCreditsComponent,
      id: "AddEditDesignPhaseCreditsComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data);

  }
  openShowDesignPhaseCreditsDialog(data: any): void {
    this._licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService.
      setLicenseProjectEngineeringStatusOfFundsRequiredFromEntities(data);
    let Data = {
      title: "عرض بيانات اعتمادات مرحلة التصميم",
      component: ShowDesignPhaseCreditsComponent,
      id: "ShowDesignPhaseCreditsComponent",
      buttons: []
    } as PopupData;
    this._popupService.updatePopupData(Data);

  }

  openAddEditProjectDeliveryPhaseApprovalsDialog(data: any): void {
    this._licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService.
      setLicenseProjectEngineeringStatusOfFundsRequiredFromEntities(data);
    let Data = {
      title: "تعديل بيانات موافقات مرحلة تسليم المشروع",
      component: AddEditProjectDeliveryPhaseApprovalsComponent,
      id: "AddEditProjectDeliveryPhaseApprovalsComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data);

  }
  openShowProjectDeliveryPhaseApprovalsDialog(data: any): void {
    this._licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService.
      setLicenseProjectEngineeringStatusOfFundsRequiredFromEntities(data);
    let Data = {
      title: "عرض بيانات موافقات مرحلة تسليم المشروع",
      component: ShowDesignPhaseCreditsComponent,
      id: "ShowProjectDeliveryPhaseApprovalsComponent",
      buttons: []
    } as PopupData;
    this._popupService.updatePopupData(Data);

  }
  private observesubmitSuccessfullyEventEmitter() {
    this.subscriptions.push(
      this._licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService.submitSuccessfullyEventEmitter.subscribe(res => {
        this.getLicenseProjectIdStorage()
      }));
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
