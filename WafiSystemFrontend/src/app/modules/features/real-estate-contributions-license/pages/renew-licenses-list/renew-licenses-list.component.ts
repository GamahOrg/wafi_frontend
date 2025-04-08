import { Component } from '@angular/core';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
// import { ExpiredLicenseProjectDto } from '../../models/renew-licenses-list-dto';
import { Subscription } from 'rxjs';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
// import { RenewLicensesService } from '../../services/renew-licenses.service';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { SysLicenseRequestTypeDto } from '../../models/sys-license-request-type-dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ExpiredLicenseProjectDto } from '../../dataModels/renew-licenses-list-dto';
import { RenewLicensesService } from '../../services/renew-licenses/renew-licenses.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';

@Component({
  selector: 'app-renew-licenses-list',
  templateUrl: './renew-licenses-list.component.html',
  styleUrls: ['./renew-licenses-list.component.scss']
})
export class RenewLicensesListComponent {
  reqList: Pagination<ExpiredLicenseProjectDto[]> = {} as Pagination<ExpiredLicenseProjectDto[]>;
  subscriptions: Subscription[] = [];
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  userData: customerResponse | null = null;
  SysLicenseRequestTypeDto!: SysLicenseRequestTypeDto
  constructor(
    private _renewLicensesService: RenewLicensesService,
    private _paginationService: PaginationService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _router: Router,
    private _userDataService: UserDataService,
  ) { }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.watchPaginationActions();
    this.observeSubmitSuccessfullyEventEmitter();
  }
  private observeSubmitSuccessfullyEventEmitter(): void {
    this.subscriptions.push(
      this._renewLicensesService.submitSuccessfullyEventEmitter.subscribe(res => {
        this.getExpiredProjectLicensesPagingList();
      })
    )
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
      this._renewLicensesService.getExpiredProjectLicensesPagingList(this.userData?.facilities[0].id as string,this.pagintationData.currentPage, this.pagintationData.pageSize)
        .subscribe((res: Pagination<ExpiredLicenseProjectDto[]> | null) => {
          if (res && res.results.length > 0)
            this.updateRequestList(res as Pagination<ExpiredLicenseProjectDto[]>)
        })

    )
  }

  private updateRequestList(TypeListView: Pagination<ExpiredLicenseProjectDto[]>): void {

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
  public onClickOnRenewLicense(project: ExpiredLicenseProjectDto): void {
    
    console.log("project", project);
    //  set project id in local storage : id:string;
    this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(project.licenseProject.id)
    this._sharedLicenseProjectService.setfacilityIdInLocalStorage(project.facility.id)
    // navigate to renew license page 
    this.navigateToRenewLicense(project.licenseRequestType.typeCode)
  }
  private navigateToRenewLicense(typeCode: string): void {
    this._router.navigate([`${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsLicense}/${Configuration.pages.realEstateContributionslicense.renewLincense}`, typeCode])

  }


  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
