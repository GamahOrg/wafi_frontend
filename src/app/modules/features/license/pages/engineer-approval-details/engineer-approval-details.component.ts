import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, finalize } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { EngineerApprovalAgreementTabComponent } from '../../components/engineer-approval-tabs/engineer-approval-agreement-tab/engineer-approval-agreement-tab.component';
import { EngineerApprovalBasicDataTabComponent } from '../../components/engineer-approval-tabs/engineer-approval-basic-data-tab/engineer-approval-basic-data-tab.component';
import { LicenseRequestApprovalsService } from '../../services/license-request-approvals/license-request-approvals.service';
import { EngineerApprovalDataService } from '../../services/engineer-approval-data.service';
import { LicenseNatureTypeEnum } from '../../enums/license-nature-type';

@Component({
  selector: 'app-engineer-approval-details',
  templateUrl: './engineer-approval-details.component.html',
  styleUrls: ['./engineer-approval-details.component.scss']
})
export class EngineerApprovalDetailsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  approvalId: string | null = null;
  approvalRole: number | null = null;
  isLoading: boolean = false;
  licenseNatureTypeEnum = LicenseNatureTypeEnum 
  mainTabsComponentList: tabsComponent[] = [
    {
      number: 1,
      title: 'ملف الاتفاقية',
      Component: EngineerApprovalAgreementTabComponent,
      disabled: false,
      isVisible: true,
      isCompleted: false
    },
    {
      number: 2,
      title: 'رخص البناء',
      Component: EngineerApprovalBasicDataTabComponent,
      disabled: false,
      isVisible: true,
      isCompleted: false
    },
  ];

  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [],
  };

  constructor(
    private _tabsService: TabsService,
    private route: ActivatedRoute,
    private _licenseRequestApprovalsService: LicenseRequestApprovalsService,
    private _engineerApprovalDataService: EngineerApprovalDataService
  ) {}

  ngOnInit(): void {
    this.approvalId = this.route.snapshot.paramMap.get('id');
    this.approvalRole = Number(this.route.snapshot.queryParamMap.get('approvalRole'));

    if (this.approvalId) {
      this.loadApprovalDetails();
    }
  }

  private loadApprovalDetails(): void {
    this.isLoading = true;
    this._engineerApprovalDataService.setLoading(true);

    this.subscriptions.push(
      this._licenseRequestApprovalsService
        .GetApproval(this.approvalId as string, this.approvalRole as number)
        .pipe(finalize(() => {
          this.isLoading = false;
          this._engineerApprovalDataService.setLoading(false);
        }))
        .subscribe((res: any) => {
          if (res) {
            this._engineerApprovalDataService.setApprovalDetails(res);
            this.setDynamicTabName(res);
            this.updateTabContent();
          }
        })
    );
  }

  private setDynamicTabName(approvalDetails: any): void {
    const licenseNatureId = approvalDetails?.licenseProject?.licenseProjectNatureTypeId;

    if (licenseNatureId === this.licenseNatureTypeEnum.Lands) {
      this.mainTabsComponentList[1].title = 'مرفقات مخططات الاراضي';
    } else {
      this.mainTabsComponentList[1].title = 'رخص البناء';
    }
  }

  private updateTabContent(): void {
    this.tabContent.tabsComponentList = this.mainTabsComponentList;
    this._tabsService.updateTabContent(this.tabContent);
    this._tabsService.updateActiveTabIndex(0);
  }

  ngOnDestroy(): void {
    this._tabsService.resetTabContent();
    this._engineerApprovalDataService.reset();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
