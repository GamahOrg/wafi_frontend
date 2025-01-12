import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/core/services/language/language.service';
import { pagination } from '../../models/pagination.model';
import { PaginationService } from '../../services/pagination/pagination.service';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  currentLang: string = '';

  // currentPage: number = 1;
  nextPage: number = 1;
  // size = 10;

  currentPage: number = 1;
  pagintationData: pagination = {
    currentPage: 0,
    pageCount: 0,
    pageSize: 0,
    totalCount: 0,
  };
  subscriptions: Subscription[] = [];

  constructor(
    private _languageService: LanguageService,
    private paginationService: PaginationService
  ) {
    _languageService.currentLang.subscribe((lang) => (this.currentLang = lang));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
  ngOnInit(): void {
    this.watchPaginationData();
    this.watchCurrentPage();
    this.watchNextPage();
  }
  watchCurrentPage(): void {
    this.subscriptions.push(
      this.paginationService.getCurrentPage().subscribe((res) => {
        this.currentPage = res;
      })
    );
  }
  watchPaginationData(): void {
    this.subscriptions.push(
      this.paginationService
        .getPaginationData()
        .subscribe((pagintationData: pagination) => {
          this.pagintationData = pagintationData;
          // this.pagintationData.totalCount =
          // this.pagintationData.totalCount * this.pagintationData.pageSize;
        })
    );
  }
  watchNextPage(): void {
    this.subscriptions.push(
      this.paginationService.getPageChanged().subscribe((nextPage: number) => {
        this.nextPage = nextPage;
      })
    );
  }

  pageChanged(e: any): void {
    this.nextPage = e.page;
    this.paginationService.updatePageChanged(this.nextPage);
  }
  clickOnPagination(event: any): void {
    if (!event?.srcElement.className.includes('disabled')) {
      this.paginationService.updatePageClicked(this.nextPage);
    }
  }
}
