import { Component } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { ChangeLicenseProjectDelegatorListCreateUpdateDto, ChangeLicenseProjectDelegatorRequestCreatUpdateDto, ChangeLicenseProjectDelegatorRequestDto } from '../../models/change-license-project-delegator-request-dto';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { CustomerShortDto } from '../../models/request-header-details';
import { ChangeLicenseProjectDelegatorRequestService } from '../../services/change-license-project-delegator-request.service';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { LicenseProjectDelegatorsDto } from '../../../license/dataModels/project-real-state-developer.dto';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectService } from '../../services/license-project.service';

@Component({
  selector: 'app-create-removing-delegator-request',
  templateUrl: './create-removing-delegator-request.component.html',
  styleUrls: ['./create-removing-delegator-request.component.scss']
})
export class CreateRemovingDelegatorRequestComponent {
subscriptions: Subscription[] = [];
  licenseProjects: LicenseProjectDDL[] = [];
  price?: number;
  selectedDelegatorName: string = "اسم المفوض";
  companyName: string = "اسم الشركة";
  accountNumber: string = "رقم حساب الضمان";
  bankName: string = "اسم البنك";
  selectednidnumber: string | null = null;
  acknowledgementText: string = ""; 
  showAcknowledgementError: boolean = false;
  licenseProjectRequestId?: string;
  LicenseProjectRequestTypeEnum=LicenseProjectRequestTypeEnum;
  changeLicenseProjectDelegatorRequest?: ChangeLicenseProjectDelegatorRequestDto;
  baseUrl = `${environment.baseURL}/`;
  changeLicenseProjectDelegatorRequestCreatUpdate?: ChangeLicenseProjectDelegatorRequestCreatUpdateDto;
  changeLicenseProjectDelegatorForm = this._formBuilder.group({
    licenseProjectId:['', [Validators.required]],
    isAcknowledged:[false,[Validators.requiredTrue]],
    changeLicenseProjectDelegatorIds: this._formBuilder.control<string | null>(null, [Validators.required]),

  });
  applicationFormFileId?:string;
  showValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  customers:LicenseProjectDelegatorsDto[]=[];
  
  get controls() {
    return this.changeLicenseProjectDelegatorForm.controls;
  }

  constructor(
    private _changeLicenseProjectDelegatorRequestService: ChangeLicenseProjectDelegatorRequestService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _licenseProjectService: LicenseProjectService,
    

  ) { 
    
   }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.observePrice();
    this.updateAcknowledgementText()
  }
  private observePrice(): void {
    this.subscriptions.push(
      this._licenseRequestService.getLicenseProjectRequestPrice(this.changeLicenseProjectDelegatorForm.controls.licenseProjectId.value as string , LicenseProjectRequestTypeEnum.RemovingDelegator).subscribe((res: any) => {
        this.price = res;
      })
    )
  }
 private getLicenseProjectByType() {
  this.subscriptions.push(
      this._licenseRequestService
      .getLicenseProjectByType(this.facilityId, LicenseProjectRequestTypeEnum.RemovingDelegator).subscribe((results) => {
      this.licenseProjects = results as  LicenseProjectDDL[] ;
    }));

  }
 
  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.facilityId = res?.facilities[0]?.id || '';
          this.getLicenseProjectByType();
          this.getProjectDelegatorByLicenseProjectId();
        })
    );
  }
  
  getProjectDelegatorByLicenseProjectId(): void {
    this.subscriptions.push(
      this._changeLicenseProjectDelegatorRequestService.GetProjectDelegatorByLicenseProjectId(this.changeLicenseProjectDelegatorForm.controls.licenseProjectId.value as string)
        .subscribe((res: LicenseProjectDelegatorsDto[] | null) => {
          this.customers =res as LicenseProjectDelegatorsDto[];

         
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
    
    const selectedId = this.changeLicenseProjectDelegatorForm.controls.changeLicenseProjectDelegatorIds.value 
    const selectedCustomer = this.customers.find(c => c.delegatorCustomerId == selectedId);
    if (selectedCustomer) {
      this.selectedDelegatorName = selectedCustomer.delegatorCustomer?.fullName ?? '';  
      this.updateAcknowledgementText()
      this.selectednidnumber = selectedCustomer ? selectedCustomer.delegatorCustomer?.nidnumber ?? null : null;

    }
   

  }
  loadProjectDetails() {
    let licenseProjectId=this .changeLicenseProjectDelegatorForm.controls.licenseProjectId.value
   
   
    this._licenseProjectService.getLicenseProjectDetails(licenseProjectId).subscribe(
      (res) => {
        this.companyName = res.facilityName;
        this.accountNumber = res.accountNumber;
        this.bankName=res.bankName;
       this.updateAcknowledgementText()
      },
      (error) => {
        console.error("❌ خطأ في جلب بيانات المشروع:", error);
      }
    );

  }
  updateAcknowledgementText() {
     
        this.acknowledgementText=`  نقر نحن <b>${this.companyName}</b> بإزالة السيد <b>${this.selectedDelegatorName}</b>  من التوقيع على وثيقة الصرف الخاصة بحساب الضمان <b>${this.accountNumber}</b>
                المفتوح في بنك <b>${this.bankName}</b> الخاص بهذا المشروع.`
   
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
    this.changeLicenseProjectDelegatorRequestCreatUpdate.licenseProjectId =this.changeLicenseProjectDelegatorForm.controls.licenseProjectId.value as string;
    this.changeLicenseProjectDelegatorRequestCreatUpdate.applicationFormFileId = this.applicationFormFileId as string;
    this.changeLicenseProjectDelegatorRequestCreatUpdate.isRemovableRequest=true;
    this.changeLicenseProjectDelegatorRequestCreatUpdate.acknowledgement = this.acknowledgementText;  
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
          this.projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(res?.licenseProjectRequestId!)
         let requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.removingdelegatorsummary}`;
          this._router.navigate([requestDetailsRoute]);
        }

      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
