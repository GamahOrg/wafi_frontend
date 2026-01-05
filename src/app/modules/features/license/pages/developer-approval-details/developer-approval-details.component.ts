import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, finalize } from 'rxjs';
import { LicenseProjectCharteredAccountantApproval } from '../../dataModels/license-project-chartered-accountant-approval.model';
import { LicenseProjectEngineeringConsultantApproval } from '../../dataModels/license-project-engineering-consultant-approval.model';
import { LicenseProjectMainRealStateDeveloperApproval } from '../../dataModels/license-project-main-real-state-developer-approval.model';
import { LicenseProjectRealStateMarketerApproval } from '../../dataModels/license-project-real-state-marketer-approval.model';
import { LicenseProjectSubDeveloperApproval } from '../../dataModels/license-project-sub-developer-approval.model';
import { LicenseRequestApprovalsService } from '../../services/license-request-approvals/license-request-approvals.service';
import {
  LicenseProjectApproval,
  SaveApproval,
} from '../../dataModels/license-project-approval.model';
import { environment } from 'src/environments/environment';
import { Configuration } from '../../../../../core/configurations/shared.config';
import { FormBuilder, Validators } from '@angular/forms';
import { ApprovalRole } from '../../dataModels/approval-role.model';
import { LicenseProjectDeedOwnerApproval } from '../../dataModels/license-project-deed-owner-approval.model';
import { RealStateDeveloperService } from '../../services/real-state-developer.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { RejectionReasonDialogComponent } from '../../components/rejection-reason-dialog/rejection-reason-dialog.component';
import {
  PopupData,
  confirmationPopupData,
} from '../../../../../shared/models/popup.model';
import { PopupService } from '../../../../../shared/services/popup/popup.service';
import { Pagemode } from '../../enums/pagemode.enum';
import { RejectionConfirmationPopupComponent } from 'src/app/shared/components/rejection-confirmation-popup/rejection-confirmation-popup.component';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';
import { ProjectLandDeedService } from '../../services/project-land-deed.service';

@Component({
  selector: 'app-developer-approval-details',
  templateUrl: './developer-approval-details.component.html',
  styleUrls: ['./developer-approval-details.component.scss'],
})
export class DeveloperApprovalDetailsComponent implements OnInit, OnDestroy {
  approvalId: string | null = null;
  approvalRole: number | null = null;
  approvalDetails: any = null;
  isLoading: boolean = false;
  private subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  addressValidationAttempted: boolean = false;
  isLoadingAddresses: boolean = false;
  // National address properties (for DeedOwner)
  ownerAddresses: { id: number; address: string }[] = [];
  selectedAddressId: number | null = null;
  aprovalRole = ApprovalRole;

  selectedApproval?: LicenseProjectApproval;
  // Prevent multiple submissions
  isSaving: boolean = false;
  isUpdating: boolean = false;
  Form = this._formBuilder.group({
    id: [''],
    delegatorCustomerId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    isApproved: this._formBuilder.control<boolean | null>(false, [
      Validators.required,
    ]),
    nationalAddress: this._formBuilder.control<string | null>(null),
    rejectReason: this._formBuilder.control<string | null>(null),
  });

