import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Subscription } from 'rxjs';
import { LicenseRequestTypeService } from '../../services/license-request-type.service';
import { SysLicenseRequestTypeGroupingDto } from '../../models/sys-license-request-type-grouping-dto';
@Component({
  selector: 'app-lincense-types',
  templateUrl: './lincense-types.component.html',
  styleUrls: ['./lincense-types.component.scss'],
})
export class LincenseTypesComponent {
  requestSummeryLink: string = `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsLicense}/${Configuration.pages.realEstateContributionslicense.createLincense}`;
  subscriptions: Subscription[] = [];
  SysLicenseRequestTypes: any[] = [];
  SysLicenseRequestTypeGrouping: SysLicenseRequestTypeGroupingDto = new SysLicenseRequestTypeGroupingDto();
  constructor(
    private router: Router,
    private _licenseRequestTypeService: LicenseRequestTypeService
  ) {}

  currentLicense: number = 0;
  showLicensesByIndex(index: number) {
    this.currentLicense = index;
  }

  navogateToCreateRequest(Code: string): void {
    this.router.navigate([this.requestSummeryLink, Code]);
  }
  ngOnInit(): void {
    this.getAllSysLicenseRequestTypes();
  }

  getAllSysLicenseRequestTypes(): void {
    
    this.subscriptions.push(
      this._licenseRequestTypeService
        .GetAllGroupingrealestatecontributionsLicense()
        .subscribe((Types) => {
          this.SysLicenseRequestTypeGrouping = Types;
          
        })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
