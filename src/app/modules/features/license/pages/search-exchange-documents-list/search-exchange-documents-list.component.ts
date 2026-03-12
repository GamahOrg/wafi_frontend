import { Component, OnInit } from '@angular/core';
import {
  Pagination,
  pagination,
} from '../../../../../shared/models/pagination.model';
import { ProjectListDto } from '../../models/project-list';
import { SearchExchangeDocumentListResponseDto } from '../../models/search-exchange-document-list-response-dto';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  forkJoin,
} from 'rxjs';
import { UserDataService } from '../../../../../core/services/user-data/user-data.service';
import { Router } from '@angular/router';
import { ProjectBasicDataService } from '../../services/licenseProjects/project-basic-data.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PaginationService } from '../../../../../shared/services/pagination/pagination.service';
import { CharteredAccountProjectService } from '../../services/chareted-account-project-service';
import { ExchangeDocumentService } from '../../services/exchange-document.service';
import { customerResponse } from '../../../../../shared/models/customer.model';
import { SearchExchangeDocumentListFilterDto } from '../../models/search-exchange-document-list-filter-dto';
import {
  LiceneProjectExchangeDocumentStatusDto,
  LicenseProjectExchangeDocumentStatusEnum,
} from '../../dataModels/license-project-exchange-document-paging-dto';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectExchangeDocumentsOnProjectPagingDto } from '../../models/exchange-documents-list-response';

@Component({
  selector: 'app-search-exchange-documents-list',
  templateUrl: './search-exchange-documents-list.component.html',
  styleUrls: ['./search-exchange-documents-list.component.scss'],
})
export class SearchExchangeDocumentsListComponent implements OnInit {
  documentsList: Pagination<SearchExchangeDocumentListResponseDto[]> =
    {} as Pagination<SearchExchangeDocumentListResponseDto[]>;
  statusFilterList?: LiceneProjectExchangeDocumentStatusDto[];

  statusFilter: LicenseProjectExchangeDocumentStatusEnum | null = null;

  LicenseProjectExchangeDocumentStatusEnum =
    LicenseProjectExchangeDocumentStatusEnum;

  // Filter properties
  searchText: string = '';
  private searchSubject = new Subject<string>();

  subscriptions: Subscription[] = [];
  facilityId: string | null = '';
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };

  constructor(
    private _userDataService: UserDataService,
    private _router: Router,
    private _projectBasicDataService: ProjectBasicDataService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _paginationService: PaginationService,
    private _exchangeDocumentService: ExchangeDocumentService,
  ) {}

  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeExchangeDocumentsList();
    this.loadComponentData();
    this.watchPaginationActions();
    this.setupSearchDebounce();
  }

  /**
   * Setup search debounce to avoid excessive API calls
   */
  private setupSearchDebounce(): void {
    this.subscriptions.push(
      this.searchSubject
        .pipe(debounceTime(300), distinctUntilChanged())
        .subscribe(() => {
          this.applyFilters();
        }),
    );
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.facilityId = res ? res.facilities[0].id : null;
          this.observeExchangeDocumentsList();
        }),
    );
  }
  loadComponentData(): void {
    const requests = [
      this._exchangeDocumentService.getLiceneProjectExchangeDocumentStatusList(),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.statusFilterList =
          results[0] as LiceneProjectExchangeDocumentStatusDto[];
      }
    });
    this.subscriptions.push(subscriptions);
  }
  observeExchangeDocumentsList(): void {
    const request: SearchExchangeDocumentListFilterDto = {
      pageIndex: this.pagintationData.currentPage,
      pageSize: this.pagintationData.pageSize,
      currentSelectedFacilityId: this.facilityId as string,
      searchFilter:
        this.searchText && this.searchText.trim()
          ? this.searchText.trim()
          : null,
      searchStatusId: this.statusFilter ?? undefined,
    };

    this.subscriptions.push(
      this._exchangeDocumentService
        .SearchExchangeDocumentList(request)
        .subscribe(
          (res: Pagination<SearchExchangeDocumentListResponseDto[]>) => {
            this.updateRequestList(
              res as Pagination<SearchExchangeDocumentListResponseDto[]>,
            );
          },
        ),
    );
  }

  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.observeExchangeDocumentsList();
  }

  private updateRequestList(
    TypeListView: Pagination<SearchExchangeDocumentListResponseDto[]>,
  ): void {
    this.documentsList = TypeListView;
    this.setPaginationData(
      this.documentsList.pageSize,
      this.documentsList.totalCount,
      this.documentsList.pageCount,
    );
  }
  private setPaginationData(
    pageSize: number,
    total: number,
    pageCount: number,
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
      }),
    );
  }
  private watchPaginationClicked(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.pagintationData.currentPage != nextPage) {
          this.loadNextPage(nextPage);
          this.pagintationData.currentPage = this.newPageNo;
        }
      }),
    );
  }

  /**
   * Handle search input change with debounce
   */
  onSearchChange(): void {
    this.searchSubject.next(this.searchText);
  }

  /**
   * Handle filter dropdown change
   */
  onFilterChange(): void {
    this.applyFilters();
  }

  /**
   * Apply filters and reload data
   */
  private applyFilters(): void {
    // Reset to first page when filters change
    this.pagintationData.currentPage = 1;
    this.observeExchangeDocumentsList();
  }

  getStatusClass(status: SearchExchangeDocumentListResponseDto) {
    switch (status.statusId) {
      case LicenseProjectExchangeDocumentStatusEnum.IssuedDocument:
        return 'green';
      case LicenseProjectExchangeDocumentStatusEnum.Rejected:
        return 'red';
      case LicenseProjectExchangeDocumentStatusEnum.Approved:
        return 'blue';
      case LicenseProjectExchangeDocumentStatusEnum.PendingApproval:
        return 'orange';

      default:
        return 'orange';
    }
  }
  viewDetails(document: SearchExchangeDocumentListResponseDto) {

    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.exchangeDocumentsDetails}/${document.customerType}/${document.id}`,
    ]);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
