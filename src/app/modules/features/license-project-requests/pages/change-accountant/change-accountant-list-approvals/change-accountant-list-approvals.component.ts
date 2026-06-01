import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { pagination } from 'src/app/shared/models/pagination.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { ChangeAccountantRequestsListItemDto, ChangeLicenseProjectAccountantRequestService } from '../../../services/change-license-project-accountant-request.service';
import { ProjectRequestLocalStorageService } from '../../../services/project-request-local-storage.service';

@Component({
  selector: 'app-change-accountant-list-approvals',
  templateUrl: './change-accountant-list-approvals.component.html',
  styleUrls: ['./change-accountant-list-approvals.component.scss'],
  providers: [PaginationService],
})
export class ChangeAccountantListApprovalsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  searchText: string = '';
  items: ChangeAccountantRequestsListItemDto[] = [];
  facilityId: string = '';
  paginationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };

  private searchSubject = new Subject<string>();

  detailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changeAccountantApprovalDetails}`;

  constructor(
    private _service: ChangeLicenseProjectAccountantRequestService,
    private _router: Router,
    private _paginationService: PaginationService,
    private _userDataService: UserDataService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService
  ) {}

  ngOnInit(): void {
    this.initFacilityData();
    this.watchPaginationActions();
    this.watchSearch();
  }

  private initFacilityData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        if (res?.facilities?.length) {
          this.facilityId = res.facilities[0].id;
          this.loadData();
        }
      })
    );
  }

  loadData(): void {
    this.subscriptions.push(
      this._service
        .getRequestsListForNewAccountant({
          searchText: this.searchText || undefined,
          pageNumber: this.paginationData.currentPage,
          pageSize: this.paginationData.pageSize,
          facilityId: this.facilityId || undefined,
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

  viewDetails(item: ChangeAccountantRequestsListItemDto): void {
    this._projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(
      item.licenseProjectRequestId
    );
    this._router.navigate([this.detailsRoute]);
  }

  private watchSearch(): void {
    this.subscriptions.push(
      this.searchSubject
        .pipe(debounceTime(400), distinctUntilChanged())
        .subscribe(() => {
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
