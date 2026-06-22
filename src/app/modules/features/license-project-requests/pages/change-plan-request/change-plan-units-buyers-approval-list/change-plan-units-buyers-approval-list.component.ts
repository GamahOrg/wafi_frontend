import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { pagination } from '../../../../../../shared/models/pagination.model';
import { ChangePlanApprovalService, UnitsBuyersChangePlanApprovalListResponseDto } from '../../../services/change-plan-approval.service';
import { Router } from '@angular/router';
import { PaginationService } from '../../../../../../shared/services/pagination/pagination.service';
import { ProjectRequestLocalStorageService } from '../../../services/project-request-local-storage.service';
import { UserDataService } from '../../../../../../core/services/user-data/user-data.service';
import { customerResponse } from '../../../../../../shared/models/customer.model';
import { Configuration } from '../../../../../../core/configurations/shared.config';

@Component({
  selector: 'app-change-plan-units-buyers-approval-list',
  templateUrl: './change-plan-units-buyers-approval-list.component.html',
  styleUrls: ['./change-plan-units-buyers-approval-list.component.scss'],
  providers: [PaginationService],
})
export class ChangePlanUnitsBuyersApprovalListComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  searchText: string = '';
  items: UnitsBuyersChangePlanApprovalListResponseDto[] = [];
  showCompletionColumns: boolean = true;
  nidnumber: string = '';
  facilityTypeCategory: number | undefined;
  paginationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  detailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanUnitsBuyersApprovalDetails}`;


  constructor(
    private _service: ChangePlanApprovalService,
    private _router: Router,
    private _paginationService: PaginationService,
    private _userDataService: UserDataService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService
  ) { }

  ngOnInit(): void {
    this.initCustomerData();
    this.watchPaginationActions();
    this.watchSearch();
  }
  private initCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        if (res) {
          console.log("customerResponse = ",res);
          this.nidnumber = res.nidnumber;
          if (this.nidnumber) {
            this.showCompletionColumns = true;
            this.loadData();
          }
          
        }
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
  loadData(): void {
   // this.nidnumber = "1013183239";
    this.subscriptions.push(
      this._service
        .getUnitsBuyersApprovalsList({
          searchText: this.searchText ,
          pageNumber: this.paginationData.currentPage,
          pageSize: this.paginationData.pageSize,
          nIDNumber: this.nidnumber ,
          
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
  private setPaginationData(pageSize: number, totalCount: number, pageCount: number): void {
    this.paginationData.pageSize = pageSize;
    this.paginationData.totalCount = totalCount;
    this.paginationData.pageCount = pageCount;
    this._paginationService.updatePaginationData(this.paginationData);
  }
  getApprovalStatusText(status: number | null | undefined): string {
    switch (status) {
      case 1:
        return 'قيد الانتظار';
      case 2:
        return 'موافق';
      case 3:
        return 'مرفوض';
      default:
        return '-';
    }
  }
  viewDetails(item: UnitsBuyersChangePlanApprovalListResponseDto): void {
    this._service.setSelectedApproval(item.licenseProjectRequestId, null, null, item.approvalStatus);
    this._router.navigate([this.detailsRoute]);
  }
  private searchSubject = new Subject<string>();
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
    this.searchSubject.complete();
  }
}
