import { Component } from '@angular/core';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { ExpiredQualifyingDto } from '../../dataModels/expired-qualifying-dto';
import { Subscription } from 'rxjs';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Router } from '@angular/router';
import { RequestService } from '../../services/requests/request-service.service';
import { RenewQualifyingListService } from '../../services/renew-qualifying-list/renew-qualifying-list.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';

@Component({
  selector: 'app-renew-qualifying-list',
  templateUrl: './renew-qualifying-list.component.html',
  styleUrls: ['./renew-qualifying-list.component.scss']
})
export class RenewQualifyingListComponent {
  reqList: Pagination<ExpiredQualifyingDto[]> = {} as Pagination<ExpiredQualifyingDto[]>;
  subscriptions: Subscription[] = [];
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  userData: customerResponse | null = null;
  constructor(
    private _renewQualifyingListService: RenewQualifyingListService,
    private _paginationService: PaginationService,
    private _router: Router,
    private _requestService: RequestService,
    private _userDataService: UserDataService,
  ) { }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.watchPaginationActions();
  }

  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        this.getExpiredProjectLicensesPagingList();

      })
    )
  }
  getExpiredProjectLicensesPagingList(): void {
    this.subscriptions.push(
      this._renewQualifyingListService.getExpiredQualificationPagingList(this.userData?.facilities[0].id as string,this.pagintationData.currentPage, this.pagintationData.pageSize)
        .subscribe((res: Pagination<ExpiredQualifyingDto[]> | null) => {
          if (res && res.results.length > 0)
            this.updateRequestList(res as Pagination<ExpiredQualifyingDto[]>)
        })

    )
  }

  private updateRequestList(TypeListView: Pagination<ExpiredQualifyingDto[]>): void {

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
    this.getExpiredProjectLicensesPagingList()
  }

  /**
 * onClickOnRenewLicense
 */
  public onClickOnRenewLicense(qualifying: ExpiredQualifyingDto): void {
    console.log("qualifying", qualifying);
    // set Facility Id In Local Storage
    this._requestService.setFacilityIdInLocalStorage(qualifying.facilities.id)
    // navigate to renew page 
    this.navigateToRenew(qualifying.qualificationRequestType.typeCode)
  }
  private navigateToRenew(typeCode: string): void {
    this._router.navigate([`${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsQualifying}/${Configuration.pages.realEstateContributionsQualifying.renewRequest}`, typeCode])

  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
