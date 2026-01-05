import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { LicenseProjectBuyerStatusEnum } from '../../../real-estate-contributions-license/models/license-project-buyer-list-paging-dto';
import { LicenseProjectBuyerService } from '../../services/license-project-buyer.service';
import { pagination, Pagination } from 'src/app/shared/models/pagination.model';
import {
  LicenseProjectBuyerContractFilterDto,
  LicenseProjectBuyerContractListDto,
} from '../../../real-estate-contributions-license/models/license-project-buyer-contracts-dto';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { RealStateDeveloperService } from '../../services/real-state-developer.service';
import { ContractStatusDto } from '../../models/real-state-developer-dto';

@Component({
  selector: 'app-contract-documentation-list',
  templateUrl: './contract-documentation-list.component.html',
  styleUrls: ['./contract-documentation-list.component.scss'],
})
export class ContractDocumentationListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  Math = Math;
  contractStatus: ContractStatusDto[] = []
  newPageNo: number = 1;
  buyers: Pagination<LicenseProjectBuyerContractListDto[]> = {} as Pagination<
    LicenseProjectBuyerContractListDto[]
  >;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  private searchSubject = new Subject<string>();
  searchTerm = '';
  //statusFilter: LicenseProjectBuyerStatusEnum = LicenseProjectBuyerStatusEnum.All;
  statusFilter: any = '';

  private destroy$ = new Subject<void>();

  filter: LicenseProjectBuyerContractFilterDto = {
    pageNumber: 1,
    pageSize: 10,
    isDescending: true,
    sortBy: 'CreatedOn',
  };

  statusEnum = LicenseProjectBuyerStatusEnum;

  statusColors: { [key: number]: string } = {
    [LicenseProjectBuyerStatusEnum.All]: 'status-other',
    [LicenseProjectBuyerStatusEnum.New]: 'status-pending',
    [LicenseProjectBuyerStatusEnum.PendingCancellation]: 'status-pending',
    [LicenseProjectBuyerStatusEnum.Cerified]: 'status-approved',
    [LicenseProjectBuyerStatusEnum.Refused]: 'status-rejected',
    [LicenseProjectBuyerStatusEnum.Cancelled]: 'status-rejected',
  };

  // statusOptions = [
  //   { value: 0, label: 'الكل' },
  //   { value: LicenseProjectBuyerStatusEnum.New, label: 'جديد' },
  //   { value: LicenseProjectBuyerStatusEnum.Cerified, label: 'تم توثيق العقد' },
  //   // {
  //   //   value: LicenseProjectBuyerStatusEnum.RejectCertified,
  //   //   label: 'تم الغاء العقد',
  //   // },
  //   {
  //     value: LicenseProjectBuyerStatusEnum.Cancelled,
  //     label: 'تم رفض توثيق العقد',
  //   },
  //   // { value: LicenseProjectBuyerStatusEnum.Recovery, label: 'استرداد' },
  // ];

  constructor(
    private fb: FormBuilder,
    private _paginationService: PaginationService,
    private _sharedService: SharedLicenseProjectService,
    private _realEstateService: RealStateDeveloperService,
    private buyerService: LicenseProjectBuyerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getContractStatus();
    this.loadBuyers();
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
      this.loadBuyers();
    });
  }
  onStatusFilterChange(): void {
    this.pagintationData.currentPage = 1;
    this.loadBuyers();
  }
  getContractStatus(): void {
    this._realEstateService.getContractStatus().subscribe((res) => {
      this.contractStatus = res.data as ContractStatusDto[]
      // Add "All" option at the beginning
      this.contractStatus.unshift({ id: 0, name: 'الكل' } as ContractStatusDto);
    })
  }
  loadBuyers(): void {
    const params: LicenseProjectBuyerContractFilterDto = {
      pageNumber: this.pagintationData.currentPage,
      pageSize: this.pagintationData.pageSize,
      searchText: this.searchTerm,
      isDescending: true,
    };
    // Only add statusId if it's not "All" (0)
    if (+this.statusFilter !== 0 && this.statusFilter !== null) {
      params.statusId = this.statusFilter;
    }
    this.subscriptions.push(
      this.buyerService.getFilterContracts(params).subscribe((res) => {
        this.updateRequestList(
          res as Pagination<LicenseProjectBuyerContractListDto[]>
        );
      })
    );
  }
  onSearchChange(searchTerm: string): void {
    this.searchSubject.next(searchTerm);
  }
  private updateRequestList(
    TypeListView: Pagination<LicenseProjectBuyerContractListDto[]>
  ): void {
    this.buyers = TypeListView;
    this.setPaginationData(
      this.buyers.pageSize,
      this.buyers.totalCount,
      this.buyers.pageCount
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
    this.loadBuyers();
  }
  getStatusClass(statusId: number): string {
    return this.statusColors[statusId] || 'secondary';
  }

  showDetails(contract: LicenseProjectBuyerContractListDto): void {
    this._sharedService.setLicenseProjectIdInLocalStorage(contract.licenseProjectId)
    this._realEstateService.setContractId(contract.id)
    if (contract.statusId == +LicenseProjectBuyerStatusEnum.New) {

      this.router.navigate(['/wafi/license/contract-details', contract.unitCodeId]);
    } else {
      
      this.router.navigate(['/wafi/license/contract-readonly', contract.id]);
    }
  }
}
