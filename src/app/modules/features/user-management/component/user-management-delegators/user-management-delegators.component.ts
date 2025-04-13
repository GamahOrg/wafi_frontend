import { Component } from '@angular/core';
import { CustomerShortDto } from '../../../license/models/facility-short-dto';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { Subscription } from 'rxjs';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { UserManagementDelegatorsService } from '../../services/user-management-delegators.service';
import { CustomerFacilitiesService } from '../../services/customer-facilities.service';
import { RelatedCustomerListDto } from '../../dataModels/related-customer-list-dto';

@Component({
  selector: 'app-user-management-delegators',
  templateUrl: './user-management-delegators.component.html',
  styleUrls: ['./user-management-delegators.component.scss']
})
export class UserManagementDelegatorsComponent {
  reqList: Pagination<RelatedCustomerListDto[]> = {} as Pagination<RelatedCustomerListDto[]>;
  subscriptions: Subscription[] = [];
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  constructor(
    private _userManagementDelegatorsService: UserManagementDelegatorsService,
    private _paginationService: PaginationService,
    private _customerFacilitiesService: CustomerFacilitiesService,
) { }
ngOnInit(): void {
  this.getDelegators();
  this.watchPaginationActions();
}

getDelegators(): void {
 
  this.subscriptions.push(
    this._customerFacilitiesService.GetRelatedCustomerList(this.pagintationData.currentPage, this.pagintationData.pageSize)
      .subscribe((res: Pagination<RelatedCustomerListDto[]> |null) => {
        if(res && res.results.length > 0)
        this.updateRequestList(res as Pagination<RelatedCustomerListDto[]>)
      })
  
  )
}
private updateRequestList(TypeListView: Pagination<RelatedCustomerListDto[]>): void {
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
  this.getDelegators()
}
ngOnDestroy(): void {
  this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
}
}
