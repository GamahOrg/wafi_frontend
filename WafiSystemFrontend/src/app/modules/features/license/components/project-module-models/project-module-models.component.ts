import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { environment } from 'src/environments/environment';
import { DropDownSubUnitTypeDto } from '../../dataModels/drop-down-name.dto';
import { ProjectModelService } from '../../services/project-model.service';
import { ProjectSubUnitDto } from '../../dataModels/project-sub-unit.dto';
import { ProjectSubUnitService } from '../../services/project-sub-unit.service';
import {
  accordionComponent,
  accordionContent,
} from 'src/app/shared/models/accordion.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { SubUnitModelsComponent } from '../sub-unit-models/sub-unit-models.component';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ZonesBlocksBuildingAndUnitsService } from '../../services/zones-blocks-building-units/zones-blocks-building-and-units.service';
import { ProjectUnit } from '../../models/project-units';
import { LicenseProjectUnitService } from '../../services/license-project-unit/license-project-unit.service';
import { Zone } from '../../models/zone.model';

@Component({
  selector: 'app-project-module-models',
  templateUrl: './project-module-models.component.html',
  styleUrls: ['./project-module-models.component.scss'],
})
export class ProjectModuleModelsComponent implements OnInit, OnDestroy {
  typeName: string | undefined = '';
  zoneName: string | undefined = '';
  zones: Zone[] = [];
  subscriptions: Subscription[] = [];
  subUnites: ProjectSubUnitDto[] = [];
  selectedSubUnit: ProjectSubUnitDto | undefined = undefined;
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  types: DropDownSubUnitTypeDto[] = [];
  projectUnitList: ProjectUnit[] = [];
  accordionContent: accordionContent = {
    oneAtATime: true,
    isAnimated: true,
    accordionComponentList: [],
  };
  constructor(
    private _projectModelService: ProjectModelService,
    private _projectSubUnitService: ProjectSubUnitService,
    private _projectUnitService: LicenseProjectUnitService,
    private _accordionService: AccordionService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _zonesBlocksBuildingAndUnitsService: ZonesBlocksBuildingAndUnitsService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) {}

  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.loadComponentData();
    // this.updateProjectUnits();
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
          console.log('accordion list', res);
          this.updateSelectedProjectSubUnit(res.id as string);
          this.updateSelectedProjectSubUnitTitle(res.title as string);
        }
      )
    );
  }

  private updateSelectedProjectSubUnit(zoneId: string): void {
    this._projectSubUnitService.updateSelectedProjectSubUnit(zoneId);
  }

  private updateSelectedProjectSubUnitTitle(title: string): void {
    this._projectSubUnitService.updateSelectedProjectSubUnitTitle(title);
  }

  // private GetProjectUnitByLicenseProjectId(): void {
  //   this.subscriptions.push(
  //     this._projectUnitService.GetByLicenseProjectId(this.licenseProjectId as string).subscribe((res: ProjectUnit[] | null) => {
  //       if (res) {
  //         this.updateProjectUnits(res)
  //         this.updateAccordionContent(res)
  //       }
  //     })
  //   );
  // }

  private updateProjectUnits(): void {
    this._projectUnitService.setProjectUnits(this.projectUnitList);
  }

  private updateAccordionContent(units: ProjectUnit[]): void {
    this.projectUnitList.map((unit: ProjectUnit) => {
      this.zoneName = this.zones.find((z) => z.id == unit.zoneId)?.code;
      unit.licenseProjectSubUnits.forEach((subUnit: ProjectSubUnitDto) => {
        this.typeName = this.types.find(
          (t) => t.id == subUnit.subUnitTypeId
        )?.name;

        this.accordionContent.accordionComponentList.push({
          icon: '',
          title: `${this.typeName as string} - ${unit.unitTypeName} - ${
            unit.code
          } - ${this.localization.zone} - ${this.zoneName}`,
          component: SubUnitModelsComponent,
          disabled: false,
          isVisible: true,
          id: subUnit.id,
          isViewed: false,
          isRendered: false,
          isDeletebtn: false,
        });
      });
    });
    this._accordionService.updateAccordionContent(this.accordionContent);
  }

  localization = {
    title: '',
    zone: 'زون',
    BlocksAndbuildingsAndunitsComponent: 'أنواع الوحدات بالبلوك / العمارة',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
    dateValidator: 'يجب ان يكون تاريخ الرخصة اقل من تاريخ الحالي',
  };
  private loadComponentData() {
    const requests = [
      this._projectSubUnitService.GetByLicenseProjectId(
        this.licenseProjectId as string
      ),
      this._projectModelService.GetSysLicenseProjectSubUnitTypeDropDown(),
      this._zonesBlocksBuildingAndUnitsService.GetByLicenseProjectId(
        this.licenseProjectId as string
      ),
      this._projectUnitService.GetByLicenseProjectId(
        this.licenseProjectId as string
      ),
    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.subUnites = (results[0] as CoreResponseDTO<ProjectSubUnitDto[]>)
          .data as ProjectSubUnitDto[];
        this.types = results[1] as DropDownSubUnitTypeDto[];
        this.zones = results[2] as Zone[];
        this.projectUnitList = results[3] as ProjectUnit[];
        this.updateProjectUnits();
        this.updateAccordionContent(this.projectUnitList);
      }
    });

    this.subscriptions.push(subscriptions);
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
  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
