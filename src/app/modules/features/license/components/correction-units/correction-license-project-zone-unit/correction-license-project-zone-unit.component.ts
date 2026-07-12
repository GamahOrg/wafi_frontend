import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectDeedLookupDto, LicenseProjectNatureTypeDto, ProjectUnit, SysLicenseProjectBuildingBlockTypeDto } from '../../../models/project-units';
import { Zone } from '../../../models/zone.model';
import { Validators, AbstractControl, FormArray, FormBuilder, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ProjectSubUnitDto } from '../../../dataModels/project-sub-unit.dto';
import { DropDownNameDto, DropDownSubUnitTypeDto } from '../../../dataModels/drop-down-name.dto';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ProjectModelService } from '../../../services/project-model.service';
import { ZonesBlocksBuildingAndUnitsService } from '../../../services/zones-blocks-building-units/zones-blocks-building-and-units.service';
import { LicenseProjectUnitService } from '../../../services/license-project-unit/license-project-unit.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { environment } from 'src/environments/environment';
import { LicenseProjectNatureTypeEnum, LicenseProjectUnitTypeEnum } from '../../../enums/unit-status.enum';
import { CorrectionLicenseProjectUnitService } from '../../../services/correction-license-project-unit.service';
import { CorrectionZonesBlocksBuildingAndUnitsService } from '../../../services/correction-zones-blocks-building-and-units.service';

@Component({
  selector: 'app-correction-license-project-zone-unit',
  templateUrl: './correction-license-project-zone-unit.component.html',
  styleUrls: ['./correction-license-project-zone-unit.component.scss']
})
export class CorrectionLicenseProjectZoneUnitComponent implements OnInit, OnDestroy {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  //licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  correctionRequestHeaderId: string | null = '00000000-0000-0000-0000-000000000000';
  selectedProjectZone: string | null = '00000000-0000-0000-0000-000000000000';
  selectedProjectUnit: ProjectUnit | null = null;
  UnitType: DropDownNameDto[] | null = null;
  subUnitType: DropDownSubUnitTypeDto[] | null = null;
  stageNumber: DropDownNameDto[] | null = null;
  projectBuildingBlockType: SysLicenseProjectBuildingBlockTypeDto[] | null = null;
  projectBuildingBlockTypeList: SysLicenseProjectBuildingBlockTypeDto[] | null = null;
  projectDeedsDDLList: LicenseProjectDeedLookupDto[] | null = null;
  licenseProjectSubUnitsArray: ProjectSubUnitDto[] = [] as ProjectSubUnitDto[];
  showValidation: boolean = false;
  showValidationSubUnitsForm: boolean = false;
  LicenseProjectNatureTypeEnum = LicenseProjectNatureTypeEnum ;
  LicenseProjectUnitTypeEnum!: LicenseProjectUnitTypeEnum ;

  licenseProjectNatureType: LicenseProjectNatureTypeDto = {
    natureTypeId: 0,
    natureTypeName: '',
    projectId: ''
  };

  addEditUnitForm = this._formBuilder.group(
    {
      id: ['00000000-0000-0000-0000-000000000000', Validators.required],
      zoneId: ['', Validators.required],
      unitTypeId: ['', Validators.required],
      buildingBlockTypeId: ['', Validators.required],
      licenseProjectDeedId: ['', Validators.required],
      designFileId: ['', Validators.required],
      // unitTypeName: [''],
      code: ['', Validators.required],
      stageNumberId: ['', Validators.required],
      // stageNumber: ['', Validators.required],
      constructionStartOn: ['', Validators.required],
      constructionEndOn: ['', Validators.required],
      correctedUnitRequestHeaderId: [ '00000000-0000-0000-0000-000000000000', Validators.required],
      licenseProjectSubUnits: this._formBuilder.array(
        [] as ProjectSubUnitDto[]
      ),
    },
    { validators: dateValidator }
  );

  singleFileUploaderData: FileUploader = {
    multiple: false,
    allowedExtensionsText: 'dwg',
    allowedExtensions: ['.dwg'],
    size: 30720
  } as FileUploader;

  get controls() {
    return this.addEditUnitForm.controls;
  }

  // get SubUnitsFormControls() {
  //   return this.licenseProjectSubUnitsForm.controls;
  // }

