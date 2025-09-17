import { Component } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { pagination, Pagination } from 'src/app/shared/models/pagination.model';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import {
  LicenseProjectRecommendationDto,
  OwnerTypeEnum,
  RecommendationNumberByStatus,
} from '../../models/license-project-recommendations';
import { LicenseProjectRecommendationService } from '../../service/license-project-recommendation-service';
import { RecommendationViewComponent } from './recommendation-view/recommendation-view.component';
import { LicenseRequestListService } from '../../services/license-request-list-service.service';
import { RecommendationReplyComponent } from './recommendation-reply/recommendation-reply.component';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserTypeEnum } from '../../enums/user-type.enum';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { QualificationType } from '../../../qualifying/dataModels/enum/qualification-request-type';
import { SysStatusIssueTypeEnum } from '../../enums/SysStatusIssueType.enum';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  standalone: false,
})
export class RecommendationsComponent {
  recommendationList: Pagination<LicenseProjectRecommendationDto[]> =
    {} as Pagination<LicenseProjectRecommendationDto[]>;
  recommendationNumberByStatus: RecommendationNumberByStatus = {
    closeRecommendationNumber: 0,
    openRecommendationNumber: 0,
    totalRecommendationNumber: 0,
  };
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  subscriptions: Subscription[] = [];
  ownerTypeId = OwnerTypeEnum;
  newPageNo: number = 1;
  userTypesEnum: UserTypeEnum = UserTypeEnum.Developer;
  userData: customerResponse | null = null;
  sysStatusIssueTypeEnum = SysStatusIssueTypeEnum;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };

  constructor(
    private _licenseProjectRecommendationService: LicenseProjectRecommendationService,
    private _paginationService: PaginationService,
    private _customerService: UserDataService,
    private _licenseRequestListService: LicenseRequestListService,
    private _pupupService: PopupService
  ) {}

  ngOnInit(): void {
    this.obseveCustomerData();
    this.getLicenseProjectIdStorage();
    this.loadComponentData();
    this.watchPaginationActions();
    this.observesubmitSuccessfullyEventEmitter();
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
      this._licenseProjectRecommendationService.getRecommendationNumberByStatus(
        this.licenseProjectId
      ),
      this._licenseProjectRecommendationService.getLicenseProjectRecommendationsByLicenseProjectId(
        this.licenseProjectId,
        this.pagintationData.currentPage,
        this.pagintationData.pageSize
      ),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.recommendationNumberByStatus =
          results[0] as RecommendationNumberByStatus;
        this.updateRequestList(
          results[1] as Pagination<LicenseProjectRecommendationDto[]>
        );
      }
    });
    this.subscriptions.push(subscriptions);
  }
  sendNotificationDialog(id: string): void {
    localStorage.setItem('licenseProjectRecommendationId', id);
    let Data = {
      id: id,
      title: 'ارسال رد',
      component: RecommendationReplyComponent,
      buttons: [],
    } as PopupData;
    this.updateAndOpenData(Data);
  }

  private observesubmitSuccessfullyEventEmitter() {
    this.subscriptions.push(
      this._licenseProjectRecommendationService.submitSuccessfullyEventEmitter.subscribe(
        (res) => {
          this.loadComponentData();
        }
      )
    );
  }

  editRecommendation(id: string | null) {
    this.subscriptions.push(
      this._licenseProjectRecommendationService
        .getLicenseProjectRecommendationsById(id)
        .subscribe((res: LicenseProjectRecommendationDto) => {
          if (res) {
            this._licenseProjectRecommendationService.SetLicenseProjectRecommendations(
              res as LicenseProjectRecommendationDto
            );
          }
        })
    );
  }

  viewRecommendation(id: string) {
    this.subscriptions.push(
      this._licenseProjectRecommendationService
        .getLicenseProjectRecommendationsById(id)
        .subscribe((res: LicenseProjectRecommendationDto) => {
          if (res) {
            this._licenseProjectRecommendationService.SetViewRecommendation(
              res as LicenseProjectRecommendationDto
            );
          }
        })
    );
  }

  viewDialog(id: string): void {
    if (id) this.viewRecommendation(id);
    let Data = {
      id: id,
      title: 'عرض  التوصية',
      component: RecommendationViewComponent,
      buttons: [],
    } as PopupData;
    this.updateAndOpenData(Data);
  }

  private updateAndOpenData(data: PopupData) {
    this._pupupService.updatePopupData(data);
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._licenseRequestListService.getLicenseProjectIdStorage() as string;
  }

  private updateRequestList(
    TypeListView: Pagination<LicenseProjectRecommendationDto[]>
  ): void {
    this.recommendationList = TypeListView;
    this.setPaginationData(
      this.recommendationList.pageSize,
      this.recommendationList.totalCount,
      this.recommendationList.pageCount
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

  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.loadComponentData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
