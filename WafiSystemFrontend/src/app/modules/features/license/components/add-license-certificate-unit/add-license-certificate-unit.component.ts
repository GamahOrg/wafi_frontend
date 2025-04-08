import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseCertificateUnitDto } from '../../models/license-certificate-unit-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseCertificateTemplateService } from '../../services/license-certificate-template.service';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-add-license-certificate-unit',
  templateUrl: './add-license-certificate-unit.component.html',
  styleUrls: ['./add-license-certificate-unit.component.scss']
})
export class AddLicenseCertificateUnitComponent {
  licenseCertificateTemplateId?:number;
  subscriptions: Subscription[] = [];
  licenseCertificateUnitCreateUpdate?: LicenseCertificateUnitDto;
  licenseCertificateUnitForm = this._formBuilder.group({
    id:this._formBuilder.control<number>(0),
    zoneName: this._formBuilder.control<string | null>(null, [Validators.required]),
    unitTypeName: this._formBuilder.control<string | null>(null, [Validators.required]),
    unitCode: this._formBuilder.control<string | null>(null, [Validators.required]),
    stageName: this._formBuilder.control<string | null>(null, [Validators.required]),
    constructionStartOn: this._formBuilder.control<string | null>((new Date).toDateString(), [Validators.required]),
    constructionEndOn: this._formBuilder.control<string | null>((new Date).toDateString(), [Validators.required]),
    subUnitTypeName: this._formBuilder.control<string | null>(null, [Validators.required]),
    subUnitCount: this._formBuilder.control<number | null>(null, [Validators.required]),
    modelName: this._formBuilder.control<string | null>(null, [Validators.required]),
    space: this._formBuilder.control<number | null>(null, [Validators.required]),
    buildingFlatSpace: this._formBuilder.control<number | null>(null, [Validators.required]),
    unitsCount: this._formBuilder.control<number | null>(null, [Validators.required]),
    properties: this._formBuilder.control<string | null>(null, [Validators.required]),
    code: this._formBuilder.control<string | null>(null, [Validators.required]),
    deliveryOn: this._formBuilder.control<string | null>((new Date).toDateString(), [Validators.required]),
    price: this._formBuilder.control<number | null>(null, [Validators.required]),
    floorNumber: this._formBuilder.control<number | null>(null, [Validators.required]),

  });
  showValidation: boolean = false;
  get controls() {
    return this.licenseCertificateUnitForm.controls;
  }
 
  constructor(
    private _licenseCertificateTemplateService: LicenseCertificateTemplateService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,


  ) {this.getLicenseCertificateTemplateIdFromLocalStorage() }
  ngOnInit(): void {
    this.observePopupEvents();

  }
  private getLicenseCertificateTemplateIdFromLocalStorage(): void {
    
    let id = this._licenseCertificateTemplateService.getLicenseCertificateTemplateIdFromLocalStorage();
    this.licenseCertificateTemplateId = Number(id);
      
  }
  save(): void {
    
    if (!this.licenseCertificateUnitForm.valid) {
      this.showValidation = true;
      return;
    }

    this.licenseCertificateUnitCreateUpdate = this.licenseCertificateUnitForm.value as {} as LicenseCertificateUnitDto;
    this.licenseCertificateUnitCreateUpdate.licenseCertificateTemplateId = this.licenseCertificateTemplateId as number;
    this.subscriptions.push(
      this._licenseCertificateTemplateService.AddLicenseCertificateUnit(this.licenseCertificateUnitCreateUpdate).subscribe((res) => {

        if (res?.isDone) {
          this._licenseCertificateTemplateService.submitSuccessfullyEventEmitter.emit()
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }

      })
    )
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
