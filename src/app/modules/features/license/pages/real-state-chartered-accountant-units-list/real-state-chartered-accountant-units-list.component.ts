import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  Subscription,
  Subject,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
} from 'rxjs';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import {
  GetProjectUnitsListResponseDto,
  LicenseProjectUnitCodeStatus,
  LicenseProjectUnitType,
  SubUnitTypesDto,
  UnitCodeStatusDto,
  LicenseProjectBuyerUnitListFilterDto,
} from '../../models/real-state-developer-dto';
import { RealStateDeveloperService } from '../../services/real-state-developer.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ChangeUnitStatusFormComponent } from './change-unit-status-form/change-unit-status-form.component';

@Component({
  selector: 'app-real-state-chartered-accountant-units-list',
  templateUrl: './real-state-chartered-accountant-units-list.component.html',
  styleUrls: ['./real-state-chartered-accountant-units-list.component.scss'],
})
export class RealStateCharteredAccountantUnitsListComponent {
  // البيانات
  projects: Pagination<GetProjectUnitsListResponseDto[]> = {} as Pagination<
    GetProjectUnitsListResponseDto[]
  >;
  filteredProjects: GetProjectUnitsListResponseDto[] = [];
  licenseProjectId: string = ''; // This should be passed as input or from route params
  Math = Math; // For template access
  error: string | null = null;
  subscriptions: Subscription[] = [];
  newPageNo: number = 1;
  LicenseProjectUnitCodeStatus = LicenseProjectUnitCodeStatus;
  // الفلاتر والبحث
  searchTerm = '';
  statusFilter: LicenseProjectUnitCodeStatus = LicenseProjectUnitCodeStatus.All;
  unitType: LicenseProjectUnitType = LicenseProjectUnitType.All;
  LicenseProjectUnitType = LicenseProjectUnitType;
  private searchSubject = new Subject<string>();

  // Dropdown data
  subUnitTypes: SubUnitTypesDto[] = [];
  unitCodeStatuses: UnitCodeStatusDto[] = [];

  // Modal
  showAddModal = false;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  totalPages: number = 0;
  // للتنظيف
  private destroy$ = new Subject<void>();

  selectedUnitIds = new Set<string>();
  selectAllChecked = false;

  constructor(
    private realstateService: RealStateDeveloperService,
    private _paginationService: PaginationService,
    private sharedService: SharedLicenseProjectService,
    private router: Router,
    private _popupService: PopupService,
  ) {}

