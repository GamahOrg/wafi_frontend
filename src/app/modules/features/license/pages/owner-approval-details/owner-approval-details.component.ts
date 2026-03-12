import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LicenseRequestApprovalsService } from '../../services/license-request-approvals/license-request-approvals.service';
import { RealStateDeveloperService } from '../../services/real-state-developer.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RequestNotesService } from '../../../../../shared/services/requestNotes/request-notes.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupService } from '../../../../../shared/services/popup/popup.service';
import { ProjectLandDeedService } from '../../services/project-land-deed.service';
import { Subscription, finalize } from 'rxjs';
import { LicenseProjectMainRealStateDeveloperApproval } from '../../dataModels/license-project-main-real-state-developer-approval.model';
import { LicenseProjectSubDeveloperApproval } from '../../dataModels/license-project-sub-developer-approval.model';
import { LicenseProjectCharteredAccountantApproval } from '../../dataModels/license-project-chartered-accountant-approval.model';
import { LicenseProjectEngineeringConsultantApproval } from '../../dataModels/license-project-engineering-consultant-approval.model';
import { LicenseProjectRealStateMarketerApproval } from '../../dataModels/license-project-real-state-marketer-approval.model';
import { environment } from 'src/environments/environment';
import { ApprovalRole } from '../../dataModels/approval-role.model';
import {
  LicenseProjectApproval,
  SaveApproval,
} from '../../dataModels/license-project-approval.model';
import { LicenseProjectDeedOwnerApproval } from '../../dataModels/license-project-deed-owner-approval.model';
import {
  PopupData,
  confirmationPopupData,
} from '../../../../../shared/models/popup.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-owner-approval-details',
  templateUrl: './owner-approval-details.component.html',
  styleUrls: ['./owner-approval-details.component.scss'],
})
export class OwnerApprovalDetailsComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;

  approvalDetails: any = null;
  approvalId: string | null = null;
  approvalRole: number | null = null;
  private subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  retryLoadContract = () => this.loadContractPdf();
  isLoadingAddresses: boolean = false;
  // National address properties (for DeedOwner)
  ownerAddresses: { id: number; address: string }[] = [];
  selectedApproval?: LicenseProjectApproval;
  // Prevent multiple submissions
  isSaving: boolean = false;
  isUpdating: boolean = false;
  private confirmSub: Subscription | null = null;
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
  aprovalRole = ApprovalRole;
  licenseProjectMainRealStateDeveloperApproval?: LicenseProjectMainRealStateDeveloperApproval;
  licenseProjectEngineeringConsultantApproval?: LicenseProjectEngineeringConsultantApproval;
  licenseProjectSubDeveloperApproval?: LicenseProjectSubDeveloperApproval;
  licenseProjectCharteredAccountantApproval?: LicenseProjectCharteredAccountantApproval;
  licenseProjectRealStateMarketerApproval?: LicenseProjectRealStateMarketerApproval;
  licenseProjectDeedOwnerApproval?: LicenseProjectDeedOwnerApproval;
  saveApprovalDto?: SaveApproval;
  deedConstructionApprovalList: any[] = [];
  addressValidationAttempted: boolean = false;
  selectedAddressId: number | null = null;

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
    private location: Location,
    private _projectLandDeedService: ProjectLandDeedService,
  ) {}

  ngOnInit(): void {
    this.observeconfirmAction();

    this.approvalId = this.route.snapshot.paramMap.get('id');
    this.approvalRole = Number(
      this.route.snapshot.queryParamMap.get('approvalRole'),
    );
    if (this.approvalId) {
      this.loadApprovalDetails();
    }
  }

  loadContractPdf(): void {
    // Retry loading contract PDF
  }
  loadApprovalDetails(): void {
    this.isLoading = true;

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
            data.delegatorCustomerId as string,
          );
          this.updateSubject(data);
          this.loadOwnerAddresses();
        }
      });
    // Load addresses if this is a DeedOwner approval
    this.subscriptions.push(sub);
  }
  loadOwnerAddresses(): void {
    // Only load addresses for DeedOwner approval role
    if (
      this.approvalRole !== ApprovalRole.DeedOwner ||
      this.approvalDetails.approvedOn != null
    ) {
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
          }),
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
          }),
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
      | LicenseProjectDeedOwnerApproval,
  ) {
    switch (this.approvalRole) {
      case ApprovalRole.MainDeveloper:
        this.licenseProjectMainRealStateDeveloperApproval =
          data as LicenseProjectMainRealStateDeveloperApproval;
        this._licenseRequestApprovalsService.setLicenseProjectMainRealStateDeveloperApprovalBS(
          this.licenseProjectMainRealStateDeveloperApproval,
        );
        break;
      case ApprovalRole.SubDeveloper:
        this.licenseProjectSubDeveloperApproval =
          data as LicenseProjectSubDeveloperApproval;
        this._licenseRequestApprovalsService.setLicenseProjectSubDeveloperApprovalBS(
          this.licenseProjectSubDeveloperApproval,
        );

        break;
      case ApprovalRole.EngineeringConsultant:
        this.licenseProjectEngineeringConsultantApproval =
          data as LicenseProjectEngineeringConsultantApproval;
        this._licenseRequestApprovalsService.setLicenseProjectEngineeringConsultantApprovalBS(
          this.licenseProjectEngineeringConsultantApproval,
        );

        break;
      case ApprovalRole.CharteredAccountant:
        this.licenseProjectCharteredAccountantApproval =
          data as LicenseProjectCharteredAccountantApproval;
        this._licenseRequestApprovalsService.setLicenseProjectCharteredAccountantApprovalBS(
          this.licenseProjectCharteredAccountantApproval,
        );

        break;
      case ApprovalRole.Marketer:
        this.licenseProjectRealStateMarketerApproval =
          data as LicenseProjectRealStateMarketerApproval;
        this._licenseRequestApprovalsService.setLicenseProjectRealStateMarketerApprovalBS(
          this.licenseProjectRealStateMarketerApproval,
        );
        break;
      case ApprovalRole.DeedOwner:
        this.licenseProjectDeedOwnerApproval =
          data as LicenseProjectDeedOwnerApproval;
        this._licenseRequestApprovalsService.setLicenseProjectDeedOwnerApprovalBS(
          this.licenseProjectDeedOwnerApproval,
        );
        break;
    }
  }

  updateIsApproved(value: boolean) {
    this.Form.controls.isApproved.setValue(value);
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
          'حقل مطلوب',
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
      alertClass: 'info',
      alertText:
        'بالموافقة على الاتفاقية فأنت أيضاً توافق على تهميش الصك التلقائي',
    };
    // Clean up previous subscription to prevent double-fire on cancel + reopen
    if (this.confirmSub) {
      this.confirmSub.unsubscribe();
      this.confirmSub = null;
    }
    // Subscribe BEFORE opening popup
    this.confirmSub = this._popupService.confirmAction.subscribe(() => {
      this.confirmSub?.unsubscribe();
      this.confirmSub = null;
      this.saveApproval();
    });
    this._popupService.updateConfirmationPopupData(cancelConfirmationObj);
  }
  saveApproval(): void {
    this.saveApprovalDto = this.Form.value as SaveApproval;
    // if(!this.saveApprovalDto.isApproved)
    // {

    //   this.toastr.error("نأمل الموافقة على المشروع");
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

          if (res.isApproved) this.toastr.success('تم الموافقة على الاتفاقية');
          else this.toastr.success('تم رفض الاتفاقية');
          this.location.back();
        }),
    );
  }
  openRejectionDialog(): void {
    let rejectionConfirmationObj: confirmationPopupData = {
      popupType: 'primary',
      title: 'ما هو سبب رفضك للإتفاقية؟',
      staticMessage: '',
      acceptButtonText: 'إرسال سبب الرفض',
      dynamicMessage: '',
      secondeStaticMessage: '',
    };
    // Clean up previous subscription to prevent double-fire on cancel + reopen
    if (this.confirmSub) {
      this.confirmSub.unsubscribe();
      this.confirmSub = null;
    }
    // Subscribe BEFORE opening popup
    this.confirmSub = this._popupService.confirmAction.subscribe(() => {
      this.confirmSub?.unsubscribe();
      this.confirmSub = null;
      this.saveApproval();
    });
    this._popupService.updateRejectionConfirmationPopupData(
      rejectionConfirmationObj,
    );
  }
  formatFacilityAddress(approvalDetails: any): string {
    const parts = [
      approvalDetails?.facility?.buildingNumber
        ? `مبنى ${approvalDetails?.facility.buildingNumber}`
        : null,
      approvalDetails?.facility?.unitNumber
        ? `وحدة ${approvalDetails?.facility.unitNumber}`
        : null,
      approvalDetails?.facility?.streetName || null,
      approvalDetails?.facility?.areaName || null,
      approvalDetails?.facility?.cityName || null,
      approvalDetails?.facility?.postalCode || null,
    ];

    return parts.filter((part) => part && part.trim().length > 0).join('، ');
  }
  onAddressSelect(addressId: number): void {
    this.selectedAddressId = addressId;
    const selectedAddress = this.ownerAddresses.find(
      (addr) => addr.id === addressId,
    );

    if (selectedAddress) {
      this.Form.controls.nationalAddress.setValue(selectedAddress.address);
      // Clear validation error once address is selected
      this.addressValidationAttempted = false;
    }
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe(() => {
        this.closeDialog();
      })
    );
  }

  ngOnDestroy(): void {
    this.confirmSub?.unsubscribe();
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
