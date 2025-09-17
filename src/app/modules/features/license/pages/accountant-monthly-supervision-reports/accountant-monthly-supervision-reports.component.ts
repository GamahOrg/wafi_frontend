import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { LicenseProjectEngineeringReportDetailsCertifiedDto } from '../../../engineering-management/models/accountant-monthly-report-dto';
import { Subscription } from 'rxjs';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../services/license-project-engineering-supervision-planned-report-detail.service';
import { ActualValueReportService } from '../../services/actual-value-report.service';
import { ActualValueReportPagingListDto, LicenseProjectEngineeringRequestStatusEnum } from '../../models/actual-value-report-paging-list-dto';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';

@Component({
  selector: 'app-accountant-monthly-supervision-reports',
  templateUrl: './accountant-monthly-supervision-reports.component.html',
  styleUrls: ['./accountant-monthly-supervision-reports.component.scss']
})
export class AccountantMonthlySupervisionReportsComponent implements  OnInit, OnDestroy {
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  subscriptions: Subscription[] = [];
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };

  reqList: Pagination<LicenseProjectEngineeringReportDetailsCertifiedDto[]> = {} as Pagination<LicenseProjectEngineeringReportDetailsCertifiedDto[]>;
  monthlyCertifiedReportList: LicenseProjectEngineeringReportDetailsCertifiedDto[] = [];
  reportDetailId: string = '00000000-0000-0000-0000-000000000000';
  showDetails: boolean = false;

  constructor(private licenseProjectReportService: LicenseProjectEngineeringSupervisionPlannedReportDetailService,private _paginationService: PaginationService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,private _actualValueReportService: ActualValueReportService) {}

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.watchPaginationActions();
  }

  private updateRequestList(actualValueReportesult: Pagination<LicenseProjectEngineeringReportDetailsCertifiedDto[]>): void {
    this.reqList = actualValueReportesult;
    this.setPaginationData(
      this.reqList.pageSize,
      this.reqList.totalCount,
      this.reqList.pageCount
    );
  }

  private setPaginationData(pageSize: number, total: number, pageCount: number): void {
    this.pagintationData.pageCount = pageCount
    this.pagintationData.pageSize = pageSize
    this.pagintationData.totalCount = total
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
 
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.loadReport()
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if(this.licenseProjectId)
      this.loadMonthlyCertifiedReport();
  }

  getActualValueReportDetails(comdata:LicenseProjectEngineeringReportDetailsCertifiedDto): void {
    var dto = {
      id:comdata.id,
      monthDate: comdata.monthDate,
      supervisionPlannedReportStatusId: LicenseProjectEngineeringRequestStatusEnum.Certified, 
    } as ActualValueReportPagingListDto
    this._actualValueReportService.showActualValueReportDetails.emit(dto);
  } 

  loadMonthlyCertifiedReport(): void {
    if (!this.licenseProjectId) {
      return;
    }
    this.licenseProjectReportService
      .GetCertifiedLicenseProjectEngineeringSupervisionPlannedReportWithExternalExpenses(this.licenseProjectId).subscribe((res)=>{
        if(res) {
          debugger
          this.showDetails = false;
          // Filter by unique months
          const uniqueMonths = new Map();
          const filteredRes = res.filter(item => {
            if (item.monthDate) {
              const monthKey = new Date(item.monthDate).toISOString().slice(0, 7); // YYYY-MMMM format
              if (!uniqueMonths.has(monthKey)) {
                uniqueMonths.set(monthKey, true);
                return true;
              }
              return false;
            }
            return true; // Keep items without monthDate
          });
          
          this.monthlyCertifiedReportList = filteredRes;
        }
      })    
  }

  getMonthlyReport(event: any): void {
    this.reportDetailId = event;
    this.loadReport();
  }

  loadReport(): void {
    if (!this.licenseProjectId) {
      return;
    }
    this.licenseProjectReportService
      .GetCertifiedLicenseProjectEngineeringSupervisionPlannedReport(this.reportDetailId, this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe((res)=>{
        if(res){
          this.showDetails = true;
          this.updateRequestList(res)
        }
      })    
  }

  formatDateToArabic(date: string | Date): string {
    if (!date) return '';
    const dateValue = new Date(date);
    return new Intl.DateTimeFormat('AR-EG', { month: 'long', year: 'numeric' }).format(dateValue);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());   
  }

}
