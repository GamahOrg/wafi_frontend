import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestDetailsDto } from 'src/app/modules/features/license/models/license-request-project-details-dto';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { environment } from 'src/environments/environment';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserRequestTypeEnum } from '../../../license/enums/user-request-type';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { UpdateClearanceEngineeringComponent } from '../update-clearance-engineering-consultant/update-clearance-engineering/update-clearance-engineering.component';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { CancelLicenseRequestService } from '../../services/cancel-license-request.service';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import { LicenseProjectRequestDto } from '../../models/request-header-details';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';

@Component({
  selector: 'app-cancel-license-engineering-summary',
  templateUrl: './cancel-license-engineering-summary.component.html',
  styleUrls: ['./cancel-license-engineering-summary.component.scss'],
})
export class CancelLicenseEngineeringSummaryComponent implements OnInit {
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
    private _filemangementService: FileManagementService,
    private cancelLicenseRequestService: CancelLicenseRequestService,
    private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _popupService: PopupService
  ) { }

  // get licenseProjectRequestStatusEnum() {
  //   return LicenseProjectRequestStatusEnum;
  // }

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
      this.requestType === UserRequestTypeEnum.ProjectManager &&
      (this.selectRequest.engineeringConsultantStatusId === LicenseProjectRequestStatusEnum.New ||
        this.selectRequest.engineeringConsultantStatusId === LicenseProjectRequestStatusEnum.PartyStudyFinished ||
        this.selectRequest.engineeringConsultantStatusId === LicenseProjectRequestStatusEnum.PartiesStudyFinished ||
        this.selectRequest.engineeringConsultantStatusId === LicenseProjectRequestStatusEnum.CustomerFeedback);
  }
  deletFile(id: any) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      console.log("Deleted res", res)
    })
  }
  ngOnInit(): void {
    // this.getSelectedRequestIdFromLocalStorage();
    this.ObserveSelectedRequest();
    // this.obseveCustomerData();
    this.getRequestDetails();
    this.observeDataIsUpdated();
  }
  // getSelectedRequestIdFromLocalStorage(): void {
  //   this.projectId =
  //     this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
  // }

  observeDataIsUpdated() {
    this.subscriptions.push(
      this.cancelLicenseRequestService.dataIsUpdate.subscribe(res => {
        console.log('observeDataIsUpdated');        
        this.ObserveSelectedRequest();
      })
    )
  }

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
  // getRequestUserType() {
  //   this.subscriptions.push(  
  //       this.cancelLicenseRequestService
  //       .getRequestType(this.projectId as string, this.facilityId)
  //       .subscribe((res: UserRequestTypeEnum | null) => {
  //         this.requestType = res;
  //       })
  //   );
  // }
  openClearanceEngineeringDialog(): void {
    let Data = {
      title: 'تعديل البيانات من مدير المشروع',
      component: UpdateClearanceEngineeringComponent,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
