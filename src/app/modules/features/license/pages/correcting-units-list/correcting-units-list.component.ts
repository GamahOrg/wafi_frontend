import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import {
  internalStatusId,
} from '../../models/license-requests';
import { Router } from '@angular/router';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { ExternalStatus } from '../../models/external-status.model';
import { LicenseInternalStatus } from '../../enums/license-internal-status';
import { CorrectingUnitsService } from '../../services/correct-units/correcting-units.service';
import { CorrectingUnitsListDto } from '../../models/correcting-units-list-dto';

@Component({
  selector: 'app-correcting-units-list',
  templateUrl: './correcting-units-list.component.html',
  styleUrls: ['./correcting-units-list.component.scss'],
})
export class CorrectingUnitsListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  facilityId: string = '';
  requestId?: string;
  reqList: Pagination<CorrectingUnitsListDto[]> = {} as Pagination<CorrectingUnitsListDto[]>;
  selectedRequest: CorrectingUnitsListDto = {} as CorrectingUnitsListDto;
  get internalStatusId() {
    return internalStatusId;
  }
  get externalStatusId() {
    return ExternalStatus;
  }
  constructor(
    private _requestService: CorrectingUnitsService,
    private _router: Router,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _paginationService: PaginationService,
  ) {}
  ngOnInit() {
    this.getFacilityId();
    this.watchPaginationActions();
  }
  getCorrectingUnits() {
    this.subscriptions.push(
      this._requestService
        .getCorrectedUnitRequest(
          this.facilityId,
          this.pagintationData.currentPage,
          this.pagintationData.pageSize
        )
        .subscribe((res: Pagination<CorrectingUnitsListDto[]>) => {
          this.updateRequestList(res as Pagination<CorrectingUnitsListDto[]>);
        })
    );
  }
  private updateRequestList(TypeListView: Pagination<CorrectingUnitsListDto[]>): void {
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
  getFacilityId() {
    this.facilityId = this._sharedLicenseProjectService.getFacilityIdFromLocalStorage() as string; 
    if(this.facilityId) {
      this.getCorrectingUnits()
    }
  }
  public navigateToDetails(request: CorrectingUnitsListDto) {
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

    this.getCorrectingUnits();
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
