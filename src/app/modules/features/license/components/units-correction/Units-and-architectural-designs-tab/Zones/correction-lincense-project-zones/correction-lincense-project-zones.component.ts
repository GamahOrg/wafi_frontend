import { Component, OnInit } from '@angular/core';
import { ZonesBlocksBuildingAndUnitsService } from '../../../../../services/zones-blocks-building-units/zones-blocks-building-and-units.service';
import { SharedLicenseProjectService } from '../../../../../services/sharedLicenseProject/shared-license-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { NextAndPreviusButtonsService } from '../../../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { forkJoin, Subscription } from 'rxjs';
import { Zone } from '../../../../../models/zone.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectUnitService } from '../../../../../services/license-project-unit/license-project-unit.service';
import { ProjectUnit } from '../../../../../models/project-units';
import { ProjectSubUnitDto } from '../../../../../dataModels/project-sub-unit.dto';
import { ProjectSubUnitService } from '../../../../../services/project-sub-unit.service';
import { ZoneActionType } from '../../../../../enums/zone-action-type.enum';
import { PopupResult } from '../../../../../models/popup-result.model';
import {
  LicenseProjectCompletionData,
  LicenseProjectModelDto,
} from '../../../../../dataModels/license-project-model.dto';
import { ProjectModelService } from '../../../../../services/project-model.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ProjectUnitCodeService } from '../../../../../services/project-unit-code.service';
import { saveAs } from 'file-saver';
import { LicenseProjectSubUnitsListCodeFile } from '../../../../../dataModels/license-project-sub-units-list-code-file';
import { DataVisibilityOfLicenseProjectService } from '../../../../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabCode } from '../../../../../models/tab-code.model';
import { LicenseRequestService } from '../../../../../services/license-request.service';
import { LicenseProjectZoneUnitSubunitComponent } from '../../../../Zones/license-project-zone-unit-subunit/license-project-zone-unit-subunit.component';
import { CorrectionLicenseProjectZoneSubunitModelComponent } from '../correction-license-project-zone-subunit-model/correction-license-project-zone-subunit-model.component';
import { CorrectionLicenseProjectZoneUnitSubunitComponent } from '../correction-license-project-zone-unit-subunit/correction-license-project-zone-unit-subunit.component';
import { CorrectionLicenseProjectZoneUnitComponent } from '../correction-license-project-zone-unit/correction-license-project-zone-unit.component';
import { CorrectionAddZoneComponent } from '../correction-add-zone/correction-add-zone.component';
import { UnitCorrectionService } from 'src/app/modules/features/license/services/unit-correction/unit-correction.service';
import { Unit } from '../../../../../models/unit-correction.model';
import { DropDownNameDto, DropDownSubUnitTypeDto } from '../../../../../dataModels/drop-down-name.dto';

@Component({
  selector: 'app-correction-lincense-project-zones',
  templateUrl: './correction-lincense-project-zones.component.html',
  styleUrls: ['./correction-lincense-project-zones.component.scss'],
})
export class CorrectionLincenseProjectZonesComponent implements OnInit {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  zones: Zone[] = ([] = []);
  projectUnits: ProjectUnit[] | null = null;
  licenseProjectSubUnits: ProjectSubUnitDto[] = [] as ProjectSubUnitDto[];
  hideActionButtons: boolean = false;

  singleFileUploaderData: FileUploader = {
    multiple: false,
    allowedExtensionsText: 'EXCEL',
    allowedExtensions: ['.xls', '.xlsx'],
  } as FileUploader;
  UnitType: DropDownNameDto[] | null = null;
  stageNumber: DropDownNameDto[] | null = null;
  subUnitType: DropDownSubUnitTypeDto[] | null = null;

  fileId: string = '';

  constructor(
    private _zonesBlocksBuildingAndUnitsService: ZonesBlocksBuildingAndUnitsService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseProjectUnitService: LicenseProjectUnitService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _ProjectSubUnitService: ProjectSubUnitService,
    private _projectModelService: ProjectModelService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _codeService: ProjectUnitCodeService,
    private _licenseRequestService: LicenseRequestService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
    private unitCorrectionService: UnitCorrectionService
  ) {}

  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.observeBlocksBS();
    this.observeNextButtonIsCliced();

