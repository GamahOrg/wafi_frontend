import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ReplaySubject, Subscription, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ChangeEngineeringRequestFullDetailsDto,
  LicenseProjectPartiesStatusEnum,
} from '../../../models/change-engineering-request';
import { ChangeEngineeringPlanService } from '../../../services/change-engineering-plan.service';
import { ProjectRequestLocalStorageService } from '../../../services/project-request-local-storage.service';
import { confirmationPopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { SharedLicenseProjectService } from '../../../../license/services/sharedLicenseProject/shared-license-project.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Router } from '@angular/router';
import { LicenseProjectRequestStatusEnum } from '../../../enums/license-project-request-status.enum';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
@Component({
  selector: 'app-change-engineering-plan-details',
  templateUrl: './change-engineering-plan-details.component.html',
  styleUrls: ['./change-engineering-plan-details.component.scss'],
})
export class ChangeEngineeringPlanDetailsComponent implements OnInit {
  baseUrl = `${environment.baseURL}/`;
  showSuccessAlert: boolean = false;
  showSuccessAlertMsg: string = '';
  subscriptions: Subscription[] = [];
  baseImagePath: string = './assets/images/layout/sidebar/';
  decision1: boolean = false;
  decision2: boolean = false;
  showValidation: boolean = false;

  userData: customerResponse | null = null;
  currentFacilityId: string | null = null;
  showAcceptance: boolean = false;

  retryLoadContract = () => this.loadContractPdf();
  requestDetails: ChangeEngineeringRequestFullDetailsDto = {
    id: '',
    licenseProjectRequestId: '',
    licenseProjectId: '',
    projectName: '',
    certificateNumber: '',
    requestNumber: '',
    cityName: '',
    requestStatus: null,
    previousFacilityCommercialRegister: '',
    previousEngineeringFacilityName: '',

    developerName: '',
    developerMobile: '',
    developerUnifiedNumber: '',
    licenseEndOn: '',
    engineeringFacilityId: '',
    engineeringFacilityName: '',
    engineeringFacilityUnifiedNumber: '',
    reasons: '',
    previousConsultingOfficeReportId: '',
    units: [],
    soldUnitsCount: 0,
    achievementRate: null,
    alternativeConsultingOfficeAgreementId: '',
  };
  alternativeConsultingOfficeAgreementId: string = '';
  constructor(
    private changeEngineeringPlanService: ChangeEngineeringPlanService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _router: Router,
    private _requestNotesService: RequestNotesService,
    private _userDataService: UserDataService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private cdr: ChangeDetectorRef,
    private _toastr: ToastrNotificatioService

  ) { }

  private destroyed$ = new ReplaySubject<void>(1);

  ngOnDestoy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.projectRequestLocalStorageService.clearSelectedProjectLicenseRequestFromLocalStorage();
  }
  ngOnInit() {
    this.subscriptions.push(
      this.changeEngineeringPlanService
        .getDetailsById(
          this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage() ??
          '',
        )
        .subscribe((res) => {
          this.requestDetails = res;
          this.showAcceptance =
            res.requestStatus ===
            LicenseProjectRequestStatusEnum.PendingEngineeringApproval;
        }),
    );
    this.observeCustomerData();
  }

  observeCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (this.userData?.facilities?.length) {
            this.currentFacilityId = this.userData.facilities[0].id;
          }
        }),
    );
  }
  loadContractPdf(): void {
    // Force reload by clearing and resetting the fileId
    if (this.alternativeConsultingOfficeAgreementId) {
      const tempId = this.alternativeConsultingOfficeAgreementId;
      this.alternativeConsultingOfficeAgreementId = '';
      setTimeout(() => {
        this.alternativeConsultingOfficeAgreementId = tempId;
      }, 100);
    }
  }
  goBack() {
    window.history.back();
  }

  accept() {
    const confirmationObj: confirmationPopupData = {
      popupType: 'primary',
      title: 'هل أنت متأكد من قبول الاتفاقية؟',
      staticMessage: '',
      dynamicMessage: '',
      id: 'acceptConfirmation',
      acceptButtonText: 'تأكيد',
    };

    this._popupService.updateConfirmationPopupData(confirmationObj);

    this._popupService.confirmAction
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.changeEngineeringPlanService
          .approve({
            licenseProjectRequestId:
              this.requestDetails.licenseProjectRequestId!,
            facilityId: this.currentFacilityId!,
          })
          .pipe(takeUntil(this.destroyed$))
          .subscribe((res) => {
            if (res.isDone) {
              this._popupService.dismissDialog();
              this._toastr.showSuccess(' تم قبول الاتفاقية بنجاح');
              this.navigateToApprovals();
            }
          });
      });
  }

  reject() {
    const rejectionConfirmationObj: confirmationPopupData = {
      popupType: 'primary',
      title: 'ما هو سبب رفض طلب تغيير الاستشاري؟',
      controlTitle: 'سبب الرفض',
      staticMessage: '',
      acceptButtonText: 'إرسال سبب الرفض',
      dynamicMessage: '',
      secondeStaticMessage: '',
    };

    this._popupService.updateRejectionConfirmationPopupData(
      rejectionConfirmationObj
    );

    this._popupService.confirmAction
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.changeEngineeringPlanService
          .reject({
            licenseProjectRequestId:
              this.requestDetails.licenseProjectRequestId!,
            facilityId: this.currentFacilityId!,
            reason:
              this._requestNotesService.RequestNotes$.getValue()?.notes ?? '',
          })
          .pipe(takeUntil(this.destroyed$))
          .subscribe((res) => {
            if (res.isDone) {
              this._popupService.dismissDialog();
              this._toastr.showSuccess(' تم رفض الاتفاقية بنجاح');

              this.navigateToApprovals();
            }
          });
      });
  }

  private navigateToApprovals(): void {
    this._router.navigate([
      `${Configuration.modules.wafi}/` +
      `${Configuration.modules.licenseProjectRequests}/` +
      `${Configuration.pages.licenseProjectRequests.changePlanListApprovals}`
    ]);
  }
  getStatusClass(statusId?: LicenseProjectRequestStatusEnum | null) {
    switch (statusId) {
      case LicenseProjectRequestStatusEnum.Approved:
        return 'green';

      case LicenseProjectRequestStatusEnum.Rejected:
      case LicenseProjectRequestStatusEnum.RejectedFromNewConsultant:
        return 'red';

      default:
        return 'orange';
    }
  }
  showProjectDetails(licenseProjectId: string | undefined): void {
    if (licenseProjectId) {
      this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
        licenseProjectId ?? '',
      );
      this._router.navigateByUrl(
        `${Configuration.modules.wafi}/${Configuration.modules.engineeringManagement}/${Configuration.pages.license.projectDetails}`,
      );
    }
  }
}
