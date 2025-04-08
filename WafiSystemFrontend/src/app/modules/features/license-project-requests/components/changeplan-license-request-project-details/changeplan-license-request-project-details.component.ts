import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestChangePlanFullDto } from '../../models/license-project-request-change-plan-full-dto';
import { environment } from 'src/environments/environment';
import { CahngePlaneRequestDetailsService } from '../../services/cahnge-plane-request-details.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-changeplan-license-request-project-details',
  templateUrl: './changeplan-license-request-project-details.component.html',
  styleUrls: ['./changeplan-license-request-project-details.component.scss']
})
export class ChangeplanLicenseRequestProjectDetailsComponent implements OnInit {

  subscriptions: Subscription[] = [];
  licenseProjectRequestChangePlanFull?:LicenseProjectRequestChangePlanFullDto;
  baseUrl = `${environment.baseURL}/`;
  licenseProjectRequestId?:string;
  /**
   *
   */
  constructor(private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,private _cahngePlaneRequestDetailsService: CahngePlaneRequestDetailsService) {}

  ngOnInit(): void {
    
    this.getSelectedRequestIdFromLocalStorage();
  }
  getSelectedRequestIdFromLocalStorage(): void {
    
    this.licenseProjectRequestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage() as string;
    if (this.licenseProjectRequestId) this.getLicenseProjectDetailsById();
  }

  private getLicenseProjectDetailsById(): void {

    this.subscriptions.push(
      this._cahngePlaneRequestDetailsService.getLicenseProjectDetailsById(this.licenseProjectRequestId as string).subscribe((res: LicenseProjectRequestChangePlanFullDto | null) => {
        if (res) {
          
          this.licenseProjectRequestChangePlanFull = res;
          this._cahngePlaneRequestDetailsService.setLicenseProjectRequestChangePlan(this.licenseProjectRequestChangePlanFull);

        }
      }),
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }


}
