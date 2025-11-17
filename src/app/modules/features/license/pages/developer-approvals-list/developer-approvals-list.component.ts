import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectApproval } from '../../dataModels/license-project-approval.model';
import { customerResponse } from '../../models/employee-registration-dto';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LicenseRequestApprovalsService } from '../../services/license-request-approvals/license-request-approvals.service';

@Component({
  selector: 'app-developer-approvals-list',
  templateUrl: './developer-approvals-list.component.html',
  styleUrls: ['./developer-approvals-list.component.scss'],
})
export class DeveloperApprovalsListComponent implements OnInit, OnDestroy {
  approvals: any[] = [];
  isLoading: boolean = false;
  private subscriptions: Subscription[] = [];

  requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseRequestApprovalDetails}`;
  approvalList: LicenseProjectApproval[] = [] as LicenseProjectApproval[];
  selectedApproval: LicenseProjectApproval = {} as LicenseProjectApproval;
  userData: customerResponse | null = null;
  constructor(
    private _licenseRequestApprovalsService: LicenseRequestApprovalsService,
    private _userDataService: UserDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obseveCustomerData();
  }
  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (this.userData) this.GetApprovals();
        })
    );
  }
  private GetApprovals() {
    this.subscriptions.push(
      this._licenseRequestApprovalsService
        .GetApprovals(this.userData?.facilities[0].id as string)
        .subscribe((res: LicenseProjectApproval[] | null) => {
          // this.updateRequestList(res as Pagination<licenseRequest[]>)
          if (res) this.approvalList = res as LicenseProjectApproval[];
        })
    );
  }

  loadApprovals(): void {
    this.isLoading = true;
    // TODO: Implement API call to load developer approvals
    this.isLoading = false;
  }

  getApprovalClass(approval: LicenseProjectApproval) {
    if (approval.approvedOn == null) {
      return 'orange';
    } else {
      if (approval.isApproved) {
        return 'green';
      } else {
        return 'red';
      }
    }
  }

  public navigateToDetails(request: LicenseProjectApproval) {
    this.selectedApproval = request;
    this.setSelectedRequestIdInLocalStorage();
    this.viewDetails(request);
  }

  setSelectedRequestIdInLocalStorage() {
    this._licenseRequestApprovalsService.setLicenseSelectedApprovalInLocalStorage(
      this.selectedApproval
    );
  }
  routeToRequestDetails(): void {
    this.router.navigate([this.requestDetailsRoute]);
  }

  viewDetails(approval: any): void {
    this.router.navigate(['/wafi/license/developer-approval-details', approval.id]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
