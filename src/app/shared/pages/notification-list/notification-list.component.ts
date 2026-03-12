import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { Router } from '@angular/router';
import { PaginationService } from '../../services/pagination/pagination.service';
import { NotificationsService } from '../../services/notifications/notifications.service';
import {
  Notification,
  NotificationListDto,
} from '../../models/notification.model';
import { RequestType } from '../../models/enums/request-type';
import { LicenseRequestHeaderService } from 'src/app/modules/features/license/services/license-request-header.service';
import { SharedLicenseProjectService } from 'src/app/modules/features/license/services/sharedLicenseProject/shared-license-project.service';
import { LincenseRequestProjectService } from 'src/app/modules/features/license-project-requests/services/lincense-request-project.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  qualifyingRequestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.requestDetails}`;
  licenseRequestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseDetails}`;
  Configuration = Configuration;
  licenseRequestTypeDeatilsRoute = `/${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestDetails}`;

  // Pagination
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 7,
    totalCount: 0,
  };
  notificationList: Pagination<Notification[]> = {} as Pagination<
    Notification[]
  >;
  selectedNotification: Notification = {} as Notification;
  localization = {
    notifications: 'الإشعارات',
    requestId: ' رقم الطلب',
    message: 'الإشعار',
    createdOn: 'تاريج الإنشاء',
    viewedOn: 'تاريج العرض',
    isViewed: 'تم عرض الإشعار',
    yes: 'نعم',
    no: 'لا',
  };
  get RequestType(): typeof RequestType {
    return RequestType;
  }
  constructor(
    private _router: Router,
    private _paginationService: PaginationService,
    private _notificationsService: NotificationsService,
    private _requestService: LicenseRequestHeaderService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private licenseProjectService: LincenseRequestProjectService,
  ) {}
  ngOnInit(): void {
    this.getNotificationList();
    this.observePaginationActions();
  }
  private getNotificationList() {
    this.subscriptions.push(
      this._notificationsService
        .getNotificationList(
          this.pagintationData.currentPage,
          this.pagintationData.pageSize,
        )
        .subscribe((res: Pagination<Notification[]>) => {
          this.updateNotificationList(res as Pagination<Notification[]>);
          console.log(res);
        }),
    );
  }
  private updateNotificationList(
    TypeListView: Pagination<Notification[]>,
  ): void {
    this.notificationList = TypeListView;
    this.setPaginationData(
      this.notificationList.pageSize,
      this.notificationList.totalCount,
      this.notificationList.pageCount,
    );
  }
  private setPaginationData(
    pageSize: number,
    total: number,
    pageCount: number,
  ): void {
    this.pagintationData.pageCount = pageCount;
    this.pagintationData.pageSize = pageSize;
    this.pagintationData.totalCount = total;
    this._paginationService.updatePaginationData(this.pagintationData);
  }

  observePaginationActions(): void {
    this.observePagechanged();
    this.observePaginationClicked();
  }
  private observePagechanged(): void {
    this.subscriptions.push(
      this._paginationService.getPageChanged().subscribe((pageNo) => {
        this.newPageNo = pageNo;
      }),
    );
  }
  private observePaginationClicked(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.pagintationData.currentPage != nextPage) {
          this.loadNextPage(nextPage);
          this.pagintationData.currentPage = this.newPageNo;
        }
      }),
    );
  }
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.getNotificationList();
  }
  public navigateToDetails(notification: Notification) {
    switch (notification.requestTypeId) {
      case this.RequestType.license:
        this.navigateToLicenseDetails(notification);
        break;
      case this.RequestType.qualification:
        this.navigateToQualificationDetails(notification);
        break;
      case this.RequestType.services:
        this.navigateToServicesDetails(notification);
        break;
      case this.RequestType.LicenseProjectRequest:
        this.navigateToLicenseRequestTypeDetails(notification);
        break;
      case this.RequestType.FawriaLicense:
        this.navigateToFawriaLicense(notification);
        break;
      case this.RequestType.OwnerApproval:
        this.navigateToOwnerApproval(notification);
        break;
      case this.RequestType.EngineerApproval:
        this.navigateToEngineerApproval(notification);
        break;
      case this.RequestType.CharteredAccountApproval:
        this.navigateToCharteredAccountApproval(notification);
        break;
      case this.RequestType.DeveloperProjectList:
        this.navigateToDeveloperProjectList(notification);
        break;
      case this.RequestType.EngineeringProjectList:
        this.navigateToEngineeringProjectList(notification);
        break;
      case this.RequestType.CharteredAccountProjectList:
        this.navigateToCharteredAccountProjectList(notification);
        break;
      case this.RequestType.BuyerContractsList:
        this.navigateToBuyerContractsList(notification);
        break;
      case this.RequestType.CorrectionUnitRequest:
        this.navigateToCorrectionDetails(notification);
        break;
    }
  }
  navigateToBuyerContractsList(notification: Notification) {
    let route = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.contractdocumentation}`;
    if (this._router.url == route) {
      location.reload();
    } else {
      this._router.navigate([route]);
    }
  }
  navigateToCharteredAccountProjectList(notification: Notification) {
    let route = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.charteredaccount}`;
    if (this._router.url == route) {
      location.reload();
    } else {
      this._router.navigate([route]);
    }
  }

  navigateToEngineeringProjectList(notification: Notification) {
    let route = `${Configuration.modules.wafi}/${Configuration.modules.engineeringManagement}`;
    if (this._router.url == route) {
      location.reload();
    } else {
      this._router.navigate([route]);
    }
  }

  navigateToDeveloperProjectList(notification: Notification) {
    let route = `${Configuration.modules.wafi}/${Configuration.modules.engineeringManagement}/${Configuration.pages.license.recommendationLogsList}`;
    if (this._router.url == route) {
      location.reload();
    } else {
      this._router.navigate([route]);
    }
  }

  navigateToCharteredAccountApproval(notification: Notification) {
    let route = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.developerApprovalsList}`;
    if (this._router.url == route) {
      location.reload();
    } else {
      this._router.navigate([route]);
    }
  }

  navigateToEngineerApproval(notification: Notification) {
    let route = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.developerApprovalsList}`;
    if (this._router.url == route) {
      location.reload();
    } else {
      this._router.navigate([route]);
    }
  }

  navigateToOwnerApproval(notification: Notification) {
    let route = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.developerApprovalsList}`;
    if (this._router.url == route) {
      location.reload();
    } else {
      this._router.navigate([route]);
    }
  }

  navigateToFawriaLicense(notification: Notification) {
    //get request data
    this.subscriptions.push(
      this._requestService
        .GetLicenseRequestHeaderById(notification.requestId)
        .subscribe((request) => {
          if (request) {
            this._sharedLicenseProjectService.setLicenseTypeCodeInLocalStorage(
              request.typeCode,
            );

            this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(
              request.id,
            );

            this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
              request.licenseProjectId,
            );

            let route = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.fawriaLicenseDetails}`;
            if (this._router.url == route) {
              location.reload();
            } else {
              this._router.navigate([route]);
            }
          }
        }),
    );
  }

  navigateToLicenseRequestTypeDetails(notification: Notification) {
    this.licenseProjectService.setSelectedActiveProjectRequestIdInLocalStorage(
      notification.requestId,
    );
    if (this._router.url == this.licenseRequestTypeDeatilsRoute) {
      location.reload();
    } else {
      this._router.navigate([this.licenseRequestTypeDeatilsRoute]);
    }
  }
  private navigateToServicesDetails(notification: Notification) {
    // set request id in local storage
    // navigate to services page enshallah :D
    console.log('navigateToServicesDetails');
  }

  private navigateToQualificationDetails(notification: Notification) {
    // set request id in local storage
    // navigate to qualification details page
    console.log('navigateToQualificationDetails');
    this.setSelectedRequestIdInLocalStorage(notification.requestId);
    this.routeToQualifyingRequestDetails();
  }

  private navigateToLicenseDetails(notification: Notification) {
    // set request id in local storage
    // navigate to license details page
    console.log('navigateToLicenseDetails');
    this.setLicenseRequestIdInLocalStorage(notification.requestId);
    this.routeTolicenseRequestDetailsRoute();
  }

  private navigateToCorrectionDetails(notification: Notification) {
    // set request id in local storage
    // navigate to license details page
    console.log('navigateToCorrectionDetails');
    this._sharedLicenseProjectService.setCorrectionUnitRequestIdInLocalStorage(
      notification.requestId,
    );
    this._router.navigate([
      '/wafi/license/correction-license-project-request-details',
    ]);
  }

  private setSelectedRequestIdInLocalStorage(id: string): void {
    localStorage.setItem('seclectRequest', id);
  }
  private routeToQualifyingRequestDetails(): void {
    this._router.navigate([this.qualifyingRequestDetailsRoute]);
  }
  private routeTolicenseRequestDetailsRoute(): void {
    this._router.navigate([this.licenseRequestDetailsRoute]);
  }
  private setLicenseRequestIdInLocalStorage(licenseRequestId: string): void {
    localStorage.setItem('licenseRequestId', licenseRequestId);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
