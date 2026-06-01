import { pagination, Pagination } from 'src/app/shared/models/pagination.model';
import { LincenseProjectRequest } from '../../../license/models/lincense-request-project-dto';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { Router } from '@angular/router';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddProjectLicenseRequestComponentComponent } from '../../components/add-project-license-request-component/add-project-license-request-component.component';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-lincense-request-list',
  templateUrl: './lincense-request-list.component.html',
  styleUrls: ['./lincense-request-list.component.scss'],
  providers: [PaginationService],
})
export class LincenseRequestListComponent implements OnInit, OnDestroy {
  LicenseProjectRequestStatusEnum = LicenseProjectRequestStatusEnum;
  subscriptions: Subscription[] = [];
  facilityId: string = '';
  baseUrl = `${environment.baseURL}/`;
  projectDetails: LincenseProjectRequest = {} as LincenseProjectRequest;
  projectActiveRequestDetails: LincenseProjectRequest =
    {} as LincenseProjectRequest;
  requestRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`;
  requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.cancelLicenseSummary}`;
  requestActivateDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.reactivaiteLicenseSummary}`;
  changeCharteredAccountantRequestRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.charteredAccountantRequestSummary}`;

  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  bsConfig = {
    containerClass: 'theme-default',
    isAnimated: true,
    showWeekNumbers: false,
    displayOneMonthRange: true,
    showPreviousMonth: false,
    customTodayClass: 'today',
  };
  reqList: Pagination<LincenseProjectRequest[]> = {} as Pagination<
    LincenseProjectRequest[]
  >;
  selectedRequest: LincenseProjectRequest = {} as LincenseProjectRequest;
  searchText: string = '';
  private searchSubject: Subject<string> = new Subject<string>();
  createRequestRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequests}`;

  constructor(
    private _requestService: LincenseRequestProjectService,
    private _router: Router,
    private _userDataService: UserDataService,
    private _paginationService: PaginationService,
    private _popupService: PopupService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService
  ) { }
  ngOnInit() {
    this.obseveCustomerData();
    this.LincenseRequestProjectService();
    this.watchPaginationActions();
    this.subscriptions.push(
      this.searchSubject.pipe(
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe(() => {
        this.pagintationData.currentPage = 1;
        this.LincenseRequestProjectService();
      })
    );
  }
  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          if (res && res.facilities && res.facilities.length > 0) {
            this.facilityId = res?.facilities[0]?.id || '';
            this.LincenseRequestProjectService();
          }
        })
    );
  }
  LincenseRequestProjectService() {
    if (this.facilityId != '' || this.facilityId) {
      this.subscriptions.push(
        this._requestService
          .getLicensesProjectRequestList(
            this.pagintationData.currentPage,
            this.pagintationData.pageSize,
            this.facilityId,
            this.searchText
          )
          .subscribe((res: Pagination<LincenseProjectRequest[]>) => {
            this.updateRequestList(res as Pagination<LincenseProjectRequest[]>);
          })
      );
    }
  }
  watchPaginationActions(): void {
    this.watchPagechanged();
    this.watchPaginationClicked();
  }
  navigateToCompleteChangeRequestByRequestType(requestId: string, requestType: number, viewOnly = false) {
    this.projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(
      requestId
    );
    if (requestType === LicenseProjectRequestTypeEnum.ChangePlan) {

      this._router.navigate([
        Configuration.modules.wafi,
        Configuration.modules.licenseProjectRequests,
        Configuration.pages.licenseProjectRequests.createLicenseProjectChangePlanRequest,
        requestId
      ], viewOnly ? { queryParams: { viewOnly: 'true' } } : {});
    }
    if (requestType === LicenseProjectRequestTypeEnum.ChangeEngineering) {
      this._router.navigate([
        Configuration.modules.wafi,
        Configuration.modules.licenseProjectRequests,
        Configuration.pages.licenseProjectRequests.createchangeengineer,
        requestId
      ]);
    }

    if (requestType === LicenseProjectRequestTypeEnum.ChangeAccountant) {
      this._router.navigate([
        Configuration.modules.wafi,
        Configuration.modules.licenseProjectRequests,
        Configuration.pages.licenseProjectRequests.createChangeLicenseProjectAccountantRequest
      ]);
    }

  }
  redirectRequest(id: string, requestType: number, requestCode?: string) {
    this.projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(
      id
    );

    if (requestType === LicenseProjectRequestTypeEnum.UpgradeQualification) {
      this._requestService.setUpDegreeSelectedRequestIdInLocalStorage(
        id
      );
    }

    // if (requestType === LicenseProjectRequestTypeEnum.ChangePlan) {
    //   const route = requestCode
    //     ? `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanFullSummary}`
    //     : `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanDraftSummary}`;
    //   this._router.navigate([route]);
    //   return;
    // }
    // if (requestType === LicenseProjectRequestTypeEnum.ChangeEngineering) {
    //   const route = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changeEngineeringFullSummary}`

    //   this._router.navigate([route]);
    //   return;
    // }

    if (requestType === LicenseProjectRequestTypeEnum.UpgradeQualification) {
      const route = `${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.requestDetails}`;
      this._router.navigate([route]);
      return;
    }

    if (requestType === LicenseProjectRequestTypeEnum.ChangePlan) {
      if (requestCode) {
        this._router.navigate([
          Configuration.modules.wafi,
          Configuration.modules.licenseProjectRequests,
          Configuration.pages.licenseProjectRequests.requestDetails,
        ]);
      } else {
        this._router.navigate([
          Configuration.modules.wafi,
          Configuration.modules.licenseProjectRequests,
          Configuration.pages.licenseProjectRequests.changePlanDraftSummary,
        ]);
      }
      return;
    }

    if (requestType === LicenseProjectRequestTypeEnum.ChangeAccountant) {
      if (requestCode) {
        this._router.navigate([
          Configuration.modules.wafi,
          Configuration.modules.licenseProjectRequests,
          Configuration.pages.licenseProjectRequests.requestDetails,
        ]);
      } else {
        this._router.navigate([
          Configuration.modules.wafi,
          Configuration.modules.licenseProjectRequests,
          Configuration.pages.licenseProjectRequests.createChangeLicenseProjectAccountantRequest,
        ]);
      }
      return;
    }

    if (requestType === LicenseProjectRequestTypeEnum.ChangeEngineering) {
      if (requestCode) {
        this._router.navigate([
          Configuration.modules.wafi,
          Configuration.modules.licenseProjectRequests,
          Configuration.pages.licenseProjectRequests.requestDetails,
        ]);
      } else {
        this._router.navigate([
          Configuration.modules.wafi,
          Configuration.modules.licenseProjectRequests,
          Configuration.pages.licenseProjectRequests.createchangeengineer,
        ]);
      }
      return;
    }

    if (requestCode) {
      this.redirectRequestDetails(requestType);
    } else {
      this.redirectRequestSummary(id, requestType);
    }
  }

  redirectRequestSummary(id: string, requestType: number) {
    switch (requestType) {
      case LicenseProjectRequestTypeEnum.CancelLicense:
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.cancelLicenseSummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ReActivateLicense:
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.reactivaiteLicenseSummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangePlan:

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanSummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeEngineering:

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changeEngineerSummary}`;
        break;
      case LicenseProjectRequestTypeEnum.IncreaseOrDecreaseUnitsNumberOrProjectArea:

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changespaceorunitssummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeApprovedBuyerOrTenantContractsOfProject:

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changebuyerortenantcontractsummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeProjectName:

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changeprojectnamesummary}`;
        break;
      case LicenseProjectRequestTypeEnum.AddingDelegator:

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.addingdelegatorsummary}`;
        break;
      case LicenseProjectRequestTypeEnum.RemovingDelegator:

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.removingdelegatorsummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeOrAddLicenseProjectUnitModel:

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changeoraddunitmodelsummary}`;
        break;
      case LicenseProjectRequestTypeEnum.WithdrawSurplusBeforeProjectEnd:

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.withdrawsurplusbeforeprojectendsummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeAccountant:

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createChangeLicenseProjectAccountantRequest}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeAccountKeeper:

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.accountKeeperRequestSummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangePartiesAgreement:

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePartiesAgreementRequestSummary}`;
        break;
      case LicenseProjectRequestTypeEnum.TransferAmountsBetweenSubAccountsInEscrowAccount:

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.transferAmountsBetweenSubaccountsInEscrowAccountSummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ObjectionToSupervisionAndFollowUpCosts:

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.objectionToSupervisionAndFollowupCostsSummary}`;
        break;
      case LicenseProjectRequestTypeEnum.LiftingTheMarkOnThePropertyTitleDeed:

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.liftingTheMarkOnThePropertyTitleDeedRequestSummary}`;
        break;
      default:
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.requestTemplateSummary}`;

    }
    this._router.navigate([this.requestDetailsRoute]);
  }

  redirectRequestDetails(requestType: number) {

    this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestDetails}`;
    this._router.navigate([this.requestDetailsRoute]);

    //switch (requestType) {
    //   case LicenseProjectRequestTypeEnum.CancelLicense:
    //     this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestDetails}`;
    //     break;
    //   case LicenseProjectRequestTypeEnum.ReActivateLicense:
    //     this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestDetails}`;
    //     break;
    // case LicenseProjectRequestTypeEnum.ChangePlan:
    //  this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestDetails}`;
    //  break;
    // }
  }
  navigateToDetails(projectDetails: LincenseProjectRequest) {
    this.projectDetails = projectDetails;
    this.setSelectedRequestIdInLocalStorage();
    this.goToProjectDetails();
  }
  navigateToRequestActivateDetails(
    projectActiveRequestDetails: LincenseProjectRequest
  ) {
    this.projectActiveRequestDetails = projectActiveRequestDetails;
    this.setSelectedActivateProjectRequestIdInLocalStorage();
    this.goToProjectActivateRequest();
  }
  goToProjectDetails() {
    this._router.navigate([this.requestDetailsRoute]);
  }
  goToProjectActivateRequest() {
    this._router.navigate([this.requestActivateDetailsRoute]);
  }
  setSelectedRequestIdInLocalStorage() {
    this._requestService.setSelectedRequestIdInLocalStorage(
      this.projectDetails.id
    );
  }
  setSelectedActivateProjectRequestIdInLocalStorage() {
    this._requestService.setSelectedActiveProjectRequestIdInLocalStorage(
      this.projectActiveRequestDetails.id
    );
  }
  private watchPagechanged(): void {
    this.subscriptions.push(
      this._paginationService.getPageChanged().subscribe((pageNo) => {
        this.newPageNo = pageNo;
      })
    );
  }
  private watchPaginationClicked(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.pagintationData.currentPage != nextPage) {
          this.loadNextPage(nextPage);
          this.pagintationData.currentPage = this.newPageNo;
        }
      })
    );
  }
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.LincenseRequestProjectService();
  }
  private updateRequestList(
    TypeListView: Pagination<LincenseProjectRequest[]>
  ): void {

    this.reqList = TypeListView;
    this.setPaginationData(
      this.reqList.pageSize,
      this.reqList.totalCount,
      this.reqList.pageCount
    );
  }
  private setPaginationData(
    pageSize: number,
    total: number,
    pageCount: number
  ): void {
    this.pagintationData.pageCount = pageCount;
    this.pagintationData.pageSize = pageSize;
    this.pagintationData.totalCount = total;
    this._paginationService.updatePaginationData(this.pagintationData);
  }

  getStatusPillClass(statusId: number): string {
    const approvedStatuses = [7, 10, 11];
    const rejectedStatuses = [8, 13, 18, 19, 20, 21, 23, 26, 28];
    const draftStatuses = [0];

    if (approvedStatuses.includes(statusId)) return 'green';
    if (rejectedStatuses.includes(statusId)) return 'red';
    if (draftStatuses.includes(statusId)) return 'black';
    return 'orange';
  }
  onSearchChange(): void {
    this.searchSubject.next(this.searchText);
  }
  navigateToCreateRequest(): void {
    this._router.navigate([this.createRequestRoute]);
  }
  openDialog(): void {
    let Data = {
      title: 'إضافة طلب جديد',
      component: AddProjectLicenseRequestComponentComponent,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
