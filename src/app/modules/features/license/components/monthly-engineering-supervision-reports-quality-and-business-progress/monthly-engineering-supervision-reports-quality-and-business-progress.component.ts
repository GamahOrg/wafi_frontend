import { Component } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../services/engineering-supervision-report-actual-project-status-summary.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { EngineeringSupervisionReportActualQualityAndBusinessService } from '../../services/engineering-supervision-report-actual-quality-and-business.service';
import { AddEditActualQualityAndBusinessComponent } from '../add-edit-actual-quality-and-business/add-edit-actual-quality-and-business.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectEngineeringActualQualityPlanAndAssuranceDto } from '../../dataModels/license-project-engineering-actual-quality-plan-and-assurance-dto';
import { Pagination, pagination } from 'src/app/shared/models/pagination.model';
import { LicenseProjectEngineeringWorksExaminationPagingDto } from '../../dataModels/license-project-engineering-works-examination-paging-dto';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { AddEditActualQualityControlComponent } from '../add-edit-actual-quality-control/add-edit-actual-quality-control.component';
import { ShowActualQualityControlDetailsComponent } from '../show-actual-quality-control-details/show-actual-quality-control-details.component';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectEngineeringMaterialExaminationDto } from '../../dataModels/license-project-engineering-material-examination-dto';
import { LicenseProjectEngineeringNonConformityReportDto } from '../../dataModels/license-project-engineering-non-conformity-report-dto';
import { AddEditNonConformityReportComponent } from '../add-edit-non-conformity-report/add-edit-non-conformity-report.component';
import {AddEditMaterialExaminationComponent}  from '../add-edit-material-examination/add-edit-material-examination.component';
import { LicenseProjectEngineeringActualRelativeWeightDto } from '../../dataModels/license-project-engineering-actual-relative-weight-dto';
import { AddEditActualRelativeWeightComponent } from '../add-edit-actual-relative-weight/add-edit-actual-relative-weight.component';
import { ActualValueReportPagingListDto ,LicenseProjectEngineeringRequestStatusEnum} from '../../models/actual-value-report-paging-list-dto';
import { ShowActualRelativeWeightDetailsComponent } from '../show-actual-relative-weight-details/show-actual-relative-weight-details.component';
import { LicenseProjectExchangeDocumentService } from '../../services/license-project-exchange-document.service';
import { LicenseProjectExchangeDocumentPagingDto } from '../../dataModels/license-project-exchange-document-paging-dto';
import { MonthlyEngineeringReportExternalExpensesService } from '../../services/monthly-engineering-report-external-expenses.service';
import { MonthlyEngineeringReportExternalExpensesDto } from '../../models/monthly-engineering-report-external-expenses-model';
import { AddEditMonthlyEngineeringReportExternalExpensesComponent } from '../add-edit-monthly-engineering-report-external-expenses/add-edit-monthly-engineering-report-external-expenses.component';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-monthly-engineering-supervision-reports-quality-and-business-progress',
  templateUrl: './monthly-engineering-supervision-reports-quality-and-business-progress.component.html',
  styleUrls: ['./monthly-engineering-supervision-reports-quality-and-business-progress.component.scss']
})
export class MonthlyEngineeringSupervisionReportsQualityAndBusinessProgressComponent {
  showRateFlag: boolean = true;
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  currenrYear?: number;
  years?: number[];
  cumulativeAmountPriorToThatYear?: number;
  licenseProjectEngineeringRequestStatusEnum = LicenseProjectEngineeringRequestStatusEnum
  engineerinSupervisionPlannedReportAllowToEdit: boolean = false;
  licenseProjectEngineeringActualQualityPlanAndAssurance?: LicenseProjectEngineeringActualQualityPlanAndAssuranceDto ;
  licenseProjectEngineeringMaterialExamination?: LicenseProjectEngineeringMaterialExaminationDto ;
  licenseProjectEngineeringNonConformityReport?: LicenseProjectEngineeringNonConformityReportDto ;  
  monthDate?: Date;
  actualValueReport?: ActualValueReportPagingListDto
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';

  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  
  reqList: Pagination<LicenseProjectEngineeringWorksExaminationPagingDto[]> = {} as Pagination<LicenseProjectEngineeringWorksExaminationPagingDto[]>;
  licenseProjectEngineeringActualRelativeWeightList?: LicenseProjectEngineeringActualRelativeWeightDto[];
  licenseProjectExchangeDocumentList: Pagination<LicenseProjectExchangeDocumentPagingDto[]> = {} as Pagination<LicenseProjectExchangeDocumentPagingDto[]>;
  monthlyEngineeringReportExternalExpensesList: Pagination<MonthlyEngineeringReportExternalExpensesDto[]> = {} as Pagination<MonthlyEngineeringReportExternalExpensesDto[]>;

