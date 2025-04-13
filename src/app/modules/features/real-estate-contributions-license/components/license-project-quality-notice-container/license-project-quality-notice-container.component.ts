import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { ShowLicenseProjectQualityNoticeDetalisComponent } from '../show-license-project-quality-notice-detalis/show-license-project-quality-notice-detalis.component';
import { LicenseProjectQualityNoticeReplyListComponent } from '../license-project-quality-notice-reply-list/license-project-quality-notice-reply-list.component';
import { LicenseProjectQualityNoticeService } from '../../services/license-project-quality-notice.service';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';

@Component({
  selector: 'app-license-project-quality-notice-container',
  templateUrl: './license-project-quality-notice-container.component.html',
  styleUrls: ['./license-project-quality-notice-container.component.scss']
})
export class LicenseProjectQualityNoticeContainerComponent {
  subscriptions: Subscription[] = [];
  showDetails:boolean=false;
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
     {
        icon: '',
        title: "عرض تفاصيل اشعار الجودة",
        Component: ShowLicenseProjectQualityNoticeDetalisComponent,
        disabled: false,
        isVisible: true,
      }, 
      {
        icon: '',
        title: "عرض ملاحظات اشعار الجودة",
        Component: LicenseProjectQualityNoticeReplyListComponent,
        disabled: false,
        isVisible: true,
      },
    ],
  };
  constructor(
    private _licenseProjectQualityNoticeService: LicenseProjectQualityNoticeService,
    private _tabsService: TabsService
  ) { }
  ngOnInit(): void {
    
    this.observeLicenseProjectQualityNoticDetails();
  }
  private observeLicenseProjectQualityNoticDetails(){
    this.subscriptions.push(
      this._licenseProjectQualityNoticeService.showLicenseProjectQualityNoticeDetails.subscribe(res=>{
        
        this._licenseProjectQualityNoticeService.setLicenseProjectQualityNoticeId(res)
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
