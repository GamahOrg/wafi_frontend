import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CahngePlaneRequestDetailsService } from '../../services/cahnge-plane-request-details.service';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestChangePlanFullDto } from '../../models/license-project-request-change-plan-full-dto';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddEditChangeplanLicenseRequestEngineeringSummaryComponent } from '../add-edit-changeplan-license-request-engineering-summary/add-edit-changeplan-license-request-engineering-summary.component';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import { UserRequestTypeEnum } from '../../../license/enums/user-request-type';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import  { LicenseProjectRequestDto } from '../../models/request-header-details';

@Component({
  selector: 'app-changeplan-license-request-engineering-summary',
  templateUrl: './changeplan-license-request-engineering-summary.component.html',
  styleUrls: ['./changeplan-license-request-engineering-summary.component.scss']
})
export class ChangeplanLicenseRequestEngineeringSummaryComponent implements OnInit {

  userRequestTypeEnum = UserRequestTypeEnum;
  userRequestType?: UserRequestTypeEnum | null = null;
  subscriptions: Subscription[] = [];
  licenseProjectRequestChangePlanFull?:LicenseProjectRequestChangePlanFullDto;
  baseUrl = `${environment.baseURL}/`;
  /**
   *
   */

  requestType: UserRequestTypeEnum | any;
  selectRequest!: LicenseProjectRequestDto;
  showButton: boolean = false;

  constructor(private _cahngePlaneRequestDetailsService: CahngePlaneRequestDetailsService,
    private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private _popupService: PopupService) {}

  ngOnInit(): void {
    this.getLicenseProjectRequestChangePlan();
    this.getRequestDetails()
  }

  getRequestDetails() {
    this.projectLicenseServiceDetailsService.selectRequest$.subscribe(res => {
      if (res)
        this.selectRequest = res;
    })

    this.projectLicenseServiceDetailsService.requestUserType$.subscribe(res => {
      this.requestType = res;
    })

    this.showEditButton();
  }
  showEditButton() {
    this.showButton =
        (this.selectRequest.engineeringConsultantStatusId === LicenseProjectRequestStatusEnum.UnderCreation ||
        this.selectRequest.engineeringConsultantStatusId === LicenseProjectRequestStatusEnum.CustomerFeedback);
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


  openDialog(): void {
    let Data = {
      title: "تعديل البيانات من مدير المشروع",
      component: AddEditChangeplanLicenseRequestEngineeringSummaryComponent,
      id: "AddEditChangeplanLicenseRequestEngineeringSummaryComponent",
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
