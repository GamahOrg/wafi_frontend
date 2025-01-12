import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { ActualValueReportPagingListDto } from '../../models/actual-value-report-paging-list-dto';
import { ActualValueReportService } from '../../services/actual-value-report.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { UpdateMonthSubmittedComponent } from '../update-month-submitted/update-month-submitted.component';

@Component({
  selector: 'app-actual-value-report-paging-list',
  templateUrl: './actual-value-report-paging-list.component.html',
  styleUrls: ['./actual-value-report-paging-list.component.scss']
})
export class ActualValueReportPagingListComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  reqList: Pagination<ActualValueReportPagingListDto[]> = {} as Pagination<ActualValueReportPagingListDto[]>;
  constructor(
    private _actualValueReportService: ActualValueReportService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _paginationService: PaginationService,
  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observeconfirmAction();
    this.watchPaginationActions();
    this.observesubmitSuccessfullyEventEmitter();

  }


  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getRequiredSupervisionMonthsList();
    }
  }

  getRequiredSupervisionMonthsList(): void {

    this.subscriptions.push(
      this._actualValueReportService.getRequiredSupervisionMonthsList(this.licenseProjectId as string, this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe((res) => {
        if(res)
         this.updateRequestList(res)
      })
    )

  }
  private updateRequestList(actualValueReportesult: Pagination<ActualValueReportPagingListDto[]>): void {
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

  private observeconfirmAction() {

    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
      })
    )
  }
  private observesubmitSuccessfullyEventEmitter(){
    this.subscriptions.push(
      this._actualValueReportService.submitSuccessfullyEventEmitter.subscribe(res=>{
        this.getRequiredSupervisionMonthsList()
      }));
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

    this.getRequiredSupervisionMonthsList()
  }

  openAddActualMonthesDialog(): void {
    
    let Data = {
      title: "تحديث التقرير",
      component: UpdateMonthSubmittedComponent,
      id: "UpdateMonthSubmittedComponent",
    } as PopupData;
    this._popupService.updatePopupData(Data);
  } 
  getActualValueReportDetails(monthDate:Date): void {
    this._actualValueReportService.showActualValueReportDetails.emit(monthDate);
  } 
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
