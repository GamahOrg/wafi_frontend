import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { internalStatusId, licenseRequest } from '../../../real-estate-contributions-license/models/license-requests';
import { ExternalStatus } from '../../../real-estate-contributions-license/models/external-status.model';
import { LicenseRequestHeaderService } from '../../../real-estate-contributions-license/services/license-request-header.service';
import { Router } from '@angular/router';
import { SharedLicenseProjectService } from '../../../real-estate-contributions-license/services/sharedLicenseProject/shared-license-project.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';

@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.scss']
})
export class LicenseListComponent implements OnInit, OnDestroy{
  subscriptions: Subscription[] = [];
  showFilter: boolean = false;
  requestDetailsRoute = `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsLicense}/${Configuration.pages.realEstateContributionslicense.lincenseSummary}`;
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
  currentSortOrder: 'asc' | 'desc'| null = null;
  currentSortColumn: string = '';
  // Pagination
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  searchText:string='';
  // reqList: licenseRequest[] = [] as licenseRequest[];
  reqList:  Pagination<licenseRequest[]> = {} as Pagination<licenseRequest[]>;
  selectedRequest: licenseRequest = {} as licenseRequest;
  get internalStatusId() {
    return internalStatusId;
  }
  get externalStatusId() {
    return ExternalStatus;
  }
  constructor(
    private _requestService: LicenseRequestHeaderService,
    private _router: Router,
    private _sharedLicenseProjectService:SharedLicenseProjectService,
    private _paginationService: PaginationService,
  ) {
    this.maxDate.setDate(this.maxDate.getDate() + 5);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }
  sortData(column: string) {
    if (this.currentSortColumn === column) {
      this.currentSortOrder = this.currentSortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSortColumn = column;
      this.currentSortOrder = 'asc';
    }
    this.getLicensesRequests();
  }
  ngOnInit() {
    this.getLicensesRequests();
    this.watchPaginationActions();
  }

  getLicensesRequests() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getLicensesRequests(
    //       this.pagintationData.currentPage,
    //       this.pagintationData.pageSize
    //     )
    //     .subscribe((res) => {

    //      if(res.data) this.reqList = res.data.results;
    //     })
    // )
    this.subscriptions.push(
      this._requestService.getLicensesRequests(this.pagintationData.currentPage, this.pagintationData.pageSize,this.searchText,this.currentSortColumn,this.currentSortOrder)
      .subscribe((res: Pagination<licenseRequest[]>) => {
        this.updateRequestList(res as Pagination<licenseRequest[]>)
      })
    )
  }
  private updateRequestList(TypeListView: Pagination<licenseRequest[]>): void {
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
  public navigateToDetails(request: licenseRequest) {
    this.selectedRequest = request;
    this.setSelectedRequestIdInLocalStorage();
    this.routeToRequestDetails(request)
  }

  routeToRequestDetails(request :licenseRequest): void {
    if(request.requestCode)
      this._router.navigateByUrl(`${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsLicense}/${Configuration.pages.realEstateContributionslicense.lincenseDetails}`)
    else
      this._router.navigate([this.requestDetailsRoute]);
  }
  public navigateToCreateRequest(): void {
    this._router.navigateByUrl(`${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsLicense}/${Configuration.pages.realEstateContributionslicense.lincenseTypes}`);
  }

  setSelectedRequestIdInLocalStorage() {
    if(this.selectedRequest.requestCode)
      this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(this.selectedRequest.id)
    else
      this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(this.selectedRequest.licenseProjectId)
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

    this.getLicensesRequests()
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
