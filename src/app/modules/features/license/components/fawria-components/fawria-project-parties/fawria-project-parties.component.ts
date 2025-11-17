import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { RequestValidation } from '../../../dataModels/request-validation.model';
import { LicenseRequestService } from '../../../services/license-request.service';
import { TabsError } from 'src/app/core/models/request-validation.model';
import { DataVisibilityOfLicenseProjectService } from '../../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabCode } from '../../../models/tab-code.model';
import { FawriaLicenseprojectEngineeringConsultantsContainerComponent } from '../../FawriaLicenseProject/fawria-licenseproject-engineering-consultants-container/fawria-licenseproject-engineering-consultants-container.component';
import { FawriaLicenseprojectCharteredAccountantsContainerComponent } from '../../FawriaLicenseProject/fawria-licenseproject-chartered-accountants-container/fawria-licenseproject-chartered-accountants-container.component';
import { FawriaLicenseprojectDeedOwnersContainerComponent } from '../../FawriaLicenseProject/fawria-licenseproject-deed-owners-container/fawria-licenseproject-deed-owners-container.component';
import { FawriaLicenseprojectEscrowAccountCreateComponent } from '../../FawriaLicenseProject/fawria-licenseproject-escrow-account-create/fawria-licenseproject-escrow-account-create.component';
import { FawriaLicenseprojectEngineeringConsultantsContainerViewOnlyComponent } from '../fawria-licenseproject-engineering-consultants-container-view-only/fawria-licenseproject-engineering-consultants-container-view-only.component';
import { FawriaLicenseprojectCharteredAccountantsContainerViewOnlyComponent } from '../fawria-licenseproject-chartered-accountants-container-view-only/fawria-licenseproject-chartered-accountants-container-view-only.component';
import { FawriaLicenseprojectDeedOwnersContainerViewOnlyComponent } from '../fawria-licenseproject-deed-owners-container-view-only/fawria-licenseproject-deed-owners-container-view-only.component';
import { FawriaLicenseprojectEscrowAccountViewOnlyComponent } from '../fawria-licenseproject-escrow-account-create-view-only/fawria-licenseproject-escrow-account-create-view-only.component';

@Component({
  selector: 'app-fawria-project-parties',
  templateUrl: './fawria-project-parties.component.html',
  styleUrls: ['./fawria-project-parties.component.scss']
})
export class FawriaProjectPartiesComponent {
  subscriptions: Subscription[] = [];
  validationError: RequestValidation | null = null;
  mainTabsComponentList = [
     {
      icon: '',
      title: 'اتفاقية الملاك',
      Component: FawriaLicenseprojectDeedOwnersContainerViewOnlyComponent,
      disabled: false,
      id: 'fawriaLicenseProjectEscrowAccount',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectEscrowAccount,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الاستشاري الهندسي',
      Component: FawriaLicenseprojectEngineeringConsultantsContainerViewOnlyComponent,
      disabled: false,
      id: 'fawriaLicenseProjectEngineeringConsultants',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectEngineeringConsultants,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'المحاسب القانوني',
      Component: FawriaLicenseprojectCharteredAccountantsContainerViewOnlyComponent,
      disabled: false,
      id: 'fawriaLicenseProjectCharteredAccountants',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectCharteredAccountants,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'حساب الضمان',
      Component: FawriaLicenseprojectEscrowAccountViewOnlyComponent,
      disabled: false,
      id: 'fawriaLicenseProjectEscrowAccount',
      errNum: 0,
      tabCode: TabCode.fawriaLicenseProjectEscrowAccount,
      tabErrors: [],
      isVisible: true,
    },
  ]
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
  // private updateVerticalTabContent() {
  //   this._tabsService.updateVerticalTabContent(this.tabContent)
  // }
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
