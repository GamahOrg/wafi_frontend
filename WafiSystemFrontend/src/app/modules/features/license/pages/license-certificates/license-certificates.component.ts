import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseCertificateService } from '../../services/license-certificate.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { LicenseCertificateDto } from '../../models/license-certification.model';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseRequestTypeTypeCodeEnum } from '../../enums/license-requestType-typeCode.model';

@Component({
  selector: 'app-license-certificates',
  templateUrl: './license-certificates.component.html',
  styleUrls: ['./license-certificates.component.scss']
})
export class LicenseCertificatesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  userData: customerResponse | null = null;
  licenseRequestTypeTypeCode = LicenseRequestTypeTypeCodeEnum
  licenseCertificates: LicenseCertificateDto[] = [];
  
  requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseDetails}`;
  constructor(private _licenseCertificateService: LicenseCertificateService,
    private _router: Router,
    private _sharedLicenseProjectService:SharedLicenseProjectService,
    private _userDataService: UserDataService,) {

  }
  ngOnInit(): void {
    this.obseveCustomerData();
  }
  obseveCustomerData() {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          console.log(res);
          
          this.userData = res;
          console.log("this.userData", this.userData)
          if (this.userData) {
            this.GetCertificatesByCustomerId();
          }
        })
    );
  }


  private GetCertificatesByCustomerId() {  
    this.subscriptions.push(
      this._licenseCertificateService.GetLicenseCertificates(this.userData?.facilities[0].id as string).subscribe((res: LicenseCertificateDto[] | null) => {
        console.log("getCertificatesByCustomerId", res);
        if (res && res.length > 0) {
          this.licenseCertificates = res;
        }
      })
    )
  }


  public navigateToRequestDetails(licenseRequestId: string): void {
    this.setSelectedRequestIdInLocalStorage(licenseRequestId);
    this.routeToRequestDetails()
  }
  private routeToRequestDetails(): void {
    this._router.navigate([this.requestDetailsRoute]);
  }
  private setSelectedRequestIdInLocalStorage(licenseRequestId: string): void {
    this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(licenseRequestId);
    }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
