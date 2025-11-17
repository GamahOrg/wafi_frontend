import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetProjectUnitsListResponseDto, LicenseProjectBuyerUnitListFilterDto, LicenseProjectUnitCodeStatus, LicenseProjectUnitType, SubUnitTypesDto, UnitCodeStatusDto } from '../../models/real-state-developer-dto';
import { debounceTime, distinctUntilChanged, Subject, Subscription, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { RealStateDeveloperService } from '../../services/real-state-developer.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { pagination, Pagination } from 'src/app/shared/models/pagination.model';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';

@Component({
  selector: 'app-real-state-developer-units-list',
  templateUrl: './real-state-developer-units-list.component.html',
  styleUrls: ['./real-state-developer-units-list.component.scss']
})
export class RealStateDeveloperUnitsListComponent implements OnInit, OnDestroy {
  // البيانات
  projects: Pagination<GetProjectUnitsListResponseDto[]> = {} as Pagination<GetProjectUnitsListResponseDto[]>;
  filteredProjects: GetProjectUnitsListResponseDto[] = [];
  licenseProjectId: string = ''; // This should be passed as input or from route params
  Math = Math; // For template access
  error: string | null = null;
  subscriptions: Subscription[] = [];
  newPageNo: number = 1;

  // الفلاتر والبحث
  searchTerm = '';
  statusFilter: LicenseProjectUnitCodeStatus = LicenseProjectUnitCodeStatus.All;
  unitType:LicenseProjectUnitType = LicenseProjectUnitType.All;
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

  constructor(
    private realstateService:RealStateDeveloperService,
    private _paginationService: PaginationService,
    private sharedService: SharedLicenseProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLicenseId();
    this.watchPaginationActions();
    this.setupSearch();
    this.loadDropdownData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  getLicenseId(): void {
    this.licenseProjectId = this.sharedService.getLicenseProjectIdStorage() as string;
    if (this.licenseProjectId)
    {
      this.loadProjects()
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
        }
      })
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
        }
      })
    );
  }

  /**
   * إعداد البحث بتأخير
   * Setup debounced search
   */
  private setupSearch(): void {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(searchTerm => {
      this.searchTerm = searchTerm;
      
      this.pagintationData.currentPage = 1;
      this.loadProjects();
    });
  }

  /**
   * تحميل المشاريع
   * Load projects
   */
  loadProjects(): void {
    this.error = null;

    const params: LicenseProjectBuyerUnitListFilterDto = {
      licenseProjectId: this.licenseProjectId,
      pageNumber: this.pagintationData.currentPage,
      pageSize: this.pagintationData.pageSize,
      statusId: this.statusFilter !== LicenseProjectUnitCodeStatus.All? this.statusFilter : undefined,
      unitType: this.unitType !== LicenseProjectUnitType.All? this.unitType: undefined,
      searchText: this.searchTerm || undefined
    };
  this.subscriptions.push(
      this.realstateService.getProjectUnitsList(params)
        .subscribe(
          (res) => {
            this.updateRequestList(res.data as Pagination<GetProjectUnitsListResponseDto[]>)
          }
        )
    )
    
  }

  /**
   * تطبيق الفلاتر
   * Apply filters
   */
  applyFilters(): void {
    this.filteredProjects = this.projects.results;
    this.pagintationData.totalCount = this.filteredProjects.length;
    this.totalPages = Math.ceil(this.pagintationData.totalCount / this.pagintationData.pageSize);
  }

  /**
   * البحث
   * Search handler
   */
  onSearchChange(searchTerm: string): void {
    this.searchSubject.next(searchTerm);
  }

  /**
   * تغيير الفلتر
   * Filter change handler
   */
  onStatusFilterChange(): void {
    
    this.pagintationData.currentPage = 1;
    this.loadProjects();
  }

  /**
   * الحصول على المشاريع للصفحة الحالية
   * Get paginated projects
   */
    private updateRequestList(
      TypeListView: Pagination<GetProjectUnitsListResponseDto[]>
    ): void {
      
      this.projects = TypeListView;
      this.setPaginationData(
        this.projects.pageSize,
        this.projects.totalCount,
        this.projects.pageCount
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
    this.loadProjects();
  }

  /**
   * عرض تفاصيل الوحدة
   * View unit details
   */
  viewDetails(unitCode: string): void {
    this.router.navigate(['/wafi/license/unit-details', unitCode]);
  }


  /**
   * إعادة المحاولة عند حدوث خطأ
   * Retry on error
   */
  retry(): void {
    this.loadProjects();
  }

  /**
   * Helper method for Math.min
   */
  getMathMin(a: number, b: number): number {
    return Math.min(a, b);
  }
}