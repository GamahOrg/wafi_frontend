import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { LicenseRequest } from '../../../models/license-request-dto';
import { EmployeeRegistrationDto } from '../../../models/employee-registration-dto';
import { LicenseInternalStatus } from '../../../enums/license-internal-status';
import { LicenseRequestListService } from '../../../services/license-request-list-service/license-request-list-service.service';

@Component({
  selector: 'app-employee-under-studing-license-requests',
  templateUrl: './employee-under-studing-license-requests.component.html',
  styleUrls: ['./employee-under-studing-license-requests.component.scss'],
})
export class EmployeeUnderStudingLicenseRequestsComponent implements OnInit {
  subscriptions: Subscription[] = [];
  requestList: Pagination<LicenseRequest[]> = {} as Pagination<
    LicenseRequest[]
  >;
  selectedRequest: LicenseRequest = {} as LicenseRequest;
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  requests?: LicenseRequest[];
  searchText: string = '';
  userData = new EmployeeRegistrationDto();
  showRequestAutomaticDistribution: boolean = false;

  get internalStatusId() {
    return LicenseInternalStatus;
  }
  constructor(
    private _requestListService: LicenseRequestListService,
    private paginationService: PaginationService,
    private _router: Router,
    private _toastrService: ToastrService
  ) {}

  ngOnInit(): void {
  this.watchPaginationActions();
    this.getQualificationRequests();
  }
  getSearchText(event: Event) {
    this.searchText = (event.target as HTMLInputElement).value;
  }
  search() {
    this.getQualificationRequests();
  }

  getQualificationRequests(): void {
    this.subscriptions.push(
      this._requestListService
        .getEmployeeUnderStudingLicenseRequests(
          this.pagintationData.currentPage,
          this.pagintationData.pageSize,
          this.searchText
        )
        .subscribe((res) => {
          this.requests = res.results;
          this.updateRequestList(res as Pagination<LicenseRequest[]>);
        })
    );
  }
  watchPaginationActions(): void {
    this.watchPagechanged();
    this.watchPaginationClicked();
  }
  private watchPagechanged(): void {
    this.subscriptions.push(
      this.paginationService.getPageChanged().subscribe((pageNo) => {
        this.newPageNo = pageNo;
      })
    );
  }
  private watchPaginationClicked(): void {
    this.subscriptions.push(
      this.paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.pagintationData.currentPage != nextPage) {
          this.loadNextPage(nextPage);
          this.pagintationData.currentPage = this.newPageNo;
        }
      })
    );
  }

  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;

    this.getQualificationRequests();
  }

  //private methods
  private updateRequestList(
    loadVehicleTypeListView: Pagination<LicenseRequest[]>
  ): void {
    this.requestList = loadVehicleTypeListView;
    this.setPaginationData(
      this.requestList.pageSize,
      this.requestList.totalCount,
      this.requestList.pageCount
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
    this.paginationService.updatePaginationData(this.pagintationData);
  }
  navigateTorequestDetails(request: LicenseRequest) {
    this.selectedRequest = request;
    this.setSelectedRequestIdInLocalStorage();
    this.routeToRequestDetails();
  }
  routeToRequestDetails(): void {
    this._router.navigateByUrl(
      `${Configuration.modules.license}/${Configuration.pages.license.lincenseDetails}`
    );
  }
  setSelectedRequestIdInLocalStorage() {
    this._requestListService.setSelectedRequestIdInLocalStorage(
      this.selectedRequest.id
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
