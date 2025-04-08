import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CahngePlaneRequestDetailsService } from '../../services/cahnge-plane-request-details.service';
import { environment } from 'src/environments/environment';
import { LicenseProjectRequestChangePlanFullDto } from '../../models/license-project-request-change-plan-full-dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { AddEditChangeplanLicenseRequestAccountantSummaryComponent } from '../add-edit-changeplan-license-request-accountant-summary/add-edit-changeplan-license-request-accountant-summary.component';
import { UserRequestTypeEnum } from '../../../license/enums/user-request-type';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import  { LicenseProjectRequestDto } from '../../models/request-header-details';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';

@Component({
  selector: 'app-changeplan-license-request-accountant-summary',
  templateUrl: './changeplan-license-request-accountant-summary.component.html',
  styleUrls: ['./changeplan-license-request-accountant-summary.component.scss']
})
export class ChangeplanLicenseRequestAccountantSummaryComponent implements OnInit {
  userRequestTypeEnum = UserRequestTypeEnum;
  requestType: UserRequestTypeEnum | any;
  selectRequest!: LicenseProjectRequestDto;
  userRequestType?: UserRequestTypeEnum | null = null;
  subscriptions: Subscription[] = [];
  licenseProjectRequestChangePlanFull?: LicenseProjectRequestChangePlanFullDto;
  baseUrl = `${environment.baseURL}/`;
  showButton: boolean = false;

  /**
   *
   */
  constructor(private _cahngePlaneRequestDetailsService: CahngePlaneRequestDetailsService,
    private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private _popupService: PopupService) { }

  ngOnInit(): void {
    this.getLicenseProjectRequestChangePlan();
    this.getRequestDetails();
  }

  getRequestDetails() {
    this.projectLicenseServiceDetailsService.selectRequest$.subscribe(res => {
      if (res)
        this.selectRequest = res;
    })

    this.projectLicenseServiceDetailsService.requestUserType$.subscribe(res => {
      this.requestType = res;
      console.log('requestUserType');
      console.log(res);
      
    })

    this.showEditButton();
  }
  showEditButton() {
    this.showButton =(
        this.selectRequest.accountantRequestStatusId === LicenseProjectRequestStatusEnum.UnderCreation ||
        this.selectRequest.accountantRequestStatusId === LicenseProjectRequestStatusEnum.CustomerFeedback);
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

  // obseveUserRequestType() {
  //   this.projectLicenseServiceDetailsService.requestUserType$.subscribe(res => {
  //     this.userRequestType = res;
  //   })
  // }


  openDialog(): void {
    let Data = {
      title: "تعديل البيانات من المحاسب القانونى",
      component: AddEditChangeplanLicenseRequestAccountantSummaryComponent,
      id: "AddEditChangeplanLicenseRequestAccountantSummaryComponent",
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
