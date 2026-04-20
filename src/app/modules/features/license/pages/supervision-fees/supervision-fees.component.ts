import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { SupervisionFeesService } from '../../services/supervision-fees.service';

@Component({
  selector: 'app-supervision-fees',
  templateUrl: './supervision-fees.component.html',
  styleUrls: ['./supervision-fees.component.scss'],
  providers: [PaginationService],
})
export class SupervisionFeesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  feesList: Pagination<any[]> = {} as Pagination<any[]>;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };

  constructor(
    private _supervisionFeesService: SupervisionFeesService,
    private _paginationService: PaginationService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getSupervisionFees();
    this.watchPaginationActions();
  }

  getSupervisionFees(): void {
    this.subscriptions.push(
      this._supervisionFeesService
        .getSupervisionFees(
          this.pagintationData.currentPage,
          this.pagintationData.pageSize
        )
        .subscribe((res: Pagination<any[]> | null) => {
          if (res) {
            this.feesList = res;
            this.setPaginationData(
              this.feesList.pageSize,
              this.feesList.totalCount,
              this.feesList.pageCount
            );
          }
        })
    );
  }

  private setPaginationData(
    pageSize: number,
    total: number,
    pageCount: number
  ): void {
    this.pagintationData.pageCount = pageCount;
    this.pagintationData.pageSize = pageSize;
    this.pagintationData.totalCount = total;
    this._paginationService.updatePaginationData(this.pagintationData);
  }

  watchPaginationActions(): void {
    this.watchPagechanged();
    this.watchPaginationClicked();
  }

  private newPageNo: number = 1;

  private watchPagechanged(): void {
    this.subscriptions.push(
      this._paginationService.getPageChanged().subscribe((pageNo) => {
        this.newPageNo = pageNo;
      })
    );
  }

  private watchPaginationClicked(): void {
    this.subscriptions.push(
      this._paginationService
        .getPageClicked()
        .subscribe((nextPage: number) => {
          if (this.pagintationData.currentPage != nextPage) {
            this.pagintationData.currentPage = nextPage;
            this.getSupervisionFees();
          }
        })
    );
  }

  navigateToAddFee(): void {
    // TODO: Navigate to add new fee page when ready
  }

  editFee(fee: any): void {
    // TODO: Navigate to edit fee page when ready
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
