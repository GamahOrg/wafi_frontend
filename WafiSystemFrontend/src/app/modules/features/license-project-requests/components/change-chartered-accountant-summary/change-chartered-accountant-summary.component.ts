import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeCharteredAccountantRequestService } from '../../services/change-chartered-account-request';
import { ChangeCharteredAccountantRequestDetailsDto } from '../../models/change-chartered-accountant-request-details-dto';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { EditChangeCharteredAccountantComponent } from '../edit-change-chartered-accountant/edit-change-chartered-accountant.component';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { LicenseProjectService } from '../../services/license-project.service';
import { LicenseProjectDetailsDto } from '../../models/license-project.model';

@Component({
  selector: 'app-change-chartered-accountant-summary',
  templateUrl: './change-chartered-accountant-summary.component.html',
  styleUrls: ['./change-chartered-accountant-summary.component.scss'],
})
export class ChangeCharteredAccountantSummaryComponent {
  subscriptions: Subscription[] = [];
  id: string | null = '';
  changeRequestDetails: ChangeCharteredAccountantRequestDetailsDto | any;
  baseUrl = `${environment.baseURL}/`;
  projectDetails?:LicenseProjectDetailsDto;
  
  constructor(
    private _changeCharteredAccountantRequestService: ChangeCharteredAccountantRequestService,
    private _popupService: PopupService,
    private _licenseProjectService: LicenseProjectService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
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
      this._changeCharteredAccountantRequestService.dataIsUpdate.subscribe(res=>{
        this.ObserveSelectedRequest()
      }));
  }
  getLicenseDetails(): void {
    if (!this.changeRequestDetails || !this.changeRequestDetails.licenseProjectId) {
      return;
    }
    this.subscriptions.push(
      this._licenseProjectService.getLicenseProjectDetails(this.changeRequestDetails.licenseProjectId).subscribe((res:LicenseProjectDetailsDto) => {
          this.projectDetails = res
        })
    );
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._changeCharteredAccountantRequestService.getChareteredAccountantRequestDetails(this.id!).subscribe(
        (res) => {
          this.changeRequestDetails = res;
          this.showEditButton();
          this.getLicenseDetails();
        }
      )
    );
  }
  openDialog(): void {
    let Data = {
      title: 'تعديل البيانات ',
      component: EditChangeCharteredAccountantComponent,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
