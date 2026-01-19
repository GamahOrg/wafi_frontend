import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';

import { PopupService } from 'src/app/shared/services/popup/popup.service';

import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrService } from 'ngx-toastr';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectCompletionData } from '../../../../dataModels/license-project-model.dto';
import { ProjectUnitCodeDto } from '../../../../dataModels/project-unit-code.dto';
import { ProjectUnit } from '../../../../models/project-units';
import { TabCode } from '../../../../models/tab-code.model';
import { DataVisibilityOfLicenseProjectService } from '../../../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { LicenseProjectUnitService } from '../../../../services/license-project-unit/license-project-unit.service';
import { LicenseRequestService } from '../../../../services/license-request.service';
import { ProjectUnitCodeService } from '../../../../services/project-unit-code.service';
import { SharedLicenseProjectService } from '../../../../services/sharedLicenseProject/shared-license-project.service';
import { CorrectionUnitCodesFormComponent } from '../correction-unit-codes-form/correction-unit-codes-form.component';
import { UnitCorrectionService } from '../../../../services/unit-correction/unit-correction.service';

@Component({
  selector: 'app-correction-unit-codes',
  templateUrl: './correction-unit-codes.component.html',
  styleUrls: ['./correction-unit-codes.component.scss'],
})
export class CorrectionUnitCodesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  selectedProjectUnitId: string | null = '00000000-0000-0000-0000-000000000000';
  selectedProjectUnitTitle: string | null = '';
  projectUnits: ProjectUnit[] = [];
  hideActionButtons: boolean = false;
  localization = {
    totalNumberOfUnitCodes: 'إجمالي عدد اكواد الوحدات ',
    addingNewCode: 'إضافة كود للوحدة',
    UnitNumber: 'وحده رقم ',
    code: 'كود الوحدة',
    deliveryOn: 'تاريخ التسليم',
    price: 'سعر التعاقد',
    actions: 'الإجراءات',
    savedSuccessfully: 'تم الحفظ',
    deletedSuccessfully: 'تم الحذف بنجاح',
  };

  projectUnitCodes: ProjectUnitCodeDto[] = [];
  constructor(
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseProjectUnitService: LicenseProjectUnitService,
    private _projectUnitCodeService: ProjectUnitCodeService,
    private _popupService: PopupService,
    private _toastrService: ToastrService,
    private unitCorrectionService: UnitCorrectionService,

    private _toastrNotificationService: ToastrNotificatioService
  ) {}

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.getSelectedProjectUnit();
    this.getProjectUnits();
    this.unitCodeTitle();
    this.observeProjectUnitCodes();
    this.checkIfShouldHideActionButtons();
  }

  private checkIfShouldHideActionButtons(): void {
    // let availabilityToUpdate = this._sharedLicenseProjectService.getAvailabilityToUpdateFarzFromLocalStorage()
    // const typeCode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    // if (typeCode === 'FSRSU' && this.licenseProjectId) {
    //   const requests = [
    //     this._dataVisibilityOfLicenseProjectService.GetCompletedLicenseProjectProfileTaps(this.licenseProjectId),
    //     this._licenseRequestService.GetLicenseProjectCompletionData(this.licenseProjectId)
    //   ];
    //   const subscriptions = forkJoin(requests).subscribe((results) => {
    //     if (results) {
    //       let completedTabs = results[0] as string[];
    //       let complete = results[1] as LicenseProjectCompletionData | null;
    //       if (completedTabs && complete)
    //         this.hideActionButtons = completedTabs.includes(TabCode.fawriaArchitecturalUnitsAndDesigns) && complete && (complete.isProfileCompleted || complete.isProjectHasUnitForFarzIntegration);
    //       if (availabilityToUpdate) {
    //         this.hideActionButtons = false
    //       }
    //     }
    //   });
    //   this.subscriptions.push(subscriptions);
    // }
  }

  private observeProjectUnitCodes(): void {
    this.subscriptions.push(
      this._projectUnitCodeService
        .getSubjectListObjs()
        .subscribe((res: ProjectUnitCodeDto[]) => {
          this.projectUnitCodes = res;
        })
    );
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }

  private getSelectedProjectUnit(): void {
    this.subscriptions.push(
      this._licenseProjectUnitService
        .getSelectedProjectUnit()
        .subscribe((res: string | null) => {
          this.selectedProjectUnitId = res;
          if (this.selectedProjectUnitId)
            this.GetByProjectUnitId(this.selectedProjectUnitId as string);
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
   this.subscriptions.push( this.unitCorrectionService.getUnitTypesTabData().subscribe((res) => {
      this._projectUnitCodeService.SetSubjectListObjs(
        res?.unitTypes.find((x) => x.id == unitId)?.codeList || []
      );
    }));

  }

  private unitCodeTitle(): void {
    this.subscriptions.push(
      this._licenseProjectUnitService.selectedProjectUnitTitle.subscribe(
        (res: string | null) => {
          if (res) this.selectedProjectUnitTitle = res;
        }
      )
    );
  }

  openDialog(code: ProjectUnitCodeDto | undefined): void {
    if (!code || !code.id) {
      code = new ProjectUnitCodeDto();
      code.unitId = this.selectedProjectUnitId as string;
      code.unitTypeId = this.projectUnits.filter(
        (x) => x.id == this.selectedProjectUnitId
      )[0]?.unitTypeId;
      this._licenseProjectUnitService.updateSelectedProjectUnit(code.unitId);
    }
    code.licenseProjectId = this.licenseProjectId as string;
    this._projectUnitCodeService.SetSubjectObj(code as ProjectUnitCodeDto);

    let Data = {
      title: this.localization.code + ' - ' + this.selectedProjectUnitTitle,
      component: CorrectionUnitCodesFormComponent,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  delete(id: string) {
    this.subscriptions.push(
      this._projectUnitCodeService.Delete(id).subscribe((res) => {
        if (res.isDone) {
          this._toastrService.success(this.localization.deletedSuccessfully);
          this.projectUnitCodes = res.data as ProjectUnitCodeDto[];
        } else this._toastrNotificationService.showError(res.message);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  formatNumber(value: number | string | null): string {
    if (value == null) return ''; // handle null
    const parts = value.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }
}
