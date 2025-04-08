import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeLicenseProjectDelegatorRequestDto } from '../../models/change-license-project-delegator-request-dto';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ChangeLicenseProjectDelegatorRequestService } from '../../services/change-license-project-delegator-request.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { AddEditAddingDelegatorSummaryComponent } from '../add-edit-adding-delegator-summary/add-edit-adding-delegator-summary.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-adding-delegator-main-data-summary',
  templateUrl: './adding-delegator-main-data-summary.component.html',
  styleUrls: ['./adding-delegator-main-data-summary.component.scss']
})
export class AddingDelegatorMainDataSummaryComponent {
subscriptions: Subscription[] = [];
changeLicenseProjectDelegatorRequest?: ChangeLicenseProjectDelegatorRequestDto;
  baseUrl = `${environment.baseURL}/`;
  showButton: boolean = false;
  LicenseProjectRequestStatusEnum=LicenseProjectRequestStatusEnum;
  requestId?: string | null;

  /**
   *
   */
  constructor(private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,private _changeLicenseProjectDelegatorRequestService: ChangeLicenseProjectDelegatorRequestService,
    

    private _popupService: PopupService) { }

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
   getLicenseProjectRequestChangeDelegator() {
    
    this._changeLicenseProjectDelegatorRequestService.getLicenseProjectRequestChangeDelegator().subscribe(res => {
      if (res)
        
        this.changeLicenseProjectDelegatorRequest = res as ChangeLicenseProjectDelegatorRequestDto;
    })  
    }
  
     
      
    
  openDialog(): void {
    let Data = {
      title: "تعديل البيانات إضافة المفوضون",
      component: AddEditAddingDelegatorSummaryComponent,
      id: "AddEditAddingDelegatorSummaryComponent",
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
    dialogRef.afterClosed().subscribe(_=> this.getLicenseProjectRequestChangeDelegator());
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