  get licenseProjectSubUnits(): FormArray {
    return this.addEditUnitForm.controls.licenseProjectSubUnits;
  }

  localization = {
    errorMsg: 'لا يمكن اضافة أو تعديل بلوكات أو عماير الآن',
    UnitType: 'إضافة بلوك / عمارة ',
    unitCode: 'رقم البلوك / رقم العمارة',
    stageNo: 'رقم المرحلة',
    constructionStartOn: 'تاريخ بداية الإنشاء',
    constructionEndOn: 'تاريخ نهاية الانشاء',
    chooseUnitTitle: 'تحديد نوع الوحدات داخل البلوك',
    addingNewUnit: 'حفظ و إضافة نوع وحدة جديد ',
    chooseUnitTitleHint: '( يمكنك اختيار أكثر من نوع من الوحدات داخل البلوك )',
    dateValidator: 'يجب أن يكون تاريخ البدايه اقل من تاريخ النهايه',
    subUnitsType: 'اضاقة أنواع الوحدات بالبلوك / العمارة ',
    subUnitCount: 'عدد وحدات الخاص بالبلوك أو العمارة  ',
    actions: 'إجراءات',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    projectBuildingBlockType: 'نوع البلوك / العمارة',
    designFile: 'ملف الاوتوكاد',
    deed: 'الصك',
  };

  constructor(
    private _licenseProjectUnitService: CorrectionLicenseProjectUnitService,
    private _zonesBlocksBuildingAndUnitsService: CorrectionZonesBlocksBuildingAndUnitsService,
    private _projectModelService: ProjectModelService,
    private _formBuilder: FormBuilder,
    private _popupService: PopupService,
    private _toastrService: ToastrService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,

  ) { }

  ngOnInit(): void {
    this.getCorrectionRequestHeaderIdStorage();
    this.getSelectedProjectZone();
    this.observeAddEditUnitForm();
    this.getLookups();
    this.observePopupEvents();
    this.getProjectNatureType();
  }

  private observeAddEditUnitForm() {
    this.subscriptions.push(
      this.addEditUnitForm.valueChanges.subscribe((changes) => {
        // console.log("addEditUnitForm", this.addEditUnitForm);
        // this.controls.licenseProjectsId.setValue(this.licenseProjectId)

      })
    );
  }

  onDesignFileUploaded($event: any) {
    if ($event.eventRes.data.length == 0) {
      this.addEditUnitForm.patchValue({ designFileId: null })
      return;
    }
    this.addEditUnitForm.patchValue({ designFileId: $event.eventRes.data[0].id })
  }

  onUnitTypeChange(unitTypeId?: string) {
    const selectedUnitTypeId = unitTypeId;
    if (selectedUnitTypeId == '16075af0-4ac1-4649-8728-8c1672c58660') {
      if (this.projectBuildingBlockTypeList) {
        this.projectBuildingBlockType = this.projectBuildingBlockTypeList.filter(
          (item: SysLicenseProjectBuildingBlockTypeDto) => item.isBlock == true
        );
      }
    } else {
      if (this.projectBuildingBlockTypeList) {
        this.projectBuildingBlockType = this.projectBuildingBlockTypeList.filter(
          (item: SysLicenseProjectBuildingBlockTypeDto) => item.isBuilding == true
        );
      }
    }
    if (this.projectBuildingBlockTypeList) {
      // If project nature type is Lands, filter by isLands
      if (this.licenseProjectNatureType.natureTypeId === LicenseProjectNatureTypeEnum.Lands) {
        this.projectBuildingBlockType = this.projectBuildingBlockTypeList.filter(
          (item: SysLicenseProjectBuildingBlockTypeDto) => item.isLands === true
        );
        return;
      } else {
        this.projectBuildingBlockType = this.projectBuildingBlockTypeList.filter(
          (item: SysLicenseProjectBuildingBlockTypeDto) => item.isLands === false
        );
        return;
      }
    }

  }

  // private observeLicenseProjectSubUnitsForm() {
  //   this.subscriptions.push(
  //     this.licenseProjectSubUnitsForm.valueChanges.subscribe(changes => {
  //       console.log("changes", changes);
  //       console.log("licenseProjectSubUnitsForm", this.licenseProjectSubUnitsForm);
  //       // this.SubUnitsFormControls.licenseProjectUnitId.setValue(this.licenseProjectId)
  //     })
  //   )
  // }
  // private getLicenseProjectIdStorage(): void {
  //   this.licenseProjectId =
  //     this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  // }
  private getCorrectionRequestHeaderIdStorage(): void {
    this.correctionRequestHeaderId =
      this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage();
  }

