import { Component, OnDestroy, OnInit } from '@angular/core';
import { MailConfirmationService } from '../../services/mail-confirmation/mail-confirmation.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-mail-confirmation',
  templateUrl: './mail-confirmation.component.html',
  styleUrls: ['./mail-confirmation.component.scss']
})
export class MailConfirmationComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  customerId: string = "";
  localization = {
    mailConfirmedSuccessfully: "تم تأكيد الميل بنجاح",
    appTitle: "تأكيد البريد الإلكتروني"
  }
  constructor(
    private _mailConfirmationService: MailConfirmationService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _toastrNotificatioService: ToastrNotificatioService,
    private titleService:Title
  ) {
    this.setAppTitle();
  }
  private setAppTitle() {
    this.titleService.setTitle(this.localization.appTitle);
  }
  ngOnInit(): void {
    this.getcustomerIdfromParamMap()
  }
  private getcustomerIdfromParamMap() {

    this.subscriptions.push(
      this._activatedRoute.paramMap.subscribe(paramMap => {
        this.customerId = paramMap.get('customerId') as string;
        if (this.customerId) this.ConfirmEmail()
      })
    )
  }
  private ConfirmEmail() {

    this.subscriptions.push(
      this._mailConfirmationService.ConfirmEmail(this.customerId as string).subscribe((res: boolean) => {
        if (res) {
          this.navigateToLogin();
          this.showNotificationForMailConfirmation()
        }

      })
    );
  }
  private navigateToLogin() {

    this._router.navigateByUrl(
      `${Configuration.modules.auth}/${Configuration.pages.auth.login}`
    );
  }
  private showNotificationForMailConfirmation(): void {
    this._toastrNotificatioService.showSuccess(this.localization.mailConfirmedSuccessfully)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
