import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { EngineeringSupervisionPlannedReportStudyNoteDto } from '../../../models/master-license-project-engineering-supervision-planned-report-dto';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../../services/license-project-engineering-supervision-planned-report-detail.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';

@Component({
  selector: 'app-planned-engineering-supervision-reports-request-notes',
  templateUrl: './planned-engineering-supervision-reports-request-notes.component.html',
  styleUrls: ['./planned-engineering-supervision-reports-request-notes.component.scss']
})
export class PlannedEngineeringSupervisionReportsRequestNotesComponent {
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  subscriptions: Subscription[] = [];
  engineeringSupervisionPlannedReportStudyNoteList: EngineeringSupervisionPlannedReportStudyNoteDto[] = [];
  constructor(
    private _licenseProjectEngineeringSupervisionPlannedReportDetailService: LicenseProjectEngineeringSupervisionPlannedReportDetailService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,

  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage()
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.GetLicenseProjectEngineeringSupervisionPlannedReportStudyNote();

    }
  }

  GetLicenseProjectEngineeringSupervisionPlannedReportStudyNote(): void {
    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService.GetLicenseProjectEngineeringSupervisionPlannedReportStudyNote(this.licenseProjectId as string)
        .subscribe((res: EngineeringSupervisionPlannedReportStudyNoteDto[] | null) => {
          if (res && res.length > 0)
            this.engineeringSupervisionPlannedReportStudyNoteList = res
        })

    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
