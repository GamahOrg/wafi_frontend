import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { WithdrawSurplusBeforeProjectEndRequestDto } from '../../models/withdraw-surplus-before-project-end-request-dto';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { WithdrawSurplusBeforeProjectEndRequestService } from '../../services/withdraw-surplus-before-project-end-request.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddEditWithdrawSurplusBeforeProjectEndRequestComponent } from '../add-edit-withdraw-surplus-before-project-end-request/add-edit-withdraw-surplus-before-project-end-request.component';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-withdraw-surplus-before-project-end-request-main-data',
  templateUrl: './withdraw-surplus-before-project-end-request-main-data.component.html',
  styleUrls: ['./withdraw-surplus-before-project-end-request-main-data.component.scss']
})
export class WithdrawSurplusBeforeProjectEndRequestMainDataComponent {
subscriptions: Subscription[] = [];
withdrawSurplusBeforeProjectEndRequest?: WithdrawSurplusBeforeProjectEndRequestDto;
  baseUrl = `${environment.baseURL}/`;
  showButton: boolean = false;
  requestId?: string | null;
  LicenseProjectRequestStatusEnum=LicenseProjectRequestStatusEnum;
  

  /**
   *
   */
  constructor(private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,private _withdrawSurplusBeforeProjectEndRequestService: WithdrawSurplusBeforeProjectEndRequestService,
    private _popupService: PopupService) { }

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
      

    
  getWithdrawSurplusBeforeProjectEndRequest() {
    
    this._withdrawSurplusBeforeProjectEndRequestService.getWithdrawSurplusBeforeProjectEndRequest().subscribe(res => {
      if (res)
        
        this.withdrawSurplusBeforeProjectEndRequest = res as WithdrawSurplusBeforeProjectEndRequestDto;
    })  
    }
  
  openDialog(): void {
    let Data = {
      title: "تعديل بيانات طلب المطور سحب الفائض من حساب الضمان قبل انتهاء المشروع ",
      component: AddEditWithdrawSurplusBeforeProjectEndRequestComponent,
      id: "AddEditWithdrawSurplusBeforeProjectEndRequestComponent",
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
    dialogRef.afterClosed().subscribe(_=> this.getWithdrawSurplusBeforeProjectEndRequest());
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
