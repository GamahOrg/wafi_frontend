import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { AdditionalServicesDto, SysLicenseProjectServicePeriodCreateUpdateDto } from '../../dataModels/additional-services.dto';
import { environment } from 'src/environments/environment';
import { DropDownNameDto } from '../../dataModels/drop-down-name.dto';
import { LicenseProjectAdditionalServicesService } from '../../services/licenseProjects/license-project-additional-services.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrService } from 'ngx-toastr';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-additional-service-form',
  templateUrl: './additional-service-form.component.html',
  styleUrls: ['./additional-service-form.component.scss']
})
export class AdditionalServiceFormComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  additionalServices: AdditionalServicesDto = new AdditionalServicesDto();
  baseUrl = `${environment.baseURL}/`;
  sysProjectServices: DropDownNameDto[] = [];
  sysProjectServicePeriods: SysLicenseProjectServicePeriodCreateUpdateDto[] = [];
  showValidation: boolean = false;
  currentPrice: number | null = null;
  constructor(private _projectAdditionalServicesService: LicenseProjectAdditionalServicesService,
    private _formBuilder: FormBuilder,
    private _popupService: PopupService,
    private _toastrService: ToastrService,
    private _toastrNotificationService: ToastrNotificatioService,) {
    this._projectAdditionalServicesService.getSubjectObj().subscribe((subjectObj) => {
      this.additionalServices = subjectObj;
    })
  }

  projectAdditionalServicesForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    licenseProjectsId: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    sysLicenseProjectServiceId: [null as string | null, [Validators.required]],
    period: this._formBuilder.control<number | null>(null, [Validators.required]),
  })

  get controls() {
    return this.projectAdditionalServicesForm.controls;
  }

  ngOnInit() {
    this.observeForm();
    this.loadComponentData();
    this.observePopupEvents();
  }

  localization = {
    title: 'بيانات الخدمات الاضافيه',
    sysLicenseProjectServiceId: 'الخدمه الإضافيه',
    period: 'المده',
    price: 'السعر',
    requiredErrorMsg: 'حقل مطلوب',
    save: 'حفظ البيانات',
    savedSuccessfully: 'تم الحفظ',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
  };

  private loadComponentData() {
    const requests = [
      this._projectAdditionalServicesService.GetSysLicenseProjectServiceDropDown(),
      this._projectAdditionalServicesService.GetSysLicenseProjectServicePeriodDropDown(),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.setResponseToForm(this.additionalServices);
        this.sysProjectServices = results[0] as DropDownNameDto[];

        this.sysProjectServicePeriods = results[1] as SysLicenseProjectServicePeriodCreateUpdateDto[];
        console.log("sysProjectServicePeriods", this.sysProjectServicePeriods)
      }
    });
    this.subscriptions.push(subscriptions);
  }

  setResponseToForm(res: AdditionalServicesDto): void {
    if (!res) return;
    this.projectAdditionalServicesForm.patchValue({ ...res });
  }

  observeForm(): void {
    this.subscriptions.push(
      this.projectAdditionalServicesForm.valueChanges.subscribe(changes => {
        console.log(changes);
        this.additionalServices = this.projectAdditionalServicesForm.value as AdditionalServicesDto;
        if (changes.period) {
          let exists = this.getServicePeriods().filter(x => x.period == Number(changes.period));
          if (!exists || !exists.length)
            this.controls.period.setValue(null);
          else
            this.currentPrice = exists[0]?.price;
        }
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
        this._popupService.dismissDialog();
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

  getServicePeriods() {
    if (this.sysProjectServicePeriods && this.sysProjectServicePeriods.length) {
      let periods = this.sysProjectServicePeriods.filter(x => x.licenseProjectServiceId == this.controls.sysLicenseProjectServiceId.value);
      return periods
    }
    else
      return [];
  }
  /*   changePeriod(event:any){

       if(this.controls.period.value){

        let exists = this.getServicePeriods().filter(x=>x.period == this.controls.period.value);
        if(!exists || !exists.length) this.controls.period.setValue(null);
      }
    } */
  save(): void {
    if (!this.additionalServices.id) this.additionalServices.id = '00000000-0000-0000-0000-000000000000';
    this.controls.id.setValue(this.additionalServices.id);
    if (this.projectAdditionalServicesForm?.invalid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
      this.projectAdditionalServicesForm?.markAllAsTouched();
      return;
    }
    this.subscriptions.push(
      this._projectAdditionalServicesService.Save(this.additionalServices).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)
          this._projectAdditionalServicesService.SetSubjectListObjs(res.data as AdditionalServicesDto[]);
          this._popupService.dismissDialog();
        }
        else
          this._toastrService.error(res.message);
      })
    )
  }
}
