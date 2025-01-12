import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  LicenseProjectEngineeringDataTapStatus,
  LicenseProjectEngineeringRequestStatus,
} from '../../models/license-project-engineering-data-tap-status';
import { RequestNotesData } from 'src/app/shared/models/request-notes-data.model';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { Button } from 'src/app/shared/models/button.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../services/license-project-engineering-supervision-planned-report-detail.service';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { EditorRequestNotesOnlyComponent } from 'src/app/shared/components/editor-request-notes-only/editor-request-notes-only.component';
import { LicenseProjectEngineeringSupervisionPlannedReportStudyNoteCreateUpdateDto } from '../../models/master-license-project-engineering-supervision-planned-report-dto';
import { AddEditEngineeringSupervisionReportsProjectDetailsComponent } from '../add-edit-engineering-supervision-reports-project-details/add-edit-engineering-supervision-reports-project-details.component';
import { WorkStatusReportsComponent } from '../work-status-reports/work-status-reports.component';
import { InfraStructureComponent } from '../infra-structure/infra-structure.component';
import { PlannedEngineeringSupervisionReportsRequestNotesComponent } from '../planned-engineering-supervision-reports-request-notes/planned-engineering-supervision-reports-request-notes.component';
import { QualityAndBusinessProgressComponent } from '../quality-and-business-progress/quality-and-business-progress.component';
import { PlannedEngineerProjectDetailsComponent } from '../planned-engineer-project-details/planned-engineer-project-details.component';

