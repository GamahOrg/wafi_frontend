import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseProjectDto, LicenseProjectEngineeringActualReportDetailsDto, LicenseProjectEngineeringSupervisionPlannedActualReportDetailDto, LicenseProjectEngineeringSupervisionPlannedReportDetailImageDto, LicenseProjectEngineeringSupervisionPlannedReportDetailMapDto, LicenseProjectEngineeringSupervisionPlannedReportDetailVideoDto } from '../../dataModels/license-project-engineering-actual-report-details-dto';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../services/engineering-supervision-report-actual-project-status-summary.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddEditActualValueWorkStatuesReportComponent } from '../add-edit-actual-value-work-statues-report/add-edit-actual-value-work-statues-report.component';
import { ActualValueReportPagingListDto, LicenseProjectEngineeringRequestStatusEnum } from '../../models/actual-value-report-paging-list-dto';
@Component({
  selector: 'app-show-actual-value-work-statues-report',
  templateUrl: './show-actual-value-work-statues-report.component.html',
  styleUrls: ['./show-actual-value-work-statues-report.component.scss']
})
export class ShowActualValueWorkStatuesReportComponent {
  showRateFlag:boolean=true;
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  actualValueReport?:ActualValueReportPagingListDto
licenseProjectEngineeringRequestStatusEnum=LicenseProjectEngineeringRequestStatusEnum
currenrYear?:number;
years?:number[];
cumulativeAmountPriorToThatYear ?: number;
engineerinSupervisionPlannedReportAllowToEdit:boolean=false;
licenseProjectEngineeringActualReportDetails?: LicenseProjectEngineeringActualReportDetailsDto ;
licenseProjectEngineeringSupervisionPlannedReportDetails?:LicenseProjectEngineeringSupervisionPlannedActualReportDetailDto;
 // تفرير الإشراف الهندسي الشهري صور المشروع
 licenseProjectEngineeringSupervisionPlannedReportDetailImages :LicenseProjectEngineeringSupervisionPlannedReportDetailImageDto[]=[];
 // تفرير الإشراف الهندسي الشهري فيديو المشروع
licenseProjectEngineeringSupervisionPlannedReportDetailVideos :LicenseProjectEngineeringSupervisionPlannedReportDetailVideoDto[]=[];
 // تفرير الإشراف الهندسي الشهري خريطة موقع عام المشروع
 licenseProjectEngineeringSupervisionPlannedReportDetailMaps:LicenseProjectEngineeringSupervisionPlannedReportDetailMapDto[]=[];
monthDate ?:Date;
  mueltiFilesUploaderData: FileUploader = {
    multiple: true
  } as FileUploader;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;
  licenseProject?:LicenseProjectDto;
  constructor(
    private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _fileManagementService:FileManagementService
  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observesubmitSuccessfullyEventEmitter();
  }

 
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    debugger;
    if(this.licenseProjectId)
    {
      this.getmonthDate()
      
    }
    
    
  }
  getmonthDate() {
    debugger;
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectStatusSummaryService.getmonthDate().subscribe(res => {
        debugger;
        if (res) {
          debugger;
          this.actualValueReport= res as ActualValueReportPagingListDto;
          this.monthDate = this.actualValueReport.monthDate as Date;
         this.getLicenseProjectData();
          
        }
      })
    )
  }
  getLicenseProjectData()
  {
    debugger;
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectStatusSummaryService.GetLicenseProjectData(this.licenseProjectId as string).subscribe(res => {
        if (res) {
          debugger;
         this.licenseProject=res as LicenseProjectDto;
         const date = new Date(this.monthDate as Date);
          this.years=this.getYearsBetween(new Date(this.licenseProject.startOn), new Date(this.licenseProject.endOn));
          if( this.years &&  this.years.length != 0 && !this.currenrYear){
            this.currenrYear = this.years.filter(year=> year === date.getFullYear())[0] as number;
          }
         this. getActualProjectStatusDetails();
          
        }
      })
    )
  }
  private observesubmitSuccessfullyEventEmitter(){
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectStatusSummaryService.submitSuccessfullyEventEmitter.subscribe(res=>{
        this.getLicenseProjectIdStorage()
      }));
  }
  getActualProjectStatusDetails() {
    
    debugger;
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectStatusSummaryService.getActualProjectStatusDetails(this.licenseProjectId as string, this.monthDate as Date,this.currenrYear as number).subscribe(res => {
        if (res) {
          debugger
         this.showRateFlag=true;
         
          this.licenseProjectEngineeringActualReportDetails=res;
          
          this.licenseProjectEngineeringSupervisionPlannedReportDetails=this.licenseProjectEngineeringActualReportDetails.licenseProjectEngineeringSupervisionPlannedReportDetails.filter(x=> x.monthDate as Date === this.monthDate)[0];
          if(this.licenseProjectEngineeringSupervisionPlannedReportDetails)
            {
             this.licenseProjectEngineeringSupervisionPlannedReportDetailImages = this.licenseProjectEngineeringSupervisionPlannedReportDetails.licenseProjectEngineeringSupervisionPlannedReportDetailImages;
            this.licenseProjectEngineeringSupervisionPlannedReportDetailVideos =  this.licenseProjectEngineeringSupervisionPlannedReportDetails.licenseProjectEngineeringSupervisionPlannedReportDetailVideos;
             this.licenseProjectEngineeringSupervisionPlannedReportDetailMaps= this.licenseProjectEngineeringSupervisionPlannedReportDetails.licenseProjectEngineeringSupervisionPlannedReportDetailMaps;
            
            }
            this.addValuesToList(this.licenseProjectEngineeringActualReportDetails.licenseProjectEngineeringSupervisionPlannedReportDetails,
              this.licenseProjectEngineeringActualReportDetails.cumulativeAmountPriorToThatYear,this.licenseProjectEngineeringActualReportDetails.acualCumulativeAmountPriorToThatYear)
        }
        else
          this.showRateFlag=false;
      })
    )
  }



