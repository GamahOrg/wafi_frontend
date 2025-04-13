import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CompletionRatesDTO } from '../../models/zonelist';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../services/license-project-engineering-supervision-planned-report-detail.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PlannedEngineerProjectDetailsService } from '../../services/planned-engineer-project-details.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-completion-rates',
  templateUrl: './completion-rates.component.html',
  styleUrls: ['./completion-rates.component.scss']
})
export class CompletionRatesComponent implements OnInit , OnDestroy{
  showRateFlag:boolean=false;
  years?:number[];
  subscriptions: Subscription[] = [];
  isUpdated : boolean = false
  licenseProjectId! : string | null
  currentYear!:number;
  unitId! : string
  ProjectZonesBlockesDetails! : CompletionRatesDTO;
  cumulativePercentage! : number;
  compelationRateForm:FormGroup = this._formBuilder.group({
    id:[],
    lastYearTotalCumulativePercentages : [],
    plannedEndDate : ['', Validators.required],
    licenseProjectEngineeringProjectZonesBlocksDetails:this._formBuilder.array([])

  })

  localization = {
    confirmSave : 'تم الحفظ بنجاح',
    required : 'هذا الحقل مطلوب',
    endDate : 'تاريخ النهاية المخططة',
    year:'السنة',
    month :'الشهر',
    monthlyPercentage : 'نسبه الانجاز المخططه الشهريه',
    accumulativePercentage : 'نسبه الانجاز المخططه التراكميه'

  }

  constructor(private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _licenseProjectEngineeringSupervisionPlannedReportDetailService: LicenseProjectEngineeringSupervisionPlannedReportDetailService,
    private _popupService: PopupService,
    private _PlannedEngineerProjectDetailsService : PlannedEngineerProjectDetailsService,
    private _formBuilder:FormBuilder,
    private _toastrNotificatioService: ToastrNotificatioService,
  ){

  }

  ngOnInit(): void {
   this.getPopUpData()
    this.getLicenseProjectIdStorage()
    this.observeconfirmAction()
    this.isUpdatedflag()
  }

  get licenseProjectEngineeringProjectZonesBlocksDetails(){
    return this.compelationRateForm.controls['licenseProjectEngineeringProjectZonesBlocksDetails'] as FormArray;
  }

  getPopUpData(){
    this.subscriptions.push(
      this._popupService.popupData.subscribe(res=>{
        console.log(' popup data', res)
        this.unitId =  res.id??''
        
      }) 
    )
  }

  isUpdatedflag(){
    this._PlannedEngineerProjectDetailsService._isUpdated$.subscribe(res=>{
      if(res){
        this.isUpdated=true

      }
    })
  }

  onMonthlyPercentageKeyUp(index:number){
    const monthlyRates = this.licenseProjectEngineeringProjectZonesBlocksDetails.value.map((element:any)=>element.monthlyPlannedCompletionPercentage)
    this.licenseProjectEngineeringProjectZonesBlocksDetails.value.forEach((_:FormGroup,i:number)=>{
      if(i>=index){
        const formGroup = this.licenseProjectEngineeringProjectZonesBlocksDetails.controls[i] as FormGroup;
         formGroup.patchValue({...formGroup.value,accumulativePercentage: this.calculateAccumalativePercentage(i,monthlyRates)});
       }
      })
  }
  
  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save()
      })
    )
  }

  save(){
    if(this.compelationRateForm.valid){
      this.showRateFlag = true
      this.subscriptions.push(
        this._PlannedEngineerProjectDetailsService.UpdateLicenseProjectEngineeringProjectZonesBlocksDetailYearly(this.compelationRateForm.value).subscribe(res=>{
          if(res.isDone)
          this._toastrNotificatioService.showSuccess(this.localization.confirmSave)

        }))
  }else{
    this.showRateFlag = false
  }
}

 

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if(this.licenseProjectId)
    {
      this.GetByLicenseProjectId();
    }
  }

   
  GetByLicenseProjectId() {
     this.subscriptions.push(
       this._licenseProjectEngineeringSupervisionPlannedReportDetailService.GetLicenseProjectEngineeringDetails(this.licenseProjectId as string).subscribe(res => {
         if (res) {
           this.years=this.getYearsBetween(new Date(res.startOn), new Date(res.endOn));
           this.currentYear = this.years[0];
           this.getCompletionRates()
         }
         else
           this.showRateFlag=false;
       })
     )
   }


   getCompletionRates(){
    this.showRateFlag = true
    this.subscriptions.push(
      this._PlannedEngineerProjectDetailsService.GetLicenseProjectEngineeringProjectZonesBlockesDetailsByYear(this.unitId, this.currentYear).subscribe(res=>{
        this.ProjectZonesBlockesDetails = res.data??{} as CompletionRatesDTO;
        this.compelationRateForm.patchValue({...this.ProjectZonesBlockesDetails,plannedEndDate:new Date(this.ProjectZonesBlockesDetails.plannedEndDate)})
        this.buildFormArrary();
      })
    )
   }


   private buildFormArrary(){
    this.licenseProjectEngineeringProjectZonesBlocksDetails.clear();
    const monthlyRates = this.ProjectZonesBlockesDetails.licenseProjectEngineeringProjectZonesBlocksDetails.map(element=>element.monthlyPlannedCompletionPercentage)
    this.ProjectZonesBlockesDetails.licenseProjectEngineeringProjectZonesBlocksDetails.forEach((rate,index)=>{
      this.licenseProjectEngineeringProjectZonesBlocksDetails.push(this._formBuilder.group({
        id:rate.id,
        month : rate.month,
        monthlyPlannedCompletionPercentage:rate.monthlyPlannedCompletionPercentage,
        accumulativePercentage: this.calculateAccumalativePercentage(index,monthlyRates)
      }))
    })
   }

   //function take index & value as parameter and use it filter and sum value depend on index and return number
   private calculateAccumalativePercentage(index:number,values:number[]):number{
    return values.filter((_,i)=>i<=index)
    .reduce((sum,current)=>sum+=current,0)+this.ProjectZonesBlockesDetails.lastYearTotalCumulativePercentages
   }


   getYearsBetween(startDate: Date, endDate: Date): number[] {
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
      years.sort((a, b) => a - b); // Sort in ascending order
    return years;
  
}


onChangeYear(event:any)
{
  this.currentYear = Number(event.target.value);
  this.getCompletionRates()
  if(this.isUpdated){
    this.save()
  } 
}
 

ngOnDestroy(): void {
  this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
}
}
