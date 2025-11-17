import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { LicenseRequestService } from '../../../services/license-request.service';
import { RequestValidation } from '../../../dataModels/request-validation.model';
import { TabsError } from 'src/app/core/models/request-validation.model';
import { DataVisibilityOfLicenseProjectService } from '../../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabCode } from '../../../models/tab-code.model';
import { FawriaLicenseprojectMaindataContainerComponent } from '../../FawriaLicenseProject/fawria-licenseproject-maindata-container/fawria-licenseproject-maindata-container.component';
import { FawriaLicenseprojectDeedsContainerComponent } from '../../FawriaLicenseProject/fawria-licenseproject-deeds-container/fawria-licenseproject-deeds-container.component';
import { FawriaLicenseprojectFeasibilityStudyContainerComponent } from '../../FawriaLicenseProject/fawria-licenseproject-feasibility-study-container/fawria-licenseproject-feasibility-study-container.component';
import { FawriaLicenseprojectContactInfoContainerComponent } from '../../FawriaLicenseProject/fawria-licenseproject-contact-info-container/fawria-licenseproject-contact-info-container.component';
import { FawriaLicenseprojectMainDataViewOnlyComponent } from '../fawria-licenseproject-maindata-view-only/fawria-licenseproject-maindata-view-only.component';
import { FawriaLicenseprojectContactInfoViewOnlyComponent } from '../fawria-licenseproject-contact-info-view-only/fawria-licenseproject-contact-info-view-only.component';
import { FawriaLicenseprojectFeasibilityStudyViewOnlyComponent } from '../fawria-licenseproject-feasibility-study-view-only/fawria-licenseproject-feasibility-study-view-only.component';
import { FawriaLicenseprojectDeedsViewOnlyComponent } from '../fawria-licenseproject-deeds-view-only/fawria-licenseproject-deeds-view-only.component';

@Component({
  selector: 'app-fawria-project-data',
  templateUrl: './fawria-project-data.component.html',
  styleUrls: ['./fawria-project-data.component.scss']
})
export class FawriaProjectDataComponent {
  subscriptions: Subscription[] = [];
  validationError: RequestValidation | null = null;
  mainTabsComponentList = [
     {
      icon: '',
      title: 'البيانات الأساسية',
      Component: FawriaLicenseprojectMainDataViewOnlyComponent,
      disabled: false,
      id: 'fawriaLicenseProjectMainData',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectMainData,
      tabErrors: [],
      isVisible: true,
    },
     {
      icon: '',
      title: 'بيانات التواصل',
      Component: FawriaLicenseprojectContactInfoViewOnlyComponent,
      disabled: false,
      id: 'fawriaLicenseProjectContactInformation',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectContactInformation,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الصكوك ورخص البناء',
      Component: FawriaLicenseprojectDeedsViewOnlyComponent,
      disabled: false,
      id: 'fawriaLicenseProjectDeeds',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectDeeds,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'بيانات دراسة الجدوى',
      Component: FawriaLicenseprojectFeasibilityStudyViewOnlyComponent,
      disabled: false,
      id: 'fawriaLicenseProjectFeasibilityStudy',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectFeasibilityStudy,
      tabErrors: [],
      isVisible: true,
    }
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
