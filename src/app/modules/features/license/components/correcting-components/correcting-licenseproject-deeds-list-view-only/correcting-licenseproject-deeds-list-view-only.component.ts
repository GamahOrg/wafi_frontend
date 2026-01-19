import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CorrectionProjectInstantLicenseDeedService } from '../../../../real-estate-contributions-license/services/correction-project-instant-license-deed.service';
import { DeedHeaderProjectDataDto, LicenseProjectInstantDeedResponseDto } from '../../../../real-estate-contributions-license/dataModels/license-project-instant-deed-response-dto';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { DeleteDeedConfirmationDialogComponent } from '../../FawriaLicenseProject/delete-deed-confirmation-dialog/delete-deed-confirmation-dialog.component';
import { Pagemode } from '../../../enums/pagemode.enum';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';

@Component({
  selector: 'app-correcting-licenseproject-deeds-list-view-only',
  templateUrl: './correcting-licenseproject-deeds-list-view-only.component.html',
  styleUrls: ['./correcting-licenseproject-deeds-list-view-only.component.scss'],
})
export class CorrectingLicenseprojectDeedsListViewOnlyComponent
  implements OnInit, OnDestroy
{
  @Output() changePage = new EventEmitter<Pagemode>();

  isUnit: boolean | null = null;

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
  deedHeaderProjectDataDto?:DeedHeaderProjectDataDto;

  licenseProjectId: string = '';

  showTooltip = false;

  tooltipPositions: ConnectedPosition[] = [
    {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom',
      offsetY: -8
    }
  ];

  localization = {
    appearanceQualification: 'درجة تأهيل المطور',
    projectConstructionArea: 'إجمالي مساحة المشروع حسب الصك',
    projectConstructionAreaTooltip: 'مساحة التأهيل\nأقصى مساحة مسطح حسب درجة التأهيل للمشروع حسب الصك هي 300 م²',
    projectAreaAccordingToPermit: 'إجمالي مساحة مسطح البناء للمشروع',
    projectAreaAccordingToPermitTooltip: 'مساحة التأهيل\nأقصى مساحة مسطح حسب درجة التأهيل للمشروع حسب الصك',
    projectDetails: 'عنوان للمشروع',
    cityNameLabel: 'اسم المدينة',
    deedNameLabel: 'اسم الحى',
    deedType: 'نوع الصك',
    licenseType: 'نوع الرخصة',
    projectLandDeeds: 'صكوك أراضي المشروع',
    addDeeds: 'إضافة صكوك',
    deedNumber: 'رقم الصك',
    deedDate: 'تاريخ الصك',
    unitsCount: 'عدد الملاك',
    buildingPermitNumber: 'رقم رخصة البناء',
    actions: '',
    savedSuccessfully: 'تم الحفظ بنجاح',
    deleteConfirmation: 'هل أنت متأكد من حذف الصك؟',
  };

  constructor(
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _projectInstantDeedService: CorrectionProjectInstantLicenseDeedService,
    private _toastrService: ToastrService,
    private _dialog: MatDialog,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
  ) {}

  ngOnInit(): void {
    this.getCorrectionUnitRequestIdFromLocalStorage();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  hasAnyConstructionLicenseNumber(): boolean {
    return this.deedsList.some(deed => deed.constructionLicenseNumber != null);
  }
  getNatureTypeIdByLicenseProjectId(): void {
    this.subscriptions.push(
      this._projectInstantDeedService
        .GetNatureTypeIdByCorrectionRequestId(this.licenseProjectId)
        .subscribe((res:any) => {
          if (res) {
            this.isUnit = res;
          }
        })
    );
  }
  private getCorrectionUnitRequestIdFromLocalStorage(): void {
    const licenseProjectId =
      this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage();
    if (licenseProjectId) {
      this.licenseProjectId = licenseProjectId;
      this.loadData();
      this.GetDeedHeaderProjectData();
      this.getNatureTypeIdByLicenseProjectId();
    }
  }

  loadData(): void {
    this.subscriptions.push(
      this._projectInstantDeedService
        .GetInstantDeedsByLicenseProjectId(this.licenseProjectId)
        .subscribe((res:any) => {
          if (res) {
            this.deedsList = res;
          }
        })
    );
  }

  GetDeedHeaderProjectData(): void {
    this.subscriptions.push(
      this._projectInstantDeedService
        .GetCorrectionDeedHeaderProjectData(this.licenseProjectId)
        .subscribe((res:any) => {
          if (res) {
            this.deedHeaderProjectDataDto = res;
          }
        })
    );
  }

  addDeeds(): void {
    this.changePage.emit(Pagemode.Create);
  }

  editDeed(deed: LicenseProjectInstantDeedResponseDto): void {
    // Pass deed data to shared service and navigate to view
    this._sharedLicenseProjectService.setSelectedDeed(deed);
    this.changePage.emit(Pagemode.View);
  }

  deleteDeed(id: string): void {
    const dialogRef = this._dialog.open(DeleteDeedConfirmationDialogComponent, {
      width: '659px',
      maxWidth: '90vw',
      disableClose: true,
      panelClass: 'delete-deed-dialog',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.performDelete(id);
      }
    });
  }

  private performDelete(id: string): void {
    this.subscriptions.push(
      this._projectInstantDeedService.DeleteDeed(id).subscribe((res: any) => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully);
          this.loadData();
        } else {
          this._toastrService.error(res.message);
        }
      })
    );
  }

  viewDeedDetails(deed: LicenseProjectInstantDeedResponseDto): void {
    // View deed details
   
     this._sharedLicenseProjectService.setSelectedDeed(deed);
    this.changePage.emit(Pagemode.View);
  }

  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        // View-only mode: just move to next tab without saving
        this.moveToNextTab();
      })
    );
  }

  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe((res: null) => {
        // View-only mode: save is disabled
        return;
      })
    );
  }

  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked();
  }

  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
  }

  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }
}
