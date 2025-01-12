import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, forkJoin, take } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { DetachedLicenseProjectUnitsService } from '../../services/detached-license-project-units/detached-license-project-units.service';
import { LicenseProjectDetachedUnit } from '../../dataModels/license-project-detached-unit.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { ProjectModelService } from '../../services/project-model.service';
import { ToastrService } from 'ngx-toastr';
import { DropDownNameDto, DropDownSubUnitTypeDto } from '../../dataModels/drop-down-name.dto';
import { AddEditDetachedLicenseProjectUnitsComponent } from '../add-edit-detached-license-project-units/add-edit-detached-license-project-units.component';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';

@Component({
  selector: 'app-detached-license-project-units',
  templateUrl: './detached-license-project-units.component.html',
  styleUrls: ['./detached-license-project-units.component.scss']
})
export class DetachedLicenseProjectUnitsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = "000000 00-0000-0000-0000-000000000000";
  detachedUnits: LicenseProjectDetachedUnit[] | null = null;
  unitTypeLookup: DropDownSubUnitTypeDto[] | null = null
  localization = {
    title: 'وحدات المشروع',
    subUnitsType: "اضاقة أنواع الوحدات",
    subUnitCount: "عدد وحدات",
    actions: "إجراءات",
    errorMsg: "حدث خطأ"
  };
  constructor(
    private _popupService: PopupService,
    private _detachedLicenseProjectUnitsService: DetachedLicenseProjectUnitsService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _projectModelService: ProjectModelService,
    private _toastrService: ToastrService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observeDetachedUnits();
    this.observeUnitTypeLookup();
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }
  
  observeDetachedUnits(): void {
    this.subscriptions.push(
      this._detachedLicenseProjectUnitsService.getDetachedUnits().subscribe((res: LicenseProjectDetachedUnit[] | null) => {
        this.detachedUnits = res
      })
    )
  }

  observeUnitTypeLookup(): void {
    this.subscriptions.push(
      this._detachedLicenseProjectUnitsService.getUnitTypeLookup().subscribe((res: DropDownSubUnitTypeDto[] | null) => {
        this.unitTypeLookup = res;
      })
    )
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) this.getData();
  }

  getData(): void {
    this.subscriptions.push(
      forkJoin(
        {
          subUnitTypeReq: this._projectModelService.GetSysLicenseProjectSubUnitTypeDropDown(),
          detachedUnitsReq: this._detachedLicenseProjectUnitsService.GetLicenseProjectSubUnitsByLicenseProjectId(this.licenseProjectId as string)
        }
      ).subscribe(
        res => {
          this._detachedLicenseProjectUnitsService.updateUnitTypeLookup(res.subUnitTypeReq as DropDownSubUnitTypeDto[] | null);
          this._detachedLicenseProjectUnitsService.updateDetachedUnits(res.detachedUnitsReq?.licenseProjectSubUnits as LicenseProjectDetachedUnit[] | null);
        }
      )
    )
  }
  public openDialog(): void {
    let Data = {
      title: this.localization.title,
      component: AddEditDetachedLicenseProjectUnitsComponent,
      id: "addEditDetachedLicenseProjectUnits"
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  public getSubUnitName(subUnit: LicenseProjectDetachedUnit): string {
    let subUnitNameType = this.unitTypeLookup?.find((item: DropDownSubUnitTypeDto) => subUnit.subUnitTypeId == item.id)
    return (this.unitTypeLookup && this.unitTypeLookup.length > 0 && subUnitNameType) ? subUnitNameType.name : ""
  }

  public deleteSubUnit(id: string, index: number): void {
    this.subscriptions.push(
      this._detachedLicenseProjectUnitsService.DeleteLicenseProjectSubUnitsAsync(id).subscribe(res => {
        if (res) {
          this.detachedUnits?.splice(index, 1);
        }
      })
    )
  }
  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.moveToNextTab()
      })
    )
  }
  moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
