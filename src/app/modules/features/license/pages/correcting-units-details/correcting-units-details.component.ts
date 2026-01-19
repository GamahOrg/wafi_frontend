import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabCode } from '../../models/tab-code.model';
import { CorrectingProjectDataComponent } from '../../components/correcting-components/correcting-project-data/correcting-project-data.component';
import { CorrectingProjectPartiesComponent } from '../../components/correcting-components/correcting-project-parties/correcting-project-parties.component';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';

@Component({
  selector: 'app-correcting-units-details',
  templateUrl: './correcting-units-details.component.html',
  styleUrls: ['./correcting-units-details.component.scss'],
  providers: [TabsService, DataVisibilityOfLicenseProjectService],
})
export class CorrectingUnitsDetailsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  requestId: string = '';
  isLoading: boolean = false;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';

  mainTabsComponentList: tabsComponent[] = [
    {
      number: 1,
      title: 'الصكوك ورخص البناء',
      Component: CorrectingProjectDataComponent,
      disabled: false,
      id: 'CorrectionDeedsAndLicenses',
      errNum: 0,
      tabCode: TabCode.correctionDeedsAndLicenses,
      tabErrors: [],
      isVisible: true,
    },
    {
      number: 2,
      title: 'الوحدات والتصاميم المعمارية',
      Component: CorrectingProjectPartiesComponent,
      disabled: false,
      id: 'CorrectionUnitsAndDesigns',
      errNum: 0,
      tabCode: TabCode.correctionUnitsAndDesigns,
      tabErrors: [],
      isVisible: true,
    },
  ];

  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [],
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _tabsService: TabsService
  ) {}

  ngOnInit(): void {
    this.requestId = this._route.snapshot.paramMap.get('id') || '';
    this.updateTabContent();
  }

  private updateTabContent() {
    this.tabContent.tabsComponentList = this.mainTabsComponentList;
    this._tabsService.updateTabContent(this.tabContent);
    this._tabsService.updateActiveTabIndex(0);
    this._tabsService.updateActiveVerticalTabIndex(0);
  }

  goBack(): void {
    this._router.navigate(['/wafi/license/correcting-units-list']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
