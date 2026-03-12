import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { forkJoin, skip, Subscription } from 'rxjs';
import { Zone } from '../../../models/zone.model';
import { CorrectionAddZoneComponent } from '../correction-add-zone/correction-add-zone.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ProjectUnit } from '../../../models/project-units';
import { ProjectSubUnitDto } from '../../../dataModels/project-sub-unit.dto';
import { CorrectionLicenseProjectZoneUnitSubunitComponent } from '../correction-license-project-zone-unit-subunit/correction-license-project-zone-unit-subunit.component';
import { CorrectionLicenseProjectZoneUnitComponent } from '../correction-license-project-zone-unit/correction-license-project-zone-unit.component';
import { ZoneActionType } from '../../../enums/zone-action-type.enum';
import { PopupResult } from '../../../models/popup-result.model';
import {
  LicenseProjectCompletionData,
  LicenseProjectModelDto,
} from '../../../dataModels/license-project-model.dto';
import { CorrectionLicenseProjectZoneSubunitModelComponent } from '../correction-license-project-zone-subunit-model/correction-license-project-zone-subunit-model.component';
import { ProjectModelService } from '../../../services/project-model.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ProjectUnitCodeService } from '../../../services/project-unit-code.service';
import { saveAs } from 'file-saver';
import { LicenseProjectSubUnitsListCodeFile } from '../../../dataModels/license-project-sub-units-list-code-file';
import { DataVisibilityOfLicenseProjectService } from '../../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabCode } from '../../../models/tab-code.model';
import { LicenseRequestService } from '../../../services/license-request.service';
import { CorrectionProjectSubUnitService } from '../../../services/correction-project-sub-unit.service';
import { CorrectionLicenseProjectUnitService } from '../../../services/correction-license-project-unit.service';
import { CorrectionZonesBlocksBuildingAndUnitsService } from '../../../services/correction-zones-blocks-building-and-units.service';
import { CorrectionProjectModelService } from '../../../services/correct-units/correction-project-model-service.service';
import { CorrectionProjectUnitCodeService } from '../../../services/correction-project-unit-code.service';
import { LicenseRequestTypeTypeCodeEnum } from '../../../enums/license-requestType-typeCode.model';