@Component({
  selector: 'app-planned-engineering-supervision-reports',
  templateUrl: './planned-engineering-supervision-reports.component.html',
  styleUrls: ['./planned-engineering-supervision-reports.component.scss'],
})
export class PlannedEngineeringSupervisionReportsComponent
  implements OnInit, OnDestroy
{
  subscriptions: Subscription[] = [];
  licenseProjectEngineeringRequestStatus =
    LicenseProjectEngineeringRequestStatus;
  requestNotesData: RequestNotesData | undefined;
  RequestNotes: RequestNotesData | null = null;
  localization = {
    PlannedEngineeringSupervisionReportsQualityAndBusinessProgress:
      'الجودة و تقدم الأعمال',
    workStatusReports: 'ملخص حالة المشروع',
    infraStructure: 'البنية التحتية',
    projectDetails: 'تفاصيل المشروع',
    notes: 'الملاحظات',
  };

  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        icon: '',
        title: this.localization.workStatusReports,
        Component: WorkStatusReportsComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title:
          this.localization
            .PlannedEngineeringSupervisionReportsQualityAndBusinessProgress,
        Component: QualityAndBusinessProgressComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.projectDetails,
        Component: PlannedEngineerProjectDetailsComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.infraStructure,
        Component: InfraStructureComponent,
        disabled: false,
        isVisible: true,
      },
      {
        icon: '',
        title: this.localization.notes,
        Component: PlannedEngineeringSupervisionReportsRequestNotesComponent,
        disabled: false,
        isVisible: true,
      },
    ],
  };
  noDataActions: Button[] = [];
  title: string = '';
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  licenseProjectEngineeringDataTapStatus: LicenseProjectEngineeringDataTapStatus | null =
    null;
  constructor(
    private _tabsService: TabsService,
    private _licenseProjectEngineeringSupervisionPlannedReportDetailService: LicenseProjectEngineeringSupervisionPlannedReportDetailService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _requestNotesService: RequestNotesService
  ) {}

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observePopupEvents();
    this.observeRequestNotes();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.GetLicenseProjectEngineeringDataTapStatus();
    }
  }
  public sendPlannedReport(): void {
    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService
        .SendPlannedReport(this.licenseProjectId as string)
        .subscribe((res) => {
          if (res && res.isDone) {
            this._toastrNotificationService.showSuccess(
              'تم إرسال القيم المخطط غير مسموح بالتعديل علىها الان'
            );
            this._licenseProjectEngineeringSupervisionPlannedReportDetailService.setEngineerinSupervisionPlannedReportAllowToEdit(
              false
            );
          }
        })
    );
  }
  private GetLicenseProjectEngineeringDataTapStatus(): void {
    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService
        .GetLicenseProjectEngineeringDataTapStatus(
          this.licenseProjectId as string
        )
        .subscribe((res: LicenseProjectEngineeringDataTapStatus | null) => {
          console.log('res', res);
          // this._sharedLicenseProjectService.updateLicenseProjectEngineeringDataTapStatus(res);
          this.licenseProjectEngineeringDataTapStatus = res;
          // this.licenseProjectEngineeringDataTapStatus = { hasTimeSchedule: true, hasSupervisionPlannedReport: false }
          switch (true) {
            case !this.licenseProjectEngineeringDataTapStatus?.hasTimeSchedule:
              this.noDataActions = [];
              this.title = 'من فضلك أدخل خط الأساس للمشروع';
              break;
            case this.licenseProjectEngineeringDataTapStatus?.hasTimeSchedule &&
              !this.licenseProjectEngineeringDataTapStatus
                ?.hasSupervisionPlannedReport:
              this.noDataActions = [
                {
                  icon: '',
                  title: 'ادخل بيانات المشروع',
                  actionType: ButtonType.custome,
                  isVisable: true,
                  isDisables: false,
                  onclick: () =>
                    this.openAddEditEngineeringSupervisionReportsProjectDetailsDialog(),
                },
              ];
              this.title =
                'لقد مر تاريخ بداية الفترة التعاقدية للمشروع ويجب تسجيل تقرير استشاري الإشراف الهندسي المخطط ';
              break;
            case this.licenseProjectEngineeringDataTapStatus?.hasTimeSchedule &&
              this.licenseProjectEngineeringDataTapStatus
                ?.hasSupervisionPlannedReport:
              this.noDataActions = [];
              this.title = '';
              this.updateTabContent();
              break;
          }
        })
    );
  }
  // helper methods
  public openCustomerNotesForEngineerRequestComponentDialog(): void {
    let Data = {
      title: '  استيفاء الطلب',
      component: EditorRequestNotesOnlyComponent,
      id: 'EditorRequestNotesOnlyComponent',
    } as PopupData;
    console.log('updatePopupData', Data);
    this._popupService.updatePopupData(Data);
  }

  // popup
  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res);
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.compilePlannedReport();
      })
    );
  }
  observeRequestNotes(): void {
    this.subscriptions.push(
      this._requestNotesService.RequestNotes$.subscribe(
        (res: RequestNotesData | null) => {
          if (res) this.RequestNotes = res;
        }
      )
    );
  }
  private compilePlannedReport(): void {
    if (this.RequestNotes) {
      let note =
        {} as LicenseProjectEngineeringSupervisionPlannedReportStudyNoteCreateUpdateDto;
      note.notes = this.RequestNotes?.notes as string;
      note.licenseProjectId = this.licenseProjectId as string;
      note.id = '00000000-0000-0000-0000-000000000000';
      this.subscriptions.push(
        this._licenseProjectEngineeringSupervisionPlannedReportDetailService
          .CompilePlannedReport(note)
          .subscribe((res) => {
            if (res) {
              this._toastrNotificationService.showSuccess('تم الحفظ');
              this.closeDialog();
            }
          })
      );
    }
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  private openAddEditEngineeringSupervisionReportsProjectDetailsDialog(): void {
    let Data = {
      title: 'تعديل بيانات المشروع',
      component: AddEditEngineeringSupervisionReportsProjectDetailsComponent,
      id: 'AddEditEngineeringSupervisionReportsProjectDetailsComponent',
    } as PopupData;
    console.log('updatePopupData', Data);
    this._popupService.updatePopupData(Data);
  }

  private updateTabContent(): void {
    this._tabsService.updateVerticalTabContent(this.tabContent);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
