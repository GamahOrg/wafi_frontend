import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take, takeLast, takeUntil, takeWhile } from 'rxjs';
import { ZonesBlocksBuildingAndUnitsService } from '../../services/zones-blocks-building-units/zones-blocks-building-and-units.service';
import { LicenseProjectUnitService } from '../../services/license-project-unit/license-project-unit.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ProjectUnit } from '../../models/project-units';
import { AddEditProjectBlockComponent } from '../add-edit-project-block/add-edit-project-block.component';

@Component({
  selector: 'app-project-units',
  templateUrl: './project-units.component.html',
  styleUrls: ['./project-units.component.scss']
})
export class ProjectUnitsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  selectedProjectZone: string | null = null;
  selectedProjectZoneTitle: string | null = null;
  localization = {
    totalNumberOfUnits: "إجمالي عدد البلوكات والعمائر المضافة ",
    addingNewUnit: "إضافة بلوك او عمارة",
    zoneNumber: "زون رقم ",
    type: "النوع",
    unitNumber: "رقم البلوك / رقم العمارة",
    constructionStartOn: "تاريخ بداية الإنشاء",
    constructionEndOn: "تاريخ نهاية الإنشاء",
    subUnitsType: "أنواع الوحدات",
    actions: "الإجراءات",
    stageNumber: "رقم  المرحلة "
  }
  projectUnits: ProjectUnit[] | null = null
  selectedProjectUnit: ProjectUnit | null = null;
  constructor(
    private _zonesBlocksBuildingAndUnitsService: ZonesBlocksBuildingAndUnitsService,
    private _licenseProjectUnitService: LicenseProjectUnitService,
    private _popupService: PopupService,
  ) { }
  ngOnInit(): void {
    this.getSelectedProjectZone();
    this.zoneCodeData();
  }

  private getSelectedProjectZone(): void {
    this.selectedProjectZone = null;
    this.subscriptions.push(
      this._zonesBlocksBuildingAndUnitsService.getSelectedProjectZone().subscribe((res: string | null) => {
        this.selectedProjectZone = res;
        // console.log("this.selectedProjectZone", this.selectedProjectZone)
        if (this.selectedProjectZone && this.selectedProjectZone.length > 0) this.GetByZoneId(this.selectedProjectZone as string)
      })
    );

  }

  private zoneCodeData(): void {
    this.subscriptions.push(
      this._zonesBlocksBuildingAndUnitsService.selectedProjectZoneTitle.subscribe((res: string | null) => {
        if (res) this.selectedProjectZoneTitle = res
      })
    )
  }

  private GetByZoneId(zoneId: string): void {
    this.subscriptions.push(
      this._licenseProjectUnitService.GetByZoneId(zoneId).subscribe((res: ProjectUnit[] | null) => {
        if (res) this.projectUnits = res;
      })
    )
  }

  public openDialog(): void {
    this.selectedProjectUnit = null ;
    this._zonesBlocksBuildingAndUnitsService.updateSelectedProjectUnit(this.selectedProjectUnit)
    let Data = {
      title: "إضافة بلوكات وعمائر - " + this.selectedProjectZoneTitle,
      component: AddEditProjectBlockComponent,
      id: "AddEditProjectBlockComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data)
  }

  public openEditDialog(unit: ProjectUnit): void {
    this.selectedProjectUnit = unit;
    this._zonesBlocksBuildingAndUnitsService.updateSelectedProjectUnit(this.selectedProjectUnit)
    let Data = {
      title: "إضافة بلوكات وعمائر - " + this.selectedProjectZoneTitle,
      component: AddEditProjectBlockComponent,
      id: "AddEditProjectBlockComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data)
  }

  public deleteUnit(unit: ProjectUnit): void {
    this.subscriptions.push(
      this._licenseProjectUnitService.deleteProjectUnit(unit.id).subscribe((res: ProjectUnit[] | null) => {
        if (res) {
          this.projectUnits = res as ProjectUnit[];
        }
      })
    )
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
    this.selectedProjectZone = null;
    this._zonesBlocksBuildingAndUnitsService.updateSelectedProjectZone(null)
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
