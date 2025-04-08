import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeLicenseProjectSpaceOrUnitsRequestDto } from '../../models/change-license-project-space-or-units-request-dto';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ChangeLicenseProjectSpaceOrUnitsRequestService } from '../../services/change-license-project-space-or-units-request.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { environment } from 'src/environments/environment';
import { AddEditChangeLicenseProjectSpaceOrUnitsSummaryComponent } from '../add-edit-change-license-project-space-or-units-summary/add-edit-change-license-project-space-or-units-summary.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-change-license-project-space-or-units-reques-main-data-summary',
  templateUrl: './change-license-project-space-or-units-reques-main-data-summary.component.html',
  styleUrls: ['./change-license-project-space-or-units-reques-main-data-summary.component.scss']
})
export class ChangeLicenseProjectSpaceOrUnitsRequesMainDataSummaryComponent {
  subscriptions: Subscription[] = [];
  changeLicenseProjectSpaceOrUnitsRequest?: ChangeLicenseProjectSpaceOrUnitsRequestDto;
  baseUrl = `${environment.baseURL}/`;
  showButton: boolean = false;
  requestId?: string | null;
  LicenseProjectRequestStatusEnum=LicenseProjectRequestStatusEnum;
  
 
  /**
   *
   */
  constructor(private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,private _changeLicenseProjectSpaceOrUnitsRequestService: ChangeLicenseProjectSpaceOrUnitsRequestService,
    private _popupService: PopupService) { }

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
      
  getLicenseProjectRequestChangeUnitsOrSpaceProject() {
    
    this._changeLicenseProjectSpaceOrUnitsRequestService.getLicenseProjectRequestChangeUnitsOrSpaceProject().subscribe(res => {
      if (res)
        
        this.changeLicenseProjectSpaceOrUnitsRequest = res as ChangeLicenseProjectSpaceOrUnitsRequestDto;
    })  
    }
  
     
      
    
  openDialog(): void {
    let Data = {
      title: "تعديل البيانات تغير الأستشاري الهندسي",
      component: AddEditChangeLicenseProjectSpaceOrUnitsSummaryComponent,
      id: "AddEditChangeLicenseProjectSpaceOrUnitsSummaryComponent",
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
    dialogRef.afterClosed().subscribe(_=> this.getLicenseProjectRequestChangeUnitsOrSpaceProject());
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
