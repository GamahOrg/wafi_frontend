import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { licenseActivationRequestDetailsDto } from 'src/app/modules/features/license/models/license-activation-request-details-dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { environment } from 'src/environments/environment';
import { UpdateActivateRequestComponent } from '../update-activate-request-component/update-activate-request/update-activate-request.component';
import { ReactivateLicenseService } from '../../services/reactivate-license.service';
import  { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import  { LicenseProjectRequestDto } from '../../models/request-header-details';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { UserRequestTypeEnum } from '../../../license/enums/user-request-type';

@Component({
  selector: 'app-reactivaite-license-request-developer-summary',
  templateUrl: './reactivaite-license-request-developer-summary.component.html',
  styleUrls: ['./reactivaite-license-request-developer-summary.component.scss']
})
export class ReactivaiteLicenseRequestDeveloperSummaryComponent implements OnInit, OnDestroy {
  projectId: string | null = "";
  projectActiveRequestDetails: licenseActivationRequestDetailsDto | any;
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  selectRequest!: LicenseProjectRequestDto
  showButton: boolean = false;
  userRequestType?: UserRequestTypeEnum | null = null;
  constructor(
    private reactivateLicenseService: ReactivateLicenseService,
    private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private _popupService: PopupService) { }

  ngOnInit(): void {
    this.ObserveSelectedRequest();
  }

  ObserveSelectedRequest() {
    this.subscriptions.push(
      this.reactivateLicenseService.selectedRequest$.subscribe((res: licenseActivationRequestDetailsDto | null) => {
        this.projectActiveRequestDetails = res;
      })
    )

    this.subscriptions.push(this.projectLicenseServiceDetailsService.selectRequest$.subscribe(res => {
      if (res)
        this.selectRequest = res
    }))


    this.subscriptions.push(this.projectLicenseServiceDetailsService.requestUserType$.subscribe(res => {
      this.userRequestType = res;
    }))

    this.showEditButton();
  }

  showEditButton() {
    this.showButton =
      (this.selectRequest.externalRequestStatusId == LicenseProjectRequestStatusEnum.UnderCreation ||
        this.selectRequest.externalRequestStatusId == LicenseProjectRequestStatusEnum.CustomerFeedback
      )
  }
  openDialog(): void {
    let Data = {
      title: "تعديل البيانات من المطور العقارى",
      component: UpdateActivateRequestComponent
    } as PopupData;
    this._popupService.updatePopupData(Data)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
