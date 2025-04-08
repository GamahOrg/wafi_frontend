import { Component, inject, type OnDestroy, type OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LincenseRequestProjectService } from 'src/app/modules/features/license-project-requests/services/lincense-request-project.service';
import  { RequestType } from 'src/app/shared/models/enums/request-type';

@Component({
  selector: 'app-request-details-redirection',
  templateUrl: './request-details-redirection.component.html',
  styleUrls: ['./request-details-redirection.component.scss']
})
export class RequestDetailsRedirectionComponent implements OnInit, OnDestroy {
  private activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  private licenseProjectService = inject(LincenseRequestProjectService)

  qualifyingRequestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.requestDetails}`;
  licenseRequestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseDetails}`;
  licenseRequestTypeDeatilsRoute = `/${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.licenseProjectRequestDetails}`


  ngOnInit(): void {
    const requestType = this.activatedRoute.snapshot.params['requestType'];
    const requestId = this.activatedRoute.snapshot.params['requestId'];
    this.NavigateRequestDetails(requestType, requestId)
  }

  NavigateRequestDetails(requestTypeId: RequestType, requestId: string) { 
    debugger
    switch (+requestTypeId) {
      case RequestType.license:
        this.navigateToLicenseDetails(requestId)
        break;
      case RequestType.qualification:
        this.navigateToQualificationDetails(requestId)
        break;
      case RequestType.services:
        this.navigateToServicesDetails(requestId)
        break;
      case RequestType.LicenseProjectRequest:
        this.navigateToLicenseRequestTypeDetails(requestId)
        break;
    }
  }



  private navigateToServicesDetails(requestId: string) {
    // set request id in local storage 
    // navigate to services page enshallah :D 
    console.log("navigateToServicesDetails");
  }

  private navigateToQualificationDetails(requestId: string) {
    // set request id in local storage 
    // navigate to qualification details page
    console.log("navigateToQualificationDetails");
    this.setSelectedRequestIdInLocalStorage(requestId);
    this.routeToQualifyingRequestDetails();
  }

  private navigateToLicenseDetails(requestId: string) {
    // set request id in local storage 
    // navigate to license details page 
    console.log("navigateToLicenseDetails");
    this.setLicenseRequestIdInLocalStorage(requestId);
    this.routeTolicenseRequestDetailsRoute()
  }

  private setLicenseRequestIdInLocalStorage(licenseRequestId: string): void {
    localStorage.setItem('licenseRequestId', licenseRequestId)
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

  navigateToLicenseRequestTypeDetails(requestId: string) {
    this.licenseProjectService.setSelectedActiveProjectRequestIdInLocalStorage(requestId);
    if (this._router.url == this.licenseRequestTypeDeatilsRoute) {
      location.reload();
    } else {
      this._router.navigate([this.licenseRequestTypeDeatilsRoute]);
    }
  }


  ngOnDestroy(): void {

  }


}
