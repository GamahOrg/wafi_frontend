import { Component, EventEmitter, Output } from '@angular/core';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PeriodicCharteredAccountantReportService } from '../../services/periodic-chartered-accountant-report.service';
import { Subscription } from 'rxjs';
import { PeriodicCharteredAccountantReportDetailsDto, PeriodicCharteredAccountantReportExchangeDocumentDto } from '../../models/periodic-chartered-accountant-report-details-dto';
import * as saveAs from 'file-saver';
import { environment } from 'src/environments/environment';
import { PeriodicCharteredAccountantReportStatusEnum, PeriodicCharteredAccountantReportTypeEnum } from '../../models/periodic-chartered-accountant-report-paging-list-dto';
import { LicenseProjectExchangeDocumentWithdrawalMethodEnum } from '../../dataModels/license-project-exchange-document-paging-dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ExchangeDocumentDetailsPopupComponent } from '../exchange-document-details-popup/exchange-document-details-popup.component';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Component({
  selector: 'app-periodic-chartered-accountant-report-details',
  templateUrl: './periodic-chartered-accountant-report-details.component.html',
  styleUrls: ['./periodic-chartered-accountant-report-details.component.scss'],
})
export class PeriodicCharteredAccountantReportDetailsComponent {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  reportId: string | null = '00000000-0000-0000-0000-000000000000';
  reportDetails: PeriodicCharteredAccountantReportDetailsDto | null = null;
  periodicCharteredAccountantReportTypeEnum =
    PeriodicCharteredAccountantReportTypeEnum;
  periodicCharteredAccountantReportStatusEnum =
    PeriodicCharteredAccountantReportStatusEnum;
  withdrawalMethodEnum = LicenseProjectExchangeDocumentWithdrawalMethodEnum;
  @Output() back = new EventEmitter<void>();

  // Pagination for exchange documents table
  exchangeDocumentsPageSize: number = 10;
  exchangeDocumentsCurrentPage: number = 1;
  exchangeDocumentsPaged: Pagination<PeriodicCharteredAccountantReportExchangeDocumentDto[]> = {
    results: [],
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };

  backToList(): void {
    this.back.emit();
  }

  // اجمالي المبالغ المتوفره في الحسابت الفرعية
  get subAccountsTotalAvailableAmount(): number {
    const r = this.reportDetails;
    if (!r) return 0;
    return (
      (r.constructionCostsAvailableAmount ?? 0) +
      (r.administrativeAndMarketingAvailableAmount ?? 0) +
      (r.custodyAvailableAmount ?? 0) +
      (r.incentivesSubIBANAvailableAmount ?? 0) +
      (r.financingSubIBANAvailableAmount ?? 0)
    );
  }

  constructor(
    private _popupService: PopupService,
    private _periodicCharteredAccountantReportService:PeriodicCharteredAccountantReportService
  ) { }

  ngOnInit(): void {
    this.getAccountReportId();
  }

  getAccountReportId(): void {
    this.reportId = this._periodicCharteredAccountantReportService.getLicenseProjectAccountReportIdStorage();
    if (this.reportId) {
      this.getReportDetails();
      this.loadExchangeDocumentsPage();
    }
  }

  getReportDetails(){
    this.subscriptions.push(
      this._periodicCharteredAccountantReportService.GetPeriodicCharteredAccountantReportDetail(this.reportId as string).subscribe((res: PeriodicCharteredAccountantReportDetailsDto) => {
        this.reportDetails  = res as PeriodicCharteredAccountantReportDetailsDto;
      })
    )
  }

  loadExchangeDocumentsPage(): void {
    if (!this.reportId) return;
    this.subscriptions.push(
      this._periodicCharteredAccountantReportService
        .GetReportExchangeDocumentsPaged(
          this.reportId,
          this.exchangeDocumentsCurrentPage,
          this.exchangeDocumentsPageSize,
        )
        .subscribe((res) => {
          if (res) {
            this.exchangeDocumentsPaged = res;
          }
        }),
    );
  }

  onExchangeDocumentsPageChanged(event: any): void {
    if (event?.page && event.page !== this.exchangeDocumentsCurrentPage) {
      this.exchangeDocumentsCurrentPage = event.page;
      this.loadExchangeDocumentsPage();
    }
  }
  
  generateExcel() {
    this._periodicCharteredAccountantReportService.CreateExcel(this.reportId as string).subscribe((res) => {
      if (res) {
        const fileName = `report_${this.reportId}.xlsx`;
        saveAs(res.body,fileName);
      }
    });
  }

  openExchangeDocumentDetailsPopup(
    exchangeDocument: PeriodicCharteredAccountantReportExchangeDocumentDto,
  ): void {
    const popupData: PopupData = {
      iconClass: 'hgi hgi-stroke hgi-profile',
      title: 'بيانات إضافية لتفاصيل وثائق الصرف',
      component: ExchangeDocumentDetailsPopupComponent,
      data: exchangeDocument,
      buttons: [],
    };
    this._popupService.updatePopupData(popupData);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
