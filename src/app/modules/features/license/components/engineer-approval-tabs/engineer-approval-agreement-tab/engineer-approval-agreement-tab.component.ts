import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, finalize } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { LicenseRequestApprovalsService } from '../../../services/license-request-approvals/license-request-approvals.service';
import { EngineerApprovalDataService } from '../../../services/engineer-approval-data.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';
import { ApprovalRole } from '../../../dataModels/approval-role.model';
import { SaveApproval } from '../../../dataModels/license-project-approval.model';
import {
  confirmationPopupData,
  PopupData,
  notePopupData,
} from 'src/app/shared/models/popup.model';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-engineer-approval-agreement-tab',
  templateUrl: './engineer-approval-agreement-tab.component.html',
  styleUrls: ['./engineer-approval-agreement-tab.component.scss'],
})
export class EngineerApprovalAgreementTabComponent
  implements OnInit, OnDestroy
{
  private subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;

  approvalId: string | null = null;
  approvalRole: number | null = null;
  approvalDetails: any = null;
  isLoading: boolean = false;
  isSaving: boolean = false;
  isQualificationAcknowledged: boolean = false;
  private confirmSub: Subscription | null = null;
  showValidation: boolean = false;

  retryLoadContract = () => this.loadContractPdf();

  Form = this._formBuilder.group({
    id: [''],
    delegatorCustomerId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    isApproved: this._formBuilder.control<boolean | null>(false, [
      Validators.required,
    ]),
    rejectReason: this._formBuilder.control<string | null>(null),
  });

  saveApprovalDto?: SaveApproval;
  listUrl = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.developerApprovalsList}`;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _licenseRequestApprovalsService: LicenseRequestApprovalsService,
    private _engineerApprovalDataService: EngineerApprovalDataService,
    private _formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _popupService: PopupService,
    private _requestNotesService: RequestNotesService,
    private _dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.observeconfirmAction();
    this.approvalId = this.route.snapshot.paramMap.get('id');
    this.approvalRole = Number(
      this.route.snapshot.queryParamMap.get('approvalRole'),
    );

    this.subscriptions.push(
      this._engineerApprovalDataService.isLoading$.subscribe((loading) => {
        this.isLoading = loading;
      }),
    );

    this.subscriptions.push(
      this._engineerApprovalDataService.approvalDetails$.subscribe((data) => {
        if (data) {
          this.approvalDetails = data;
          this.Form.patchValue({
            id: data.id,
            delegatorCustomerId: data.delegatorCustomerId,
            isApproved: data.isApproved,
          });
        }
      }),
    );
  }

  loadContractPdf(): void {
    // Retry loading contract PDF
  }

  updateIsApproved(value: boolean): void {
    this.Form.controls.isApproved.setValue(value);
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
    this.confirmSub = this._popupService.confirmAction.subscribe(() => {
      this.confirmSub?.unsubscribe();
      this.confirmSub = null;
      this.saveApproval();
    });
    this._popupService.updateRejectionConfirmationPopupData(
      rejectionConfirmationObj,
    );
  }
  openConfirmationModal(): void {
    if (!this.isQualificationAcknowledged) {
      this.showValidation = true;
      this.toastr.error('يجب الموافقة على الإقرار');
      return;
    }

    let confirmationObj: confirmationPopupData = {
      popupType: 'primary',
      title: 'هل أنت متأكد من قبول الاتفاقية؟',
      staticMessage: '',
      dynamicMessage: '',
      id: 'acceptConfirmation',
      acceptButtonText: 'تأكيد',
    };
    // Clean up previous subscription to prevent double-fire on cancel + reopen
    if (this.confirmSub) {
      this.confirmSub.unsubscribe();
      this.confirmSub = null;
    }
    this.confirmSub = this._popupService.confirmAction.subscribe(() => {
      this.confirmSub?.unsubscribe();
      this.confirmSub = null;
      this.saveApproval();
    });
    this._popupService.updateConfirmationPopupData(confirmationObj);
  }

  private observeconfirmAction(): void {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe(() => {
        this._popupService.dismissDialog();
      }),
    );
  }

  saveApproval(): void {
    this.saveApprovalDto = this.Form.value as SaveApproval;
    this.saveApprovalDto.id = this.approvalDetails?.id as string;
    this.saveApprovalDto.approvalRole = this.approvalRole as ApprovalRole;

    if (this.saveApprovalDto.isApproved == false) {
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
          if (res) {
            this.approvalDetails!.isApproved = res.isApproved as boolean;
            this.approvalDetails!.approvedOn = res.approvedOn as string;

            // Close any open popup
            this._dialog.closeAll();

            if (res.isApproved) {
              this.showSuccessPopup();
            } else {
              this.toastr.success('تم رفض الاتفاقية');
              this.goBack();
            }
          }
        }),
    );
  }

  showSuccessPopup(): void {
    const successNoteData: notePopupData = {
      popupType: 'success',
      title: 'تم قبول الاتفاقية بنجاح',
      dynamicMessage: 'تم إرسال موافقتك على الاتفاقية إلى المطور العقاري',
      buttonText: 'العودة للقائمة',
      buttonLink: this.listUrl,
      showCloseIcon: false,
    };
    this._popupService.updateNotePopupData(successNoteData);
  }

  goBack(): void {
    this.router.navigate([this.listUrl]);
  }

  ngOnDestroy(): void {
    this.confirmSub?.unsubscribe();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
