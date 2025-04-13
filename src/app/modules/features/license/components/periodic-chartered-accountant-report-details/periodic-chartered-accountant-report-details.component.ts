import { Component } from '@angular/core';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PeriodicCharteredAccountantReportService } from '../../services/periodic-chartered-accountant-report.service';
import { Subscription } from 'rxjs';
import { PeriodicCharteredAccountantReportDetailsDto } from '../../models/periodic-chartered-accountant-report-details-dto';
import * as saveAs from 'file-saver';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-periodic-chartered-accountant-report-details',
  templateUrl: './periodic-chartered-accountant-report-details.component.html',
  styleUrls: ['./periodic-chartered-accountant-report-details.component.scss']
})
export class PeriodicCharteredAccountantReportDetailsComponent {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  reportId: string | null = "00000000-0000-0000-0000-000000000000";
  reportDetails:PeriodicCharteredAccountantReportDetailsDto | null = null ;
  constructor(
    private _popupService: PopupService,
    private _periodicCharteredAccountantReportService:PeriodicCharteredAccountantReportService
  ) { }

  ngOnInit(): void {
    this.getAccountReportId();
    }
    getAccountReportId(): void {
      this.reportId = this._periodicCharteredAccountantReportService.getLicenseProjectAccountReportIdStorage();
      if (this.reportId)
        this.getReportDetails();
    }
    getReportDetails(){
      this.subscriptions.push(
        this._periodicCharteredAccountantReportService.GetPeriodicCharteredAccountantReportDetail(this.reportId as string).subscribe((res: PeriodicCharteredAccountantReportDetailsDto) => {
          this.reportDetails  = res as PeriodicCharteredAccountantReportDetailsDto;
        })
      )
    }
    generateExcel() {
      this._periodicCharteredAccountantReportService.CreateExcel(this.reportId as string).subscribe((res) => {
        if (res) {
          const fileName = `report_${this.reportId}.xlsx`;
          saveAs(res.body,fileName);
        }
      });
    }
    ngOnDestroy(): void {
      this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
    }
}
