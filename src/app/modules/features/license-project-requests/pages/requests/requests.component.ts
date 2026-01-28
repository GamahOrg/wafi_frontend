import { Component, OnInit } from '@angular/core';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import { LicenseRequestTypes } from '../../../license/models/lincense-request-project-dto';
import { Router } from '@angular/router';
import { finalize, takeUntil, type Subscription } from 'rxjs';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { SharedLicenseProjectService } from '../../../license/services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectService } from '../../services/license-project.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {
  subscriptions: Subscription[] = [];
  licenseProjectId: string = '';
  requestTypes: LicenseRequestTypes[] = [];
  isValid: boolean = false;
  constructor(
    private router: Router,
    private projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private sharedLocalStorage: SharedLicenseProjectService,
    private licenseProjectService: LicenseProjectService
  ) {}

  ngOnInit() {
    this.getLicenseIdFromLocalStorage();
    this.getRequestTypes();
  }
  getLicenseIdFromLocalStorage(): void {
    // this.licenseProjectId =
    //   this.sharedLocalStorage.getLicenseProjectIdStorage() as string;

    //   if(this.licenseProjectId)
    //   {
    //     this.validateLicenseProject()
    //   } 
  }

  validateLicenseProject() {
    this.licenseProjectService
      .validateProjectForContractCreation(this.licenseProjectId)
      .pipe()
      .subscribe({
        next: (response) => {
          if (response.isDone) {
            this.isValid = true;
          } else {
            this.isValid = false;
          }
        },
      });
  }

  getRequestTypes() {
    this.subscriptions.push(
      this.projectLicenseServiceDetailsService
        .getLicenseRequestTypes()
        .subscribe((res) => {
          if (res) {
            this.requestTypes = res;
          }
        })
    );
  }

  public navigateToCreateRequest(requestType: number): void {
    let requestSummaryRoute = '';

    switch (requestType) {
      case LicenseProjectRequestTypeEnum.CancelLicense:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createcancelLicense}`;
        break;
      case LicenseProjectRequestTypeEnum.ReActivateLicense:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createreactivaiteLicense}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangePlan:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createchangePlanRequest}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeEngineering:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createchangeengineer}`;
        break;
      case LicenseProjectRequestTypeEnum.IncreaseOrDecreaseUnitsNumberOrProjectArea:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createchangespaceorunits}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeApprovedBuyerOrTenantContractsOfProject:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createchangebuyerortenantcontract}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeProjectName:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createchangeprojectname}`;
        break;
      case LicenseProjectRequestTypeEnum.AddingDelegator:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createaddingdelegator}`;
        break;
      case LicenseProjectRequestTypeEnum.RemovingDelegator:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createremovingdelegator}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeOrAddLicenseProjectUnitModel:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createchangeoraddunitmodel}`;
        break;
      case LicenseProjectRequestTypeEnum.WithdrawSurplusBeforeProjectEnd:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createwithdrawsurplusbeforeprojectend}`;
        break;

      case LicenseProjectRequestTypeEnum.ChangeAccountant:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createCharteredAccountantRequest}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeAccountKeeper:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createAccountKeeperRequest}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangePartiesAgreement:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createChangePartiesAgreementRequest}`;
        break;
      case LicenseProjectRequestTypeEnum.TransferAmountsBetweenSubAccountsInEscrowAccount:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createTransferAmountsBetweenSubaccountsInEscrowAccount}`;
        break;
      case LicenseProjectRequestTypeEnum.ObjectionToSupervisionAndFollowUpCosts:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createobjectionToSupervisionAndFollowupCosts}`;
        break;
      case LicenseProjectRequestTypeEnum.LiftingTheMarkOnThePropertyTitleDeed:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createLiftingTheMarkOnThePropertyTitleDeedRequest}`;
        break;
      default:
        this.projectRequestLocalStorageService.setSelectedSelectedLicenseRequestTypeInLocalStorage(
          requestType.toString()
        );
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createRequestTemplate}`;
        break;
  
      }
    this.router.navigate([requestSummaryRoute]);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
