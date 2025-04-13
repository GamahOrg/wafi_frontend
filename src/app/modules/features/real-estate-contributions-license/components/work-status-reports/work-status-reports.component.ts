import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto, MasterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdateDto } from '../../models/master-license-project-engineering-supervision-planned-report-create-update-dto';
import { LicenseProjectEngineeringSupervisionPlannedReportAttachmentCreateUpdateDto, LicenseProjectEngineeringSupervisionPlannedReportDetailDto, MasterLicenseProjectEngineeringSupervisionPlannedReportDto } from '../../models/master-license-project-engineering-supervision-planned-report-dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../services/license-project-engineering-supervision-planned-report-detail.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
import { MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto } from '../../models/master-license-project-engineering-supervision-planned-details-dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddEditCompletionAndEmploymentRatesComponent } from '../add-edit-completion-and-employment-rates/add-edit-completion-and-employment-rates.component';
import { AddEditEngineeringSupervisionReportsProjectDetailsComponent } from '../add-edit-engineering-supervision-reports-project-details/add-edit-engineering-supervision-reports-project-details.component';

@Component({
  selector: 'app-work-status-reports',
  templateUrl: './work-status-reports.component.html',
  styleUrls: ['./work-status-reports.component.scss']
})
export class WorkStatusReportsComponent {
  showRateFlag:boolean=true;
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  licenseProjectEngineeringSupervisionPlannedReportDetailList?: LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto[];
  licenseProjectEngineeringSupervisionPlannedReportDetailDtoList?:LicenseProjectEngineeringSupervisionPlannedReportDetailDto[]
currenrYear?:number;
years?:number[];
cumulativeAmountPriorToThatYear ?: number;
engineerinSupervisionPlannedReportAllowToEdit:boolean=false;
  masterLicenseProjectEngineeringSupervisionPlannedReport?: MasterLicenseProjectEngineeringSupervisionPlannedReportDto ;
  masterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdate ?: MasterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdateDto ;

  mueltiFilesUploaderData: FileUploader = {
    multiple: true
  } as FileUploader;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;
  licenseProjectEngineeringSupervisionPlannedReportAttachmentFiles :LicenseProjectEngineeringSupervisionPlannedReportAttachmentCreateUpdateDto[]=[];

 
  constructor(
    private _licenseProjectEngineeringSupervisionPlannedReportDetailService: LicenseProjectEngineeringSupervisionPlannedReportDetailService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _fileManagementService:FileManagementService
  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage()
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
        
         this.showRateFlag=true;
          this.years=this.getYearsBetween(new Date(res.startOn), new Date(res.endOn));
          this.masterLicenseProjectEngineeringSupervisionPlannedReport=res;
         this.getLicenseProjectEngineeringCompletionAndEmploymentRates();
        }
        else
          this.showRateFlag=false;
      })
    )
  }

  getLicenseProjectEngineeringCompletionAndEmploymentRates(): void {
   
    if( this.years &&  this.years.length != 0 && !this.currenrYear)
    this.currenrYear = this.years[0] as number;
    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService.
      GetLicenseProjectEngineeringCompletionAndEmploymentRates(this.licenseProjectId as string,this.currenrYear as number)
        .subscribe((res: MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto |null) => {
          if(res && res.licenseProjectEngineeringSupervisionPlannedReportDetails.length > 0){
            this.cumulativeAmountPriorToThatYear=res.cumulativeAmountPriorToThatYear;
            this.engineerinSupervisionPlannedReportAllowToEdit=res.engineerinSupervisionPlannedReportAllowToEdit;
            this._licenseProjectEngineeringSupervisionPlannedReportDetailService.setEngineerinSupervisionPlannedReportAllowToEdit(this.engineerinSupervisionPlannedReportAllowToEdit);
         this.addValuesToList(res.licenseProjectEngineeringSupervisionPlannedReportDetails,res.cumulativeAmountPriorToThatYear);

        }})
    
    )
  }

onChangeYear(data:any)
{
 
  this.currenrYear = Number(data.target.value);
  this.getLicenseProjectEngineeringCompletionAndEmploymentRates();
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
 


  addValuesToList(licenseProjectEngineeringSupervisionPlannedReportDetailList:LicenseProjectEngineeringSupervisionPlannedReportDetailDto[],cumulativeAmountPriorToThatYear:number)
  {
      // Caculate the cumulative planned completionper centage
       licenseProjectEngineeringSupervisionPlannedReportDetailList.forEach(item => {
        let currentIndex  = licenseProjectEngineeringSupervisionPlannedReportDetailList.findIndex((x: any) => x.monthDate === item.monthDate);
       
        if(item.id=='00000000-0000-0000-0000-000000000000' || (item.projectMonthlyPlannedCompletionRate==null || item.projectMonthlyPlannedCompletionRate==0))
        cumulativeAmountPriorToThatYear=0;
        if(currentIndex ==0)
        {
          let firstObj=licenseProjectEngineeringSupervisionPlannedReportDetailList[currentIndex];
          firstObj.cumulativeplannedcompletionpercentage = item.projectMonthlyPlannedCompletionRate  as number + cumulativeAmountPriorToThatYear;
        }
        else
        {
         let lastobj=licenseProjectEngineeringSupervisionPlannedReportDetailList[currentIndex-1];
         item.cumulativeplannedcompletionpercentage= (item.projectMonthlyPlannedCompletionRate as number) + (lastobj.cumulativeplannedcompletionpercentage as number);
        }
      this.licenseProjectEngineeringSupervisionPlannedReportDetailDtoList=licenseProjectEngineeringSupervisionPlannedReportDetailList;
    }) 
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }


  openAddEditEngineeringSupervisionReportsProjectDetailsDialog(): void {
 
    let Data = {
      title: "تعديل بيانات المشروع",
      component: AddEditEngineeringSupervisionReportsProjectDetailsComponent,
      id: "AddEditEngineeringSupervisionReportsProjectDetailsComponent"
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
     dialogRef.afterClosed().subscribe(_=> this.GetByLicenseProjectId());
   
  }
  openAddEditCompletionAndEmploymentRatesDialog(): void {
 
    let Data = {
      title: "تعديل بيانات السنين",
      component: AddEditCompletionAndEmploymentRatesComponent,
      id: "AddEditCompletionAndEmploymentRatesComponent"
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
     dialogRef.afterClosed().subscribe(_=> this.GetByLicenseProjectId());
   
  }
  deletFile(id : string){
    this._fileManagementService.DeletFile(id).subscribe(res=>{
      if(res.isDone){
        this.GetByLicenseProjectId()      }
    })

  }
}
