import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectHealthAndSafetyMonitoringDto } from '../../dataModels/license-project-health-and-safety-monitoring-dto';
import { LicenseProjectHealthAndSafetyMonitoringService } from '../../services/license-project-health-and-safety-monitoring.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../services/engineering-supervision-report-actual-project-status-summary.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddEditHealthAndSafetyMonitoringComponent } from '../add-edit-health-and-safety-monitoring/add-edit-health-and-safety-monitoring.component';
import { ActualValueReportPagingListDto,LicenseProjectEngineeringRequestStatusEnum } from '../../models/actual-value-report-paging-list-dto';
@Component({
  selector: 'app-monthly-engineering-supervision-reports-risks-and-safety',
  templateUrl: './monthly-engineering-supervision-reports-risks-and-safety.component.html',
  styleUrls: ['./monthly-engineering-supervision-reports-risks-and-safety.component.scss']
})
export class MonthlyEngineeringSupervisionReportsRisksAndSafetyComponent {
  showRateFlag:boolean=true;
    subscriptions: Subscription[] = [];
    actualValueReport?:ActualValueReportPagingListDto
    licenseProjectEngineeringRequestStatusEnum=LicenseProjectEngineeringRequestStatusEnum
    licenseProjectHealthAndSafetyMonitoring?: LicenseProjectHealthAndSafetyMonitoringDto ;
  monthDate ?:Date;
    licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
    showValidation: boolean = false;
    constructor(
     private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
     private _licenseProjectHealthAndSafetyMonitoringService: LicenseProjectHealthAndSafetyMonitoringService,
      private _sharedLicenseProjectService: SharedLicenseProjectService,
      private _popupService: PopupService,
      
      
    ) { }
  
    ngOnInit(): void {
      this.getLicenseProjectIdStorage();
      this.observesubmitSuccessfullyEventEmitter();
    }
  
   
    private getLicenseProjectIdStorage(): void {
      this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
      debugger;
      if(this.licenseProjectId)
        this.getmonthDate()
    }
    getmonthDate() {
      debugger;
      this.subscriptions.push(
        this._engineeringSupervisionReportActualProjectStatusSummaryService.getmonthDate().subscribe(res => {
          debugger;
          if (res) {
            debugger;
            this.actualValueReport= res as ActualValueReportPagingListDto;
            this.monthDate = this.actualValueReport.monthDate as Date;
           this.getLicenseProjectHealthAndSafetyMonitoringDetails();
          }
        })
      )
    }
    getLicenseProjectHealthAndSafetyMonitoringDetails() {
      debugger;
      this.subscriptions.push(
        this._licenseProjectHealthAndSafetyMonitoringService.getLicenseProjectHealthAndSafetyMonitoringDetails(this.licenseProjectId as string,this.monthDate as Date).subscribe(res => {
          debugger;
          if (res) {
            debugger;
           this.licenseProjectHealthAndSafetyMonitoring=res as LicenseProjectHealthAndSafetyMonitoringDto;
          }
        })
      )
    }
   openAddEditHealthAndSafetyMonitoringComponentDialog(): void {
     this._licenseProjectHealthAndSafetyMonitoringService.
     setLicenseProjectHealthAndSafetyMonitoring(this.licenseProjectHealthAndSafetyMonitoring as LicenseProjectHealthAndSafetyMonitoringDto);
        let Data = {
          title: "تعديل بيانات الصحة والسلامة",
          component: AddEditHealthAndSafetyMonitoringComponent,
          id: "AddEditHealthAndSafetyMonitoringComponent"
        } as PopupData;
        this._popupService.updatePopupData(Data);
        
      } 
      private observesubmitSuccessfullyEventEmitter(){
        this.subscriptions.push(
          this._licenseProjectHealthAndSafetyMonitoringService.submitSuccessfullyEventEmitter.subscribe(res=>{
            this.getLicenseProjectIdStorage()
          }));
      }
    ngOnDestroy(): void {
     this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
   }
 
}
