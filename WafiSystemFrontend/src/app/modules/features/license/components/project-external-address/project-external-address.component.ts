import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectExternalAddressDto } from '../../dataModels/project-external-address.model';
import { FormBuilder, Validators } from '@angular/forms';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ProjectExternalAddressService } from '../../services/licenseProjects/project-external-address.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-project-external-address',
  templateUrl: './project-external-address.component.html',
  styleUrls: ['./project-external-address.component.scss']
})
export class ProjectExternalAddressComponent implements OnInit, OnDestroy {

  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;
  latitude: number = 0;
  longitude: number = 0;
  projectExternalAddress: LicenseProjectExternalAddressDto = new LicenseProjectExternalAddressDto();
  constructor(private _formBuilder: FormBuilder,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _toastrService: ToastrService,
    private _projectExternalAddressService: ProjectExternalAddressService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _toastrNotificationService: ToastrNotificatioService,) {
  }


  projectExternalAddressForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    licenseProjectId: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    address: ['', [Validators.required]],
    longitude: ['', [Validators.required]],
    latitude: ['', [Validators.required]],
  })

  get controls() {
    return this.projectExternalAddressForm.controls;
  }

  ngOnInit(): void {
    this.setDefaultLocation();
    this.getLicenseProjectIdStorage();
    this.observeForm();
    this.loadComponentData();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }

  localization = {
    title: 'عنوان المشروع',
    address: 'العنوان',
    location: 'الموقع على الخارطة',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
  };

  private loadComponentData() {
    this.subscriptions.push(this._projectExternalAddressService.GetProjectExternalAddressByLicenseProjectId(this.licenseProjectId as string)
      .subscribe(data => {
        if (data != null) {
          this.setResponseToForm(data as LicenseProjectExternalAddressDto);
        }
      }));
  }

  setDefaultLocation() {
    this.latitude = 24.750328230794903;
    this.longitude = 46.706400585314306;
  }

  setResponseToForm(res: LicenseProjectExternalAddressDto): void {
    console.log('setResponseToForm');
    console.log(res);

    this.projectExternalAddressForm.patchValue({ ...res });
    this.projectExternalAddress = res;
    this.latitude = this.projectExternalAddress?.latitude ? Number(this.projectExternalAddress.latitude) : 24.750328230794903;
    this.longitude = this.projectExternalAddress?.longitude ? Number(this.projectExternalAddress.longitude) : 46.706400585314306;
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }

  observeForm(): void {
    this.subscriptions.push(
      this.projectExternalAddressForm.valueChanges.subscribe(changes => {
        this.projectExternalAddress = this.projectExternalAddressForm.value as LicenseProjectExternalAddressDto;
      })
    )
  }

  setLocationOnMapChanges(event: any) {
    this.controls.longitude.setValue(event.lng.toString());
    this.controls.latitude.setValue(event.lat.toString());
  }

  save(moveToNextTab: boolean = false): void {
    this.projectExternalAddress.licenseProjectId = this.licenseProjectId as string;
    if (!this.projectExternalAddress.id) this.projectExternalAddress.id = '00000000-0000-0000-0000-000000000000';
    if (!this.projectExternalAddressForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
      this.projectExternalAddressForm?.markAllAsTouched();
      return;
    }
    this.subscriptions.push(
      this._projectExternalAddressService.Save(this.projectExternalAddress).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)
          this.setResponseToForm(res.data as LicenseProjectExternalAddressDto);
          if (moveToNextTab) this.moveToNextTab()
        }
        else
          this._toastrService.error(res.message);
      })
    )
  }

  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.save(true)
      })
    )
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe((res: null) => {
        this.save()
      })
    )
  }
  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked()
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true)
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
