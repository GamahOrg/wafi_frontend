import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../services/engineering-supervision-report-actual-project-status-summary.service';
import { ActualValueReportService } from '../../services/actual-value-report.service';
import { ShowActualValueWorkStatuesReportComponent } from '../show-actual-value-work-statues-report/show-actual-value-work-statues-report.component';

@Component({
  selector: 'app-actual-value-report-container',
  templateUrl: './actual-value-report-container.component.html',
  styleUrls: ['./actual-value-report-container.component.scss']
})
export class ActualValueReportContainerComponent {
  subscriptions: Subscription[] = [];
  showDetails:boolean=false;
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        icon: '',
        title: "حالة الأعمال",
        Component: ShowActualValueWorkStatuesReportComponent,
        disabled: false,
        isVisible: true,
      },  
    ],
  };
  constructor(
    private _tabsService: TabsService,
    private _actualValueReportService: ActualValueReportService,
    private _engineeringSupervisionReportActualProjectStatusSummaryService:EngineeringSupervisionReportActualProjectStatusSummaryService
  ) { }
  ngOnInit(): void {
    
    this.observeGetmonthDate();
  }
  private observeGetmonthDate(){
    this.subscriptions.push(
      this._actualValueReportService.showActualValueReportDetails.subscribe(res=>{
        
        this._engineeringSupervisionReportActualProjectStatusSummaryService.setmonthDate(res)
        this.updateTabContent();
        this.showDetails = true 
      })
    )
  }
  private updateTabContent(): void {
    this._tabsService.updateVerticalTabContent(this.tabContent);
  }
 
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
