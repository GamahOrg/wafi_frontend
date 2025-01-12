import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CahngePlaneRequestDetailsService } from '../../services/cahnge-plane-request-details.service';
import { LicenseProjectRequestChangePlanFullDto } from '../../models/license-project-request-change-plan-full-dto';
import { environment } from 'src/environments/environment';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddEditChangeplanLicenseRequestDeveloperSummaryComponent } from '../add-edit-changeplan-license-request-developer-summary/add-edit-changeplan-license-request-developer-summary.component';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import { UserRequestTypeEnum } from '../../../license/enums/user-request-type';
import { LicenseProjectRequestDto } from '../../models/request-header-details';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';

@Component({
  selector: 'app-changeplan-license-request-developer-summary',
  templateUrl: './changeplan-license-request-developer-summary.component.html',
  styleUrls: ['./changeplan-license-request-developer-summary.component.scss']
})
export class ChangeplanLicenseRequestDeveloperSummaryComponent implements OnInit {

  userRequestTypeEnum = UserRequestTypeEnum;
  userRequestType?: UserRequestTypeEnum | null = null;
  subscriptions: Subscription[] = [];
  licenseProjectRequestChangePlanFull?: LicenseProjectRequestChangePlanFullDto;
  baseUrl = `${environment.baseURL}/`;
  selectRequest!: LicenseProjectRequestDto
  showButton: boolean = false;
  /**
   *
   */
  constructor(private _cahngePlaneRequestDetailsService: CahngePlaneRequestDetailsService,
    private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private _popupService: PopupService) { }

  ngOnInit(): void {
    this.getLicenseProjectRequestChangePlan();
    this.obseveUserRequestType()
  }
  private getLicenseProjectRequestChangePlan(): void {

    this.subscriptions.push(
      this._cahngePlaneRequestDetailsService.getLicenseProjectRequestChangePlan().subscribe((res: LicenseProjectRequestChangePlanFullDto | null) => {
        if (res) {
          this.licenseProjectRequestChangePlanFull = res;
        }
      }),
    )
  }

  obseveUserRequestType() {

    this.projectLicenseServiceDetailsService.selectRequest$.subscribe(res => {
      if (res)
        this.selectRequest = res
    })

    this.projectLicenseServiceDetailsService.requestUserType$.subscribe(res => {
      this.userRequestType = res;
    })
    this.showEditButton();
  }

  showEditButton() {
    this.showButton = this.userRequestType === UserRequestTypeEnum.RealEstateDeveloper &&
      (this.selectRequest.externalRequestStatusId == LicenseProjectRequestStatusEnum.UnderCreation ||
        this.selectRequest.externalRequestStatusId == LicenseProjectRequestStatusEnum.SendToParties ||
        this.selectRequest.externalRequestStatusId == LicenseProjectRequestStatusEnum.PartiesStudyFinished ||
        this.selectRequest.externalRequestStatusId == LicenseProjectRequestStatusEnum.CustomerFeedback
      )
  }

  openDialog(): void {
    let Data = {
      title: "تعديل البيانات من المطور العقارى",
      component: AddEditChangeplanLicenseRequestDeveloperSummaryComponent,
      id: "AddEditChangeplanLicenseRequestDeveloperSummaryComponent",
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
