import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, combineLatest, forkJoin, take, takeLast } from 'rxjs';
import {
  accordionComponent,
  accordionContent,
} from 'src/app/shared/models/accordion.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { DropDownSubUnitTypeDto } from '../../../../dataModels/drop-down-name.dto';
import { LicenseProjectCompletionData } from '../../../../dataModels/license-project-model.dto';
import { ProjectSubUnitDto } from '../../../../dataModels/project-sub-unit.dto';
import { ProjectUnit } from '../../../../models/project-units';
import { TabCode } from '../../../../models/tab-code.model';
import { Zone } from '../../../../models/zone.model';
import { DataVisibilityOfLicenseProjectService } from '../../../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { LicenseProjectUnitService } from '../../../../services/license-project-unit/license-project-unit.service';
import { LicenseRequestService } from '../../../../services/license-request.service';
import { NextAndPreviusButtonsService } from '../../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ProjectModelService } from '../../../../services/project-model.service';
import { SharedLicenseProjectService } from '../../../../services/sharedLicenseProject/shared-license-project.service';
import { ZonesBlocksBuildingAndUnitsService } from '../../../../services/zones-blocks-building-units/zones-blocks-building-and-units.service';
import { CodesFileComponent } from '../../../codes-file/codes-file.component';
import { CorrectionUnitCodesComponent } from '../correction-unit-codes/correction-unit-codes.component';
import { UnitCorrectionService } from '../../../../services/unit-correction/unit-correction.service';

@Component({
  selector: 'app-correction-project-unit-codes',
  templateUrl: './correction-project-unit-codes.component.html',
  styleUrls: ['./correction-project-unit-codes.component.scss'],
})
export class CorrectionProjectUnitCodesComponent implements OnInit, OnDestroy {
  zones: Zone[] = [];
  projectUnit: ProjectUnit[] = [];
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  hideActionButtons: boolean = false;
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
  types: DropDownSubUnitTypeDto[] = [];
  typeName: string | undefined = '';

  constructor(
    private _projectUnitService: LicenseProjectUnitService,
    private _accordionService: AccordionService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private unitCorrectionService: UnitCorrectionService,

    private _projectModelService: ProjectModelService
  ) {}
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.loadComponentData();
    this.observeClickOnAccordionHeader();
    this.observeNextButtonIsCliced();
    this.checkIfShouldHideActionButtons();
  }

  private checkIfShouldHideActionButtons(): void {
    // let availabilityToUpdate= this._sharedLicenseProjectService.getAvailabilityToUpdateFarzFromLocalStorage()
    //   const typeCode = this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    //   if (typeCode === 'FSRSU' && this.licenseProjectId) {
    //     const requests = [
    //       this._dataVisibilityOfLicenseProjectService.GetCompletedLicenseProjectProfileTaps(this.licenseProjectId),
    //       this._licenseRequestService.GetLicenseProjectCompletionData(this.licenseProjectId)
    //     ];
    //     const subscriptions = forkJoin(requests).subscribe((results) => {
    //       if (results) {
    //         let completedTabs = results[0] as string[];
    //         let complete = results[1] as LicenseProjectCompletionData | null;
    //         if (completedTabs && complete)
    //           this.hideActionButtons = completedTabs.includes(TabCode.fawriaArchitecturalUnitsAndDesigns) && complete && (complete.isProfileCompleted || complete.isProjectHasUnitForFarzIntegration);
    //         if(availabilityToUpdate){
    //            this.hideActionButtons=false
    //         }
    //       }
    //     });
    //     this.subscriptions.push(subscriptions);
    //     // this.subscriptions.push(
    //     //   this._dataVisibilityOfLicenseProjectService
    //     //     .GetCompletedLicenseProjectProfileTaps(this.licenseProjectId)
    //     //     .subscribe((completedTabs: string[]) => {
    //     //       this.hideActionButtons = completedTabs.includes(TabCode.fawriaArchitecturalUnitsAndDesigns);
    //     //     })
    //     // );
    //   }
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
  private loadComponentData(): void {
    this.subscriptions.push(
      combineLatest([
        this.unitCorrectionService.getZonesAndBlocksTabData(),
        this._projectModelService.GetSysLicenseProjectSubUnitTypeDropDown(),
      ]).subscribe(([ zonesAndBlocksTab, subUnitTypes]) => {
        this.zones = zonesAndBlocksTab?.zones ?? [];
        this.projectUnit = zonesAndBlocksTab?.blocks ?? [];
        this.types = subUnitTypes ?? [];

        this.updateAccordionContent(this.projectUnit);
      })
    );
  }
  // private loadComponentData() {
  //   const requests = [
  //     this._zonesBlocksBuildingAndUnitsService.GetByLicenseProjectId(
  //       this.licenseProjectId as string
  //     ),
  //     this._projectUnitService.GetByLicenseProjectId(
  //       this.licenseProjectId as string
  //     ),
  //     this._projectModelService.GetSysLicenseProjectSubUnitTypeDropDown(),
  //   ];
  //   const subscriptions = forkJoin(requests).subscribe((results) => {
  //     if (results) {
  //       this.zones = results[0] as Zone[];
  //       this.projectUnit = results[1] as ProjectUnit[];
  //       this.types = results[2] as DropDownSubUnitTypeDto[];

  //       this.updateAccordionContent(this.projectUnit);
  //     }
  //   });
  //   this.subscriptions.push(subscriptions);
  // }

  private updateAccordionContent(units: ProjectUnit[]): void {
    // this._accordionService.resetAccordionContentComponentList();
    units.map((unit: ProjectUnit) => {
      let zoneName = this.zones.find((z) => z.id == unit.zoneId)?.code;
      this._projectUnitService.updateSelectedProjectUnitTypeId(unit.unitTypeId);
      unit.licenseProjectSubUnits.forEach((subUnit: ProjectSubUnitDto) => {
        this.typeName = this.types.find(
          (t) => t.id == subUnit.subUnitTypeId
        )?.name;

        this.accordionContent?.accordionComponentList.push({
          icon: '',
          title: `${this.typeName as string} - ${unit.unitTypeName} - ${
            unit.code
          } - ${this.localization.zone} - ${zoneName}`,
          component: CorrectionUnitCodesComponent,
          //component: SubUnitModelsComponent,
          disabled: false,
          isVisible: true,
          id: subUnit.id,
          isViewed: false,
          isRendered: false,
          isDeletebtn: false,
        });
      });
      //this._projectUnitService.updateSelectedProjectUnitTypeId(unit.unitTypeId);
      //let zoneName = this.zones.find((z) => z.id == unit.zoneId)?.code;

      //this.accordionContent?.accordionComponentList.push({
      //  icon: '',
      //  title: `${unit.unitTypeName} - ${unit.code}- ${this.localization.zone} - ${zoneName}`,
      //  component: null,
      //  disabled: false,
      //  isVisible: true,
      //  id: unit.id,
      //  isViewed: false,
      //  isRendered: false,
      //  isDeletebtn: false,
      //});
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
      title: 'إضافة كود',
      component: null,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  openCodesFileDialog(): void {
    let Data = {
      component: CodesFileComponent,
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

  isFawriaValidation(): boolean {
    const typecode =
      this._sharedLicenseProjectService.getLicenseTypeCodeStorage();
    if (typecode == 'FSRSU') return true;
    else return false;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
