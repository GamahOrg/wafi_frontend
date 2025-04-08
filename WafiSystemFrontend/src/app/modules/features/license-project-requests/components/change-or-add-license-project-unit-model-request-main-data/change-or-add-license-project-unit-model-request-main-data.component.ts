import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeOrAddLicenseProjectUnitModelRequestDto } from '../../models/change-or-add-license-project-unit-model-request-dto';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ChangeOrAddLicenseProjectUnitModelRequestService } from '../../services/change-or-add-license-project-unit-model-request.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddEditChangeOrAddLicenseProjectUnitModelRequestComponent } from '../add-edit-change-or-add-license-project-unit-model-request/add-edit-change-or-add-license-project-unit-model-request.component';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-change-or-add-license-project-unit-model-request-main-data',
  templateUrl: './change-or-add-license-project-unit-model-request-main-data.component.html',
  styleUrls: ['./change-or-add-license-project-unit-model-request-main-data.component.scss']
})
export class ChangeOrAddLicenseProjectUnitModelRequestMainDataComponent {
subscriptions: Subscription[] = [];
changeOrAddLicenseProjectUnitModelRequest?: ChangeOrAddLicenseProjectUnitModelRequestDto;
  baseUrl = `${environment.baseURL}/`;
  showButton: boolean = false;
  LicenseProjectRequestStatusEnum=LicenseProjectRequestStatusEnum;
  requestId?: string | null;

  /**
   *
   */
  constructor(private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,private _changeOrAddLicenseProjectUnitModelRequestService: ChangeOrAddLicenseProjectUnitModelRequestService,
    private _popupService: PopupService) { }

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
      
  getLicenseProjectRequestChangeUnitsOrSpaceProject() {
    
    this._changeOrAddLicenseProjectUnitModelRequestService.getChangeOrAddLicenseProjectUnitModelRequest().subscribe(res => {
      if (res)
        
        this.changeOrAddLicenseProjectUnitModelRequest = res as ChangeOrAddLicenseProjectUnitModelRequestDto;
    })  
    }
  
     
      
    
  openDialog(): void {
    let Data = {
      title: "تعديل بيانات طلب تغيير او إضافة نماذج وحدات بالمشروع عقاري ",
      component: AddEditChangeOrAddLicenseProjectUnitModelRequestComponent,
      id: "AddEditChangeOrAddLicenseProjectUnitModelRequestComponent",
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
    dialogRef.afterClosed().subscribe(_=> this.getLicenseProjectRequestChangeUnitsOrSpaceProject());
  } 
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
