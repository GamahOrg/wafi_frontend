import { Component } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { LicenseProjectExchangeDocumentDto } from '../../dataModels/license-project-exchange-document-dto';
import { LicenseProjectExchangeDocumentService } from '../../services/license-project-exchange-document.service';
import { LicenseProjectDto } from '../../dataModels/license-project-risk-dto';
import { DatePipe } from '@angular/common';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectAccountsDto } from '../../dataModels/license-project-buyer-dto';
import { LicenseDepositDocumentService } from '../../services/license-deposit-document.service';
import { LicenseProjectExchangeDocumentSubItemEnum } from '../../dataModels/license-project-exchange-document-paging-dto';
import { environment } from 'src/environments/environment';
import { LicenseProjectExchangeDocumentFileDto } from '../../dataModels/license-project-exchange-document-create-update-dto';

@Component({
  selector: 'app-show-detail-exchange-document',
  templateUrl: './show-detail-exchange-document.component.html',
  styleUrls: ['./show-detail-exchange-document.component.scss']
})
export class ShowDetailExchangeDocumentComponent {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseProjectExchangeDocumentFile: LicenseProjectExchangeDocumentFileDto[] = [];
  licenseProjectExchangeDocument?: LicenseProjectExchangeDocumentDto;
  licenseProject?:LicenseProjectDto
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  licenseProjectExchangeDocumentId: string | null = "00000000-0000-0000-0000-000000000000";  
  licenseProjectAccounts: LicenseProjectAccountsDto = {} as LicenseProjectAccountsDto;
  licenseProjectExchangeDocumentSubItemEnum = LicenseProjectExchangeDocumentSubItemEnum;
  
  constructor(
  private _licenseProjectExchangeDocumentService: LicenseProjectExchangeDocumentService,
  private _sharedLicenseProjectService: SharedLicenseProjectService,
  private datePipe: DatePipe,
  private _licenseDepositDocument: LicenseDepositDocumentService,
  ) {}

  ngOnInit(): void {
    this.getLicenseProjectIdStorage()
    // this.getLicenseProjectExchangeDocumentIdStorage();
  }

  private getLicenseProjectExchangeDocumentIdStorage(): void {
    this.licenseProjectExchangeDocumentId = this._licenseProjectExchangeDocumentService.getLicenseProjectExchangeDocumentIdStorage();
    this.loadComponentData();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getLicenseProjectExchangeDocumentIdStorage();
      this.getAccountNumber();
    }
  }

  loadComponentData(): void {
    const requests = [
      this._licenseProjectExchangeDocumentService.getLicenseProjectData(this.licenseProjectId as string),
      this._licenseProjectExchangeDocumentService.getLicenseProjectExchangeDocumentDetail( this.licenseProjectExchangeDocumentId as string)
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.licenseProject = results[0] as LicenseProjectDto;
        this.licenseProjectExchangeDocument = results[1] as LicenseProjectExchangeDocumentDto;
        if (this.licenseProjectExchangeDocument) {
          this.licenseProjectExchangeDocumentFile = this.licenseProjectExchangeDocument.licenseProjectExchangeDocumentFiles;
          this.licenseProjectExchangeDocument.exchangeDate = this.datePipe.transform(this.licenseProjectExchangeDocument.exchangeDate, 'yyyy-MM-dd') as any;
          this.licenseProjectExchangeDocument.approvalDate = this.datePipe.transform(this.licenseProjectExchangeDocument.approvalDate, 'yyyy-MM-dd') as any;
        }
      }
    });
    this.subscriptions.push(subscriptions);
  }

  private getAccountNumber(): void {
    this.subscriptions.push(
      this._licenseDepositDocument.GetAccountNumber(this.licenseProjectId as string).subscribe((result) => {
      this.licenseProjectAccounts = result as LicenseProjectAccountsDto
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

}