@Component({
  selector: 'app-correction-zones-blocks-buildings',
  templateUrl: './correction-zones-blocks-buildings.component.html',
  styleUrls: ['./correction-zones-blocks-buildings.component.scss'],
})
export class CorrectionZonesBlocksBuildingsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  correctionUnitRequestId: string | null = '00000000-0000-0000-0000-000000000000';
  zones: Zone[] = ([] = []);
  projectUnits: ProjectUnit[] | null = null;
  licenseProjectSubUnits: ProjectSubUnitDto[] = [] as ProjectSubUnitDto[];
  hideActionButtons: boolean = false;

  singleFileUploaderData: FileUploader = {
    multiple: false,
    allowedExtensionsText: 'EXCEL',
    allowedExtensions: ['.xls', '.xlsx'],
  } as FileUploader;

  fileId: string = '';

  constructor(
    private _zonesBlocksBuildingAndUnitsService: CorrectionZonesBlocksBuildingAndUnitsService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseProjectUnitService: CorrectionLicenseProjectUnitService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _ProjectSubUnitService: CorrectionProjectSubUnitService,
    private _projectModelService: CorrectionProjectModelService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _codeService: CorrectionProjectUnitCodeService,
    private _licenseRequestService: LicenseRequestService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService
  ) {}

  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.observeNextButtonIsCliced();
    this.updateSaveAsDraftBtnIsvisible();
    this.observePopupClose();
    this.checkIfShouldHideActionButtons();
  }

  private checkIfShouldHideActionButtons(): void {
    let availabilityToUpdate = this._sharedLicenseProjectService.getAvailabilityToUpdateFarzFromLocalStorage();

    const typeCode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    if (typeCode === LicenseRequestTypeTypeCodeEnum.Fawria && this.licenseProjectId) {
      const requests = [
        this._dataVisibilityOfLicenseProjectService.GetCompletedLicenseProjectProfileTaps(this.licenseProjectId),
        this._licenseRequestService.GetLicenseProjectCompletionData(this.licenseProjectId),
      ];
      const subscriptions = forkJoin(requests).subscribe((results) => {
        if (results) {
          let completedTabs = results[0] as string[];
          let complete = results[1] as LicenseProjectCompletionData | null;
          if (completedTabs && complete)
            this.hideActionButtons =
              completedTabs.includes(TabCode.fawriaArchitecturalUnitsAndDesigns) &&
              complete &&
              (complete.isProfileCompleted || complete.isProjectHasUnitForFarzIntegration);
          if (availabilityToUpdate) {
            this.hideActionButtons = false;
          }
        }
      });
      this.subscriptions.push(subscriptions);
    }
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    this.correctionUnitRequestId = this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage();
    this.GetByLicenseProjectId();
  }

  private GetByLicenseProjectId(): void {
    this.subscriptions.push(
      this._zonesBlocksBuildingAndUnitsService
        .GetByRequestHeaderId(this.correctionUnitRequestId as string)
        .subscribe((res: Zone[] | null) => {
          if (res) {
            this.zones = res;
            this.updateProjectZones(res);
            this.updateSelectedZone(res);
            this.observeProjectZonesBS();
          }
        })
    );
  }

  private updateProjectZones(zones: Zone[]): void {
    this._zonesBlocksBuildingAndUnitsService.updateProjectZones(zones);
  }

  updateSelectedZone(zones: Zone[]) {
    if (zones.length > 0) {
      if (this.selectedZone == null) {
        this.selectedZone = this.zones[0];
        this.onZoneSelected(this.selectedZone, 0);
      } else {
        this.selectedZone = this.zones[this.selectedZoneIndex];
        this.onZoneSelected(this.selectedZone, this.selectedZoneIndex);
      }
    }
  }

  private observeProjectZonesBS() {
    this.subscriptions.push(
      this._zonesBlocksBuildingAndUnitsService.projectZones
        .pipe(skip(1)) // Skip the initial value to avoid duplicate calls during initial load
        .subscribe((res: Zone[] | null) => {
          if (res) {
            // Refresh from server to get correct canDelete values
            this._zonesBlocksBuildingAndUnitsService
              .GetByRequestHeaderId(this.correctionUnitRequestId as string)
              .subscribe((freshZones: Zone[] | null) => {
                if (freshZones) {
                  this.zones = freshZones;
                  this.updateSelectedZone(freshZones);
                }
              });
          }
        })
    );
  }

  public openDialog(): void {
    let Data = {
      iconClass: 'hgi hgi-stroke hgi-profile-02',
      title: 'إضافة زون جديدة',
      component: CorrectionAddZoneComponent,
      id: 'CorrectionAddZoneComponent',
      submitButtonTitle: 'إضافة زون',
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  selectedZoneIndex: number = -1;
  selectedZone?: Zone | null = null;
  onZoneSelected(zone: Zone, selectedZoneIndex: number) {
    this.selectedZoneIndex = selectedZoneIndex;
    this.selectedZone = zone;
    this.updateSelectedProjectZone(zone.id);
    this.updateSelectedProjectZoneCode(zone.code);
    this.GetByZoneId(zone.id);
  }

  private updateSelectedProjectZone(zoneId: string | null): void {
    this._zonesBlocksBuildingAndUnitsService.updateSelectedProjectZone(zoneId);
  }

  private updateSelectedProjectZoneCode(title: string | null): void {
    this._zonesBlocksBuildingAndUnitsService.updateSelectedProjectZoneTitle(title);
  }

  deleteZone(zone: Zone) {
    this._zonesBlocksBuildingAndUnitsService.deleteZone(zone.id).subscribe((result) => {
      if (result.isDone) {
        this.selectedZone = null;
        let currentZones = this.zones.filter((x) => x.id != zone.id);
        if (currentZones.length > 0) {
          this.selectedZoneIndex = 0;
        } else {
          this.selectedZoneIndex = -1;
        }
        this.updateProjectZones(currentZones);
      }
    });
  }

  private GetByZoneId(zoneId: string): void {
    this.subscriptions.push(
      this._licenseProjectUnitService.GetByZoneId(zoneId).subscribe((res: ProjectUnit[] | null) => {
        if (res) {
          this.projectUnits = res;
          this.updateSelectedBuilding(res);
        }
      })
    );
  }

  updateSelectedBuilding(projectUnits: ProjectUnit[]) {
    if (projectUnits.length > 0) {
      if (this.selectedbuildingOrBlock == null) {
        this.selectedbuildingOrBlock = projectUnits[0];
        this.onSelectedbuildingOrBlock(projectUnits[0], 0);
      } else {
        // Find the previously selected unit by ID to maintain selection after refresh
        const previouslySelectedId = this.selectedbuildingOrBlock.id;
        const foundIndex = projectUnits.findIndex(u => u.id === previouslySelectedId);
        if (foundIndex !== -1) {
          this.selectedbuildingOrBlock = projectUnits[foundIndex];
          this.onSelectedbuildingOrBlock(this.selectedbuildingOrBlock, foundIndex);
        } else {
          // If previously selected unit no longer exists, select the first one
          this.selectedbuildingOrBlock = projectUnits[0];
          this.onSelectedbuildingOrBlock(projectUnits[0], 0);
        }
      }
    } else {
      this.selectedbuildingOrBlock = null;
    }
  }

  addBuildingOrBlock() {
    this._zonesBlocksBuildingAndUnitsService.updateSelectedProjectUnit(null);

    let Data = {
      title: 'إضافة بلوكات وعمائر - ' + this.selectedZone?.code,
      component: CorrectionLicenseProjectZoneUnitComponent,
      id: 'CorrectionLicenseProjectZoneUnitComponent',
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  public openEditDialog(unit: ProjectUnit): void {
    this.selectedbuildingOrBlock = unit;
    this._zonesBlocksBuildingAndUnitsService.updateSelectedProjectUnit(this.selectedbuildingOrBlock);
    let Data = {
      title: 'تعديل بلوكات وعمائر - ' + unit.code,
      component: CorrectionLicenseProjectZoneUnitComponent,
      id: 'CorrectionLicenseProjectZoneUnitComponent',
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  selectedbuildingOrBlockIndex: number = 0;
  selectedbuildingOrBlock?: ProjectUnit | null = null;
  onSelectedbuildingOrBlock(buildingOrBlock: ProjectUnit, selectedBuildingOrBlockIndex: number) {
    this.selectedbuildingOrBlock = buildingOrBlock;
    this.selectedbuildingOrBlockIndex = selectedBuildingOrBlockIndex;
  }

  selectedLicenseProjectSubUnitIndex: number = 0;
  selectedLicenseProjectSubUnit: ProjectSubUnitDto | null = null;
  onSelectedLicenseProjectSubUnit(
    selectedLicenseProjectSubUnit: ProjectSubUnitDto,
    selectedLicenseProjectSubUnitIndex: number
  ) {
    this.selectedLicenseProjectSubUnitIndex = selectedLicenseProjectSubUnitIndex;
    this.selectedLicenseProjectSubUnit = selectedLicenseProjectSubUnit;
  }

  deleteBuildingOrBlock(buildingOrBlock: ProjectUnit) {
    this.subscriptions.push(
      this._licenseProjectUnitService.deleteUnit(buildingOrBlock.id).subscribe((res) => {
        if (res.isDone) {
          let units = this.projectUnits?.filter((x) => x.id != buildingOrBlock.id);
          if (units) {
            this.projectUnits = units;
          } else {
            this.projectUnits = [];
          }
        }
      })
    );
  }

  addSubUnit() {
    let Data = {
      title: 'إضافة نوع وحدة للعمارة/بلوك - ' + this.selectedbuildingOrBlock?.code,
      component: CorrectionLicenseProjectZoneUnitSubunitComponent,
      id: this.selectedbuildingOrBlock?.id,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  observePopupClose() {
    this._popupService.closeDialog.subscribe((popupResult: PopupResult) => {
      if (popupResult) {
        switch (popupResult.actionType) {
          case ZoneActionType.AddZone.toString():
            break;
          case ZoneActionType.UpdateZone.toString():
            break;
          case ZoneActionType.AddUnit.toString():
            break;
          case ZoneActionType.UpdateUnit.toString():
            break;
          case ZoneActionType.AddSubUnit.toString():
          case ZoneActionType.UpdateSubUnit.toString():
            // Refresh units from server to get correct canDelete values
            if (this.selectedZone) {
              this.GetByZoneId(this.selectedZone.id);
            }
            break;
        }
      }
    });
  }

deleteSubUnit(subUnit: ProjectSubUnitDto): void {
  this._ProjectSubUnitService.removeSubUnit(subUnit.id).subscribe({
    next: (result) => {
      if (result.isDone && this.selectedbuildingOrBlock) {
        this.selectedbuildingOrBlock.licenseProjectSubUnits = 
          this.selectedbuildingOrBlock.licenseProjectSubUnits.filter(x => x.id !== subUnit.id);
      }
    },
    error: (err) => console.error('Failed to delete sub unit:', err)
  });
}

  updateSubUnit(subUnit: ProjectSubUnitDto) {
    let Data = {
      title: 'تعديل نوع وحدة للعمارة/بلوك - ' + this.selectedbuildingOrBlock?.code,
      component: CorrectionLicenseProjectZoneUnitSubunitComponent,
      id: this.selectedbuildingOrBlock?.id,
      data: { isEdit: true, subUnit: subUnit },
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  openModelDialog(): void {
    if (!this.selectedLicenseProjectSubUnit) return;

    let title = `إضافة النماذج للوحدات فى ${this.selectedbuildingOrBlock?.unitTypeName} ${this.selectedbuildingOrBlock?.code} - زون ${this.selectedZone?.code}`;
    this._projectModelService.SetSubjectObj({
      licenseProjectSubUnitId: this.selectedLicenseProjectSubUnit.id,
    } as LicenseProjectModelDto);
    let Data = {
      title: title,
      component: CorrectionLicenseProjectZoneSubunitModelComponent,
      id: 'CorrectionLicenseProjectZoneSubunitModelComponent',
      buttons: [],
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.moveToNextTab();
      })
    );
  }

  moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }

  // isFawriaValidation(): boolean {
  //   const typecode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
  //   if (typecode == 'FSRSU') return true;
  //   else return false;
  // }

  private updateSaveAsDraftBtnIsvisible(): void {
     this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
  }

  onExcelFileUploaded(fileRemovedData: any) {
    if (fileRemovedData.eventRes.data.length == 0) {
      this.fileId = "";
      return;
    }
    this.fileId = fileRemovedData.eventRes.data[0].id;
  }

  generateExcel() {
    this._codeService.CreateExcel(this.licenseProjectId as string).subscribe((res) => {
      if (res) {
        saveAs(res.body, 'Tempelate.xlsx');
      }
    });
  }

  saveFileCode() {
    let data = {} as LicenseProjectSubUnitsListCodeFile;
    data.licenseProjectsId = this.licenseProjectId as string;
    data.correctionUnitRequestHeaderId = this.correctionUnitRequestId as string;

    data.fileId = this.fileId;
    this._codeService.saveFileData(data).subscribe((res) => {
      if (res && res.isDone) {
        this._toastrNotificationService.showSuccess('تم الحفظ');
        this._popupService.dismissDialog();
      } else {
        this._toastrNotificationService.showError('حدث خطأ اثناء الحفظ');
      }
    });
  }

  ngOnDestroy(): void {
    let availabilityToUpdate = this._sharedLicenseProjectService.setLicenseAvailabilityToUpdateInLocalStorage(false);
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  clearObservable() {}
}
