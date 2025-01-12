import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import {Request,internalStatusId } from '../../../real-estate-contributions-qualifying/dataModels/request-list.model';
import { RequestService } from '../../../real-estate-contributions-qualifying/services/requests/request-service.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-qualification-request-list',
  templateUrl: './qualification-request-list.component.html',
  styleUrls: ['./qualification-request-list.component.scss'],
  providers:[PaginationService]
})
export class QualificationRequestListComponent implements OnInit {
  subscriptions: Subscription[] = [];
  showFilter: boolean = false;
  currentSortOrder: 'asc' | 'desc' | null = null;
  currentSortColumn: string = '';

  requestDetailsRoute = `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsQualifying}/${Configuration.pages.realEstateContributionsQualifying.requestDetails}`;
 @HostListener('document:click', ['$event']) onDocumentClick() {
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
  searchText:string='';
  reqList: Pagination<Request[]> = {} as Pagination<Request[]>;
  selectedRequest: Request = {} as Request;
   get externalStatusId() {
    return internalStatusId;
  }

  constructor(
    private _requestService: RequestService,
    private _router: Router,
    private _paginationService: PaginationService,
  ) {
    this.maxDate.setDate(this.maxDate.getDate() + 5);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }

  ngOnInit() {
    this.getQualificationRequests();
    this.watchPaginationActions();
  }

  getQualificationRequests() {
    this.subscriptions.push(
      this._requestService.getQualificationRequests(this.pagintationData.currentPage, this.pagintationData.pageSize,this.searchText,this.currentSortColumn,this.currentSortOrder)
      .subscribe((res: Pagination<Request[]>) => {
        this.updateRequestList(res as Pagination<Request[]>)
      })
    )
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
    console.log(this.selectedRequest);
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