  ngOnInit(): void {
    this.getLicenseId();
    this.watchPaginationActions();
    this.setupSearch();
    this.loadDropdownData();
    this.observePopupEvents();

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  private observePopupEvents(): void {

    // Listen for cancel action
    this.subscriptions.push(
      this._popupService.closeDialog.subscribe(() => {
        this.loadProjects();
      })
    );



  }

  getLicenseId(): void {
    this.licenseProjectId =
      this.sharedService.getLicenseProjectIdStorage() as string;
    if (this.licenseProjectId) {
      this.loadProjects();
    }
  }

  /**
   * تحميل بيانات القوائم المنسدلة
   * Load dropdown data
   */
  loadDropdownData(): void {
    // Load SubUnitTypes
    this.subscriptions.push(
      this.realstateService.getSubUnitTypes().subscribe({
        next: (response) => {
          if (response.isDone && response.data) {
            this.subUnitTypes = response.data;
          }
        },
        error: (error) => {
          console.error('Error loading sub unit types:', error);
        },
      }),
    );

    // Load UnitCodeStatus
    this.subscriptions.push(
      this.realstateService.getUnitCodeStatus().subscribe({
        next: (response) => {
          if (response.isDone && response.data) {
            this.unitCodeStatuses = response.data;
          }
        },
        error: (error) => {
          console.error('Error loading unit code status:', error);
        },
      }),
    );
  }

  /**
   * إعداد البحث بتأخير
   * Setup debounced search
   */
  private setupSearch(): void {
    this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((searchTerm) => {
        this.searchTerm = searchTerm;

        this.pagintationData.currentPage = 1;
        this.loadProjects();
      });
  }

  loadProjects(): void {
    this.error = null;
    this.selectedUnitIds.clear();
    this.selectAllChecked = false;

    const params: LicenseProjectBuyerUnitListFilterDto = {
      licenseProjectId: this.licenseProjectId,
      pageNumber: this.pagintationData.currentPage,
      pageSize: this.pagintationData.pageSize,
      statusId:
        this.statusFilter !== LicenseProjectUnitCodeStatus.All
          ? this.statusFilter
          : undefined,
      unitType:
        this.unitType !== LicenseProjectUnitType.All
          ? this.unitType
          : undefined,
      searchText: this.searchTerm || undefined,
    };
    this.subscriptions.push(
      this.realstateService.getProjectUnitsList(params).subscribe((res) => {
        this.updateRequestList(
          res.data as Pagination<GetProjectUnitsListResponseDto[]>,
        );
      }),
    );
  }

  applyFilters(): void {
    this.filteredProjects = this.projects.results;
    this.pagintationData.totalCount = this.filteredProjects.length;
    this.totalPages = Math.ceil(
      this.pagintationData.totalCount / this.pagintationData.pageSize,
    );
  }

  onSearchChange(searchTerm: string): void {
    this.searchSubject.next(searchTerm);
  }

  onStatusFilterChange(): void {
    this.pagintationData.currentPage = 1;
    this.loadProjects();
  }

  private updateRequestList(
    TypeListView: Pagination<GetProjectUnitsListResponseDto[]>,
  ): void {
    this.projects = TypeListView;
    this.setPaginationData(
      this.projects.pageSize,
      this.projects.totalCount,
      this.projects.pageCount,
    );
  }
  private setPaginationData(
    pageSize: number,
    total: number,
    pageCount: number,
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
      }),
    );
  }
  private watchPaginationClicked(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.pagintationData.currentPage != nextPage) {
          this.loadNextPage(nextPage);
          this.pagintationData.currentPage = this.newPageNo;
        }
      }),
    );
  }
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.loadProjects();
  }

  isUnitSelectable(unit: GetProjectUnitsListResponseDto): boolean {
    return (
      unit.unitStatusId !== LicenseProjectUnitCodeStatus.Sold &&
      unit.unitStatusId !== LicenseProjectUnitCodeStatus.PendingBuyerApproval
    );
  }

  toggleSelectAll(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    const selectableUnits = this.projects.results.filter(u => this.isUnitSelectable(u));
    if (checked) {
      selectableUnits.forEach(u => this.selectedUnitIds.add(u.id));
    } else {
      selectableUnits.forEach(u => this.selectedUnitIds.delete(u.id));
    }
    this.selectAllChecked = checked;
  }

  toggleUnitSelection(
    unitId: string,
    unit: GetProjectUnitsListResponseDto,
  ): void {
    if (!this.isUnitSelectable(unit)) return;
    if (this.selectedUnitIds.has(unitId)) {
      this.selectedUnitIds.delete(unitId);
    } else {
      this.selectedUnitIds.add(unitId);
    }
    const selectableUnits = this.projects.results.filter(u => this.isUnitSelectable(u));
    this.selectAllChecked = selectableUnits.length > 0 && selectableUnits.every(u => this.selectedUnitIds.has(u.id));
  }

  openChangeStatusPopup(): void {
    this._popupService.updatePopupData({
      minWidth: '25vw',
      width: '30vw',
      iconClass: 'hgi hgi-stroke hgi-profile-02',
      title: 'يرجي تحديد حالة الوحدة',
      component: ChangeUnitStatusFormComponent,
      submitButtonTitle: 'إرسال',
      cancelButtonPosition: 'end',
      disableClose: true,
      data: {
        unitIds: Array.from(this.selectedUnitIds),
        licenseProjectId: this.licenseProjectId,
      },
    } as PopupData);
  }

  viewDetails(unitCode: string): void {
    this.router.navigate(['/wafi/license/accountant-unit-details', unitCode]);
  }

  getMathMin(a: number, b: number): number {
    return Math.min(a, b);
  }
}
