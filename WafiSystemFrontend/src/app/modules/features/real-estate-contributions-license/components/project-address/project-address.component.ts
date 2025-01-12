import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription, forkJoin } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { environment } from 'src/environments/environment';
import { ProjectAddressDto } from '../../dataModels/project-address.dto';
import { ProjectAddressService } from '../../services/licenseProjects/project-address.service';
import { NationalAddressService } from '../../../facilities/services/facilityProfile/national-address-service/national-address.service';
import { areaResponseBE } from '../../../facilities/dataModels/area.model';
import { cityResponseBE } from '../../../facilities/dataModels/city.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';

@Component({
  selector: 'app-project-address',
  templateUrl: './project-address.component.html',
  styleUrls: ['./project-address.component.scss']
})

export class ProjectAddressComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  projectAddress: ProjectAddressDto = new ProjectAddressDto();
  baseUrl = `${environment.baseURL}/`;
  areas: areaResponseBE[] = [];
  cities: cityResponseBE[] = [];
  tempCities: cityResponseBE[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;
  latitude: number = 0;
  longitude: number = 0;
  isExistingValidation:boolean=false;
  userData: customerResponse | null = null;
  constructor(
    private _projectAddressService: ProjectAddressService,
    private _formBuilder: FormBuilder,
    private _nationalAddressService: NationalAddressService,
    private _toastrService: ToastrNotificatioService ,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _userDataService: UserDataService,
  ) { }

  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;

  projectAddressForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    licenseProjectsId: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    areasId: ['', [Validators.required]],
    citiesId: ['', [Validators.required]],
    neighborhoodName: ['', [Validators.required]],
    streetName: ['', [Validators.required]],
    longitude: ['', [Validators.required]],
    latitude: ['', [Validators.required]],
  })

  get controls() {
    return this.projectAddressForm.controls;
  }
  ngOnInit() {
    this.getCustomerData();
    this.getLicenseProjectIdStorage();
    this.observeForm();
    this.loadComponentData();
    this.observeAreaControl();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }


  getCustomerData() {

    this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
      this.userData = res;    
      this.isExistingValidation=this.userData?.isEmployee as boolean;
    })
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }

  localization = {
    title: 'عنوان المشروع',
    area: 'المنطقة',
    city: 'المدينه',
    selectCity: 'اختار اسم المدينه',
    selectArea: 'اختار اسم المنطقة',
    neighborhood: 'الحي',
    street: 'الشارع',
    location: 'الموقع على الخارطه',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
    PleaseAddAllRequiredFields:
      'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
  };
  private loadComponentData() {
    const requests = [
      this._projectAddressService.GetByLicenseProjectId(this.licenseProjectId as string),
      this._nationalAddressService.GetAreasDropDown(),
      this._nationalAddressService.GetCitiessDropDown(),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        let projectAdress = results[0] as ProjectAddressDto;
        this.setResponseToForm(projectAdress);
        this.areas = results[1] as areaResponseBE[];
        this.cities = results[2] as cityResponseBE[];
        if (projectAdress && projectAdress.areasId) {
          this.filterCity(projectAdress.areasId as string);
        }
      }
    });
    this.subscriptions.push(subscriptions);
  }

  setResponseToForm(res: ProjectAddressDto): void {
    this.projectAddressForm.patchValue({ ...res });
    this.projectAddress = res;
    this.latitude = this.projectAddress?.latitude ? Number(this.projectAddress.latitude) : 24.750328230794903;
    this.longitude = this.projectAddress?.longitude ? Number(this.projectAddress.longitude) : 46.706400585314306;
  }
  observeForm(): void {
    this.subscriptions.push(
      this.projectAddressForm.valueChanges.subscribe(changes => {
        this.projectAddress = this.projectAddressForm.value as ProjectAddressDto;
      })
    )
  }

  observeAreaControl() {
    this.controls.areasId.valueChanges.subscribe(res => {
      if (res) {
        this.filterCity(res as string);
      }
    })
  }

  filterCity(areaId: string): void {

    this.projectAddress.citiesId = ''
    if (areaId) {
      this.tempCities = this.cities.filter(city => city.areasId == areaId)
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  setLocationOnMapChanges(event: any) {
    this.controls.longitude.setValue(event.lng.toString());
    this.controls.latitude.setValue(event.lat.toString());
  }
  save(moveToNextTab: boolean = false): void {
    if(!this.isExistingValidation){
    if (!this.projectAddressForm.valid) {
      this._toastrService.showError(this.localization.PleaseAddAllRequiredFields);
      this.showValidation = true;
      return;
    }
  }
  if (!this.projectAddress.id) this.projectAddress.id = '00000000-0000-0000-0000-000000000000';
    if (!this.projectAddress.citiesId || this.projectAddress.citiesId=='00000000-0000-0000-0000-000000000000') this.projectAddress.citiesId = null;
    if (!this.projectAddress.areasId || this.projectAddress.areasId == '00000000-0000-0000-0000-000000000000') this.projectAddress.areasId = null;
    
    this.projectAddress.licenseProjectsId = this.licenseProjectId as string;
    if (!this.projectAddress.id) this.projectAddress.id = '00000000-0000-0000-0000-000000000000';
  
    this.subscriptions.push(
      this._projectAddressService.Save(this.projectAddress).subscribe(res => {
        
        if (res.isDone) {
          this._toastrService.showSuccess(this.localization.savedSuccessfully)
          this.setResponseToForm(res.data as ProjectAddressDto);
          if (moveToNextTab) this.moveToNextTab()
        }
        else
          this._toastrService.showError(res.message);
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
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true)
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }

}
