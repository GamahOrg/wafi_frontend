import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseCertificateTemplatePagingDto } from '../../models/license-certificate-template-paging-dto';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { LicenseCertificateTemplateService } from '../../services/license-certificate-template.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import {  Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-license-certificate-template-list',
  templateUrl: './license-certificate-template-list.component.html',
  styleUrls: ['./license-certificate-template-list.component.scss']
})
export class LicenseCertificateTemplateListComponent {
  subscriptions: Subscription[] = [];
  nidnumber?: string;
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  reqList: Pagination<LicenseCertificateTemplatePagingDto[]> = {} as Pagination<LicenseCertificateTemplatePagingDto[]>;
  constructor(
    private _licenseCertificateTemplateService: LicenseCertificateTemplateService,
    private _paginationService: PaginationService,
    private _router: Router,
  ) { }
  ngOnInit(): void {
    this.getContracts();
    this.watchPaginationActions();
  }

  getContracts(): void {
    this.subscriptions.push(
      this._licenseCertificateTemplateService.getLicenseCertificateTemplateList(this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe((res: Pagination<LicenseCertificateTemplatePagingDto[]> | null) => {
        debugger;
       this.updateRequestList(res as Pagination<LicenseCertificateTemplatePagingDto[]>);
      })
    )
  }
  private updateRequestList(licenseCertificateTemplateResult: Pagination<LicenseCertificateTemplatePagingDto[]>): void {
    this.reqList = licenseCertificateTemplateResult;
 
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
      showDetails(id:number)
      {
        debugger;
       this._licenseCertificateTemplateService.
        setLicenseCertificateTemplateIdInLocalStorage(id.toString());
        this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.licensecertificatetemplatedetails}`]);
      }
      AddProject(id:number)
      {
        debugger;
        this._licenseCertificateTemplateService.
        setLicenseCertificateTemplateIdInLocalStorage(id.toString());
        this._router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.addlicensecertificatetemplate}`]);
      }
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;

    this.getContracts()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
