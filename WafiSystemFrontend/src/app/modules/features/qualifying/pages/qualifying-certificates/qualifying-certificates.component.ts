import { Component, OnDestroy, OnInit } from '@angular/core';
import { QualificationCertificate } from '../../dataModels/qualification-certificate.model';
import { Subscription } from 'rxjs';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { QualificationCertificatesService } from '../../services/qualification-certificates/qualification-certificates.service';
import { RequestCodeEnum } from '../../dataModels/enum/request-code.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { RequestService } from '../../services/requests/request-service.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { QualificationType } from '../../dataModels/enum/qualification-request-type';

@Component({
  selector: 'app-qualifying-certificates',
  templateUrl: './qualifying-certificates.component.html',
  styleUrls: ['./qualifying-certificates.component.scss']
})

export class QualifyingCertificatesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  qualificationCertificates: QualificationCertificate[] = [];
  userData: customerResponse | null = null;
  requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.requestDetails}`;
  baseUrl = `${environment.baseURL}/`;
  cssStyle = '../../components/certificate/certificate.component.scss'
  public get RequestCodeEnum(): typeof RequestCodeEnum {
    return RequestCodeEnum
  }
  QualificationType = QualificationType;
  constructor(
    private _userDataService: UserDataService,
    private _qualificationCertificatesService: QualificationCertificatesService,
    private _requestService: RequestService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    
  }
  obseveCustomerData() {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (this.userData) {
            console.log("this.userData", this.userData)
            this.GetCertificatesByCustomerId();
          }
        })
    );
  }
  private GetCertificatesByCustomerId() {
    // this.qualificationCertificates = [{
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
    // },
    // {
    //   facilityName: "test2",
    //   qualificationRequestId: "test2",
    //   committeeDecisionDate: new Date(),
    //   committeeDecisionNumber: "test2",
    //   qualificationRequestType: "REM",

    //   certificateHTMLFile: "test2",
    //   certificateExpirationDate: new Date(),
    //   RequestCode: "test2",
    //   certificateNumber: "test2",
    //   certificateFile: "test2",
    // }, {
    //   facilityName: "test3",
    //   qualificationRequestId: "test3",
    //   committeeDecisionDate: new Date(),
    //   committeeDecisionNumber: "test3",
    //   qualificationRequestType: "REB",

    //   certificateHTMLFile: "test3",
    //   certificateExpirationDate: new Date(),
    //   RequestCode: "test3",
    //   certificateNumber: "test3",
    //   certificateFile: "test3",
    // }]
    this.subscriptions.push(
      this._qualificationCertificatesService.getCertificatesByCustomerId(this.userData?.id as string).subscribe((res: QualificationCertificate[] | null) => {
        console.log("getCertificatesByCustomerId", res);
        if (res && res.length > 0) {
          this.qualificationCertificates = res;
        }
      })
    )
  }
  public qualificationRequestType(qualificationRequestType: string): RequestCodeEnum {
    return RequestCodeEnum[qualificationRequestType as keyof typeof RequestCodeEnum]
  }
  public navigateToRequestDetails(qualificationRequestId: string): void {
    this.setSelectedRequestIdInLocalStorage(qualificationRequestId);
    this.routeToRequestDetails()
  }
  private routeToRequestDetails(): void {
    this._router.navigate([this.requestDetailsRoute]);
  }
  private setSelectedRequestIdInLocalStorage(qualificationRequestId: string): void {
    this._requestService.setSelectedRequestIdInLocalStorage(qualificationRequestId)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
