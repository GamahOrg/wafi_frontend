import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  accordionComponent,
  accordionContent,
} from 'src/app/shared/models/accordion.model';
import { PopupData, notePopupData } from 'src/app/shared/models/popup.model';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ZonesBlocksBuildingAndUnitsService } from '../../services/zones-blocks-building-units/zones-blocks-building-and-units.service';
import { Zone } from '../../models/zone.model';
import { AddZoneComponent } from '../add-zone/add-zone.component';
import { ProjectUnitsComponent } from '../project-units/project-units.component';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';

@Component({
  selector: 'app-blocks-andbuildings-andunits',
  templateUrl: './blocks-andbuildings-andunits.component.html',
  styleUrls: ['./blocks-andbuildings-andunits.component.scss'],
})
export class BlocksAndbuildingsAndunitsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  accordionContent: accordionContent = {
    oneAtATime: false,
    isAnimated: true,
    accordionComponentList: [],
  };
  localization = {
    BlocksAndbuildingsAndunitsComponent: 'الزون و بلوكات وعمائر المشروع',
    totalNumberOfZones: 'إجمالي عدد الزون المضافة',
    addingNewZone: "رقم الزون الجديدة",
    addingZoneDetailsHint: ' يمكنك إضافة تفاصيل البلوكات والعماير داخل الزون',
    zoneNumber: 'زون رقم ',
  };
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  constructor(
    private _zonesBlocksBuildingAndUnitsService: ZonesBlocksBuildingAndUnitsService,
    private _accordionService: AccordionService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) {}

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.GetByLicenseProjectId();
    this.observeProjectZonesBS();
    this.observeClickOnAccordionHeader();
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }

  private observeClickOnAccordionHeader(): void {
    this.updateSelectedProjectZone(null);
    this.subscriptions.push(
      this._accordionService.clickOnAccordionHeader.subscribe(
        (res: accordionComponent) => {
          this.updateSelectedProjectZone(res.id as string);
          this.updateSelectedProjectZoneCode(res.title as string);
        }
      )
    );
  }

  private updateSelectedProjectZone(zoneId: string | null): void {
    this._zonesBlocksBuildingAndUnitsService.updateSelectedProjectZone(zoneId);
  }

  private updateSelectedProjectZoneCode(title: string | null): void {
    this._zonesBlocksBuildingAndUnitsService.updateSelectedProjectZoneTitle(
      title
    );
  }

  private GetByLicenseProjectId(): void {
    this.subscriptions.push(
      this._zonesBlocksBuildingAndUnitsService
        .GetByLicenseProjectId(this.licenseProjectId as string)
        .subscribe((res: Zone[] | null) => {
          if (res) {
            this.updateProjectZones(res);
          }
        })
    );
  }
  private updateProjectZones(zones: Zone[]): void {
    this._zonesBlocksBuildingAndUnitsService.updateProjectZones(zones);
  }
  private updateAccordionContent(zones: Zone[]): void {
    this._accordionService.resetAccordionContentComponentList();
    zones.map((zone: Zone) => {
      this.accordionContent?.accordionComponentList.push({
        icon: '',
        title: `${this.localization.zoneNumber} - ${zone.code}`,
        component: ProjectUnitsComponent,
        disabled: false,
        isVisible: true,
        id: zone.id,
        isViewed: false,
        isRendered: false,
        isDeletebtn: false,
      });
    });
    this._accordionService.updateAccordionContent(
      this.accordionContent as accordionContent
    );
  }
  private observeProjectZonesBS() {
    this.subscriptions.push(
      this._zonesBlocksBuildingAndUnitsService.projectZones.subscribe(
        (res: Zone[] | null) => {
          console.log('projectZones', res);
          if (res) {
            this.updateAccordionContent(res);
          }
        }
      )
    );
  }
  public onNoDataButtonClicked(): void {
    this.openDialog();
  }
  public openDialog(): void {
    let Data = {
      title: "إضافة زون جديدة",
      component: AddZoneComponent,
      id: 'AddZoneComponent',
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
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
