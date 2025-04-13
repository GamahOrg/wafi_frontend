import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { pagination, Pagination } from 'src/app/shared/models/pagination.model';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { ProjectListDto } from '../../../models/project-list';
import { CharteredAccountProjectService } from '../../../services/chareted-account-project-service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Router } from '@angular/router';
import { LicenseProjectAccountantLocalStorageService } from '../../../services/license-project-accountant-local-storage.service';
import  { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';

@Component({
  selector: 'app-chartered-account-project-list',
  templateUrl: './chartered-account-project-list.component.html',
  styleUrls: ['./chartered-account-project-list.component.scss'],
})
export class CharteredAccountProjectListComponent implements OnInit {
  projectList: Pagination<ProjectListDto[]> = {} as Pagination<
    ProjectListDto[]
  >;
  subscriptions: Subscription[] = [];
  facilityId: string | null = '';
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  constructor(
    private _userDataService: UserDataService,
    private _router: Router,
    // private _licenseProjectAccountantLocalStorageService: LicenseProjectAccountantLocalStorageService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _paginationService: PaginationService,
    private _charteredAccount: CharteredAccountProjectService
  ) { }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeProjectList();
    this.watchPaginationActions();
  }
  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.facilityId = res ? res.facilities[0].id : null;
          this.observeProjectList()
        })
    );
  }

  observeProjectList(): void {
    this.subscriptions.push(
      this._charteredAccount
        .GetLicenseProjectList(this.pagintationData.currentPage,
          this.pagintationData.pageSize, this.facilityId as string)
        .subscribe((res: Pagination<ProjectListDto[]>) => {
          this.updateRequestList(res as Pagination<ProjectListDto[]>);
        })
    );
  }
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.observeProjectList();
  }
  private updateRequestList(
    TypeListView: Pagination<ProjectListDto[]>
  ): void {
    this.projectList = TypeListView;
    this.setPaginationData(
      this.projectList.pageSize,
      this.projectList.totalCount,
      this.projectList.pageCount
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

  showDetails(licenseProjectId: string) {
    this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(licenseProjectId);
    this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.licenseProjectsAccountantDetails}`]);

  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
