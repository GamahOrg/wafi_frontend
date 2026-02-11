import { Component, OnInit } from '@angular/core';
import { LincenseRequestProjectService } from '../../../license-project-requests/services/lincense-request-project.service';
import { PopupService } from '../../../../../shared/services/popup/popup.service';
import { TabsService } from '../../../../../shared/services/tabs/tabs.service';
import { ProjectLicenseServiceDetailsService } from '../../../license-project-requests/services/project-license-service-details.service';
import { RequestNotesService } from '../../../../../shared/services/requestNotes/request-notes.service';
import { ProjectRequestLocalStorageService } from '../../../license-project-requests/services/project-request-local-storage.service';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestDto } from '../../../license-project-requests/models/request-header-details';
import { LicenseProjectRequestStatusEnum } from '../../../license-project-requests/enums/license-project-request-status.enum';
import { ButtonType } from '../../../../../shared/models/enums/button-type.model';
import { RequestNotesData } from '../../../../../shared/models/request-notes-data.model';
import { CircularProgressSetting } from '../../../../../shared/models/circular-progress-setting.model';
import { Tabs } from '../../../../../shared/models/tabs.model';
import { LicenseProjectRequestTypeEnum } from '../../../license-project-requests/enums/license-project-request-type.enum';
import { Configuration } from '../../../../../core/configurations/shared.config';
import { Button } from '../../../../../shared/models/button.model';
import { ButtonClassesType } from '../../../../../shared/models/enums/button-classes-type.model';
import { EditorRequestNotesOnlyComponent } from '../../../../../shared/components/editor-request-notes-only/editor-request-notes-only.component';
import { PopupData } from '../../../../../shared/models/popup.model';
import { CorrectionProjectLicenseRequestDataComponent } from '../../components/correction-units/correction-project-license-request-data/correction-project-license-request-data.component';
import { CorrectionProjectLicenseRequestNotesComponent } from '../../components/correction-units/correction-project-license-request-notes/correction-project-license-request-notes.component';
import { CorrectionProjectLicenseRequestTimeLineComponent } from '../../components/correction-units/correction-project-license-request-time-line/correction-project-license-request-time-line.component';
import { CorrectionProjectLicenseServiceDetailsService } from '../../../license-project-requests/services/correction-project-license-details.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { FarzRequestStatusEnum } from '../../models/license-details.model';

@Component({
  selector: 'app-correction-license-project-request-details',
  templateUrl: './correction-license-project-request-details.component.html',
  styleUrls: ['./correction-license-project-request-details.component.scss'],
})
export class CorrectionLicenseProjectRequestDetailsComponent implements OnInit {
  constructor(
    private licenseProjectService: LincenseRequestProjectService,
    private _popupService: PopupService,
    private _toastrService: ToastrService,
    private _tabsService: TabsService,
    private _router: Router,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _projectLicenseServiceDetailsService: CorrectionProjectLicenseServiceDetailsService,
    private _requestNotesService: RequestNotesService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
    private route: ActivatedRoute,
  ) {}

