import { Component } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { pagination, Pagination } from 'src/app/shared/models/pagination.model';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { EngineeringManagementLicenseProjectProblemService } from '../../service/license-project-problem.service';
import {
  levelType,
  LicenseProjectProblemPagingDto,
  LicenseProjectProblemsCountsDto,
  status,
} from '../../models/license-project-problem-paging-dto';
import { ShowProblemLogComponent } from './show-problem-log/show-problem-log.component';
import { LicenseRequestListService } from '../../services/license-request-list-service.service';
import { ProblemReplyComponent } from './problem-reply/problem-reply.component';
import { OwnerTypeEnum } from '../../models/license-project-recommendations';
import { UserTypeEnum } from '../../enums/user-type.enum';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { QualificationType } from '../../../qualifying/dataModels/enum/qualification-request-type';
import { SysProblemStatusEnum } from '../../enums/SysProblemStatusEnum';

@Component({
  selector: 'app-problem-log',
  templateUrl: './problem-log.component.html',
  styleUrls: ['./problem-log.component.scss'],
  standalone: false,
})
export class EngineerProblemLogComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  newPageNo: number = 1;
  ownerTypeId = OwnerTypeEnum;
  userTypesEnum: UserTypeEnum = UserTypeEnum.Developer;
  userData: customerResponse | null = null;
  sysProblemStatusEnum = SysProblemStatusEnum;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  reqList: Pagination<LicenseProjectProblemPagingDto[]> = {} as Pagination<
    LicenseProjectProblemPagingDto[]
  >;
  licenseProjectProblemCounts?: LicenseProjectProblemsCountsDto;
  levelType = levelType;
  status = status;
  constructor(
    private _licenseProjectProblemService: EngineeringManagementLicenseProjectProblemService,
    private _licenseRequestListService: LicenseRequestListService,
    private _popupService: PopupService,
    private _customerService: UserDataService,
    private _paginationService: PaginationService
  ) {}
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.obseveCustomerData();
    this.observeconfirmAction();
    this.watchPaginationActions();
    this.observesubmitSuccessfullyEventEmitter();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._licenseRequestListService.getLicenseProjectIdStorage();
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
          if (
            this.userData &&
            this.userData.facilities &&
            this.userData.facilities.length > 0
          )
            this.checkIfAccountantFacility(this.userData.facilities[0].id);
        })
    );
  }

  isDeveloper: boolean = false;
  public checkIfAccountantFacility(facilityId: string): void {
    this.subscriptions.push(
      this._customerService
        .getFacilityQualificationTypeCode(facilityId)
        .subscribe((res: string | null) => {
          this.isDeveloper =
            res == QualificationType.realStateDeveloperQualificationRequest ||
            res ==
              QualificationType.realEstateDeveloperSpecializingInRealEstateParticipation;
        })
    );
  }
  loadComponentData(): void {
    const requests = [
      this._licenseProjectProblemService.GetLicenseProjectProblemCounts(
        this.licenseProjectId as string,
        null
      ),
      this._licenseProjectProblemService.getLicenseProjectProblems(
        this.licenseProjectId as string,
        this.pagintationData.currentPage,
        this.pagintationData.pageSize,
        null
      ),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.licenseProjectProblemCounts =
          results[0] as LicenseProjectProblemsCountsDto;
        this.updateRequestList(
          results[1] as Pagination<LicenseProjectProblemPagingDto[]>
        );
      }
    });
    this.subscriptions.push(subscriptions);
  }
  private updateRequestList(
    licenseProjectProblemResult: Pagination<LicenseProjectProblemPagingDto[]>
  ): void {
    this.reqList = licenseProjectProblemResult;
    if (
      this.reqList &&
      this.reqList.results &&
      this.reqList.results.length > 0
    ) {
      this.reqList.results.forEach((item) => {
        if (item.levelTypeId) {
          if (item.levelTypeId == levelType.high) {
            item.levelClassValue = 'high';
          } else if (item.levelTypeId == levelType.medium) {
            item.levelClassValue = 'medium';
          } else if (item.levelTypeId == levelType.low) {
            item.levelClassValue = 'low';
          }
        }
        if (item.statusId) {
          if (item.statusId == status.opened) {
            item.statusClassValue = 'high';
          } else if (item.statusId == status.closed) {
            item.statusClassValue = 'medium';
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

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {})
    );
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
    );
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
      this._licenseProjectProblemService.submitSuccessfullyEventEmitter.subscribe(
        (res) => {
          this.loadComponentData();
        }
      )
    );
  }
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;

    this.loadComponentData();
  }

  openShowProblemLogDialog(licenseProjectProblemId: string): void {
    this._licenseProjectProblemService.setLicenseProjectProblemId(
      licenseProjectProblemId
    );
    let Data = {
      title: 'عرض تفاصيل المشكلة',
      component: ShowProblemLogComponent,
      id: 'ShowProblemLogComponent',
      buttons: [],
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  sendNotificationDialog(id: string): void {
    localStorage.setItem('licenseProjectProblemId', id);
    let Data = {
      id: id,
      title: 'إرسال رد',
      component: ProblemReplyComponent,
      buttons: [],
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
