import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeLicenseProjectNameRequestDto } from '../../models/change-license-project-name-request-dto';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ChangeLicenseProjectNameRequestService } from '../../services/change-license-project-name-request.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { AddEditChangeProjectNameSummaryComponent } from '../add-edit-change-project-name-summary/add-edit-change-project-name-summary.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-change-project-name-main-data-summary',
  templateUrl: './change-project-name-main-data-summary.component.html',
  styleUrls: ['./change-project-name-main-data-summary.component.scss']
})
export class ChangeProjectNameMainDataSummaryComponent {
subscriptions: Subscription[] = [];
changeLicenseProjectNameRequest?: ChangeLicenseProjectNameRequestDto;
  baseUrl = `${environment.baseURL}/`;
  showButton: boolean = false;
  LicenseProjectRequestStatusEnum=LicenseProjectRequestStatusEnum;
  requestId?: string | null;
 
  /**
   *
   */
  constructor(private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,private _changeLicenseProjectNameRequestService: ChangeLicenseProjectNameRequestService,
    

    private _popupService: PopupService) { }

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
  getLicenseProjectRequestChangeEngineer() {
    
    this._changeLicenseProjectNameRequestService.getChangeLicenseProjectNameRequest().subscribe(res => {
      if (res)
        
        this.changeLicenseProjectNameRequest = res as ChangeLicenseProjectNameRequestDto;
    })  
    }
    
  openDialog(): void {
    let Data = {
      title: "تعديل طلب تغيير اسم المشروع أو الشركة المرخص",
      component: AddEditChangeProjectNameSummaryComponent,
      id: "AddEditChangeProjectNameSummaryComponent",
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
    dialogRef.afterClosed().subscribe(_=> this.getLicenseProjectRequestChangeEngineer());
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
