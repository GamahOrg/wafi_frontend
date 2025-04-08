import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { WithdrawSurplusBeforeProjectEndRequestDto } from '../../models/withdraw-surplus-before-project-end-request-dto';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { WithdrawSurplusBeforeProjectEndRequestService } from '../../services/withdraw-surplus-before-project-end-request.service';
import { AddEditWithdrawSurplusBeforeProjectEndRequestComponent } from '../add-edit-withdraw-surplus-before-project-end-request/add-edit-withdraw-surplus-before-project-end-request.component';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-withdraw-surplus-before-project-end-details',
  templateUrl: './withdraw-surplus-before-project-end-details.component.html',
  styleUrls: ['./withdraw-surplus-before-project-end-details.component.scss']
})
export class WithdrawSurplusBeforeProjectEndDetailsComponent {
subscriptions: Subscription[] = [];
withdrawSurplusBeforeProjectEndRequest?: WithdrawSurplusBeforeProjectEndRequestDto;
  baseUrl = `${environment.baseURL}/`;
  showButton: boolean = false;
  requestId?: string | null;
  LicenseProjectRequestStatusEnum=LicenseProjectRequestStatusEnum;
  

  /**
   *
   */
  constructor(private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,private _withdrawSurplusBeforeProjectEndRequestService: WithdrawSurplusBeforeProjectEndRequestService) { }

  ngOnInit(): void {
    
    this.getRequestDetails();
  }

     
        getRequestDetails() {
          
          this.requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
          if (this.requestId) {
            
            this._withdrawSurplusBeforeProjectEndRequestService.getLicenseProjectDetailsById(this.requestId).subscribe(res => {
              if (res) {
                this.withdrawSurplusBeforeProjectEndRequest = res as WithdrawSurplusBeforeProjectEndRequestDto;
              }
            })
          }
      
        } 
}
