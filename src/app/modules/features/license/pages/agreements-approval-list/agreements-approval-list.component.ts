import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, tap } from 'rxjs';
import { customerResponse } from '../../models/employee-registration-dto';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LicenseRequestService } from '../../services/license-request.service';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { ProjectAgreementSummaryDto, ProjectAgreementStatus } from '../../dataModels/project-agreement-summary.dto';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { ApprovalRole } from '../../dataModels/approval-role.model';
import { LicenseRequestTypeTypeCodeEnum } from '../../enums/license-requestType-typeCode.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { RatingTypeEnum } from 'src/app/shared/models/enums/rating.enum';
import { PopupData } from 'src/app/shared/models/popup.model';
import { RatingStatusDto, UserRatingUpdateDto } from 'src/app/shared/models/rating-request.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RatingService } from 'src/app/shared/services/rating/rating.service';
import { RatingComponent } from 'src/app/shared/components/rating/rating.component';
import { Guid } from 'src/app/core/configurations/guid';

@Component({
  selector: 'app-agreements-approval-list',
  templateUrl: './agreements-approval-list.component.html',
  styleUrls: ['./agreements-approval-list.component.scss'],
})
export class AgreementsApprovalListComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  private subscriptions: Subscription[] = [];
  agreementsList: Pagination<ProjectAgreementSummaryDto[]> = {} as Pagination<ProjectAgreementSummaryDto[]>;
  userData: customerResponse | null = null;
  newPageNo: number = 1;
  paginationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
   licenseRatingStatus!: RatingStatusDto[];
    selectedIndex: number = 0;
  constructor(
    private _licenseRequestService: LicenseRequestService,
    private _userDataService: UserDataService,
     private _sharedLocalStorage: SharedLicenseProjectService,
    private _paginationService: PaginationService,
    private router: Router,
        private _toastrNotificatioService: ToastrNotificatioService,
        private _ratingService: RatingService,
        private _popupService: PopupService,
  ) {}

  ngOnInit(): void {
    this.obseveCustomerData();
    this.watchPaginationActions();
   this.checkRating().subscribe((res) => {
      this.observePopupConfirmAction();
    });
  }
  observePopupConfirmAction(): void {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res) => {
        const ratingData = this._ratingService.currentRatingData.value;

        if (!ratingData) return;
        if (res && ratingData.id.includes('InstantLicenseServiceEaseOfUse'))
          this.dismissRating(ratingData);
      }),
    );
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe(() => {
        const ratingData = this._ratingService.currentRatingData.value;

        if (!ratingData) return;
        if (
          ratingData &&
          ratingData.id.includes('InstantLicenseServiceEaseOfUse')
        ) {
          this.submitRating(ratingData);
        }
      }),
    );
  }
  private checkRating(): Observable<any> {
    return this._ratingService.getInstantLicenseRatingStatus().pipe(
      tap((licenseRes) => {
        if (licenseRes)
          this.licenseRatingStatus = licenseRes.filter(
            (x) => x.shouldShowRating,
          );
        if (this.licenseRatingStatus.length > 0) {
          this.selectedIndex = 0;
          this.openRatingModal(0);
        }
      }),
    );
  }
  submitRating(PopupData: UserRatingUpdateDto) {
    const index = Number(PopupData.id.match(/\d+$/)?.[0]);
    this._ratingService
      .createRating({
        ratingType: RatingTypeEnum.InstantLicenseServiceEaseOfUse,
        ratingValue: PopupData.ratingValue,
        notes: PopupData.notes,
        browserType: PopupData.browserType,
        licenseProjectId: this.licenseRatingStatus[index].licenseProjectId,
        triggerType: this.licenseRatingStatus[index].triggerType,
      })
      .subscribe((res) => {
        this._toastrNotificatioService.showSuccess(
          res.message || 'تم إرسال التقييم بنجاح',
        );
        this._popupService.dismissDialog();

        if (
          this.selectedIndex < this.licenseRatingStatus.length - 1 &&
          PopupData.id.includes('InstantLicenseServiceEaseOfUse')
        ) {
          this.selectedIndex++;
          this.openRatingModal(this.selectedIndex);
        }
      });
  }
  openRatingModal(index?: number): void {
    let Data = {
      id: 'InstantLicenseServiceEaseOfUse' + index,
      minWidth: '30vw',
      iconClass: 'hgi hgi-stroke hgi-message-question',
      title: `قيّم تجربتك معنا`,
      component: RatingComponent,
      data: {
        ratingType: RatingTypeEnum.InstantLicenseServiceEaseOfUse,
      },
      buttons: [
        {
          icon: '',
          title: 'تخطي',
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
        },
        {
          icon: '',
          title: 'ارسل التقييم',
          actionType: ButtonType.confirm,
          isVisable: true,
          isDisables: false,
        },
      ],
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  private dismissRating(PopupData: any) {
    const index = Number(PopupData.id.match(/\d+$/)?.[0]);
    this._ratingService
      .dismissRating({
        ratingType: RatingTypeEnum.InstantLicenseServiceEaseOfUse,
        licenseProjectId: this.licenseRatingStatus[index].licenseProjectId,
        triggerType: this.licenseRatingStatus[index].triggerType,
      })
      .subscribe((res) => {
        this._toastrNotificatioService.showInfo(
          res.message || 'تم تخطي التقييم ',
        );
        this._popupService.dismissDialog();

        if (
          this.selectedIndex < this.licenseRatingStatus.length - 1 &&
          PopupData.id.includes('InstantLicenseServiceEaseOfUse')
        ) {
          this.selectedIndex++;
          this.openRatingModal(this.selectedIndex);
        }
      });
  }

  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (this.userData) this.getProjectAgreementsSummary();
        })
    );
  }

  private getProjectAgreementsSummary() {
    this.isLoading = true;
    this.subscriptions.push(
      this._licenseRequestService
        .GetProjectAgreementsSummary(
          this.userData?.facilities[0]?.id ?? Guid.empty as string,
          this.paginationData.currentPage,
          this.paginationData.pageSize
        )
        .subscribe((res: Pagination<ProjectAgreementSummaryDto[]> | null) => {
          if (res) this.updateAgreementsList(res);
          this.isLoading = false;
        })
    );
  }

  private updateAgreementsList(data: Pagination<ProjectAgreementSummaryDto[]>): void {
    this.agreementsList = data;
    this.setPaginationData(
      data.pageSize,
      data.totalCount,
      data.pageCount
    );
  }

  private setPaginationData(pageSize: number, total: number, pageCount: number): void {
    this.paginationData.pageCount = pageCount;
    this.paginationData.pageSize = pageSize;
    this.paginationData.totalCount = total;
    this._paginationService.updatePaginationData(this.paginationData);
  }

  private watchPaginationActions(): void {
    this.watchPageChanged();
    this.watchPaginationClicked();
  }

  private watchPageChanged(): void {
    this.subscriptions.push(
      this._paginationService.getPageChanged().subscribe((pageNo) => {
        this.newPageNo = pageNo;
      })
    );
  }

  private watchPaginationClicked(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.paginationData.currentPage != nextPage) {
          this.loadNextPage(nextPage);
          this.paginationData.currentPage = this.newPageNo;
        }
      })
    );
  }

  private loadNextPage(nextPage: number): void {
    this.paginationData.currentPage = nextPage;
    this.getProjectAgreementsSummary();
  }

  getApprovalClass(agreement: ProjectAgreementSummaryDto): string {
    switch (agreement.agreementStatus) {
      case ProjectAgreementStatus.Approved:
        return 'green';
      case ProjectAgreementStatus.Pending:
        return 'orange';
      case ProjectAgreementStatus.Rejected:
        return 'red';
      default:
        return 'orange';
    }
  }

  public navigateToDetails(agreement: ProjectAgreementSummaryDto): void {
    if (+agreement.approvalRole == 2 && agreement.typeCode == LicenseRequestTypeTypeCodeEnum.Fawria) {
      this.router.navigate(['/wafi/license/engineer-approval-details', agreement.sourceEntityId],
        {
          queryParams: { approvalRole: agreement.approvalRole }
        });
    }
    else if (+agreement.approvalRole == 3 && agreement.typeCode == LicenseRequestTypeTypeCodeEnum.Fawria) {
      this.router.navigate(['/wafi/license/chartered-account-approval-details', agreement.sourceEntityId],
        {
          queryParams: { approvalRole: agreement.approvalRole }
        });
    }
    else {
      this.router.navigate(['/wafi/license/developer-approval-details', agreement.sourceEntityId],
        {
          queryParams: { approvalRole: agreement.approvalRole }
        });
    }
  }

    viewDetails(approval: ProjectAgreementSummaryDto): void {

     this._sharedLocalStorage.setLicenseProjectIdInLocalStorage(approval?.projectId)
    if (+approval.approvalRole == ApprovalRole.EngineeringConsultant)
    {
       this.router.navigate(['/wafi/license/engineer-approval-details', approval.sourceEntityId],
        {
          queryParams: { approvalRole: approval.approvalRole }
        });
    }
    else if (+approval.approvalRole == ApprovalRole.DeedOwner)
    {
      this.router.navigate(['/wafi/license/deed-owner-list'])  
    }
    else if (+approval.approvalRole == ApprovalRole.CharteredAccountant)
    {
      this.router.navigate(['/wafi/license/chartered-account-approval-details', approval.sourceEntityId],
      {
        queryParams: { approvalRole: approval.approvalRole }
      });
    }
    else {
    this.router.navigate(['/wafi/license/developer-approval-details', approval.sourceEntityId],
      {
        queryParams: { approvalRole: approval.approvalRole }
      });
    }
    
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
