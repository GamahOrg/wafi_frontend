import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExchangeDocumentService } from '../../services/exchange-document.service';
import {
  exchangeRequestDetails,
  LicenseProjectExchangeDocumentRejectionBy,
} from '../../models/exchange-documents-details-response';
import { environment } from 'src/environments/environment';
import { confirmationPopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';
import { Subscription } from 'rxjs';
import {
  LicenseProjectExchangeDocumentMainItemEnum,
  LicenseProjectExchangeDocumentStatusEnum,
  LicenseProjectExchangeDocumentWithdrawalMethodEnum,
} from '../../dataModels/license-project-exchange-document-paging-dto';
import { CustomerTypeEnum } from '../../models/search-exchange-document-list-response-dto';

@Component({
  selector: 'app-view-exchange-request-details',
  templateUrl: './view-exchange-request-details.component.html',
  styleUrls: ['./view-exchange-request-details.component.scss'],
})
export class ViewExchangeRequestDetailsComponent implements OnInit {
  showWorkDonePercentage:boolean = false;
  requestId!: string | null;
  customerType!: number;
  CustomerTypeEnum = CustomerTypeEnum;
  requestDetails!: exchangeRequestDetails | undefined;
  baseUrl = `${environment.baseURL}/`;
  showSuccessAlert: boolean = false;
  showSuccessAlertMsg: string = '';
  subscriptions: Subscription[] = [];
licenseProjectExchangeDocumentStatus=LicenseProjectExchangeDocumentStatusEnum;
  withdrawalMethodEnum = LicenseProjectExchangeDocumentWithdrawalMethodEnum;
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
    if(this.route.snapshot.data['customerType']){
      this.customerType = this.route.snapshot.data['customerType'];
    }

    if(this.route.snapshot.paramMap.get('customerType')){
       this.customerType = Number(this.route.snapshot.paramMap.get('customerType'));
     }
    // this.requestId = '34c14a48-8ad2-4ad3-8412-01b183e618a5';
    this.subscriptions.push(
      this._exchangeDocumentService
        .getExchangeDocumentDetailWithCustomerInfo(this.requestId)
        .subscribe((res) => {
          if (res.isDone) {
            this.requestDetails = res.data;

            if(this.requestDetails?.mainItemId == LicenseProjectExchangeDocumentMainItemEnum.MaintenanceCostCalculation){
              this.showWorkDonePercentage = true;
            }
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
              this.closeDialog();
            }
          }),
      );
      sub.unsubscribe();
      cancelSub.unsubscribe();
    });
    const cancelSub = this._popupService.cancelAction.subscribe(() => {
      sub.unsubscribe();
      cancelSub.unsubscribe();
    });
    this._popupService.updateConfirmationPopupData(approveConfirmationObj);
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  rejectRequest() {
    let rejectionConfirmationObj: confirmationPopupData = {
      popupType: 'primary',
      title: 'ما هو سبب رفض وثيقة الصرف؟',
      controlTitle:'سبب الرفض',
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
              this.closeDialog();

            }
          }),
      );
      sub.unsubscribe();
      cancelSub.unsubscribe();
    });
    const cancelSub = this._popupService.cancelAction.subscribe(() => {
      sub.unsubscribe();
      cancelSub.unsubscribe();
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
        return 'المحاسب القانوني';
      case LicenseProjectExchangeDocumentRejectionBy?.Consultant:
        return 'الاستشاري الهندسي';
      default:
        return ' s';
    }
  }

    
     getStatusClass(status: number=1) {
        switch (status) {
          case LicenseProjectExchangeDocumentStatusEnum.IssuedDocument:
            return 'green';
          case LicenseProjectExchangeDocumentStatusEnum.Rejected:
            return 'red';
          case LicenseProjectExchangeDocumentStatusEnum.Approved:
            return 'blue';
          case LicenseProjectExchangeDocumentStatusEnum.PendingApproval:
            return 'orange';
    
          default:
            return 'orange';
        }
      }
}
