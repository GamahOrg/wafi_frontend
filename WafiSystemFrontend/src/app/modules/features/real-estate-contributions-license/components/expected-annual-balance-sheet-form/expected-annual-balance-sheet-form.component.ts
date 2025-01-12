import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectAnnualBalanceSheetDto } from '../../models/feasibilityStudyDtos/license-project-annual-balance-sheet-dto';
import { LicenseProjectAnnualBalanceSheetCreateUpdateDto } from '../../models/feasibilityStudyDtos/license-project-annual-balance-sheet-create-update-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { SysYearCreateUpdateDto } from '../../models/feasibilityStudyDtos/sys-year-create-update-dto';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { SysYearService } from '../../services/feasibilityStudyServices/sys-year.service';
import { ExpectedAnnualBalanceSheetService } from '../../services/feasibilityStudyServices/expected-annual-balance-sheet.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrService } from 'ngx-toastr';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-expected-annual-balance-sheet-form',
  templateUrl: './expected-annual-balance-sheet-form.component.html',
  styleUrls: ['./expected-annual-balance-sheet-form.component.scss']
})
export class ExpectedAnnualBalanceSheetFormComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectAnnualBalanceSheetCreateUpdateDto: LicenseProjectAnnualBalanceSheetCreateUpdateDto = new LicenseProjectAnnualBalanceSheetCreateUpdateDto();
  licenseProjectAnnualBalanceSheetForm = this._formBuilder.group({
    id:[''],
    licenseProjectFeasibilityStudyId:[''],
    yearId: ['', [Validators.required]],
    findings:this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    currentAssets:this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    cashAndCashEquivalents:this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    nonCurrentAssets:this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    netCurrentAssets:this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    preOperatingExpenses:this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    employeeEndOfServiceAllowance:this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    leaveAllowanceForEmployees:this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    emergencyAllowance:this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    projectPropertyRights:this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    capital:this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    profitsLossesMade:this._formBuilder.control<number | null>(null, [Validators.required,Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
  })
  sysYears: SysYearCreateUpdateDto[] = [];
  showValidation:boolean=false;
    /**
   *
   */
    constructor( private _formBuilder: FormBuilder,
      private _expectedAnnualBalanceSheetService: ExpectedAnnualBalanceSheetService,
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
      this.getProjectAnnualBalanceSheetObj();
      this.observePopupEvents();
    }
    getProjectAnnualBalanceSheetObj(): void {
      this.subscriptions.push(
        this._expectedAnnualBalanceSheetService.getProjectAnnualBalanceSheetObj().subscribe((exp:any) => {
            if (exp && exp.licenseProjectFeasibilityStudyId)
            {
              this.licenseProjectAnnualBalanceSheetCreateUpdateDto= exp as LicenseProjectAnnualBalanceSheetDto;
              this.licenseProjectAnnualBalanceSheetForm.patchValue(this.licenseProjectAnnualBalanceSheetCreateUpdateDto);
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
      if(!this.licenseProjectAnnualBalanceSheetForm.valid)
    {
      this.toastr.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.showValidation=true;
      return;
    } 

      if(this.controls.licenseProjectFeasibilityStudyId.value)
      {
        this.licenseProjectAnnualBalanceSheetCreateUpdateDto=this.licenseProjectAnnualBalanceSheetForm.value as LicenseProjectAnnualBalanceSheetCreateUpdateDto;
        this.licenseProjectAnnualBalanceSheetCreateUpdateDto.id = this.licenseProjectAnnualBalanceSheetCreateUpdateDto.id ? this.licenseProjectAnnualBalanceSheetCreateUpdateDto.id : "00000000-0000-0000-0000-000000000000";
        this.subscriptions.push(
          this._expectedAnnualBalanceSheetService.Save(this.licenseProjectAnnualBalanceSheetCreateUpdateDto).subscribe(res => {
            if (res) {
              
              this._expectedAnnualBalanceSheetService.setAnnualBalanceSheetList(res);
              this.closeDialog();
            }
          })
        )
      }
      else
      {
        this.toastr.showInfo(" لم يتم الحفظ  يجب استكمال البيانات السابقة ");

      }
     
    }
    get controls() {
      return this.licenseProjectAnnualBalanceSheetForm.controls;
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

