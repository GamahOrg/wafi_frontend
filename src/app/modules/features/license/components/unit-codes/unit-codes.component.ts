import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { ProjectUnit } from '../../models/project-units';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectUnitService } from '../../services/license-project-unit/license-project-unit.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ProjectUnitCodeService } from '../../services/project-unit-code.service';
import { ProjectUnitCodeDto, ProjectUnitCodesPaginationParams } from '../../dataModels/project-unit-code.dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrService } from 'ngx-toastr';
import { UnitCodesFormComponent } from '../unit-codes-form/unit-codes-form.component';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabCode } from '../../models/tab-code.model';
import { LicenseProjectCompletionData } from '../../dataModels/license-project-model.dto';
import { LicenseRequestService } from '../../services/license-request.service';
import { Pagination, pagination } from '../../../../../shared/models/pagination.model';
import { PaginationService } from '../../../../../shared/services/pagination/pagination.service';

@Component({
  selector: 'app-unit-codes',
  templateUrl: './unit-codes.component.html',
  styleUrls: ['./unit-codes.component.scss']
})

export class UnitCodesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  selectedProjectUnitId: string | null = "00000000-0000-0000-0000-000000000000";
  selectedProjectUnitTitle: string | null = "";
  projectUnits: ProjectUnit[] = [];
  hideActionButtons: boolean = false;
  localization = {
    totalNumberOfUnitCodes: "إجمالي عدد اكواد الوحدات ",
    addingNewCode: "إضافة كود للوحدة",
    UnitNumber: "وحده رقم ",
    code: 'كود الوحدة',
    deliveryOn: 'تاريخ التسليم',
    price: 'سعر التعاقد',
    actions: 'الإجراءات',
    savedSuccessfully: 'تم الحفظ',
    deletedSuccessfully: 'تم الحذف بنجاح'
  }

  projectUnitCodes: ProjectUnitCodeDto[] = []

  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };

  newPageNo: number = 1;
  projectUnitCodesPaginated: Pagination<ProjectUnitCodeDto[]> | null = null;
  constructor(
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseProjectUnitService: LicenseProjectUnitService,
    private _projectUnitCodeService: ProjectUnitCodeService,
    private _popupService: PopupService,
    private _toastrService: ToastrService,
    private _licenseRequestService: LicenseRequestService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
    private _paginationService: PaginationService,
  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.getSelectedProjectUnit();
    this.getProjectUnits();
    this.unitCodeTitle();
    this.observeProjectUnitCodes();
    this.checkIfShouldHideActionButtons();
    this.watchPaginationActions();
    this.observePaginatedRefresh();
  }

  private checkIfShouldHideActionButtons(): void {
    let availabilityToUpdate = this._sharedLicenseProjectService.getAvailabilityToUpdateFarzFromLocalStorage()
    const typeCode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    if (typeCode === 'FSRSU' && this.licenseProjectId) {

      const requests = [
        this._dataVisibilityOfLicenseProjectService.GetCompletedLicenseProjectProfileTaps(this.licenseProjectId),
        this._licenseRequestService.GetLicenseProjectCompletionData(this.licenseProjectId)
      ];
      const subscriptions = forkJoin(requests).subscribe((results) => {
        
        if (results) {
          let completedTabs = results[0] as string[];
          let complete = results[1] as LicenseProjectCompletionData | null;
          if (completedTabs && complete)
            this.hideActionButtons = completedTabs.includes(TabCode.fawriaArchitecturalUnitsAndDesigns) && complete && (complete.isProfileCompleted || complete.isProjectHasUnitForFarzIntegration);
          if (availabilityToUpdate) {
            this.hideActionButtons = false
          }
        }
      });
      this.subscriptions.push(subscriptions);
    }
  }

  private observeProjectUnitCodes(): void {
    this.subscriptions.push(
      this._projectUnitCodeService.getSubjectListObjsPaginated()
        .subscribe((res: Pagination<ProjectUnitCodeDto[]> | null) => {
          if (!res) {
            this.projectUnitCodesPaginated = null;
            return;
          }

          this.projectUnitCodesPaginated = res;
          this.setPaginationData(res.pageSize, res.totalCount, res.pageCount);
        })
    );
  }


 

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }

  private getSelectedProjectUnit(): void {
    this.subscriptions.push(
      this._licenseProjectUnitService.getSelectedProjectUnit().subscribe((res: string | null) => {
        this.selectedProjectUnitId = res;
        this.pagintationData.currentPage = 1;
        if (this.selectedProjectUnitId) {
          //this.GetByProjectUnitId(this.selectedProjectUnitId as string)
          this.GetByProjectUnitIdPaginated(this.selectedProjectUnitId as string)

        }
      })
    );
  }

  private getProjectUnits(): void {
    this.subscriptions.push(
      this._licenseProjectUnitService.projectUnits.subscribe((res) => {
        this.projectUnits = res;

      })
    );
  }

  private GetByProjectUnitId(unitId: string): void {
    this.subscriptions.push(
      this._projectUnitCodeService.GetUnitsCodesListByProjectUnitId(unitId).subscribe((res) => {
        if (res && res.data) {
          // this.projectUnitCodes = res.data
          this._projectUnitCodeService.SetSubjectListObjs(res.data)
        }
      })
    )
  }

  private unitCodeTitle(): void {
    this.subscriptions.push(
      this._licenseProjectUnitService.selectedProjectUnitTitle.subscribe((res: string | null) => {
        if (res) this.selectedProjectUnitTitle = res
      })
    )
  }

  openDialog(code: ProjectUnitCodeDto | undefined): void {

    if (!code || !code.id) {
      code = new ProjectUnitCodeDto();
      code.unitId = this.selectedProjectUnitId as string;
      code.unitTypeId = this.projectUnits.filter(x => x.id == this.selectedProjectUnitId)[0]?.unitTypeId;
      this._licenseProjectUnitService.updateSelectedProjectUnit(code.unitId)
    }
    code.licenseProjectId = this.licenseProjectId as string;
    this._projectUnitCodeService.SetSubjectObj(code as ProjectUnitCodeDto);

    let Data = {
      title: this.localization.code + " - " + this._sharedLicenseProjectService.stripHtml(this.selectedProjectUnitTitle ?? ''),
      component: UnitCodesFormComponent
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  
  //delete(id: string) {
  //  this.subscriptions.push(
  //    this._projectUnitCodeService.Delete(id).subscribe(res => {
  //      if (res.isDone) {
  //        this._toastrService.success(this.localization.deletedSuccessfully)
  //        this.projectUnitCodes = res.data as ProjectUnitCodeDto[];
  //      }
  //      else
  //        this._toastrNotificationService.showError(res.message);
  //    })
  //  )
  //}
  delete(id: string) {
    if (!this.selectedProjectUnitId) return;

    this.subscriptions.push(
      this._projectUnitCodeService.Delete(id).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.deletedSuccessfully);

          // Reload the current page using your paginated method
          //this.GetByProjectUnitIdPaginated(this.selectedProjectUnitId as string);

          this._projectUnitCodeService.triggerRefreshPaginatedList();

        } 
        // else {
          // this._toastrNotificationService.showError(res.message);
        // }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

  formatNumber(value: number | string | null): string {
    if (value == null) return ''; // handle null
    const parts = value.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  private GetByProjectUnitIdPaginated(unitId: string): void {
    const params: ProjectUnitCodesPaginationParams = {
      unitId,
      pageIndex: this.pagintationData.currentPage,
      pageSize: this.pagintationData.pageSize,
    };

    this.subscriptions.push(
      this._projectUnitCodeService
        .GetUnitsCodesListByProjectUnitIdPaginated(params)
        .subscribe((res: Pagination<ProjectUnitCodeDto[]> | null) => {
          if (!res) {
            this.projectUnitCodesPaginated = null;
            return;
          }

          this.projectUnitCodesPaginated = res;
          this.setPaginationData(res.pageSize, res.totalCount, res.pageCount);

          
          this._projectUnitCodeService.SetSubjectListObjsPaginated(res);
        })
    );
  }

  private setPaginationData(
    pageSize: number,
    totalCount: number,
    pageCount: number
  ): void {
    this.pagintationData.pageSize = pageSize;
    this.pagintationData.totalCount = totalCount;
    this.pagintationData.pageCount = pageCount;

    this._paginationService.updatePaginationData(this.pagintationData);
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
        if (this.pagintationData.currentPage !== nextPage) {
          this.loadNextPage(nextPage);
          this.pagintationData.currentPage = this.newPageNo;
        }
      })
    );
  }

  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    if (this.selectedProjectUnitId)
      this.GetByProjectUnitIdPaginated(this.selectedProjectUnitId)
  }
  private observePaginatedRefresh(): void {
    this.subscriptions.push(
      this._projectUnitCodeService.onRefreshPaginatedList()
        .subscribe(() => {
          if (this.selectedProjectUnitId) {
            this.GetByProjectUnitIdPaginated(this.selectedProjectUnitId);
          }
        })
    );
  }


}
