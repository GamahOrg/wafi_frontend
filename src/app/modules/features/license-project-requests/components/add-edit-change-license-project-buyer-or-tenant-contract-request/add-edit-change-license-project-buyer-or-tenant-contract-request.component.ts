import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { environment } from 'src/environments/environment';
import { ChangeLicenseProjectBuyerOrTenantContractRequestCreateUpdateDto, ChangeLicenseProjectBuyerOrTenantContractRequestDto } from '../../models/change-license-project-buyer-or-tenant-contract-request-dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ChangeLicenseProjectBuyerOrTenantContractRequestService } from '../../services/change-license-project-buyer-or-tenant-contract-request.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { FormBuilder } from '@angular/forms';
import { customerResponse } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-add-edit-change-license-project-buyer-or-tenant-contract-request',
  templateUrl: './add-edit-change-license-project-buyer-or-tenant-contract-request.component.html',
  styleUrls: ['./add-edit-change-license-project-buyer-or-tenant-contract-request.component.scss']
})
export class AddEditChangeLicenseProjectBuyerOrTenantContractRequestComponent {
subscriptions: Subscription[] = [];
  licenseProjectRequestId?:string;
    baseUrl = `${environment.baseURL}/`;
    isEditMode: boolean = false;
    changeLicenseProjectBuyerOrTenantContractRequest?: ChangeLicenseProjectBuyerOrTenantContractRequestDto;
    changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate?: ChangeLicenseProjectBuyerOrTenantContractRequestCreateUpdateDto;
  facilityId: string = '00000000-0000-0000-0000-000000000000'; 
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  applicationFormFileId?: string;
  contarctCopyId?: string;
  writtenAgreementFromBuyerOrTenantId?:string;
  constructor(
    private _changeLicenseProjectBuyerOrTenantContractRequestService: ChangeLicenseProjectBuyerOrTenantContractRequestService,
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

  private getLicenseProjectRequestChangeEngineering(): void {

    this.subscriptions.push(
      this._changeLicenseProjectBuyerOrTenantContractRequestService.getChangeLicenseProjectBuyerOrTenantContractRequest().subscribe((res: ChangeLicenseProjectBuyerOrTenantContractRequestDto | null) => {
        if (res) {
          this.changeLicenseProjectBuyerOrTenantContractRequest = res;
          this.isEditMode = true;
        this.applicationFormFileId= this.changeLicenseProjectBuyerOrTenantContractRequest.applicationFormFileId;
        this.contarctCopyId= this.changeLicenseProjectBuyerOrTenantContractRequest.contarctCopyId;
        this.writtenAgreementFromBuyerOrTenantId= this.changeLicenseProjectBuyerOrTenantContractRequest.writtenAgreementFromBuyerOrTenantId;

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
          this.getLicenseProjectRequestChangeEngineering();
        })
    );
  }
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
  onExistContarctCopyFilesUploaded(filesData: any) {
    if (filesData.eventRes.data.length === 0) {
      this.contarctCopyId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.contarctCopyId = data.id;
    });
  }
  onExistWrittenAgreementFromBuyerOrTenantFilesUploaded(filesData: any) {
    if (filesData.eventRes.data.length === 0) {
      this.writtenAgreementFromBuyerOrTenantId = undefined;
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.writtenAgreementFromBuyerOrTenantId = data.id;
    });
  }


  save(): void {
    
      if (
        !this.applicationFormFileId || 
        !this.contarctCopyId ||
        !this.writtenAgreementFromBuyerOrTenantId
      ) {
        this.showValidation = true;
        return;
      }
      
    
      this.changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate={} as ChangeLicenseProjectBuyerOrTenantContractRequestCreateUpdateDto;
    this.changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate.facilityId = this.facilityId;
    this.changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate.applicationFormFileId = this.applicationFormFileId as string;
    this.changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate.contarctCopyId = this.contarctCopyId as string;
    this.changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate.writtenAgreementFromBuyerOrTenantId = this.writtenAgreementFromBuyerOrTenantId as string;
    this.changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate.id = this.changeLicenseProjectBuyerOrTenantContractRequest?.licenseProjectRequestId as string;
    this.changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate.licenseProjectId ='00000000-0000-0000-0000-000000000000';
    this.subscriptions.push(
      this._changeLicenseProjectBuyerOrTenantContractRequestService.save(this.changeLicenseProjectBuyerOrTenantContractRequestCreateUpdate).subscribe((res) => {

        if (res) {
          
          this._changeLicenseProjectBuyerOrTenantContractRequestService.setChangeLicenseProjectBuyerOrTenantContractRequest(res as ChangeLicenseProjectBuyerOrTenantContractRequestDto);
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
