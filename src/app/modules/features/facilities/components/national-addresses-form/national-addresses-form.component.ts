import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { areaResponseBE } from '../../dataModels/area.model';
import { cityResponseBE } from '../../dataModels/city.model';
import { nationalAddressDto, nationalAddressResponseFE } from '../../dataModels/national-address.model';
import { NationalAddressService } from '../../services/facilityProfile/national-address-service/national-address.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-national-addresses-form',
  templateUrl: './national-addresses-form.component.html',
  styleUrls: ['./national-addresses-form.component.scss']
})
export class NationalAddressesFormComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  nationalAddressDto: nationalAddressDto = new nationalAddressDto();
  brokerRentDocumentType: boolean = false;
  areasDropDownList: areaResponseBE[] = [];
  citiesDropDownList: cityResponseBE[] = [];
  allCitiesDropDownList: cityResponseBE[] = [];
  userData: customerResponse | null = null;
  showValidation: boolean = false;

  selectedArea: areaResponseBE = {
    id: '',
    areaName: ''
  } as areaResponseBE;
  brokerDocumentTypeId: number = 0;
  nationalAddressesForm = this._formBuilder.group({
    id: [''],
    buildingNumber: [''],
    streetName: [''],
    neighborhoodName:new FormControl('',[Validators.required]),

    postalCode: [''],
    unitNumber: [''],
    additionalNumber: [''],
    facilityId: [''],
    citiesId: new FormControl('',[Validators.required]),
    areasId:new FormControl('',[Validators.required]),
    documentNumber: [''],
    brokerDocumentTypeId: [0],
  })

  get controls() {
    return this.nationalAddressesForm.controls;
  }

  GetAreasDropDown() {
    this.subscriptions.push(
      this._nationalAddressService.GetAreasDropDown().subscribe(res => {
        if (res) {
          this.areasDropDownList = res as areaResponseBE[];
        }
      })
    )
  }

  GetCitiesDropDown() {
    this.subscriptions.push(
      this._nationalAddressService.GetCitiessDropDown().subscribe(res => {
        if (res) {
          this.citiesDropDownList = res;
          this.allCitiesDropDownList = res;
        }
      })
    )
  }

  selectCity(cityId: string) {
    this.nationalAddressDto.citiesId = cityId;
  }

  selectArea(areaId: string) {
    this.nationalAddressDto.areasId = areaId;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _nationalAddressService: NationalAddressService,
    private _userDataService: UserDataService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,) { }

  ngOnInit(): void {
    // this.ForkJoinRequests();
    this.obseveCustomerData();
    this.observeObj();
    this.GetAreasDropDown();
    this.GetCitiesDropDown();
    this.observeAreaControl()
    this.observePopupEvents()
  }

  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
        this.save()
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        // if(this.userData){
        //   this.GetFacilityById();
        // }
      })
    )
  }

  observeAreaControl() {
    this.subscriptions.push(
      this.controls.areasId.valueChanges.subscribe(res => {
        console.log("this.controls.areasId.valueChange", res);
        if (res) {
          this.filterCity(res as string);
        }
      })
    )
  }

  filterCity(areaId: string): void {
    this.nationalAddressDto.citiesId = ''
    this.selectedArea = this.areasDropDownList.find(area => area.id == areaId) as areaResponseBE;
    if (this.selectedArea.id) {
      this.citiesDropDownList = this.allCitiesDropDownList.filter(city => city.areasId == this.selectedArea.id)
    }
  }

  observeObj(): void {
    this.subscriptions.push(
      this._nationalAddressService.getSubjectObj().subscribe((obj) => {
        if (obj && obj.Id) this.getById(obj.Id);
      })
    )
  }

  getById(id: string) {
    this.subscriptions.push(
      this._nationalAddressService.GetById(id).subscribe((res) => {
        if (res) {
          this.nationalAddressDto = res;
          this.nationalAddressesForm.patchValue(this.nationalAddressDto as any);
        }
      })
    )
  }

  save(): void {
    if (this.nationalAddressesForm?.invalid) {
      this.showValidation = true;
      this._toastrNotificationService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.nationalAddressesForm?.markAllAsTouched();
      return;
    }
    const { id, facilityId, brokerDocumentTypeId, ...fields } = this.nationalAddressesForm.value;
    const hasAtLeastOneField = Object.values(fields).some(v => v && v.toString().trim() !== '');
    if (!hasAtLeastOneField) {
      this._toastrNotificationService.showError('يرجى إدخال بيانات في حقل واحد على الأقل');
      return;
    }
    this.nationalAddressDto = this.nationalAddressesForm.value as nationalAddressDto;
    this.nationalAddressDto.id = this.nationalAddressDto.id ? this.nationalAddressDto.id : "00000000-0000-0000-0000-000000000000";
    this.nationalAddressDto.facilityId = this.userData?.facilities[0].id as string;
    if (!this.nationalAddressDto.citiesId) this.nationalAddressDto.citiesId = null as any;
    if (!this.nationalAddressDto.areasId) this.nationalAddressDto.areasId = null as any;
    this.subscriptions.push(
      this._nationalAddressService.Save(this.nationalAddressDto).subscribe(res => {
        if (res) {
          if (res.isDone && res.data) {
            let response = new nationalAddressResponseFE(res.data);
            this._nationalAddressService.SetSubjectObj(response);
            this.closeDialog();
          }
        }
        // else
        //   alert(res.message);
      })
    )
  }

  // ForkJoinRequests(): void {
  //   const example = forkJoin({
  //     sourceGetFacility: this._nationalAddressService.getSubjectObj(),
  //     sourceAreasDropDown: this._nationalAddressService.GetAreasDropDown(),
  //     sourceCitiesDropDown: this._nationalAddressService.GetCitiessDropDown(),
  //   }).subscribe(res=>{
  //     console.log("res", res);

  //   });
  //   this.subscriptions.push(
  //     example
  //     )
  // }



  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
