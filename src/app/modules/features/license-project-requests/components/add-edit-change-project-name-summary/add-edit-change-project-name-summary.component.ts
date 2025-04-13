import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChangeLicenseProjectNameRequestCreateUpdateDto, ChangeLicenseProjectNameRequestDto } from '../../models/change-license-project-name-request-dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ChangeLicenseProjectNameRequestService } from '../../services/change-license-project-name-request.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-add-edit-change-project-name-summary',
  templateUrl: './add-edit-change-project-name-summary.component.html',
  styleUrls: ['./add-edit-change-project-name-summary.component.scss']
})
export class AddEditChangeProjectNameSummaryComponent {
subscriptions: Subscription[] = [];
  licenseProjectRequestId?:string;
    baseUrl = `${environment.baseURL}/`;
    isEditMode: boolean = false;
    changeLicenseProjectNameRequest?: ChangeLicenseProjectNameRequestDto;
      changeLicenseProjectNameRequestCreateUpdate?: ChangeLicenseProjectNameRequestCreateUpdateDto;
  facilityId: string = '00000000-0000-0000-0000-000000000000'; 
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  applicationFormFileId?: string;
  salesOrRentalContractId?: string;

  changeLicenseProjectNameForm = this._formBuilder.group({
    projectName: ['', [Validators.required]],
  });
  get controls() {
    return this.changeLicenseProjectNameForm.controls;
  }
  constructor(
    private _changeLicenseProjectNameRequestService: ChangeLicenseProjectNameRequestService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _userDataService: UserDataService,
    private _formBuilder: FormBuilder,
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
      this._changeLicenseProjectNameRequestService.getChangeLicenseProjectNameRequest().subscribe((res: ChangeLicenseProjectNameRequestDto | null) => {
        if (res) {
          this.changeLicenseProjectNameRequest = res;
          this.isEditMode = true;
        this.applicationFormFileId= this.changeLicenseProjectNameRequest.applicationFormFileId;
        this.salesOrRentalContractId= this.changeLicenseProjectNameRequest.salesOrRentalContractId;
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
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.applicationFormFileId = data.id;
    });
  }
  onExistSalesOrRentalContractFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.salesOrRentalContractId = data.id;
    });
  }


  save(): void {
    
    if (!this.changeLicenseProjectNameForm.valid ||
      !this.applicationFormFileId || 
      !this.salesOrRentalContractId 
    ) {
      this.showValidation = true;
      return;
    }
    
      
    this.changeLicenseProjectNameRequestCreateUpdate={} as ChangeLicenseProjectNameRequestCreateUpdateDto;
    this.changeLicenseProjectNameRequestCreateUpdate.facilityId = this.facilityId;
    this.changeLicenseProjectNameRequestCreateUpdate.id = this.changeLicenseProjectNameRequest?.licenseProjectRequestId as string;
    this.changeLicenseProjectNameRequestCreateUpdate.licenseProjectId ='00000000-0000-0000-0000-000000000000';
    this.changeLicenseProjectNameRequestCreateUpdate.projectName =this.changeLicenseProjectNameForm.controls.projectName.value as string;
    this.changeLicenseProjectNameRequestCreateUpdate.applicationFormFileId = this.applicationFormFileId as string;
    this.changeLicenseProjectNameRequestCreateUpdate.salesOrRentalContractId = this.salesOrRentalContractId as string;
    this.subscriptions.push(
      this._changeLicenseProjectNameRequestService.save(this.changeLicenseProjectNameRequestCreateUpdate).subscribe((res) => {

        if (res) {
          
          this._changeLicenseProjectNameRequestService.setChangeLicenseProjectNameRequest(res as ChangeLicenseProjectNameRequestDto);
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
