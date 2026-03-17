import { GetExchangeDocumentListFilterRequest } from './../../models/exchange-documents-list-filter-request';
import { LicenseProjectExchangeDocumentsOnProjectPagingDto } from './../../models/exchange-documents-list-response';
import { Component, OnInit } from '@angular/core';
import {
  Pagination,
  pagination,
} from '../../../../../shared/models/pagination.model';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { Router } from '@angular/router';
import { PaginationService } from '../../../../../shared/services/pagination/pagination.service';
import { ExchangeDocumentService } from '../../services/exchange-document.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectExchangeDocumentStatusEnum } from '../../dataModels/license-project-exchange-document-paging-dto';
import { Configuration } from '../../../../../core/configurations/shared.config';
import { CustomerTypeEnum } from '../../models/search-exchange-document-list-response-dto';

@Component({
  selector: 'app-exchange-documents-list',
  templateUrl: './exchange-documents-list.component.html',
  styleUrls: ['./exchange-documents-list.component.scss'],
})
export class ExchangeDocumentsListComponent implements OnInit {
  licencseProjectId: string | null = '00000000-0000-0000-0000-000000000000';

  documentsList: Pagination<
    LicenseProjectExchangeDocumentsOnProjectPagingDto[]
  > = {} as Pagination<LicenseProjectExchangeDocumentsOnProjectPagingDto[]>;

  // Filter properties
  searchText: string = '';
  private searchSubject = new Subject<string>();
  subscriptions: Subscription[] = [];
  newPageNo: number = 1;
  showAddExchangeDocumentButton: boolean = false;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };

  statusMap: Record<LicenseProjectExchangeDocumentStatusEnum, string> = {
    [LicenseProjectExchangeDocumentStatusEnum.PendingApproval]: 'قيد الاعتماد',
    [LicenseProjectExchangeDocumentStatusEnum.Approved]: 'معتمد',
    [LicenseProjectExchangeDocumentStatusEnum.Rejected]: 'مرفوض',
    [LicenseProjectExchangeDocumentStatusEnum.IssuedDocument]:
      'تم إصدار وثيقة الصرف',
    [LicenseProjectExchangeDocumentStatusEnum.UnderEscrowAccountsReview]: 'قيد مراجعة إدارة حسابات الضمان',

  };

  getStatusClass(status: LicenseProjectExchangeDocumentStatusEnum | null) {
    return {
      orange:
        status === LicenseProjectExchangeDocumentStatusEnum.PendingApproval,
      green: status === LicenseProjectExchangeDocumentStatusEnum.Approved,
      red: status === LicenseProjectExchangeDocumentStatusEnum.Rejected,
      blue: status === LicenseProjectExchangeDocumentStatusEnum.IssuedDocument,
    };
  }

  constructor(
    private _router: Router,
    private _paginationService: PaginationService,
    private _exchangeDocumentService: ExchangeDocumentService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
  ) {}

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observeExchangeDocumentsList();
    this.watchPaginationActions();
    this.setupSearchDebounce();
  }

  private getLicenseProjectIdStorage(): void {
    this.licencseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  private setupSearchDebounce(): void {
    this.subscriptions.push(
      this.searchSubject
        .pipe(debounceTime(300), distinctUntilChanged())
        .subscribe(() => {
          this.applyFilters();
        }),
    );
  }

  observeExchangeDocumentsList(): void {
    const request: GetExchangeDocumentListFilterRequest = {
      pageIndex: this.pagintationData.currentPage,
      pageSize: this.pagintationData.pageSize,
      licenseProjectId: this.licencseProjectId as string,
      documentNumber:
        this.searchText && this.searchText.trim()
          ? this.searchText.trim()
          : null,
    };

    this.subscriptions.push(
      this._exchangeDocumentService
        .ExchangeDocumentsListOnProject(request)
        .subscribe(
          (
            res: Pagination<
              LicenseProjectExchangeDocumentsOnProjectPagingDto[]
            >,
          ) => {
            this.updateRequestList(
              res as Pagination<
                LicenseProjectExchangeDocumentsOnProjectPagingDto[]
              >,
            );
          },
        ),
    );

    this.subscriptions.push(
      this._exchangeDocumentService
        .CheckDelegatorPermission(this.licencseProjectId as string)
        .subscribe(
          (res) => {
            if (res.isDone && res.data) {
              this.showAddExchangeDocumentButton = true;
            }
          },
          (err) => {},
        ),
    );
  }

  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.observeExchangeDocumentsList();
  }

  private updateRequestList(
    TypeListView: Pagination<
      LicenseProjectExchangeDocumentsOnProjectPagingDto[]
    >,
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
  addExchangeDocument() {
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.addExchangeDocuments}`,
    ]);
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
  viewDetails(document: LicenseProjectExchangeDocumentsOnProjectPagingDto) {

    this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.exchangeDocumentsDetails}/${CustomerTypeEnum.DeveloperDelegator}/${document.id}`])
  }
}
