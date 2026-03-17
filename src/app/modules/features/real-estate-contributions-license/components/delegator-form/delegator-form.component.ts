import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { LicenseProjectDelegatorCreateUpdateDto, LicenseProjectDelegatorsDto } from '../../dataModels/project-real-state-developer.dto';
import { FormBuilder, Validators } from '@angular/forms';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrService } from 'ngx-toastr';
import { LicenseProjectDelegatorService } from '../../services/license-project-delegator.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { AccountKeeperDto } from '../../models/license-project.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { CustomerShortDto } from '../../models/facility-short-dto';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-delegator-form',
  templateUrl: './delegator-form.component.html',
  styleUrls: ['./delegator-form.component.scss']
})
export class DelegatorFormComponent implements OnInit, OnDestroy{
  subscriptions: Subscription[] = [];
  accountKeeper={} as AccountKeeperDto;
  userData: customerResponse | null = null;
  facility:any;
  customerName:string|undefined="";
  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  LicenseProjectDelegatorCreateUpdateDto: LicenseProjectDelegatorCreateUpdateDto = new LicenseProjectDelegatorCreateUpdateDto();
  licenseProjectDelegatorForm = this._formBuilder.group({
    id:[''],
    licenseProjectId:[''],
    signModelFileId:this._formBuilder.control<string | null>(null, [Validators.required]),
    delegatorCustomerId:this._formBuilder.control<string | null>(null, [Validators.required]),
    delegatorAcknowledgment:this._formBuilder.control<boolean | null>(false, [Validators.required]),
    
  })
  showValidation:boolean=false;
  subCustomerList ?:CustomerShortDto[];
    /**
   *
   */
    constructor( private _formBuilder: FormBuilder,
      private _licenseProjectDelegatorService: LicenseProjectDelegatorService,
      private _popupService: PopupService,
      private _sharedLicenseProjectService: SharedLicenseProjectService,
      private toastr: ToastrNotificatioService,
      private _userDataService: UserDataService, 
      ) {
    }

    ngOnDestroy(): void {
      this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
    ngOnInit(): void {
      this.getdelegatorObj();
      this.getCustomerData();
      this.GetLicenseProjectByIdAsync();
      this.observePopupEvents();
      this.observeForm()
    }
    getdelegatorObj(): void {
      this.subscriptions.push(
        this._licenseProjectDelegatorService.getdelegatorObj().subscribe((res:any) => {
            if (res)
            {
              this.LicenseProjectDelegatorCreateUpdateDto= res as LicenseProjectDelegatorsDto;
              this.licenseProjectDelegatorForm.patchValue(this.LicenseProjectDelegatorCreateUpdateDto);
            }
          
        }),
      )
    }
    getCustomerData()
    {
      
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null)=>{
        this.userData = res
        if(this.userData){
          
         this.facility=this.userData?.facilities[0];
        }
      })
    }
    GetLicenseProjectByIdAsync()
    {

      const requests = 
      [
        this._licenseProjectDelegatorService.GetLicenseProjectByIdAsync(this._sharedLicenseProjectService.getLicenseProjectIdStorage() as string),
        // this._licenseProjectDelegatorService.GetSubCustomers(),
        this._licenseProjectDelegatorService.GetFacilitySubCustomers(this.userData?.facilities[0].id!),
      ];
      const subscriptions = forkJoin(requests).subscribe((results) => {
          if (results[0])
        {
          
          this.accountKeeper= results[0] as AccountKeeperDto;
          if(!this.accountKeeper)
          {
            
            this.toastr.showError("نأمل التأكد من ادخال بيانات  حساب البنك");
            return;
          }
        }  
        
         this.subCustomerList= results[1] as CustomerShortDto[];
        }
      )
      this.subscriptions.push(subscriptions);
      this.subscriptions.push(
      this._licenseProjectDelegatorService.GetLicenseProjectByIdAsync(this._sharedLicenseProjectService.getLicenseProjectIdStorage() as string).subscribe((res:any) => {
          
      
      
    })
    )
    }
    delegatorSignModelFileUploaded(filesData: any) {
      if (filesData.eventRes.data.length == 0) {
        this.licenseProjectDelegatorForm.controls.signModelFileId.setValue('');
        return;
      }
      if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
      filesData.eventRes.data.forEach((data: any) => {
        this.licenseProjectDelegatorForm.controls.signModelFileId.setValue(data.id as string);  
      });
    }
    save(): void {
      if(!this.licenseProjectDelegatorForm.valid)
      {
        this.toastr.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
        this.showValidation=true;
        return;
      } 
      if(this.controls.licenseProjectId.value)
      {
        this.LicenseProjectDelegatorCreateUpdateDto=this.licenseProjectDelegatorForm.value as LicenseProjectDelegatorCreateUpdateDto;
        if(!this.LicenseProjectDelegatorCreateUpdateDto.delegatorAcknowledgment)
        {
          this.toastr.showError("نأمل الموافقة على الاقرار حتى يتم تسجيل المفوض");
         return;
        }
        this.LicenseProjectDelegatorCreateUpdateDto.id = this.LicenseProjectDelegatorCreateUpdateDto.id ? this.LicenseProjectDelegatorCreateUpdateDto.id : "00000000-0000-0000-0000-000000000000";
        this.LicenseProjectDelegatorCreateUpdateDto.signModelFileId=this.licenseProjectDelegatorForm.controls.signModelFileId.value as string;
        this.subscriptions.push(
          this._licenseProjectDelegatorService.SaveProjectDelegator(this.LicenseProjectDelegatorCreateUpdateDto).subscribe(res => {
            if (res.isDone) {
              
              this._licenseProjectDelegatorService.setdelegatorList(res.data as LicenseProjectDelegatorsDto[]);
              this.closeDialog();
            }
          })
        )
      }
     
    }
    get controls() {
      return this.licenseProjectDelegatorForm.controls;
    }
    private closeDialog(): void {
      this._popupService.dismissDialog()
    }

    observePopupEvents(): void {
      
      this.observecancelAction()
      this.observeconfirmAction()
    }
  
    private observecancelAction() {
      
      this.subscriptions.push(
        this._popupService.cancelAction.subscribe((res: PopupData) => {
          this._popupService.dismissDialog();
        })
      )
    }
    observeForm(): void {
      this.subscriptions.push(
        this.licenseProjectDelegatorForm.valueChanges.subscribe(changes => {
          
          let customerId=this.licenseProjectDelegatorForm.value.delegatorCustomerId as string;
          this.customerName =this.subCustomerList?.filter(x=> x.id==customerId)[0].fullName;        })
      )
    }
    private observeconfirmAction() {
      
      this.subscriptions.push(
        this._popupService.confirmAction.subscribe((res: PopupData) => {
          this.save();
        })
      )
    }
}
