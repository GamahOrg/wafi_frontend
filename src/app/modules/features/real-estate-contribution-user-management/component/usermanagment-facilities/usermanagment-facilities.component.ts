import { Component , OnInit} from '@angular/core';
import { pagination, Pagination } from 'src/app/shared/models/pagination.model';
import { FacilityShortDto } from '../../../real-estate-contributions-license/models/facility-short-dto';
import { Subscription } from 'rxjs';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RelatedCustomersComponent } from '../related-customers/related-customers.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { CustomerFacilitiesService } from '../../services/customer-facilities.service';
import { AddFacilityComponent } from '../add-facility/add-facility.component';


@Component({
  selector: 'app-usermanagment-facilities',
  templateUrl: './usermanagment-facilities.component.html',
  styleUrls: ['./usermanagment-facilities.component.scss']
})
export class UsermanagmentFacilitiesComponent implements OnInit{

  reqList: Pagination<FacilityShortDto[]> = {} as Pagination<FacilityShortDto[]>;
  subscriptions: Subscription[] = [];
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  constructor(
    private _customerFacilitiesService: CustomerFacilitiesService,
    private _paginationService: PaginationService,
    private _pupupService: PopupService,
) { }
ngOnInit(): void {
  this.getFacilities();
  this.watchPaginationActions();
}

getFacilities(): void {
 
  this.subscriptions.push(
    this._customerFacilitiesService.getFacilities(this.pagintationData.currentPage, this.pagintationData.pageSize)
      .subscribe((res: Pagination<FacilityShortDto[]> |null) => {
        if(res && res.results.length > 0)
        this.updateRequestList(res as Pagination<FacilityShortDto[]>)
      })
  
  )
}

private updateRequestList(TypeListView: Pagination<FacilityShortDto[]>): void {
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
  this.getFacilities()
}

assignSubCustomerOnFacility(facility:any): void {
  this._customerFacilitiesService.setFacilityObj(facility as FacilityShortDto);
  let Data = {
    title: "تعين مفوضين على المنشأه",
    component: RelatedCustomersComponent,
    id: "RelatedCustomersComponent"
  } as PopupData;
  this._pupupService.updatePopupData(Data);
}
addFacility(): void {
  let Data = {
    title: "اضافة منشأة",
    component: AddFacilityComponent,
    id: "AddFacilityComponent"
  } as PopupData;
  let dialogRef=this._pupupService.updatePopupData(Data);
   dialogRef.afterClosed().subscribe(_=> this.getFacilities());
}
ngOnDestroy(): void {
  this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
}

}
