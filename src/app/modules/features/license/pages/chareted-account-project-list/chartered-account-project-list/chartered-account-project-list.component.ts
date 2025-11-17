import { Component, OnInit, HostListener } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
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
import { ProjectBasicDataService } from '../../../services/licenseProjects/project-basic-data.service';
import { LicenseNatureTypeListDto } from '../../../models/license-nature-type-list-dto';
import { GetLicenseProjectListRequestDto } from '../../../dataModels/get-license-project-list-request-dto';

@Component({
  selector: 'app-chartered-account-project-list',
  templateUrl: './chartered-account-project-list.component.html',
  styleUrls: ['./chartered-account-project-list.component.scss'],
})
export class CharteredAccountProjectListComponent implements OnInit {
  projectList: Pagination<ProjectListDto[]> = {} as Pagination<ProjectListDto[]>;
  licenseNatureType: LicenseNatureTypeListDto[] = [];

  // Filter properties
  searchText: string = '';
  selectedNatureTypeId: string = '';
  private searchSubject = new Subject<string>();

  subscriptions: Subscription[] = [];
  facilityId: string | null = '';
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  // Track dropdown open states by licenseProjectId
  dropdownStates: Map<string, boolean> = new Map();
  constructor(
    private _userDataService: UserDataService,
    private _router: Router,
    private _projectBasicDataService: ProjectBasicDataService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _paginationService: PaginationService,
    private _charteredAccount: CharteredAccountProjectService
  ) { }

  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeProjectList();
    this.watchPaginationActions();
    this.getLicenseNatureType();
    this.setupSearchDebounce();
  }

  /**
   * Setup search debounce to avoid excessive API calls
   */
  private setupSearchDebounce(): void {
    this.subscriptions.push(
      this.searchSubject
        .pipe(
          debounceTime(300),
          distinctUntilChanged()
        )
        .subscribe(() => {
          this.applyFilters();
        })
    );
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
    const request: GetLicenseProjectListRequestDto = {
      pageNumber: this.pagintationData.currentPage,
      pageSize: this.pagintationData.pageSize,
      currentSelectedFacilityId: this.facilityId as string,
      searchText: this.searchText && this.searchText.trim() ? this.searchText.trim() : null,
      natureTypeId: this.selectedNatureTypeId && this.selectedNatureTypeId.trim() ? this.selectedNatureTypeId.trim() : null
    };

    this.subscriptions.push(
      this._charteredAccount
        .GetLicenseProjectList(request)
        .subscribe((res: Pagination<ProjectListDto[]>) => {
          this.updateRequestList(res as Pagination<ProjectListDto[]>);
        })
    );
  }

  getLicenseNatureType(){
    this._projectBasicDataService.GetLicenseNatureType().subscribe((res: LicenseNatureTypeListDto[]) => {
      this.licenseNatureType = res;
    })
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

  showBuyerList(licenseProjectId: string) {
    this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(licenseProjectId);
    this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.buyerListTabs}`]);
  }

  showTotals(licenseProjectId: string) {
    this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(licenseProjectId);
    this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.charteredAccountProjectTotal}`]);
  }

  /**
   * Check if dropdown is open for a specific project
   */
  isDropdownOpen(licenseProjectId: string): boolean {
    return this.dropdownStates.get(licenseProjectId) || false;
  }

  /**
   * Toggle dropdown open/close state
   */
  toggleDropdown(request: ProjectListDto, event: Event): void {
    if (!this.projectList?.results) return;

    // Stop event propagation to prevent document click listener
    event.stopPropagation();

    const isCurrentlyOpen = this.dropdownStates.get(request.licenseProjectId);

    // Close all other dropdowns first
    this.dropdownStates.clear();

    // Toggle current dropdown
    this.dropdownStates.set(request.licenseProjectId, !isCurrentlyOpen);
  }

  /**
   * Close specific dropdown
   */
  closeDropdown(request: ProjectListDto): void {
    if (request && request.licenseProjectId) {
      this.dropdownStates.set(request.licenseProjectId, false);
    }
  }

  /**
   * Close all dropdowns when clicking outside
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.projectList?.results) return;

    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.dropdown');

    if (!clickedInside) {
      this.dropdownStates.clear();
    }
  }

  /**
   * Handle search input change with debounce
   */
  onSearchChange(): void {
    this.searchSubject.next(this.searchText);
  }

  /**
   * Handle filter dropdown change
   */
  onFilterChange(): void {
    this.applyFilters();
  }

  /**
   * Apply filters and reload data
   */
  private applyFilters(): void {
    // Reset to first page when filters change
    this.pagintationData.currentPage = 1;
    this.observeProjectList();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