  private getSelectedProjectZone(): void {
    this.subscriptions.push(
      this._zonesBlocksBuildingAndUnitsService
        .getSelectedProjectZone()
        .subscribe((res: string | null) => {
          this.selectedProjectZone = res;
          this.controls.zoneId.setValue(this.selectedProjectZone);
        })
    );
  }
  private getProjectNatureType(): void {
    this.subscriptions.push(
      this._licenseProjectUnitService
        .GetLicenseProjectNatureType(this.correctionRequestHeaderId ??'')
        .subscribe((res: LicenseProjectNatureTypeDto | null) => {
          if (res) {
            this.licenseProjectNatureType.natureTypeId = res?.natureTypeId;
            this.licenseProjectNatureType.natureTypeName = res?.natureTypeName;
            this.licenseProjectNatureType.projectId = res?.projectId;
            //this.cdRef.detectChanges();
            if (res?.natureTypeId === LicenseProjectNatureTypeEnum.Lands) {
              const blockType = this.UnitType?.find(x => x.name === 'بلوك');
              if (blockType) {
                this.addEditUnitForm.patchValue({
                  unitTypeId: blockType.id
                });
                this.onUnitTypeChange(blockType.id);
              }
            }
          }


        })
    );
  }
  public getSubUnitName(unit: ProjectSubUnitDto): string | undefined {
    if (this.subUnitType) {
      let subUnitNameType = this.subUnitType.filter(
        (item: DropDownSubUnitTypeDto) => unit.subUnitTypeId == item.id
      );
      return subUnitNameType[0].name;
    }
    return undefined;
  }

  // popup
  observePopupEvents(): void {
    this.observeconfirmAction();
  }

  private getSelectedProjectUnit(): void {
    this.subscriptions.push(
      this._zonesBlocksBuildingAndUnitsService
        .getSelectedProjectUnit()
        .subscribe((res: ProjectUnit | null) => {
          if (res) {

            this.selectedProjectUnit = res as ProjectUnit;
            // if(this.selectedProjectUnit.buildingBlockTypeId && this.selectedProjectUnit.buildingBlockTypeId != 0)
              this.onUnitTypeChange(this.selectedProjectUnit.unitTypeId);

            this.addEditUnitForm.patchValue(this.selectedProjectUnit as any);

            this.controls.correctedUnitRequestHeaderId.setValue(this.correctionRequestHeaderId);

            if (this.selectedProjectUnit.licenseProjectSubUnits.length > 0) {
              this.licenseProjectSubUnitsArray = this.selectedProjectUnit.licenseProjectSubUnits;
              this.selectedProjectUnit.licenseProjectSubUnits.forEach(
                (subUnit) => {
                  let subUnitFG = this._formBuilder.group({
                    id: subUnit.id,
                    licenseProjectUnitId: this.correctionRequestHeaderId,
                    subUnitTypeId: subUnit.subUnitTypeId,
                    typeName: subUnit.typeName,
                    subUnitCount: subUnit.subUnitCount,
                    // buildingBlockTypeId: subUnit.buildingBlockTypeId as number,
                    // designFileId: subUnit.designFileId as string,
                  });
                  this.licenseProjectSubUnits.push(subUnitFG);
                }
              );
            }
          }
        })
    );
  }

  // public addNewFormGroup(): void {
  //   // this.SubUnitsFormControls.licenseProjectUnitId.setValue(
  //   //   this.licenseProjectId as string
  //   // );
  //   if (
  //     this.licenseProjectSubUnitsForm?.invalid ||
  //     this.SubUnitsFormControls.subUnitTypeId.value == 0
  //   ) {
  //     this.showValidationSubUnitsForm = true;
  //     this._toastrNotificationService.showError(
  //       this.localization.PleaseAddAllRequiredFields
  //     );
  //     // this.licenseProjectSubUnitsForm?.markAllAsTouched();
  //     return;
  //   }

