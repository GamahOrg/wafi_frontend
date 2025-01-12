import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin, take, takeLast } from 'rxjs';
import { ProjectUnitCodeDto } from '../../dataModels/project-unit-code.dto';
import { ProjectUnitCodeService } from '../../services/project-unit-code.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { DatePipe } from '@angular/common';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ProjectModelService } from '../../services/project-model.service';
import { LicenseProjectModelDto } from '../../dataModels/license-project-model.dto';
import { LicenseProjectUnitService } from '../../services/license-project-unit/license-project-unit.service';
import { ProjectUnit } from '../../models/project-units';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-unit-codes-form',
  templateUrl: './unit-codes-form.component.html',
  styleUrls: ['./unit-codes-form.component.scss']
})

export class UnitCodesFormComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  code: ProjectUnitCodeDto = new ProjectUnitCodeDto();
  showValidation: boolean = false;
  types: LicenseProjectModelDto[] = [];
  models: LicenseProjectModelDto[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  unitId: string = "";
  unitTypeId: string = "";
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
  })

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
  }

  getModelsByUnitId(unitId: string) {
    if (unitId)
      this.models = this.types.filter(x => x.licenseProjectSubUnit?.licenseProjectUnitId == unitId);
  }

  private loadComponentData() {
    const requests = [
      this._projectModelService.GetDropDown(this.licenseProjectId as string),
      this._licenseProjectUnitService.selectedProjectUnitId.asObservable().pipe(take(1)),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.types = (results[0] as CoreResponseDTO<LicenseProjectModelDto[]>).data as LicenseProjectModelDto[];
        this.unitId = results[1] as any;
        if (this.unitId) {
          this.getModelsByUnitId(this.unitId as string);
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
  };

  setResponseToForm(res: ProjectUnitCodeDto): void {
    if (res && res.deliveryOn) {
      res.deliveryOn = new Date(res.deliveryOn) as any;
    }
    res.unitTypeId = this.unitTypeId
    this.codeForm.patchValue({ ...res });
    this._changeDetectorRef.detectChanges()
    this.code = res;
  }

  observeForm(): void {
    this.subscriptions.push(
      this.codeForm.valueChanges.subscribe(changes => {

        this.code = this.codeForm.value as ProjectUnitCodeDto;
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
    this.subscriptions.push(
      this._codeService.Save(this.code).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)
          this._licenseProjectUnitService.setProjectUnits(res.data as ProjectUnit[]);
          if (res && res.data && res.data.length > 0) {
            this._codeService.SetSubjectListObjs(res.data[0].licenseProjectSubUnitsListCodes as ProjectUnitCodeDto[])
          }
          // res.data.licenseProjectSubUnitsListCodes
          this._popupService.dismissDialog();
        }
        else
        this._toastrNotificationService.showError(res.message);
      })
    )
  }

  ProjectModelChange(event: string) { }

}

