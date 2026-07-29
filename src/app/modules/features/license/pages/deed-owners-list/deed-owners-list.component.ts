import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, switchMap, tap } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { customerResponse } from '../../models/employee-registration-dto';
import { LicenseRequestApprovalsService } from '../../services/license-request-approvals/license-request-approvals.service';
import { ApprovalRole } from '../../dataModels/approval-role.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { Router } from '@angular/router';
import { LicenseProjectAgreementStatusEnum } from '../../enums/license-project-agreement-status.enum';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RatingService } from 'src/app/shared/services/rating/rating.service';
import { RatingTypeEnum } from 'src/app/shared/models/enums/rating.enum';
import {
  RatingStatusDto,
  UserRatingUpdateDto,
} from 'src/app/shared/models/rating-request.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { RatingComponent } from 'src/app/shared/components/rating/rating.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { Guid } from 'src/app/core/configurations/guid';

@Component({
  selector: 'app-deed-owners-list',
  templateUrl: './deed-owners-list.component.html',
  styleUrls: ['./deed-owners-list.component.scss'],
})
export class DeedOwnersListComponent implements OnInit, OnDestroy {
  approvals: any[] = [];
  isLoading: boolean = false;
  licenseProjectId: string = '';
  private subscriptions: Subscription[] = [];
  approveEnum = ApprovalRole;
  requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseRequestApprovalDetails}`;
  approvalList: any[] = [] as any[];
  userData: customerResponse | null = null;
  licenseRatingStatus!: RatingStatusDto[];
  selectedIndex: number = 0;
  // selectedRows: Set<string> = new Set();
  // isAllSelected: boolean = false;
  constructor(
    private _licenseRequestApprovalsService: LicenseRequestApprovalsService,
    private router: Router,
    private _userDataService: UserDataService,
    private _sharedLocalStorage: SharedLicenseProjectService,
    private _toastrNotificatioService: ToastrNotificatioService,
    private _ratingService: RatingService,
    private _popupService: PopupService,
  ) {}

  ngOnInit(): void {
    this.obseveCustomerData();
    this.getLicenseProject();

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
          if (this.userData) this.GetApprovals();
        }),
    );
  }
  private getLicenseProject() {
    this.licenseProjectId =
      this._sharedLocalStorage.getLicenseProjectIdStorage() as string;

    if (this.licenseProjectId) this.GetApprovals();
  }

  private GetApprovals() {
    this.subscriptions.push(
      this._licenseRequestApprovalsService
        .GetOwneerDeed(
          this.licenseProjectId as string,
          this.userData?.facilities[0]?.id ?? Guid.empty as string,
        )
        .subscribe((res: any[] | null) => {
          if (res) this.approvalList = res;
        }),
    );
  }

  loadApprovals(): void {
    this.isLoading = true;
    this.isLoading = false;
  }
  public navigateToDetails(request: any) {
    this.viewDetails(request);
  }

  viewDetails(approval: any): void {
    this.router.navigate(
      ['/wafi/license/owner-approval-details', approval.id],
      { queryParams: { approvalRole: this.approveEnum.DeedOwner } },
    );
  }

  agreementStatusEnum = LicenseProjectAgreementStatusEnum;

  getApprovalClass(approval: any) {
    switch (approval.agreementStatusEnum) {
      case LicenseProjectAgreementStatusEnum.Certified:
        return 'green';
      case LicenseProjectAgreementStatusEnum.Rejected:
        return 'red';
      case LicenseProjectAgreementStatusEnum.Pending:
      default:
        return 'orange';
    }
  }

  // toggleSelectAll(): void {
  //   if (this.isAllSelected) {
  //     this.selectedRows.clear();
  //     this.isAllSelected = false;
  //   } else {
  //     this.approvalList.forEach((approval) => {
  //       this.selectedRows.add(approval.id);
  //     });
  //     this.isAllSelected = true;
  //   }
  // }

  // toggleRowSelection(approval: any): void {
  //   if (this.selectedRows.has(approval.id)) {
  //     this.selectedRows.delete(approval.id);
  //   } else {
  //     this.selectedRows.add(approval.id);
  //   }
  //   this.isAllSelected = this.selectedRows.size === this.approvalList.length;
  // }

  // isRowSelected(approval: any): boolean {
  //   return this.selectedRows.has(approval.id);
  // }

  // getSelectedApprovals(): any[] {
  //   return this.approvalList.filter((approval) =>
  //     this.selectedRows.has(approval.id)
  //   );
  // }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    // this._sharedLocalStorage.removeLicenseProjectIdfromLocalStorage()
  }
}
