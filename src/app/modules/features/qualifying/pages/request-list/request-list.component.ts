import { Component, HostListener, OnInit } from '@angular/core';
import { Request, internalStatusId } from '../../dataModels/request-list.model';

import { Configuration } from 'src/app/core/configurations/shared.config';
import { RequestService } from '../../services/requests/request-service.service';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss'],
})
export class RequestListComponent implements OnInit {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  searchText: string = '';
  showFilter: boolean = false;
  currentSortOrder: 'asc' | 'desc' | null = null;
  currentSortColumn: string = '';
  requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.requestDetails}`;
  newRequestRoute = `${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.requests}`;
  @HostListener('document:click') onDocumentClick() {
    this.showFilter = false;
  }

  bsConfig = {
    containerClass: 'theme-default',
    isAnimated: true,
    showWeekNumbers: false,
    displayOneMonthRange: true,
    showPreviousMonth: false,
    customTodayClass: 'today',
  };
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();

  // Pagination
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  reqList: Pagination<Request[]> = {} as Pagination<Request[]>;
  selectedRequest: Request = {} as Request;



  constructor(
    private _requestService: RequestService,
    private _router: Router,
    private _paginationService: PaginationService) {
    this.maxDate.setDate(this.maxDate.getDate() + 5);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }

  ngOnInit() {
    this.getQualificationRequests();
    this.watchPaginationActions();
  }

  addNewRequest() {
    this._router.navigate([this.newRequestRoute]);
  }
  getStatusClass(statusId: number): string {

    if (
      statusId === internalStatusId.RequestApproved
    ) {
      return 'green';
    }

    if (
      statusId === internalStatusId.Expired ||
      statusId === internalStatusId.RequestRemoved ||
      statusId === internalStatusId.RequestCanceled ||
      statusId === internalStatusId.RequestRejected
    ) {
      return 'red';
    }

    if (
      statusId === internalStatusId.QualificationSuspended ||
      statusId === internalStatusId.UnderStudy ||
      statusId === internalStatusId.SendingNotes ||
      statusId === internalStatusId.ProcessingNotes ||
      statusId === internalStatusId.UnderStudyAfterProcessingNotes
    ) {
      return 'orange';
    }

    return '';
  }
  getSearchText(event: Event) {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  sortData(column: string) {
    if (this.currentSortColumn === column) {
      this.currentSortOrder = this.currentSortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSortColumn = column;
      this.currentSortOrder = 'asc';
    }
    this.getQualificationRequests();
  }

  search() {
    this.getQualificationRequests();
  }

  getQualificationRequests() {
    this.subscriptions.push(
      this._requestService.getQualificationRequests(this.pagintationData.currentPage, this.pagintationData.pageSize, this.searchText, this.currentSortColumn, this.currentSortOrder)
        .subscribe((res: Pagination<Request[]>) => {
          this.updateRequestList(res as Pagination<Request[]>)
        })
    )
  }

  //private methods
  private updateRequestList(TypeListView: Pagination<Request[]>): void {
    this.reqList = TypeListView;
    this.setPaginationData(
      this.reqList.pageSize,
      this.reqList.totalCount,
      this.reqList.pageCount
    );
  }

  private setPaginationData(pageSize: number, total: number, pageCount: number): void {
    this.pagintationData.pageCount = pageCount
    this.pagintationData.pageSize = pageSize
    this.pagintationData.totalCount = total
    this._paginationService.updatePaginationData(this.pagintationData);
  }

  navigateToDetails(request: Request) {
    this.selectedRequest = request;
    this.setSelectedRequestIdInLocalStorage();
    this.routeToRequestDetails()
  }

  routeToRequestDetails(): void {
    this._router.navigate([this.requestDetailsRoute]);
  }

  setSelectedRequestIdInLocalStorage() {
    this._requestService.setSelectedRequestIdInLocalStorage(this.selectedRequest.id)
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
    )
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
    this.getQualificationRequests()
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
