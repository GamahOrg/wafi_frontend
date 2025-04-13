import { Component, OnInit } from '@angular/core';
import { delegatoractionsComponent } from '../delegator-actions/delegator-actions.component';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { Delegatorstabledata } from '../../dataModels/delegators-model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { Subscription, first } from 'rxjs';
import { RegistrationRequestService } from '../../services/registration-request/registration-request.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-registration-request',
  templateUrl: './registration-request.component.html',
  styleUrls: ['./registration-request.component.scss']
})
export class RegistrationRequestComponent implements OnInit {
  subscriptions: Subscription[] = [];
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };

  localization = {
    deletConfirmedSuccessfully: "تم المسح بنجاح"
  }

  reqList: Pagination<Delegatorstabledata[]> = {} as Pagination<Delegatorstabledata[]>;

  constructor( private _registrationrequestservice: RegistrationRequestService,
    private _paginationService: PaginationService, private _pupupService: PopupService,
    private _toastrNotificatioService: ToastrNotificatioService) {

  }

  ngOnInit(): void {
    this.getCommissionersData() 
    this.watchPaginationActions()
  }

  
 private updateAndOpenData(data: PopupData) {
    var popRef = this._pupupService.updatePopupData(data);
   
  }
  
   openDialog(id?: string): void {
    this._registrationrequestservice.submitSuccessfullyEventEmitter.subscribe(()=>{
      this.pagintationData = {
        currentPage: 1,
        pageCount: 0,
        pageSize: 10,
        totalCount: 0,
      };
      this.getCommissionersData()
    })
    let Data = {
      id: id ,
      title: id? " تعديل المفوض": "إضافة مفوض جديد" ,
      component: delegatoractionsComponent
    } as PopupData;
    this.updateAndOpenData(Data);

  }



 

  private updateRequestList(TypeListView: Pagination<Delegatorstabledata[]>): void {
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

    this.getCommissionersData()
  }

  getCommissionersData() {
    this.subscriptions.push(
      this._registrationrequestservice.getCommissioners(this.pagintationData.currentPage, this.pagintationData.pageSize)
        .subscribe((res: Pagination<Delegatorstabledata[]>) => {
          console.log("this.reqList", res)
          this.updateRequestList(res as Pagination<Delegatorstabledata[]>)
        })
    )
  }

  private showNotificationForٍSucssedDeleted(): void {
    this._toastrNotificatioService.showSuccess(this.localization.deletConfirmedSuccessfully)
  }
  
  trackByFnMultipleFields(index : number , item :  Delegatorstabledata){
    return item.identityNumber + item.mobileNumber + item.email
  }

  DeleteCommissioners(id :string){
    this.subscriptions.push(
      this._registrationrequestservice.deletCommissioner(id).subscribe(res=>{
        if(res.isDone){
          this.showNotificationForٍSucssedDeleted()
          this.getCommissionersData()
          
        }
      })

    )
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
