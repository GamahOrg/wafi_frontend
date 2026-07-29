import { Component, OnDestroy, OnInit } from '@angular/core';
import { RequestService } from '../../services/requests/request-service.service';
import { RequestDataComponent } from '../../components/request-data/request-data.component';
import { ResultOfRequestStudyComponent } from '../../components/result-of-request-study/result-of-request-study.component';
import { RequestEventsLogComponent } from '../../components/request-events-log/request-events-log.component';
import { Subscription } from 'rxjs';
import { RequestDetails, QualificationInvoiceData, QualificationRequestStatusEnum } from '../../dataModels/request-details.model';
import { internalStatusId } from "../../dataModels/enum/request-status";
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { RequestNotesData } from 'src/app/shared/models/request-notes-data.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrService } from 'ngx-toastr';
import { Button } from 'src/app/shared/models/button.model';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { EditorRequestNotesComponent } from '../../../../../shared/components/editor-request-notes/editor-request-notes.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';
import { CircularProgressSetting } from 'src/app/shared/models/circular-progress-setting.model';
import { EditorRequestNotesOnlyComponent } from 'src/app/shared/components/editor-request-notes-only/editor-request-notes-only.component';
import { QualificationInvoiceViewComponent } from '../../components/qualification-invoice-view/qualification-invoice-view.component';
import { SuspensionNoteReplyComponent } from '../../components/suspension-note-reply/suspension-note-reply.component';
@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss'],
})
export class RequestDetailsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  selectedRequest: null | RequestDetails = null;
  selectedRequestID: string | null = "";
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        icon: '',
        title: 'بيانات الطلب',
        Component: RequestDataComponent,
        disabled: false,
        isVisible: true,
        id: 'RequestDataComponent',
      },
      {
        icon: '',
        title: 'نتيجة دراسة الطلب ',
        Component: ResultOfRequestStudyComponent,
        disabled: false,
        isVisible: true,
        id: 'ResultOfRequestStudyComponent',
      },
      {
        icon: '',
        title: 'سجل  أحداث الطلب',
        Component: RequestEventsLogComponent,
        disabled: false,
        isVisible: true,
        id: 'RequestEventsLogComponent',
      },
    ],
  };

  get internalStatusId() {
    return internalStatusId
  };
  get qualificationRequestStatusEnum() {
    return QualificationRequestStatusEnum
  };

  RequestNotes: RequestNotesData | null = null;
  suspensionNotes: any[] = [];

  get hasUnrepliedSuspensionNote(): boolean {
    return this.suspensionNotes.some(n => n.repliedOn == null);
  }

  clientActionsButtons: Button[] = [
    {
      icon: "",
      title: "إعادة إرسال الطلب",
      actionType: ButtonType.allowCompile,
      isVisable: true,
      isDisables: false,
      onclick: () => this.openNotesDialog()
    }
  ]
  localization = {
    remainingDaysToStudy: "الوقت المتبقي لدراسة الطلب",
    remainingDaysToTakeAnAction: "الوقت المتبقي لأخذ قرار",
    qualificationSuspensionRemainingDays: "عدد الايام المتبقية للمعالجة لتعليق الطلب",
    remainingNotesProcessingDays: "الوقت المتبقى لمعالجة الملاحظات",
  }

  StudyDaysProgressSetting: CircularProgressSetting = new CircularProgressSetting;
  invoiceStatusIds: number[] = [8, 9, 5];
  get hasInvoice(): boolean {
    return this.selectedRequest != null && this.selectedRequest.showInvoiceDetailsButton;
  }
  constructor(
    private _requestService: RequestService,
    private _tabsService: TabsService,
    private _popupService: PopupService,
    private _toastrService: ToastrService,
    private _requestNotesService: RequestNotesService
  ) { }

  ngOnInit(): void {
    this.updateTabContent();
    this.getSelectedRequestIdFromLocalStorage();
    this.ObserveSelectedRequest();
    this.observePopupEvents();
    this.observeRequestNotes();
    this.observeDataIsUpdated();
  }

  observeRequestNotes(): void {
    this.subscriptions.push(
      this._requestNotesService.RequestNotes$.subscribe((res: RequestNotesData | null) => {
        if (res) this.RequestNotes = res;
      })
    )
  }

  updateTabContent(): void {
    this._tabsService.updateTabContent(this.tabContent)
  }

  getSelectedRequestIdFromLocalStorage(): void {
    this.selectedRequestID = this._requestService.getSelectedRequestIdFromLocalStorage();
    console.log("this.selectedRequestID", this.selectedRequestID);

    if (this.selectedRequestID) this.getSelectedRequest();
  }

  getSelectedRequest() {
    this.subscriptions.push(
      this._requestService.GetQualificationRequestHeaderByRequestId(this.selectedRequestID as string).subscribe(res => {
        this._requestService.seclectRequest$.next(res);
        this.getSuspensionNotes();
      }))
  }

  private observeDataIsUpdated(): void {
    this.subscriptions.push(
      this._requestService.dataIsUpdate.subscribe(() => {
        this.getSuspensionNotes();
      })
    );
  }

  private getSuspensionNotes(): void {
    if (!this.selectedRequestID) return;
    this.subscriptions.push(
      this._requestService.getSuspensionNotesByRequestId(this.selectedRequestID).subscribe(res => {
        if (res?.isDone) this.suspensionNotes = res.data ?? [];
      })
    );
  }

  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._requestService.seclectRequest$.subscribe((res: RequestDetails[] | null) => {
        if (res && res.length > 0) {
          this.selectedRequest = res[0];
          this.updateDayProgressSettings();
        }
      })
    )
  }
  private updateDayProgressSettings(): void {
    this.updateStudyDaysProgressSetting();
  }
  private updateStudyDaysProgressSetting(): void {
    if (this.selectedRequest) {
      this.StudyDaysProgressSetting.percent = this.selectedRequest.remainingStudyPeriod / this.selectedRequest.studyPeriod * 100;
      this.StudyDaysProgressSetting.title = this.selectedRequest.remainingStudyPeriod.toString()
    }
  }
  // hekper methods
  private openNotesDialog(): void {
    let Data = {
      id: ButtonType.allowCompile,
      title: " نتيجة معالجة الطلب",
      component: EditorRequestNotesOnlyComponent
    } as PopupData;
    this.updateAndOpenData(Data)
  }

  private updateAndOpenData(data: PopupData) {
    this._popupService.updatePopupData(data)
  }

  // popup
  private observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
        switch (res.id) {
          case ButtonType.allowCompile:
            // console.log("allowFeedBack", this.RequestNotes);
            this.compile()
            break;

        }
      })
    )
  }

  private compile() {
    this.subscriptions.push(
      this._requestService.compile(this.selectedRequestID as string, this.RequestNotes?.notes as string).subscribe((res: boolean) => {
        if (res) {
          this.closeDialog();
          this.emitDataIsUpdate();
          this.getSelectedRequest();
          // this.showNotificationOFsentNotes();
        }
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }

  emitDataIsUpdate() {
    this._requestService.dataIsUpdate.emit()
  }

  private showNotificationOFsentNotes() {
    this._toastrService.success("تم إرسال الملاحظات بنجاح!")
  }

  showInvoice(): void {
    this.subscriptions.push(
      this._requestService
        .GetQualificationInvoice(this.selectedRequestID as string)
        .subscribe((res) => {
          if (res && res.data) {
            this.openInvoiceViewDialog(res.data);
          }
        })
    );
  }

  private openInvoiceViewDialog(invoiceData: QualificationInvoiceData): void {
    const popupData: PopupData = {
      title: 'بيانات الفاتورة',
      component: QualificationInvoiceViewComponent,
      id: 'QualificationInvoiceViewComponent',
      buttons: [],
      data: {
        invoiceData: invoiceData,
      },
    };
    this._popupService.updatePopupData(popupData);
  }

  sendToFawtarahManually(): void {
    if (!this.selectedRequestID) return;
    this.subscriptions.push(
      this._requestService.SendToFawtarahManually(this.selectedRequestID).subscribe((res: boolean) => {
        if (res) {
          this._toastrService.success("تم إرسال الفاتورة بنجاح!");
          this.getSelectedRequest();
        } else {
          this._toastrService.error("فشل إرسال الفاتورة!");
        }
      })
    );
  }

  openReplyDialog(): void {
    // if (note?.id) {
    //   localStorage.setItem('suspensionNoteId', note.id);
    // } else {
    //   // Fallback: use first note from suspensionNotes or skip
    //   const firstNote = this.suspensionNotes[0];
    //   if (firstNote?.id) localStorage.setItem('suspensionNoteId', firstNote.id);
    // }
    const data: PopupData = {
      id: 'suspensionNoteReply',
      title: 'الرد على الملاحظات',
      buttons: [
        {
          icon: '',
          title: 'إلغاء',
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
        },
        {
          icon: '',
          title: 'ارسال',
          actionType: ButtonType.confirm,
          isVisable: true,
          isDisables: false,
        },
      ],
      component: SuspensionNoteReplyComponent,
    };
    this._popupService.updatePopupData(data);
  };

  getRemainingDaysText(days: number | null | undefined): string {
    if (days == null) {
      return '';
    }

    if (days === 0) {
      return 'لا أيام متبقية';
    }

    if (days === 1) {
      return 'يوم واحد';
    }

    if (days === 2) {
      return 'يومان';
    }

    if (days >= 3 && days <= 10) {
      return `${days} أيام`;
    }

    return `${days} يوماً`;
  }

  ngOnDestroy(): void {
    this._requestService.clearRequestFromLocalStorage();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
