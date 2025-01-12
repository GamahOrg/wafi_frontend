import { Component, OnInit } from '@angular/core';
import  { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import  { LicenseRequestTypes } from '../../../license/models/lincense-request-project-dto';
import  { Router } from '@angular/router';
import type { Subscription } from 'rxjs';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  subscriptions: Subscription[] = [];
  requestTypes: LicenseRequestTypes[] = [];
  constructor(private router: Router,private projectLicenseServiceDetailsService:ProjectLicenseServiceDetailsService) { }

  ngOnInit() {
    this.getRequestTypes()
  }

  getRequestTypes(){
    this.subscriptions.push(
    this.projectLicenseServiceDetailsService.getLicenseRequestTypes().subscribe(res=>{
      if(res){
        this.requestTypes=res
      }
    }))
  }


  public navigateToCreateRequest(requestType: number): void {
    let requestSummaryRoute=''
    switch (requestType) {
      case LicenseProjectRequestTypeEnum.CancelLicense:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createcancelLicense}`;
        break;
      case LicenseProjectRequestTypeEnum.ReActivateLicense:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createreactivaiteLicense}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangePlan:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createchangePlanRequest}`;
        break;
    }
    this.router.navigate([requestSummaryRoute]);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
