import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { environment } from 'src/environments/environment';
import { confirmationPopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';
import { Subscription } from 'rxjs';
import {
  exchangeRequestDetails,
  LicenseProjectExchangeDocumentRejectionBy,
} from 'src/app/modules/features/license/models/exchange-documents-details-response';
import { ExchangeDocumentService } from 'src/app/modules/features/license/services/exchange-document.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-public-view-exchange-request-details',
  templateUrl: './view-public-exchange-request-details.component.html',
  styleUrls: ['./view-public-exchange-request-details.component.scss'],
  providers: [
    ExchangeDocumentService,
    PopupService,
    RequestNotesService,
    DatePipe,
  ],
})
export class ViewPublicExchangeRequestDetailsComponent implements OnInit {
  requestId!: string | null;
  requestDetails!: exchangeRequestDetails | undefined;
  baseUrl = `${environment.baseURL}/`;
  showSuccessAlert: boolean = false;
  showSuccessAlertMsg: string = '';
  subscriptions: Subscription[] = [];
  baseImagePath: string = './assets/images/layout/sidebar/';

  constructor(
    private route: ActivatedRoute,
    private _exchangeDocumentService: ExchangeDocumentService,
    private _popupService: PopupService,
    private _requestNotesService: RequestNotesService,
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
  ngOnInit() {
    // '34c14a48-8ad2-4ad3-8412-01b183e618a5'
    // this.route.snapshot.paramMap.get('id')??
    this.requestId = this.route.snapshot.paramMap.get('id') ?? '';
    this.subscriptions.push(
      this._exchangeDocumentService
        .GetExchangeDocumentDetail(this.requestId)
        .subscribe((res) => {
          if (res.isDone) {
            this.requestDetails = res.data;
            console.log(this.requestDetails);
            console.log('document number', this.requestDetails?.documnetNumber);
          }
        }),
    );
  }
  approveRequest() {
    let approveConfirmationObj = {
      staticMessage: 'تأكيد اعتماد وثيقة الصرف',
      dynamicMessage: '',
      secondeStaticMessage: 'هل أنت متأكد من اعتماد وثيقة الصرف؟',
      acceptButtonText: 'تاكيد',
    } as confirmationPopupData;
    const sub = this._popupService.confirmAction.subscribe(() => {
      this.subscriptions.push(
        this._exchangeDocumentService
          .ApproveRejectExchangeDocument({
            exchangeDocumentId: this.requestId!,
            isApproved: true,
          })
          .subscribe((res) => {
            if (res.isDone) {
              ((this.showSuccessAlertMsg = 'تم اعتماد وثيقة الصرف بنجاح'),
                (this.showSuccessAlert = true));

              this.requestDetails = res.data;
            }
          }),
      );
      sub.unsubscribe(); // prevent memory leaks / multiple calls
    });
    this._popupService.updateConfirmationPopupData(approveConfirmationObj);
  }

  rejectRequest() {
    let rejectionConfirmationObj: confirmationPopupData = {
      popupType: 'primary',
      title: '* ما هو سبب رفض وثيقة الصرف؟',
      staticMessage: '',
      acceptButtonText: 'إرسال سبب الرفض',
      dynamicMessage: '',
      secondeStaticMessage: '',
    };
    // Subscribe BEFORE opening popup
    const sub = this._popupService.confirmAction.subscribe(() => {
      this.subscriptions.push(
        this._exchangeDocumentService
          .ApproveRejectExchangeDocument({
            exchangeDocumentId: this.requestId!,
            isApproved: false,
            rejectionReason:
              this._requestNotesService.RequestNotes$.getValue()?.notes,
          })
          .subscribe((res) => {
            if (res.isDone) {
              ((this.showSuccessAlertMsg = 'تم رفض وثيقة الصرف بنجاح'),
                (this.showSuccessAlert = true));

              this.requestDetails = res.data;
            }
          }),
      );
      sub.unsubscribe(); // prevent memory leaks / multiple calls
    });
    this._popupService.updateRejectionConfirmationPopupData(
      rejectionConfirmationObj,
    );
  }
  getRejectionOwner(
    licenseProjectExchangeDocumentRejectionBy?: LicenseProjectExchangeDocumentRejectionBy,
  ): string {
    switch (licenseProjectExchangeDocumentRejectionBy) {
      case LicenseProjectExchangeDocumentRejectionBy?.Employee:
        return 'حسابات الضمان';
      case LicenseProjectExchangeDocumentRejectionBy?.Accountant:
        return 'مفوض المحاسب';
      case LicenseProjectExchangeDocumentRejectionBy?.Consultant:
        return 'مفوض الاستشارى';
      default:
        return ' s';
    }
  }
}
