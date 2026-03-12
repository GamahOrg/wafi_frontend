import { Component } from '@angular/core';
import { ChangeLicenseProjectDelegatorRequestService } from '../../services/change-license-project-delegator-request.service';
import { Subscription } from 'rxjs';
import { ChangeLicenseProjectDelegatorListCreateUpdateDto, ChangeLicenseProjectDelegatorRequestCreatUpdateDto, ChangeLicenseProjectDelegatorRequestDto } from '../../models/change-license-project-delegator-request-dto';
import { environment } from 'src/environments/environment';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerShortDto } from '../../models/request-header-details';

@Component({
  selector: 'app-add-edit-adding-delegator-summary',
  templateUrl: './add-edit-adding-delegator-summary.component.html',
  styleUrls: ['./add-edit-adding-delegator-summary.component.scss']
})
export class AddEditAddingDelegatorSummaryComponent {
subscriptions: Subscription[] = [];
  licenseProjectRequestId?:string;
  changeLicenseProjectDelegatorRequest?:ChangeLicenseProjectDelegatorRequestDto;
  baseUrl = `${environment.baseURL}/`;
  selectednidnumber: string | null = null;
  isEditMode: boolean = false;
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  customers:CustomerShortDto[]=[];
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
   
  }
  getSelectedRequestIdFromLocalStorage(): void {
    
    this.licenseProjectRequestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage() as string;

  }
 private getFacilitySubCustomers() {
  this.subscriptions.push(
      this._changeLicenseProjectDelegatorRequestService.GetFacilitySubCustomers(this.facilityId).subscribe((results) => {
      this.customers = results as CustomerShortDto[];
      this.getLicenseProjectRequestChangeDelegator();
    }));
  }
 
  private getLicenseProjectRequestChangeDelegator(): void {

    this.subscriptions.push(
      this._changeLicenseProjectDelegatorRequestService.getLicenseProjectRequestChangeDelegator().subscribe((res: ChangeLicenseProjectDelegatorRequestDto | null) => {
        if (res) {
          this.changeLicenseProjectDelegatorRequest = res as ChangeLicenseProjectDelegatorRequestDto;
          this.isEditMode = true;
        this.applicationFormFileId= this.changeLicenseProjectDelegatorRequest.applicationFormFileId;
        if(this.changeLicenseProjectDelegatorRequest?.changeLicenseProjectDelegatorList.length > 0)
          {
            let selectedId = this.changeLicenseProjectDelegatorRequest?.changeLicenseProjectDelegatorList[0]?.delegatorCustomer.id;

             this.changeLicenseProjectDelegatorForm.controls.changeLicenseProjectDelegatorIds.setValue(selectedId);
             this.onDelegatorChange() ;
          }

       
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
          this.getFacilitySubCustomers();
        })
    );
  }
  onDelegatorChange() {
    
    const selectedId = this.changeLicenseProjectDelegatorForm.controls.changeLicenseProjectDelegatorIds.value;
    const selectedCustomer = this.customers.find(c => c.id === selectedId);
    
    this.selectednidnumber = selectedCustomer ? selectedCustomer.nidnumber : null;
  }
  onExistApplicationFormFilesUploaded(filesData: any) {
    if(filesData.eventRes.data.length === 0){
      this.applicationFormFileId = ''; 
      return 

    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.applicationFormFileId = data.id;
    });
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
      this.changeLicenseProjectDelegatorRequestCreatUpdate.isRemovableRequest=false;
      let ids:string[]=[];
      ids.push(this.changeLicenseProjectDelegatorForm.controls.changeLicenseProjectDelegatorIds.value as string)  
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
