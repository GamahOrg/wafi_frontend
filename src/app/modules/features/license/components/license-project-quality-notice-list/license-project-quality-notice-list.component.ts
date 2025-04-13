import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { LicenseProjectQualityNoticePagingDto } from '../../dataModels/license-project-quality-notice-dto';
import { LicenseProjectQualityNoticeService } from '../../services/license-project-quality-notice.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-license-project-quality-notice-list',
  templateUrl: './license-project-quality-notice-list.component.html',
  styleUrls: ['./license-project-quality-notice-list.component.scss']
})
export class LicenseProjectQualityNoticeListComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  reqList: Pagination<LicenseProjectQualityNoticePagingDto[]> = {} as Pagination<LicenseProjectQualityNoticePagingDto[]>;
  constructor(
    private _licenseProjectQualityNoticeService: LicenseProjectQualityNoticeService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _paginationService: PaginationService,
  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observeconfirmAction();
    this.watchPaginationActions();
  }


  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getLicenseProjectQualityNotices();
    }
  }

  getLicenseProjectQualityNotices(): void {
    this.subscriptions.push(
      this._licenseProjectQualityNoticeService.GetLicenseProjectQualityNotices(this.licenseProjectId as string, this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe(res=>{
        
        this.updateRequestList(res as Pagination<LicenseProjectQualityNoticePagingDto[]>);
      }));


  }
  private updateRequestList(licenseProjectQualityNoticePagingResult: Pagination<LicenseProjectQualityNoticePagingDto[]>): void {
    this.reqList = licenseProjectQualityNoticePagingResult;
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
  
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;

    this.getLicenseProjectQualityNotices()
  }


  getQualityNoticeDetails(id:string): void {
    this._licenseProjectQualityNoticeService.showLicenseProjectQualityNoticeDetails.emit(id);
  } 
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
