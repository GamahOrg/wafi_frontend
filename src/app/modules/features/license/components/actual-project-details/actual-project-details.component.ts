import { Component } from '@angular/core';
import { unitslist } from '../../dataModels/planed-engineer-project-details';
import { LicenseProjectEngineeringProjectZonesBlocksDetailActualDto } from '../../dataModels/license-project-engineering-project-zones-blocks-detail-actual-dto';
import { Subscription } from 'rxjs';
import { EngineeringSupervisionReportActualProjectDeteilsService } from '../../services/engineering-supervision-report-actual-project-deteils.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../services/engineering-supervision-report-actual-project-status-summary.service';
import { ActualValueReportPagingListDto } from '../../models/actual-value-report-paging-list-dto';

@Component({
  selector: 'app-actual-project-details',
  templateUrl: './actual-project-details.component.html',
  styleUrls: ['./actual-project-details.component.scss']
})
export class ActualProjectDetailsComponent {
  subscriptions: Subscription[] = [];
  actualValueReport?:ActualValueReportPagingListDto;
  licenseProjectEngineeringProjectZonesBlocksDetailActual?: LicenseProjectEngineeringProjectZonesBlocksDetailActualDto;
  monthDate?: Date;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  licenseProjectUnit?: unitslist;
  showValidation: boolean = false;

  constructor(
    private _engineeringSupervisionReportActualProjectDeteilsService: EngineeringSupervisionReportActualProjectDeteilsService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
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
          this.actualValueReport= res as ActualValueReportPagingListDto;
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
          this.licenseProjectUnit = res as unitslist;
          this.getLicenseProjectEngineeringProjectZonesBlocksDetailActual();
        }
      })
    )
  }

  getLicenseProjectEngineeringProjectZonesBlocksDetailActual() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectDeteilsService.getLicenseProjectEngineeringProjectZonesBlocksDetailActual(this.licenseProjectId as string, this.monthDate as Date, this.licenseProjectUnit?.id as string).subscribe(res => {
        if (res) {
          this.licenseProjectEngineeringProjectZonesBlocksDetailActual = res as LicenseProjectEngineeringProjectZonesBlocksDetailActualDto;
        }
      })
    )
  }
 
}
