import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { ProjectBusinessCaseReportPagingDto } from '../../models/project-business-case-report-paging-dto';
import { ProjectBusinessCaseReportService } from '../../services/project-business-case-report.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddEditProjectBusinessCaseComponent } from '../add-edit-project-business-case/add-edit-project-business-case.component';
import { ShowProjectBusinessCaseComponent } from '../show-project-business-case/show-project-business-case.component';
import { LicenseProjectTimeScheduleOwnerType } from '../../dataModels/filesdata/filesdata.model';
import { LicenseProjectEngineeringRequestStatus } from '../../models/project-business-case-report-dto';

@Component({
  selector: 'app-project-business-case-report-list',
  templateUrl: './project-business-case-report-list.component.html',
  styleUrls: ['./project-business-case-report-list.component.scss']
})
export class ProjectBusinessCaseReportListComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  licenseProjectEngineeringRequestStatus=LicenseProjectEngineeringRequestStatus
  ownerTypes = LicenseProjectTimeScheduleOwnerType
  reqList: Pagination<ProjectBusinessCaseReportPagingDto[]> = {} as Pagination<ProjectBusinessCaseReportPagingDto[]>;
  constructor(
    private _projectBusinessCaseReportService: ProjectBusinessCaseReportService,
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
      this.getProjectBusinessCaseReports();
    }
  }

  getProjectBusinessCaseReports(): void {
    this.subscriptions.push(
      this._projectBusinessCaseReportService.getProjectBusinessCaseReports(this.licenseProjectId as string, this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe((res) => {
        this.updateRequestList(res as Pagination<ProjectBusinessCaseReportPagingDto[]>);
      })
    );
  }
  private updateRequestList(ProjectBusinessCaseReportResult: Pagination<ProjectBusinessCaseReportPagingDto[]>): void {
    this.reqList = ProjectBusinessCaseReportResult;

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
  private observesubmitSuccessfullyEventEmitter(){
    this.subscriptions.push(
      this._projectBusinessCaseReportService.submitSuccessfullyEventEmitter.subscribe(res=>{
        this.getProjectBusinessCaseReports()
      }));
  }
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;

    this.getProjectBusinessCaseReports()
  }
  getProjectBusinessCaseDetails(id:string): void {
    this._projectBusinessCaseReportService.showprojectBusinessCaseReporDetails.emit(id);
  } 
   openEditProjectBusinessCaseDialog(projectBusinessCaseReportId: string): void {
    
    this._projectBusinessCaseReportService.setProjectBusinessCaseReportId(projectBusinessCaseReportId);
    let Data = {
      title: "إضافة او تعديل حالة الأعمال",
      component: AddEditProjectBusinessCaseComponent,
      id: "AddEditProjectBusinessCaseComponent",
    } as PopupData;
    this._popupService.updatePopupData(Data);
  } 
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
