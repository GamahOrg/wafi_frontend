import { Component, OnInit, type OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import  { Tabs } from 'src/app/shared/models/tabs.model';
import { LicenseProjectBuyerListComponent } from '../../components/license-project-buyer-list/license-project-buyer-list.component';
import { LicenseDepositDocumentComponent } from '../../components/license-deposit-document/license-deposit-document.component';
import { LicenseProjectExchangeDocumentListComponent } from '../../components/license-project-exchange-document-list/license-project-exchange-document-list.component';
import { PeriodicCharteredAccountantReportComponent } from '../../components/periodic-chartered-accountant-report/periodic-chartered-accountant-report.component';
import { AccountantMonthlySupervisionReportsComponent } from '../accountant-monthly-supervision-reports/accountant-monthly-supervision-reports.component';

@Component({
  selector: 'app-License-project-accountant',
  templateUrl: './License-project-accountant.component.html',
  styleUrls: ['./License-project-accountant.component.scss']
})
export class LicenseProjectAccountantComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  localization = {
    registerBuyers: "سجل المشترين",
    disbursementDocuments: "وثائق الصرف",
    depositDocuments: "وثائق الايداع",
    charteredAccountReport: "تقارير المحاسب القانوني",
    monthlyAccountantReports: "تقرير المحاسب القانوني الشهري",
  };
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        icon: '',
        title: this.localization.registerBuyers,
        Component: LicenseProjectBuyerListComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.disbursementDocuments,
        Component: LicenseProjectExchangeDocumentListComponent,
        disabled: false,
        isVisible: true,
      },
       {
         icon: '',
         title: this.localization.depositDocuments,
         Component: LicenseDepositDocumentComponent,
         disabled: false,
         isVisible: true,
       },
       {
        icon: '',
        title: this.localization.charteredAccountReport,
        Component: PeriodicCharteredAccountantReportComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.monthlyAccountantReports,
        Component: AccountantMonthlySupervisionReportsComponent,
        disabled: false,
        isVisible: true,
      },
    ],
  };
  constructor(
    private _tabsService: TabsService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
  ) { }

  ngOnInit(): void {
    this.updateTabContent()
  }
  private updateTabContent(): void {
    this._tabsService.updateTabContent(this.tabContent);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
