import { pagination, Pagination } from 'src/app/shared/models/pagination.model';
import { LincenseProjectRequest } from '../../../license/models/lincense-request-project-dto';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
import { licenseActivationRequestDetailsDto } from '../../../license/models/license-activation-request-details-dto';
import { CahngePlaneRequestDetailsService } from '../../services/cahnge-plane-request-details.service';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-lincense-request-list',
  templateUrl: './lincense-request-list.component.html',
  styleUrls: ['./lincense-request-list.component.scss'],
  providers: [PaginationService],
})
export class LincenseRequestListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  facilityId: string = '';
  baseUrl = `${environment.baseURL}/`;
  projectDetails: LincenseProjectRequest = {} as LincenseProjectRequest;
  projectActiveRequestDetails: LincenseProjectRequest = {} as LincenseProjectRequest;
  requestRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`;
  requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.cancelLicenseSummary}`;
  requestActivateDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.reactivaiteLicenseSummary}`;
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

  constructor(
    private _requestService: LincenseRequestProjectService,
    private _router: Router,
    private _userDataService: UserDataService,
    private _paginationService: PaginationService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService,
    private projectRequestLocalStorageService:ProjectRequestLocalStorageService,
  ) { }
  ngOnInit() {
    this.obseveCustomerData();
    this.LincenseRequestProjectService();
    this.watchPaginationActions();
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
            this.facilityId
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

  redirectRequest(id:string, requestType: number, requestCode?: string) {
    debugger;
    this.projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(id)
    if (requestCode) {
      this.redirectRequestDetails(requestType);
    } else {
      this.redirectRequestSummary(id,requestType);
    }
  }

  redirectRequestSummary(id:string,requestType: number) {
    debugger;
    switch (requestType) {
      case LicenseProjectRequestTypeEnum.CancelLicense:
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.cancelLicenseSummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ReActivateLicense:
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.reactivaiteLicenseSummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangePlan:
        debugger;
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanSummary}`;
        break;
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
  navigateToRequestActivateDetails(projectActiveRequestDetails: LincenseProjectRequest) {
    this.projectActiveRequestDetails = projectActiveRequestDetails;
    this.setSelectedActivateProjectRequestIdInLocalStorage();
    this.goToProjectActivateRequest();
  }
  goToProjectDetails() {
    this._router.navigate([this.requestDetailsRoute]);
  }
  goToProjectActivateRequest()
  {
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
    debugger;
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
