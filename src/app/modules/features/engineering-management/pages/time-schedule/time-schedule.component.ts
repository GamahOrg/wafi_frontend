import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';

import { TimelinefilesService } from '../../services/timelinefiles.service';
import { licenseProjectTimeScheduleRequestStatusEnum } from '../../models/filesdata.model';
import { RequestMenuComponent } from './request-menu/request-menu.component';
import { NotesComponent } from './notes/notes.component';
import { TimelineProgramFilesComponent } from './timeline-program-files/timeline-program-files.component';


@Component({
  selector: 'app-time-schedule',
  templateUrl: './time-schedule.component.html',
  styleUrls: ['./time-schedule.component.scss'],
  standalone: false
})
export class TimeScheduleComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  
  localization = {
    timelineProgramFiles: "ملفات البرنامج الزمني",
    projectManagerNotes: "الملاحظات",
    resultRequestNeeds : 'نتيجة قائمة المتطلبات',
  };

  showDetails:boolean = false;

  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        icon: '',
        title: this.localization.timelineProgramFiles,
        Component: TimelineProgramFilesComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.projectManagerNotes,
        Component: NotesComponent,
        disabled: false,
        isVisible: true,
       
      },
      {
        icon: '',
        title: this.localization.resultRequestNeeds,
        Component: RequestMenuComponent,
        disabled: false,
        isVisible: true,
       
      },
    ],
  };

  constructor(private _tabsService: TabsService, private _timelinefilesService: TimelinefilesService) { }

  ngOnInit(): void {
    this.observeshowtimelineDetails()
    this.showReportDetails();
  }

  private observeshowtimelineDetails(){
    this.subscriptions.push(
      this._timelinefilesService.showtimelineDetails.subscribe(res=>{
        this.getTimeShecduledDetails(res)
      })
    )
  }

  private updateTabContent(): void {
    this._tabsService.updateVerticalTabContent(this.tabContent);
  }

  public getTimeShecduledDetails(id : string){
    this.subscriptions.push(
      this._timelinefilesService.getLicenseTimelneProgramByID(id).subscribe(res=>{
       if(res.externalStatus?.id == licenseProjectTimeScheduleRequestStatusEnum.New ||
         res.externalStatus?.id == licenseProjectTimeScheduleRequestStatusEnum.UnderStudy)
           this.tabContent.tabsComponentList[2].isVisible = false;

      this.updateTabContent()
      this.showDetails = true        
      })
    )
  }

  showReportDetails(){
    this._timelinefilesService.returnToList.subscribe(x => {
      if(x)
        this.showDetails = false;
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
