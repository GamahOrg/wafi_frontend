import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectExpectedIncomeCreateUpdateDto } from '../../models/feasibilityStudyDtos/license-project-expected-income-create-update-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { LicenseProjectExpectedIncomeService } from '../../services/feasibilityStudyServices/license-project-expected-income.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SysYearCreateUpdateDto } from '../../models/feasibilityStudyDtos/sys-year-create-update-dto';
import { SysYearService } from '../../services/feasibilityStudyServices/sys-year.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrService } from 'ngx-toastr';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-license-project-expected-income-form-component',
  templateUrl: './license-project-expected-income-form-component.component.html',
  styleUrls: ['./license-project-expected-income-form-component.component.scss']
})
export class LicenseProjectExpectedIncomeFormComponentComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectExpectedIncomeCreateUpdateDto: LicenseProjectExpectedIncomeCreateUpdateDto = new LicenseProjectExpectedIncomeCreateUpdateDto();
  licenseProjectExpectedIncomeForm = this._formBuilder.group({
    id:[''],
    licenseProjectFeasibilityStudyId:[''],
    yearId: ['', [Validators.required]],
    totalRevenue:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    landCost:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    costs:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    advancePayments:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    infrastructureWorks:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    externalStructureWorks:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    finishes:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    foundationFixturesAndEquipment:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    connectionFeesDefectRemovalAndLinkingServices:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    deliveryCharges:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    newOtherClause: this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    descriptionOfNewClause:['' ,[Validators.required]],
    feesForDefectsInConstruction:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    designFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    supervisionFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    administrativeAndGeneralFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    rentalFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    energyFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    communicationFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    auditFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    bankCommission:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    governmentalFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    technicalPrograms:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    insuranceFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    variousFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    employmentFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    stationeryAndPublications:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    travelAndTransportationFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    deviceConsumption:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    amortizationOfPreOperatingFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    salariesAndWages:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    marketingAndCoverageAndAdvertisingFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    otherFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    emergencyAllowance:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    zakatFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    taxFees:  this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
  })
  sysYears: SysYearCreateUpdateDto[] = [];
  showValidation:boolean=false;
  /**
   *
   */
  constructor( private _formBuilder: FormBuilder,
    private licenseProjectExpectedIncomeService: LicenseProjectExpectedIncomeService,
    private _popupService: PopupService,
    private _sysYearService:SysYearService,
    private toastr:ToastrNotificatioService ,
    ) {

    
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  ngOnInit(): void {
    this.getAllsysYears();
    this.getProjectExpectedIncomeObj();
    this.observePopupEvents();
  }
  getProjectExpectedIncomeObj(): void {
    
    this.subscriptions.push(
      this.licenseProjectExpectedIncomeService.getProjectExpectedIncomeObj().subscribe((exp:any) => {
          
        if (exp && exp.licenseProjectFeasibilityStudyId)
        {
          this.licenseProjectExpectedIncomeCreateUpdateDto= exp as LicenseProjectExpectedIncomeCreateUpdateDto;
          this.licenseProjectExpectedIncomeForm.patchValue(this.licenseProjectExpectedIncomeCreateUpdateDto);
        }
          
      })
    )
  }
  getAllsysYears(): void {
    
    this.subscriptions.push(
      this._sysYearService.GetAll().subscribe((years) => {
      
          this.sysYears= years ;
        
         
      })
    )
  }
  save(): void {
    if(!this.licenseProjectExpectedIncomeForm.valid)
    {
      this.toastr.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.showValidation=true;
      return;
    } 
    if(this.controls.licenseProjectFeasibilityStudyId.value)
    {
    this.licenseProjectExpectedIncomeCreateUpdateDto=this.licenseProjectExpectedIncomeForm.value as LicenseProjectExpectedIncomeCreateUpdateDto;
    this.licenseProjectExpectedIncomeCreateUpdateDto.id = this.licenseProjectExpectedIncomeCreateUpdateDto.id ? this.licenseProjectExpectedIncomeCreateUpdateDto.id : "00000000-0000-0000-0000-000000000000";
    this.subscriptions.push(
      this.licenseProjectExpectedIncomeService.Save(this.licenseProjectExpectedIncomeCreateUpdateDto).subscribe(res => {
        if (res) {
          this.licenseProjectExpectedIncomeService.setExpectedIncomeList(res);
          this.closeDialog();
        }
      })
    )
  }
  else
  {
    this.toastr.showInfo(" لم يتم الحفظ يجب أن يتم ادخال دراسة جدوى اولا ثم يتم ادخال باقي البيانات ");

  }
}
  get controls() {
    return this.licenseProjectExpectedIncomeForm.controls;
  }
  private closeDialog(): void {
    this._popupService.dismissDialog()
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
}
