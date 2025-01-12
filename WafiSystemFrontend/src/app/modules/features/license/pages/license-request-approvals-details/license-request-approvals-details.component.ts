import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { LicenseRequestApprovalsService } from '../../services/license-request-approvals/license-request-approvals.service';
import { LicenseProjectApproval, SaveApproval, UpdateApproval } from '../../dataModels/license-project-approval.model';
import { LicenseProjectMainRealStateDeveloperApproval } from '../../dataModels/license-project-main-real-state-developer-approval.model';
import { LicenseProjectEngineeringConsultantApproval } from '../../dataModels/license-project-engineering-consultant-approval.model';
import { LicenseProjectCharteredAccountantApproval } from '../../dataModels/license-project-chartered-accountant-approval.model';
import { LicenseProjectRealStateMarketerApproval } from '../../dataModels/license-project-real-state-marketer-approval.model';
import { LicenseProjectSubDeveloperApproval } from '../../dataModels/license-project-sub-developer-approval.model';
import { ApprovalRole } from '../../dataModels/approval-role.model';
import { CustomerShortDto } from '../../models/facility-short-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';

@Component({
  selector: 'app-license-request-approvals-details',
  templateUrl: './license-request-approvals-details.component.html',
  styleUrls: ['./license-request-approvals-details.component.scss']
})
export class LicenseRequestApprovalsDetailsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  selectedApproval?:LicenseProjectApproval;
  licenseProjectMainRealStateDeveloperApproval?:LicenseProjectMainRealStateDeveloperApproval;
  licenseProjectEngineeringConsultantApproval?:LicenseProjectEngineeringConsultantApproval;
  licenseProjectSubDeveloperApproval?:LicenseProjectSubDeveloperApproval;
  licenseProjectCharteredAccountantApproval?:LicenseProjectCharteredAccountantApproval;
  licenseProjectRealStateMarketerApproval?:LicenseProjectRealStateMarketerApproval;
 aprovalRole=ApprovalRole;
 saveApprovalDto?:SaveApproval;
 updateApprovalDto?:UpdateApproval;
 subCustomerList ?:CustomerShortDto[];
 userData: customerResponse | null = null;
 showValidation:boolean=false;
 Form = this._formBuilder.group({
  id:[''],
  delegatorCustomerId:this._formBuilder.control<string | null>(null, [Validators.required]),
  isApproved:this._formBuilder.control<boolean | null>(false, [Validators.required]),
})
  constructor(private _licenseRequestApprovalsService: LicenseRequestApprovalsService,
    private _userDataService: UserDataService,
    private _formBuilder: FormBuilder,private toastr: ToastrService) { }
  
  ngOnInit(): void 
  { 
    this.getCustomerData()
    this. getLicenseSelectedApproval();
  }
  getCustomerData() {

    this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
      this.userData = res;    
    })
  }
  getLicenseSelectedApproval()
  {
     this.selectedApproval=this._licenseRequestApprovalsService.getLicenseSelectedApprovalInLocalStorage();
      this.getApprovalAndLookUps();
  }
  get controls() {
    return this.Form.controls;
  }
  getApprovalAndLookUps()
  {
  const requests = 
  [
    this._licenseRequestApprovalsService.GetApproval(this.selectedApproval?.id , this.selectedApproval?.approvalRole),
    // this._licenseRequestApprovalsService.GetSubCustomers(),
    this._licenseRequestApprovalsService.GetFacilitySubCustomers(this.userData?.facilities[0].id!),
  ];
  const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results[0])
      {
        
        let data=results[0] as LicenseProjectMainRealStateDeveloperApproval | LicenseProjectSubDeveloperApproval | LicenseProjectCharteredAccountantApproval | LicenseProjectEngineeringConsultantApproval | LicenseProjectRealStateMarketerApproval;
        this.Form.controls.delegatorCustomerId.setValue(data.delegatorCustomerId as string);
       this.updateSubject(data);
      }  
    
     this.subCustomerList= results[1] as CustomerShortDto[];
    }
  )
  this.subscriptions.push(subscriptions); 
    
  }
  updateIsApproved(value: boolean) {
    this.Form.controls.isApproved.setValue(value);
  }
 
   saveApproval(): void {
    
    this.saveApprovalDto=this.Form.value as SaveApproval;
    if(!this.saveApprovalDto.isApproved)
    {
      
     
      this.toastr.error("نأمل الموافقه على المشروع");
     return;
    }
    this.saveApprovalDto.id=this.selectedApproval?.id as string;
    this.saveApprovalDto.approvalRole=this.selectedApproval?.approvalRole as ApprovalRole;
    this._licenseRequestApprovalsService.SaveApproval(this.saveApprovalDto as SaveApproval).subscribe((res: any) => {
     this.updateSubject(res);
     if(this.selectedApproval)
     this.selectedApproval.isApproved = res.isApproved as boolean;
      this.toastr.success("تم الموافقه على المشروع"); 
    })
  } 

   updateApproval(): void {
    this.updateApprovalDto=this.Form.value as UpdateApproval;
    this.updateApprovalDto.id=this.selectedApproval?.id as string;
    this.updateApprovalDto.approvalRole=this.selectedApproval?.approvalRole as ApprovalRole;
    this._licenseRequestApprovalsService.UpdateApproval(this.updateApprovalDto as UpdateApproval).subscribe((res: any) => {  
      this.updateSubject(res);
       this.toastr.info("تم التعديل بنجاح");
    })
  } 
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  updateSubject(data: LicenseProjectMainRealStateDeveloperApproval | LicenseProjectSubDeveloperApproval | LicenseProjectCharteredAccountantApproval | LicenseProjectEngineeringConsultantApproval | LicenseProjectRealStateMarketerApproval)
  {
    switch (this.selectedApproval?.approvalRole){
      case ApprovalRole.MainDeveloper:
       this.licenseProjectMainRealStateDeveloperApproval=data as LicenseProjectMainRealStateDeveloperApproval;
       this._licenseRequestApprovalsService.setLicenseProjectMainRealStateDeveloperApprovalBS(this.licenseProjectMainRealStateDeveloperApproval);
        break;
        case  ApprovalRole.SubDeveloper:
          this.licenseProjectSubDeveloperApproval=data as LicenseProjectSubDeveloperApproval;
          this._licenseRequestApprovalsService.setLicenseProjectSubDeveloperApprovalBS(this.licenseProjectSubDeveloperApproval);

          break;
          case  ApprovalRole.EngineeringConsultant:
            this.licenseProjectEngineeringConsultantApproval=data as LicenseProjectEngineeringConsultantApproval;
            this._licenseRequestApprovalsService.setLicenseProjectEngineeringConsultantApprovalBS(this.licenseProjectEngineeringConsultantApproval);

            break;
            case  ApprovalRole.CharteredAccountant:
              this.licenseProjectCharteredAccountantApproval=data as LicenseProjectCharteredAccountantApproval;
              this._licenseRequestApprovalsService.setLicenseProjectCharteredAccountantApprovalBS(this.licenseProjectCharteredAccountantApproval);

              break;
              case  ApprovalRole.Marketer:
                this.licenseProjectRealStateMarketerApproval=data as LicenseProjectRealStateMarketerApproval;
                this._licenseRequestApprovalsService.setLicenseProjectRealStateMarketerApprovalBS(this.licenseProjectRealStateMarketerApproval);
                break;
    }
  }

}
