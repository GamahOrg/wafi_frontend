import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CharteredAccountApprovalDataService } from '../../../services/chartered-account-approval-data.service';
import { LicenseNatureTypeEnum } from '../../../enums/license-nature-type';
import { LicenseProjectConstructionLicenseTypeEnum } from '../../../enums/license-project-construction-license-type-enum';

@Component({
  selector: 'app-chartered-account-approval-basic-data-tab',
  templateUrl: './chartered-account-approval-basic-data-tab.component.html',
  styleUrls: ['./chartered-account-approval-basic-data-tab.component.scss']
})
export class CharteredAccountApprovalBasicDataTabComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseNatureId: LicenseNatureTypeEnum = 1;
  licenseNatureTypeEnum = LicenseNatureTypeEnum;
  licenseProjectConstructionLicenseTypeEnum = LicenseProjectConstructionLicenseTypeEnum;
  approvalDetails: any = null;
  isLoading: boolean = false;
  deeds: any[] = [];
  isHasBaladyConstruction: boolean = false;

  constructor(
    private _charteredAccountApprovalDataService: CharteredAccountApprovalDataService
  ) {}

  ngOnInit(): void {
    debugger
    this.subscriptions.push(
      this._charteredAccountApprovalDataService.isLoading$.subscribe(loading => {
        this.isLoading = loading;
      })
    );

    this.subscriptions.push(
      this._charteredAccountApprovalDataService.approvalDetails$.subscribe(data => {
        if (data) {
          debugger
          this.approvalDetails = data;
          this.licenseNatureId = data?.licenseProject?.licenseProjectNatureTypeId;          
           this.deeds = data?.licenseProjectDeed || [];
          this.isHasBaladyConstruction = this.deeds.some(deed =>
            deed?.licenseProjectConstructionLicense?.licenseProjectConstructionLicenseTypeId === LicenseProjectConstructionLicenseTypeEnum.Balady
          );
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
