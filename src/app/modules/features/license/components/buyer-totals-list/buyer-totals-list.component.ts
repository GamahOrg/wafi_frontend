import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { confirmationPopupData, PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectBuyerListPagingDto, LicenseProjectBuyerStatusEnum } from '../../dataModels/license-project-buyer-list-paging-dto';
import { AddBuyerComponent } from '../add-buyer/add-buyer.component';
import { pagination, Pagination } from 'src/app/shared/models/pagination.model';
import { environment } from 'src/environments/environment';
import { LicenseProjectBuyerService } from '../../services/license-project-buyer.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { ShowDetailBuyerComponent } from '../show-detail-buyer/show-detail-buyer.component';

@Component({
  selector: 'app-buyer-totals-list',
  templateUrl: './buyer-totals-list.component.html',
  styleUrls: ['./buyer-totals-list.component.scss']
})

export class BuyerTotalsListComponent {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  buyer?: LicenseProjectBuyerListPagingDto;
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  reqList: Pagination<LicenseProjectBuyerListPagingDto[]> = {} as Pagination<LicenseProjectBuyerListPagingDto[]>;
  licenseProjectBuyerStatus = LicenseProjectBuyerStatusEnum;

  constructor(
    private _licenseProjectBuyerService: LicenseProjectBuyerService,
    private _popupService: PopupService,
    private _paginationService: PaginationService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observeconfirmAction();
    this.watchPaginationActions();
    this.observesubmitSuccessfullyEventEmitter();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId)
      this.getBuyerTotalsList();
  }

  getBuyerTotalsList(): void {
    this.subscriptions.push(
      this._licenseProjectBuyerService.getBuyerTotalsList(this.licenseProjectId as string, this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe((res: Pagination<LicenseProjectBuyerListPagingDto[]> | null) => {
        this.updateRequestList(res as Pagination<LicenseProjectBuyerListPagingDto[]>);
      })
    )
  }

  private recoverBuyerContract(id:string) {
    this.subscriptions.push(
      this._licenseProjectBuyerService.acceptOrRejectOrRecoverBuyerContract(id,this.licenseProjectBuyerStatus.Recovery).subscribe((res:CoreResponseDTO<any>) => {
        if (res.isDone) {
          this._toastrNotificationService.showSuccess(" تم حفظ استرداد العقد ");
          this.getBuyerTotalsList();
          this.closeDialog();
        }
        else
          this._toastrNotificationService.showError(" لم يتم حفظ  استرداد العقد");
      })
    )
  }

  private updateRequestList(licenseProjectBuyerResult: Pagination<LicenseProjectBuyerListPagingDto[]>): void {
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
      this._licenseProjectBuyerService.submitSuccessfullyEventEmitter.subscribe(res => {
        this.getBuyerTotalsList()
      }));
  }

  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.getBuyerTotalsList()
  }

  openDialog(id: string): void {
    this._licenseProjectBuyerService.setLicenseProjectBuyerIdInLocalStorage(id)
    let Data = {
      title: "اضافة مشتري",
      component: AddBuyerComponent,
      id: "AddBuyerComponent",
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  showDetail(id: string): void {
    this._licenseProjectBuyerService.setLicenseProjectBuyerIdInLocalStorage(id);
    this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.buyerDetails}`]);
  }

  confirmRecover(data: LicenseProjectBuyerListPagingDto) {
    this.buyer = data;
    let deleteConfirmationObj = {
      staticMessage: "هل انت متأكد من إسترداد عقد المشتري",
      dynamicMessage: "",
      secondeStaticMessage: '',
      acceptButtonText: 'نعم'
    } as confirmationPopupData
    this._popupService.updateConfirmationPopupData(deleteConfirmationObj);
  }

  confirmCancel(data: LicenseProjectBuyerListPagingDto) {
    this.buyer = data;
    let cancelConfirmationObj = {
      staticMessage: "هل انت متأكد من إلغاء عقد المشتري",
      dynamicMessage: "",
      secondeStaticMessage: '',
      acceptButtonText: 'نعم'
    } as confirmationPopupData
    this._popupService.updateConfirmationPopupData(cancelConfirmationObj);
  }

  public cancelLicenseProjectBuyer(id: string): void {
    this.subscriptions.push(
      this._licenseProjectBuyerService.cancelLicenseProjectBuyer(id).subscribe((res: CoreResponseDTO<any>) => {
        if (res.isDone) {
          this._toastrNotificationService.showSuccess(" تم إلغاء عقد  المشتري ");
          this.getBuyerTotalsList();
          this.closeDialog();
        }
        else
          this._toastrNotificationService.showError(" لم يتم إلغاء عقد المشتري");
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        if (this.buyer?.statusId == this.licenseProjectBuyerStatus.New)
          this.recoverBuyerContract(this.buyer?.id as string);
        if (this.buyer?.statusId == this.licenseProjectBuyerStatus.Cerified)
          this.cancelLicenseProjectBuyer(this.buyer?.id as string);
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

}
