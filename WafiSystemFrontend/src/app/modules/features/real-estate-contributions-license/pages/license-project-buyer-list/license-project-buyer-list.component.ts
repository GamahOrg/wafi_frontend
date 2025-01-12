import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { PopupData,  confirmationPopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectBuyerListPagingDto, LicenseProjectBuyerStatusEnum } from '../../models/license-project-buyer-list-paging-dto';
import { environment } from 'src/environments/environment';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { LicenseProjectBuyerService } from '../../services/license-project-buyer.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { AddBuyerComponent } from '../../components/add-buyer/add-buyer.component';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';

@Component({
  selector: 'app-license-project-buyer-list',
  templateUrl: './license-project-buyer-list.component.html',
  styleUrls: ['./license-project-buyer-list.component.scss']
})
export class LicenseProjectBuyerListComponent {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  facilityId: string | null = '00000000-0000-0000-0000-000000000000';
  buyer?:LicenseProjectBuyerListPagingDto;
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  userData?:customerResponse;
  reqList: Pagination<LicenseProjectBuyerListPagingDto[]> = {} as Pagination<LicenseProjectBuyerListPagingDto[]>;
  licenseProjectBuyerStatus=LicenseProjectBuyerStatusEnum;
  constructor(
    private _licenseProjectBuyerService: LicenseProjectBuyerService,
    private _popupService: PopupService,
    private _paginationService: PaginationService,
    private _userDataService: UserDataService,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.observeconfirmAction();
    this.watchPaginationActions();
    this.observesubmitSuccessfullyEventEmitter();
  }

  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res as customerResponse;
        if(this.userData && this.userData.facilities)
          {
            this.facilityId=this.userData.facilities[0].id;
            if(this.facilityId)
             this.getFacilityBuyers();
              
          }
      })
    )
  }


  getFacilityBuyers(): void {
    this.subscriptions.push(
      this._licenseProjectBuyerService.getFacilityBuyers(this.facilityId as string,this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe((res: Pagination<LicenseProjectBuyerListPagingDto[]> | null) => {
        debugger;
       this.updateRequestList(res as Pagination<LicenseProjectBuyerListPagingDto[]>);
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
  private observesubmitSuccessfullyEventEmitter(){
    this.subscriptions.push(
      this._licenseProjectBuyerService.submitSuccessfullyEventEmitter.subscribe(res=>{
        this.getFacilityBuyers()
      }));
  }
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;

    this.getFacilityBuyers()
  }

   openDialog(): void {
    
    let Data = {
      title: "اضافة مشتري",
      component: AddBuyerComponent,
      id: "AddBuyerComponent",
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }  
  confirmDelete(data: LicenseProjectBuyerListPagingDto) {
    this.buyer = data;
    let deleteConfirmationObj = {
      staticMessage: "هل انت متأكد من حذف عقد المشتري",
      dynamicMessage: "",
      secondeStaticMessage: '',
      acceptButtonText:'نعم'
    } as confirmationPopupData
    this._popupService.updateConfirmationPopupData(deleteConfirmationObj);
  }
  confirmCancel(data: LicenseProjectBuyerListPagingDto) {
    this.buyer = data;
    let cancelConfirmationObj = {
      staticMessage: "هل انت متأكد من إلغاء عقد المشتري",
      dynamicMessage: "",
      secondeStaticMessage: '',
      acceptButtonText:'نعم'
    } as confirmationPopupData
    this._popupService.updateConfirmationPopupData(cancelConfirmationObj);
  }
  public delete(id: string): void {
    this.subscriptions.push(
      this._licenseProjectBuyerService.deleteBuyer(id).subscribe((res:CoreResponseDTO<any>) => {
        if (res.isDone) {
          this._toastrNotificationService.showSuccess(" تم حذف  المشتري ");
          this.getFacilityBuyers();
          this.closeDialog();
        }
        else
          this._toastrNotificationService.showError(" لم يتم حذف المشتري");


      })
    )
  }
  public cancelLicenseProjectBuyer(id: string): void {
    this.subscriptions.push(
      this._licenseProjectBuyerService.cancelLicenseProjectBuyer(id).subscribe((res:CoreResponseDTO<any>) => {
        if (res.isDone) {
          this._toastrNotificationService.showSuccess(" تم إلغاء عقد  المشتري ");
          this.getFacilityBuyers();
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
        if(this.buyer?.statusId==this.licenseProjectBuyerStatus.New)
            this.delete(this.buyer?.id as string);
        if(this.buyer?.statusId==this.licenseProjectBuyerStatus.Cerified)
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
