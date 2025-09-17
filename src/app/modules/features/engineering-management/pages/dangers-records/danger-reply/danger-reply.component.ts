import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseProjectRiskService } from '../../../services/license-project-risk.service';
import { LicenseProjectRiskReplyDto } from '../../../models/license-project-risk-dto';

@Component({
  selector: 'app-danger-reply',
  templateUrl: './danger-reply.component.html',
  styleUrls: ['./danger-reply.component.scss']
})
export class DangerReplyComponent  implements OnInit, OnDestroy {
  replyForm!: FormGroup;
  subscriptions: Subscription[] = [];
  isLoading = false;
  licenseProjectRecommendationId: string = '';

  localization = {
    notes: 'الملاحظات',
    submit: 'إرسال',
    cancel: 'إلغاء',
    loading: 'جاري الإرسال...',
    success: 'تم إرسال الرد بنجاح',
    error: 'حدث خطأ أثناء إرسال الرد',
    notesRequired: 'الملاحظات مطلوبة'
  };

  constructor(
    private _formBuilder: FormBuilder,
    private _licenseProjectRiskService: LicenseProjectRiskService,
    private _toastr: ToastrService,
    private _popupService: PopupService,
    private _userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.initForm();
    this.observePopupEvents();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  private initForm(): void {
    this.replyForm = this._formBuilder.group({
      notes: ['', [Validators.required]]
    });
  }

  private observePopupEvents(): void {
    this.observeCancelAction();
    this.observeConfirmAction();
  }

  private observeCancelAction(): void {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        this._popupService.dismissDialog();
      })
    );
  }

  

  private observeConfirmAction(): void {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {   
      })
    );
  }

  onSubmit(): void {
    if (this.replyForm.valid) {
      this.isLoading = true;
      const replyData: LicenseProjectRiskReplyDto = {
        notes: this.replyForm.get('notes')?.value,
        licenseProjectRiskId: localStorage.getItem('licenseProjectRiskId') as string
      };

      this.subscriptions.push(
        this._licenseProjectRiskService.saveLicenseProjectRiskReply(replyData)
          .subscribe({
            next: (response) => {
              this.isLoading = false;
              if (response.isDone) {
                this._toastr.success(this.localization.success);
                localStorage.removeItem('licenseProjectRiskId');
                this._popupService.dismissDialog();
                this._licenseProjectRiskService.submitSuccessfullyEventEmitter.emit();
              } else {
                this._toastr.error(response.message || this.localization.error);
              }
            },
            error: (error) => {
              this.isLoading = false;
              this._toastr.error(this.localization.error);
              console.error('Error saving Risk reply:', error);
            }
          })
      );
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.replyForm.controls).forEach(key => {
      const control = this.replyForm.get(key);
      control?.markAsTouched();
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.replyForm.get(controlName);
    if (control?.errors && control?.touched) {
      if (control.errors['required']) {
        return this.localization.notesRequired;
      }
    }
    return '';
  }

  onCancel(): void {
    this._popupService.dismissDialog();
  }
}
