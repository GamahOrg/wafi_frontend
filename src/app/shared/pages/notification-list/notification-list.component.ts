import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { Router } from '@angular/router';
import { PaginationService } from '../../services/pagination/pagination.service';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { Notification, NotificationListDto } from '../../models/notification.model';
import { RequestType } from '../../models/enums/request-type';
@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  qualifyingRequestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.requestDetails}`;
  licenseRequestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseDetails}`;
  Configuration = Configuration;

  // Pagination
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 7,
    totalCount: 0,
  };
  notificationList: Pagination<Notification[]> = {} as Pagination<Notification[]>;
  selectedNotification: Notification = {} as Notification;
  localization ={
    notifications: "الإشعارات",
    requestId: ' رقم الطلب',
    message: 'الإشعار',
    createdOn: "تاريج الإنشاء",
    viewedOn: "تاريج العرض",
    isViewed: "تم عرض الإشعار",
    yes: "نعم",
    no:"لا"
  }
  get RequestType(): typeof RequestType {
    return RequestType
  }
  constructor(
    private _router: Router,
    private _paginationService: PaginationService,
    private _notificationsService: NotificationsService,
  ) { }
  ngOnInit(): void {
    this.getNotificationList();
    this.observePaginationActions();
  }
  private getNotificationList() {
    this.subscriptions.push(
      this._notificationsService.getNotificationList(this.pagintationData.currentPage, this.pagintationData.pageSize)
        .subscribe((res: Pagination<Notification[]>) => {
          this.updateNotificationList(res as Pagination<Notification[]>)
          console.log(res)
        })
    )
  }
  private updateNotificationList(TypeListView: Pagination<Notification[]>): void {
    this.notificationList = TypeListView;
    this.setPaginationData(
      this.notificationList.pageSize,
      this.notificationList.totalCount,
      this.notificationList.pageCount
    );
  }
  private setPaginationData(pageSize: number, total: number, pageCount: number): void {
    this.pagintationData.pageCount = pageCount
    this.pagintationData.pageSize = pageSize
    this.pagintationData.totalCount = total
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
      })
    )
  }
  private observePaginationClicked(): void {
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
    this.getNotificationList()
  }
  public navigateToDetails(notification: Notification){
    switch (notification.requestTypeId) {
      case this.RequestType.license:
        this.navigateToLicenseDetails(notification)
        break;
      case this.RequestType.qualification:
        this.navigateToQualificationDetails(notification)
        break;
      case this.RequestType.services:
        this.navigateToServicesDetails(notification)
        break;
    }
  }
  private navigateToServicesDetails(notification: Notification) {
    // set request id in local storage 
    // navigate to services page enshallah :D 
    console.log("navigateToServicesDetails");
  }
  private navigateToQualificationDetails(notification: Notification) {
    // set request id in local storage 
    // navigate to qualification details page
    console.log("navigateToQualificationDetails");
    this.setSelectedRequestIdInLocalStorage(notification.requestId);
    this.routeToQualifyingRequestDetails();
  }
  private navigateToLicenseDetails(notification: Notification) {
    // set request id in local storage 
    // navigate to license details page 
    console.log("navigateToLicenseDetails");
    this.setLicenseRequestIdInLocalStorage(notification.requestId);
    this.routeTolicenseRequestDetailsRoute()
  }
  private setSelectedRequestIdInLocalStorage(id: string): void {
    localStorage.setItem("seclectRequest", id)
  }
  private routeToQualifyingRequestDetails(): void {
    this._router.navigate([this.qualifyingRequestDetailsRoute]);
  }
  private routeTolicenseRequestDetailsRoute(): void {
    this._router.navigate([this.licenseRequestDetailsRoute]);
  }
  private setLicenseRequestIdInLocalStorage(licenseRequestId: string): void {
    localStorage.setItem('licenseRequestId', licenseRequestId)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
