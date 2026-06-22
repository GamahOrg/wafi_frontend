import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { CreateDraftLicenseProjectRequestDto, CreateInitialLicenseProjectChangePlanRequestDto, LicenseProjectRequestTypeDetailsDto } from '../../../license/models/lincense-request-project-dto';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';

@Component({
  selector: 'app-request-type-requirements',
  templateUrl: './request-type-requirements.component.html',
  styleUrls: ['./request-type-requirements.component.scss'],
})
export class RequestTypeRequirementsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  requestTypeId: number = 0;
  projectId: string = '';
  facilityId: string = '';
  customerId: string = '';
  isFromRequirementsApproval: boolean = false;
  requestTypeDetails: LicenseProjectRequestTypeDetailsDto | null = null;
licenseProjectType: string = '';
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _licenseRequestProjectService: LincenseRequestProjectService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _userDataService: UserDataService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res) => {
        this.facilityId = res?.facilities[0]?.id || '';
        this.customerId = res?.facilities[0]?.customersId || '';
      })
    );

    this._route.queryParams.subscribe((params) => {
      this.requestTypeId = +params['requestTypeId'];
      this.projectId = params['projectId'] || '';
      this.isFromRequirementsApproval = params['isFromRequirementsApproval'] === 'true';

      if (this.requestTypeId) {
        this.loadRequestTypeDetails();
        
      }
      if(this.projectId){
        this.GetLicenseProjectType();
      }
    });
  }

  loadRequestTypeDetails(): void {
    this.subscriptions.push(
      this._licenseRequestProjectService
        .getRequestTypeDetails(this.requestTypeId)
        .subscribe((res) => {
          if (res) {
            this.requestTypeDetails = res;
          }
        })
    );
  }

  GetLicenseProjectType(): void {
    this.subscriptions.push(
      this._licenseRequestProjectService.GetLicenseProjectType(this.projectId).subscribe((res) => {
        this.licenseProjectType = res;
      })
    );
  }

  onStartService(): void {
    const payload: CreateDraftLicenseProjectRequestDto = {
      licenseProjectId: this.projectId,
      facilityId: this.facilityId,
      licenseProjectRequestType: this.requestTypeId,
      isFromRequirementsApproval: this.isFromRequirementsApproval,
    };

    this.subscriptions.push(
      this._licenseRequestProjectService.createDraftRequest(payload).subscribe((requestId) => {
        this._licenseRequestProjectService.setSelectedActiveProjectRequestIdInLocalStorage(requestId);
        this.navigateToCreateRequest(this.requestTypeId, requestId);
      })
    );
  }
  private navigateToCreateRequest(requestType: number, requestId: string): void {
    let requestSummaryRoute = '';

    switch (requestType) {
      case LicenseProjectRequestTypeEnum.CancelLicense:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createcancelLicense}`;
        break;
      case LicenseProjectRequestTypeEnum.ReActivateLicense:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createreactivaiteLicense}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangePlan:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createLicenseProjectChangePlanRequest}/${requestId}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeEngineering:
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createchangeengineer}/${requestId}`;
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
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createChangeLicenseProjectAccountantRequest}`;
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
        this._projectRequestLocalStorageService.setSelectedSelectedLicenseRequestTypeInLocalStorage(
          requestType.toString()
        );
        requestSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.createRequestTemplate}`;
        break;
    }
    this._router.navigate([requestSummaryRoute]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
