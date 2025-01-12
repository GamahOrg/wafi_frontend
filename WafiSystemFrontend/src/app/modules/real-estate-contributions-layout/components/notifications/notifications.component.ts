import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationsService } from 'src/app/shared/services/notifications/notifications.service';
import { Notification, NotificationListDto } from 'src/app/shared/models/notification.model';
import { RequestType } from 'src/app/shared/models/enums/request-type';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Router } from '@angular/router';
import { SignalRService } from 'src/app/core/services/signalR/signal-r.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  baseImagePath: string = "./assets/images/layout/header/";
  notificationList: Notification[] | null = null;
  qualifyingRequestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.requestDetails}`;
  licenseRequestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseDetails}`;
  notViewedCount: number = 0;
  Configuration = Configuration;
  userData: customerResponse | null = null;

  localization = {
    seeAll: "عرض الكل"
  }

  constructor(
    private _notificationsService: NotificationsService,
    private _router: Router,
    private _signalRService: SignalRService,
    private _userDataService: UserDataService,
    private _toastrNotificatioService: ToastrNotificatioService
  ) { }

  get RequestType(): typeof RequestType {
    return RequestType
  }

  ngOnInit(): void {
    this.GetNotificationList();
    this.observeNotifyCustomer();
    this.getCustomerData();
  }

  private GetNotificationList(): void {
    this.subscriptions.push(
      this._notificationsService.getNotifications().subscribe((res: NotificationListDto | null) => {
        if (res) {
          this.notificationList = res.notificationList as Notification[]
          this.notViewedCount = res.notViewedCount as number
        }
      })
    )
  }

  public onNotificationClicked(notification: Notification) {
    console.log("notification", notification);
    this.subscriptions.push(
      this._notificationsService.markNotificationViewed(notification.id).subscribe((res: boolean) => {
        if (res) {
          this.GetNotificationList();
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
      })
    )
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

  private observeNotifyCustomer(): void {
    this.subscriptions.push(
      this._signalRService.NotifyCustomer$.subscribe((res: Notification) => {
        if (this.userData && (res.actorId == this.userData.id)) {
          this.GetNotificationList();
          this._toastrNotificatioService.showInfo(res.message);
        }
      })
    )
  }

  private getCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        if (res) {
          this.userData = res;
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

}
