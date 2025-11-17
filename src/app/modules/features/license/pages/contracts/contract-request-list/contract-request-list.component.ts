import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { pagination, Pagination } from 'src/app/shared/models/pagination.model';
import {
  LicenseProjectBuyerCancellationRequestDto,
  LicenseProjectBuyerCancellationRequestFilterDto,
  CancelRequestStatusEnum
} from '../../../models/real-state-developer-dto';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { LicenseProjectBuyerCancellationRequestService } from '../../../services/license-project-buyer-cancellation-request.service';
import  { RealStateDeveloperService } from '../../../services/real-state-developer.service';

@Component({
  selector: 'app-contract-request-list',
  templateUrl: './contract-request-list.component.html',
  styleUrls: ['./contract-request-list.component.scss']
})
export class ContractRequestListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  Math = Math;
  newPageNo: number = 1;
  requests: Pagination<LicenseProjectBuyerCancellationRequestDto[]> = {} as Pagination<
    LicenseProjectBuyerCancellationRequestDto[]
  >;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  private searchSubject = new Subject<string>();
  searchTerm = '';
  statusFilter?: CancelRequestStatusEnum;

  private destroy$ = new Subject<void>();

  filter: LicenseProjectBuyerCancellationRequestFilterDto = {
    pageNumber: 1,
    pageSize: 10,
  };

  statusEnum = CancelRequestStatusEnum;

  statusColors: { [key: number]: string } = {
    [CancelRequestStatusEnum.None]: 'status-other',
    [CancelRequestStatusEnum.Pending]: 'status-other',
    [CancelRequestStatusEnum.Approved]: 'status-sold',
    [CancelRequestStatusEnum.Rejected]: 'status-available',
  };

  statusOptions = [
    { value: undefined, label: 'الكل' },
    { value: CancelRequestStatusEnum.Pending, label: 'قيد الانتظار' },
    { value: CancelRequestStatusEnum.Approved, label: 'تم الموافقة' },
    { value: CancelRequestStatusEnum.Rejected, label: 'تم الرفض' },
  ];

  constructor(
    private _paginationService: PaginationService,
    private realEstateService: RealStateDeveloperService,
    private cancellationRequestService: LicenseProjectBuyerCancellationRequestService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadRequests();
    this.watchPaginationActions();
    this.setupSearch();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setupSearch(): void {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(searchTerm => {
      this.searchTerm = searchTerm;
      this.pagintationData.currentPage = 1;
      this.loadRequests();
    });
  }

  onStatusFilterChange(): void {
    this.pagintationData.currentPage = 1;
    this.loadRequests();
  }

  loadRequests(): void {
    const params: LicenseProjectBuyerCancellationRequestFilterDto = {
      pageNumber: this.pagintationData.currentPage,
      pageSize: this.pagintationData.pageSize,
      searchText: this.searchTerm || undefined,
      statusId: this.statusFilter,
    };

    this.subscriptions.push(
      this.cancellationRequestService.getPagedList(params).subscribe((res) => {
        if (res.data) {
          this.updateRequestList(res.data);
        }
      })
    );
  }
  onSearchChange(searchTerm: string): void {
    this.searchSubject.next(searchTerm);
  }

  private updateRequestList(
    data: Pagination<LicenseProjectBuyerCancellationRequestDto[]>
  ): void {
    this.requests = data;
    this.setPaginationData(
      this.requests.pageSize,
      this.requests.totalCount,
      this.requests.pageCount
    );
  }

  private setPaginationData(
    pageSize: number,
    total: number,
    pageCount: number
  ): void {
    this.pagintationData.pageCount = pageCount;
    this.pagintationData.pageSize = pageSize;
    this.pagintationData.totalCount = total;
    this._paginationService.updatePaginationData(this.pagintationData);
  }

  watchPaginationActions(): void {
    this.watchPagechanged();
    this.watchPaginationClicked();
  }

  private watchPagechanged(): void {
    this.subscriptions.push(
      this._paginationService.getPageChanged().subscribe((pageNo) => {
        this.newPageNo = pageNo;
      })
    );
  }

  private watchPaginationClicked(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.pagintationData.currentPage != nextPage) {
          this.loadNextPage(nextPage);
          this.pagintationData.currentPage = this.newPageNo;
        }
      })
    );
  }

  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.loadRequests();
  }

  getStatusClass(statusId: number | null): string {
    return statusId ? (this.statusColors[statusId] || 'status-other') : 'status-other';
  }

  showDetails(request: LicenseProjectBuyerCancellationRequestDto): void {
     this.realEstateService.setContractId(request.licenseProjectBuyerId);
     this.realEstateService.setContractRequesId(request.id.toString());
    // Navigate to request details page
    this.router.navigate(['/wafi/license/contract-request-details', request.licenseProjectBuyerId]);
  }
}
