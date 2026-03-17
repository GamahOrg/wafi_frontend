import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ChangeOrAddLicenseProjectUnitModelRequestDto } from '../../models/change-or-add-license-project-unit-model-request-dto';
import { environment } from 'src/environments/environment';
import { ChangeOrAddLicenseProjectUnitModelRequestCreateUpdateDto } from '../../models/change-or-add-license-project-unit-model-request-create-update-dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ChangeOrAddLicenseProjectUnitModelRequestService } from '../../services/change-or-add-license-project-unit-model-request.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-add-edit-change-or-add-license-project-unit-model-request',
  templateUrl: './add-edit-change-or-add-license-project-unit-model-request.component.html',
  styleUrls: ['./add-edit-change-or-add-license-project-unit-model-request.component.scss']
})
export class AddEditChangeOrAddLicenseProjectUnitModelRequestComponent {
subscriptions: Subscription[] = [];
  licenseProjectRequestId?:string;
  changeOrAddLicenseProjectUnitModelRequest?:ChangeOrAddLicenseProjectUnitModelRequestDto;
  baseUrl = `${environment.baseURL}/`;
  isEditMode: boolean = false;

  facilityId: string = '00000000-0000-0000-0000-000000000000';
  changeOrAddLicenseProjectUnitModelRequestCreateUpdate?: ChangeOrAddLicenseProjectUnitModelRequestCreateUpdateDto;
 
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  
    //نموذج الطلب، موضحاً به أسباب طلب التغيير
  applicationFormFileId?: string;
  //البرنامج الزمني شامل كافة منحنيات البرنامج الزمني
  timelineIncludingAllTimelineCurvesId?: string;
   //جدول الأوزان النسبية المحدث
   updatedRelativeWeightsTableId?: string;
   
  constructor(
    private _changeOrAddLicenseProjectUnitModelRequestService: ChangeOrAddLicenseProjectUnitModelRequestService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _userDataService: UserDataService,
    

  ) {this.getSelectedRequestIdFromLocalStorage() }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.observePopupEvents();
  }
  getSelectedRequestIdFromLocalStorage(): void {
    
    this.licenseProjectRequestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage() as string;

  }

  private getChangeOrAddLicenseProjectUnitModel(): void {

    this.subscriptions.push(
      this._changeOrAddLicenseProjectUnitModelRequestService.getChangeOrAddLicenseProjectUnitModelRequest().subscribe((res: ChangeOrAddLicenseProjectUnitModelRequestDto | null) => {
        if (res) {
          this.changeOrAddLicenseProjectUnitModelRequest = res;
          this.isEditMode = true;
         this.applicationFormFileId = this.changeOrAddLicenseProjectUnitModelRequest.applicationFormFileId as string;
    this.timelineIncludingAllTimelineCurvesId = this.changeOrAddLicenseProjectUnitModelRequest.timelineIncludingAllTimelineCurvesId as string;
    this.updatedRelativeWeightsTableId = this.changeOrAddLicenseProjectUnitModelRequest.updatedRelativeWeightsTableId as string;
        }
        else{
          this.isEditMode = false; 
        }
      }),
    )
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.facilityId = res?.facilities[0]?.id || '';
          this.getChangeOrAddLicenseProjectUnitModel();
        })
    );
  }
  //نموذج الطلب، موضحاً به أسباب طلب التغيير
  onExistApplicationFormFilesUploaded(filesData: any) {
    if (filesData.eventRes.data.length === 0) {
      this.applicationFormFileId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.applicationFormFileId = data.id;
    });
  }
    //البرنامج الزمني شامل كافة منحنيات البرنامج الزمني
  onExistTimelineIncludingAllTimelineCurvesFilesUploaded(filesData: any) {
    if (filesData.eventRes.data.length === 0) {
      this.timelineIncludingAllTimelineCurvesId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.timelineIncludingAllTimelineCurvesId = data.id;
    });
  }
 //جدول الأوزان النسبية المحدث
 onExistUpdatedRelativeWeightTableFilesUloaded(filesData: any) {
    if (filesData.eventRes.data.length === 0) {
      this.updatedRelativeWeightsTableId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.updatedRelativeWeightsTableId = data.id;
    });
  }

  save(): void {
    
    if (
      !this.applicationFormFileId || 
      !this.timelineIncludingAllTimelineCurvesId || 
      !this.updatedRelativeWeightsTableId
    ) {
      this.showValidation = true;
      return;
    }
      
this.changeOrAddLicenseProjectUnitModelRequestCreateUpdate={} as ChangeOrAddLicenseProjectUnitModelRequestCreateUpdateDto;
this.changeOrAddLicenseProjectUnitModelRequestCreateUpdate.id = this.changeOrAddLicenseProjectUnitModelRequest?.licenseProjectRequestId as string;
    this.changeOrAddLicenseProjectUnitModelRequestCreateUpdate.facilityId = this.facilityId;
    this.changeOrAddLicenseProjectUnitModelRequestCreateUpdate.licenseProjectId ='00000000-0000-0000-0000-000000000000';
    this.changeOrAddLicenseProjectUnitModelRequestCreateUpdate.applicationFormFileId = this.applicationFormFileId as string;
    this.changeOrAddLicenseProjectUnitModelRequestCreateUpdate.timelineIncludingAllTimelineCurvesId = this.timelineIncludingAllTimelineCurvesId as string;
    this.changeOrAddLicenseProjectUnitModelRequestCreateUpdate.updatedRelativeWeightsTableId = this.updatedRelativeWeightsTableId as string;
    
    this.subscriptions.push(
      this._changeOrAddLicenseProjectUnitModelRequestService.save(this.changeOrAddLicenseProjectUnitModelRequestCreateUpdate).subscribe((res) => {

        if (res) {
          
          this._changeOrAddLicenseProjectUnitModelRequestService.setChangeOrAddLicenseProjectUnitModelRequest(res as ChangeOrAddLicenseProjectUnitModelRequestDto);
          this._toastrNotificationService.showSuccess('تم تعديل الطلب بنجاح');
          this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(res?.licenseProjectRequestId!)
        this.closeDialog();
        }

      })
    )
  }
  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
        this.save()
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