  licenseProjectMainRealStateDeveloperApproval?: LicenseProjectMainRealStateDeveloperApproval;
  licenseProjectEngineeringConsultantApproval?: LicenseProjectEngineeringConsultantApproval;
  licenseProjectSubDeveloperApproval?: LicenseProjectSubDeveloperApproval;
  licenseProjectCharteredAccountantApproval?: LicenseProjectCharteredAccountantApproval;
  licenseProjectRealStateMarketerApproval?: LicenseProjectRealStateMarketerApproval;
  licenseProjectDeedOwnerApproval?: LicenseProjectDeedOwnerApproval;
  saveApprovalDto?: SaveApproval;
  deedConstructionApprovalList: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _licenseRequestApprovalsService: LicenseRequestApprovalsService,
    private _formBuilder: FormBuilder,
    private _realStateDeveloperService: RealStateDeveloperService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private _requestNotesService: RequestNotesService,
    private _popupService: PopupService,
    private _projectLandDeedService: ProjectLandDeedService
  ) {}

  ngOnInit(): void {
    
    this.observeconfirmAction();
    this.approvalId = this.route.snapshot.paramMap.get('id');
    this.approvalRole = Number(
      this.route.snapshot.queryParamMap.get('approvalRole')
    );
    if (this.approvalId) {
      this.loadApprovalDetails();
    }
  }

  loadApprovalDetails(): void {
    this.isLoading = true;
    // TODO: Implement API call to load approval details
    this.isLoading = false;

    this.selectedApproval =
      this._licenseRequestApprovalsService.getLicenseSelectedApprovalInLocalStorage();

    const sub = this._licenseRequestApprovalsService
      .GetApproval(this.approvalId ?? '', this.approvalRole ?? 0)
      .subscribe((result) => {
        if (result) {
          let data = result as
            | LicenseProjectMainRealStateDeveloperApproval
            | LicenseProjectSubDeveloperApproval
            | LicenseProjectCharteredAccountantApproval
            | LicenseProjectEngineeringConsultantApproval
            | LicenseProjectRealStateMarketerApproval;

          this.approvalDetails = data;
          this.Form.controls.delegatorCustomerId.setValue(
            data.delegatorCustomerId as string
          );
          this.updateSubject(data);

          //console.log("this.approvalDetails=", this.approvalDetails);

          this.loadOwnerAddresses();

          // Load deed construction approval list for EngineeringConsultant and CharteredAccountant
          if (
            this.approvalRole === ApprovalRole.EngineeringConsultant ||
            this.approvalRole === ApprovalRole.CharteredAccountant
          ) {
            this.loadDeedConstructionApprovalList();
          }
        }
      });
    // Load addresses if this is a DeedOwner approval
    this.subscriptions.push(sub);
  }

  /**
   * Load owner's national addresses (for DeedOwner approval)
   */
  loadOwnerAddresses(): void {
    
    // Only load addresses for DeedOwner approval role
    if (this.approvalRole !== ApprovalRole.DeedOwner || this.approvalDetails.approvedOn!=null) {
      return;
    }

    // this.isLoadingAddresses = true;

    if (
      this.licenseProjectDeedOwnerApproval &&
      this.licenseProjectDeedOwnerApproval.isFacilityOwner == true
    ) {
      //commercial
      this.subscriptions.push(
        this._realStateDeveloperService
          .GetCommercialAddress(this.licenseProjectDeedOwnerApproval.idNumber!)
          .pipe(finalize(() => (this.isLoadingAddresses = false)))
          .subscribe({
            next: (response) => {
              if (response?.isDone && response.data) {
                // Transform string array to address objects with id
                this.ownerAddresses = response.data.map((address, index) => ({
                  id: index,
                  address: address,
                }));
              } else {
                this.ownerAddresses = [];
              }
            },
            error: (error) => {
              console.error('Error loading owner addresses:', error);
              this.ownerAddresses = [];
            },
          })
      );
    } else {
      this.subscriptions.push(
        this._realStateDeveloperService
          .GetCustomerAddress()
          .pipe(finalize(() => (this.isLoadingAddresses = false)))
          .subscribe({
            next: (response) => {
              if (response?.isDone && response.data) {
                // Transform string array to address objects with id
                this.ownerAddresses = response.data.map((address, index) => ({
                  id: index,
                  address: address,
                }));
              } else {
                this.ownerAddresses = [];
              }
            },
            error: (error) => {
              console.error('Error loading owner addresses:', error);
              this.ownerAddresses = [];
            },
          })
      );
    }

    console.log('ownerAddresses=', this.ownerAddresses);
  }
  updateSubject(
    data:
      | LicenseProjectMainRealStateDeveloperApproval
      | LicenseProjectSubDeveloperApproval
      | LicenseProjectCharteredAccountantApproval
      | LicenseProjectEngineeringConsultantApproval
      | LicenseProjectRealStateMarketerApproval
      | LicenseProjectDeedOwnerApproval
  ) {
    switch (this.approvalRole) {
      case ApprovalRole.MainDeveloper:
        this.licenseProjectMainRealStateDeveloperApproval =
          data as LicenseProjectMainRealStateDeveloperApproval;
        this._licenseRequestApprovalsService.setLicenseProjectMainRealStateDeveloperApprovalBS(
          this.licenseProjectMainRealStateDeveloperApproval
        );
        break;
      case ApprovalRole.SubDeveloper:
        this.licenseProjectSubDeveloperApproval =
          data as LicenseProjectSubDeveloperApproval;
        this._licenseRequestApprovalsService.setLicenseProjectSubDeveloperApprovalBS(
          this.licenseProjectSubDeveloperApproval
        );

        break;
      case ApprovalRole.EngineeringConsultant:
        this.licenseProjectEngineeringConsultantApproval =
          data as LicenseProjectEngineeringConsultantApproval;
        this._licenseRequestApprovalsService.setLicenseProjectEngineeringConsultantApprovalBS(
          this.licenseProjectEngineeringConsultantApproval
        );

        break;
      case ApprovalRole.CharteredAccountant:
        this.licenseProjectCharteredAccountantApproval =
          data as LicenseProjectCharteredAccountantApproval;
        this._licenseRequestApprovalsService.setLicenseProjectCharteredAccountantApprovalBS(
          this.licenseProjectCharteredAccountantApproval
        );

        break;
      case ApprovalRole.Marketer:
        this.licenseProjectRealStateMarketerApproval =
          data as LicenseProjectRealStateMarketerApproval;
        this._licenseRequestApprovalsService.setLicenseProjectRealStateMarketerApprovalBS(
          this.licenseProjectRealStateMarketerApproval
        );
        break;
      case ApprovalRole.DeedOwner:
        this.licenseProjectDeedOwnerApproval =
          data as LicenseProjectDeedOwnerApproval;
        this._licenseRequestApprovalsService.setLicenseProjectDeedOwnerApprovalBS(
          this.licenseProjectDeedOwnerApproval
        );
        break;
    }
  }
  goBack(): void {
    this.router.navigate(['/wafi/license/developer-approvals-list']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onAddressSelect(addressId: number): void {
    this.selectedAddressId = addressId;
    const selectedAddress = this.ownerAddresses.find(
      (addr) => addr.id === addressId
    );

    if (selectedAddress) {
      this.Form.controls.nationalAddress.setValue(selectedAddress.address);
      // Clear validation error once address is selected
      this.addressValidationAttempted = false;
    }
  }
  openConfirmationModal(): void {
    // Prevent multiple submissions
    if (this.isSaving) {
      return;
    }

    // Validate national address for DeedOwner ONLY when approving (not when rejecting)
    const isApproving = this.Form.controls.isApproved.value === true;

    if (this.approvalRole === ApprovalRole.DeedOwner && isApproving) {
      this.addressValidationAttempted = true;

      // Simple validation: only check if nationalAddress form control has a value
      const nationalAddressValue = this.Form.controls.nationalAddress.value;

      if (!nationalAddressValue || nationalAddressValue.trim() === '') {
        this.toastr.error(
          'يرجى اختيار العنوان الوطني للمالك قبل الموافقة',
          'حقل مطلوب'
        );

        // Scroll to address section
        const addressSection = document.querySelector('.address-section');
        if (addressSection) {
          addressSection.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }

        return;
      }
    }
    let cancelConfirmationObj: confirmationPopupData = {
      popupType: 'primary',
      title: 'هل أنت متأكد من قبول الاتفاقية؟',
      staticMessage: '',
      acceptButtonText: ' تأكيد قبول الاتفاقية',
      dynamicMessage: '',
      secondeStaticMessage: '',
    };
    // Subscribe BEFORE opening popup
    const sub = this._popupService.confirmAction.subscribe(() => {
      this.saveApproval();
      sub.unsubscribe(); // prevent memory leaks / multiple calls
    });
    this._popupService.updateConfirmationPopupData(cancelConfirmationObj);
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  private observeconfirmAction() {
    this._popupService.confirmAction.subscribe((res: PopupData) => {
      //this.changePage.emit(Pagemode.List);
      this.closeDialog();
      //  if(res.data.cancel){

      //  }
    });
  }

  saveApproval(): void {
    this.saveApprovalDto = this.Form.value as SaveApproval;
    // if(!this.saveApprovalDto.isApproved)
    // {

    //   this.toastr.error("نأمل الموافقه على المشروع");
    //  return;
    // }
    
    this.saveApprovalDto.id = this.approvalDetails?.id as string;
    this.saveApprovalDto.approvalRole = this.approvalRole as ApprovalRole;

    if (this.saveApprovalDto.isApproved == false) {
      //get rejection reason
      this._requestNotesService.RequestNotes$.subscribe((res) => {
        if (res?.notes)
          this.saveApprovalDto!.rejectReason = res?.notes as string;
      });
    }

    this.isSaving = true;
    this.subscriptions.push(
      this._licenseRequestApprovalsService
        .SaveApproval(this.saveApprovalDto as SaveApproval)
        .pipe(finalize(() => (this.isSaving = false)))
        .subscribe((res: any) => {
          this.updateSubject(res);
          if (this.approvalDetails) {
            this.approvalDetails.isApproved = res.isApproved as boolean;
          }
          if (res.approvedOn) {
            this.approvalDetails!.approvedOn = res.approvedOn as string;
          }

          // Save updated approval to local storage
          //if (this.approvalDetails) {
          //  this._licenseRequestApprovalsService.setLicenseSelectedApprovalInLocalStorage(this.selectedApproval);
          //}

          if (res.isApproved) this.toastr.success('تم الموافقه على الاتفاقية');
          else this.toastr.success('تم الرفض الاتفاقية');
        })
    );
  }
  updateIsApproved(value: boolean) {
    this.Form.controls.isApproved.setValue(value);
  }
  openRejectionDialog(): void {
    let rejectionConfirmationObj: confirmationPopupData = {
      popupType: 'primary',
      title: 'ما هو سبب رفضك للإتفاقية؟',
      staticMessage: '',
      acceptButtonText: 'ارسال سبب الرفض',
      dynamicMessage: '',
      secondeStaticMessage: '',
    };
    // Subscribe BEFORE opening popup
    const sub = this._popupService.confirmAction.subscribe(() => {
      this.saveApproval();
      sub.unsubscribe(); // prevent memory leaks / multiple calls
    });
    this._popupService.updateRejectionConfirmationPopupData(
      rejectionConfirmationObj
    );

    // const dialogRef = this.dialog.open(RejectionConfirmationPopupComponent, {
    //   width: '500px',
    //   disableClose: true
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     // User confirmed rejection with a reason
    //     this.Form.controls.rejectReason.setValue(result);
    //     this.updateIsApproved(false);
    //     this.saveApproval();
    //   }
    //   // If result is null, user cancelled - do nothing
    // });
  }

  /**
   * Load deed construction approval list for EngineeringConsultant and CharteredAccountant
   */
  loadDeedConstructionApprovalList(): void {
    if (!this.approvalDetails?.licenseProjectId) {
      return;
    }

    this.subscriptions.push(
      this._projectLandDeedService
        .GetDeedConstructionApprovalList(this.approvalDetails.licenseProjectId)
        .subscribe({
          next: (response) => {
            if (response) {
              this.deedConstructionApprovalList = response;
              console.log(
                'deedConstructionApprovalList=',
                this.deedConstructionApprovalList
              );
            }
          },
          error: (error) => {
            console.error(
              'Error loading deed construction approval list:',
              error
            );
            this.deedConstructionApprovalList = [];
          },
        })
    );
  }
}
