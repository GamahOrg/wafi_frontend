import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, Subscription } from 'rxjs';
import { NotificationsService } from 'src/app/shared/services/notifications/notifications.service';
import {
  Notification,
  NotificationListDto,
} from 'src/app/shared/models/notification.model';
import { RequestType } from 'src/app/shared/models/enums/request-type';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Router } from '@angular/router';
import { SignalRService } from 'src/app/core/services/signalR/signal-r.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LincenseRequestProjectService } from 'src/app/modules/features/license-project-requests/services/lincense-request-project.service';
import { LicenseRequestHeaderService } from 'src/app/modules/features/license/services/license-request-header.service';
import { SharedLicenseProjectService } from 'src/app/modules/features/license/services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  baseImagePath: string = './assets/images/layout/header/';
  notificationList: Notification[] | null = null;
  qualifyingRequestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.requestDetails}`;
  licenseRequestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseDetails}`;
  correctionRequestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseDetails}`;
  licenseRequestTypeDeatilsRoute = `/${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestDetails}`;
  notViewedCount: number = 0;
  Configuration = Configuration;
  userData: customerResponse | null = null;

  localization = {
    seeAll: 'عرض الكل',
  };

  constructor(
    private _notificationsService: NotificationsService,
    private _router: Router,
    private _signalRService: SignalRService,
    private _userDataService: UserDataService,
    private _toastrNotificatioService: ToastrNotificatioService,
    private licenseProjectService: LincenseRequestProjectService,
    private _requestService: LicenseRequestHeaderService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
  ) { }

  get RequestType(): typeof RequestType {
    return RequestType;
  }

  ngOnInit(): void {
    this.GetNotificationList();
    this.observeNotifyCustomer();
    this.getCustomerData();
  }

  private GetNotificationList(): void {
    this.subscriptions.push(
      this._notificationsService
        .getNotifications()
        .subscribe((res: NotificationListDto | null) => {
          if (res) {
            this.notificationList = res.notificationList as Notification[];
            this.notViewedCount = res.notViewedCount as number;
          }
        })
    );
  }

  public onNotificationClicked(notification: Notification) {
    console.log('notification', notification);
    this.subscriptions.push(
      this._notificationsService
        .markNotificationViewed(notification.id)
        .subscribe((res: boolean) => {
          if (res) {
            this.GetNotificationList();
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
                this.navigateToFawriaLicense(notification)
                break;
              case this.RequestType.OwnerApproval:
                this.navigateToOwnerApproval(notification)
                break;
              case this.RequestType.EngineerApproval:
                this.navigateToEngineerApproval(notification)
                break;
              case this.RequestType.CharteredAccountApproval:
                this.navigateToCharteredAccountApproval(notification)
                break;
              case this.RequestType.DeveloperProjectList:
                this.navigateToDeveloperProjectList(notification)
                break;
              case this.RequestType.EngineeringProjectList:
                this.navigateToEngineeringProjectList(notification)
                break;
              case this.RequestType.CharteredAccountProjectList:
                this.navigateToCharteredAccountProjectList(notification)
                break;
              case this.RequestType.BuyerContractsList:
                this.navigateToBuyerContractsList(notification)
                break;
                case this.RequestType.CorrectionUnitRequest:
                this.navigateToCorrectionDetails(notification)
                break;
            }
          }
        })
    );
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
    let route = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.developerProjectList}`;
    if (this._router.url == route) {
      location.reload();
    } else {
      this._router.navigate([route]);
    }
  }

  navigateToEngineerApproval(notification: Notification) {
    let route = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.developerProjectList}`;
    if (this._router.url == route) {
      location.reload();
    } else {
      this._router.navigate([route]);
    }
  }

  navigateToOwnerApproval(notification: Notification) {
    let route = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.developerProjectList}`;
    if (this._router.url == route) {
      location.reload();
    } else {
      this._router.navigate([route]);
    }
  }

  navigateToFawriaLicense(notification: Notification) {
    //get request data
    this.subscriptions.push(
      this._requestService.GetLicenseRequestHeaderById(notification.requestId).subscribe(request => {
        if (request) {
          
          this._sharedLicenseProjectService.setLicenseTypeCodeInLocalStorage(request.typeCode);

          this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(request.id);


          this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(request.licenseProjectId);

          let route = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.fawriaLicenseDetails}`;
          if (this._router.url == route) {
            location.reload();
          } else {
            this._router.navigate([route]);
          }
        }
      })
    )

  }

  navigateToLicenseRequestTypeDetails(notification: Notification) {
    this.licenseProjectService.setSelectedActiveProjectRequestIdInLocalStorage(
      notification.requestId
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
      this._sharedLicenseProjectService.setCorrectionUnitRequestIdInLocalStorage(notification.requestId);
    this._router.navigate(['/wafi/license/correction-license-project-request-details']);
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

  private observeNotifyCustomer(): void {
    this.subscriptions.push(
      this._signalRService.NotifyCustomer$.subscribe((res: Notification) => {
        if (this.userData && res.actorId == this.userData.id) {
          this.GetNotificationList();
          this._toastrNotificatioService.showInfo(res.message);
        }
      })
    );
  }

  private getCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          if (res) {
            this.userData = res;
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
