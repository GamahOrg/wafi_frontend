import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { RequestNotes } from '../../dataModels/request-notes.model';
import { RequestService } from '../../services/requests/request-service.service';
import { RequestDetails } from '../../dataModels/request-details.model';
import { QualificationCertificate } from '../../dataModels/qualification-certificate.model';
import { environment } from 'src/environments/environment';
import { RequestCodeEnum } from '../../dataModels/enum/request-code.model';
import { QualificationCertificatesService } from '../../services/qualification-certificates/qualification-certificates.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { SuspensionNoteReplyComponent } from '../suspension-note-reply/suspension-note-reply.component';
import { internalStatusId } from '../../dataModels/enum/request-status';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';

@Component({
  selector: 'app-result-of-request-study',
  templateUrl: './result-of-request-study.component.html',
  styleUrls: ['./result-of-request-study.component.scss']
})
export class ResultOfRequestStudyComponent {
  subscriptions: Subscription[] = [];
  selectedRequestID: string | null = "";
  requestNotes: RequestNotes[] | null = null;
  suspensionNotes: any[] = [];
  strikeFiles: any[] = [];
  selectedRequest: RequestDetails | null = null;
  qualificationRequestCertificate: QualificationCertificate | null = null;
  baseUrl = `${environment.baseURL}/`;

  get internalStatusId() { return internalStatusId; }
  get isQualificationSuspended(): boolean {
    return this.selectedRequest?.internalStatusId === internalStatusId.QualificationSuspended;
  }

  public get RequestCodeEnum(): typeof RequestCodeEnum {
    return RequestCodeEnum;
  }

  constructor(
    private _requestService: RequestService,
    private _qualificationCertificatesService: QualificationCertificatesService,
    private _popupService: PopupService,
  ) { }

  ngOnInit(): void {
    this.getSelectedRequestIdFromLocalStorage();
    this.observeDataIsUpdated();
    this.observeSelectedRequest();
  }

  observeSelectedRequest(): void {
    this.subscriptions.push(
      this._requestService.seclectRequest$.subscribe((res: RequestDetails[] | null) => {
        if (res && res.length > 0) {
          this.selectedRequest = res[0];
        }
      })
    );
  }

  observeDataIsUpdated() {
    this.subscriptions.push(
      this._requestService.dataIsUpdate.subscribe(_ => {
        this.GetRequestNotesByRequestId();
        this.GetSuspensionNotes();
        this.GetStrikeFiles();
      })
    );
  }

  getSelectedRequestIdFromLocalStorage() {
    this.selectedRequestID = this._requestService.getSelectedRequestIdFromLocalStorage();
    if (this.selectedRequestID) {
      this.GetRequestNotesByRequestId();
      this.GetCertificatesByRequestId();
      this.GetSuspensionNotes();
      this.GetStrikeFiles();
    }
  }

  private GetSuspensionNotes(): void {
    if (!this.selectedRequestID) return;
    this.subscriptions.push(
      this._requestService.getSuspensionNotesByRequestId(this.selectedRequestID).subscribe(res => {
        if (res?.isDone) this.suspensionNotes = res.data ?? [];
      })
    );
  }

  private GetStrikeFiles(): void {
    if (!this.selectedRequestID) return;
    this.subscriptions.push(
      this._requestService.getStrikeFilesByRequestId(this.selectedRequestID).subscribe(res => {
        if (res?.isDone) this.strikeFiles = res.data ?? [];
      })
    );
  }

  getRemainingDays(suspensionStartDate: Date): number {
    const start = new Date(suspensionStartDate);
    const deadline = new Date(start);
    deadline.setDate(deadline.getDate() + 30);
    const now = new Date();
    const diff = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  }

  openReplyDialog(note: any): void {
    if (note?.id) {
      localStorage.setItem('suspensionNoteId', note.id);
    } else {
      // Fallback: use first note from suspensionNotes or skip
      const firstNote = this.suspensionNotes[0];
      if (firstNote?.id) localStorage.setItem('suspensionNoteId', firstNote.id);
    }
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

  private GetRequestNotesByRequestId(): void {
    this.subscriptions.push(
      this._requestService.GetRequestNotesByRequestId(this.selectedRequestID as string).subscribe((res: RequestNotes[] | null) => {
        this.requestNotes = res;
      })
    )
    // this.requestNotes=[{
    //   createdOn: new Date(),
    //   employeeName: "test",
    //   departmentName: "test",
    //   notes: "test",
    //   isFinished: true,
    //   finishedOn: new Date(),
    //   isWithNotes: true,
    //   id: "test"
    // }]
  }

  private GetCertificatesByRequestId() {

    this.subscriptions.push(
      this._qualificationCertificatesService.getCertificateByRequestId(this.selectedRequestID as string).subscribe((res: QualificationCertificate | null) => {
        console.log("getCertificateByRequestId", res);
        if (res) {
          this.qualificationRequestCertificate = res;
        }
      })
    )
    // this.qualificationRequestCertificate = {
    //   facilityName: "test1",
    //   qualificationRequestId: "test1",
    //   committeeDecisionDate: new Date(),
    //   committeeDecisionNumber: "test1",
    //   qualificationRequestType: "RED01",

    //   certificateHTMLFile: "test1",
    //   certificateExpirationDate: new Date(),
    //   RequestCode: "test1",
    //   certificateNumber: "test1",
    //   certificateFile: "test1",
    // }
  }

  public qualificationRequestType(qualificationRequestType: string): RequestCodeEnum {
    return RequestCodeEnum[qualificationRequestType as keyof typeof RequestCodeEnum]
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