  showValidation: boolean = false;
  constructor(
    private _engineeringSupervisionReportActualQualityAndBusinessService: EngineeringSupervisionReportActualQualityAndBusinessService,
    private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
    private _monthlyEngineeringReportExternalExpensesService: MonthlyEngineeringReportExternalExpensesService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _paginationService: PaginationService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _licenseProjectExchangeDocumentService: LicenseProjectExchangeDocumentService,
  ) { }
 
   ngOnInit(): void {
     this.getLicenseProjectIdStorage();
     this.watchPaginationActions();
     this.observesubmitSuccessfullyEventEmitter();
   }
 
   private getLicenseProjectIdStorage(): void {
     this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
     if(this.licenseProjectId)
       this.getMonthDate()
   }

   getMonthDate() {
     this.subscriptions.push(
       this._engineeringSupervisionReportActualProjectStatusSummaryService.getmonthDate().subscribe(res => {
         if (res) {
           this.actualValueReport = res as ActualValueReportPagingListDto;
           this.monthDate = this.actualValueReport.monthDate as Date;
          this.loadComponentData();
         }
       })
     )
   }

  getMonthlyEngineeringReportExternalExpenses() {
     this.subscriptions.push(
       this._monthlyEngineeringReportExternalExpensesService.GetAllMonthlyEngineeringReportExternalExpensesByMonth(this.licenseProjectId as string, this.monthDate, this.pagintationData.currentPage, this.pagintationData.pageSize).subscribe(res => {
         if (res) 
           this.monthlyEngineeringReportExternalExpensesList = res as Pagination<MonthlyEngineeringReportExternalExpensesDto[]>;
       })
     )
  }

