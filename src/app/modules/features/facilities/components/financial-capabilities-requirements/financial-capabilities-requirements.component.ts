import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { financialCapabilityResponseBE, financialCapabilityResponseFE } from 'src/app/modules/features/facilities/dataModels/financial-capability.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { environment } from 'src/environments/environment';
import { FinancialCapabilitiesService } from '../../services/financialCapabilities/financial-capabilities.service';
import { FinancialCapabilitiesRequirementsFormComponent } from '../financial-capabilities-requirements-form/financial-capabilities-requirements-form.component';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
import { FacilityProfileService } from '../../services/facilityProfile/facility-profile.service';

@Component({
  selector: 'app-financial-capabilities-requirements',
  templateUrl: './financial-capabilities-requirements.component.html',
  styleUrls: ['./financial-capabilities-requirements.component.scss']
})
export class FinancialCapabilitiesRequirementsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  financialCapability: financialCapabilityResponseFE = new financialCapabilityResponseFE(new financialCapabilityResponseBE());
  userData: customerResponse | null = null;
  baseUrl = `${environment.baseURL}/`;
  isCRLessThanOneYear: boolean = false;
  canUpdate: boolean = true;

  constructor(private financialCapabilitiesService: FinancialCapabilitiesService,
    private _userDataService: UserDataService, private _popupService: PopupService,
    private _filemangementService: FileManagementService,
    private _facilityProfileService: FacilityProfileService) { }

  ngOnInit() {
    this.obseveCustomerData();
    this.observeFinancialCapabilityObj();
    this.subscriptions.push(
      this._facilityProfileService.getAvailabilityToUpdate().subscribe((res: boolean) => {
        this.canUpdate = res;
      })
    );
    // this.getFinancialCapabilities();
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        if (this.userData) {
          this.getFinancialCapabilities();
          this.calculateCRAge();
        }
      })
    )
  }

  calculateCRAge(): void {
    if (this.userData && this.userData.facilities.length > 0) {
      const crStartDate = new Date(this.userData.facilities[0].commercialRegisterStartDate);
      const now = new Date();
      const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
      this.isCRLessThanOneYear = crStartDate > oneYearAgo;
    }
  }

  deletFile(id: string) {
    this._filemangementService.DeletFile(id).subscribe(res => {
      if (res.isDone) {
        this.getFinancialCapabilities();
      }
    })
  }

  getFinancialCapabilities() {
    this.subscriptions.push(
      this.financialCapabilitiesService.GetByFacilityId(this.userData?.facilities[0].id as string).subscribe(res => {
        if (res) {

          // this.financialCapability = res;
          this.financialCapabilitiesService.SetFinancialCapabilityObj(res);
        }
      })
    )
  }

  openDialog(): void {
    let Data = {
      title: "متطلبات القدرات المالية ",
      component: FinancialCapabilitiesRequirementsFormComponent
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
    // dialogRef.afterClosed().subscribe(_=> this.observeFinancialCapabilityObj());
  }

  observeFinancialCapabilityObj(): void {
    this.subscriptions.push(
      this.financialCapabilitiesService.getFinancialCapabilityObj().subscribe((res) => {
        this.financialCapability = res;
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
