import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import {
  internalStatusId,
  licenseRequest,
} from '../../models/license-requests';
import { Router } from '@angular/router';
import { LicenseRequestHeaderService } from '../../services/license-request-header.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { ExternalStatus } from '../../models/external-status.model';
import { environment } from 'src/environments/environment';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseInternalStatus } from '../../enums/license-internal-status';
import { LicenseRequestTypeTypeCodeEnum } from '../../enums/license-requestType-typeCode.model';

@Component({
  selector: 'app-lincense-list',
  templateUrl: './lincense-list.component.html',
  styleUrls: ['./lincense-list.component.scss'],
  providers: [PaginationService],
})
export class LincenseListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  currentSortOrder: 'asc' | 'desc' | null = null;
  currentSortColumn: string = '';
  showFilter: boolean = false;
  requestStatusEnum = ExternalStatus
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
  searchText: string = '';
  hasSearched: boolean = false;
  // Pagination
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  requestId?: string;
  // reqList: licenseRequest[] = [] as licenseRequest[];
  reqList: Pagination<licenseRequest[]> = {} as Pagination<licenseRequest[]>;
  selectedRequest: licenseRequest = {} as licenseRequest;
  get internalStatusId() {
    return internalStatusId;
  }
  get externalStatusId() {
    return ExternalStatus;
  }
  licenseTypeCodeEnum = LicenseRequestTypeTypeCodeEnum;
  constructor(
    private _requestService: LicenseRequestHeaderService,
    private _router: Router,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _paginationService: PaginationService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService
  ) {
    this.maxDate.setDate(this.maxDate.getDate() + 5);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }

  ngOnInit() {
    this.getLicensesRequests();
    this.watchPaginationActions();
    this.observePopupEvents();
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
    this.getLicensesRequests();
  }
  search() {
    this.hasSearched = true;
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
      this._requestService
        .getLicensesRequests(
          this.pagintationData.currentPage,
          this.pagintationData.pageSize,
          this.searchText,
          this.currentSortColumn,
          this.currentSortOrder
        )
        .subscribe((res: Pagination<licenseRequest[]>) => {
          this.updateRequestList(res as Pagination<licenseRequest[]>);
        })
    );
  }
  private updateRequestList(TypeListView: Pagination<licenseRequest[]>): void {
    this.reqList = TypeListView;
    this.setPaginationData(
      this.reqList.pageSize,
      this.reqList.totalCount,
      this.reqList.pageCount
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
  public navigateToDetails(request: licenseRequest) {
    this.selectedRequest = request;
    this._sharedLicenseProjectService.setLicenseTypeCodeInLocalStorage(
      request.licenseRequestType.typeCode
    );
    this._sharedLicenseProjectService.setLicenseTypeNameInLocalStorage(
      request.licenseRequestType.name
    );
    this.setSelectedRequestIdInLocalStorage();
    this.routeToRequestDetails(request);
  }

  public navigateToFawriaLicenseComplate(request: licenseRequest): void {
    this.selectedRequest = request;
    this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
      request.licenseProjectId
    );
    
    this._sharedLicenseProjectService.setLicenseTypeCodeInLocalStorage(
      request.licenseRequestType.typeCode
    );

     this._sharedLicenseProjectService.setfacilityIdInLocalStorage(
      request.facilityId
    );

    this._router.navigateByUrl(
      `${Configuration.modules.wafi}/${Configuration.modules.license}/fawria-license-complate`
    );
  }

  routeToRequestDetails(request: licenseRequest): void {
    if (request.requestCode) {
      if (request.licenseRequestType?.typeCode === LicenseRequestTypeTypeCodeEnum.Fawria) {
        this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
          this.selectedRequest?.licenseProjectId
        );
        this._router.navigateByUrl(
          `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.fawriaLicenseDetails}`
        );
      } else
        this._router.navigateByUrl(
          `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseDetails}`
        );
    } else this._router.navigate([this.requestDetailsRoute]);
  }

  public navigateToCreateRequest(): void {
    this._router.navigateByUrl(
      `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseTypes}`
    );
  }
  setSelectedRequestIdInLocalStorage() {
    if (this.selectedRequest.requestCode)
      this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(
        this.selectedRequest.id
      );
    else
      this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
        this.selectedRequest.licenseProjectId
      );
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

    this.getLicensesRequests();
  }
  confirmDelete(id: any) {
    this.requestId = id;
    let deleteConfirmationObj = {
      staticMessage: 'هل انت متأكد من حذف الطلب',
      dynamicMessage: '',
      secondeStaticMessage: '',
    };
    this._popupService.updateConfirmationPopupData(deleteConfirmationObj);
  }
  public delete(): void {
    this.subscriptions.push(
      this._requestService
        .Delete(this.requestId as string)
        .subscribe((res: CoreResponseDTO<any>) => {
          if (res.isDone) {
            this._toastrNotificationService.showSuccess('تم الحذف');
            this.closeDialog();
            this.getLicensesRequests();
          } else {
            //const message = res.message || 'لم يتم الحذف';
            //this._toastrNotificationService.showError(message);
            ////this._toastrNotificationService.showError(' لم يتم حذف ');

          }
        })
    );
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        this._popupService.dismissDialog();
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.delete();
      })
    );
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
