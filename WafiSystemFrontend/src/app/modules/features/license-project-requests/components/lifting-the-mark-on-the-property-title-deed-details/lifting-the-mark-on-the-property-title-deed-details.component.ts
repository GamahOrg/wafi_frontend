import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LiftingTheMarkOnThePropertyTitleDeedRequestService } from '../../services/lifting-the-mark-on-the-property-title-deed.service';
import { LiftingTheMarkOnThePropertyTitleDeedRequestDetailsDto } from '../../models/lifting-the-mark-on-the-property-title-deed-dto';
import { LicenseProjectService } from '../../services/license-project.service';
import { LicenseProjectDetailsDto } from '../../models/license-project.model';

@Component({
  selector: 'app-lifting-the-mark-on-the-property-title-deed-details',
  templateUrl: './lifting-the-mark-on-the-property-title-deed-details.component.html',
  styleUrls: ['./lifting-the-mark-on-the-property-title-deed-details.component.scss']
})
export class LiftingTheMarkOnThePropertyTitleDeedDetailsComponent {
subscriptions: Subscription[] = [];
  id: string | null = '';
  changeRequestDetails: LiftingTheMarkOnThePropertyTitleDeedRequestDetailsDto | any;
  licenseProjectDetails:  LicenseProjectDetailsDto | null = null;
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private _liftingTheMarkOnThePropertyTitleDeedRequestService: LiftingTheMarkOnThePropertyTitleDeedRequestService,
    private _licenseProjectService: LicenseProjectService
  ) {}
  ngOnInit(): void {
    this.ObserveSelectedRequest();
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._liftingTheMarkOnThePropertyTitleDeedRequestService.selectedRequest$.subscribe(
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
          this.licenseProjectDetails = res;
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
