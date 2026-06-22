import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { SupervisionFeesService } from '../../services/supervision-fees.service';

@Component({
  selector: 'app-supervision-fee-invoices',
  templateUrl: './supervision-fee-invoices.component.html',
  styleUrls: ['./supervision-fee-invoices.component.scss'],
  providers: [PaginationService],
})
export class SupervisionFeeInvoicesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  invoicesList: Pagination<any[]> = {} as Pagination<any[]>;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  searchText: string = '';

  constructor(
    private _supervisionFeesService: SupervisionFeesService,
    private _paginationService: PaginationService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getInvoices();
    this.watchPaginationActions();
  }

  getInvoices(): void {
    this.subscriptions.push(
      this._supervisionFeesService
        .getInvoices(
          this.pagintationData.currentPage,
          this.pagintationData.pageSize,
          this.searchText || undefined
        )
        .subscribe((res: Pagination<any[]> | null) => {
          if (res) {
            this.invoicesList = res;
            this.setPaginationData(
              this.invoicesList.pageSize,
              this.invoicesList.totalCount,
              this.invoicesList.pageCount
            );
          }
        })
    );
  }

  onSearch(): void {
    this.pagintationData.currentPage = 1;
    this.getInvoices();
  }

  onSearchKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }

  viewDetails(invoiceId: string): void {
    this._supervisionFeesService.setSelectedInvoiceId(invoiceId);
    this._router.navigate([
      '/',
      Configuration.modules.wafi,
      Configuration.modules.license,
      Configuration.pages.license.supervisionFeeInvoiceDetails,
    ]);
  }

  retryInvoice(calcId: string): void {
    this.subscriptions.push(
      this._supervisionFeesService.retryInvoice(calcId).subscribe((res) => {
        if (res?.isDone) {
          this.getInvoices();
        }
      })
    );
  }

  getStatusClass(status: number): string {
    switch (status) {
      case 1: return 'green';
      case 2: return 'red';
      case 3: return 'black';
      case 4: return 'red';
      default: return 'orange';
    }
  }

  private setPaginationData(pageSize: number, total: number, pageCount: number): void {
    this.pagintationData.pageCount = pageCount;
    this.pagintationData.pageSize = pageSize;
    this.pagintationData.totalCount = total;
    this._paginationService.updatePaginationData(this.pagintationData);
  }

  watchPaginationActions(): void {
    this.watchPagechanged();
    this.watchPaginationClicked();
  }

  private watchPagechanged(): void {
    this.subscriptions.push(
      this._paginationService.getPageChanged().subscribe((_pageNo) => {})
    );
  }

  private watchPaginationClicked(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.pagintationData.currentPage !== nextPage) {
          this.pagintationData.currentPage = nextPage;
          this.getInvoices();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
