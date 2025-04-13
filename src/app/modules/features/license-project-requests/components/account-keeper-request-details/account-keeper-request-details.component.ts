import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChangeLicenseProjectAccountKeeperService } from '../../services/change-account-keeper-request.service';
import { ChangeAccountKeeperRequestDetailsDto } from '../../models/change-account-keeper-request-dto';
import { LicenseProjectService } from '../../services/license-project.service';
import { LicenseProjectDetailsDto } from '../../models/license-project.model';

@Component({
  selector: 'app-account-keeper-request-details',
  templateUrl: './account-keeper-request-details.component.html',
  styleUrls: ['./account-keeper-request-details.component.scss']
})
export class AccountKeeperRequestDetailsComponent {
 subscriptions: Subscription[] = [];
  id: string | null = '';
  changeRequestDetails: ChangeAccountKeeperRequestDetailsDto | any;
   projectDetails:  LicenseProjectDetailsDto | null = null;
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private _changeAccountKeeperRequestService: ChangeLicenseProjectAccountKeeperService,
         private _licenseProjectService: LicenseProjectService,
  ) {}
  ngOnInit(): void {
    this.ObserveSelectedRequest();
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._changeAccountKeeperRequestService.selectedRequest$.subscribe(
        (res:any) => {
          this.changeRequestDetails = res;
          const projectId = res.licenseProjectId; 
          this.getLicenseProjectDetails(projectId);
        }
      )
    );
  }
  getLicenseProjectDetails(licenseProjectId: string) {
    this.subscriptions.push(
      this._licenseProjectService.getLicenseProjectDetails(licenseProjectId).subscribe(
        (res: any) => {
          this.projectDetails = res;
        },
        (error) => {
          console.error('Error fetching project details:', error);
        }
      )
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
