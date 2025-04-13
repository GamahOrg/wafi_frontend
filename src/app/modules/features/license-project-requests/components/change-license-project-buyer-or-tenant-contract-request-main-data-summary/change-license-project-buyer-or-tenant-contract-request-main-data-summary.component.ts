import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeLicenseProjectBuyerOrTenantContractRequestDto } from '../../models/change-license-project-buyer-or-tenant-contract-request-dto';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ChangeLicenseProjectBuyerOrTenantContractRequestService } from '../../services/change-license-project-buyer-or-tenant-contract-request.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddEditChangeLicenseProjectBuyerOrTenantContractRequestComponent } from '../add-edit-change-license-project-buyer-or-tenant-contract-request/add-edit-change-license-project-buyer-or-tenant-contract-request.component';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-change-license-project-buyer-or-tenant-contract-request-main-data-summary',
  templateUrl: './change-license-project-buyer-or-tenant-contract-request-main-data-summary.component.html',
  styleUrls: ['./change-license-project-buyer-or-tenant-contract-request-main-data-summary.component.scss']
})
export class ChangeLicenseProjectBuyerOrTenantContractRequestMainDataSummaryComponent {
subscriptions: Subscription[] = [];
changeLicenseProjectBuyerOrTenantContractRequest?: ChangeLicenseProjectBuyerOrTenantContractRequestDto;
  baseUrl = `${environment.baseURL}/`;
  showButton: boolean = false;
  requestId?: string | null;
  LicenseProjectRequestStatusEnum=LicenseProjectRequestStatusEnum;
  

  /**
   * 
   */
  constructor(private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,private _changeLicenseProjectBuyerOrTenantContractRequestService: ChangeLicenseProjectBuyerOrTenantContractRequestService,
    private _popupService: PopupService) { }

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
  getLicenseProjectRequestChangeUnitsOrSpaceProject() {
    
    this._changeLicenseProjectBuyerOrTenantContractRequestService.getChangeLicenseProjectBuyerOrTenantContractRequest().subscribe(res => {
      if (res)
        
        this.changeLicenseProjectBuyerOrTenantContractRequest = res as ChangeLicenseProjectBuyerOrTenantContractRequestDto;
    })  
    }
  
     
      
    
  openDialog(): void {
    let Data = {
      title: "تعديل طلب تغيير في عقود المشترين أو المستأجرين المعتمدة للمشروع",
      component: AddEditChangeLicenseProjectBuyerOrTenantContractRequestComponent,
      id: "AddEditChangeLicenseProjectBuyerOrTenantContractRequestComponent",
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
    dialogRef.afterClosed().subscribe(_=> this.getLicenseProjectRequestChangeUnitsOrSpaceProject());
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
