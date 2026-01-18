import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { TabCode } from '../../../models/tab-code.model';
import { RequestValidation } from '../../../dataModels/request-validation.model';
import { CorrectingLicenseProjectZonesComponent } from '../correcting-license-project-zones/correcting-license-project-zones.component';
import { CorrectingProjectModuleModelsComponent } from '../correcting-project-module-models/correcting-project-module-models.component';
import { CorrectingProjectUnitCodesComponent } from '../correcting-project-unit-codes/correcting-project-unit-codes.component';
import { CorrectingArchitecturalDesignFilesComponent } from '../correcting-architectural-design-files/correcting-architectural-design-files.component';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';

@Component({
  selector: 'app-correcting-project-parties',
  templateUrl: './correcting-project-parties.component.html',
  styleUrls: ['./correcting-project-parties.component.scss']
})
export class CorrectingProjectPartiesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  validationError: RequestValidation | null = null;

  mainTabsComponentList: tabsComponent[] = [
    {
      icon: '',
      title: 'الزون و بلوكات وعمائر',
      Component: CorrectingLicenseProjectZonesComponent,
      disabled: false,
      id: 'correctingLicenseProjectZones',
      errNum: 0,
      tabCode: TabCode.correctionLicenseProjectZone,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'أنواع الوحدات بالبلوك / العمارة',
      Component: CorrectingProjectModuleModelsComponent,
      disabled: false,
      id: 'correctingProjectModuleModels',
      errNum: 0,
      tabCode: TabCode.correctionLicenseProjectModel,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'أكواد وحدات المشروع',
      Component: CorrectingProjectUnitCodesComponent,
      disabled: false,
      id: 'correctingProjectUnitCodes',
      errNum: 0,
      tabCode: TabCode.correctionLicenseProjectCodes,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'التصاميم المعمارية والمخططات الهندسية',
      Component: CorrectingArchitecturalDesignFilesComponent,
      disabled: false,
      id: 'correctingArchitecturalDesignFiles',
      errNum: 0,
      tabCode: TabCode.correctionLicenseProjectDesign,
      tabErrors: [],
      isVisible: true,
    },
  ];

  tabContent: Tabs = {
    verticalTabs: true,
    activeTabIndex: 0,
    tabTitle: '',
    tabsComponentList: []
  };

  constructor(
     private _tabsService: TabsService,
  ) {}

  ngOnInit(): void {
    this.updateTabContent();
  }

  private updateTabContent(): void {
    this.tabContent.tabsComponentList = this.mainTabsComponentList;
    this._tabsService.updateVerticalTabContent(this.tabContent);
    this._tabsService.updateActiveVerticalTabIndex(0);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
