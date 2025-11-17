import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeLicenseProjectDelegatorListCreateUpdateDto, ChangeLicenseProjectDelegatorRequestCreatUpdateDto, ChangeLicenseProjectDelegatorRequestDto } from '../../models/change-license-project-delegator-request-dto';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { LicenseProjectDelegatorsDto } from '../../../license/dataModels/project-real-state-developer.dto';
import { ChangeLicenseProjectDelegatorRequestService } from '../../services/change-license-project-delegator-request.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-add-edit-removing-delegator-summary',
  templateUrl: './add-edit-removing-delegator-summary.component.html',
  styleUrls: ['./add-edit-removing-delegator-summary.component.scss']
})
export class AddEditRemovingDelegatorSummaryComponent {
subscriptions: Subscription[] = [];
  licenseProjectRequestId?:string;
  selectednidnumber: string | null = null;
  changeLicenseProjectDelegatorRequest?:ChangeLicenseProjectDelegatorRequestDto;
  baseUrl = `${environment.baseURL}/`;
  isEditMode: boolean = false;
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  changeLicenseProjectDelegatorRequestCreatUpdate?: ChangeLicenseProjectDelegatorRequestCreatUpdateDto;
   changeLicenseProjectDelegatorForm = this._formBuilder.group({
     changeLicenseProjectDelegatorIds: this._formBuilder.control<string | null>(null, [Validators.required]),
   });
   get controls() {
    return this.changeLicenseProjectDelegatorForm.controls;
  }
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  applicationFormFileId?: string;
  customers:LicenseProjectDelegatorsDto[]=[];
  constructor(
    private _changeLicenseProjectDelegatorRequestService: ChangeLicenseProjectDelegatorRequestService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _userDataService: UserDataService,
     private _formBuilder: FormBuilder,
    

  ) {this.getSelectedRequestIdFromLocalStorage() }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.observePopupEvents();
    this.getLicenseProjectRequestChangeDelegator();
  }
  getSelectedRequestIdFromLocalStorage(): void {
    
    this.licenseProjectRequestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage() as string;

  }

  getProjectDelegatorByLicenseProjectId(): void {
    this.subscriptions.push(
      this._changeLicenseProjectDelegatorRequestService.GetProjectDelegatorByLicenseProjectId(this.changeLicenseProjectDelegatorRequest?.licenseProjectRequest?.licenseProjectId as string)
        .subscribe((res: LicenseProjectDelegatorsDto[] | null) => {
          this.customers =res as LicenseProjectDelegatorsDto[];
          this.onDelegatorChange() ;
        })
    );
  }
  private getLicenseProjectRequestChangeDelegator(): void {

    this.subscriptions.push(
      this._changeLicenseProjectDelegatorRequestService.getLicenseProjectRequestChangeDelegator().subscribe((res: ChangeLicenseProjectDelegatorRequestDto | null) => {
        if (res) {
          this.changeLicenseProjectDelegatorRequest = res as ChangeLicenseProjectDelegatorRequestDto;
        this.applicationFormFileId= this.changeLicenseProjectDelegatorRequest.applicationFormFileId;
        this.isEditMode = true; 
        if(this.changeLicenseProjectDelegatorRequest?.changeLicenseProjectDelegatorList.length > 0)
          {
           
             let selectedId = this.changeLicenseProjectDelegatorRequest?.changeLicenseProjectDelegatorList[0]?.delegatorCustomer.id;

             this.changeLicenseProjectDelegatorForm.controls.changeLicenseProjectDelegatorIds.setValue(selectedId);
            
          }
       this.getProjectDelegatorByLicenseProjectId()
     
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
        })
    );
  }
  onExistApplicationFormFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.applicationFormFileId = data.id;
    });
  }
  onDelegatorChange() {
    
    const selectedId = this.changeLicenseProjectDelegatorForm.controls.changeLicenseProjectDelegatorIds.value;
    const selectedCustomer = this.customers.find(c => c.delegatorCustomerId === selectedId);
    
    this.selectednidnumber = selectedCustomer ? selectedCustomer.delegatorCustomer?.nidnumber ?? null : null;
  }
  save(): void {
      
        if (!this.changeLicenseProjectDelegatorForm.valid ||
          !this.applicationFormFileId 
        ) {
          this.showValidation = true;
          return;
        }
        
  this.changeLicenseProjectDelegatorRequestCreatUpdate={} as ChangeLicenseProjectDelegatorRequestCreatUpdateDto;
      this.changeLicenseProjectDelegatorRequestCreatUpdate.facilityId = this.facilityId;
      this.changeLicenseProjectDelegatorRequestCreatUpdate.id = this.changeLicenseProjectDelegatorRequest?.licenseProjectRequestId as string;
      this.changeLicenseProjectDelegatorRequestCreatUpdate.licenseProjectId ='00000000-0000-0000-0000-000000000000';
      this.changeLicenseProjectDelegatorRequestCreatUpdate.applicationFormFileId = this.applicationFormFileId as string;
      this.changeLicenseProjectDelegatorRequestCreatUpdate.isRemovableRequest=true;
      let ids:string[]=[];
      ids.push(this.changeLicenseProjectDelegatorForm.controls.changeLicenseProjectDelegatorIds.value as string) 
  if(ids && ids.length > 0)
    {
      let changeLicenseProjectDelegatorList:ChangeLicenseProjectDelegatorListCreateUpdateDto[]=[];
      ids.forEach(item => {
       let changeLicenseProjectDelegatorObj={} as ChangeLicenseProjectDelegatorListCreateUpdateDto;
       changeLicenseProjectDelegatorObj.delegatorCustomerId=item;
       changeLicenseProjectDelegatorObj.id='00000000-0000-0000-0000-000000000000';
       changeLicenseProjectDelegatorObj.changeLicenseProjectDelegatorRequestId='00000000-0000-0000-0000-000000000000';
       changeLicenseProjectDelegatorList.push(changeLicenseProjectDelegatorObj);
      });
      this.changeLicenseProjectDelegatorRequestCreatUpdate.changeLicenseProjectDelegatorList=changeLicenseProjectDelegatorList;
    }
      this.subscriptions.push(
        this._changeLicenseProjectDelegatorRequestService.save(this.changeLicenseProjectDelegatorRequestCreatUpdate).subscribe((res) => {
  
          if (res) {
            
            this._changeLicenseProjectDelegatorRequestService.setLicenseProjectRequestChangeDelegator(res as ChangeLicenseProjectDelegatorRequestDto);
            this._toastrNotificationService.showSuccess('تم انشاء الطلب بنجاح');
            this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(res?.licenseProjectRequestId!)
            this.closeDialog();
          }
  
        })
      )
    }
  
  // popup   this.closeDialog();
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
