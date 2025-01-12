import { Component, OnDestroy ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LicenseRequestApprovalsService } from '../../services/license-request-approval/license-request-approvals.service';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectApproval } from '../../dataModels/license-project-approval.model';
import { customerResponse } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-license-request-approvals',
  templateUrl: './license-request-approvals.component.html',
  styleUrls: ['./license-request-approvals.component.scss']
})
export class LicenseRequestApprovalsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  requestDetailsRoute = `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsLicense}/${Configuration.pages.realEstateContributionslicense.lincenseRequestApprovalDetails}`;
  approvalList: LicenseProjectApproval[] = [] as LicenseProjectApproval[];
  selectedApproval: LicenseProjectApproval = {} as LicenseProjectApproval;
  userData: customerResponse | null = null;
  
  constructor(    private _licenseRequestApprovalsService: LicenseRequestApprovalsService,
    private _userDataService: UserDataService,
    private _router: Router){

  }


  ngOnInit(): void {
    this.obseveCustomerData()
  }
  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        if (this.userData) this.GetApprovals();
      })
    )
  }
  private GetApprovals() {
    this.subscriptions.push(
      this._licenseRequestApprovalsService.GetApprovals(this.userData?.facilities[0].id as string)
        .subscribe((res: LicenseProjectApproval[] | null) => {
          // this.updateRequestList(res as Pagination<licenseRequest[]>)
          if (res) this.approvalList = res as LicenseProjectApproval[]
        })
    )
  }
  public navigateToDetails(request: LicenseProjectApproval) {
    this.selectedApproval = request;
    console.log("navigateToDetails", this.selectedApproval)
    this.setSelectedRequestIdInLocalStorage();
    this.routeToRequestDetails();
  }
  setSelectedRequestIdInLocalStorage() {
    this._licenseRequestApprovalsService.setLicenseSelectedApprovalInLocalStorage(this.selectedApproval)
  }
  routeToRequestDetails(): void {
    this._router.navigate([this.requestDetailsRoute]);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
