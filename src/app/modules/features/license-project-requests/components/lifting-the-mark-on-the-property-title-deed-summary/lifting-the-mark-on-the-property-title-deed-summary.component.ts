import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { LiftingTheMarkOnThePropertyTitleDeedRequestDetailsDto } from '../../models/lifting-the-mark-on-the-property-title-deed-dto';
import { LiftingTheMarkOnThePropertyTitleDeedRequestService } from '../../services/lifting-the-mark-on-the-property-title-deed.service';
import { environment } from 'src/environments/environment';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { EditLiftingTheMarkOnThePropertyTitleDeedComponent } from '../edit-lifting-the-mark-on-the-property-title-deed/edit-lifting-the-mark-on-the-property-title-deed.component';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { LicenseProjectService } from '../../services/license-project.service';
import { LicenseProjectDetailsDto } from '../../models/license-project.model';

@Component({
  selector: 'app-lifting-the-mark-on-the-property-title-deed-summary',
  templateUrl: './lifting-the-mark-on-the-property-title-deed-summary.component.html',
  styleUrls: ['./lifting-the-mark-on-the-property-title-deed-summary.component.scss']
})
export class LiftingTheMarkOnThePropertyTitleDeedSummaryComponent {
subscriptions: Subscription[] = [];
  id: string | null = '';
  changeRequestDetails: LiftingTheMarkOnThePropertyTitleDeedRequestDetailsDto | any;
  licenseProjectDetails:  LicenseProjectDetailsDto | null = null;
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private _liftingTheMarkOnThePropertyTitleDeedRequestService: LiftingTheMarkOnThePropertyTitleDeedRequestService,
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
      this._liftingTheMarkOnThePropertyTitleDeedRequestService.dataIsUpdate.subscribe(res=>{
        this.ObserveSelectedRequest()
      }));
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._liftingTheMarkOnThePropertyTitleDeedRequestService.getDetails(this.id!).subscribe(
        (res) => {
          this.changeRequestDetails = res;
          const projectId = res.licenseProjectId; 
          this.getLicenseProjectDetails(projectId);
          this.showEditButton();
        }
      )
    );
  }
  getLicenseProjectDetails(licenseProjectId: string) {
    this.subscriptions.push(
      this._licenseProjectService.getLicenseProjectDetails(licenseProjectId).subscribe(
        (res: any) => {
          this.licenseProjectDetails = res;
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
      component: EditLiftingTheMarkOnThePropertyTitleDeedComponent,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
