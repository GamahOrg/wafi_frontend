import { Component } from '@angular/core';
import { ChangeLicenseProjectEngineeringRequestDto } from '../../models/change-license-project-engineering-request-dto';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChangeLicenseProjectEngineeringRequestService } from '../../services/change-license-project-engineering-request.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddEditChangeEngineerSummaryComponent } from '../add-edit-change-engineer-summary/add-edit-change-engineer-summary.component';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { LicenseProjectService } from '../../services/license-project.service';
import { LicenseProjectDetailsDto } from '../../models/license-project.model';

@Component({
  selector: 'app-change-engineer-main-data-summary',
  templateUrl: './change-engineer-main-data-summary.component.html',
  styleUrls: ['./change-engineer-main-data-summary.component.scss']
})
export class ChangeEngineerMainDataSummaryComponent {
  subscriptions: Subscription[] = [];
  changeLicenseProjectEngineeringRequest?: ChangeLicenseProjectEngineeringRequestDto;
  baseUrl = `${environment.baseURL}/`;
  showButton: boolean = false;
  requestId?: string | null;
  LicenseProjectRequestStatusEnum=LicenseProjectRequestStatusEnum;
    projectDetails?:LicenseProjectDetailsDto;
  

  /**
   *
   */
  constructor(private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _changeLicenseProjectEngineeringRequestService: ChangeLicenseProjectEngineeringRequestService,
    private _licenseProjectService: LicenseProjectService,
    private _popupService: PopupService) { }

  ngOnInit(): void {
    
    this.getRequestDetails();
  }
  getRequestDetails() {
    
    this.requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (this.requestId) {
      
      this._changeLicenseProjectEngineeringRequestService.getLicenseProjectDetailsById(this.requestId).subscribe(res => {
        if (res) {
          this.changeLicenseProjectEngineeringRequest = res as ChangeLicenseProjectEngineeringRequestDto;
          this.getLicenseDetails();
        }
      })
    }

  } 
    getLicenseDetails(): void {
      if (!this.changeLicenseProjectEngineeringRequest || !this.changeLicenseProjectEngineeringRequest.licenseProjectRequest.licenseProjectId) {
        return;
      }
      this.subscriptions.push(
        this._licenseProjectService.getLicenseProjectDetails(this.changeLicenseProjectEngineeringRequest.licenseProjectRequest.licenseProjectId).subscribe((res:LicenseProjectDetailsDto) => {
            this.projectDetails = res
          })
      );
    }

  getLicenseProjectRequestChangeEngineer() {  
        
        this._changeLicenseProjectEngineeringRequestService.getLicenseProjectRequestChangeEngineer().subscribe(res => {
          if (res) {
            this.changeLicenseProjectEngineeringRequest = res as ChangeLicenseProjectEngineeringRequestDto;
          }
        })
    }
     
      
    
  openDialog(): void {
    let Data = {
      title: "تعديل البيانات تغير الأستشاري الهندسي",
      component: AddEditChangeEngineerSummaryComponent,
      id: "AddEditChangeEngineerSummaryComponent",
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
     dialogRef.afterClosed().subscribe(_=> this.getLicenseProjectRequestChangeEngineer());
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
