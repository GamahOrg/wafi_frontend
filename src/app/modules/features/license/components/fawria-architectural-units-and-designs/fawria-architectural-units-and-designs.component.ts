import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TabsError } from 'src/app/core/models/request-validation.model';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { RequestValidation } from '../../dataModels/request-validation.model';
import { TabCode } from '../../models/tab-code.model';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { LicenseRequestService } from '../../services/license-request.service';
import { ArchitecturalDesignFilesComponent } from '../architectural-design-files/architectural-design-files.component';
import { ProjectModuleModelsComponent } from '../project-module-models/project-module-models.component';
import { ProjectUnitCodesComponent } from '../project-unit-codes/project-unit-codes.component';
import { LincenseProjectZonesComponent } from '../Zones/lincense-project-zones/lincense-project-zones.component';

@Component({
  selector: 'app-fawria-architectural-units-and-designs',
  templateUrl: './fawria-architectural-units-and-designs.component.html',
  styleUrls: ['./fawria-architectural-units-and-designs.component.scss']
})
export class FawriaArchitecturalUnitsAndDesignsComponent {
  subscriptions: Subscription[] = [];
  validationError: RequestValidation | null = null;
  mainTabsComponentList = [
    {
      icon: '',
      title: 'الزون و بلوكات وعمائر',
      // Component: BlocksAndbuildingsAndunitsComponent,
      Component: LincenseProjectZonesComponent,
      disabled: false,
      id: 'BlocksAndbuildingsAndunitsComponent',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectZone,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'أنواع الوحدات بالبلوك / العمارة',
      Component: ProjectModuleModelsComponent,
      disabled: false,
      id: 'ProjectModuleModelsComponent',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectModel,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'أكواد وحدات المشروع',
      Component: ProjectUnitCodesComponent,
      disabled: false,
      id: 'ProjectUnitCodesComponent',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectCodes,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: ' التصاميم المعمارية والمخططات الهندسية',
      Component: ArchitecturalDesignFilesComponent,
      disabled: false,
      id: 'ArchitecturalDesignFilesComponent',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectDesign,
      tabErrors: [],
      isVisible: true,
    },
  ];
  tabContent: Tabs = {
    verticalTabs: true,
    activeTabIndex: 0,
    tabTitle: "",
    tabsComponentList: []
  };
  constructor(
    private _licenseRequestService: LicenseRequestService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
  ) { };
  ngOnInit(): void {
    this.observeValidationError();
  }
  private getDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainTab(this.subscriptions, this.mainTabsComponentList, false, true)
  }
  private getTabErrors(tabCode: string) {
    let errsNum = 0;
    if (this.validationError) {
      errsNum =
        this.validationError.tabs.find((tab: TabsError) => tab.tabCode === tabCode)
          ?.tabErrors.length ?? 0;
    }
    return errsNum;
  }

  private validateTabs() {
    this.mainTabsComponentList.map((t: tabsComponent) => {
      return (t.errNum = this.getTabErrors(t.tabCode as string));
    });
  }


  private observeValidationError(): void {
    this.subscriptions.push(
      this._licenseRequestService
        .getRequestValidation()
        .subscribe((res: any | null) => {
          this.validationError = res;
          this.validateTabs();
          this.getDataVisibilityOfLicenseProject()
        })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
