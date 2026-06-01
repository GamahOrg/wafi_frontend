import { Component, OnDestroy, OnInit, Type } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { LicenseProjectRequestDto } from '../../models/request-header-details';
import { ChangeAccountantDataTabComponent } from '../change-accountant-data-tab/change-accountant-data-tab.component';
import { ChangeEngineeringRequestTabComponent } from '../change-engineering-request-tab/change-engineering-request-tab.component';
import { AccountKeeperRequestDetailsComponent } from '../account-keeper-request-details/account-keeper-request-details.component';
import { ChangePartiesAgreementDetailsComponent } from '../change-parties-agreement-details/change-parties-agreement-details.component';
import { TransferAmountDetailsComponent } from '../transfer-amount-details/transfer-amount-details.component';
import { ObjectionToSupervisionAndFollowupCostsDetailsComponent } from '../objection-to-supervision-and-followup-costs-details/objection-to-supervision-and-followup-costs-details.component';
import { LiftingTheMarkOnThePropertyTitleDeedDetailsComponent } from '../lifting-the-mark-on-the-property-title-deed-details/lifting-the-mark-on-the-property-title-deed-details.component';
import { ChangeLicenseProjectSpaceOrUnitsDetailsComponent } from '../change-license-project-space-or-units-details/change-license-project-space-or-units-details.component';
import { ChangeLicenseProjectBuyerOrTenantContractDetailsComponent } from '../change-license-project-buyer-or-tenant-contract-details/change-license-project-buyer-or-tenant-contract-details.component';
import { ChangeProjectNameDetailsComponent } from '../change-project-name-details/change-project-name-details.component';
import { AddingDelegatorDetailsComponent } from '../adding-delegator-details/adding-delegator-details.component';
import { RemovingDelegatorDetailsComponent } from '../removing-delegator-details/removing-delegator-details.component';
import { WithdrawSurplusBeforeProjectEndDetailsComponent } from '../withdraw-surplus-before-project-end-details/withdraw-surplus-before-project-end-details.component';
import { ChangeOrAddLicenseProjectUnitModelDetailsComponent } from '../change-or-add-license-project-unit-model-details/change-or-add-license-project-unit-model-details.component';
import { ChangePlanDataTabComponent } from '../change-plan-data-tab/change-plan-data-tab.component';

@Component({
  selector: 'app-request-data-tab',
  templateUrl: './request-data-tab.component.html',
  styleUrls: ['./request-data-tab.component.scss'],
})
export class RequestDataTabComponent implements OnInit, OnDestroy {
  activeComponent: Type<any> | null = null;
  subscriptions: Subscription[] = [];

  private readonly componentMap: Partial<Record<LicenseProjectRequestTypeEnum, Type<any>>> = {
    [LicenseProjectRequestTypeEnum.ChangePlan]: ChangePlanDataTabComponent,
    [LicenseProjectRequestTypeEnum.ChangeAccountant]: ChangeAccountantDataTabComponent,
    [LicenseProjectRequestTypeEnum.ChangeEngineering]: ChangeEngineeringRequestTabComponent,
    [LicenseProjectRequestTypeEnum.ChangeAccountKeeper]: AccountKeeperRequestDetailsComponent,
    [LicenseProjectRequestTypeEnum.ChangePartiesAgreement]: ChangePartiesAgreementDetailsComponent,
    [LicenseProjectRequestTypeEnum.TransferAmountsBetweenSubAccountsInEscrowAccount]: TransferAmountDetailsComponent,
    [LicenseProjectRequestTypeEnum.ObjectionToSupervisionAndFollowUpCosts]: ObjectionToSupervisionAndFollowupCostsDetailsComponent,
    [LicenseProjectRequestTypeEnum.LiftingTheMarkOnThePropertyTitleDeed]: LiftingTheMarkOnThePropertyTitleDeedDetailsComponent,
    [LicenseProjectRequestTypeEnum.IncreaseOrDecreaseUnitsNumberOrProjectArea]: ChangeLicenseProjectSpaceOrUnitsDetailsComponent,
    [LicenseProjectRequestTypeEnum.ChangeApprovedBuyerOrTenantContractsOfProject]: ChangeLicenseProjectBuyerOrTenantContractDetailsComponent,
    [LicenseProjectRequestTypeEnum.ChangeProjectName]: ChangeProjectNameDetailsComponent,
    [LicenseProjectRequestTypeEnum.AddingDelegator]: AddingDelegatorDetailsComponent,
    [LicenseProjectRequestTypeEnum.RemovingDelegator]: RemovingDelegatorDetailsComponent,
    [LicenseProjectRequestTypeEnum.WithdrawSurplusBeforeProjectEnd]: WithdrawSurplusBeforeProjectEndDetailsComponent,
    [LicenseProjectRequestTypeEnum.ChangeOrAddLicenseProjectUnitModel]: ChangeOrAddLicenseProjectUnitModelDetailsComponent,
  };

  constructor(
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
  ) {}

  ngOnInit(): void {
    const requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (requestId) {
      this.subscriptions.push(
        this._projectLicenseServiceDetailsService.getRequestHeaderDetails(requestId).subscribe((res: LicenseProjectRequestDto | null) => {
          if (res) {
            this.activeComponent = this.componentMap[res.licenseProjectRequestTypeId] ?? null;
          }
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
