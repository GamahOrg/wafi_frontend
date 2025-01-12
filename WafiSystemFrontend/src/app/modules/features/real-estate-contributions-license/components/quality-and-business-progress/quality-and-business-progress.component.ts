import { Component } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { LicenseProjectEngineeringRelativeWeightDto } from '../../models/license-project-engineering-relative-weight-dto';
import { LicenseProjectEngineeringMonthlyConsultantStaffRatesDto } from '../../models/license-project-engineering-monthly-consultant-staff-rates-dto';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../services/license-project-engineering-supervision-planned-report-detail.service';
import { QualityAndBusinessProgressService } from '../../services/quality-and-business-progress.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddEditEngineeringQualityAssuranceComponent } from '../add-edit-engineering-quality-assurance/add-edit-engineering-quality-assurance.component';
import { AddEditConstructionWorkPositionComponent } from '../add-edit-construction-work-position/add-edit-construction-work-position.component';

@Component({
  selector: 'app-quality-and-business-progress',
  templateUrl: './quality-and-business-progress.component.html',
  styleUrls: ['./quality-and-business-progress.component.scss'],
})
export class QualityAndBusinessProgressComponent {
  subscriptions: Subscription[] = [];
  currenrYear?: number;
  years?: number[];
  cumulativeAmountPriorToThatYear?: number;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  reqList: Pagination<LicenseProjectEngineeringRelativeWeightDto[]> =
    {} as Pagination<LicenseProjectEngineeringRelativeWeightDto[]>;
  licenseProjectEngineeringMonthlyConsultantStaffRatesList?: LicenseProjectEngineeringMonthlyConsultantStaffRatesDto[];
  constructor(
    private _licenseProjectEngineeringSupervisionPlannedReportDetailService: LicenseProjectEngineeringSupervisionPlannedReportDetailService,
    private _qualityAndBusinessProgressService: QualityAndBusinessProgressService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _paginationService: PaginationService
  ) {}

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observeconfirmAction();
    this.watchPaginationActions();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.GetLicenseProjectEngineeringDetails();
    }
  }
  GetLicenseProjectEngineeringDetails() {
    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService
        .GetLicenseProjectEngineeringDetails(this.licenseProjectId as string)
        .subscribe((res) => {
          if (res) {
            this.years = this.getYearsBetween(
              new Date(res.startOn),
              new Date(res.endOn)
            );
            this.loadComponentData();
          }
        })
    );
  }

  loadComponentData(): void {
    if (this.years && this.years.length != 0 && !this.currenrYear)
      this.currenrYear = this.years[0] as number;
    const requests = [
      this._qualityAndBusinessProgressService.GetLicenseProjectEngineeringMonthlyConsultantStaffRates(
        this.licenseProjectId as string,
        this.currenrYear as number
      ),
      this._qualityAndBusinessProgressService.GetLicenseProjectEngineeringRelativeWeight(
        this.licenseProjectId as string,
        this.pagintationData.currentPage,
        this.pagintationData.pageSize
      ),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        if (results[0])
          this.licenseProjectEngineeringMonthlyConsultantStaffRatesList =
            results[0] as LicenseProjectEngineeringMonthlyConsultantStaffRatesDto[];
        if (results[1])
          this.updateRequestList(
            results[1] as Pagination<
              LicenseProjectEngineeringRelativeWeightDto[]
            >
          );
      }
    });
    this.subscriptions.push(subscriptions);
  }
  private updateRequestList(
    TypeListView: Pagination<LicenseProjectEngineeringRelativeWeightDto[]>
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
  onChangeYear(data: any) {
    this.currenrYear = Number(data.target.value);
    this.loadComponentData();
  }

  getYearsBetween(startDate: Date, endDate: Date): number[] {
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    years.sort((a, b) => a - b); // Sort in ascending order
    return years;
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

    this.loadComponentData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  openAddEditEngineeringQualityAssuranceDialog(): void {
    let Data = {
      title: 'تعديل بيانات  ضمان الجودة',
      component: AddEditEngineeringQualityAssuranceComponent,
      id: 'AddEditEngineeringQualityAssuranceComponent',
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  openAddEditConstructionWorkPositionDialog(
    licenseProjectRelativeWeightId: string
  ): void {
    this._qualityAndBusinessProgressService.setLicenseProjectRelativeWeightId(
      licenseProjectRelativeWeightId
    );
    let Data = {
      title: 'تعديل موقف أعمال الإنشاءات',
      component: AddEditConstructionWorkPositionComponent,
      id: 'AddEditConstructionWorkPositionComponent',
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.GetLicenseProjectEngineeringDetails();
      })
    );
  }
}
