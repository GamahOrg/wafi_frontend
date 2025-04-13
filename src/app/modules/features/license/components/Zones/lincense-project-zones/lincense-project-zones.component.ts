import { Component, OnInit } from '@angular/core';
import { ZonesBlocksBuildingAndUnitsService } from '../../../services/zones-blocks-building-units/zones-blocks-building-and-units.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { Subscription } from 'rxjs';
import { Zone } from '../../../models/zone.model';
import { AddZoneComponent } from '../../add-zone/add-zone.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectUnitService } from '../../../services/license-project-unit/license-project-unit.service';
import { ProjectUnit } from '../../../models/project-units';
import { ProjectSubUnitDto } from '../../../dataModels/project-sub-unit.dto';
import { LicenseProjectZoneUnitSubunitComponent } from '../license-project-zone-unit-subunit/license-project-zone-unit-subunit.component';
import { ProjectSubUnitService } from '../../../services/project-sub-unit.service';
import { LicenseProjectZoneUnitComponent } from '../license-project-zone-unit/license-project-zone-unit.component';
import { ZoneActionType } from '../../../enums/zone-action-type.enum';
import { PopupResult } from '../../../models/popup-result.model';
import { LicenseProjectModelDto } from '../../../dataModels/license-project-model.dto';
import { LicenseProjectZoneSubunitModelComponent } from '../license-project-zone-subunit-model/license-project-zone-subunit-model.component';
import { ProjectModelService } from '../../../services/project-model.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ProjectUnitCodeService } from '../../../services/project-unit-code.service';
import { saveAs } from 'file-saver';
import { LicenseProjectSubUnitsListCodeFile } from '../../../dataModels/license-project-sub-units-list-code-file';

@Component({
  selector: 'app-lincense-project-zones',
  templateUrl: './lincense-project-zones.component.html',
  styleUrls: ['./lincense-project-zones.component.scss']
})
export class LincenseProjectZonesComponent implements OnInit {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  zones: Zone[] = [] = [];
  projectUnits: ProjectUnit[] | null = null
  licenseProjectSubUnits: ProjectSubUnitDto[] = [] as ProjectSubUnitDto[];

  singleFileUploaderData: FileUploader = {
    multiple: false,
    allowedExtensionsText: 'EXCEL',
    allowedExtensions: ['.xls', '.xlsx'],
  } as FileUploader;

