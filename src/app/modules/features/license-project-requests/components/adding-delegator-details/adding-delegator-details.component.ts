import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeLicenseProjectDelegatorRequestDto } from '../../models/change-license-project-delegator-request-dto';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ChangeLicenseProjectDelegatorRequestService } from '../../services/change-license-project-delegator-request.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-adding-delegator-details',
  templateUrl: './adding-delegator-details.component.html',
  styleUrls: ['./adding-delegator-details.component.scss']
})
export class AddingDelegatorDetailsComponent {
subscriptions: Subscription[] = [];
changeLicenseProjectDelegatorRequest?: ChangeLicenseProjectDelegatorRequestDto;
  baseUrl = `${environment.baseURL}/`;
  showButton: boolean = false;
  LicenseProjectRequestStatusEnum=LicenseProjectRequestStatusEnum;
  requestId?: string | null;

  /**
   *
   */
  constructor(private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,private _changeLicenseProjectDelegatorRequestService: ChangeLicenseProjectDelegatorRequestService) { }

  ngOnInit(): void {
    
    this.getRequestDetails();
  }
  getRequestDetails() {
          
          this.requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
          if (this.requestId) {
            
            this._changeLicenseProjectDelegatorRequestService.getLicenseProjectDetailsById(this.requestId).subscribe(res => {
              if (res) {
                this.changeLicenseProjectDelegatorRequest = res as ChangeLicenseProjectDelegatorRequestDto;
              }
            })
          }
      
        } 
}
