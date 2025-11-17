import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
// import { ToastrNotificationComponent } from '../../../shared/components/toastr-notification/toastr-notification.component';

@Injectable()
export class ToastrNotificatioService {
  closeButton: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  timeOut: BehaviorSubject<number> = new BehaviorSubject<number>(5000); // Time to live in milliseconds
  constructor(private toastr: ToastrService) {}

  showError(errorMsgBody = 'No Data!', titleMsgBody: string = '') {
    if (errorMsgBody != 'No Data!') {
      this.toastr.error(errorMsgBody, titleMsgBody, {
        // toastComponent: ToastrNotificationComponent,
        closeButton: this.closeButton.value,
        timeOut: this.timeOut.value,
        positionClass: 'toast-top-full-width',
      });
    }
  }

  showInfo(InfoMsgBody: string, titleMsgBody: string = '') {
    this.toastr.info(InfoMsgBody, titleMsgBody, {
      // toastComponent: ToastrNotificationComponent,
      closeButton: this.closeButton.value,
      timeOut: this.timeOut.value,
      positionClass: 'toast-top-full-width',
    });
  }

  showSuccess(InfoMsgBody: string, titleMsgBody: string = '') {
    this.toastr.success(InfoMsgBody, titleMsgBody, {
      // toastComponent: ToastrNotificationComponent,
      closeButton: this.closeButton.value,
      timeOut: this.timeOut.value,
      positionClass: 'toast-top-full-width',
    });
  }
}
