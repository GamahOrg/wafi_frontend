import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ObjectionToSupervisionAndFollowupCostsRequestService } from '../../services/objection-to-supervision-and-followup-costs-request.service';
import { ObjectionToSupervisionAndFollowupCostsRequestDetailsDto } from '../../models/objection-to-supervision-and-followup-costs-request-dto';
import { EditObjectionToSupervisionAndFollowupCostsComponent } from '../edit-objection-to-supervision-and-followup-costs/edit-objection-to-supervision-and-followup-costs.component';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-objection-to-supervision-and-followup-costs-summary',
  templateUrl: './objection-to-supervision-and-followup-costs-summary.component.html',
  styleUrls: ['./objection-to-supervision-and-followup-costs-summary.component.scss']
})
export class ObjectionToSupervisionAndFollowupCostsSummaryComponent {
subscriptions: Subscription[] = [];
  id: string | null = '';
  changeRequestDetails: ObjectionToSupervisionAndFollowupCostsRequestDetailsDto | any;
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private _objectionToSupervisionAndFollowupCostsRequestService: ObjectionToSupervisionAndFollowupCostsRequestService,
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
      this._objectionToSupervisionAndFollowupCostsRequestService.dataIsUpdate.subscribe(
        () => {
          this.ObserveSelectedRequest();
        }
      )
    );
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._objectionToSupervisionAndFollowupCostsRequestService.getDetails(this.id!).subscribe(
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
      component: EditObjectionToSupervisionAndFollowupCostsComponent,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
