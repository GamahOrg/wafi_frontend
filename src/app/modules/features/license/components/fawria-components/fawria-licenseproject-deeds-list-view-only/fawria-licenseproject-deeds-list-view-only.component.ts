import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectInstantLicenseDeedService } from '../../../../real-estate-contributions-license/services/project-instant-license-deed.service';
import { DeedHeaderProjectDataDto, LicenseProjectInstantDeedResponseDto } from '../../../../real-estate-contributions-license/dataModels/license-project-instant-deed-response-dto';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { DeleteDeedConfirmationDialogComponent } from '../../FawriaLicenseProject/delete-deed-confirmation-dialog/delete-deed-confirmation-dialog.component';
import { Pagemode } from '../../../enums/pagemode.enum';
import { ConnectedPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-fawria-licenseproject-deeds-list-view-only',
  templateUrl: './fawria-licenseproject-deeds-list-view-only.component.html',
  styleUrls: ['./fawria-licenseproject-deeds-list-view-only.component.scss'],
})
export class FawriaLicenseprojectDeedsListViewOnlyComponent
  implements OnInit, OnDestroy
{
  @Output() changePage = new EventEmitter<Pagemode>();

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
    private _projectInstantDeedService: ProjectInstantLicenseDeedService,
    private _toastrService: ToastrService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  private getLicenseProjectIdStorage(): void {
    const licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (licenseProjectId) {
      this.licenseProjectId = licenseProjectId;
      this.loadData();
      this.GetDeedHeaderProjectData();
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
        .GetDeedHeaderProjectData(this.licenseProjectId)
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
      this._projectInstantDeedService.DeleteInstantDeed(id).subscribe((res: any) => {
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
    console.log('View deed details:', deed);
     this._sharedLicenseProjectService.setSelectedDeed(deed);
    this.changePage.emit(Pagemode.View);
  }
}
