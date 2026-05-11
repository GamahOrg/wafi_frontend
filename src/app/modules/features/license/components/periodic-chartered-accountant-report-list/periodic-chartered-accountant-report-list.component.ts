import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeriodicCharteredAccountantReportPagingListDto, PeriodicCharteredAccountantReportTypeEnum } from '../../models/periodic-chartered-accountant-report-paging-list-dto';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PeriodicCharteredAccountantReportService } from '../../services/periodic-chartered-accountant-report.service';
import { Router } from '@angular/router';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PeriodicCharteredAccountantReportDetailsComponent } from '../periodic-chartered-accountant-report-details/periodic-chartered-accountant-report-details.component';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-periodic-chartered-accountant-report-list',
  templateUrl: './periodic-chartered-accountant-report-list.component.html',
  styleUrls: ['./periodic-chartered-accountant-report-list.component.scss']
})
export class PeriodicCharteredAccountantReportListComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  reportTypeId = PeriodicCharteredAccountantReportTypeEnum;
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  reqList: Pagination<PeriodicCharteredAccountantReportPagingListDto[]> = {} as Pagination<PeriodicCharteredAccountantReportPagingListDto[]>;
  addPeriodiccharteredaccountantreport: string = `/${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.addPeriodiccharteredaccountantreport}` as string;

  constructor(
    private _paginationService: PaginationService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _periodicCharteredAccountantReportService:PeriodicCharteredAccountantReportService,
    private _router: Router,
  ) {this.getLicenseProjectIdStorage() }

  ngOnInit(): void {
    this.watchPaginationActions();
    }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId)
      this.getReportList()
  }
  private setPaginationData(pageSize: number, total: number, pageCount: number): void {
    this.pagintationData.pageCount = pageCount
    this.pagintationData.pageSize = pageSize
    this.pagintationData.totalCount = total
    this._paginationService.updatePaginationData(this.pagintationData);
  }
  getReportList(): void {
    this.subscriptions.push(
      this._periodicCharteredAccountantReportService.GetExchangeDocumentOnProject(this.licenseProjectId as string,this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe((res: Pagination<PeriodicCharteredAccountantReportPagingListDto[]>) => {
        this.updateRequestList(res as Pagination<PeriodicCharteredAccountantReportPagingListDto[]>);
      })
    )
  }
  private updateRequestList(reportList: Pagination<PeriodicCharteredAccountantReportPagingListDto[]>): void {
    this.reqList = reportList;
    this.setPaginationData(
      this.reqList.pageSize,
      this.reqList.totalCount,
      this.reqList.pageCount
    );
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
  showDetailDialog(id: string): void {
    this._periodicCharteredAccountantReportService.setLicenseProjectAccountReportIdInLocalStorage(id)
    let Data = {
      title: "تفاصيل تقارير المحاسب القانوني",
      component: PeriodicCharteredAccountantReportDetailsComponent,
      id: "ShowDetailAccountReportComponent",
      buttons: []
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.getReportList();
  }
  addReport()
  {
    this._router.navigate([this.addPeriodiccharteredaccountantreport]);
  }
   ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
