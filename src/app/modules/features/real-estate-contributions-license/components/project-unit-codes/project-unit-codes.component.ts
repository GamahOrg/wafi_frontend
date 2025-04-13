import { Component } from '@angular/core';
import { Subscription, forkJoin, take, takeLast } from 'rxjs';
import {
  accordionComponent,
  accordionContent,
} from 'src/app/shared/models/accordion.model';
import { PopupData, notePopupData } from 'src/app/shared/models/popup.model';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectUnitService } from '../../services/license-project-unit/license-project-unit.service';
import { UnitCodesComponent } from '../unit-codes/unit-codes.component';
import { ProjectUnit } from '../../models/project-units';
import { LicenseRequestService } from '../../services/license-request.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import {
  RequestValidation,
  RequestSuccessResponse,
} from '../../dataModels/request-validation.model';
import { LicenseRequestValidationPopupComponent } from '../license-request-validation-popup/license-request-validation-popup.component';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ZonesBlocksBuildingAndUnitsService } from '../../services/zones-blocks-building-units/zones-blocks-building-and-units.service';
import { Zone } from '../../models/zone.model';

@Component({
  selector: 'app-project-unit-codes',
  templateUrl: './project-unit-codes.component.html',
  styleUrls: ['./project-unit-codes.component.scss'],
})
export class ProjectUnitCodesComponent {
  zones: Zone[] = [];
  projectUnit: ProjectUnit[] = [];
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  accordionContent: accordionContent | null = {
    oneAtATime: false,
    isAnimated: true,
    accordionComponentList: [],
  };
  localization = {
    zone: 'زون',
    UnitName: 'اسم الوحدة',
    ProjectUnitCodesComponent: 'اكواد وحدات المشروع',
  };
  constructor(
    private _projectUnitService: LicenseProjectUnitService,
    private _accordionService: AccordionService,
    private _zonesBlocksBuildingAndUnitsService: ZonesBlocksBuildingAndUnitsService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) {}
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.loadComponentData();
    this.observeClickOnAccordionHeader();
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  private observeClickOnAccordionHeader(): void {
    this.subscriptions.push(
      this._accordionService.clickOnAccordionHeader.subscribe(
        (res: accordionComponent) => {
          this.updateSelectedProjectUnit(res.id as string);
          this.updateSelectedProjectUnitTitle(res.title as string);
        }
      )
    );
  }

  private updateSelectedProjectUnit(zoneId: string): void {
    this._projectUnitService.updateSelectedProjectUnit(zoneId);
  }

  private updateSelectedProjectUnitTitle(title: string): void {
    this._projectUnitService.updateSelectedProjectUnitTitle(title);
  }

  private loadComponentData() {
    const requests = [
      this._zonesBlocksBuildingAndUnitsService.GetByLicenseProjectId(
        this.licenseProjectId as string
      ),
      this._projectUnitService.GetByLicenseProjectId(
        this.licenseProjectId as string
      ),
    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.zones = results[0] as Zone[];
        this.projectUnit = results[1] as ProjectUnit[];
        this.updateAccordionContent(this.projectUnit);
      }
    });

    this.subscriptions.push(subscriptions);
  }

  private updateAccordionContent(units: ProjectUnit[]): void {
    this._accordionService.resetAccordionContentComponentList();
    units.map((unit: ProjectUnit) => {
      this._projectUnitService.updateSelectedProjectUnitTypeId(unit.unitTypeId);
      let zoneName = this.zones.find((z) => z.id == unit.zoneId)?.code;
      this.accordionContent?.accordionComponentList.push({
        icon: '',
        title: `${unit.unitTypeName} - ${unit.code}- ${this.localization.zone} - ${zoneName}`,
        component: UnitCodesComponent,
        disabled: false,
        isVisible: true,
        id: unit.id,
        isViewed: false,
        isRendered: false,
        isDeletebtn: false,
      });
    });
    this._accordionService.updateAccordionContent(
      this.accordionContent as accordionContent
    );
  }

  public onNoDataButtonClicked(): void {
    this.openDialog();
  }
  public openDialog(): void {
    let Data = {
      title: "إضافة كود",
      component: null
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
