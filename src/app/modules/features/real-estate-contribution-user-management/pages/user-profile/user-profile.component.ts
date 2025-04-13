import { Component, OnInit } from '@angular/core';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { ProjectsManegersComponent } from '../../component/projects-manegers/projects-manegers.component';
import { RegistrationRequestComponent } from '../../component/registration-request/registration-request.component';
import { Subscription } from 'rxjs';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserManagementDelegatorsComponent } from '../../component/user-management-delegators/user-management-delegators.component';
import { UsermanagmentFacilitiesComponent } from '../../component/usermanagment-facilities/usermanagment-facilities.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  subscriptions: Subscription[] = [];
  userData: customerResponse | null = null;
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList:
      [
        {
          icon: '',
          title: " المفوضون",
          Component: UserManagementDelegatorsComponent,
          disabled: false,
          isVisible: true,
          id: "UserManagementDelegatorsComponent"
        },
        // {
        //   icon: '',
        //   title: "طلبات التسجيل",
        //   Component: RegistrationRequestComponent,
        //   disabled: false,
        //   isVisible: true,
        //   id: "RegistrationRequestComponent"
        // },
        {
          icon: '',
          title: " المنشآت",
          Component: UsermanagmentFacilitiesComponent,
          disabled: false,
          isVisible: true,
          id: "UsermanagmentFacilitiesComponent"
        },
       
    
      ]
  }

  constructor(
    private _tabsService: TabsService,
    private _userDataService: UserDataService) {

  }

  ngOnInit(): void {
    this.updateTabContent();
    this.obseveCustomerData();
  }

  private updateTabContent() {
    this._tabsService.updateTabContent(this.tabContent);
    this._tabsService.updateActiveTabIndex(0);
    this._tabsService.updateActiveVerticalTabIndex(0);
  }
  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
