import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { internalStatusId, licenseRequest } from '../../models/license-requests';
import { Router } from '@angular/router';
import { LicenseRequestHeaderService } from '../../services/license-request-header.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';


@Component({
  selector: 'app-lincense-list',
  templateUrl: './lincense-list.component.html',
  styleUrls: ['./lincense-list.component.scss']
})
export class LincenseListComponent implements OnInit, OnDestroy{
  subscriptions: Subscription[] = [];
  currentSortOrder: 'asc' | 'desc'| null = null;
  currentSortColumn: string = '';
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
  searchText:string='';
  requestId?:string;
  // Pagination
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  // reqList: licenseRequest[] = [] as licenseRequest[];
  reqList:  Pagination<licenseRequest[]> = {} as Pagination<licenseRequest[]>;
  selectedRequest: licenseRequest = {} as licenseRequest;

  get externalStatusId() {
    return internalStatusId;
  }

  constructor(
    private _requestService: LicenseRequestHeaderService,
    private _router: Router,
    private _sharedLicenseProjectService:SharedLicenseProjectService,
    private _paginationService: PaginationService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService,

  ) {
    this.maxDate.setDate(this.maxDate.getDate() + 5);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }

  ngOnInit() {
    this.getLicensesRequests();
    this.watchPaginationActions();
    this.observePopupEvents();
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

  getSearchText(event: Event) {
    this.searchText=(event.target as HTMLInputElement).value;

  }
  search()
  {
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

  confirmDelete(id :any) {
    this.requestId=id;
    let deleteConfirmationObj = {
      staticMessage: "هل انت متأكد من حذف الطلب",
      dynamicMessage: "",
      secondeStaticMessage: '',
    }
    this._popupService.updateConfirmationPopupData(deleteConfirmationObj);
  }
  public delete(): void {
    this.subscriptions.push(
      this._requestService.Delete(this.requestId as string).subscribe((res:CoreResponseDTO<any>) => {
        if (res.isDone) {
          this._toastrNotificationService.showSuccess("تم الحذف");
          this.closeDialog();
          this.getLicensesRequests();
        }
        else
          this._toastrNotificationService.showError(" لم يتم حذف ");


      })
    )
  }
  private closeDialog(): void {
    this._popupService.dismissDialog()
  }
  observePopupEvents(): void {
    
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        this._popupService.dismissDialog();
      })
    )
  }
 
  private observeconfirmAction() {
    
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.delete();
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
