import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { pagination, Pagination } from 'src/app/shared/models/pagination.model';
import { LicenseDepositDocumentListDto } from '../../models/license-deposit-document-model/deposit-document-list-dto';
import { LicenseProjectBuyerService } from '../../services/license-project-buyer.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseDepositDocumentService } from '../../services/license-deposit-document.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddDepositDocumentComponent } from '../add-deposit-document/add-deposit-document.component';
import { LicenseDepositDocumentDetailsComponent } from '../license-deposit-document-details/license-deposit-document-details.component';
import { UpdateLicenseDepositDocumentComponent } from '../update-license-deposit-document/update-license-deposit-document.component';

@Component({
  selector: 'app-license-deposit-document',
  templateUrl: './license-deposit-document.component.html',
  styleUrls: ['./license-deposit-document.component.scss']
})
export class LicenseDepositDocumentComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  reqList: Pagination<LicenseDepositDocumentListDto[]> = {} as Pagination<LicenseDepositDocumentListDto[]>;
  constructor(
    private _licenseProjectBuyerService: LicenseProjectBuyerService,
    private _popupService: PopupService,
    private _licenseDepositDocument: LicenseDepositDocumentService,
    private _paginationService: PaginationService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
  ) {this.getLicenseProjectIdStorage() }
  ngOnInit(): void {
    this.watchPaginationActions();
    this.observesubmitSuccessfullyEventEmitter();
    }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId)
      this.getDepositDocument();
  }

  getDepositDocument(): void {
    this.subscriptions.push(
      this._licenseDepositDocument.GetDepositDocumentList(this.licenseProjectId as string,this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe((res: Pagination<LicenseDepositDocumentListDto[]> | null) => {
        this.updateRequestList(res as Pagination<LicenseDepositDocumentListDto[]>);
      })
    )
  }
  showDetailDialog(id: string): void {
    this._licenseDepositDocument.setLicenseProjectDepositDocumentIdInLocalStorage(id)
    let Data = {
      title: "تفاصيل وثيقة الايداع",
      component: LicenseDepositDocumentDetailsComponent,
      id: "ShowDetailDepositDocumentComponent",
      buttons: []
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  openDialog(id: string): void {
    this._licenseDepositDocument.setLicenseProjectDepositDocumentIdInLocalStorage(id)
    let Data = {
      title: "اضافة وثيقة الايداع",
      component: AddDepositDocumentComponent,
      id: "AddDepositDocumentComponent",
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  editDialog(id: string): void {
    this._licenseDepositDocument.setLicenseProjectDepositDocumentIdInLocalStorage(id)
    let Data = {
      title: "تعديل وثيقة الايداع",
      component: UpdateLicenseDepositDocumentComponent,
      id: "UpdateDepositDocumentComponent",
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
    private updateRequestList(licenseProjectBuyerResult: Pagination<LicenseDepositDocumentListDto[]>): void {
      this.reqList = licenseProjectBuyerResult;
  
      this.setPaginationData(
        this.reqList.pageSize,
        this.reqList.totalCount,
        this.reqList.pageCount
      );
    }
    private observesubmitSuccessfullyEventEmitter() {
      this.subscriptions.push(
        this._licenseDepositDocument.submitSuccessfullyEventEmitter.subscribe(res => {
          this.getDepositDocument()
        }));
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
      this.getDepositDocument()
    }
     ngOnDestroy(): void {
      this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
    }
}
