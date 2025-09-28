import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { AddTimelineFilesComponent } from '../add-timeline-files/add-timeline-files.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { statues } from 'src/app/core/models/enums/statues';
import { DatePipe } from '@angular/common';
import { LicenseTimelineProgramDto } from '../../../models/filesdata.model';
import { TimelinefilesService } from '../../../services/timelinefiles.service';


@Component({
  selector: 'app-timeline-program-files',
  providers: [DatePipe],
  templateUrl: './timeline-program-files.component.html',
  styleUrls: ['./timeline-program-files.component.scss'],
  standalone:false
})
export class TimelineProgramFilesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  baseUrl = `${environment.baseURL}/`;
  licenseTimelineProgram!: LicenseTimelineProgramDto;
  statuesCode = statues
  timeshecduleStatues!: string | undefined
  timeshecdulestatuesId!: number | undefined

  localization = {
    threeDReportFile: "التقرير الثردي",
    generalSitePlanFile: "مخطط الموقع العام",
    primaveraFile: " البرنامج الزمني بصيغة البريمافيرا",
    scheduleFile: " البرنامج الزمني بصيغة pdf",
    workProgressCurveMonthlyAndCumulativePercentageOfCompletionFile: " منحنى تقدم الأعمال (نسبة الإنجاز الشهرية والتراكمية) اكسيل",
    cashFlowCurveFile: "منحنى التدفقات النقدية - اكسيل",
    employmentCountCurveFile: " منحنى عدد العمالة - اكسيل",
    licenseProjectTimeScheduleOtherAttachments: "مرفقات اخري (يمكنك تحميل أي عدد من المرفقات)",
  }

  constructor(private PopupService: PopupService,
    private _timelinefilesService: TimelinefilesService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getTimeShecduledDetails()
    this.observeSubmitSuccessfullyEventEmitter()
  }

  getTimeShecduledDetails() {
    this.subscriptions.push(
      this._timelinefilesService.timeshecduledDetails$.subscribe(res => {
        this.licenseTimelineProgram = res
        this.timeshecdulestatuesId = this.licenseTimelineProgram.externalStatus?.id
        this.timeshecduleStatues = this.licenseTimelineProgram.externalStatus?.name
      })
    )
  }

  private observeSubmitSuccessfullyEventEmitter() {
    this.subscriptions.push(
      this._timelinefilesService.submitSuccessfullyEventEmitter.subscribe(res => {
        this._timelinefilesService.getLicenseTimelneProgramByID(this.licenseTimelineProgram.id).subscribe()
      })
    )
  }

  openDialog() {
    let popupData: PopupData = {
      id: this.licenseTimelineProgram.id,
      title: " البرنامج الزمني " + this.datePipe.transform(this.licenseTimelineProgram.createdOn, 'dd/MM/yyyy'),
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
    this.PopupService.updatePopupData(popupData);
  }

  backToList(): void {
    this._timelinefilesService.returnToList.emit(true)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
