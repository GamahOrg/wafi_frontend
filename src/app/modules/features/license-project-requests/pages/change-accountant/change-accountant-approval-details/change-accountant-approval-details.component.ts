import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { confirmationPopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';
import { environment } from 'src/environments/environment';
import { ApproveOrRejectChangeAccountantRequestDto, ChangeAccountantRequestDetailsDto, ChangeLicenseProjectAccountantRequestService } from '../../../services/change-license-project-accountant-request.service';
import { ProjectRequestLocalStorageService } from '../../../services/project-request-local-storage.service';
import { LicenseProjectRequestStatusEnum } from '../../../enums/license-project-request-status.enum';

@Component({
  selector: 'app-change-accountant-approval-details',
  templateUrl: './change-accountant-approval-details.component.html',
  styleUrls: ['./change-accountant-approval-details.component.scss'],
})
export class ChangeAccountantApprovalDetailsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  details: ChangeAccountantRequestDetailsDto | null = null;
  baseUrl = `${environment.baseURL}/`;
  hasAgreed = false;
  subUnitsList: { typeName: string; count: number }[] = [];

  private listRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanListApprovals}`;

  constructor(
    private _service: ChangeLicenseProjectAccountantRequestService,
    private _router: Router,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _popupService: PopupService,
    private _requestNotesService: RequestNotesService,
    private _toastr: ToastrNotificatioService
  ) { }

  ngOnInit(): void {
    this.loadDetails();
  }

  private loadDetails(): void {
    const licenseProjectRequestId =
      this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (!licenseProjectRequestId) return;

    this.subscriptions.push(
      this._service.getRequestDetails(licenseProjectRequestId).subscribe((res) => {
        if (res.isDone && res.data) {
          this.details = res.data;
          this.buildSubUnitsList();
        }
      })
    );
  }

  private buildSubUnitsList(): void {
    if (!this.details?.licenseProjectSubUnits) return;
    this.subUnitsList = Object.entries(this.details.licenseProjectSubUnits).map(
      ([typeName, count]) => ({ typeName, count })
    );
  }

  approveAgreement(): void {
    if (!this.details) return;
    const data: confirmationPopupData = {
      id: 'approve-accountant-agreement',
      popupType: 'primary',
      title: 'هل أنت متأكد من قبول الاتفاقية؟',
      staticMessage: 'بالضغط على زر «تأكيد»، سيتم قبول الاتفاقية ولن تتمكن من التراجع عن هذا الإجراء.',
      dynamicMessage: '',
      acceptButtonText: 'تأكيد',
    };
    this._popupService.updateConfirmationPopupData(data);

    const sub = this._popupService.confirmAction.subscribe((result) => {
      if (result && (result as confirmationPopupData).id === 'approve-accountant-agreement') {
        this._popupService.dismissDialog();
        this.submitApproveReject(true, null);
        sub.unsubscribe();
      }
    });
    this.subscriptions.push(sub);
  }

  rejectAgreement(): void {
    if (!this.details) return;
    const data: confirmationPopupData = {
      id: 'reject-accountant-agreement',
      popupType: 'primary',
      title: 'سبب رفض الاتفاقية',
      controlTitle: 'سبب الرفض',
      staticMessage: '',
      dynamicMessage: '',
      acceptButtonText: 'إرسال سبب الرفض',
    };
    this._popupService.updateRejectionConfirmationPopupData(data);

    const sub = this._popupService.confirmAction.subscribe((result: any) => {
      if (result && result.id === 'reject-accountant-agreement') {
        this._popupService.dismissDialog();
        const rejectionReason = this._requestNotesService.RequestNotes$.getValue()?.notes || '';
        this.submitApproveReject(false, rejectionReason);
        sub.unsubscribe();
      }
    });
    this.subscriptions.push(sub);
  }

  private submitApproveReject(isApproved: boolean, rejectionReason: string | null): void {
    if (!this.details) return;
    const dto: ApproveOrRejectChangeAccountantRequestDto = {
      requestId: this.details.licenseProjectRequestId,
      isApproved,
      rejectionReason,
    };
    this.subscriptions.push(
      this._service.approveRejectChangeAccountantRequest(dto).subscribe((res) => {
        if (res.isDone) {
          this._toastr.showSuccess(
            isApproved ? 'تم قبول الاتفاقية بنجاح' : 'تم رفض الاتفاقية بنجاح'
          );
          this._router.navigate([this.listRoute]);
        }
      })
    );
  }

  cancel(): void {
    this._router.navigate([this.listRoute]);
  }

  getStatusClass(statusId?: LicenseProjectRequestStatusEnum | null) {
      switch (statusId) {
        case LicenseProjectRequestStatusEnum.Approved:
          return 'green';
  
        case LicenseProjectRequestStatusEnum.Rejected:
        case LicenseProjectRequestStatusEnum.RejectedFromNewAccountant:
          return 'red';
  
        default:
          return 'orange';
      }
    }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
