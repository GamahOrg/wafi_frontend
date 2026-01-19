import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectUnit } from '../../../models/project-units';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { CorrectionLicenseProjectUnitService } from '../../../services/correction-license-project-unit.service';
import { CorrectionProjectUnitCodeService } from '../../../services/correction-project-unit-code.service';
import { ProjectUnitCodeDto, ProjectUnitCodesPaginationParams } from '../../../dataModels/project-unit-code.dto';
import { Pagination, pagination } from '../../../../../../shared/models/pagination.model';
import { PaginationService } from '../../../../../../shared/services/pagination/pagination.service';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';

@Component({
  selector: 'app-correcting-unit-codes',
  templateUrl: './correcting-unit-codes.component.html',
  styleUrls: ['./correcting-unit-codes.component.scss']
})

export class CorrectingUnitCodesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  selectedProjectUnitId: string | null = "00000000-0000-0000-0000-000000000000";
  selectedProjectUnitTitle: string | null = "";
  projectUnits: ProjectUnit[] = [];

  localization = {
    totalNumberOfUnitCodes: "إجمالي عدد اكواد الوحدات ",
    code: 'كود الوحدة',
    deliveryOn: 'تاريخ التسليم',
    price: 'سعر التعاقد',
  }

  projectUnitCodes: ProjectUnitCodeDto[] = []

  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };

  newPageNo: number = 1;
  projectUnitCodesPaginated: Pagination<ProjectUnitCodeDto[]> | null = null;

  constructor(
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseProjectUnitService: CorrectionLicenseProjectUnitService,
    private _projectUnitCodeService: CorrectionProjectUnitCodeService,
    private _paginationService: PaginationService,
  ) { }

  ngOnInit(): void {
    this.getCorrectionUnitRequestIdFromLocalStorage();
    this.getSelectedProjectUnit();
    this.getProjectUnits();
    this.unitCodeTitle();
    this.observeProjectUnitCodes();
    this.watchPaginationActions();
    this.observePaginatedRefresh();
  }

  private observeProjectUnitCodes(): void {
    this.subscriptions.push(
      this._projectUnitCodeService.getSubjectListObjsPaginated()
        .subscribe((res: Pagination<ProjectUnitCodeDto[]> | null) => {
          if (!res) {
            this.projectUnitCodesPaginated = null;
            return;
          }

          this.projectUnitCodesPaginated = res;
          this.setPaginationData(res.pageSize, res.totalCount, res.pageCount);
        })
    );
  }

  private getCorrectionUnitRequestIdFromLocalStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage();
  }

  private getSelectedProjectUnit(): void {
    this.subscriptions.push(
      this._licenseProjectUnitService.getSelectedProjectUnit().subscribe((res: string | null) => {
        this.selectedProjectUnitId = res;
        this.pagintationData.currentPage = 1;
        if (this.selectedProjectUnitId) {
          this.GetByProjectUnitIdPaginated(this.selectedProjectUnitId as string)
        }
      })
    );
  }

  private getProjectUnits(): void {
    this.subscriptions.push(
      this._licenseProjectUnitService.projectUnits.subscribe((res) => {
        this.projectUnits = res;
      })
    );
  }

  private unitCodeTitle(): void {
    this.subscriptions.push(
      this._licenseProjectUnitService.selectedProjectUnitTitle.subscribe((res: string | null) => {
        if (res) this.selectedProjectUnitTitle = res
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

  formatNumber(value: number | string | null): string {
    if (value == null) return '';
    const parts = value.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  private GetByProjectUnitIdPaginated(unitId: string): void {
    const params: ProjectUnitCodesPaginationParams = {
      unitId,
      pageIndex: this.pagintationData.currentPage,
      pageSize: this.pagintationData.pageSize,
    };

    this.subscriptions.push(
      this._projectUnitCodeService
        .GetUnitsCodesListByProjectUnitIdPaginated(params)
        .subscribe((res: Pagination<ProjectUnitCodeDto[]> | null) => {
          if (!res) {
            this.projectUnitCodesPaginated = null;
            return;
          }

          this.projectUnitCodesPaginated = res;
          this.setPaginationData(res.pageSize, res.totalCount, res.pageCount);
          this._projectUnitCodeService.SetSubjectListObjsPaginated(res);
        })
    );
  }

  private setPaginationData(
    pageSize: number,
    totalCount: number,
    pageCount: number
  ): void {
    this.pagintationData.pageSize = pageSize;
    this.pagintationData.totalCount = totalCount;
    this.pagintationData.pageCount = pageCount;

    this._paginationService.updatePaginationData(this.pagintationData);
  }

  private watchPaginationActions(): void {
    this.watchPageChanged();
    this.watchPaginationClicked();
  }

  private watchPageChanged(): void {
    this.subscriptions.push(
      this._paginationService.getPageChanged().subscribe((pageNo) => {
        this.newPageNo = pageNo;
      })
    );
  }

  private watchPaginationClicked(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.pagintationData.currentPage !== nextPage) {
          this.loadNextPage(nextPage);
          this.pagintationData.currentPage = this.newPageNo;
        }
      })
    );
  }

  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    if (this.selectedProjectUnitId)
      this.GetByProjectUnitIdPaginated(this.selectedProjectUnitId)
  }

  private observePaginatedRefresh(): void {
    this.subscriptions.push(
      this._projectUnitCodeService.onRefreshPaginatedList()
        .subscribe(() => {
          if (this.selectedProjectUnitId) {
            this.GetByProjectUnitIdPaginated(this.selectedProjectUnitId);
          }
        })
    );
  }
}
