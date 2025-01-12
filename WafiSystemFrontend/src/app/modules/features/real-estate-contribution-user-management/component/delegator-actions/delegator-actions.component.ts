import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RegistrationRequestService } from '../../services/registration-request/registration-request.service';
import { Subscription } from 'rxjs';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { DialogDelegatorActionData } from '../../dataModels/Dialog-model';


@Component({
  selector: 'app-delegator-actions',
  templateUrl: './delegator-actions.component.html',
  styleUrls: ['./delegator-actions.component.scss']
})

export class delegatoractionsComponent implements OnInit {
  subscriptions: Subscription[] = [];
  showValidation: boolean = false
  localization = {
    addConfirmedSuccessfully: "تم الإضافة بنجاح",
    EditConfimedSuccessfully: "تم التعديل بنجاح",
    Email: 'البريد الرلكتروني',
    phoneNumber: 'رقم الجوال',
    phoneNumberPattern: 'من فضلك ادخل رقم جوال صحيح',
    emailPattern: 'من فضلك ادخل البريد الإلكتروني صحيح',
    requiredErrorMsg: 'required',
    maxLengthErrorMsg: 'يجب ألا يقل طول الحقل عن 20 أرقام',
    identityNumber: 'رقم الهوية',
    maxLengthPhoneErrorMsg : "length must not be more than 10"
  }
  addForm = new FormGroup({
    id: new FormControl('00000000-0000-0000-0000-000000000000'),
    identityNumber: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern(Configuration.validators.phonePattern),
      Validators.maxLength(10), Validators.minLength(10) ,Validators.pattern(Configuration.validators.numberOnly)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  commissionerID: string | undefined

  dialogData!: DialogDelegatorActionData
  constructor(private _services: RegistrationRequestService,
    private _popupService: PopupService,
    private _toastrNotificatioService: ToastrNotificatioService) {
  }

  ngOnInit(): void {
    this.commissionerID = this._popupService.popupData.value.id
    if (this.commissionerID) {
      this.getDialogData()
    }
    this.observePopupEvents();
  }

  get controls() {
    return this.addForm.controls;
  }

  getDialogData() {
    this.subscriptions.push(
      this._services.getCommissionerByID(this.commissionerID).subscribe(res => {
        this.dialogData = res
        this.addForm.patchValue(this.dialogData)
      })
    )
  }

  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe()
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res) => {
        if (!this.addForm.valid) {
          this.showValidation = true
        } else {

          this.submit();
        }
      })
    )
  }

  submit() {
    if (this.commissionerID) {
      this.subscriptions.push(
        this._services.updateCommissioner(this.addForm.value as DialogDelegatorActionData).subscribe(res => {
          if (res.isDone) {
            this._services.submitSuccessfullyEventEmitter.emit()
            this._popupService.dismissDialog()
            this.showNotificationForSucessAdd()
          }
        })
      )
    } else {
      this.subscriptions.push(
        this._services.AddCommissioners(this.addForm.value as DialogDelegatorActionData).subscribe(res => {
          if (res.isDone) {
            this._services.submitSuccessfullyEventEmitter.emit()
            this._popupService.dismissDialog()
            this.showNotificationForSucessAdd()

          }
        })
      )
    }
  }

  private showNotificationForSucessAdd(): void {
    this._toastrNotificatioService.showSuccess(this.commissionerID ? this.localization.EditConfimedSuccessfully : this.localization.addConfirmedSuccessfully)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
