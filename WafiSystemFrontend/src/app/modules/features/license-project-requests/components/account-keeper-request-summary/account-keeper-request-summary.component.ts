import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ChangeLicenseProjectAccountKeeperService } from '../../services/change-account-keeper-request.service';
import { ChangeAccountKeeperRequestDetailsDto } from '../../models/change-account-keeper-request-dto';
import { UpdateAccountKeeperRequestComponent } from '../update-account-keeper-request/update-account-keeper-request.component';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { LicenseProjectService } from '../../services/license-project.service';
import { LicenseProjectDetailsDto } from '../../models/license-project.model';

@Component({
  selector: 'app-account-keeper-request-summary',
  templateUrl: './account-keeper-request-summary.component.html',
  styleUrls: ['./account-keeper-request-summary.component.scss']
})
export class AccountKeeperRequestSummaryComponent {
subscriptions: Subscription[] = [];
  id: string | null = '';
  changeRequestDetails: ChangeAccountKeeperRequestDetailsDto | any;
  projectDetails:  LicenseProjectDetailsDto | null = null;
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private _changeAccountKeeperRequestService: ChangeLicenseProjectAccountKeeperService,
    private _popupService: PopupService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
     private _licenseProjectService: LicenseProjectService,
  ) {}
  showButton: boolean = false;
  showEditButton() {
    this.showButton =
      this.changeRequestDetails.externalRequestStatusId ===
        LicenseProjectRequestStatusEnum.UnderCreation ||
      this.changeRequestDetails.externalRequestStatusId ===
        LicenseProjectRequestStatusEnum.CustomerFeedback;
  }
  ngOnInit(): void {
    this.getCharteredAccountId();
    this.observeDataIsUpdated();
   
  }
  getCharteredAccountId() {
    this.id = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    this.ObserveSelectedRequest();
   
  }
  observeDataIsUpdated() {
    this.subscriptions.push(
      this._changeAccountKeeperRequestService.dataIsUpdate.subscribe(res=>{
        this.ObserveSelectedRequest();
       
      }));
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._changeAccountKeeperRequestService.getChangeAccountKeeperDetails(this.id!).subscribe(
        (res:any) => {
          this.changeRequestDetails = res;
          this.showEditButton();
          const projectId = res.licenseProjectId; 
          this.getLicenseProjectDetails(projectId);
        }
      )
    );
  }
  getLicenseProjectDetails(licenseProjectId: string) {
    this.subscriptions.push(
      this._licenseProjectService.getLicenseProjectDetails(licenseProjectId).subscribe(
        (res: any) => {
          this.projectDetails = res;
        },
        (error) => {
          console.error('Error fetching project details:', error);
        }
      )
    );
  }
  openDialog(): void {
    let Data = {
      title: 'تعديل البيانات ',
      component: UpdateAccountKeeperRequestComponent,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
