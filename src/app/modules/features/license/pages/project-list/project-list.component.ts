import { Component } from '@angular/core';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { Subscription } from 'rxjs';
import { ProjectListService } from '../../services/project-list.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ProjectListFormComponent } from '../project-list-form/project-list-form.component';
import { LicenseRequestHeaderDto, ProjectLicenseRequestsParams } from '../../dataModels/license-request-header-dto';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ProjectStatusUpdateComponent } from '../Project-status-update/project-status-update.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
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
  searchText:string='';
  userData: customerResponse | null = null;
  
  constructor(
    private _projectMangerService: ProjectListService,
    private _paginationService: PaginationService,
    private _popupService: PopupService,
    private _userDataService: UserDataService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getEngineeringConsultantProjectsList();
    this.watchPaginationActions();
    this.obseveCustomerData();
    this.obseveSubmitSuccessfullyEventEmitter();
  }

  search(){
   this.getEngineeringConsultantProjectsList();
  }

  getSearchText(event: Event) {
    this.searchText=(event.target as HTMLInputElement).value;
  }

  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
        })
    );
  }

  showProjectDetails(licenseProjectId: string): void {
    this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
      licenseProjectId
    );
    this._router.navigateByUrl(
      `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.projectDetails}`
    );
  }

  getEngineeringConsultantProjectsList(): void {
    const params = new ProjectLicenseRequestsParams();
    params.pageIndex = this.pagintationData.currentPage;
    params.pageSize = this.pagintationData.pageSize;
    params.searchText = this.searchText;
    this.subscriptions.push(
      this._projectMangerService.getEngineeringConsultantProjectsList(params)
        .subscribe((res: Pagination<LicenseRequestHeaderDto[]> | null) => {
          if (res && res.results.length > 0)
            this.updateRequestList(
              res as Pagination<LicenseRequestHeaderDto[]>
            );
        })
    );
  }

  private updateRequestList(TypeListView: Pagination<LicenseRequestHeaderDto[]>): void {
    this.reqList = TypeListView;
    this.setPaginationData(
      this.reqList.pageSize,
      this.reqList.totalCount,
      this.reqList.pageCount
    );
  }

  private setPaginationData(pageSize: number, total: number, pageCount: number): void {
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

  openDialog(project?: LicenseRequestHeaderDto): void {
    // set Project Object to Service
    this._projectMangerService.setProject(project as LicenseRequestHeaderDto);
    let Data = {
      id: '',
      component: ProjectListFormComponent,
    } as PopupData;
    this.updateAndOpenData(Data);
  }

  openStatusDialog(project: LicenseRequestHeaderDto): void {
    this._projectMangerService.setProject(project);
    let Data = {
      id: '',
      component: ProjectStatusUpdateComponent, 
    } as PopupData;
  
    this.updateAndOpenData(Data);
  }
  
  private updateAndOpenData(data: PopupData) {
    this._popupService.updatePopupData(data);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  
}
