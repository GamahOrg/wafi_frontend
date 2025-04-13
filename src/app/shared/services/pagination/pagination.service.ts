import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { pagination } from '../../models/pagination.model';

@Injectable()
export class PaginationService {
  currentPage: BehaviorSubject<number> = new BehaviorSubject(1);
  pageChanged: EventEmitter<number> = new EventEmitter<number>();
  pageClicked: EventEmitter<number> = new EventEmitter<number>();
  paginationData: BehaviorSubject<pagination> = new BehaviorSubject<pagination>(
    {
      currentPage: 0,
      pageCount: 0,
      pageSize: 0,
      totalCount: 0,
    }
  );
  getPageChanged(): Observable<number> {
    return this.pageChanged.asObservable();
  }
  updatePageChanged(pageIndex: number): void {
    this.pageChanged.emit(pageIndex);
  }
  getPageClicked(): Observable<number> {
    return this.pageClicked.asObservable();
  }
  updatePageClicked(nextPage: number): void {
    this.pageClicked.emit(nextPage);
  }

  getPaginationData(): Observable<pagination> {
    return this.paginationData.asObservable();
  }
  updatePaginationData(paginationData: pagination): void {
    this.paginationData.next(paginationData);
  }
  updateCurrentPage(page: number) {
    this.currentPage.next(page);
  }
  getCurrentPage(): Observable<number> {
    return this.currentPage.asObservable();
  }
}
