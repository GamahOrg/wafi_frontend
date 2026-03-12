import { Component } from '@angular/core';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { ComplaintRequestCustomerPagingList } from '../../models/complaint-request-customer-paging-list';
import { Subscription } from 'rxjs';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { ComplaintsReportsService } from '../../services/complaints-reports.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddComplaintsReportsComponent } from '../add-complaints-reports/add-complaints-reports.component';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ShowComplaintsReportsComponent } from '../show-complaints-reports/show-complaints-reports.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';

@Component({
  selector: 'app-complaints-reports',
  templateUrl: './complaints-reports.component.html',
  styleUrls: ['./complaints-reports.component.scss']
})
export class ComplaintsReportsComponent {
  reqList: Pagination<ComplaintRequestCustomerPagingList[]> = {} as Pagination<ComplaintRequestCustomerPagingList[]>;
  subscriptions: Subscription[] = [];
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  constructor(
    private _complaintsReportsService: ComplaintsReportsService,
    private _paginationService: PaginationService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }
  ngOnInit(): void {
    this.getComplaintRequestCustomerPagingList();
    this.watchPaginationActions();
    this.obseveSubmitSuccessfullyEventEmitter();
  }

  private getComplaintRequestCustomerPagingList(): void {
    this.subscriptions.push(
      this._complaintsReportsService.getComplaintRequestCustomerPagingList(this.pagintationData.currentPage, this.pagintationData.pageSize)
        .subscribe((res: Pagination<ComplaintRequestCustomerPagingList[]> | null) => {
          if (res)
            this.updateRequestList(res as Pagination<ComplaintRequestCustomerPagingList[]>)
        })

    )
  }

  private updateRequestList(TypeListView: Pagination<ComplaintRequestCustomerPagingList[]>): void {

    this.reqList = TypeListView;
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
    this.getComplaintRequestCustomerPagingList()
  }
  private obseveSubmitSuccessfullyEventEmitter():void {
    this.subscriptions.push(
      this._complaintsReportsService.submitSuccessfullyEventEmitter.subscribe(() => {
        this.getComplaintRequestCustomerPagingList();
      })
    )
  }
  public openDialog(): void {
    let Data = {
      id: "",
      title: "اضافة شكوى أو بلاغ",
      component: AddComplaintsReportsComponent
    } as PopupData;
    this.updateAndOpenData(Data);

  }
  public openShowDialog(request: ComplaintRequestCustomerPagingList): void {
    this._complaintsReportsService.setRequest(request);
    let Data = {
      id: "",
      title: "عرض شكوى أو بلاغ",
      component: ShowComplaintsReportsComponent,
      buttons: [{
        icon: "",
        title: "إلغاء",
        actionType: ButtonType.cancel,
        isVisable: true,
        isDisables: false,
      }]
    } as PopupData;
    this.updateAndOpenData(Data);

  }
  private updateAndOpenData(data: PopupData) {
    this._popupService.updatePopupData(data);

  }
  public delete(id: string): void {
    this.subscriptions.push(
      this._complaintsReportsService.Delete(id).subscribe((res:CoreResponseDTO<any>) => {
        if (res.isDone) {
          this._toastrNotificationService.showSuccess(" تم حذف الشكوى أو البلاغ");
          this.getComplaintRequestCustomerPagingList();
        }
        else
          this._toastrNotificationService.showError(" لم يتم حذف الشكوى أو البلاغ");


      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
