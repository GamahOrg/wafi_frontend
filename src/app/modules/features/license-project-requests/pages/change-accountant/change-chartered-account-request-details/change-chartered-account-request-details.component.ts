import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChangeCharteredAccountantRequestDetailsDto } from '../../../models/change-chartered-accountant-request-details-dto';
import { LicenseProjectDetailsDto } from '../../../models/license-project.model';
import { ChangeCharteredAccountantRequestService } from '../../../services/change-chartered-account-request';
import { LicenseProjectService } from '../../../services/license-project.service';


@Component({
  selector: 'app-change-chartered-account-request-details',
  templateUrl: './change-chartered-account-request-details.component.html',
  styleUrls: ['./change-chartered-account-request-details.component.scss']
})
export class ChangeCharteredAccountRequestDetailsComponent {
subscriptions: Subscription[] = [];
  id: string | null = '';
  changeRequestDetails: ChangeCharteredAccountantRequestDetailsDto | any;
  baseUrl = `${environment.baseURL}/`;
  projectDetails?:LicenseProjectDetailsDto;

  constructor(
    private _changeCharteredAccountantRequestService: ChangeCharteredAccountantRequestService,
    private _licenseProjectService: LicenseProjectService,
  ) {}
  ngOnInit(): void {
    this.ObserveSelectedRequest()
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._changeCharteredAccountantRequestService.selectedRequest$.subscribe(
        (res:any) => {
          this.changeRequestDetails = res;
          this.getLicenseDetails();
        }
      )
    );
  }
  getLicenseDetails(): void {
    if (!this.changeRequestDetails || !this.changeRequestDetails.licenseProjectId) {
      return;
    }
    this.subscriptions.push(
      this._licenseProjectService.getLicenseProjectDetails(this.changeRequestDetails.licenseProjectId).subscribe((res:LicenseProjectDetailsDto) => {
          this.projectDetails = res
        })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}

