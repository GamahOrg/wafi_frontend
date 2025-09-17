import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../services/engineering-supervision-report-actual-project-status-summary.service';
import { ActualValueReportService } from '../../services/actual-value-report.service';
import { MonthlyEngineeringSupervisionReportsComponent } from '../monthly-engineering-supervision-reports/monthly-engineering-supervision-reports.component';
import { ActualValueReportPagingListDto ,LicenseProjectEngineeringRequestStatusEnum} from '../../models/actual-value-report-paging-list-dto';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService } from '../../services/license-project-engineering-supervision-planned-monthly-report-study-note.service';
import { LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdateDto } from '../../dataModels/license-project-engineering-supervision-planned-monthly-report-study-note-create-update-dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { EditorRequestNotesOnlyComponent } from 'src/app/shared/components/editor-request-notes-only/editor-request-notes-only.component';
import { RequestNotesData } from 'src/app/shared/models/request-notes-data.model';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';

@Component({
  selector: 'app-actual-value-report-container',
  templateUrl: './actual-value-report-container.component.html',
  styleUrls: ['./actual-value-report-container.component.scss']
})
export class ActualValueReportContainerComponent {
  subscriptions: Subscription[] = [];
  showDetails:boolean=false;
  RequestNotes: RequestNotesData | null = null;
  actualValueReport?:ActualValueReportPagingListDto;
  licenseProjectEngineeringRequestStatusEnum=LicenseProjectEngineeringRequestStatusEnum;
  licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdate?:LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdateDto
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        icon: '',
        title: "",
        Component: MonthlyEngineeringSupervisionReportsComponent,
        disabled: false,
        isVisible: true,
      },  
    ],
  };

  constructor(
    private _requestNotesService: RequestNotesService,
    private _popupService:PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _tabsService: TabsService,
    private _actualValueReportService: ActualValueReportService,
    private _engineeringSupervisionReportActualProjectStatusSummaryService:EngineeringSupervisionReportActualProjectStatusSummaryService,
    private _licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService:LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService
  ) { }

  ngOnInit(): void {
    this.observeGetMonthDate();
    this.observePopupEvents();
    this.observeRequestNotes();
  }

  observeRequestNotes(): void {
    this.subscriptions.push(
      this._requestNotesService.RequestNotes$.subscribe((res: RequestNotesData | null) => {
        if (res) 
          this.RequestNotes = res;
      })
    )
  }

  private observeGetMonthDate(){
    this.subscriptions.push(
      this._actualValueReportService.showActualValueReportDetails.subscribe(res=>{
        this.actualValueReport = res;
        this._engineeringSupervisionReportActualProjectStatusSummaryService.setmonthDate(res)
        this.updateTabContent();
        this.showDetails = true 
      })
    )
  }

  compile(){
    this.licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdate={} as LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdateDto;
    this.licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportDetailId=this.actualValueReport?.id as string;
    this.licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdate.notes=this.RequestNotes?.notes as string;

    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService.save(this.licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdate).subscribe(res=>{
        if(res && res.isDone){
            this._toastrNotificationService.showSuccess("تم إرسال التقرير للدراسة");
            this.closeDialog();
            if(this.actualValueReport)
              this.actualValueReport.supervisionPlannedReportStatusId=this.licenseProjectEngineeringRequestStatusEnum.Compile;
          }
      })
    )
  }

  sendMonthToStudy(){
    this.subscriptions.push(
      this._actualValueReportService.sendMonthToStudy(this.actualValueReport?.id as string).subscribe(res=>{
        if(res && res.isDone){
            this._toastrNotificationService.showSuccess("تم إرسال التقرير للدراسة");
            if(this.actualValueReport)
              this.actualValueReport.supervisionPlannedReportStatusId=this.licenseProjectEngineeringRequestStatusEnum.UnderStudy;
          }
      })
    )
  }

  private updateTabContent(): void {
    this._tabsService.updateVerticalTabContent(this.tabContent);
  }

 // hekper methods 
  openNotesDialog(): void {
    let Data = {
      id: ButtonType.allowCompile,
      title: " نتيجة معالجة التقرير",
      component: EditorRequestNotesOnlyComponent
    } as PopupData;
    this.updateAndOpenData(Data)
  }

  private updateAndOpenData(data: PopupData) {
    this._popupService.updatePopupData(data)
  }

  // popup
  private observePopupEvents(): void {
    this.observeCancelAction()
    this.observeConfirmAction()
  }

  private observeCancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeConfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
        switch (res.id) {
          case ButtonType.allowCompile:
            this.compile()
            break;
        }
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
