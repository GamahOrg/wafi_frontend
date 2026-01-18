import { ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, forkJoin, take, takeLast } from 'rxjs';

import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { DatePipe } from '@angular/common';
import { PopupData } from 'src/app/shared/models/popup.model';

import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseRequestUnitFacilitiesDto } from '../../../../dataModels/license-facilities-dto';
import { LicenseProjectModelDto } from '../../../../dataModels/license-project-model.dto';
import { ProjectUnitCodeDto } from '../../../../dataModels/project-unit-code.dto';
import { LicenseProjectNatureTypeEnum } from '../../../../enums/unit-status.enum';
import { LicenseProjectNatureTypeDto, ProjectUnit } from '../../../../models/project-units';
import { LicenseProjectUnitService } from '../../../../services/license-project-unit/license-project-unit.service';
import { ProjectModelService } from '../../../../services/project-model.service';
import { ProjectUnitCodeService } from '../../../../services/project-unit-code.service';
import { SharedLicenseProjectService } from '../../../../services/sharedLicenseProject/shared-license-project.service';


@Component({
  selector: 'app-correction-unit-codes-form',
  templateUrl: './correction-unit-codes-form.component.html',
  styleUrls: ['./correction-unit-codes-form.component.scss']
})

export class CorrectionUnitCodesFormComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  code: ProjectUnitCodeDto = new ProjectUnitCodeDto();
  showValidation: boolean = false;
  types: LicenseProjectModelDto[] = [];
  models: LicenseProjectModelDto[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  unitId: string = "";
  unitTypeId: string = "";
  facilitiesListLookup: LicenseRequestUnitFacilitiesLookup[] = [];
  facilitiesList: LicenseRequestUnitFacilitiesDto[] = [];
  // Multiselect dropdown state
  isFacilitiesDropdownOpen: boolean = false;
  LicenseProjectNatureTypeEnum = LicenseProjectNatureTypeEnum;
  hideUnitsProperties: boolean = false;
  natureTypeId!: string | null;
  @ViewChild('multiSelectRoot') multiSelectRoot!: ElementRef;

  licenseProjectNatureType: LicenseProjectNatureTypeDto = {
    natureTypeId: 0,
    natureTypeName: '',
    projectId: ''
  };
  constructor(private _codeService: ProjectUnitCodeService,
    private _projectModelService: ProjectModelService,
    private _licenseProjectUnitService: LicenseProjectUnitService,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private datePipe: DatePipe,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _changeDetectorRef: ChangeDetectorRef,) {
  }

  showfloorNumber: boolean = false;

  codeForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    projectModelId: ['', [Validators.required]],
    unitTypeId: ['', [Validators.required]],
    unitId: ['', [Validators.required]],
    code: ['', [Validators.required]],
    licenseProjectId: ['', [Validators.required]],
    deliveryOn: ['', [Validators.required]],
    price: this._formBuilder.control<number | null>(null, [Validators.required, Validators.min(0)]),
    floorNumber: [0, [Validators.required, Validators.min(0)]],
    space: [0, [Validators.required, Validators.min(0)]],
    buildingFlatSpace: [0, [Validators.required, Validators.min(0)]],
    unitLandShare: [0, [Validators.required, Validators.min(0)]],
    unitShareOfCommonAreas: [0, [Validators.required, Validators.min(0)]],
    unitFacilities: [''],
    courtyardArea: this._formBuilder.control<number | null>(null, [Validators.min(0)]),
    unitFacilitiesIds: this._formBuilder.control<number[]>([], Validators.required),
   // supportedPrice: [0, [Validators.required, Validators.min(0)]],


  })
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.multiSelectRoot?.nativeElement.contains(event.target)) {
      this.isFacilitiesDropdownOpen = false;
    }
  }

  get controls() {
    return this.codeForm.controls;
  }

  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.getSelectedProjectUnitTypeId();
    this.loadComponentData();
    this.observeForm();
    this.getSubjectObj()
    this.observePopupEvents();
    this.getModelsByUnitId(this.unitId);
    this.getProjectNatureType();
    //this.getLicenseProjectNatureTypeIdStorage();
  }

  getSubjectObj(): void {
    this._codeService.getSubjectObj().subscribe((subjectObj) => {
      this.code = subjectObj;

      if (this.code.subUnitTypeId == 2)
        this.showfloorNumber = true;
      else
        this.showfloorNumber = false;
      this.setResponseToForm(this.code);
    })
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    // Format numbers with commas after loading data
    setTimeout(() => this.formatAllNumberInputs(), 0);
  }
  private getLicenseProjectNatureTypeIdStorage(): void {
    this.natureTypeId = this._sharedLicenseProjectService.getLicenseProjectNatureTypeId() ?? null;
    //console.log("this.natureTypeId=", this.natureTypeId);
    if (this.natureTypeId) {
      this.applyNatureTypeLogic();

    }
  }

  getModelsByUnitId(unitId: string) {
   // console.log("getModelsByUnitId unitId=,", unitId);
    if (unitId)
      this.models = this.types.filter(x => x.licenseProjectSubUnit?.id == unitId);
  }

  private loadComponentData() {
    const requests = [
      this._projectModelService.GetDropDown(this.licenseProjectId as string),
      this._licenseProjectUnitService.selectedProjectUnitId.asObservable().pipe(take(1)),
      this._projectModelService.GetLicenseRequestUnitFacilitiesList(),

    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.types = (results[0] as CoreResponseDTO<LicenseProjectModelDto[]>).data as LicenseProjectModelDto[];
        //console.log("this.types=", this.types);
        this.unitId = results[1] as any;
        if (this.unitId) {
          this.getModelsByUnitId(this.unitId as string);
        }

        this.facilitiesList = results[2] as LicenseRequestUnitFacilitiesDto[] ;

        this.facilitiesListLookup = this.facilitiesList.map(facility => ({
          id: facility.id,
          name: facility.name,
          selected: false
        }));
        this.facilitiesListLookup = [
          // { id: 0, name: 'لا يوجد', selected: false },
          ...this.facilitiesListLookup
        ];
        // AFTER facilitiesListLookup is ready, set selected from code
        if (this.code && this.code.unitFacilitiesIds && this.code.unitFacilitiesIds.length > 0) {
          this.facilitiesListLookup.forEach(f => {
            f.selected = this.code.unitFacilitiesIds.includes(f.id);
          });
          this.controls['unitFacilitiesIds'].setValue(this.code.unitFacilitiesIds);
        }
        else if (this.code && this.code.id) {
          // EDIT case: no facilities returned → select "لا يوجد" (id = 0) by default
          this.facilitiesListLookup.forEach(f => {
            f.selected = f.id === 0;
          });
          this.controls['unitFacilitiesIds'].setValue([0]);
        }
      

       
      }
    });
    this.subscriptions.push(subscriptions);
  }

  localization = {
    title: 'كود الوحدة',
    addingNewCode: "ٌإضافة كود للوحدة ",
    UnitNumber: "وحده رقم ",
    code: 'كود الوحدة',
    deliveryOn: 'تاريخ التسليم',
    price: 'سعر التعاقد',
    floorNumber: 'الطابق',
    actions: 'الإجراءات',
    requiredErrorMsg: 'حقل مطلوب',
    save: 'حفظ البيانات',
    projectModelId: 'نوع النموذج',
    savedSuccessfully: 'تم الحفظ',
    dateValidator: 'يجب ان يكون تاريخ الرخصة اقل من تاريخ الحالي',
    MinValueError: 'قيمة الحقل يجب الا تقل عن صفر',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    space: 'المساحة الإجمالية للوحدة',
    buildingFlatSpace: 'مساحة مسطح البناء',
    unitLandShare: 'حصة الوحدة من الأرض',
    unitShareOfCommonAreas: 'حصة الوحدة من الأجزاء المشتركه',
    unitFacilities: 'مرافق الوحدة',
    selectUnitFacilities: 'اختر مرافق الوحدة',
    courtyardArea: 'مساحة الفناء',
    supportedPrice: 'السعر المدعوم',
  };

  setResponseToForm(res: ProjectUnitCodeDto): void {
    if (res && res.deliveryOn) {
      res.deliveryOn = new Date(res.deliveryOn) as any;
    }
    res.unitTypeId = this.unitTypeId
    this.codeForm.patchValue({ ...res });
    // Sync facilitiesListLookup with unitFacilitiesIds
    if (res.unitFacilitiesIds && res.unitFacilitiesIds.length > 0) {
      this.facilitiesListLookup.forEach(f => {
        f.selected = res.unitFacilitiesIds.includes(f.id);
      });
    }
    console.log("res.unitFacilitiesIds=", res.unitFacilitiesIds);
    // Ensure the form control is updated as well
    this.controls['unitFacilitiesIds'].setValue(res.unitFacilitiesIds || []);
    this._changeDetectorRef.detectChanges()
    this.code = res;
  }

  observeForm(): void {

    this.subscriptions.push(
      this.codeForm.valueChanges.subscribe(changes => {
        const rawValue = this.codeForm.getRawValue();
        this.code = this.codeForm.value as ProjectUnitCodeDto;
        this.code.unitFacilitiesIds = rawValue.unitFacilitiesIds ?? [];
        let data = this.models.find(model => model.id == this.code.projectModelId);

        if (data && data.subUnitTypeId == 2)
          this.showfloorNumber = true;
        else
          this.showfloorNumber = false;
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
      })
    )
  }

  private getSelectedProjectUnitTypeId() {
    this.subscriptions.push(
      this._licenseProjectUnitService.getSelectedProjectUnitTypeId().subscribe((res) => {
        if (res)
          this.unitTypeId = res
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    )
  }

  save(): void {
   
    if (!this.code.id) this.code.id = '00000000-0000-0000-0000-000000000000';
    this.controls.id.setValue(this.code.id);
    if (!this.codeForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
      this.codeForm?.markAllAsTouched();
      return;
    }
   
    if (this.code.unitFacilitiesIds?.includes(0)) {
      this.code.unitFacilitiesIds = [];
    }
    this._codeService.Save(this.code).subscribe(res => {
      if (res.isDone) {
        this._toastrService.success(this.localization.savedSuccessfully)
        this._licenseProjectUnitService.setProjectUnits(res.data as ProjectUnit[]);
        if (res && res.data && res.data.length > 0) {
          //console.log("res.data[0].licenseProjectSubUnitsListCodes=", res.data[0].licenseProjectSubUnitsListCodes);
          //console.log("unitid=", this.unitId);

          const filteredCodes = res.data
            .flatMap(u => u.licenseProjectSubUnitsListCodes || [])
            .filter(x => x.subUnitId === this.unitId);

         // console.log("filteredCodes=", filteredCodes);


          this._codeService.SetSubjectListObjs(
            filteredCodes as ProjectUnitCodeDto[]
          );
          //this._codeService.SetSubjectListObjs(res.data[1].licenseProjectSubUnitsListCodes.filter(x => x.subUnitId== this.unitId) as ProjectUnitCodeDto[])

        }
        // res.data.licenseProjectSubUnitsListCodes
        //this._popupService.dismissDialog();
      }
      //else
      //this._toastrNotificationService.showError(res.message);
    })
  }

  ProjectModelChange(event: string) { }

  toggleFacilitiesDropdown(): void {
    this.isFacilitiesDropdownOpen = !this.isFacilitiesDropdownOpen;
  }
  toggleFacilities(facility: LicenseRequestUnitFacilitiesLookup): void {
    facility.selected = !facility.selected;

    // If selecting "لا يوجد" (id = 0), deselect all others
    if (facility.id === 0 && facility.selected) {
      this.facilitiesListLookup.forEach(f => {
        if (f.id !== 0) f.selected = false;
      });
    }
    // If selecting any other facility, deselect "لا يوجد" (id = 0)
    else if (facility.id !== 0 && facility.selected) {
      const noFacility = this.facilitiesListLookup.find(f => f.id === 0);
      if (noFacility) noFacility.selected = false;
    }

    this.updateunitFacilitiesIds();
  }

  isFacilityDisabled(facility: LicenseRequestUnitFacilitiesLookup): boolean {
    // If "لا يوجد" (id = 0) is selected, disable all others
    const noFacilitySelected = this.facilitiesListLookup.some(f => f.id === 0 && f.selected);
    if (noFacilitySelected && facility.id !== 0) {
      return true;
    }

    // If any other facility is selected, disable "لا يوجد" (id = 0)
    const anyOtherSelected = this.facilitiesListLookup.some(f => f.id !== 0 && f.selected);
    if (anyOtherSelected && facility.id === 0) {
      return true;
    }

    return false;
  }
  updateunitFacilitiesIds(): void {
    const selectedIds = this.facilitiesListLookup
      .filter(d => d.selected)
      .map(d => d.id);
    this.controls['unitFacilitiesIds'].setValue(selectedIds);
  }

  getSelectedFacilityText(): string {
    const count = this.getSelectedFacilitiesCount();
    if (count === 0) {
      return this.localization.selectUnitFacilities;
    }
    return this.localization.selectUnitFacilities;
  }
  getSelectedFacilitiesCount(): number {
    return this.facilitiesListLookup.filter(d => d.selected).length;
  }
  getSelectedFacilities(): LicenseRequestUnitFacilitiesLookup[] {
    return this.facilitiesListLookup.filter(d => d.selected);
  }

  removeFacility(facility: LicenseRequestUnitFacilitiesLookup, event: Event): void {
    event.stopPropagation();
    facility.selected = false;
    this.updateunitFacilitiesIds();
  }
  get showCourtyardArea(): boolean {
    return this.facilitiesListLookup.some(f => f.selected && f.id === 4);
  }

  private getProjectNatureType(): void {


    this.subscriptions.push(
      this._licenseProjectUnitService
        .GetLicenseProjectNatureType(this.licenseProjectId as string)
        .subscribe((res: LicenseProjectNatureTypeDto | null) => {
          if (res) {
            this.licenseProjectNatureType.natureTypeId = res?.natureTypeId;
            this.licenseProjectNatureType.natureTypeName = res?.natureTypeName;
            this.licenseProjectNatureType.projectId = res?.projectId;

            this.applyNatureTypeLogic();
          }


        })
    );
  }
  private applyNatureTypeLogic(): void {
    const natureType = this.licenseProjectNatureType.natureTypeId;
    if (natureType === LicenseProjectNatureTypeEnum.Lands) {
      // Hide these controls
      this.hideUnitsProperties = true;
   

      // Optional: remove validators
      this.codeForm.get('buildingFlatSpace')?.clearValidators();
      this.codeForm.get('buildingFlatSpace')?.updateValueAndValidity();

      this.codeForm.get('unitLandShare')?.clearValidators();
      this.codeForm.get('unitLandShare')?.updateValueAndValidity();

      this.codeForm.get('unitShareOfCommonAreas')?.clearValidators();
      this.codeForm.get('unitShareOfCommonAreas')?.updateValueAndValidity();

      this.codeForm.get('courtyardArea')?.clearValidators();
      this.codeForm.get('courtyardArea')?.updateValueAndValidity();

      this.codeForm.get('unitFacilitiesIds')?.clearValidators();
      this.codeForm.get('unitFacilitiesIds')?.updateValueAndValidity();
    }
    else {
      // Building type → show everything

      this.hideUnitsProperties = false;
    }
  }

  // Format number with thousand separators
  formatNumberWithCommas(event: any): void {
    const input = event.target as HTMLInputElement;
    const controlName = input.getAttribute('formControlName');

    if (!controlName) return;

    // Remove all commas and non-numeric characters except decimal point
    let numericValue = input.value.replace(/,/g, '').replace(/[^\d.]/g, '');

    // Convert Arabic numbers to English
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    arabicNumbers.forEach((arabic, index) => {
      numericValue = numericValue.replace(new RegExp(arabic, 'g'), englishNumbers[index]);
    });

    // Update form control with numeric value (without commas)
    if (numericValue) {
      this.codeForm.get(controlName)?.setValue(parseFloat(numericValue), { emitEvent: false });
    } else {
      this.codeForm.get(controlName)?.setValue(null, { emitEvent: false });
    }

    // Format with commas for display
    const parts = numericValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    input.value = parts.join('.');
  }
  // Handle focus - remove commas for editing
  onNumberInputFocus(event: any): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/,/g, '');
  }

  // Handle blur - add commas for display
  onNumberInputBlur(event: any): void {
    this.formatNumberWithCommas(event);
  }
  // Format all number inputs with commas
  formatAllNumberInputs(): void {
    const numberFields = [
      'price',
     // 'supportedPrice',
    ];

    numberFields.forEach(fieldName => {
      const value = this.codeForm.get(fieldName)?.value;
      if (value) {
        const input = document.getElementById(`control-${fieldName}`) as HTMLInputElement;
        if (input) {
          const parts = value.toString().split('.');
          parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          input.value = parts.join('.');
        }
      }
    });
  }
}

interface LicenseRequestUnitFacilitiesLookup {
  id: number;
  name: string;
  selected?: boolean;
}

