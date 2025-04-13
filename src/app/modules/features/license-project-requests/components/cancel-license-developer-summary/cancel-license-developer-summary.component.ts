import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestDetailsDto } from 'src/app/modules/features/license/models/license-request-project-details-dto';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { environment } from 'src/environments/environment';
import { UpdateRealEstateDeveloperComponent } from '../update-real-estate-developer-component/update-real-estate-developer/update-real-estate-developer.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserRequestTypeEnum } from '../../../license/enums/user-request-type';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { CancelLicenseRequestService } from '../../services/cancel-license-request.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import  { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import  { LicenseProjectRequestDto } from '../../models/request-header-details';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';

@Component({
  selector: 'app-cancel-license-developer-summary',
  templateUrl: './cancel-license-developer-summary.component.html',
  styleUrls: ['./cancel-license-developer-summary.component.scss'],
})
export class CancelLicenseDeveloperSummaryComponent implements OnInit {
  projectDetails: LicenseProjectRequestDetailsDto | any;
  facilityId: string = '';
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  projectId: string | null = '';
  userRequestType: UserRequestTypeEnum | any;
  userRequestTypeEnum = UserRequestTypeEnum;
  selectRequest!: LicenseProjectRequestDto
  showButton: boolean = false;
  
  constructor(
    private _userDataService: UserDataService,
    private cancelLicenseRequestService: CancelLicenseRequestService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _popupService: PopupService,
    private _filemangementService: FileManagementService,
    private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
  ) {}

  ngOnInit(): void {
    this.ObserveSelectedRequest();
    this.obseveUserRequestType()
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
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this.cancelLicenseRequestService.selectedRequest$.subscribe(
        (res: LicenseProjectRequestDetailsDto | null) => {
          this.projectDetails = res;
        }
      )
    );
  }


  obseveUserRequestType() {

    this.projectLicenseServiceDetailsService.selectRequest$.subscribe(res => {
      if (res)
        this.selectRequest = res
    })

    this.projectLicenseServiceDetailsService.requestUserType$.subscribe(res => {
      this.userRequestType = res;
    })
    this.showEditButton()
  }


  
  showEditButton() {
    this.showButton =
      (this.selectRequest.externalRequestStatusId == LicenseProjectRequestStatusEnum.UnderCreation ||
        this.selectRequest.externalRequestStatusId == LicenseProjectRequestStatusEnum.CustomerFeedback
      )
  }

  openRealEstateDialog(): void {
    let Data = {
      title: 'تعديل البيانات من المطور العقارى',
      component: UpdateRealEstateDeveloperComponent,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
