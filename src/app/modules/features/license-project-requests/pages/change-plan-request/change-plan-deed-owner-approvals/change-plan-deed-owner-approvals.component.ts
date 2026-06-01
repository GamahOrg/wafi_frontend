import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { pagination } from 'src/app/shared/models/pagination.model';
import {
  ChangePlanApprovalListItemDto,
  ChangePlanApprovalService,
  FacilityTypeCategoryEnum,
} from '../../../services/change-plan-approval.service';
import { LicenseProjectRequestStatusEnum } from '../../../enums/license-project-request-status.enum';
import { ChangePlanDeedOwnerApprovalStatusEnum } from '../../../models/change-plan-deed-owner.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';

@Component({
  selector: 'app-change-plan-deed-owner-approvals',
  templateUrl: './change-plan-deed-owner-approvals.component.html',
  styleUrls: ['./change-plan-deed-owner-approvals.component.scss'],
  providers: [PaginationService],
})
export class ChangePlanDeedOwnerApprovalsComponent implements OnInit, OnDestroy {
  readonly StatusEnum = LicenseProjectRequestStatusEnum;
  readonly OwnerApprovalStatusEnum = ChangePlanDeedOwnerApprovalStatusEnum;
  subscriptions: Subscription[] = [];
  searchText: string = '';
  items: ChangePlanApprovalListItemDto[] = [];
  facilityId: string = '';
  paginationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };

  private searchSubject = new Subject<string>();

  detailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanApprovalDetails}`;

  constructor(
    private _service: ChangePlanApprovalService,
    private _router: Router,
    private _paginationService: PaginationService,
    private _userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.initFacilityData();
    this.watchPaginationActions();
    this.watchSearch();
  }

  private initFacilityData(): void {
    const res = this._userDataService.getCustomerDataFromLocalStorage();
    if (res?.facilities?.length) {
      this.facilityId = res.facilities[0].id;
    }
    this.loadData();
  }

  loadData(): void {
    this.subscriptions.push(
      this._service
        .getApprovalsList({
          searchText: this.searchText || undefined,
          pageNumber: this.paginationData.currentPage,
          pageSize: this.paginationData.pageSize,
          facilityId: this.facilityId || undefined,
          facilityTypeCategory: FacilityTypeCategoryEnum.OwnerDeed,
        })
        .subscribe((res) => {
          if (res.isDone && res.data) {
            this.items = res.data.results;
            this.setPaginationData(
              res.data.pageSize,
              res.data.totalCount,
              res.data.pageCount
            );
          }
        })
    );
  }

  onSearchKeyup(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchText = value;
    this.searchSubject.next(value);
  }

  viewDetails(id: string): void {
    this._service.setSelectedApproval(id, null); // deed owner mode
    this._router.navigate([this.detailsRoute]);
  }

  private watchSearch(): void {
    this.subscriptions.push(
      this.searchSubject.pipe(
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe(() => {
        this.paginationData.currentPage = 1;
        this.loadData();
      })
    );
  }

  private watchPaginationActions(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.paginationData.currentPage !== nextPage) {
          this.paginationData.currentPage = nextPage;
          this.loadData();
        }
      })
    );
  }

  private setPaginationData(pageSize: number, totalCount: number, pageCount: number): void {
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