    this.observePopupClose();
    this.checkIfShouldHideActionButtons();
    this.getLookups();
   
  }

  private checkIfShouldHideActionButtons(): void {

   let availabilityToUpdate= this._sharedLicenseProjectService.getAvailabilityToUpdateFarzFromLocalStorage()

    const typeCode =
      this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    if (typeCode === 'FSRSU' && this.licenseProjectId) {
      const requests = [
        this._dataVisibilityOfLicenseProjectService.GetCompletedLicenseProjectProfileTaps(
          this.licenseProjectId
        ),
        this._licenseRequestService.GetLicenseProjectCompletionData(
          this.licenseProjectId
        ),
      ];
      const subscriptions = forkJoin(requests).subscribe((results) => {
        if (results) {
          let completedTabs = results[0] as string[];
          let complete = results[1] as LicenseProjectCompletionData | null;
          if (completedTabs && complete)
            this.hideActionButtons =
              completedTabs.includes(
                TabCode.fawriaArchitecturalUnitsAndDesigns
              ) &&
              complete &&
              (complete.isProfileCompleted ||
                complete.isProjectHasUnitForFarzIntegration);
                if(availabilityToUpdate){
                  this.hideActionButtons=false
                }
        }
      });
      this.subscriptions.push(subscriptions);

      // this.subscriptions.push(
      //   this._dataVisibilityOfLicenseProjectService
      //     .GetCompletedLicenseProjectProfileTaps(this.licenseProjectId)
      //     .subscribe((completedTabs: string[]) => {
      //       this.hideActionButtons = completedTabs.includes(TabCode.fawriaArchitecturalUnitsAndDesigns);
      //     })
      // );
    }
  }

  private getLicenseProjectIdStorage(): void {
    
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    this.GetByLicenseProjectId();
  }

  private GetByLicenseProjectId(): void {
    const zonesFromBS = this.unitCorrectionService.zonesData$.getValue();

  
    if (zonesFromBS && zonesFromBS.length > 0) {
      this.bindZonesFromBS();
      return;
    }


    this.subscriptions.push(
      this._zonesBlocksBuildingAndUnitsService
        .GetByLicenseProjectId(this.licenseProjectId as string)
        .subscribe((res: Zone[] | null) => {
          if (res && res.length > 0) {
          
            this.unitCorrectionService.setZonesTabData(res);

        
            this.bindZonesFromBS();
          }
        })
    );
  }
  private bindZonesFromBS(): void {
    this.subscriptions.push(
      this.unitCorrectionService.getZonesTabData().subscribe((zones) => {
        this.zones = zones;
        this.updateSelectedZone(zones);
      })
    );

    this.observeProjectZonesBS();
  }

  private GetByLicenseProjectIdtest(): void {
    const zonesFromBS = this.unitCorrectionService.zonesData$.getValue();
    const blocksFromBS = this.unitCorrectionService.blocksData$.getValue();

    if (zonesFromBS && zonesFromBS.length > 0) {
     
      this.zones = zonesFromBS;
      this.unitCorrectionService.setBlockOrBuildingsTabData(blocksFromBS); 

      this.updateSelectedZone(this.zones);
      this.observeProjectZonesBS();
    } else {
      
      this.subscriptions.push(
        this.unitCorrectionService.getZonesAndBlocksTabData().subscribe((res) => {
          if (res) {
            this.zones = res.zones;
            this.unitCorrectionService.setZonesTabData(res.zones);
            this.unitCorrectionService.setBlockOrBuildingsTabData(res.blocks); 
            this.updateSelectedZone(res.zones);
            this.observeProjectZonesBS();
          }
        })
      );
    }
  }

  private GetByLicenseProjectIdOld(): void {
    this.subscriptions.push(  this.unitCorrectionService.getZonesAndBlocksTabData().subscribe((res) => {
      if (res) {
        this.zones = res.zones;
        this.updateProjectZones(res.zones);
        this.updateSelectedZone(res.zones);
        this.observeProjectZonesBS();
      }
    }));

  }
  private loadUnitsByZone(zoneId: string): void {
    const allUnits = this.unitCorrectionService.projectUnitsData$.getValue();


    if (allUnits.some(u => u.zoneId === zoneId)) {
      this.bindUnitsByZone(zoneId);
      return;
    }

    this.subscriptions.push(
      this._licenseProjectUnitService
        .GetByZoneId(zoneId)
        .subscribe((res: ProjectUnit[] | null) => {
          if (!res) return;

        
          this.unitCorrectionService.setProjectUnits([
            ...allUnits,
            ...res
          ]);

          this.bindUnitsByZone(zoneId);
        })
    );
  }
  private bindUnitsByZone(zoneId: string): void {
    this.subscriptions.push(
      this.unitCorrectionService
        .getProjectUnits()
        .subscribe(units => {
          this.projectUnits = units.filter(
            u => u.zoneId === zoneId
          );

          this.updateSelectedBuilding(this.projectUnits);
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
  private observeProjectZonesBS(): void {
    this.subscriptions.push(
      this.unitCorrectionService
        .getZonesTabData()
        .subscribe((zones: Zone[]) => {
          this.zones = zones;
          this.updateSelectedZone(zones);
        })
    );
  }

  private observeProjectZonesBSOld() {
    this.subscriptions.push(
      this._zonesBlocksBuildingAndUnitsService.projectZones.subscribe(
        (res: Zone[] | null) => {
          if (res) {
            this.zones = res;
            this.updateSelectedZone(res);
            //this.updateAccordionContent(res);
          }
        }
      )
    );
  }

  public openDialog(): void {
    let Data = {
      iconClass: 'hgi hgi-stroke hgi-profile-02',
      title: 'إضافة زون جديدة',
      component: CorrectionAddZoneComponent,
      id: 'AddZoneComponent',
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  selectedZoneIndex: number = -1;
  selectedZone?: Zone | null = null;
  onZoneSelected(zone: Zone, selectedZoneIndex: number) {
    console.log("zone",zone);
    this.selectedZoneIndex = selectedZoneIndex;
    this.selectedZone = zone;
    this.updateSelectedProjectZone(zone.id);
    this.updateSelectedProjectZoneCode(zone.code);
    //this.GetByZoneId(zone.id);
    this.loadUnitsByZone(zone.id);
  }

  private updateSelectedProjectZone(zoneId: string | null): void {
    this._zonesBlocksBuildingAndUnitsService.updateSelectedProjectZone(zoneId);
    
  }

  private updateSelectedProjectZoneCode(title: string | null): void {
    this._zonesBlocksBuildingAndUnitsService.updateSelectedProjectZoneTitle(
      title
    );
  }

  deleteZone(zone: Zone) {

    const currentZones = this.unitCorrectionService.zonesData$.getValue() ?? [];


    const updatedZones = currentZones.filter(z => z.code !== zone.code);


    this.unitCorrectionService.setZonesTabData(updatedZones);

  
    if (updatedZones.length > 0) {
      this.selectedZoneIndex = 0;
      this.selectedZone = updatedZones[0];
      this.onZoneSelected(this.selectedZone, 0);
    } else {
      this.selectedZoneIndex = -1;
      this.selectedZone = null;
    }
  }


  deleteZoneOld(zone: Zone) {
    this._zonesBlocksBuildingAndUnitsService
      .deleteZone(zone.id)
      .subscribe((result) => {
        console.log(result);
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

  getUnitTypeName(unitTypeId: string): string {
    return this.UnitType?.find(x => x.id === unitTypeId)?.name ?? '—';
  }
  getStageNumberName(stageNumberId: string): string {
    return this.stageNumber?.find(x => x.id === stageNumberId)?.name ?? '—';
  }
  getSubUnitTypeName(subUnitTypeId: number): string {
    console.log("subUnitTypeId=", subUnitTypeId)
    console.log("subUnitType=", this.subUnitType)
    return (
      this.subUnitType?.find(x => Number(x.id) === Number(subUnitTypeId))?.name ?? '—'
    );
  }
  getLookups(): void {
    this.subscriptions.push(
      forkJoin({
        UnitType: this._licenseProjectUnitService.getUnitType(),
        subunitType: this._projectModelService.GetSysLicenseProjectSubUnitTypeDropDown(),
        stageNumber: this._licenseProjectUnitService.getStageNumber(),
        projectBuildingBlockTypeList: this._licenseProjectUnitService.GetLicenseProjectBuildingBlockType(),
        projectDeedsDDLList: this._licenseProjectUnitService.GetDeedsDDLByLicenseProjectId(this.licenseProjectId ?? ''), //'3902BC52-DCAA-456D-B9DF-719727905724'
      }).subscribe({
        next: (res) => {
          this.UnitType = res.UnitType;
          this.subUnitType = res.subunitType;
          this.stageNumber = res.stageNumber;
         

        },
        error: (err) => {
          //this._toastrService.error(this.localization.errorMsg);
        },
        complete: () => {
          //this.getSelectedProjectUnit();
        },
      })
    );
  }
  //building units or Blocks

  private GetByZoneId(zoneId: string): void {

    const blocksFromBS = this.unitCorrectionService.blocksData$.getValue();

    if (blocksFromBS && blocksFromBS.length > 0) {
      const projectUnits = blocksFromBS.filter(x => x.zoneId === zoneId);
      this.projectUnits = projectUnits;
      this.updateSelectedBuilding(projectUnits);
    } else {
      this.subscriptions.push(
        this.unitCorrectionService.getZonesAndBlocksTabData().subscribe(res => {
          if (res) {
            this.unitCorrectionService.setBlockOrBuildingsTabData(res.blocks);

            const projectUnits = res.blocks.filter(x => x.zoneId === zoneId);
            this.projectUnits = projectUnits;
            this.updateSelectedBuilding(projectUnits);
          }
        })
      );
    }
  }
  private observeBlocksBS(): void {
    this.subscriptions.push(
      this.unitCorrectionService.blocksData$.subscribe(blocks => {
        if (blocks && this.selectedZone) {
          const filtered = blocks.filter(
            x => x.zoneId === this.selectedZone!.id
          );
          this.projectUnits = filtered;
          this.updateSelectedBuilding(filtered);
        }
      })
    );
  }


  private GetByZoneIdOld(zoneId: string): void {
      this.subscriptions.push(this.unitCorrectionService.getZonesAndBlocksTabData().subscribe((res) => {
      if (res) {
        let projectUnits = res.blocks.filter((x => x.zoneId == zoneId));
        this.projectUnits = projectUnits;
        this.updateSelectedBuilding(projectUnits);
      }
    }));
    // this.subscriptions.push(
    //   this._licenseProjectUnitService
    //     .GetByZoneId(zoneId)
    //     .subscribe((res: ProjectUnit[] | null) => {
    //       if (res) {
    //         this.projectUnits = res;
    //         this.updateSelectedBuilding(res);
    //       }
    //     })
    // );
  }

  updateSelectedBuilding(projectUnits: ProjectUnit[]) {
    if (projectUnits.length > 0) {
      if (this.selectedbuildingOrBlock == null) {
        this.selectedbuildingOrBlock = projectUnits[0];
        this.onSelectedbuildingOrBlock(projectUnits[0], 0);
      } else {
        this.selectedbuildingOrBlock = projectUnits[0];
        this.onSelectedbuildingOrBlock(
          this.selectedbuildingOrBlock,
          this.selectedbuildingOrBlockIndex
        );
      }
    } else {
      this.selectedbuildingOrBlock = null;
    }
  }

  addBuildingOrBlock() {
    let Data = {
      title: 'إضافة بلوكات وعمائر - ' + this.selectedZone?.code,
      // component: AddEditProjectBlockComponent,
      component: CorrectionLicenseProjectZoneUnitComponent,
      id: 'CorrectionLicenseProjectZoneUnitComponent',
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  public openEditDialog(unit: ProjectUnit): void {
    this.selectedbuildingOrBlock = unit;
    this._zonesBlocksBuildingAndUnitsService.updateSelectedProjectUnit(
      this.selectedbuildingOrBlock
    );
    let Data = {
      title: 'تعديل بلوكات وعمائر - ' + unit.code,
      component: CorrectionLicenseProjectZoneUnitComponent,
      id: 'AddEditProjectBlockComponent',
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  selectedbuildingOrBlockIndex: number = 0;
  selectedbuildingOrBlock?: ProjectUnit | null = null;
  onSelectedbuildingOrBlock(
    buildingOrBlock: ProjectUnit,
    selectedBuildingOrBlockIndex: number
  ) {
    this.selectedbuildingOrBlock = buildingOrBlock;
    this.selectedbuildingOrBlockIndex = selectedBuildingOrBlockIndex;
  }

  selectedLicenseProjectSubUnitIndex: number = 0;
  selectedLicenseProjectSubUnit: ProjectSubUnitDto | null = null;
  onSelectedLicenseProjectSubUnit(
    selectedLicenseProjectSubUnit: ProjectSubUnitDto,
    selectedLicenseProjectSubUnitIndex: number
  ) {
    this.selectedLicenseProjectSubUnitIndex =
      selectedLicenseProjectSubUnitIndex;
    this.selectedLicenseProjectSubUnit = selectedLicenseProjectSubUnit;
  }

  deleteBuildingOrBlock(buildingOrBlock: ProjectUnit) {
    this.subscriptions.push(
      this._licenseProjectUnitService
        .deleteUnit(buildingOrBlock.id)
        .subscribe((res) => {
  
          if (res.isDone) {
            let units = this.projectUnits?.filter(
              (x) => x.id != buildingOrBlock.id
            );
            if (units) {
              this.projectUnits = units;
            } else {
              this.projectUnits = [];
            }
          }
        })
    );
  }

  //sub units

  addSubUnit() {
    let Data = {
      title:
        'إضافة نوع وحدة للعمارة/بلوك - ' + this.selectedbuildingOrBlock?.code,
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
            this.selectedbuildingOrBlock?.licenseProjectSubUnits.push(
              popupResult.data
            );
            console.log("popupResult.data", popupResult.data);
            break;
          case ZoneActionType.UpdateSubUnit.toString():
            const index = this.selectedbuildingOrBlock?.licenseProjectSubUnits.findIndex(
              (x) => x.id === popupResult.data.id
            );
            if (index !== undefined && index !== -1 && this.selectedbuildingOrBlock) {
              this.selectedbuildingOrBlock.licenseProjectSubUnits[index] = popupResult.data;
            }
            break;
        }
      }
    });
  }

  deleteSubUnit(subUnit: ProjectSubUnitDto) {
    this._ProjectSubUnitService
      .removeSubUnit(subUnit.id)
      .subscribe((result) => {
        if (result.isDone) {
          const index =
            this.selectedbuildingOrBlock?.licenseProjectSubUnits.findIndex(
              (x) => x.id == subUnit.id
            );
          if (index) {
            this.selectedbuildingOrBlock?.licenseProjectSubUnits.splice(
              index,
              1
            );
          }
        }
      });
  }
  updateSubUnit(subUnit: ProjectSubUnitDto) {
    let Data = {
      title:
        'تعديل نوع وحدة للعمارة/بلوك - ' + this.selectedbuildingOrBlock?.code,
      component: CorrectionLicenseProjectZoneUnitSubunitComponent,
      id: this.selectedbuildingOrBlock?.id,
      data: { isEdit: true, subUnit: subUnit }
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  //models

  openModelDialog(): void {
    if (!this.selectedLicenseProjectSubUnit) return;

    let title = `إضافة النماذج للوحدات فى ${this.selectedbuildingOrBlock?.unitTypeName} ${this.selectedbuildingOrBlock?.code} - زون ${this.selectedZone?.code}`;
    this._projectModelService.SetSubjectObj({
      licenseProjectSubUnitId: this.selectedLicenseProjectSubUnit.id,
    } as LicenseProjectModelDto);
    let Data = {
      title: title,
      component: CorrectionLicenseProjectZoneSubunitModelComponent,
      id: 'ProjectModuleModelsFormComponent',
      buttons: [],
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
        (res: null) => {
          this.moveToNextTab();
        }
      )
    );
  }

  moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }
  onExcelFileUploaded(fileRemovedData: any) {
    this.fileId = fileRemovedData.eventRes.data[0].id;
  }

  generateExcel() {
    this._codeService
      .CreateExcel(this.licenseProjectId as string)
      .subscribe((res) => {
        if (res) {
          saveAs(res.body, 'Tempelate.xlsx');
        }
      });
  }

  saveFileCode() {
    let data = {} as LicenseProjectSubUnitsListCodeFile;
    data.licenseProjectsId = this.licenseProjectId as string;
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
    let availabilityToUpdate= this._sharedLicenseProjectService.setLicenseAvailabilityToUpdateInLocalStorage(false)
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  clearObservable() {}
}
