import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { environment } from 'src/environments/environment';
import { DropDownSubUnitTypeDto } from '../../../dataModels/drop-down-name.dto';
import { ProjectSubUnitDto } from '../../../dataModels/project-sub-unit.dto';
import {
  accordionComponent,
  accordionContent,
} from 'src/app/shared/models/accordion.model';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { CorrectionSubUnitModelsComponent } from '../correction-sub-unit-models/correction-sub-unit-models.component';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ProjectUnit } from '../../../models/project-units';
import { Zone } from '../../../models/zone.model';
import { CorrectionLicenseProjectUnitService } from '../../../services/correction-license-project-unit.service';
import { CorrectionProjectSubUnitService } from '../../../services/correction-project-sub-unit.service';
import { CorrectionZonesBlocksBuildingAndUnitsService } from '../../../services/correction-zones-blocks-building-and-units.service';
import { CorrectionProjectModelService } from '../../../services/correct-units/correction-project-model-service.service';

@Component({
  selector: 'app-correction-unit-types',
  templateUrl: './correction-unit-types.component.html',
  styleUrls: ['./correction-unit-types.component.scss'],
})
export class CorrectionUnitTypesComponent implements OnInit, OnDestroy {
  typeName: string | undefined = '';
  zoneName: string | undefined = '';
  zones: Zone[] = [];
  subscriptions: Subscription[] = [];
  subUnites: ProjectSubUnitDto[] = [];
  selectedSubUnit: ProjectSubUnitDto | undefined = undefined;
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  correctionRequestId: string | null = '00000000-0000-0000-0000-000000000000';
  types: DropDownSubUnitTypeDto[] = [];
  projectUnitList: ProjectUnit[] = [];
  accordionContent: accordionContent = {
    oneAtATime: true,
    isAnimated: true,
    accordionComponentList: [],
  };

  constructor(
    private _projectModelService: CorrectionProjectModelService,
    private _projectSubUnitService: CorrectionProjectSubUnitService,
    private _projectUnitService: CorrectionLicenseProjectUnitService,
    private _accordionService: AccordionService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _zonesBlocksBuildingAndUnitsService: CorrectionZonesBlocksBuildingAndUnitsService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) {}

  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.loadComponentData();
    this.observeClickOnAccordionHeader();
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    this.correctionRequestId = this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage();
  }

  private observeClickOnAccordionHeader(): void {
    this.subscriptions.push(
      this._accordionService.clickOnAccordionHeader.subscribe((res: accordionComponent) => {
        this.updateSelectedProjectSubUnit(res.id as string);
        this.updateSelectedProjectSubUnitTitle(res.title as string);
      })
    );
  }

  private updateSelectedProjectSubUnit(zoneId: string): void {
    this._projectSubUnitService.updateSelectedProjectSubUnit(zoneId);
  }

  private updateSelectedProjectSubUnitTitle(title: string): void {
    this._projectSubUnitService.updateSelectedProjectSubUnitTitle(title);
  }

  private updateProjectUnits(): void {
    this._projectUnitService.setProjectUnits(this.projectUnitList);
  }

  private updateAccordionContent(units: ProjectUnit[]): void {
    this.projectUnitList.map((unit: ProjectUnit) => {
      this.zoneName = this.zones.find((z) => z.id == unit.zoneId)?.code;
      unit.licenseProjectSubUnits.forEach((subUnit: ProjectSubUnitDto) => {
        this.typeName = this.types.find((t) => t.id == subUnit.subUnitTypeId)?.name;

        this.accordionContent.accordionComponentList.push({
          icon: '',
          title: `${unit.unitTypeName} رقم ${unit.code} - المرحلة ${unit.stageNumber} - ${subUnit.subUnitTypeName}
<br>
تاريخ البداية: ${this.formatDate(unit.constructionStartOn)} &nbsp; تاريخ النهاية: ${this.formatDate(unit.constructionEndOn)}`,
          component: CorrectionSubUnitModelsComponent,
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
      this._projectSubUnitService.GetByRequestHeaderId(this.correctionRequestId as string),
      this._projectModelService.GetSysLicenseProjectSubUnitTypeDropDown(),
      this._zonesBlocksBuildingAndUnitsService.GetByRequestHeaderId(this.correctionRequestId as string),
      this._projectUnitService.GetByUnitCorrectionRequestHeaderId(this.correctionRequestId as string),
    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.subUnites = (results[0] as CoreResponseDTO<ProjectSubUnitDto[]>).data as ProjectSubUnitDto[];
        this.types = results[1] as DropDownSubUnitTypeDto[];
        this.zones = results[2] as Zone[];
        this.projectUnitList = results[3] as ProjectUnit[];
        this.updateProjectUnits();
        this.updateAccordionContent(this.projectUnitList);
      }
    });

    this.subscriptions.push(subscriptions);
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

  isFawriaValidation(): boolean {
    const typecode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    if (typecode == 'FSRSU') return true;
    else return false;
  }

  private updateSaveAsDraftBtnIsvisible(): void {
     this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
  }

  private formatDate(date?: string | Date): string {
    if (!date) return '';
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
