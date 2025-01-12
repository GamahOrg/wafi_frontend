import { ChangeDetectorRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BeneficiaryContractFormAdditionalTermsDto } from '../../models/beneficiary-contract-form-additional-terms-dto';
import { BeneficiaryContractFormAdditionalTermsService } from '../../services/beneficiary-contract-form-additional-terms.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SysLicenseBeneficiaryContractFormDto } from '../../dataModels/sys-license-beneficiary-contract-form-dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-beneficiary-contract-form-additional-terms-form',
  templateUrl: './beneficiary-contract-form-additional-terms-form.component.html',
  styleUrls: ['./beneficiary-contract-form-additional-terms-form.component.scss']
})
export class BeneficiaryContractFormAdditionalTermsFormComponent {
  subscriptions: Subscription[] = [];
  sysLicenseBeneficiaryContractFormList:SysLicenseBeneficiaryContractFormDto[]=[];
  beneficiaryContractFormAdditionalTermsDto:BeneficiaryContractFormAdditionalTermsDto= new BeneficiaryContractFormAdditionalTermsDto();
  showValidation:boolean=false;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";

  constructor(private _beneficiaryContractFormAdditionalTermsService:BeneficiaryContractFormAdditionalTermsService,
    private _formBuilder: FormBuilder,
    public _toastService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService:PopupService) { 
     }
     beneficiaryContractFormAdditionalTermsForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    licenseBeneficiaryContractFormId : ['', [Validators.required]],
    licenseProjectId : ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    itemNumber: [0, [Validators.required]],
    itemText: ['',[Validators.required]],
    additionalTermsAcknowledgment: [false,[Validators.required]],
  })
  get controls() {
    return this.beneficiaryContractFormAdditionalTermsForm.controls;
  }
  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.getList();
    this.observePopupEvents();
  }

getList(){
  this._beneficiaryContractFormAdditionalTermsService.GetList().subscribe((res) => {
   
    this.sysLicenseBeneficiaryContractFormList = res.data as SysLicenseBeneficiaryContractFormDto[];
  })
}
  localization = {
    title: 'إضافة البنود الإضافية لكل نموذج عقد المستفيد النهائي',
    itemNumber: 'رقم البند التسلسلي',
    itemText: 'نص البند',
    additionalTermsAcknowledgment: 'إقرار البنود الاضافية',
    licenseBeneficiaryContractFormId: ' نوع البند',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
  PleaseAddAllRequiredFields:
 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
  };


  ngOnDestroy(){
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

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  save(): void {
    
   

    this.controls.licenseProjectId.setValue(this.licenseProjectId);
   
    if(!this.beneficiaryContractFormAdditionalTermsDto.id) this.beneficiaryContractFormAdditionalTermsDto.id = '00000000-0000-0000-0000-000000000000';
    this.controls.id.setValue(this.beneficiaryContractFormAdditionalTermsDto.id);
    if(!this.beneficiaryContractFormAdditionalTermsForm.valid)
    {
      this._toastService.showError(this.localization.PleaseAddAllRequiredFields);
      this.showValidation=true;
      return;
    } 
    this.beneficiaryContractFormAdditionalTermsDto=this.beneficiaryContractFormAdditionalTermsForm.value as BeneficiaryContractFormAdditionalTermsDto;
    if(!this.beneficiaryContractFormAdditionalTermsDto.additionalTermsAcknowledgment)
    {
      this._toastService.showError("نأمل الموافقه على الاقرار حتي يتم تسجيل البند");
     return;
    }
    this.subscriptions.push(
    this._beneficiaryContractFormAdditionalTermsService.SaveAsync(this.beneficiaryContractFormAdditionalTermsDto).subscribe(res => {
        if (res.isDone) {
         
          this._toastService.showSuccess(this.localization.savedSuccessfully)
          this._beneficiaryContractFormAdditionalTermsService.setBeneficiaryList(res.data as BeneficiaryContractFormAdditionalTermsDto[]);
          this._popupService.dismissDialog();
        }
        else
          this._toastService.showError(res.message);
      })
    )
  }

}
