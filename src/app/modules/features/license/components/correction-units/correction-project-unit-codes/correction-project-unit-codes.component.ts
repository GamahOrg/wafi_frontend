import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import {
  accordionComponent,
  accordionContent,
} from 'src/app/shared/models/accordion.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { CorrectionUnitCodesComponent } from '../correction-unit-codes/correction-unit-codes.component';
import { ProjectUnit } from '../../../models/project-units';
import { LicenseRequestService } from '../../../services/license-request.service';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { Zone } from '../../../models/zone.model';
import { CodesFileComponent } from '../../codes-file/codes-file.component';
import { DataVisibilityOfLicenseProjectService } from '../../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabCode } from '../../../models/tab-code.model';
import { LicenseProjectCompletionData } from '../../../dataModels/license-project-model.dto';
import { ProjectModelService } from '../../../services/project-model.service';
import { DropDownSubUnitTypeDto } from '../../../../engineering-management/models/drop-down-name.dto';
import { ProjectSubUnitDto } from '../../../dataModels/project-sub-unit.dto';
import { CorrectionLicenseProjectUnitService } from '../../../services/correction-license-project-unit.service';
import { CorrectionZonesBlocksBuildingAndUnitsService } from '../../../services/correction-zones-blocks-building-and-units.service';
import { CorrectionCodesFileComponent } from '../correction-codes-file/correction-codes-file.component';

@Component({
  selector: 'app-correction-project-unit-codes',
  templateUrl: './correction-project-unit-codes.component.html',
  styleUrls: ['./correction-project-unit-codes.component.scss'],
})
export class CorrectionProjectUnitCodesComponent implements OnInit, OnDestroy {
  zones: Zone[] = [];
  projectUnit: ProjectUnit[] = [];
  subscriptions: Subscription[] = [];
  // licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  unitCorrectionHeaderRequestId: string | null = '00000000-0000-0000-0000-000000000000';
  hideActionButtons: boolean = false;
  accordionContent: accordionContent | null = {
    oneAtATime: true,
    isAnimated: true,
    accordionComponentList: [],
  };
  localization = {
    zone: 'زون',
    UnitName: 'اسم الوحدة',
    ProjectUnitCodesComponent: 'اكواد وحدات المشروع',
  };
  types: DropDownSubUnitTypeDto[] = [];
  typeName: string | undefined = '';

  constructor(
    private _projectUnitService: CorrectionLicenseProjectUnitService,
    private _accordionService: AccordionService,
    private _zonesBlocksBuildingAndUnitsService: CorrectionZonesBlocksBuildingAndUnitsService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _licenseRequestService: LicenseRequestService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
    private _projectModelService: ProjectModelService
  ) {}

  ngOnInit(): void {
    // this.getLicenseProjectIdStorage();
    this.getCorrectionUnitRequestId();
    this.loadComponentData();
    this.observeClickOnAccordionHeader();
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
    // this.checkIfShouldHideActionButtons();
    this.observeReloadFromExcel();
  }

  // private checkIfShouldHideActionButtons(): void {
  //   let availabilityToUpdate = this._sharedLicenseProjectService.getAvailabilityToUpdateFarzFromLocalStorage();
  //   const typeCode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
  //   if (typeCode === 'FSRSU' && this.licenseProjectId) {
  //     const requests = [
  //       this._dataVisibilityOfLicenseProjectService.GetCompletedLicenseProjectProfileTaps(this.licenseProjectId),
  //       this._licenseRequestService.GetLicenseProjectCompletionData(this.licenseProjectId),
  //     ];
  //     const subscriptions = forkJoin(requests).subscribe((results) => {
  //       if (results) {
  //         let completedTabs = results[0] as string[];
  //         let complete = results[1] as LicenseProjectCompletionData | null;
  //         if (completedTabs && complete)
  //           this.hideActionButtons =
  //             completedTabs.includes(TabCode.fawriaArchitecturalUnitsAndDesigns) &&
  //             complete &&
  //             (complete.isProfileCompleted || complete.isProjectHasUnitForFarzIntegration);

  //         if (availabilityToUpdate) {
  //           this.hideActionButtons = false;
  //         }
  //       }
  //     });
  //     this.subscriptions.push(subscriptions);
  //   }
  // }

  // private getLicenseProjectIdStorage(): void {
  //   this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  // }
  private getCorrectionUnitRequestId(): void {
    this.unitCorrectionHeaderRequestId = this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage();
  }

  private observeClickOnAccordionHeader(): void {
    this.subscriptions.push(
      this._accordionService.clickOnAccordionHeader.subscribe((res: accordionComponent) => {
        this.updateSelectedProjectUnit(res.id as string);
        this.updateSelectedProjectUnitTitle(res.title as string);
      })
    );
  }

  private updateSelectedProjectUnit(zoneId: string): void {
    this._projectUnitService.updateSelectedProjectUnit(zoneId);
  }

  private updateSelectedProjectUnitTitle(title: string): void {
    this._projectUnitService.updateSelectedProjectUnitTitle(title);
  }

  private observeReloadFromExcel(): void {
    this.subscriptions.push(
      this._projectUnitService.reloadUnitsCodesObservable$
        .subscribe(() => {
         
          this.accordionContent!.accordionComponentList = [];
          this.loadComponentData();
        })
    );
  }

  private loadComponentData() {
    const requests = [
      this._zonesBlocksBuildingAndUnitsService.GetByRequestHeaderId(this.unitCorrectionHeaderRequestId as string),
      this._projectUnitService.GetByUnitCorrectionRequestHeaderId(this.unitCorrectionHeaderRequestId as string),
      this._projectModelService.GetSysLicenseProjectSubUnitTypeDropDown(),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.zones = results[0] as Zone[];
        this.projectUnit = results[1] as ProjectUnit[];
        this.types = results[2] as DropDownSubUnitTypeDto[];

        this.updateAccordionContent(this.projectUnit);
      }
    });
    this.subscriptions.push(subscriptions);
  }

  private formatDate(date?: string | Date): string {
    if (!date) return '';
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }

  private updateAccordionContent(units: ProjectUnit[]): void {
    units.map((unit: ProjectUnit) => {
      let zoneName = this.zones.find((z) => z.id == unit.zoneId)?.code;
      this._projectUnitService.updateSelectedProjectUnitTypeId(unit.unitTypeId);
      unit.licenseProjectSubUnits.forEach((subUnit: ProjectSubUnitDto) => {
        this.typeName = this.types.find((t) => t.id == subUnit.subUnitTypeId)?.name;

        this.accordionContent?.accordionComponentList.push({
          icon: '',
          title: `${unit.unitTypeName} رقم ${unit.code} - المرحلة ${unit.stageNumber} - ${subUnit.subUnitTypeName}
<br>
تاريخ البداية: ${this.formatDate(unit.constructionStartOn)} &nbsp; تاريخ النهاية: ${this.formatDate(unit.constructionEndOn)}`,
          component: CorrectionUnitCodesComponent,
          disabled: false,
          isVisible: true,
          id: subUnit.id,
          isViewed: false,
          isRendered: false,
          isDeletebtn: false,
        });
      });
    });
    this._accordionService.updateAccordionContent(this.accordionContent as accordionContent);
  }

  public onNoDataButtonClicked(): void {
    this.openDialog();
  }

  public openDialog(): void {
    let Data = {
      title: 'إضافة كود',
      component: null,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  openCodesFileDialog(): void {
    let Data = {
      component: CorrectionCodesFileComponent,
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

  isFawriaValidation(): boolean {
    const typecode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    if (typecode == 'FSRSU') return true;
    else return false;
  }

  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
