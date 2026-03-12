import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, finalize } from 'rxjs';
import { LicenseProjectCharteredAccountantApproval } from '../../../dataModels/license-project-chartered-accountant-approval.model';
import { LicenseProjectEngineeringConsultantApproval } from '../../../dataModels/license-project-engineering-consultant-approval.model';
import { LicenseProjectMainRealStateDeveloperApproval } from '../../../dataModels/license-project-main-real-state-developer-approval.model';
import { LicenseProjectRealStateMarketerApproval } from '../../../dataModels/license-project-real-state-marketer-approval.model';
import { LicenseProjectSubDeveloperApproval } from '../../../dataModels/license-project-sub-developer-approval.model';
import { LicenseRequestApprovalsService } from '../../../services/license-request-approvals/license-request-approvals.service';
import {
  LicenseProjectApproval,
  SaveApproval,
} from '../../../dataModels/license-project-approval.model';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { ApprovalRole } from '../../../dataModels/approval-role.model';
import { LicenseProjectDeedOwnerApproval } from '../../../dataModels/license-project-deed-owner-approval.model';
import { RealStateDeveloperService } from '../../../services/real-state-developer.service';
import { ToastrService } from 'ngx-toastr';
import {
  PopupData,
  confirmationPopupData,
} from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';
import { ProjectLandDeedService } from '../../../services/project-land-deed.service';
import { LicenseProjectAgreementStatusEnum } from '../../../enums/license-project-agreement-status.enum';

@Component({
  selector: 'app-fawria-agreement-file',
  templateUrl: './fawria-agreement-file.component.html',
  styleUrls: ['./fawria-agreement-file.component.scss'],
})
export class FawriaAgreementFileComponent implements OnInit, OnDestroy {
  approvalId: string | null = null;
  retryLoadContract = () => this.loadContractPdf();
  approvalRole: number | null = null;
  approvalDetails: any = null;
  isLoading: boolean = false;
  private subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  addressValidationAttempted: boolean = false;
  isLoadingAddresses: boolean = false;
  ownerAddresses: { id: number; address: string }[] = [];
  selectedAddressId: number | null = null;
  aprovalRole = ApprovalRole;
LicenseProjectAgreementStatusEnum = LicenseProjectAgreementStatusEnum;

  get pageTitle(): string {
    switch (this.approvalRole) {
      case ApprovalRole.CharteredAccountant:
        return 'بيانات المحاسب القانوني';
      case ApprovalRole.EngineeringConsultant:
        return 'بيانات الاستشاري الهندسي';
      case ApprovalRole.DeedOwner:
        return 'بيانات مالك الأرض';
      default:
        return 'ملف الاتفاقية';
    }
  }

  formatContractValue(value: number | null | undefined): string {
    if (value == null) return '';
    return Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  selectedApproval?: LicenseProjectApproval;
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
    private _projectLandDeedService: ProjectLandDeedService
  ) {}

  ngOnInit(): void {
    this.approvalId = this.route.snapshot.paramMap.get('id');
    this.approvalRole = Number(
      this.route.snapshot.queryParamMap.get('approvalRole')
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
          // this.loadOwnerAddresses();

          if (
            this.approvalRole === ApprovalRole.EngineeringConsultant ||
            this.approvalRole === ApprovalRole.CharteredAccountant
          ) {
            this.loadDeedConstructionApprovalList();
          }
        }
      });
    this.subscriptions.push(sub);
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
    this.router.navigate(['/wafi/license/fawria-project-parties-status']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }


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
