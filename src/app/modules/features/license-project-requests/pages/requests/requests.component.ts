import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import {
  LicenseProjectRequestValidationResultDto,
  LicenseRequestTypes,
} from '../../../license/models/lincense-request-project-dto';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { ServiceCategoryEnum } from '../../enums/service-category.enum';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { licenseProjectByFacilityIdDto } from '../../../license/models/license-project-by-facilityid-dto';
import { LicenseProjectRequestValidationErrorCode } from '../../enums/validation-error-code.enum';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from '../../../../../core/services/toastr-notification/toastr-notificatio.service';
import { QualificationTypeCode } from 'src/app/core/enums/qualification-type-code';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { UnitCorrectionService } from '../../../license/services/unit-correction/unit-correction.service';
import { SharedLicenseProjectService } from '../../../license/services/sharedLicenseProject/shared-license-project.service';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  facilityId: string = '';

  requestTypes: LicenseRequestTypes[] = [];
  filteredRequestTypes: LicenseRequestTypes[] = [];
  activeFilter: ServiceCategoryEnum = ServiceCategoryEnum.All;
  ServiceCategoryEnum = ServiceCategoryEnum;

  licenseProjects: licenseProjectByFacilityIdDto[] = [];
  selectedProjectName: string = '';
  selectedProjectId: string = '';
  licenseRequestId?: string = '';
  selectedServiceTypeId: number | null = null;
  isFromCertifiedProjects: boolean = false;

  constructor(
    private router: Router,
    private _projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private _licenseRequestProjectService: LincenseRequestProjectService,
    private _userDataService: UserDataService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _unitCorrectionService: UnitCorrectionService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,


  ) { }

  ngOnInit() {
    const preselectedProjectId =
      this._sharedLicenseProjectService.getSelectedProjectIdFromLocalStorage();
    if (preselectedProjectId) {
      this.isFromCertifiedProjects = true;
      this.selectedProjectId = preselectedProjectId;
      this.activeFilter = ServiceCategoryEnum.ProjectServices;
    }

    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res) => {
        this.facilityId = res?.facilities[0]?.id || '';
        if (this.facilityId) {
          this.getProjects();
        }
      }),
    );
    this.getRequestTypes();
  }

  getRequestTypes(): void {
    this.subscriptions.push(
      this._projectLicenseServiceDetailsService
        .getLicenseRequestTypes()
        .subscribe((res) => {
          if (res) {
            this.requestTypes = res;
            this.applyFilter();
          }
        }),
    );
  }

  getProjects(): void {
    this.subscriptions.push(
      this._licenseRequestProjectService
        .getLicenseProjectByFacilityId(this.facilityId)
        .subscribe((res) => {
          if (res) {
            this.licenseProjects = res;
            if (this.isFromCertifiedProjects && this.selectedProjectId) {
              const matched = this.licenseProjects.find(
                (p) => p.licenseProjectId === this.selectedProjectId,
              );
              if (matched) {
                this.selectedProjectName = matched.licenseProjectName;
              }
            }
          }
        }),
    );
  }

  onProjectSelect(event: TypeaheadMatch): void {
    this.selectedProjectId = event.item.licenseProjectId;
    this.selectedProjectName = event.item.licenseProjectName;
  }

  onProjectInputFocus(): void {
    this.selectedProjectName = '';
    this.selectedProjectId = '';
  }

  onFilterChange(category: ServiceCategoryEnum): void {
    this.activeFilter = category;
    this.applyFilter();
  }

  private applyFilter(): void {
    if (this.activeFilter === ServiceCategoryEnum.All) {
      this.filteredRequestTypes = this.requestTypes;
    } else {
      this.filteredRequestTypes = this.requestTypes.filter(
        (rt) => rt.serviceCategory === this.activeFilter,
      );
    }
  }

  onServiceSelect(id: number): void {
    this.selectedServiceTypeId = id;
  }

  onRequestTypeSubmit(requestType: LicenseRequestTypes): void {

    this.selectedServiceTypeId = requestType.id;
    this.onNext();
  }

  onNext(): void {

    if (!this.selectedServiceTypeId) return;

    const selectedType = this.requestTypes.find(
      (rt) => rt.id === this.selectedServiceTypeId,
    );
    if (
      selectedType?.serviceCategory === ServiceCategoryEnum.GeneralServices &&
      this.selectedServiceTypeId == 28
    ) {
      const routeURL = `${Configuration.modules.wafi}/${Configuration.modules.qualifying}/${Configuration.pages.qualifying.createRequest}/${QualificationTypeCode.upgradeDegree}`;
      this.router.navigate([routeURL]);
      return;
    }

    if (
      selectedType?.serviceCategory === ServiceCategoryEnum.ProjectServices &&
      !this.selectedProjectId
    ) {
      this._toastrNotificationService.showError(
        'يرجى اختيار المشروع العقاري المرخص',
      );
      return;

    }

    if (!this.selectedProjectId) {
      this.navigateToRequirements();
      return;
    }

    this.subscriptions.push(
      this._licenseRequestProjectService
        .validateRequest(this.selectedProjectId, this.selectedServiceTypeId)
        .subscribe((result) => {

          this.licenseRequestId = result.licenseRequestId;
          if (result.isValid) {

            this.navigateToRequirements();
          } else {

            this.handleValidationError(result);
          }
        }),
    );
  }

  private navigateToRequirements(
    isFromRequirementsApproval: boolean = false,
  ): void {


    this.router.navigate(
      [
        `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.requestTypeRequirements}`,
      ],
      {
        queryParams: {
          requestTypeId: this.selectedServiceTypeId,
          projectId: this.selectedProjectId,
          isFromRequirementsApproval,
        },
      },
    );
  }
  private handleValidationError(
    result: LicenseProjectRequestValidationResultDto,
  ): void {

    switch (result.errorCode) {
      case LicenseProjectRequestValidationErrorCode.MissingApprovedUnitCorrectionRequest:
        this.showUnitCorrectionPopup(result.licenseRequestId);
        break;
      case LicenseProjectRequestValidationErrorCode.ActiveChangePlanRequest:
      case LicenseProjectRequestValidationErrorCode.IncompleteFawriaLicenseProfile:
      case LicenseProjectRequestValidationErrorCode.ActiveChangeAccountantRequest:
      case LicenseProjectRequestValidationErrorCode.InvalidQuarterReportStatus:
        this._toastrNotificationService.showError(result.message);
        break;
    }
  }

  private showUnitCorrectionPopup(licenseRequestId?: string): void {

    const dialogRef = this._popupService.updateConfirmationPopupData({
      popupType: 'primary',
      title: 'لا يمكن تقديم الطلب',
      staticMessage: 'وذلك لعدم وجود طلب تصحيح مقبول أو إقرار',
      dynamicMessage: '',
      acceptButtonText: 'الانتقال لخدمة تصحيح الوحدات',
      cancelButtonText: 'الموافقة على الاقرار',
      disableClose: false,
    });

    const close$ = dialogRef.afterClosed();


    this.subscriptions.push(
      this._popupService.confirmAction
        .pipe(take(1), takeUntil(close$))
        .subscribe(() => {
          dialogRef.close();
          this.CheckCorrectingUnitAvailability();
        })
    );

    this.subscriptions.push(
      this._popupService.cancelAction
        .pipe(take(1), takeUntil(close$))
        .subscribe(() => {
          dialogRef.close();
          this.showDeclarationPopup();
        })
    );
  }

  CheckCorrectingUnitAvailability() {
    this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(this.selectedProjectId);

    this._unitCorrectionService
      .CheckCorrectingUnitAvailability(this.licenseRequestId as string)
      .subscribe((res) => {
        if (res) {
          if (res.isDone) {
            this._sharedLicenseProjectService.setCorrectionUnitRequestIdInLocalStorage(
              res.data,
            );
            this.navigateToCorrctionLicenseSummary();
          }
        }
      });
  }

  navigateToCorrctionLicenseSummary() {
    this.router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.correctionLicenseSummary}`,
    ]);
  }

  private showDeclarationPopup(): void {
    const dialogRef = this._popupService.updateConfirmationPopupData({
      maxWidth: '35vw',
      popupType: 'primary',
      title: 'تقديم إقرار بصحة البيانات',
      staticMessage: '',
      dynamicMessage: '',
      declarationText:
        'أقر بصحة ودقة جميع بيانات الرخصة المدخلة ومطابقتها للبيانات الرسمية الصادرة من الجهات المختصة، وأتحمل كامل المسؤولية النظامية عن أي اختلاف أو عدم دقة في تلك البيانات.',
      acceptButtonText: 'إرسال',
      cancelButtonText: 'إلغاء',
    });

    this.subscriptions.push(
      this._popupService.confirmAction.pipe(take(1)).subscribe(() => {
        dialogRef.close();
        this.navigateToRequirements(true);
      }),
    );

    this.subscriptions.push(
      this._popupService.cancelAction.pipe(take(1)).subscribe(() => {
        dialogRef.close();
      }),
    );
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    if (this.isFromCertifiedProjects) {
      this._sharedLicenseProjectService.removeSelectedProjectIdFromLocalStorage();
    }
  }
}
