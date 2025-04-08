import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectEngineeringWorksExaminationPagingDto } from '../../dataModels/license-project-engineering-works-examination-paging-dto';
import { LicenseProjectEngineeringWorksExaminationDetails } from '../../dataModels/license-project-engineering-works-examination-details';
import { EngineeringSupervisionReportActualQualityAndBusinessService } from '../../services/engineering-supervision-report-actual-quality-and-business.service';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../services/engineering-supervision-report-actual-project-status-summary.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { ActualValueReportPagingListDto } from '../../models/actual-value-report-paging-list-dto';
@Component({
  selector: 'app-show-actual-quality-control-details',
  templateUrl: './show-actual-quality-control-details.component.html',
  styleUrls: ['./show-actual-quality-control-details.component.scss']
})
export class ShowActualQualityControlDetailsComponent {
subscriptions: Subscription[] = [];
licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
monthDate?:Date;
showValidation: boolean = false;
actualValueReport?:ActualValueReportPagingListDto
licenseProjectEngineeringWorksExamination?:LicenseProjectEngineeringWorksExaminationPagingDto;
licenseProjectEngineeringWorksExaminationDetails?:LicenseProjectEngineeringWorksExaminationDetails;

  constructor(
    private _engineeringSupervisionReportActualQualityAndBusinessService: EngineeringSupervisionReportActualQualityAndBusinessService,
   private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
   private _sharedLicenseProjectService: SharedLicenseProjectService,
    
  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();

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
         this.getLicenseProjectEngineeringWorksExamination();
        }
      })
    )
  }




  getLicenseProjectEngineeringWorksExamination() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService.getLicenseProjectEngineeringWorksExamination().subscribe(res => {
        if (res) {
        
         this.licenseProjectEngineeringWorksExamination=res as LicenseProjectEngineeringWorksExaminationPagingDto; 
         if(this.licenseProjectEngineeringWorksExamination && this.licenseProjectEngineeringWorksExamination.id)
          {
            this._engineeringSupervisionReportActualQualityAndBusinessService.getLicenseProjectEngineeringWorksExaminationDetails(this.licenseProjectId as string,
              this.licenseProjectEngineeringWorksExamination.licenseProjectEngineeringSupervisionPlannedReportDetailId as string,
              this.licenseProjectEngineeringWorksExamination.sysLicenseProjectEngineeringWorksId as string
            ).subscribe(res => {
              debugger;
              if (res) {
                debugger;
               this.licenseProjectEngineeringWorksExaminationDetails=res as LicenseProjectEngineeringWorksExaminationDetails;

              }
            })
          }

        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
