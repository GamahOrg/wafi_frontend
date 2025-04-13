import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { LicenseProjectRealEstateDeveloperDataComponent } from '../license-project-real-estate-developer-data-component/license-project-real-estate-developer-data-component';
import { LicenseProjectAccoutKeeperDataComponent } from '../license-project-accout-keeper-data/license-project-accout-keeper-data.component';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { LicenseProjectDelegatorListComponent } from '../license-project-delegator-list/license-project-delegator-list.component';
import { TabCode } from '../../models/tab-code.model';
import { LicenseProjectBankingAccountComponent } from '../license-project-banking-account/license-project-banking-account.component';
import { LicenseProjectFinancialStatementListComponent } from '../LicenseProjectFinancialStatementList/LicenseProjectFinancialStatementList.component';

@Component({
  selector: 'app-license-request-main-data',
  templateUrl: './license-request-main-data.component.html',
  styleUrls: ['./license-request-main-data.component.scss'],
})
export class LicenseRequestMainDataComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  mainAccordionComponentList = [
    {
      icon: '',
      title: 'بيانات مقدم الطلب',
      component: LicenseProjectRealEstateDeveloperDataComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.realEStateDeveloper,
    },
    {
      icon: '',
      title: ' بيانات البنك',
      component: LicenseProjectAccoutKeeperDataComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.accountKeeper,
    },
    {
      icon: "",
      title: 'بيانات المفوضون للتوقيع على وثيقه الصرف',
      component: LicenseProjectDelegatorListComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.licenseProjectDelegator,
    },
    {
      icon: '',
      title: 'بيانات البيان المالي لمشروع الترخيص',
      component: LicenseProjectFinancialStatementListComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.licenseProjectFinancialStatement,
    },
    {
      icon: '',
      title: 'الحساب البنكي',
      component: LicenseProjectBankingAccountComponent,
      disabled: false,
      isVisible: true,
      id: '',
      isViewed: false,
      isRendered: false,
      isDeletebtn: false,
      accordionCode: TabCode.licenseProjectBackAccount,
    },
  ];
  accordionContent: accordionContent = {
    oneAtATime: true,
    isAnimated: true,
    accordionComponentList: [],
  };
  constructor(
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService
  ) {}
  ngOnInit(): void {
    this.observeDataVisibilityOfLicenseProject();
  }
  private observeDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainAccordion(
      this.subscriptions,
      this.mainAccordionComponentList,
      this.accordionContent
    );

    // this.subscriptions.push(
    //   this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProject().subscribe((res: string[]) => {
    //     this.mainAccordionComponentList.forEach(accordion => {
    //       if (res.includes(accordion.accordionCode as string)) {
    //         this.accordionContent.accordionComponentList.push(accordion)
    //       }
    //     }
    //     )
    //     this._accordionService.updateAccordionContent(this.accordionContent as accordionContent)

    //   })
    // )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
