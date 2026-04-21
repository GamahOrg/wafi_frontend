import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { customerResponse, FacilityTypeCategory } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { Subscription } from 'rxjs';
import { FacilityProfileService } from '../../services/facilityProfile/facility-profile.service';
import { FacilityDataComponent } from '../../components/facility-data/facility-data.component';
import { QualificationCertificatesComponent } from '../../components/qualification-certificates/qualification-certificates.component';
import { LicensesComponent } from '../../components/licenses/licenses.component';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { QualificationRequestData } from 'src/app/core/models/qualification-request-data.model';
import { RequestValidationService } from 'src/app/core/services/request-validation/request-validation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-facility-profile',
  templateUrl: './facility-profile.component.html',
  styleUrls: ['./facility-profile.component.scss'],
})
export class FacilityProfileComponent implements OnInit, OnDestroy {
  baseUrl = `${environment.baseURL}/`;
  userData: customerResponse | null = null;
  subscriptions: Subscription[] = [];
  localization = {
    nationalId: 'رقم الهوية ',
    phone: 'رقم الجوال',
    nationality: 'الجنسية',
    commercialRegistrationNumber: 'رقم السجل التجاري',
    email: 'البريد الإلكتروني',
  };
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        icon: '',
        title: 'بيانات المنشأة ',
        Component: FacilityDataComponent,
        disabled: false,
        id: 'FacilityData',
        isVisible: true,
      },
      // {
      //   icon: '',
      //   title: "شهادات التأهيل ",
      //   Component: QualificationCertificatesComponent,
      //   disabled: true,
      //   id: "QualificationCertificates",
      //   isVisible: true,
      // },
      // {
      //   icon: '',
      //   title: "التراخيص",
      //   Component: LicensesComponent,
      //   disabled: true,
      //   id: "Licenses",
      //   isVisible: true,
      // },
    ],
  };
  qualificationRequestData: QualificationRequestData | null = null;
  requestSummeryLink: string =
    `/${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.requestSummary}` as string;
  renewRequestSummary: string =
    `/${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.renewRequestSummary}` as string;
  renewRequest: boolean = false;
  canUpdate: boolean = true;
  facilityTypeCategoryLabels: Record<FacilityTypeCategory, string> = {
    [FacilityTypeCategory.Developer]: 'المطور العقاري',
    [FacilityTypeCategory.Accountant]: 'المحاسب القانوني',
    [FacilityTypeCategory.Engineering]: 'الاستشاري الهندسي',
  };
  constructor(
    private _userDataService: UserDataService,
    private _tabsService: TabsService,
    private _requestValidationService: RequestValidationService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _facilityProfileService: FacilityProfileService,
  ) {}
  get facilityTypeCategoryLabel(): string {
    const category = this.userData?.facilities?.[0]?.facilityTypeCategory;
    return category != null ? this.facilityTypeCategoryLabels[category] : '';
  }

  ngOnInit(): void {
    this.updateTabContent();
    this.obseveCustomerData();
    this.ObserveQualificationRequestData();
    this.observeRouter();
    this.subscriptions.push(
      this._facilityProfileService.getAvailabilityToUpdate().subscribe(val => this.canUpdate = val)
    );
  }
  observeRouter(): void {
    this.subscriptions.push(
      this._activatedRoute.params.subscribe((params) => {
        this.renewRequest =
          this._activatedRoute.snapshot.url[0].path ==
          Configuration.pages.facilities.facilityProfileWithRenewRequest;
        console.log(
          'this._activatedRoute.snapshot.url[0].path',
          this._activatedRoute.snapshot.url[0].path,
        );
        console.log(
          'Configuration.pages.facilities.facilityProfileWithRenewRequest',
          Configuration.pages.facilities.facilityProfileWithRenewRequest,
        );
        console.log('this.renewRequest', this.renewRequest);
      }),
    );
  }
  private ObserveQualificationRequestData(): void {
    this.subscriptions.push(
      this._requestValidationService
        .getQualificationRequestData()
        .subscribe((res: QualificationRequestData | null) => {
          this.qualificationRequestData = res;
        }),
    );
  }
  public navigateToRequestSummary(): void {
    if (this.renewRequest) {
      this._router.navigate([
        this.renewRequestSummary,
        this.qualificationRequestData?.type,
        this.qualificationRequestData?.period,
      ]);
    } else {
      this._router.navigate([
        this.requestSummeryLink,
        this.qualificationRequestData?.type,
        this.qualificationRequestData?.period,
      ]);
    }
  }
  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          // console.log('userData', this.userData)
        }),
    );
  }
  private updateTabContent() {
    this._tabsService.updateTabContent(this.tabContent);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