  //   console.log(
  //     'this.licenseProjectSubUnitsForm',
  //     this.licenseProjectSubUnitsForm
  //   );
  //   this.licenseProjectSubUnits.push(this.licenseProjectSubUnitsForm);
  //   this.licenseProjectSubUnitsArray.push(
  //     this.licenseProjectSubUnitsForm.value as ProjectSubUnitDto
  //   );
  //   this.licenseProjectSubUnitsForm = this._formBuilder.group({
  //     id: '00000000-0000-0000-0000-000000000000',
  //     licenseProjectUnitId: [
  //       '00000000-0000-0000-0000-000000000000',
  //       Validators.required,
  //     ],
  //     subUnitTypeId: this._formBuilder.control<number>(0, [
  //       Validators.required,
  //     ]),
  //     subUnitCount: this._formBuilder.control<number | null>(null, [
  //       Validators.required,
  //       Validators.min(0),
  //     ]),

  //   });
  //   // this.licenseProjectSubUnitsForm.reset()
  // }

  deleteSubUnit(index: number): void {
    this.licenseProjectSubUnits.removeAt(index);
    this.licenseProjectSubUnitsArray.splice(index, 1);
  }

  getLookups(): void {
    this.subscriptions.push(
      forkJoin({
        UnitType: this._licenseProjectUnitService.getUnitType(),
        subUnitType: this._projectModelService.GetSysLicenseProjectSubUnitTypeDropDown(),
        stageNumber: this._licenseProjectUnitService.getStageNumber(),
        projectBuildingBlockTypeList: this._licenseProjectUnitService.GetLicenseProjectBuildingBlockType(),
        projectDeedsDDLList: this._licenseProjectUnitService.GetDeedsDDLByCorrectionRequestHeaderId(this.correctionRequestHeaderId ?? ''), //'3902BC52-DCAA-456D-B9DF-719727905724'
      }).subscribe({
        next: (res) => {
          this.UnitType = res.UnitType;
          this.subUnitType = res.subUnitType;
          this.stageNumber = res.stageNumber;
          this.projectBuildingBlockTypeList = res.projectBuildingBlockTypeList;
          this.projectDeedsDDLList = res.projectDeedsDDLList;
        },
        error: (err) => {
          this._toastrService.error(this.localization.errorMsg);
        },
        complete: () => {
          this.getSelectedProjectUnit();
        },
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.submit();
      })
    );
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  private submit(): void {
    if (this.correctionRequestHeaderId) {
      this.controls.correctedUnitRequestHeaderId.setValue(this.correctionRequestHeaderId as string);
    }
    this.selectedProjectUnit = this.addEditUnitForm.value as unknown as ProjectUnit;

    if (this.addEditUnitForm?.invalid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(
        this.localization.PleaseAddAllRequiredFields
      );
      this.addEditUnitForm?.markAllAsTouched();
      return;
    }
debugger;
    if ((this.selectedProjectUnit as any).constructionEndOn) {
      const endDate = new Date((this.selectedProjectUnit as any).constructionEndOn);
      endDate.setHours(12, 0, 0, 0);
      (this.selectedProjectUnit as any).constructionEndOn = endDate.toISOString();
    }

    this._licenseProjectUnitService
      .Save(this.selectedProjectUnit as ProjectUnit)
      .subscribe({
        next: (res: Zone[] | null) => {
          if (res && res.length > 0) {
            this.updateProjectZones(res);
            this.closeDialog();
          }
        },
        error: (err) => {
          console.log(err);
        },
      })
  }

  private updateProjectZones(zones: Zone[]) {
    this._zonesBlocksBuildingAndUnitsService.updateProjectZones(zones);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  isBlockDisabled(type: DropDownNameDto): boolean {
   // console.log('type.name:', type.name, 'natureTypeId:', this.licenseProjectNatureType.natureTypeId);
    return (
      type.name === 'عمارة' &&
      this.licenseProjectNatureType.natureTypeId === LicenseProjectNatureTypeEnum.Lands
    );
  }

}

export const dateValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const start = control.get('constructionStartOn')?.value;
  const end = control.get('constructionEndOn')?.value;

  if (!start || !end) {
    return null;
  }

  const startDate = new Date(start);
  const endDate = new Date(end);

  return startDate <= endDate ? null : { dateInvalid: true };
};
