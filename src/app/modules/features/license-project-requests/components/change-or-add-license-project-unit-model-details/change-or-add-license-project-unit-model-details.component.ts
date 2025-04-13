import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeOrAddLicenseProjectUnitModelRequestDto } from '../../models/change-or-add-license-project-unit-model-request-dto';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ChangeOrAddLicenseProjectUnitModelRequestService } from '../../services/change-or-add-license-project-unit-model-request.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-change-or-add-license-project-unit-model-details',
  templateUrl: './change-or-add-license-project-unit-model-details.component.html',
  styleUrls: ['./change-or-add-license-project-unit-model-details.component.scss']
})
export class ChangeOrAddLicenseProjectUnitModelDetailsComponent {
subscriptions: Subscription[] = [];
changeOrAddLicenseProjectUnitModelRequest?: ChangeOrAddLicenseProjectUnitModelRequestDto;
  baseUrl = `${environment.baseURL}/`;
  showButton: boolean = false;
  LicenseProjectRequestStatusEnum=LicenseProjectRequestStatusEnum;
  requestId?: string | null;

  /**
   *
   */
  constructor(private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,private _changeOrAddLicenseProjectUnitModelRequestService: ChangeOrAddLicenseProjectUnitModelRequestService) { }

  ngOnInit(): void {
    
    this.getRequestDetails();
  }

        getRequestDetails() {
          
          this.requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
          if (this.requestId) {
            
            this._changeOrAddLicenseProjectUnitModelRequestService.getLicenseProjectDetailsById(this.requestId).subscribe(res => {
              if (res) {
                this.changeOrAddLicenseProjectUnitModelRequest = res as ChangeOrAddLicenseProjectUnitModelRequestDto;
              }
            })
          }
      
        } 
      
}
