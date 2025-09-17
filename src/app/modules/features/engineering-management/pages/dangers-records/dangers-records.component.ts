import { Component } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { Pagination, type pagination } from 'src/app/shared/models/pagination.model';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { RecordShowDangerLogComponent } from './record-show-danger-log/record-show-danger-log.component';
import { RecordAddEditDangerLogComponent } from './record-add-edit-danger-log/record-add-edit-danger-log.component';
import { LicenseRequestListService } from '../../services/license-request-list-service.service';
import { LicenseProjectRiskCountsDto, LicenseProjectRiskPagingDto, RiskStatus } from '../../models/license-project-risk-dto';
import { LicenseProjectRiskService } from '../../services/license-project-risk.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';

import { OwnerTypeEnum } from '../../models/license-project-recommendations';
import { DangerReplyComponent } from './danger-reply/danger-reply.component';
import { UserTypeEnum } from '../../enums/user-type.enum';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { QualificationType } from '../../../qualifying/dataModels/enum/qualification-request-type';

@Component({
  selector: 'app-dangers-records',
  templateUrl: './dangers-records.component.html',
  styleUrls: ['./dangers-records.component.scss'],
  standalone: false
})
export class DangersRecordsComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };

  userData: customerResponse | null = null;
  userTypesEnum: UserTypeEnum = UserTypeEnum.Developer;
  userType: UserTypeEnum | null = null
  reqList: Pagination<LicenseProjectRiskPagingDto[]> = {} as Pagination<LicenseProjectRiskPagingDto[]>;
  licenseProjectRiskCounts?: LicenseProjectRiskCountsDto;
  ownerTypeId = OwnerTypeEnum
  riskStatus=RiskStatus;
  constructor(
    private _licenseProjectRiskService: LicenseProjectRiskService,
    private _licenseRequestListService: LicenseRequestListService,
    private _popupService: PopupService,
    private _paginationService: PaginationService,
    private _customerService: UserDataService,
  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.obseveCustomerData();
    this.observeconfirmAction();
    this.watchPaginationActions();
    this.observesubmitSuccessfullyEventEmitter();
  }


  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._licenseRequestListService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.loadComponentData();
    }
  }
  obseveCustomerData(): void {
    this.subscriptions.push(
      this._customerService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (this.userData && this.userData.facilities && this.userData.facilities.length > 0)
            this.checkIfAccountantFacility(this.userData.facilities[0].id)
        })
    );
  }

  isDeveloper: boolean = false;
  public checkIfAccountantFacility(facilityId: string): void {
    this.subscriptions.push(
      this._customerService.getFacilityQualificationTypeCode(facilityId).subscribe((res: string | null) => {
        this.isDeveloper = res == QualificationType.realStateDeveloperQualificationRequest ||
          res == QualificationType.realEstateDeveloperSpecializingInRealEstateParticipation;      
      })
    )
  }

  loadComponentData(): void {

    const requests = [
      this._licenseProjectRiskService.getLicenseProjectRiskCounts(this.licenseProjectId as string, null),
      this._licenseProjectRiskService.getLicenseProjectRisks(this.licenseProjectId as string, this.pagintationData.currentPage, this.pagintationData.pageSize, null),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {


        this.licenseProjectRiskCounts = results[0] as LicenseProjectRiskCountsDto;
        this.updateRequestList(results[1] as Pagination<LicenseProjectRiskPagingDto[]>);
      }
    });
    this.subscriptions.push(subscriptions);


  }



  private updateRequestList(licenseProjectRiskResult: Pagination<LicenseProjectRiskPagingDto[]>): void {
    this.reqList = licenseProjectRiskResult;
    if (this.reqList && this.reqList.results && this.reqList.results.length > 0) {
      this.reqList.results.forEach(item => {
        if (item.effect && item.probability) {
          let multiplyValue = item.effect * item.probability;
          if (multiplyValue >= 20 && multiplyValue <= 25) {
            item.priorityClassValue = "veryhigh"
          }
          else if (multiplyValue >= 15 && multiplyValue <= 19) {
            item.priorityClassValue = "high"
          }
          else if (multiplyValue >= 6 && multiplyValue <= 14) {
            item.priorityClassValue = "medium"
          }
          else if (multiplyValue >= 1 && multiplyValue <= 5) {
            item.priorityClassValue = "low"
          }
        }
        if (item.riskType) {
          if (item.riskStatusId === RiskStatus.turnOnProblem) {
            item.statusClassValue = "veryhigh"
          }
          else if (item.riskStatusId === RiskStatus.closed) {
            item.statusClassValue = "low"
          }
          else if (item.riskStatusId === RiskStatus.opened) {
            item.statusClassValue = "medium"
          }
        }

      });

    }
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

  private observeconfirmAction() {

    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
      })
    )
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
  private observesubmitSuccessfullyEventEmitter() {
    this.subscriptions.push(
      this._licenseProjectRiskService.submitSuccessfullyEventEmitter.subscribe(res => {
        this.loadComponentData()
      }));
  }
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;

    this.loadComponentData()
  }

  sendNotificationDialog(id: string): void {
    localStorage.setItem("licenseProjectRiskId", id);
    let Data = {
      id: id,
      title: "ارسال رد",
      component: DangerReplyComponent,
      buttons: []
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  openEditDangerLogDialog(licenseProjectRiskId: string): void {
    this._licenseProjectRiskService.setLicenseProjectRiskId(licenseProjectRiskId);
    let Data = {
      title: "اضافة او تعديل الخطر",
      component: RecordAddEditDangerLogComponent,
      id: "AddEditDangerLogComponent",
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  openShowDangerLogDialog(licenseProjectRiskId: string): void {
    this._licenseProjectRiskService.setLicenseProjectRiskId(licenseProjectRiskId);
    let Data = {
      title: "عرض تفاصيل الخطر",
      component: RecordShowDangerLogComponent,
      id: "ShowDangerLogComponent",
      buttons: []
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
