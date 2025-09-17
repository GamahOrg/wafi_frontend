import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { statues } from 'src/app/core/models/enums/statues';
import { Subscription } from 'rxjs';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { AddTimelineFilesComponent } from '../add-timeline-files/add-timeline-files.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseTimelineProgramDto } from '../../../models/filesdata.model';
import { TimelinefilesService } from '../../../services/timelinefiles.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';

@Component({
  selector: 'app-time-schedule-program',
  templateUrl: './time-schedule-program.component.html',
  styleUrls: ['./time-schedule-program.component.scss'],
  standalone: false
})
export class TimeScheduleProgramComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  date!: string;
  statuesCode = statues
  licenseProjectId!: string | null
  mainfileShecduleData!: LicenseTimelineProgramDto
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  MonthlyfileShecduleData: Pagination<LicenseTimelineProgramDto[]> = {} as Pagination<LicenseTimelineProgramDto[]>;
  monthlytimeschecduledprogram: LicenseTimelineProgramDto[] = [];

  constructor(private _popupService: PopupService,
    private _timelinefilesService: TimelinefilesService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _paginationService: PaginationService) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage()
    this.watchPaginationActions()
    this.observesubmitSuccessfullyEventEmitter()
  }

  dateFormat(scheduleDate: string | null) {
    if (scheduleDate)
      this.date = new Intl.DateTimeFormat('AR-EG', { month: 'long', year: 'numeric' }).format(new Date(scheduleDate));

    return this.date;
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getMainLicenseProjectTimeScheduleByID()
      this.GetLicenseProjectTimeSchedule()
    }
  }


  getMainLicenseProjectTimeScheduleByID() {
    this.subscriptions.push(
      this._timelinefilesService.GetMainLicenseProjectTimeSchedule(this.licenseProjectId).subscribe(res => {
        if (res)
          this.mainfileShecduleData = res
      })
    )
  }


  GetLicenseProjectTimeSchedule() {
    this.subscriptions.push(
      this._timelinefilesService.GetLicenseProjectTimeSchedules(this.licenseProjectId, this.pagintationData.currentPage, this.pagintationData.pageSize)
        .subscribe((res) => {
          this.updateRequestList(res as Pagination<LicenseTimelineProgramDto[]>)
        }
        )
    )
  }


  private updateRequestList(TypeListView: Pagination<LicenseTimelineProgramDto[]>): void {
    this.MonthlyfileShecduleData = TypeListView;
    this.setPaginationData(
      this.MonthlyfileShecduleData.pageSize,
      this.MonthlyfileShecduleData.totalCount,
      this.MonthlyfileShecduleData.pageCount
    );
    this.monthlytimeschecduledprogram = this.MonthlyfileShecduleData.results.map(fileShecduleData => ({ ...fileShecduleData, formatedmonthDate: this.dateFormat(fileShecduleData.monthDate) }));
  }

  private setPaginationData(pageSize: number, total: number, pageCount: number): void {
    this.pagintationData.pageCount = pageCount
    this.pagintationData.pageSize = pageSize
    this.pagintationData.totalCount = total
    this._paginationService.updatePaginationData(this.pagintationData);
  }

  watchPaginationActions(): void {
    this.watchPagechanged();
    this.watchPaginationClicked();
  }

  private watchPagechanged(): void {
    this.subscriptions.push(
      this._paginationService.getPageChanged().subscribe((pageNo) => {
        this.newPageNo = pageNo;
      })
    )
  }

  private watchPaginationClicked(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.pagintationData.currentPage != nextPage) {
          this.loadNextPage(nextPage);
          this.pagintationData.currentPage = this.newPageNo;
        }
      })
    );
  }

  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.GetLicenseProjectTimeSchedule()
  }

  private observesubmitSuccessfullyEventEmitter() {
    this.subscriptions.push(
      this._timelinefilesService.submitSuccessfullyEventEmitter.subscribe(timeLineId => {
        this.getLicenseProjectIdStorage()
      })
    );
  }

  public getTimeShecduledDetails(id: string) {
    this._timelinefilesService.showtimelineDetails.emit(id)
  }

  updateTimeSchedule(showDate: boolean) {
    this._timelinefilesService.updateTimeShecduledData({} as LicenseTimelineProgramDto);
    this._timelinefilesService.showDate = showDate
    this.openDialog();
  }

  openDialog() {
    let popupData: PopupData = {
      title: "إضافة البرنامج الزمني ",
      component: AddTimelineFilesComponent,
      buttons: [{
        icon: "",
        title: "إلغاء",
        actionType: ButtonType.cancel,
        isVisable: true,
        isDisables: false,
        // onclick: () => this.openNotesDialog()
      },
      {
        icon: "",
        title: "حفظ",
        actionType: ButtonType.confirm,
        isVisable: true,
        isDisables: false,
      }],
    };
    this._popupService.updatePopupData(popupData);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
