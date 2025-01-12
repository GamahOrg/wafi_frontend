import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { ProjectBusinessCaseReportService } from '../../services/project-business-case-report.service';
import { ShowProjectBusinessCaseComponent } from '../show-project-business-case/show-project-business-case.component';

@Component({
  selector: 'app-project-business-case-container',
  templateUrl: './project-business-case-container.component.html',
  styleUrls: ['./project-business-case-container.component.scss']
})
export class ProjectBusinessCaseContainerComponent {
  subscriptions: Subscription[] = [];
  showDetails:boolean=false;
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
     {
        icon: '',
        title: "عرض تفاصيل  حالة الأعمال",
        Component: ShowProjectBusinessCaseComponent,
        disabled: false,
        isVisible: true,
      }, 
    ],
  };
  constructor(
    private _projectBusinessCaseReportService: ProjectBusinessCaseReportService,
    private _tabsService: TabsService
  ) { }
  ngOnInit(): void {
    
    this.observeProjectBusinessCaseReporDetails();
  }
  private observeProjectBusinessCaseReporDetails(){
    this.subscriptions.push(
      this._projectBusinessCaseReportService.showprojectBusinessCaseReporDetails.subscribe(res=>{
        
        this._projectBusinessCaseReportService.setProjectBusinessCaseReportId(res)
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
