import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { pagination } from 'src/app/shared/models/pagination.model';
import {
  ChangePlanApprovalListItemDto,
  ChangePlanApprovalService,
  FacilityTypeCategoryEnum,
  GetPartiesApprovalsListDto,
} from '../../../services/change-plan-approval.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { QualificationType } from 'src/app/modules/features/qualifying/dataModels/enum/qualification-request-type';
import { ProjectRequestLocalStorageService } from '../../../services/project-request-local-storage.service';
import { LicenseProjectRequestTypeEnum } from '../../../enums/license-project-request-type.enum';
import { LicenseProjectRequestStatusEnum } from '../../../enums/license-project-request-status.enum';
import { LicenseProjectPartiesStatusEnum } from '../../../models/change-engineering-request';

@Component({
  selector: 'app-change-plan-list-approvals',
  templateUrl: './change-plan-list-approvals.component.html',
  styleUrls: ['./change-plan-list-approvals.component.scss'],
  providers: [PaginationService],
})
export class ChangePlanListApprovalsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  searchText: string = '';
  items: GetPartiesApprovalsListDto[] = [];
  readonly CompletionStatusEnum = LicenseProjectPartiesStatusEnum;
  readonly RequestStatusEnum = LicenseProjectRequestStatusEnum;
  showCompletionColumns: boolean = true;
  facilityId: string = '';
  facilityTypeCategory: number | undefined;
  paginationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  requestDetailsRoute: string = '';
  selectedStatus: LicenseProjectRequestStatusEnum | null = null;
  statusOptions: { id: LicenseProjectRequestStatusEnum; name: string }[] = [];
  private searchSubject = new Subject<string>();

  detailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanApprovalDetails}`;
  fullSummaryRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanFullSummary}`;

  constructor(
    private _service: ChangePlanApprovalService,
    private _router: Router,
    private _paginationService: PaginationService,
    private _userDataService: UserDataService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
  ) { }

  ngOnInit(): void {
    this.initFacilityData();
    this.watchPaginationActions();
    this.watchSearch();
    this.loadRequestStatuses();
  }

  private loadRequestStatuses(): void {
    this.subscriptions.push(
      this._service.getRequestStatuses().subscribe((statuses) => {
        this.statusOptions = statuses;
      }),
    );
  }

  getStatusPillClass(statusId: number): string {
    const approvedStatuses = [7, 10, 11];
    const rejectedStatuses = [8, 13, 18, 19, 20, 21, 23, 26, 28];
    const draftStatuses = [0];

    if (approvedStatuses.includes(statusId)) return 'green';
    if (rejectedStatuses.includes(statusId)) return 'red';
    if (draftStatuses.includes(statusId)) return 'black';
    return 'orange';
  }

  private initFacilityData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          if (res?.facilities?.length) {
            this.facilityId = res.facilities[0].id;
            this._userDataService
              .getFacilityQualificationTypeCode(this.facilityId)
              .subscribe((typeCode: string | null) => {
                if (
                  typeCode ===
                  QualificationType.engineeringConsultantQualificationRequest
                ) {
                  this.facilityTypeCategory =
                    FacilityTypeCategoryEnum.Engineering;
                } else if (
                  typeCode === QualificationType.accountantQualificationRequest
                ) {
                  this.facilityTypeCategory =
                    FacilityTypeCategoryEnum.Accountant;
                }
                this.showCompletionColumns = true;
                this.loadData();
              });
          }
        }),
    );
  }

  loadData(): void {
    this.subscriptions.push(
      this._service
        .getPartiesApprovalsList({
          searchText: this.searchText || undefined,
          pageNumber: this.paginationData.currentPage,
          pageSize: this.paginationData.pageSize,
          facilityId: this.facilityId || undefined,
          facilityTypeCategory: this.facilityTypeCategory,
          externalStatusId: this.selectedStatus ?? undefined,
        })
        .subscribe((res) => {
          if (res.isDone && res.data) {
            this.items = res.data.results;
            this.setPaginationData(
              res.data.pageSize,
              res.data.totalCount,
              res.data.pageCount,
            );
          }
        }),
    );
  }

  onSearchKeyup(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchText = value;
    this.searchSubject.next(value);
  }

  onStatusFilterChange(): void {
    this.paginationData.currentPage = 1;
    this.loadData();
  }

  processNotes(item: ChangePlanApprovalListItemDto): void {
    this._service.setSelectedApproval(
      item.id,
      this.facilityTypeCategory ?? null,
      this.facilityId,
    );
    this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(
      item.licenseProjectRequestId,
    );
    this._projectRequestLocalStorageService.setFacilityIdInLocalStorage(
      this.facilityId,
    );
    this._router.navigate([this.fullSummaryRoute]);
  }

  viewDetails(item: GetPartiesApprovalsListDto): void {

    this._service.setSelectedApproval(
      item.id,
      this.facilityTypeCategory ?? null,
      this.facilityId,
    );
    //  this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(
    //   item.licenseProjectRequestId
    // );
    this.redirectRequestSummary(item.id, item.requestTypeId);
  }

  redirectRequestSummary(id: string, requestType: number) {
    switch (requestType) {
      case LicenseProjectRequestTypeEnum.ChangePlan:
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanApprovalDetails}`;
        break;

      case LicenseProjectRequestTypeEnum.ChangeAccountant:
        this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(
          id,
        );
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changeAccountantApprovalDetails}`;
        break;

      case LicenseProjectRequestTypeEnum.ChangeEngineering:

        this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(
          id,
        );

        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changeEngineeringPlanDetails}`;
        break;
    }

    this._router.navigate([this.requestDetailsRoute]);
  }
  private watchSearch(): void {
    this.subscriptions.push(
      this.searchSubject
        .pipe(debounceTime(400), distinctUntilChanged())
        .subscribe(() => {
          this.paginationData.currentPage = 1;
          this.loadData();
        }),
    );
  }

  private watchPaginationActions(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.paginationData.currentPage !== nextPage) {
          this.paginationData.currentPage = nextPage;
          this.loadData();
        }
      }),
    );
  }

  private setPaginationData(
    pageSize: number,
    totalCount: number,
    pageCount: number,
  ): void {
    this.paginationData.pageSize = pageSize;
    this.paginationData.totalCount = totalCount;
    this.paginationData.pageCount = pageCount;
    this._paginationService.updatePaginationData(this.paginationData);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
    this.searchSubject.complete();
  }
}
