import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilesData } from '../../models/files-data';
import { statues } from 'src/app/core/models/enums/statues';
import { TimelinefilesService } from '../../services/timelinefiles.service';
import { DatePipe } from '@angular/common';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { AddTimelineFilesComponent } from '../add-timeline-files/add-timeline-files.component';
import { PopupService } from 'src/app/shared/services/popup/popup.service';

@Component({
  selector: 'app-timeline-program-files',
  templateUrl: './timeline-program-files.component.html',
  styleUrls: ['./timeline-program-files.component.scss']
})
export class TimelineProgramFilesComponent  implements OnInit , OnDestroy{
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  filesData! : FilesData;
  statuesCode = statues
  timeshecduleStatues! : string | undefined
  timeshecdulestatuesId! : number | undefined

  localization = {
    threeDReportFile : " االتفرير السردي",
    generalSitePlanFile : "مخطط الموقع العام",
    primaveraFile : " البرنامج الزمني بصيغة البريمافيرا",
    scheduleFile :" البرنامج الزمني بصيغة pdf",
    workProgressCurveMonthlyAndCumulativePercentageOfCompletionFile : " منحني تقدم الأعمال (نسبة الإنجاز الشهرية والتراكمية) اكسيل",
    cashFlowCurveFile : "منحني التدفقات النقدية - اكسيل",
    employmentCountCurveFile : " منحني عدد العمالة - اكسيل",
    licenseProjectTimeScheduleOtherAttachments : "مرفقات اخري (يمكنك تحميل أي عدد من المرفقات)",
  }
  
  
  constructor( private PopupService : PopupService 
    , private _timelinefilesService : TimelinefilesService,
    private datePipe: DatePipe
    ) { }

  ngOnInit(): void {
    this.getTimeShecduledDetails()
    this.observesubmitSuccessfullyEventEmitter()
 
  }


  getTimeShecduledDetails(){
    this.subscriptions.push(
      this._timelinefilesService.timeshecduledDetails$.subscribe(res=>{
        this.filesData = res
        console.log("this.filesData", this.filesData)
        this.timeshecdulestatuesId = this.filesData.externalStatus?.id
        this.timeshecduleStatues = this.filesData.externalStatus?.name 
        
      })
    )
  }

  private observesubmitSuccessfullyEventEmitter(){
    this.subscriptions.push(
      this._timelinefilesService.submitSuccessfullyEventEmitter.subscribe(res=>
        {
          this._timelinefilesService.getLicensetimelneProgramByID(this.filesData.id).subscribe()  
        }
        )
    )
  
  }


  openDialog(){
    let popupData : PopupData = {
      id: this.filesData.id,
      title: " البرنامج الزمني "+ this.datePipe.transform(this.filesData.createdOn, 'dd/MM/yyyy'),
       
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

 



  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }


}
