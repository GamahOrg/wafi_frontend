import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin, finalize } from 'rxjs';
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
import { LicenseProjectDeedOwnerApproval } from '../../dataModels/license-project-deed-owner-approval.model';
import { RealStateDeveloperService } from '../../services/real-state-developer.service';
import { MatDialog } from '@angular/material/dialog';
import { RejectionReasonDialogComponent } from '../../components/rejection-reason-dialog/rejection-reason-dialog.component';

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
  licenseProjectDeedOwnerApproval?:LicenseProjectDeedOwnerApproval;
 aprovalRole=ApprovalRole;
 saveApprovalDto?:SaveApproval;
 updateApprovalDto?:UpdateApproval;
 subCustomerList ?:CustomerShortDto[];
 userData: customerResponse | null = null;
 showValidation:boolean=false;

 // National address properties (for DeedOwner)
 ownerAddresses: { id: number; address: string }[] = [];
 selectedAddressId: number | null = null;
 isLoadingAddresses: boolean = false;
 addressValidationAttempted: boolean = false;

 // Prevent multiple submissions
 isSaving: boolean = false;
 isUpdating: boolean = false;

 Form = this._formBuilder.group({
  id:[''],
  delegatorCustomerId:this._formBuilder.control<string | null>(null, [Validators.required]),
  isApproved:this._formBuilder.control<boolean | null>(false, [Validators.required]),
  nationalAddress:this._formBuilder.control<string | null>(null),
  rejectReason:this._formBuilder.control<string | null>(null),
})

  constructor(
    private _licenseRequestApprovalsService: LicenseRequestApprovalsService,
    private _userDataService: UserDataService,
    private _formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _realStateDeveloperService: RealStateDeveloperService,
    private dialog: MatDialog
  ) { }
  
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

     // Load addresses if this is a DeedOwner approval
     this.loadOwnerAddresses();
    }
  )
  this.subscriptions.push(subscriptions);

  }
  updateIsApproved(value: boolean) {
    this.Form.controls.isApproved.setValue(value);
  }

  /**
   * Load owner's national addresses (for DeedOwner approval)
   */
  loadOwnerAddresses(): void {
    // Only load addresses for DeedOwner approval role
    if (this.selectedApproval?.approvalRole !== ApprovalRole.DeedOwner) {
      return;
    }

    this.isLoadingAddresses = true;
    
if(this.licenseProjectDeedOwnerApproval && this.licenseProjectDeedOwnerApproval.isFacilityOwner==true){
//commercial
 this.subscriptions.push(
      this._realStateDeveloperService
        .GetCommercialAddress(this.licenseProjectDeedOwnerApproval.idNumber!)
        .pipe(finalize(() => this.isLoadingAddresses = false))
        .subscribe({
          next: (response) => {
            if (response?.isDone && response.data) {
              // Transform string array to address objects with id
              this.ownerAddresses = response.data.map((address, index) => ({
                id: index,
                address: address
              }));
            } else {
              this.ownerAddresses = [];
            }
          },
          error: (error) => {
            console.error('Error loading owner addresses:', error);
            this.ownerAddresses = [];
          }
        })
    );
}else{
    this.subscriptions.push(
      this._realStateDeveloperService
        .GetCustomerAddress()
        .pipe(finalize(() => this.isLoadingAddresses = false))
        .subscribe({
          next: (response) => {
            if (response?.isDone && response.data) {
              // Transform string array to address objects with id
              this.ownerAddresses = response.data.map((address, index) => ({
                id: index,
                address: address
              }));
            } else {
              this.ownerAddresses = [];
            }
          },
          error: (error) => {
            console.error('Error loading owner addresses:', error);
            this.ownerAddresses = [];
          }
        })
    );
  }
  }

  /**
   * Handle address selection
   */
  onAddressSelect(addressId: number): void {
    this.selectedAddressId = addressId;
    const selectedAddress = this.ownerAddresses.find(addr => addr.id === addressId);

    if (selectedAddress) {
      this.Form.controls.nationalAddress.setValue(selectedAddress.address);
      // Clear validation error once address is selected
      this.addressValidationAttempted = false;
    }
  }

  /**
   * Open rejection reason dialog
   */
  openRejectionDialog(): void {
    const dialogRef = this.dialog.open(RejectionReasonDialogComponent, {
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User confirmed rejection with a reason
        this.Form.controls.rejectReason.setValue(result);
        this.updateIsApproved(false);
        this.saveApproval();
      }
      // If result is null, user cancelled - do nothing
    });
  }

  /**
   * Check if national address is required and valid
   */
  isNationalAddressValid(): boolean {
    if (this.selectedApproval?.approvalRole === ApprovalRole.DeedOwner) {
      return this.selectedAddressId !== null;
    }
    return true; // Not required for other roles
  }

   saveApproval(): void {
    
    // Prevent multiple submissions
    if (this.isSaving) {
      return;
    }

    // Validate national address for DeedOwner ONLY when approving (not when rejecting)
    const isApproving = this.Form.controls.isApproved.value === true;

    if (this.selectedApproval?.approvalRole === ApprovalRole.DeedOwner && isApproving) {
      this.addressValidationAttempted = true;

      // Simple validation: only check if nationalAddress form control has a value
      const nationalAddressValue = this.Form.controls.nationalAddress.value;

      if (!nationalAddressValue || nationalAddressValue.trim() === '') {
        this.toastr.error('يرجى اختيار العنوان الوطني للمالك قبل الموافقة', 'حقل مطلوب');

        // Scroll to address section
        const addressSection = document.querySelector('.address-section');
        if (addressSection) {
          addressSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        return;
      }
    }

    this.saveApprovalDto=this.Form.value as SaveApproval;
    // if(!this.saveApprovalDto.isApproved)
    // {


    //   this.toastr.error("نأمل الموافقة على المشروع");
    //  return;
    // }
    this.saveApprovalDto.id=this.selectedApproval?.id as string;
    this.saveApprovalDto.approvalRole=this.selectedApproval?.approvalRole as ApprovalRole;

    this.isSaving = true;
    this.subscriptions.push(
      this._licenseRequestApprovalsService.SaveApproval(this.saveApprovalDto as SaveApproval)
        .pipe(finalize(() => this.isSaving = false))
        .subscribe((res: any) => {
          this.updateSubject(res);
          if(this.selectedApproval) {
            this.selectedApproval.isApproved = res.isApproved as boolean;
          }
          if(res.approvedOn) {
            this.selectedApproval!.approvedOn = res.approvedOn as string;
          }

          // Save updated approval to local storage
          if(this.selectedApproval) {
            this._licenseRequestApprovalsService.setLicenseSelectedApprovalInLocalStorage(this.selectedApproval);
          }

          if(res.isApproved)
            this.toastr.success("تم الموافقة على الاتفاقية");
          else
            this.toastr.success("تم الرفض الاتفاقية");
        })
    );
  } 

   updateApproval(): void {
    // Prevent multiple submissions
    if (this.isUpdating) {
      return;
    }

    this.updateApprovalDto=this.Form.value as UpdateApproval;
    this.updateApprovalDto.id=this.selectedApproval?.id as string;
    this.updateApprovalDto.approvalRole=this.selectedApproval?.approvalRole as ApprovalRole;

    this.isUpdating = true;
    this.subscriptions.push(
      this._licenseRequestApprovalsService.UpdateApproval(this.updateApprovalDto as UpdateApproval)
        .pipe(finalize(() => this.isUpdating = false))
        .subscribe((res: any) => {
          this.updateSubject(res);

          // Save updated approval to local storage
          if(this.selectedApproval) {
            this._licenseRequestApprovalsService.setLicenseSelectedApprovalInLocalStorage(this.selectedApproval);
          }

          this.toastr.info("تم التعديل بنجاح");
        })
    );
  } 
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  updateSubject(data: LicenseProjectMainRealStateDeveloperApproval | LicenseProjectSubDeveloperApproval | LicenseProjectCharteredAccountantApproval | LicenseProjectEngineeringConsultantApproval | LicenseProjectRealStateMarketerApproval | LicenseProjectDeedOwnerApproval)
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
                  case  ApprovalRole.DeedOwner:
                this.licenseProjectDeedOwnerApproval=data as LicenseProjectDeedOwnerApproval;
                this._licenseRequestApprovalsService.setLicenseProjectDeedOwnerApprovalBS(this.licenseProjectDeedOwnerApproval);
                break;
    }
  }

}
