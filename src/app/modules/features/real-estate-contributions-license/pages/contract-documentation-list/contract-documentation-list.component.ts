import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { PopupData,  confirmationPopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectBuyerListPagingDto, LicenseProjectBuyerStatusEnum } from '../../models/license-project-buyer-list-paging-dto';
import { pagination, Pagination } from 'src/app/shared/models/pagination.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseProjectBuyerService } from '../../services/license-project-buyer.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contract-documentation-list',
  templateUrl: './contract-documentation-list.component.html',
  styleUrls: ['./contract-documentation-list.component.scss']
})
export class ContractDocumentationListComponent {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  nidnumber?: string;
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
  licenseProjectBuyerStatusObj=LicenseProjectBuyerStatusEnum;
  statusFlag?:boolean
  constructor(
    private _licenseProjectBuyerService: LicenseProjectBuyerService,
    private _popupService: PopupService,
    private _paginationService: PaginationService,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }
  ngOnInit(): void {
    this.getContracts();
    this.observeconfirmAction();
    this.watchPaginationActions();
    this.observesubmitSuccessfullyEventEmitter();
  }

  getContracts(): void {
    this.subscriptions.push(
      this._licenseProjectBuyerService.getContracts(this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe((res: Pagination<LicenseProjectBuyerListPagingDto[]> | null) => {
        
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
        this.getContracts()
      }));
  }
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;

    this.getContracts()
  }
  confirRejected(data: LicenseProjectBuyerListPagingDto) {
    this.buyer = data;
    this.statusFlag=false;
    let deleteConfirmationObj = {
      staticMessage: "هل انت متأكد رفض توثيق العقد",
      dynamicMessage: "",
      secondeStaticMessage: '',
      acceptButtonText:'نعم'
    } as confirmationPopupData
    this._popupService.updateConfirmationPopupData(deleteConfirmationObj);
  }
  confirmAccepted(data: LicenseProjectBuyerListPagingDto) {
    this.buyer = data
    this.statusFlag=true;
    let cancelConfirmationObj = {
      staticMessage: "هل انت متأكد من توثيق العقد",
      dynamicMessage: "",
      secondeStaticMessage: '',
      acceptButtonText:'نعم'
    } as confirmationPopupData
    this._popupService.updateConfirmationPopupData(cancelConfirmationObj);
  }
 
 
  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        if(this.statusFlag)
          {
            this.subscriptions.push(
      
              this._licenseProjectBuyerService.acceptOrRejectBuyerContract(this.buyer?.id  as string,this.licenseProjectBuyerStatus.Cerified).subscribe((res:CoreResponseDTO<any>) => {
                if (res.isDone) {
                  this._toastrNotificationService.showSuccess(" تم حفظ  توثيق العقد ");
                  this.getContracts();
                  this.closeDialog();
                }
                else
                  this._toastrNotificationService.showError(" لم يتم حفظ توثيق العقد");
        
        
              })
            )
          }
          else
          {
            this.subscriptions.push(
      
              this._licenseProjectBuyerService.acceptOrRejectBuyerContract(this.buyer?.id  as string,this.licenseProjectBuyerStatus.RejectCertified).subscribe((res:CoreResponseDTO<any>) => {
                if (res.isDone) {
                  this._toastrNotificationService.showSuccess(" تم حفظ رفض توثيق العقد ");
                  this.getContracts();
                  this.closeDialog();
                }
                else
                  this._toastrNotificationService.showError(" لم يتم حفظ  رفض توثيق العقد");
        
        
              })
            )
          }

        
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
