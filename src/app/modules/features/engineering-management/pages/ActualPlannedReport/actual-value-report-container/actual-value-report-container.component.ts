import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { EditorRequestNotesOnlyComponent } from 'src/app/shared/components/editor-request-notes-only/editor-request-notes-only.component';
import { RequestNotesData } from 'src/app/shared/models/request-notes-data.model';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';
import { LicenseProjectEngineeringRequestStatusEnum, type ActualValueReportPagingListDto } from '../../../models/actual-value-report-paging-list-dto';
import { LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdateDto } from '../../../models/license-project-engineering-supervision-planned-monthly-report-study-note-create-update-dto';
import { MonthlyEngineeringSupervisionReportsComponent } from '../monthly-engineering-supervision-reports/monthly-engineering-supervision-reports.component';
import { ActualValueReportService } from '../../../services/actual-value-report.service';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../../services/engineering-supervision-report-actual-project-status-summary.service';
import { LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService } from '../../../services/license-project-engineering-supervision-planned-monthly-report-study-note.service';
import { RequestApprovalComponent } from 'src/app/shared/components/request-approval/request-approval.component';
import { SysRequestApprovalActionTypeEnum, SysRequestApprovalTypeEnum } from 'src/app/shared/models/sys-request-approval.dto';
import { SysRequestApprovalService } from 'src/app/shared/services/sysRequestApproval/sysRequestApproval.service';

@Component({
  selector: 'app-actual-value-report-container',
  templateUrl: './actual-value-report-container.component.html',
  styleUrls: ['./actual-value-report-container.component.scss']
})
export class ActualValueReportContainerComponent {
  subscriptions: Subscription[] = [];
  showDetails: boolean = false;
  showPdfExport: boolean = false;
  RequestNotes: RequestNotesData | null = null;
  actualValueReport?: ActualValueReportPagingListDto;
  licenseProjectEngineeringRequestStatusEnum = LicenseProjectEngineeringRequestStatusEnum;
  licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdate?: LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdateDto
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
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _tabsService: TabsService,
    private _actualValueReportService: ActualValueReportService,
    private _sysRequestApprovalService: SysRequestApprovalService,
    private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
    private _licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService: LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService,
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

  private observeGetMonthDate() {
    this.subscriptions.push(
      this._actualValueReportService.showActualValueReportDetails.subscribe(res => {
        this.actualValueReport = res;
        this._engineeringSupervisionReportActualProjectStatusSummaryService.setmonthDate(res)
        this.updateTabContent();
        this.showDetails = true
      })
    )
  }

  compile() {
    this.licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdate = {} as LicenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdateDto;
    this.licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportDetailId = this.actualValueReport?.id as string;
    this.licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdate.notes = this.RequestNotes?.notes as string;

    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteService.save(this.licenseProjectEngineeringSupervisionPlannedMonthlyReportStudyNoteCreateUpdate).subscribe(res => {
        if (res && res.isDone) {
          this._toastrNotificationService.showSuccess("تم إرسال التقرير للدراسة");
          this.closeDialog();
          if (this.actualValueReport)
            this.actualValueReport.supervisionPlannedReportStatusId = this.licenseProjectEngineeringRequestStatusEnum.Compile;
        }
      })
    )
  }

  sendMonthToStudy() {
    this.subscriptions.push(
      this._actualValueReportService.sendMonthToStudy(this.actualValueReport?.id as string).subscribe(res => {
        if (res && res.isDone) {
          this._toastrNotificationService.showSuccess("تم إرسال التقرير للدراسة");
          if (this.actualValueReport)
            this.actualValueReport.supervisionPlannedReportStatusId = this.licenseProjectEngineeringRequestStatusEnum.UnderStudy;
        }
      })
    )
  }

  isApprovalRequired() {
    this.subscriptions.push(
      this._sysRequestApprovalService.isApprovalRequired.subscribe((isApprovalRequired) => {
        if (isApprovalRequired) {
          this.closeDialog();
          this.sendMonthToStudy();
        }
      })
    );
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

  public openRequestApprovalComponentDialog(): void {
    this._sysRequestApprovalService.setRequestApproval(
      {
        actionTypeId: SysRequestApprovalActionTypeEnum.SendRequest,
        requestTypeId: SysRequestApprovalTypeEnum.MonthlyReport,
      }
    );
    let Data = {
      title: 'اقرار',
      component: RequestApprovalComponent,
      id: 'RequestApprovalComponent',
    } as PopupData;
    this._popupService.updatePopupData(Data);
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
        if (res.id === 'RequestApprovalComponent') {
          this.isApprovalRequired();
        } else {
        switch (res.id) {
          case ButtonType.allowCompile:
            this.compile()
            break;
        }
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
