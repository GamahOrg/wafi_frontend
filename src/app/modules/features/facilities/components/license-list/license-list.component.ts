import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { internalStatusId, licenseRequest } from '../../../license/models/license-requests';
import { ExternalStatus } from '../../../license/models/external-status.model';
import { Router } from '@angular/router';
import { LicenseRequestHeaderService } from '../../../license/services/license-request-header.service';
import { SharedLicenseProjectService } from '../../../license/services/sharedLicenseProject/shared-license-project.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { environment } from 'src/environments/environment';
import { LicenseInternalStatus } from '../../../license/enums/license-internal-status';
import { LicenseRequestTypeTypeCodeEnum } from '../../../license/enums/license-requestType-typeCode.model';

@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.scss'],
  providers: [PaginationService]
})
export class LicenseListComponent implements OnInit, OnDestroy{
  baseUrl = `${environment.baseURL}/`;
  currentSortOrder: 'asc' | 'desc' | null = null;
  currentSortColumn: string = '';
  subscriptions: Subscription[] = [];
  showFilter: boolean = false;
  requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseTypes}/${Configuration.pages.license.lincenseSummary}`;
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
      this._requestService.getLicensesRequests(this.pagintationData.currentPage, this.pagintationData.pageSize,this.searchText,this.currentSortColumn , this.currentSortOrder)
      .subscribe((res: Pagination<licenseRequest[]>) => {
        this.updateRequestList(res as Pagination<licenseRequest[]>)
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
    this.getLicensesRequests();
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
    this._sharedLicenseProjectService.setQualificationTypeCodeInLocalStorage(request.licenseRequestType.typeCode)
    if(request.requestCode)
      if(request.licenseRequestType?.typeCode === LicenseRequestTypeTypeCodeEnum.Fawria){
        this._router.navigateByUrl(`${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.fawriaLicenseDetails}`);
      }
      else
        this._router.navigateByUrl(`${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseDetails}`)
    else
      this._router.navigate([this.requestDetailsRoute]);
  }
  public navigateToCreateRequest(): void {
    this._router.navigateByUrl(`${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseTypes}`);
  }

  setSelectedRequestIdInLocalStorage() {
    if(this.selectedRequest.requestCode)
      if(this.selectedRequest.licenseRequestType?.typeCode === LicenseRequestTypeTypeCodeEnum.Fawria){
        this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(this.selectedRequest.id)
        this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(this.selectedRequest?.licenseProjectId);
      }
      else
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

   getStatusClass(statusId: number) {
      switch (statusId) {
        case LicenseInternalStatus.Draft:
        case LicenseInternalStatus.UnderStudy:
          return 'black';
        case LicenseInternalStatus.OwnerAgreementsApproved:
        case LicenseInternalStatus.PartyAgreementsApproved:
        case LicenseInternalStatus.InvoicePaid:
        case LicenseInternalStatus.EscrowAccountOpened:
        case LicenseInternalStatus.RequestCertifiedAndFinallicenseIssued:
          return 'green';
        case LicenseInternalStatus.PendingApproval:
        case LicenseInternalStatus.WaitingApproval:
          return 'orange';
        case LicenseInternalStatus.RequestCanceled:
        case LicenseInternalStatus.RequestRejected:
          return 'red';
        case LicenseInternalStatus.ProcessingNotes:
          return 'blue';
      }
      return '';
    }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}