  subscriptions: Subscription[] = [];
  selectedRequest: LicenseProjectRequestDto = {} as LicenseProjectRequestDto;
  selectedRequestId: string = '';
  selectedUnitCorrectionRequestId: string = '';
  get externalStatusId() {
    return LicenseProjectRequestStatusEnum;
  }
  get ButtonType() {
    return ButtonType;
  }
  RequestNotes: RequestNotesData | null = null;
  StudyDaysProgressSetting: CircularProgressSetting =
    new CircularProgressSetting();
  editFarzNoteRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.correctionFarzNote}`;
  get farzRequestStatusEnum() {
    return FarzRequestStatusEnum;
  }
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        icon: '',
        title: 'بيانات الطلب',
        Component: CorrectionProjectLicenseRequestDataComponent, //RequestDataComponent,
        disabled: false,
        isVisible: true,
        id: 'CorrectionProjectLicenseRequestDataComponent',
      },
      {
        icon: '',
        title: 'ملاحظات الطلب',
        Component: CorrectionProjectLicenseRequestNotesComponent, //RequestNotesComponent,
        disabled: false,
        isVisible: true,
        id: 'CorrectionProjectLicenseRequestNotesComponent',
      },
      {
        icon: '',
        title: 'سجل أحداث الطلب',
        Component: CorrectionProjectLicenseRequestTimeLineComponent,
        disabled: false,
        isVisible: true,
        id: 'CorrectionProjectLicenseRequestTimeLineComponent',
      },
    ],
  };
  clientActionsButtons: Button[] = [
    {
      icon: '',
      title: 'إعادة إرسال الطلب',
      actionType: ButtonType.allowCompile,
      isVisable: false,
      isDisables: false,
      onclick: () => this.openCompilNotesDialog(),
      classes: [ButtonClassesType.primary],
    },
  ];
  requestDetailsRoute: string = '';
  localization = {
    remainingDaysToStudy: 'الوقت المتبقي لدراسة الطلب',
    remainingDaysToCompile: 'الوقت المتبقي لفرصة معالجة الطلب',
    remainingDaysToCompileDeedMarginalizationPeriod:
      'الوقت المتبقي لمعالجة لتهميش الصكوك',
    remainingDaysToCompileGuaranteeLetterActivationPeriod:
      'الوقت المتبقي لمعالجة تفعيل خطاب الضمان',
    remainingDaysToCompileQWTablePeriod:
      'الوقت المتبقي لمعالجة جدول الكميات و الأوزان',
    remainingDaysToCompileOpenBankAccountPeriod:
      'الوقت المتبقي لمعالجة فتح حساب بنكي ',
    editButtonTitle: 'معالجة الملاحظات',
    editButtonForRenewTitle: 'تعديل الطلب قبل التجديد',
    farzStatus: 'معالجة ملاحظات فرز',
    day: 'يوم',
  };

  ngOnInit() {
    this.updateTabContent();
    this.getSelectedRequestIdFromLocalStorage();
    this.observePopupEvents();
    this.observeRequestNotes();
  }

  handleFarzNotes(): void {
    this._sharedLicenseProjectService.setCorrectionLicenseAvailabilityToUpdateFarzInLocalStorage(
      true,
    );
    // Navigate to edit farz notes page
    this._router.navigate([this.editFarzNoteRoute]);
  }

  private updateTabContent() {
    this._tabsService.updateTabContent(this.tabContent);
    this._tabsService.updateActiveTabIndex(0);
  }

  private getSelectedRequestIdFromLocalStorage() {
    let selectedRequestId =
      this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage();

    if (selectedRequestId) {
      this.selectedRequestId = selectedRequestId;
      this.getRequestHeaderDetails();
    }
  }

  private updateDataVisibilityOfLicenseProject() {
    let data: string[] = [];
    this._dataVisibilityOfLicenseProjectService.updateDataVisibilityOfLicenseProject(
      data,
    );
    // this.observeQWTableCompiledSuccessfullyEvent();
  }

  updateClientActionsButtons() {
    if (this.selectedRequest) {
      this.clientActionsButtons.map((item: Button) => {
        // item.isVisable = this.selectedRequest
        //   ?.licenseRequestCustomerHeaderEventStatus[
        //   item.actionType as keyof LicenseRequestCustomerHeaderEventStatus
        // ] as boolean;
        item.isVisable =
          this.selectedRequest.licenseProjectRequestEventStatus.allowCompile;
        item.isDisables = false;
      });
    }
  }

  private observeRequestNotes(): void {
    this.subscriptions.push(
      this._requestNotesService.RequestNotes$.subscribe(
        (res: RequestNotesData | null) => {
          if (res) this.RequestNotes = res;
        },
      ),
    );
  }

  editRequest() {
    this._sharedLicenseProjectService.setCorrectionUnitRequestIdInLocalStorage(
      this.selectedRequest.id,
    );

    this._sharedLicenseProjectService.setAllowCorrectionCompileInLocalStorage(
      true,
    );
    this._router.navigate([
      `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.correctionLicenseSummary}`,
    ]);
  }

  private openCompilNotesDialog() {
    let Data = {
      id: ButtonType.allowCompile,
      title: 'تسجيل نتيجة دراسة الطلب',
      component: EditorRequestNotesOnlyComponent,
    } as PopupData;
    this.updateAndOpenData(Data);
  }

  private updateAndOpenData(data: PopupData) {
    this._popupService.updatePopupData(data);
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  //
  getRequestHeaderDetails() {
    if (this.selectedRequestId) {
      this._projectLicenseServiceDetailsService
        .getRequestHeaderDetails(this.selectedRequestId)
        .subscribe((response) => {
          if (response) {
            this.selectedRequest = response;
            this._projectLicenseServiceDetailsService.selectRequest$.next(
              response,
            );
            this.updateDayProgressSettings();
            this.updateClientActionsButtons();
          }
        });
    }
  }

  private updateDayProgressSettings(): void {
    this.updateStudyDaysProgressSetting();
  }

  private updateStudyDaysProgressSetting(): void {
    if (this.selectedRequest) {
      this.StudyDaysProgressSetting.percent =
        (this.selectedRequest.licenseProjectRequestEventStatus
          .allowCustomerFeedbackRemainingStudyPeriod /
          this.selectedRequest.licenseProjectRequestEventStatus
            .allowCustomerFeedbackPeriod) *
        100;
      this.StudyDaysProgressSetting.title =
        this.selectedRequest.licenseProjectRequestEventStatus.allowCustomerFeedbackRemainingStudyPeriod.toString();
    }
  }

  private observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }
  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res);
      }),
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res);
        switch (res.id) {
          case ButtonType.allowCompile:
            this.compile();
            break;
        }
      }),
    );
  }

  private compile() {
    this.subscriptions.push(
      this._projectLicenseServiceDetailsService
        .compile(
          this.selectedRequest.licenseProjectRequestEventStatus.requestId,
          this.RequestNotes?.notes as string,
        )
        .subscribe((res: boolean) => {
          if (res) {
            this.closeDialog();
            this.emitDataIsUpdate();
            this.getRequestHeaderDetails();
            this.showNotificationOFsentNotes();
          }
        }),
    );
  }

  private emitDataIsUpdate() {
    this._projectLicenseServiceDetailsService.dataIsUpdate.emit();
  }

  private showNotificationOFsentNotes() {
    this._toastrService.success('تم إرسال الملاحظات بنجاح!');
  }

  getFarzStatusClass(statusId: any): string {
    switch (statusId) {
      case FarzRequestStatusEnum.None:
      case FarzRequestStatusEnum.UnderReview:
        return 'orange';

      case FarzRequestStatusEnum.Approved:
        return 'green';

      case FarzRequestStatusEnum.Rejected:
      case FarzRequestStatusEnum.IntegrationFailed:
        return 'red';

      default:
        return 'gray';
    }
  }

  ngOnDestroy(): void {
    // this.resetSelectRequest();
    // this.resetDataVisibilityOfLicenseProject();
    //this.licenseProjectService.clearActiveProjectRequestFromLocalStorage();
    this._projectLicenseServiceDetailsService.selectRequest$.next(null);
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
