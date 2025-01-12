import { Component , OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { Delegatorstabledata } from '../../dataModels/delegators-model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-delegators',
  templateUrl: './delegators.component.html',
  styleUrls: ['./delegators.component.scss']
})
export class delegatorsComponent implements OnInit {
  subscriptions: Subscription[] = [];

  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 2,
    totalCount: 0,
  };

  commissionersdata : Delegatorstabledata[] = [
    {
      id: "1",
      identityNumber: "121524582",
      mobileNumber: "121524582",
      email: "121524582",
      name: "121524582",
      nationalityName: "سعودي",
      isProfileCreated: true,
      departmentId: "121524582",
      departmentName: "121524582",
      employeeTypeId: 121524582,
      employeeTypeName: "121524582",
    },
    {
      id: "2",
      identityNumber: "121524582",
      mobileNumber: "121524582",
      email: "121524582",
      name: "121524582",
      nationalityName: "121524582",
      isProfileCreated: false,
      departmentId: "121524582",
      departmentName: "121524582",
      employeeTypeId: 121524582,
      employeeTypeName: "121524582",
    },
    {
      id: "3",
      identityNumber: "121524582",
      mobileNumber: "121524582",
      email: "121524582",
      name: "121524582",
      nationalityName: "121524582",
      isProfileCreated: true,
      departmentId: "121524582",
      departmentName: "121524582",
      employeeTypeId: 121524582,
      employeeTypeName: "121524582",
    }
  ]
  reqList: Pagination<Delegatorstabledata[]> = {} as Pagination<Delegatorstabledata[]>;

  constructor(public dialog: MatDialog, private _router: Router,
    private _paginationService: PaginationService) {

  }

  ngOnInit(): void {
    // this.getCommissionersData()
  }



  // private updateRequestList(TypeListView: Pagination<Commissionerstabledata[]>): void {
  //   this.reqList = TypeListView;
  //   this.setPaginationData(
  //     this.reqList.pageSize,
  //     this.reqList.totalCount,
  //     this.reqList.pageCount
  //   );
  // }



  getCommissionersData() {
    // this.subscriptions.push(
    //   this._comservice.getCommissioners(this.pagintationData.currentPage, this.pagintationData.pageSize)
    //   .subscribe((res: Pagination<Commissionerstabledata[]>) => {
    //     this.updateRequestList(res as Pagination<Commissionerstabledata[]>)
    //     })
    // )
  }


  DeleteCommissioners(id :string){
  //   console.log(id)
  //   this._comservice.deletCommissioner(id).subscribe(res=>{
  //     if(res.isDone){
  //       this.getCommissionersData
  //     }
  //   })
  }
}
