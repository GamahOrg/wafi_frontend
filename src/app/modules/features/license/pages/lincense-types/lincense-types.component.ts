import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Subscription } from 'rxjs';
import { LicenseRequestTypeService } from '../../services/license-request-type.service';
import { SysLicenseRequestTypeGroupingDto } from '../../models/sys-license-request-type-grouping-dto';
import { LicenseProjectFawriaDeveloperService } from '../../services/license-project-fawria-developer.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from '../../models/employee-registration-dto';
@Component({
  selector: 'app-lincense-types',
  templateUrl: './lincense-types.component.html',
  styleUrls: ['./lincense-types.component.scss'],
})
export class LincenseTypesComponent {
  requestSummeryLink: string = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.createLincense}`;
  subscriptions: Subscription[] = [];
  SysLicenseRequestTypes: any[] = [];
  SysLicenseRequestTypeGrouping: SysLicenseRequestTypeGroupingDto =
    new SysLicenseRequestTypeGroupingDto();
  constructor(
    private router: Router,
    private _licenseRequestTypeService: LicenseRequestTypeService,
    private _licenseProjectFawriaDeveloperService: LicenseProjectFawriaDeveloperService,
    private _userDataService: UserDataService
  ) {}

  currentLicense: number = 0;
  showLicensesByIndex(index: number) {
    this.currentLicense = index;
  }

  navogateToCreateRequest(Code: string): void {
    this.router.navigate([this.requestSummeryLink, Code]);
  }
  
  ngOnInit(): void {
    this.getCustomerData();
  }

  userData: customerResponse | null = null;
  isFawriaLicenseAllowFlag: boolean = false;
  getCustomerData() {
    
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (
            this.userData &&
            this.userData.facilities &&
            this.userData.facilities.length > 0
          )
            this.IsFawriaLicenseAllow(this.userData.facilities[0].id);
        })
    );
  }

  IsFawriaLicenseAllow(facilityId: string) {
    this.subscriptions.push(
      this._licenseProjectFawriaDeveloperService
        .IsFawriaLicenseAllow(facilityId)
        .subscribe((res) => {
          this.isFawriaLicenseAllowFlag = res;
          this.getAllSysLicenseRequestTypes();
        })
    );
  }

  getAllSysLicenseRequestTypes(): void {
    this.subscriptions.push(
      this._licenseRequestTypeService
        .GetAllGroupingLicense()
        .subscribe((Types) => {
          this.SysLicenseRequestTypeGrouping = Types;
          if (!this.isFawriaLicenseAllowFlag) {
            this.SysLicenseRequestTypeGrouping.sale =
              this.SysLicenseRequestTypeGrouping.sale.filter(
                (type) => type.typeCode !== 'FSRSU'
              );
          }
        })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
