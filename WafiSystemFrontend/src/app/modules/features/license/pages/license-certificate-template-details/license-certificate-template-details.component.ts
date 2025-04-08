import { Component } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { LicenseCertificateUnitDto } from '../../models/license-certificate-unit-dto';
import { LicenseCertificateTemplateService } from '../../services/license-certificate-template.service';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { LicenseCertificateTemplateDto } from '../../models/license-certificate-template-dto';

@Component({
  selector: 'app-license-certificate-template-details',
  templateUrl: './license-certificate-template-details.component.html',
  styleUrls: ['./license-certificate-template-details.component.scss']
})
export class LicenseCertificateTemplateDetailsComponent {
  subscriptions: Subscription[] = [];
  licenseCertificateTemplateId?: number;
  licenseCertificateTemplate?:LicenseCertificateTemplateDto;
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };

  reqList: Pagination<LicenseCertificateUnitDto[]> = {} as Pagination<LicenseCertificateUnitDto[]>;
  constructor(
    private _licenseCertificateTemplateService: LicenseCertificateTemplateService,
    private _paginationService: PaginationService,
  ) {}
  ngOnInit(): void {
    this.getLicenseCertificateTemplateIdFromLocalStorage()
    this.watchPaginationActions();
  }
  getLicenseCertificateTemplateIdFromLocalStorage(): void {
    
    let id = this._licenseCertificateTemplateService.getLicenseCertificateTemplateIdFromLocalStorage() as string;
    this.licenseCertificateTemplateId=Number(id);
    if(this.licenseCertificateTemplateId)
      this.loadComponentData();

      
   
      
  }
  private loadComponentData() {
    const requests = [
      this._licenseCertificateTemplateService.getByLicenseCertificateTemplateId(this.licenseCertificateTemplateId as number),
      this._licenseCertificateTemplateService.getlicenseCertificateUnitList(this.licenseCertificateTemplateId as number,this.pagintationData.currentPage, this.pagintationData.pageSize)
    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {
      
     this.licenseCertificateTemplate=results[0] as LicenseCertificateTemplateDto;
      this.updateRequestList(results[1] as Pagination<LicenseCertificateUnitDto[]>);
    });

    this.subscriptions.push(subscriptions);
  } 
  getlicenseCertificateUnitList(): void {
    this.subscriptions.push(
      this._licenseCertificateTemplateService.getlicenseCertificateUnitList(this.licenseCertificateTemplateId as number,this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe((res: Pagination<LicenseCertificateUnitDto[]> | null) => {
        
       this.updateRequestList(res as Pagination<LicenseCertificateUnitDto[]>);
      })
    )
  }
  private updateRequestList(licenseCertificateUnitResult: Pagination<LicenseCertificateUnitDto[]>): void {
    this.reqList = licenseCertificateUnitResult;
 
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

    this.getlicenseCertificateUnitList()
  }

  ngOnDestroy(): void {
    this._licenseCertificateTemplateService.clearLicenseCertificateTemplateIdFromLocalStorage();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

}
