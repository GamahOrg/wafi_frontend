import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeLicenseProjectNameRequestDto } from '../../models/change-license-project-name-request-dto';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ChangeLicenseProjectNameRequestService } from '../../services/change-license-project-name-request.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-change-project-name-details',
  templateUrl: './change-project-name-details.component.html',
  styleUrls: ['./change-project-name-details.component.scss']
})
export class ChangeProjectNameDetailsComponent {
subscriptions: Subscription[] = [];
changeLicenseProjectNameRequest?: ChangeLicenseProjectNameRequestDto;
  baseUrl = `${environment.baseURL}/`;
  showButton: boolean = false;
  LicenseProjectRequestStatusEnum=LicenseProjectRequestStatusEnum;
  requestId?: string | null;
 
  /**
   *
   */
  constructor(private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,private _changeLicenseProjectNameRequestService: ChangeLicenseProjectNameRequestService) { }

  ngOnInit(): void {
    
    this.getRequestDetails();
  }
    getRequestDetails() {
          
          this.requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
          if (this.requestId) {
            
            this._changeLicenseProjectNameRequestService.getLicenseProjectDetailsById(this.requestId).subscribe(res => {
              if (res) {
                this.changeLicenseProjectNameRequest = res as ChangeLicenseProjectNameRequestDto;
              }
            })
          }
      
        } 
}
