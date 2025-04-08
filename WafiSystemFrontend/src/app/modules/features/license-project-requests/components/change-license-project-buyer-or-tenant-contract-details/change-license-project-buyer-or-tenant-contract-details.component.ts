import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeLicenseProjectBuyerOrTenantContractRequestDto } from '../../models/change-license-project-buyer-or-tenant-contract-request-dto';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ChangeLicenseProjectBuyerOrTenantContractRequestService } from '../../services/change-license-project-buyer-or-tenant-contract-request.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-change-license-project-buyer-or-tenant-contract-details',
  templateUrl: './change-license-project-buyer-or-tenant-contract-details.component.html',
  styleUrls: ['./change-license-project-buyer-or-tenant-contract-details.component.scss']
})
export class ChangeLicenseProjectBuyerOrTenantContractDetailsComponent {
subscriptions: Subscription[] = [];
changeLicenseProjectBuyerOrTenantContractRequest?: ChangeLicenseProjectBuyerOrTenantContractRequestDto;
  baseUrl = `${environment.baseURL}/`;
  showButton: boolean = false;
  requestId?: string | null;
  LicenseProjectRequestStatusEnum=LicenseProjectRequestStatusEnum;
  

  /**
   * 
   */
  constructor(private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,private _changeLicenseProjectBuyerOrTenantContractRequestService: ChangeLicenseProjectBuyerOrTenantContractRequestService) { }

  ngOnInit(): void {
    
    this.getRequestDetails();
  }
 getRequestDetails() {
          
          this.requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
          if (this.requestId) {
            
            this._changeLicenseProjectBuyerOrTenantContractRequestService.getLicenseProjectDetailsById(this.requestId).subscribe(res => {
              if (res) {
                this.changeLicenseProjectBuyerOrTenantContractRequest = res as ChangeLicenseProjectBuyerOrTenantContractRequestDto;
              }
            })
          }
      
        } 
}
