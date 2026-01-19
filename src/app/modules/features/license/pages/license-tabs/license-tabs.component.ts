import { Component, OnDestroy, OnInit } from '@angular/core';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { CorrectingUnitsListComponent } from '../correcting-units-list/correcting-units-list.component';
import { LincenseListComponent } from '../lincense-list/lincense-list.component';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-license-tabs',
  templateUrl: './license-tabs.component.html',
  styleUrls: ['./license-tabs.component.scss']
})
export class LicenseTabsComponent implements OnInit, OnDestroy {
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        title: 'قائمة طلبات التراخيص',
        Component: LincenseListComponent,
        disabled: false,
        id: 'LicenseList',
        errNum: 0,
        tabErrors: [],
        isVisible: true,
        isCompleted: false,
      },
      {
        title: 'قائمة طلبات تصحيح الوحدات',
        Component: CorrectingUnitsListComponent,
        disabled: false,
        id: 'CorrectingUnitList',
        errNum: 0,
        tabErrors: [],
        isVisible: true,
        isCompleted: false,
      },
    ],
  };

  constructor(private _tabsService: TabsService,private _userDataService: UserDataService,private _sharedLicenseProjectService: SharedLicenseProjectService) {}

  ngOnInit(): void {
    this.getCustomerData();
    this._tabsService.updateTabContent(this.tabContent);
    this._tabsService.updateActiveTabIndex(0);
  }
  getCustomerData() {
    this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
      this._sharedLicenseProjectService.setfacilityIdInLocalStorage(
         res?.facilities[0].id as string
      );
    })
  }
  ngOnDestroy(): void {
    this._tabsService.resetTabContent();
  }
}
