import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  DeedHeaderProjectDataDto,
  LicenseProjectInstantDeedResponseDto,
} from '../../../../real-estate-contributions-license/dataModels/license-project-instant-deed-response-dto';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { CorrectionUpdateBuildingFlatAreaComponent } from '../correction-update-building-flat-area/correction-update-building-flat-area.component';
import { Pagemode } from '../../../enums/pagemode.enum';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import {
  confirmationPopupData,
  PopupData,
} from 'src/app/shared/models/popup.model';
import { LicenseRequestService } from '../../../services/license-request.service';
import { CorrectionProjectInstantLicenseDeedService } from 'src/app/modules/features/real-estate-contributions-license/services/correction-project-instant-license-deed.service';

@Component({
  selector: 'app-correction-licenseproject-deeds-list',
  templateUrl: './correction-licenseproject-deeds-list.component.html',
  styleUrls: ['./correction-licenseproject-deeds-list.component.scss'],
})
export class CorrectionLicenseprojectDeedsListComponent
  implements OnInit, OnDestroy
{
  @Output() changePage = new EventEmitter<Pagemode>();
  @Output() isIntegrationFlag = new EventEmitter<boolean | null>();
  @Output() isUnitFlag = new EventEmitter<boolean | null>();
  @Output() selectedDeedData = new EventEmitter<{
    deedId: string;
    deedNumber: string;
    deedDate: string;
    integrationTypeId: number;
    constructionLicenseNumber: string | null;
    licenseProjectConstructionLicenseTypeId: number | null;
    isVerifiedByIntegration: boolean;
  }>();

  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];

  // Project info cards data
  appearanceQualificationScore: number = 35;
  projectAreaAmount: string = '450 م²';
  constructionAreaAmount: string = '450 م²';

  // Project details
  cityName: string = 'اسم المدينة';
  deedName: string = 'اسم الصك';

  // Deeds list
  deedsList: LicenseProjectInstantDeedResponseDto[] = [];
  deedHeaderProjectDataDto?: DeedHeaderProjectDataDto;

  isUnit: boolean | null = null;
  licenseProjectId: string = '';
  correctionUnitRequestId: string = '';

  showTooltip = false;

  tooltipPositions: ConnectedPosition[] = [
    {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom',
      offsetY: -8,
    },
  ];

  localization = {
    appearanceQualification: 'درجة تأهيل المطور',
    projectConstructionArea: 'إجمالي مساحة المشروع حسب الصك',
    projectConstructionAreaTooltip:
      'مساحة التأهيل\nأقصى مساحة مسطح حسب درجة التأهيل للمشروع حسب الصك هي 300 م²',
    projectAreaAccordingToPermit: 'إجمالي مساحة مسطح البناء للمشروع',
    projectAreaAccordingToPermitTooltip:
      'مساحة التأهيل\nأقصى مساحة مسطح حسب درجة التأهيل للمشروع حسب الصك',
    projectDetails: 'عنوان للمشروع',
    cityNameLabel: 'اسم المدينة',
    deedNameLabel: 'اسم الحى',
    projectLandDeeds: 'صكوك أراضي المشروع',
    addDeeds: 'إضافة صكوك',
    deedNumber: 'رقم الصك',
    deedType: 'نوع الصك',
    licenseType: 'نوع الرخصة',
    deedDate: 'تاريخ الصك',
    unitsCount: 'عدد الملاك',
    buildingPermitNumber: 'رقم رخصة البناء',
    actions: '',
    savedSuccessfully: 'تم الحفظ بنجاح',
    deletedSuccessfully: 'تم حذف الصك بنجاح',
    deleteConfirmation: 'هل أنت متأكد من حذف الصك؟',
    noDeedsError: 'يجب إضافة صك واحد على الأقل',
  };

  constructor(
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _projectInstantDeedService: CorrectionProjectInstantLicenseDeedService,
    private _toastrService: ToastrService,
    private _popupService: PopupService,
    private _licenseRequestService: LicenseRequestService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _toastrNotificationService: ToastrNotificatioService,
  ) {}

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
    this.observeConfirmAction();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  private getLicenseProjectIdStorage(): void {
    const licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    const correctionUnitRequestId =
      this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage();
    if (licenseProjectId && correctionUnitRequestId) {
      this.licenseProjectId = licenseProjectId;
      this.correctionUnitRequestId = correctionUnitRequestId;
      this.loadData();
      this.GetDeedHeaderProjectData();
      this.getNatureTypeIdByLicenseProjectId();
    }
  }

  loadData(): void {
    this.subscriptions.push(
      this._projectInstantDeedService
        .GetInstantDeedsByLicenseProjectId(this.correctionUnitRequestId)
        .subscribe((res: any) => {
          if (res) {
            this.deedsList = res;
          }
        }),
    );
  }

  enableAddDeedButton: boolean = true;
  getNatureTypeIdByLicenseProjectId(): void {
    this.subscriptions.push(
      this._projectInstantDeedService
        .GetNatureTypeIdByCorrectionRequestId(this.correctionUnitRequestId)
        .subscribe((res: any) => {
          if (res.isDone) {
            this.isUnit = res.data;
          } else {
            this.enableAddDeedButton = false;
          }
        }),
    );
  }

  GetDeedHeaderProjectData(): void {
    this.subscriptions.push(
      this._projectInstantDeedService
        .GetCorrectionDeedHeaderProjectData(this.correctionUnitRequestId)
        .subscribe((res: any) => {
          if (res) {
            this.deedHeaderProjectDataDto = res;
          }
        }),
    );
  }

  hasNonType1Deeds(): boolean {
    // بلدي
    return this.deedsList.some(
      (deed) => deed.licenseProjectConstructionLicenseTypeId !== 1,
    );
  }

  hasAnyConstructionLicenseNumber(): boolean {
    return this.deedsList.some(
      (deed) => deed.constructionLicenseNumber != null,
    );
  }

  addDeeds(): void {
    let isIntegration: boolean | null = null;

    if (this.deedsList && this.deedsList.length > 0) {
      // If any deed is type 2 or 3, return false; otherwise check for type 1
      const hasNonBalady = this.deedsList.some(
        (deed) =>
          deed.licenseProjectConstructionLicenseTypeId === 2 ||
          deed.licenseProjectConstructionLicenseTypeId === 3,
      );

      isIntegration = hasNonBalady
        ? false
        : this.deedsList.some(
            (deed) => deed.licenseProjectConstructionLicenseTypeId === 1,
          );

      // Find first deed with licenseProjectNatureTypeId = 1 or 2
      const firstDeed = this.deedsList.find(
        (deed) =>
          deed.licenseProjectNatureTypeId === 1 ||
          deed.licenseProjectNatureTypeId === 2,
      );

      this.isUnit =
        firstDeed && firstDeed.licenseProjectNatureTypeId === 1 ? true : false;
    }

    this.isIntegrationFlag.emit(isIntegration);
    this.isUnitFlag.emit(this.isUnit);
    this.changePage.emit(Pagemode.Create);
  }

  editDeed(deed: LicenseProjectInstantDeedResponseDto): void {
    // Pass deed data to shared service and navigate to view
    this._sharedLicenseProjectService.setSelectedDeed(deed);
    this.changePage.emit(Pagemode.View);
  }

  updateDeed(deed: LicenseProjectInstantDeedResponseDto): void {
    // Emit deed data and change page to Update mode
    this.selectedDeedData.emit({
      deedId: deed.id,
      deedNumber: deed.deedNumber,
      deedDate: deed.deedDate,
      integrationTypeId: deed.integrationTypeId,
      constructionLicenseNumber: deed.constructionLicenseNumber,
      licenseProjectConstructionLicenseTypeId:
        deed.licenseProjectConstructionLicenseTypeId,
      isVerifiedByIntegration: deed.isVerifiedByIntegration,
    });
    this.isUnitFlag.emit(this.isUnit);
    this.changePage.emit(Pagemode.Update);
  }

  deleteDeed(id: string): void {
    let deleteConfirmation: confirmationPopupData = {
      popupType: 'danger',
      title:
        'عند اختيار (حذف الصك)، أتعهد بحذف الصك القديم نهائيًا وأقرّ بعدم ارتباطه بأي وحدات',
      staticMessage: '',
      acceptButtonText: 'حذف الصك',
      dynamicMessage: '',
      secondeStaticMessage: '',
    };
    // Subscribe BEFORE opening popup
    const sub = this._popupService.confirmAction.subscribe(() => {
      this.performDelete(id);
      sub.unsubscribe(); // prevent memory leaks / multiple calls
    });
    this._popupService.updateConfirmationPopupData(deleteConfirmation);
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  private performDelete(id: string): void {
    this.subscriptions.push(
      this._projectInstantDeedService.DeleteDeed(id).subscribe((res: any) => {
        if (res.isDone) {
          this._toastrService.success(this.localization.deletedSuccessfully);
          this._licenseRequestService.updateCompletedTapCodesIsClicked.emit();
          this.closeDialog();
          this.GetDeedHeaderProjectData();
          this.loadData();
        } else {
          this.closeDialog();
          // this._toastrService.error(res.message);
        }
      }),
    );
  }

  viewDeedDetails(deed: LicenseProjectInstantDeedResponseDto): void {
    // View deed details
    console.log('View deed details:', deed);
    this._sharedLicenseProjectService.setSelectedDeed(deed);
    this.changePage.emit(Pagemode.View);
  }

  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
        (res: null) => {
          // Validate that at least one deed is added
          if (!this.deedsList || this.deedsList.length === 0) {
            this._toastrNotificationService.showError(
              this.localization.noDeedsError,
            );
            return;
          }
          this.moveToNextTab();
        },
      ),
    );
  }

  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(
        (res: null) => {
          // this.save()
        },
      ),
    );
  }

  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked();
  }

  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
    this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
  }

  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }

  openUpdateBuildingAreaDialog(isUnitData: boolean): void {
    let Data = {
      title: isUnitData ? 'عدد الوحدات' : 'إجمالي مساحة مسطح البناء للمشروع',
      component: CorrectionUpdateBuildingFlatAreaComponent,
      id: 'CorrectionUpdateBuildingFlatAreaComponent',
      data: { isUnit: isUnitData },
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  observeConfirmAction() {
    this.subscriptions.push(
      this._projectInstantDeedService.closeDialog.subscribe(
        (res: PopupData) => {
          this.GetDeedHeaderProjectData();
        },
      ),
    );
  }
}