  fileId: string = "";
  
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
  ) { }

  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.GetByLicenseProjectId();
    this.observeProjectZonesBS();
    // this.observeNextButtonIsCliced();
    this.updateSaveAsDraftBtnIsvisible()
    this.observePopupClose();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }

  private GetByLicenseProjectId(): void {
    this.subscriptions.push(
      this._zonesBlocksBuildingAndUnitsService
        .GetByLicenseProjectId(this.licenseProjectId as string)
        .subscribe((res: Zone[] | null) => {
          if (res) {
            this.zones = res
            this.updateProjectZones(res);
            this.updateSelectedZone(res);
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
        this.selectedZone = this.zones[0]
        this.onZoneSelected(this.selectedZone, 0)
      } else {
        this.onZoneSelected(this.selectedZone, this.selectedZoneIndex)
      }
    }
  }

  private observeProjectZonesBS() {
    this.subscriptions.push(
      this._zonesBlocksBuildingAndUnitsService.projectZones.subscribe(
        (res: Zone[] | null) => {
          console.log('projectZones', res);
          if (res) {
            this.zones = res
            this.updateSelectedZone(res);
            //this.updateAccordionContent(res);
          }
        }
      )
    );
  }



  public openDialog(): void {
    let Data = {
      title: "إضافة زون جديدة",
      component: AddZoneComponent,
      id: 'AddZoneComponent',
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  selectedZoneIndex: number = 0;
  selectedZone?: Zone | null = null;
  onZoneSelected(zone: Zone, selectedZoneIndex: number) {
    this.selectedZoneIndex = selectedZoneIndex;
    this.selectedZone = zone;
    this.updateSelectedProjectZone(zone.id);
    this.updateSelectedProjectZoneCode(zone.code);
    this.GetByZoneId(zone.id)
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
    this._zonesBlocksBuildingAndUnitsService.deleteZone(zone.id).subscribe(result => {
      console.log(result);
      if (result.isDone) {
        this.selectedZone = null;
        this.selectedZoneIndex = 0
        this.updateProjectZones(this.zones.filter(x => x.id != zone.id));
      }
    })

  }

  //building units or Blocks

  private GetByZoneId(zoneId: string): void {
    this.subscriptions.push(
      this._licenseProjectUnitService.GetByZoneId(zoneId).subscribe((res: ProjectUnit[] | null) => {
        if (res) {
          this.projectUnits = res;
          this.updateSelectedBuilding(res)
        }
      })
    )
  }

  updateSelectedBuilding(projectUnits: ProjectUnit[]) {
    if (projectUnits.length > 0) {

      if (this.selectedbuildingOrBlock == null) {
        this.selectedbuildingOrBlock = projectUnits[0];
        this.onSelectedbuildingOrBlock(projectUnits[0], 0)
      } else {
        this.selectedbuildingOrBlock = projectUnits[0];
        this.onSelectedbuildingOrBlock(this.selectedbuildingOrBlock, this.selectedbuildingOrBlockIndex)
      }
    } else {
      this.selectedbuildingOrBlock = null;
    }

  }

  addBuildingOrBlock() {
    let Data = {
      title: "إضافة بلوكات وعمائر - " + this.selectedZone?.code,
      // component: AddEditProjectBlockComponent,
      component: LicenseProjectZoneUnitComponent,
      id: "AddEditProjectBlockComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data)
  }

  public openEditDialog(unit: ProjectUnit): void {
    this.selectedbuildingOrBlock = unit;
    this._zonesBlocksBuildingAndUnitsService.updateSelectedProjectUnit(this.selectedbuildingOrBlock)
    let Data = {
      title: "تعديل بلوكات وعمائر - " + unit.code,
      component: LicenseProjectZoneUnitComponent,
      id: "AddEditProjectBlockComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data)
  }

  selectedbuildingOrBlockIndex: number = 0;
  selectedbuildingOrBlock?: ProjectUnit | null = null;
  onSelectedbuildingOrBlock(buildingOrBlock: ProjectUnit, selectedBuildingOrBlockIndex: number) {
    this.selectedbuildingOrBlock = buildingOrBlock;
    this.selectedbuildingOrBlockIndex = selectedBuildingOrBlockIndex;
  }


  selectedLicenseProjectSubUnitIndex: number = 0;
  selectedLicenseProjectSubUnit: ProjectSubUnitDto | null = null
  onSelectedLicenseProjectSubUnit(selectedLicenseProjectSubUnit: ProjectSubUnitDto, selectedLicenseProjectSubUnitIndex: number) {
    this.selectedLicenseProjectSubUnitIndex = selectedLicenseProjectSubUnitIndex;
    this.selectedLicenseProjectSubUnit = selectedLicenseProjectSubUnit;
  }

  deleteBuildingOrBlock(buildingOrBlock: ProjectUnit) {
    this.subscriptions.push(
      this._licenseProjectUnitService.deleteUnit(buildingOrBlock.id).subscribe(res => {
        console.log(res);
        if (res.isDone) {
          let units = this.projectUnits?.filter(x => x.id != buildingOrBlock.id);
          if (units) {
            this.projectUnits = units;
          } else {
            this.projectUnits = [];
          }
        }
      })
    )
  }


  //sub units

  addSubUnit() {
    let Data = {
      title: "إضافة نوع وحدة للعمارة/بلوك - " + this.selectedbuildingOrBlock?.code,
      component: LicenseProjectZoneUnitSubunitComponent,
      id: this.selectedbuildingOrBlock?.id,
    } as PopupData;
    this._popupService.updatePopupData(Data)
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
            this.selectedbuildingOrBlock?.licenseProjectSubUnits.push(popupResult.data)
            break;

        }


      }

    })
  }


  deleteSubUnit(subUnit: ProjectSubUnitDto) {
    this._ProjectSubUnitService.removeSubUnit(subUnit.id).subscribe(result => {
      
      if (result.isDone) {
        const index = this.selectedbuildingOrBlock?.licenseProjectSubUnits.findIndex(x => x.id == subUnit.id);
        if (index) {
          this.selectedbuildingOrBlock?.licenseProjectSubUnits.splice(index, 1)
        }
      }
    })
  }

  //models

  openModelDialog(): void {
    if (!this.selectedLicenseProjectSubUnit) return;

    let title = `إضافة النماذج للوحدات فى ${this.selectedbuildingOrBlock?.unitTypeName} ${this.selectedbuildingOrBlock?.code} - زون ${this.selectedZone?.code}`

    this._projectModelService.SetSubjectObj({ licenseProjectSubUnitId: this.selectedLicenseProjectSubUnit.id } as LicenseProjectModelDto);
    let Data = {
      title: title,
      component: LicenseProjectZoneSubunitModelComponent,
      id: "ProjectModuleModelsFormComponent",
      buttons:[]
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  // private observeNextButtonIsCliced() {
  //   this.subscriptions.push(
  //     this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
  //       this.moveToNextTab();
  //     })
  //   )
  // }

 

  // private observeTabsButtons(): void {
  //   this.observeNextButtonIsCliced();
  // }

  // private moveToNextTab(): void {
  //   this._nextAndPreviusButtonsService.moveToNextTab.emit()
  // }


  // private observeNextButtonIsCliced() {
  //   this.subscriptions.push(
  //     this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
  //       (res: null) => {
  //         this.moveToNextTab();
  //       }
  //     )
  //   );
  // }
  moveToNextTab(): void {
    
    // this._nextAndPreviusButtonsService.moveToNextTab.emit();

        this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this._nextAndPreviusButtonsService.moveToNextTab.emit()
      })
    )
  }

  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false)
  }


 onExcelFileUploaded(fileRemovedData: any) {
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
        let data = {} as LicenseProjectSubUnitsListCodeFile
        data.licenseProjectsId = this.licenseProjectId as string;
        data.fileId = this.fileId;
        this._codeService.saveFileData(data).subscribe((res) => {
          if (res && res.isDone) {
            this._toastrNotificationService.showSuccess("تم الحفظ");
            this._popupService.dismissDialog();
    
          }
          else {
            this._toastrNotificationService.showError("حدث خطأ اثناء الحفظ");
    
          }
        });
      }

  
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
