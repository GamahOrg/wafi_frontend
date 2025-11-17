import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActualValueReportPagingListDto } from '../../../models/actual-value-report-paging-list-dto';
import { ConstructionWorkStatusActualDto } from '../../../models/construction-work-status-actual-dto';
import { LicenseProjectEngineeringActualRelativeWeightDto } from '../../../models/license-project-engineering-actual-relative-weight-dto';
import { EngineeringSupervisionReportActualQualityAndBusinessService } from '../../../services/engineering-supervision-report-actual-quality-and-business.service';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../../services/engineering-supervision-report-actual-project-status-summary.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';

@Component({
  selector: 'app-show-actual-relative-weight-details',
  templateUrl: './show-actual-relative-weight-details.component.html',
  styleUrls: ['./show-actual-relative-weight-details.component.scss']
})
export class ShowActualRelativeWeightDetailsComponent {
subscriptions: Subscription[] = [];
monthDate?:any;
actualValueReport?:ActualValueReportPagingListDto;
licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
showValidation: boolean = false;
constructionWorkStatusActual?: ConstructionWorkStatusActualDto ;
licenseProjectEngineeringActualRelativeWeight?:LicenseProjectEngineeringActualRelativeWeightDto
totalContrastCompletionRateColor?:string;
contrastCompletionRateColor?:string;
  constructor(
    private _engineeringSupervisionReportActualQualityAndBusinessService: EngineeringSupervisionReportActualQualityAndBusinessService,
   private _sharedLicenseProjectService: SharedLicenseProjectService,
  private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
       
    
  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    
    if(this.licenseProjectId)
      this.getmonthDate()
  }
  getmonthDate() {
    
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectStatusSummaryService.getmonthDate().subscribe(res => {
        
        if (res) {
          
          this.actualValueReport= res as ActualValueReportPagingListDto;
          this.monthDate = this.actualValueReport.monthDate as Date;
         this.getLicenseProjectEngineeringActualRelativeWeight();
        }
      })
    )
  }

  getLicenseProjectEngineeringActualRelativeWeight() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService.getLicenseProjectEngineeringActualRelativeWeightObj().subscribe(res => {
        if (res) {
        
         this.licenseProjectEngineeringActualRelativeWeight=res as LicenseProjectEngineeringActualRelativeWeightDto; 
         this.getlicenseProjectActualRelativeWeightDetails()

        }
      })
    )
  }
  getlicenseProjectActualRelativeWeightDetails() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService.getLicenseProjectActualRelativeWeightDetails(this.licenseProjectId as string,this.licenseProjectEngineeringActualRelativeWeight?.licenseRelativeWeightId as string,this.monthDate as Date).subscribe(res => {
        if (res) {
        
         this.constructionWorkStatusActual=res as ConstructionWorkStatusActualDto; 
         if(this.constructionWorkStatusActual && this.constructionWorkStatusActual.totalContrastCompletionRate < 0)
          this.totalContrastCompletionRateColor='red';
         if(this.constructionWorkStatusActual && this.constructionWorkStatusActual.contrastCompletionRate < 0)
          this.contrastCompletionRateColor='red';
        }
      })
    )
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
