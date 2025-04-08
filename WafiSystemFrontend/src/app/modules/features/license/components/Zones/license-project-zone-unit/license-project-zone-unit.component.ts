import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ProjectUnit } from '../../../models/project-units';
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
import type { PopupResult } from '../../../models/popup-result.model';

@Component({
  selector: 'app-license-project-zone-unit',
  templateUrl: './license-project-zone-unit.component.html',
  styleUrls: ['./license-project-zone-unit.component.scss']
})
export class LicenseProjectZoneUnitComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  selectedProjectZone: string | null = '00000000-0000-0000-0000-000000000000';
  selectedProjectUnit: ProjectUnit | null = null;
  UnitType: DropDownNameDto[] | null = null;
  subUnitType: DropDownSubUnitTypeDto[] | null = null;
  stageNumber: DropDownNameDto[] | null = null;
  licenseProjectSubUnitsArray: ProjectSubUnitDto[] = [] as ProjectSubUnitDto[];
  showValidation: boolean = false;
  showValidationSubUnitsForm: boolean = false;

  addEditUnitForm = this._formBuilder.group(
    {
      id: ['00000000-0000-0000-0000-000000000000', Validators.required],
      zoneId: ['', Validators.required],
      unitTypeId: ['', Validators.required],
      // unitTypeName: [''],
      code: ['', Validators.required],
      stageNumberId: ['', Validators.required],
      // stageNumber: ['', Validators.required],
      constructionStartOn: ['', Validators.required],
      constructionEndOn: ['', Validators.required],
      licenseProjectsId: [
        '00000000-0000-0000-0000-000000000000',
        Validators.required,
      ],
      licenseProjectSubUnits: this._formBuilder.array(
        [] as ProjectSubUnitDto[]
      ),
    },
    { validators: dateValidator }
  );

  // licenseProjectSubUnitsForm = this._formBuilder.group({
  //   id: '00000000-0000-0000-0000-000000000000',
  //   licenseProjectUnitId: [
  //     '00000000-0000-0000-0000-000000000000',
  //     Validators.required,
  //   ],
  //   subUnitTypeId: 0,
  //   subUnitCount: this._formBuilder.control<number | null>(0, [
  //     Validators.required,
  //     Validators.min(0),
  //   ]),
  // });

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
    errorMsg: 'لا يمكن اضافة او تعديل بلوكات او عماير الآن',
    UnitType: 'إضافة بلوك / عمارة ',
    unitCode: 'رقم البلوك / رقم العمارة',
    stageNo: 'رقم المرحلة',
    constructionStartOn: 'تاريخ بداية الإنشاء',
    constructionEndOn: 'تاريخ نهاية الانشاء',
    chooseUnitTitle: 'تحديد نوع الوحدات داخل البلوك',
    addingNewUnit: 'حفظ و إضافة نوع وحدة جديد ',
    chooseUnitTitleHint: '( يمكنك اختيار اختر من نوع من الوحدات داخل البلوك )',
    dateValidator: 'يجب ان يكون تاريخ البدايه اقل من تاريخ النهايه',
    subUnitsType: 'اضاقة أنواع الوحدات بالبلوك / العمارة ',
    subUnitCount: 'عدد وحدات الخاص بالبلوك او العمارة  ',
    actions: 'إجراءات',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
  };

  constructor(
    private _licenseProjectUnitService: LicenseProjectUnitService,
    private _zonesBlocksBuildingAndUnitsService: ZonesBlocksBuildingAndUnitsService,
    private _projectModelService: ProjectModelService,
    private _formBuilder: FormBuilder,
    private _popupService: PopupService,
    private _toastrService: ToastrService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.getSelectedProjectZone();
    this.observeAddEditUnitForm();
    this.getLookups();
    this.observePopupEvents();
  }

  private observeAddEditUnitForm() {
    this.subscriptions.push(
      this.addEditUnitForm.valueChanges.subscribe((changes) => {
        console.log('changes', changes);
        // console.log("addEditUnitForm", this.addEditUnitForm);
        // this.controls.licenseProjectsId.setValue(this.licenseProjectId)
      })
    );
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
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
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
            this.addEditUnitForm.patchValue(this.selectedProjectUnit as any);
            this.controls.licenseProjectsId.setValue(this.licenseProjectId);
            console.log('this.selectedProjectUnit', this.selectedProjectUnit);
            if (this.selectedProjectUnit.licenseProjectSubUnits.length > 0) {
              this.licenseProjectSubUnitsArray =
                this.selectedProjectUnit.licenseProjectSubUnits;
              this.selectedProjectUnit.licenseProjectSubUnits.forEach(
                (subUnit) => {
                  let subUnitFG = this._formBuilder.group({
                    id: subUnit.id,
                    licenseProjectUnitId: this.licenseProjectId,
                    subUnitTypeId: subUnit.subUnitTypeId,
                    typeName: subUnit.typeName,
                    subUnitCount: subUnit.subUnitCount,
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
        subUnitType:
          this._projectModelService.GetSysLicenseProjectSubUnitTypeDropDown(),
        stageNumber: this._licenseProjectUnitService.getStageNumber(),
      }).subscribe({
        next: (res) => {
          this.UnitType = res.UnitType;
          this.subUnitType = res.subUnitType;
          this.stageNumber = res.stageNumber;
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
    if (this.licenseProjectId) {
      this.controls.licenseProjectsId.setValue(this.licenseProjectId as string);
    }
    this.selectedProjectUnit = this.addEditUnitForm
      .value as unknown as ProjectUnit;

    if (this.addEditUnitForm?.invalid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(
        this.localization.PleaseAddAllRequiredFields
      );
      this.addEditUnitForm?.markAllAsTouched();
      return;
    }

    console.log(this.selectedProjectUnit);
    

    this.subscriptions.push(
      this._licenseProjectUnitService
        .Save(this.selectedProjectUnit as ProjectUnit)
        .subscribe({
          next: (res: Zone[] | null) => {
            if (res && res.length > 0) {
              this.updateProjectZones(res);
            }
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            this.closeDialog();
          },
        })
    );
  }


  private updateProjectZones(zones: Zone[]) {
    this._zonesBlocksBuildingAndUnitsService.updateProjectZones(zones);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
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
