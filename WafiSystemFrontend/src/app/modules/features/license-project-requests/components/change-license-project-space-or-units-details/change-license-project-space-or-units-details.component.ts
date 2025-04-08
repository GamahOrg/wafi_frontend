import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeLicenseProjectSpaceOrUnitsRequestDto } from '../../models/change-license-project-space-or-units-request-dto';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ChangeLicenseProjectSpaceOrUnitsRequestService } from '../../services/change-license-project-space-or-units-request.service';
import { environment } from 'src/environments/environment';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-change-license-project-space-or-units-details',
  templateUrl: './change-license-project-space-or-units-details.component.html',
  styleUrls: ['./change-license-project-space-or-units-details.component.scss']
})
export class ChangeLicenseProjectSpaceOrUnitsDetailsComponent {
 subscriptions: Subscription[] = [];
  changeLicenseProjectSpaceOrUnitsRequest?: ChangeLicenseProjectSpaceOrUnitsRequestDto;
  baseUrl = `${environment.baseURL}/`;
  showButton: boolean = false;
  requestId?: string | null;
  LicenseProjectRequestStatusEnum=LicenseProjectRequestStatusEnum;
  
 
  /**
   *
   */
  constructor(private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,private _changeLicenseProjectSpaceOrUnitsRequestService: ChangeLicenseProjectSpaceOrUnitsRequestService) { }

  ngOnInit(): void {
    
    this.getRequestDetails();
  }

        getRequestDetails() {
          
          this.requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
          if (this.requestId) {
            
            this._changeLicenseProjectSpaceOrUnitsRequestService.getLicenseProjectDetailsById(this.requestId).subscribe(res => {
              if (res) {
                this.changeLicenseProjectSpaceOrUnitsRequest = res as ChangeLicenseProjectSpaceOrUnitsRequestDto;
              }
            })
          }
      
        } 
}