  private loadComponentData() {
    const requests = [
      this._engineeringSupervisionReportActualQualityAndBusinessService.getLicenseProjectEngineeringActualQualityPlanAndAssurance(this.licenseProjectId as string, this.monthDate as Date),
      this._engineeringSupervisionReportActualQualityAndBusinessService.getLicenseProjectEngineeringWorksExaminationList(this.monthDate as Date,this.pagintationData.currentPage, this.pagintationData.pageSize),
      this._engineeringSupervisionReportActualQualityAndBusinessService.getLicenseProjectEngineeringNonConformityReport(this.licenseProjectId as string, this.monthDate as Date),
      this._engineeringSupervisionReportActualQualityAndBusinessService.getLicenseProjectEngineeringMaterialExamination(this.licenseProjectId as string, this.monthDate as Date),
      this._engineeringSupervisionReportActualQualityAndBusinessService.getLicenseProjectEngineeringActualRelativeWeight(this.licenseProjectId as string,this.monthDate as Date),
      this._licenseProjectExchangeDocumentService.getExchangeDocumentOnProject(this.licenseProjectId as string, this.pagintationData.currentPage, this.pagintationData.pageSize, this.monthDate as Date),
      this._monthlyEngineeringReportExternalExpensesService.GetAllMonthlyEngineeringReportExternalExpensesByMonth(this.licenseProjectId as string, this.monthDate, this.pagintationData.currentPage, this.pagintationData.pageSize)
    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results && results[0]) {
        
        this.showRateFlag = true;
        this.licenseProjectEngineeringActualQualityPlanAndAssurance=results[0] as LicenseProjectEngineeringActualQualityPlanAndAssuranceDto;
      }
      else
      {
        this.showRateFlag = false;
      }
      if(results && results[1])
       this.updateRequestList(results[1] as Pagination<LicenseProjectEngineeringWorksExaminationPagingDto[]>);
      if(results && results[2])
        this.licenseProjectEngineeringNonConformityReport = results[2] as LicenseProjectEngineeringNonConformityReportDto;
      if(results && results[3])
        this.licenseProjectEngineeringMaterialExamination = results[3] as LicenseProjectEngineeringMaterialExaminationDto;
      if(results && results[4])
        this.licenseProjectEngineeringActualRelativeWeightList = results[4] as LicenseProjectEngineeringActualRelativeWeightDto[];
      if(results && results[5])
        this.updateLicenseProjectExchangeDocumentList(results[5] as Pagination<LicenseProjectExchangeDocumentPagingDto[]>);
      if(results && results[6])
        this.getAllMonthlyEngineeringReportExternalExpenses(results[6] as Pagination<MonthlyEngineeringReportExternalExpensesDto[]>);
    });

    this.subscriptions.push(subscriptions);
  }

 private updateRequestList(licenseProjectBuyerResult: Pagination<LicenseProjectEngineeringWorksExaminationPagingDto[]>): void {
    this.reqList = licenseProjectBuyerResult;

    this.setPaginationData(
      this.reqList.pageSize,
      this.reqList.totalCount,
      this.reqList.pageCount
    );
  }

  private updateLicenseProjectExchangeDocumentList(licenseProjectExchangeDocumentResult: Pagination<LicenseProjectExchangeDocumentPagingDto[]>): void {
    this.licenseProjectExchangeDocumentList = licenseProjectExchangeDocumentResult;

    this.setPaginationData(
      this.licenseProjectExchangeDocumentList.pageSize,
      this.licenseProjectExchangeDocumentList.totalCount,
      this.licenseProjectExchangeDocumentList.pageCount
    );
  }

  private getAllMonthlyEngineeringReportExternalExpenses(monthlyEngineeringReportExternalExpensesResult: Pagination<MonthlyEngineeringReportExternalExpensesDto[]>): void {
    this.monthlyEngineeringReportExternalExpensesList = monthlyEngineeringReportExternalExpensesResult;

    this.setPaginationData(
      this.monthlyEngineeringReportExternalExpensesList.pageSize,
      this.monthlyEngineeringReportExternalExpensesList.totalCount,
      this.monthlyEngineeringReportExternalExpensesList.pageCount
    );
  }

  deleteLicenseProjectEngineeringWorksExamination(licenseProjectEngineeringWorksExaminationId:string) {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService.deleteLicenseProjectEngineeringWorksExamination(licenseProjectEngineeringWorksExaminationId).subscribe(res => {
        if (res) {
          this._toastrNotificationService.showSuccess('تم الحذف بنجاح'); 
          this.getLicenseProjectIdStorage(); 
        }
      })
    )
  }

  private setPaginationData(pageSize: number, total: number, pageCount: number): void {
    this.pagintationData.pageCount = pageCount
    this.pagintationData.pageSize = pageSize
    this.pagintationData.totalCount = total
    this._paginationService.updatePaginationData(this.pagintationData);
  }

  watchPaginationActions(): void {
    this.watchPagechanged();
    this.watchPaginationClicked();
  }

  private watchPagechanged(): void {
    this.subscriptions.push(
      this._paginationService.getPageChanged().subscribe((pageNo) => {
        this.newPageNo = pageNo;
      })
    )
  }

  private watchPaginationClicked(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.pagintationData.currentPage != nextPage) {
          this.loadNextPage(nextPage);
          this.pagintationData.currentPage = this.newPageNo;
        }
      })
    );
  }

  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.getLicenseProjectIdStorage()
  }

  private observesubmitSuccessfullyEventEmitter(){
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService.submitSuccessfullyEventEmitter.subscribe(res=>{
        this.getLicenseProjectIdStorage()
      }));
  }

  openAddEditActualQualityAndBusinessDialog(): void {
    this._engineeringSupervisionReportActualQualityAndBusinessService.
    setLicenseProjectEngineeringActualQualityPlanAndAssuranceObj(this.licenseProjectEngineeringActualQualityPlanAndAssurance as LicenseProjectEngineeringActualQualityPlanAndAssuranceDto);
      let Data = {
        title: "تعديل بيانات  خطةالجودة  وضمان الجودة",
        component: AddEditActualQualityAndBusinessComponent,
        id: "AddEditActualQualityAndBusinessComponent"
      } as PopupData;
    this._popupService.updatePopupData(Data);   
  }

  openAddEditMonthlyEngineeringReportExternalExpensesDialog(id?: string | null): void {
    this._monthlyEngineeringReportExternalExpensesService.setLicenseProjectEngineeringSupervisionPlannedReportDetailId(this.actualValueReport?.id as string);
    this._monthlyEngineeringReportExternalExpensesService.setMonthlyEngineeringReportExternalExpensesId(id ?? null);
      let Data = {
        title: "إضاقة او تعديل بيانات المصروفات الخارجية",
        component: AddEditMonthlyEngineeringReportExternalExpensesComponent,
        id: "AddEditMonthlyEngineeringReportExternalExpensesComponent"
      } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
     dialogRef.afterClosed().subscribe(_=> this.getMonthlyEngineeringReportExternalExpenses());
  }

  deleteMonthlyEngineeringReportExternalExpenses(id: string) {
    this.subscriptions.push(
      this._monthlyEngineeringReportExternalExpensesService.DeleteMonthlyEngineeringReportExternalExpenses(id).subscribe((res) => {
        if (res.isDone) {
          this._toastrNotificationService.showSuccess('تم الحذف بنجاح');
          let index = this.monthlyEngineeringReportExternalExpensesList.results.findIndex((x) => x.id == id);
          if (index != -1) this.monthlyEngineeringReportExternalExpensesList.results.splice(index, 1);
        } else this._toastrNotificationService.showError(res.message);
      })
    );
  }

  openAddEditActualQualityControlDialog(licenseProjectEngineeringWorksExamination:any): void {
    if(licenseProjectEngineeringWorksExamination && licenseProjectEngineeringWorksExamination.id){
      this._engineeringSupervisionReportActualQualityAndBusinessService.
      setLicenseProjectEngineeringWorksExamination(licenseProjectEngineeringWorksExamination);
    }
    else {
      this._engineeringSupervisionReportActualQualityAndBusinessService.
      setLicenseProjectEngineeringActualQualityPlanAndAssuranceObj(this.licenseProjectEngineeringActualQualityPlanAndAssurance as LicenseProjectEngineeringActualQualityPlanAndAssuranceDto);
      this._engineeringSupervisionReportActualQualityAndBusinessService.
      setLicenseProjectEngineeringWorksExamination(licenseProjectEngineeringWorksExamination);
    }
    let Data = {
      title: "إضاقة او تعديل بيانات  مراقبة الجودة",
      component: AddEditActualQualityControlComponent,
      id: "AddEditActualQualityControlComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  showActualQualityControlDetailDialog(licenseProjectEngineeringWorksExamination:any){
    this._engineeringSupervisionReportActualQualityAndBusinessService.
    setLicenseProjectEngineeringWorksExamination(licenseProjectEngineeringWorksExamination);
    let Data = {
      title: "بيانات  مراقبة الجودة",
      component: ShowActualQualityControlDetailsComponent,
      id: "ShowActualQualityControlDetailsComponent",
      buttons:[]
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  openAddEditNonConformityReportDialog(): void {
   this._engineeringSupervisionReportActualQualityAndBusinessService.
   setLicenseProjectEngineeringNonConformityReportObj(this.licenseProjectEngineeringNonConformityReport as LicenseProjectEngineeringNonConformityReportDto);
    let Data = {
      title: "تعديل بيانات  تقارير عدم المطابقة",
      component: AddEditNonConformityReportComponent,
      id: "AddEditNonConformityReportComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data);
  } 
  
  openAddEditMaterialExaminationComponentDialog(): void {
    this._engineeringSupervisionReportActualQualityAndBusinessService.
    setLicenseProjectEngineeringMaterialExaminationObj(this.licenseProjectEngineeringMaterialExamination as LicenseProjectEngineeringMaterialExaminationDto);
    let Data = {
      title: "تعديل بيانات فحص المواد",
      component: AddEditMaterialExaminationComponent,
      id: "AddEditMaterialExaminationComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data);    
  } 

  openAddEditActualRelativeWeightDialog(weight:any): void {
    this._engineeringSupervisionReportActualQualityAndBusinessService.
    setLicenseProjectEngineeringActualRelativeWeightObj(weight as LicenseProjectEngineeringActualRelativeWeightDto);
    let Data = {
      title: "إضاقة او تعديل بيانات موقف أعمال الإنشاءات",
      component: AddEditActualRelativeWeightComponent,
      id: "AddEditActualRelativeWeightComponent"
      } as PopupData;
    this._popupService.updatePopupData(Data);
  } 
  
  showActualRelativeWeightDetailDialog(weight:any){
    this._engineeringSupervisionReportActualQualityAndBusinessService.
    setLicenseProjectEngineeringActualRelativeWeightObj(weight as LicenseProjectEngineeringActualRelativeWeightDto);
    let Data = {
      title: "بيانات  موقف أعمال الإنشاءات ",
      component: ShowActualRelativeWeightDetailsComponent,
      id: "ShowActualRelativeWeightDetailsComponent",
      buttons:[]
    } as PopupData;
    this._popupService.updatePopupData(Data);
  } 

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

}
