import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectExchangeDocumentPagingDto } from '../../dataModels/license-project-exchange-document-paging-dto';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { LicenseProjectExchangeDocumentService } from '../../services/license-project-exchange-document.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddExchangeDocumentComponent } from '../add-exchange-document/add-exchange-document.component';
import { ShowDetailExchangeDocumentComponent } from '../show-detail-exchange-document/show-detail-exchange-document.component';

@Component({
  selector: 'app-license-project-exchange-document-list',
  templateUrl: './license-project-exchange-document-list.component.html',
  styleUrls: ['./license-project-exchange-document-list.component.scss']
})
export class LicenseProjectExchangeDocumentListComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  exchangeDocument?: LicenseProjectExchangeDocumentPagingDto;
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  reqList: Pagination<LicenseProjectExchangeDocumentPagingDto[]> = {} as Pagination<LicenseProjectExchangeDocumentPagingDto[]>;
  constructor(
    private _licenseProjectExchangeDocumentService: LicenseProjectExchangeDocumentService,
    private _popupService: PopupService,
    private _paginationService: PaginationService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
  ) { this.getLicenseProjectIdStorage() }
  ngOnInit(): void {
    this.watchPaginationActions();
    this.observesubmitSuccessfullyEventEmitter();
  }

  private getLicenseProjectIdStorage(): void {
    
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId)
      this.getExchangeDocumentOnProject();
  }

  getExchangeDocumentOnProject(): void {
    this.subscriptions.push(
      this._licenseProjectExchangeDocumentService.getExchangeDocumentOnProject(this.licenseProjectId as string, this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe((res: Pagination<LicenseProjectExchangeDocumentPagingDto[]> | null) => {
        this.updateRequestList(res as Pagination<LicenseProjectExchangeDocumentPagingDto[]>);
      })
    )
  }

  private updateRequestList(licenseProjectBuyerResult: Pagination<LicenseProjectExchangeDocumentPagingDto[]>): void {
    this.reqList = licenseProjectBuyerResult;

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
  private observesubmitSuccessfullyEventEmitter() {
    this.subscriptions.push(
      this._licenseProjectExchangeDocumentService.submitSuccessfullyEventEmitter.subscribe(res => {
        this.getExchangeDocumentOnProject()
      }));
  }
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;

    this.getExchangeDocumentOnProject()
  }

  openDialog(id: string): void {
    this._licenseProjectExchangeDocumentService.setLicenseProjectExchangeDocumentIdInLocalStorage(id)
    let Data = {
      title: "اضافة وثيقة صرف",
      component: AddExchangeDocumentComponent,
      id: "AddExchangeDocumentComponent",
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  showDetailDialog(id: string): void {
    this._licenseProjectExchangeDocumentService.setLicenseProjectExchangeDocumentIdInLocalStorage(id)
    let Data = {
      title: "تفاصيل وثيقة الصرف",
      component: ShowDetailExchangeDocumentComponent,
      id: "ShowDetailExchangeDocumentComponent",
      buttons: []
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
