import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { RequestNotes } from '../../dataModels/request-notes.model';
import { RequestService } from '../../services/requests/request-service.service';
import { QualificationCertificate } from '../../dataModels/qualification-certificate.model';
import { environment } from 'src/environments/environment';
import { RequestCodeEnum } from '../../dataModels/enum/request-code.model';
import { QualificationCertificatesService } from '../../services/qualification-certificates/qualification-certificates.service';

@Component({
  selector: 'app-result-of-request-study',
  templateUrl: './result-of-request-study.component.html',
  styleUrls: ['./result-of-request-study.component.scss']
})
export class ResultOfRequestStudyComponent {
  subscriptions: Subscription[] = [];
  selectedRequestID: string | null = "";
  requestNotes: RequestNotes[] | null = null
  qualificationRequestCertificate: QualificationCertificate | null = null;
  baseUrl = `${environment.baseURL}/`;

  public get RequestCodeEnum(): typeof RequestCodeEnum {
    return RequestCodeEnum
  }

  constructor(private _requestService: RequestService,
    // private _requestDetailsService: RequestDetailsService
    private _qualificationCertificatesService: QualificationCertificatesService,
  ) { }

  ngOnInit(): void {
    this.getSelectedRequestIdFromLocalStorage();
    this.observeDataIsUpdated()
  }

  observeDataIsUpdated() {
    this.subscriptions.push(
      this._requestService.dataIsUpdate.subscribe(res => {
        this.GetRequestNotesByRequestId();
      })
    )
  }

  getSelectedRequestIdFromLocalStorage() {
    this.selectedRequestID = this._requestService.getSelectedRequestIdFromLocalStorage()
    if (this.selectedRequestID) {
      this.GetRequestNotesByRequestId();
      this.GetCertificatesByRequestId();
    }
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
