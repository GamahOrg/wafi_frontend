import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestDetailsDto } from 'src/app/modules/features/license/models/license-request-project-details-dto';
import { environment } from 'src/environments/environment';
import { PopupData } from 'src/app/shared/models/popup.model';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserRequestTypeEnum } from '../../../license/enums/user-request-type';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { UpdateClearanceAccountComponent } from '../update-clearance-account-component/update-clearance-account/update-clearance-account.component';
import { CancelLicenseRequestService } from '../../services/cancel-license-request.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import { LicenseProjectRequestDto } from '../../models/request-header-details';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';

@Component({
  selector: 'app-cancel-license-accountant-summary',
  templateUrl: './cancel-license-accountant-summary.component.html',
  styleUrls: ['./cancel-license-accountant-summary.component.scss'],
})
export class CancelLicenseAccountantSummaryComponent implements OnInit {
  projectDetails: LicenseProjectRequestDetailsDto | any;
  facilityId: string = '';
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  projectId: string | null = '';
  requestType: UserRequestTypeEnum | any;
  userRequestTypeEnum = UserRequestTypeEnum;
  selectRequest!: LicenseProjectRequestDto;

  constructor(
    private _userDataService: UserDataService,
    private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private cancelLicenseRequestService: CancelLicenseRequestService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _popupService: PopupService,
    private _filemangementService : FileManagementService
  ) { }

  ngOnInit(): void {
    // this.getSelectedRequestIdFromLocalStorage();
    this.ObserveSelectedRequest();
    // this.obseveCustomerData();
    this.getRequestDetails();
    this.observeDataIsUpdated()
  }

  observeDataIsUpdated() {
    this.subscriptions.push(
      this.cancelLicenseRequestService.dataIsUpdate.subscribe(res => {
        console.log('observeDataIsUpdated');        
        this.ObserveSelectedRequest();
      })
    )
  }
  deletFile(id: any) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      console.log("Deleted res", res)
    })
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
  showButton: boolean = false;
  showEditButton() {
    this.showButton =
      this.requestType === UserRequestTypeEnum.Accountant &&
      (this.selectRequest.accountantRequestStatusId === LicenseProjectRequestStatusEnum.New ||
        this.selectRequest.accountantRequestStatusId === LicenseProjectRequestStatusEnum.PartyStudyFinished ||
        this.selectRequest.accountantRequestStatusId === LicenseProjectRequestStatusEnum.PartiesStudyFinished ||
        this.selectRequest.accountantRequestStatusId === LicenseProjectRequestStatusEnum.CustomerFeedback);
  }


  // getSelectedRequestIdFromLocalStorage(): void {
  //   this.projectId =
  //     this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
  // }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this.cancelLicenseRequestService.selectedRequest$.subscribe(
        (res: LicenseProjectRequestDetailsDto | null) => {
          this.projectDetails = res;
        }
      )
    );
  }
  // obseveCustomerData(): void {
  //   this.subscriptions.push(
  //     this._userDataService
  //       .getCustomerData()
  //       .subscribe((res: customerResponse | null) => {
  //         if (res && res.facilities && res.facilities.length > 0) {
  //           this.facilityId = res?.facilities[0]?.id || '';
  //         }
  //       })
  //   );
  // }
  // showEditButton() {
  //   this.subscriptions.push(
  //     this.cancelLicenseRequestService
  //       .getRequestType(this.projectId as string, this.facilityId)
  //       .subscribe((res: UserRequestTypeEnum | null) => {
  //         this.requestType = res;
  //       })
  //   );
  // }
  openClearanceAccountDialog(): void {
    let Data = {
      title: 'تعديل البيانات من المحاسب القانونى',
      component: UpdateClearanceAccountComponent,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
