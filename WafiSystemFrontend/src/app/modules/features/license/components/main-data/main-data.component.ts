import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { RealEstateDeveloperDataComponent } from '../real-estate-developer-data/real-estate-developer-data.component';
import { AccoutKeeperDataComponent } from '../accout-keeper-data/accout-keeper-data.component';
import { RequestValidation } from '../../dataModels/request-validation.model';
import { TabsError } from 'src/app/core/models/request-validation.model';
import { LicenseRequestService } from '../../services/license-request.service';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { DelegatorListComponent } from '../delegator-list/delegator-list.component';
import { TabCode } from '../../models/tab-code.model';
import { LicenseProjectFinancialStatementComponent } from '../license-project-financial-statement/license-project-financial-statement.component';
import { BankingAccountComponent } from '../banking-account/banking-account.component';

@Component({
  selector: 'app-main-data',
  templateUrl: './main-data.component.html',
  styleUrls: ['./main-data.component.scss']
})
export class MainDataComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  validationError: RequestValidation | null = null;
  mainTabsComponentList = [
    {
      icon: '',
      title: 'بيانات مقدم الطلب',
      Component: RealEstateDeveloperDataComponent,
      disabled: false,
      id: 'RealEstateDeveloperDataComponent',
      errNum: 0,
      tabCode: TabCode.realEStateDeveloper,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'بيانات البنك',
      Component: AccoutKeeperDataComponent,
      disabled: false,
      id: 'AccoutKeeperDataComponent',
      errNum: 0,
      tabCode: TabCode.accountKeeper,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'البيان المالي لمشروع الترخيص',
      Component: LicenseProjectFinancialStatementComponent,
      disabled: false,
      id: 'LicenseProjectFinancialStatementComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectFinancialStatement,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'المفوضون بالتوقيع على وثيقة الصرف',
      Component: DelegatorListComponent,
      disabled: false,
      id: 'DelegatorListComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectDelegator,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الحساب البنكي',
      Component: BankingAccountComponent,
      disabled: false,
      id: 'BankingAccountComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectBackAccount,
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
          this.getDataVisibilityOfLicenseProject();
        })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