onChangeYear(data:any)
{
 
  this.currenrYear = Number(data.target.value);
  this.getActualProjectStatusDetails();
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
 

 
  addValuesToList(licenseProjectEngineeringSupervisionPlannedReportDetailList:LicenseProjectEngineeringSupervisionPlannedActualReportDetailDto[],cumulativeAmountPriorToThatYear:number,acualCumulativeAmountPriorToThatYear:number)
  {
      // Caculate the cumulative planned completionper centage
       licenseProjectEngineeringSupervisionPlannedReportDetailList.forEach(item => {
        let currentIndex  = licenseProjectEngineeringSupervisionPlannedReportDetailList.findIndex((x: any) => x.monthDate === item.monthDate);
       
       /*  if(item.id=='00000000-0000-0000-0000-000000000000' || (item.projectMonthlyPlannedCompletionRate==null || item.projectMonthlyPlannedCompletionRate==0))
        cumulativeAmountPriorToThatYear=0; */
        if(currentIndex ==0)
        {
          let firstObj=licenseProjectEngineeringSupervisionPlannedReportDetailList[currentIndex];
          firstObj.cumulativeplannedcompletionpercentage = item.projectMonthlyPlannedCompletionRate  as number + cumulativeAmountPriorToThatYear;
          firstObj.cumulativeAcualcompletionpercentage = item.projectMonthlyActualCompletionRate  as number + acualCumulativeAmountPriorToThatYear;

        }
        else
        {
         let lastobj=licenseProjectEngineeringSupervisionPlannedReportDetailList[currentIndex-1];
         item.cumulativeplannedcompletionpercentage= (item.projectMonthlyPlannedCompletionRate as number) + (lastobj.cumulativeplannedcompletionpercentage as number);
         item.cumulativeAcualcompletionpercentage= (item.projectMonthlyActualCompletionRate as number) + (lastobj.cumulativeAcualcompletionpercentage as number);
        }
        if(this.licenseProjectEngineeringActualReportDetails)
        this.licenseProjectEngineeringActualReportDetails.licenseProjectEngineeringSupervisionPlannedReportDetails=licenseProjectEngineeringSupervisionPlannedReportDetailList;
    }) 
  } 

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }



  openAddEditActualValueWorkStatuesReportDialog(): void {
 
    let Data = {
      title: "تعديل بيانات الشهر",
      component: AddEditActualValueWorkStatuesReportComponent,
      id: "AddEditActualValueWorkStatuesReportComponent"
    } as PopupData;
     this._popupService.updatePopupData(Data);
   
  } 
  deletFile(id : string){
    this._fileManagementService.DeletFile(id).subscribe(res=>{
      if(res.isDone){
        this.getActualProjectStatusDetails()      }
    })

  }
}
