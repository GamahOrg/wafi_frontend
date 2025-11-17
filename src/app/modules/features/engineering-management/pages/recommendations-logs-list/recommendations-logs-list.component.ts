import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';
import { UserDataService } from '../../../../../core/services/user-data/user-data.service';
import { Pagination, pagination } from '../../../../../shared/models/pagination.model';
import { PaginationService } from '../../../../../shared/services/pagination/pagination.service';
import { PopupService } from '../../../../../shared/services/popup/popup.service';
import { customerResponse } from '../../../license/models/employee-registration-dto';
import { FilterProjectList, LicenseRequestHeaderDto } from '../../models/license-request-header-dto';
import { ProjectListService } from '../../services/project-list.service';
import { SharedLicenseProjectService } from '../../services/shared-license-project.service';
import { SysProjectStatusService } from '../../services/sys-projectstatus.service';
import { RecommendationsLogsResponseDto } from '../../models/recommendations-logs-response-dto';
import { RecommendationLogsListService } from '../../services/recommendation-logs-list.service';
import { Configuration } from '../../../../../core/configurations/shared.config';
import { areaResponseBE } from '../../../facilities/dataModels/area.model';
import { NationalAddressService } from '../../../facilities/services/facilityProfile/national-address-service/national-address.service';
import { cityResponseBE } from '../../../facilities/dataModels/city.model';

@Component({
  selector: 'app-recommendations-logs-list',
  templateUrl: './recommendations-logs-list.component.html',
  styleUrls: ['./recommendations-logs-list.component.scss']
})
export class RecommendationsLogsListComponent {
  reqList: Pagination<RecommendationsLogsResponseDto[]> = {} as Pagination<
    RecommendationsLogsResponseDto[]>;

  private searchSubject = new Subject<string>();

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
  currentSelectedFacilityId?: string;
  areasDropDownList: areaResponseBE[] = [];
  citiesDropDownList: cityResponseBE[] = [];
  selectedCityId: string = '';
  selectedAreaId: string = '';
  projectStartOn: Date | null = null;
  projectEndOn: Date | null = null;
  private isInitialLoad: boolean = true;

  constructor(
    private _projectMangerService: ProjectListService,
    private _recommendationLogsListService: RecommendationLogsListService,
    private _paginationService: PaginationService,
    private _popupService: PopupService,
    private _sysProjectStatusService: SysProjectStatusService,
    private _userDataService: UserDataService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _router: Router,
    private _nationalAddressService: NationalAddressService,
  ) { }


  ngOnInit(): void {
    this.obseveCustomerData();
    this.watchPaginationActions();
    this.obseveSubmitSuccessfullyEventEmitter();
    this.setupSearchDebounce();
    this.GetCitiesDropDown();
    this.GetAreasDropDown();
  }

  /**
   * إعداد البحث مع تأخير لتحسين الأداء
   */
  private setupSearchDebounce(): void {
    this.subscriptions.push(
      this.searchSubject
        .pipe(
          debounceTime(500),
          distinctUntilChanged()
        )
        .subscribe(() => {
          this.pagintationData.currentPage = 1;
          this.getRecommendationsLogsList();
        })
    );
  }

  /**
   * معالج تغيير نص البحث
   */
  onSearchChange(): void {
    this.searchSubject.next(this.searchText);
  }

  /**
   * معالج تغيير الفلاتر
   */
  onFilterChange(): void {
    // تجاهل التغييرات أثناء التحميل الأولي
    if (this.isInitialLoad) {
      return;
    }
    this.pagintationData.currentPage = 1;
    this.getRecommendationsLogsList();
  }

  GetAreasDropDown() {
    this.subscriptions.push(
      this._nationalAddressService.GetAreasDropDown().subscribe(res => {
        if (res) {
          this.areasDropDownList = res as areaResponseBE[];
        }
      })
    )
  }

  GetCitiesDropDown() {
    this.subscriptions.push(
      this._nationalAddressService.GetCitiessDropDown().subscribe(res => {
        if (res) {
          this.citiesDropDownList = res;
        }
      })
    )
  }

  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (this.userData && this.userData.facilities && this.userData.facilities.length > 0)
            this.currentSelectedFacilityId = this.userData.facilities[0].id;

          // تعيين flag بعد تحميل البيانات الأولية
          this.getRecommendationsLogsList();

          // السماح بالفلاتر بعد تحميل البيانات الأولية
          setTimeout(() => {
            this.isInitialLoad = false;
          }, 500);
        })
    );
  }

  getRecommendationsLogsList(): void {
    const params = new FilterProjectList();
    params.pageIndex = this.pagintationData.currentPage;
    params.pageSize = this.pagintationData.pageSize;
    params.searchText = this.searchText;
    params.currentSelectedFacilityId = this.currentSelectedFacilityId;
    params.cityId = this.selectedCityId || undefined;
    params.areaId = this.selectedAreaId || undefined;
    params.projectStartOn = this.projectStartOn || undefined;
    params.projectEndOn = this.projectEndOn || undefined;

    this.subscriptions.push(
      this._recommendationLogsListService.getRecommendationLogsList(params)
        .subscribe((res: Pagination<RecommendationsLogsResponseDto[]> | null) => {
          if (res) {
            this.updateRequestList(res as Pagination<RecommendationsLogsResponseDto[]>);
          }
        })
    );
  }

  private updateRequestList(
    TypeListView: Pagination<RecommendationsLogsResponseDto[]>
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

  obseveSubmitSuccessfullyEventEmitter() {
    this.subscriptions.push(
      this._projectMangerService.submitSuccessfullyEventEmitter.subscribe(
        () => {
          this.getRecommendationsLogsList();
        }
      )
    );
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
    this.getRecommendationsLogsList();
  }

  showUnitList(licenseProjectId: string): void {
    this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
      licenseProjectId
    );
    this._router.navigateByUrl(
      `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.realStateDeveloperUnitsListComponent}`
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

}
