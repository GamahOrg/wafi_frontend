import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ProjectLicenseRequestsParams, LicenseRequestHeaderDto, FilterProjectList } from '../../models/license-request-header-dto';
import { pagination, Pagination } from 'src/app/shared/models/pagination.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { Router } from '@angular/router';
import { SharedLicenseProjectService } from '../../services/shared-license-project.service';
import { SysProjectStatusService } from '../../services/sys-projectstatus.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { ProjectListService } from '../../services/project-list.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';

@Component({
  selector: 'app-developer-project-list',
  templateUrl: './developer-project-list.component.html',
  styleUrls: ['./developer-project-list.component.scss']
})
export class DeveloperProjectListComponent {
  reqList: Pagination<LicenseRequestHeaderDto[]> = {} as Pagination<
    LicenseRequestHeaderDto[]
  >;
  subscriptions: Subscription[] = [];
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  searchText: string = '';
  userData: customerResponse | null = null;
  constructor(
    private _projectMangerService: ProjectListService,
    private _paginationService: PaginationService,
    private _popupService: PopupService,
    private _sysProjectStatusService: SysProjectStatusService,
    private _userDataService: UserDataService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    this.watchPaginationActions();
    this.obseveSubmitSuccessfullyEventEmitter();
  }

  search() {
    this.getEngineeringConsultantProjectsList();
  }

  getSearchText(event: Event) {
    this.searchText = (event.target as HTMLInputElement).value;
  }
  currentSelectedFacilityId?: string
  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (this.userData && this.userData.facilities && this.userData.facilities.length > 0)
            this.currentSelectedFacilityId = this.userData.facilities[0].id;
          this.getEngineeringConsultantProjectsList();
        })
    );
  }

  showProjectDetails(licenseProjectId: string): void {
    this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
      licenseProjectId
    );
    this._router.navigateByUrl(
      `${Configuration.modules.wafi}/${Configuration.modules.engineeringManagement}/${Configuration.pages.license.projectDetails}`
    );
  }

  getEngineeringConsultantProjectsList(): void {
    const params = new FilterProjectList();
    params.pageIndex = this.pagintationData.currentPage;
    params.pageSize = this.pagintationData.pageSize;
    params.searchText = this.searchText;
    params.currentSelectedFacilityId = this.currentSelectedFacilityId
    this.subscriptions.push(
      this._projectMangerService.getDeveloperProjectsList(params)
        .subscribe((res: Pagination<LicenseRequestHeaderDto[]> | null) => {
          if (res && res.results.length > 0)
            this.updateRequestList(
              res as Pagination<LicenseRequestHeaderDto[]>
            );
        })
    );
  }

  private updateRequestList(
    TypeListView: Pagination<LicenseRequestHeaderDto[]>
  ): void {
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
    this.getEngineeringConsultantProjectsList();
  }
  obseveSubmitSuccessfullyEventEmitter() {
    this.subscriptions.push(
      this._projectMangerService.submitSuccessfullyEventEmitter.subscribe(
        () => {
          this.getEngineeringConsultantProjectsList();
        }
      )
    );
  }

  private updateAndOpenData(data: PopupData) {
    this._popupService.updatePopupData(data);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
