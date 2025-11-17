import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteDto } from '../../../models/license-project-engineering-supervision-planned-monthly-report-study-note-dto';
import { LicenseProjectTimeScheduleOwnerType } from '../../../enums/LicenseProjectTimeScheduleOwnerType.enum';
import { ActualValueReportPagingListDto } from '../../../models/actual-value-report-paging-list-dto';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../../services/engineering-supervision-report-actual-project-status-summary.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';
import { LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService } from '../../../services/license-project-engineering-supervision-planned-monthly-report-study-note.service';

@Component({
  selector: 'app-actual-notes',
  templateUrl: './actual-notes.component.html',
  styleUrls: ['./actual-notes.component.scss'],
})
export class ActualNotesComponent {
  licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteList?: LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteDto[];
  subscriptions: Subscription[] = [];
  ownerTypes = LicenseProjectTimeScheduleOwnerType;
  monthDate?: Date;
  actualValueReport?: ActualValueReportPagingListDto;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  constructor(
    private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService: LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService
  ) {}

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();

    if (this.licenseProjectId) this.getmonthDate();
  }
  getmonthDate() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectStatusSummaryService
        .getmonthDate()
        .subscribe((res) => {
          if (res) {
            this.actualValueReport = res as ActualValueReportPagingListDto;
            this.monthDate = this.actualValueReport.monthDate as Date;
            this.getLicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteList();
          }
        })
    );
  }

  getLicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteList() {
    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService
        .getLicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteList(
          this.licenseProjectId as string,
          this.monthDate as Date
        )
        .subscribe((res) => {
          this.licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteList =
            res as LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteDto[];
          console.log(res);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
