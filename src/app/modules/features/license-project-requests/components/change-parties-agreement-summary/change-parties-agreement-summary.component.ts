import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ChangePartiesAgreementDetialsDto } from '../../models/change-parties-agreement-request-dto';
import { ChangePartiesAgreementRequestService } from '../../services/change-parties-agreement-request.service';
import { EditChangePartiesAgreementComponent } from '../edit-change-parties-agreement/edit-change-parties-agreement.component';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-change-parties-agreement-summary',
  templateUrl: './change-parties-agreement-summary.component.html',
  styleUrls: ['./change-parties-agreement-summary.component.scss']
})
export class ChangePartiesAgreementSummaryComponent {
subscriptions: Subscription[] = [];
  id: string | null = '';
  changeRequestDetails: ChangePartiesAgreementDetialsDto | any;
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private _changePartiesAgreementRequestService: ChangePartiesAgreementRequestService,
    private _popupService: PopupService,
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
      this._changePartiesAgreementRequestService.dataIsUpdate.subscribe(res=>{
        this.ObserveSelectedRequest()
      }));
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._changePartiesAgreementRequestService.getChangePartiesAgreementDetails(this.id!).subscribe(
        (res) => {
          this.changeRequestDetails = res;
          this.showEditButton();
        }
      )
    );
  }
  openDialog(): void {
    let Data = {
      title: 'تعديل البيانات ',
      component: EditChangePartiesAgreementComponent,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
