import { Component, OnInit } from '@angular/core';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { LicenseProjectRequestDto } from '../../models/request-header-details';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { ButtonClassesType } from 'src/app/shared/models/enums/button-classes-type.model';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { Button } from 'src/app/shared/models/button.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { EditorRequestNotesOnlyComponent } from 'src/app/shared/components/editor-request-notes-only/editor-request-notes-only.component';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrService } from 'ngx-toastr';
import { RequestNotesService } from 'src/app/shared/services/requestNotes/request-notes.service';
import { CircularProgressSetting } from 'src/app/shared/models/circular-progress-setting.model';
import { RequestNotesData } from 'src/app/shared/models/request-notes-data.model';
import { ProjectLicenseRequestDataComponent } from '../../components/project-license-request-data/project-license-request-data.component';
import { ProjectLicenseRequestNotesComponent } from '../../components/project-license-request-notes/project-license-request-notes.component';
import { ProjectLicenseRequestTimeLineComponent } from '../../components/project-license-request-time-line/project-license-request-time-line.component';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { ProjectLicenseServiceDetailsService } from '../../services/project-license-service-details.service';
import { DataVisibilityOfLicenseProjectService } from '../../../license/services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Router } from '@angular/router';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';

@Component({
  selector: 'app-license-project-request-detail',
  templateUrl: './license-project-request-detail.component.html',
  styleUrls: ['./license-project-request-detail.component.scss']
})
export class LicenseProjectRequestDetailComponent implements OnInit {

  constructor(private licenseProjectService: LincenseRequestProjectService,
    private _popupService: PopupService,
    private _toastrService: ToastrService,
    private _tabsService: TabsService,
    private _router: Router,
    private _projectLicenseServiceDetailsService: ProjectLicenseServiceDetailsService,
    private _requestNotesService: RequestNotesService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
  ) { }

  subscriptions: Subscription[] = [];
  selectedRequest: LicenseProjectRequestDto = {} as LicenseProjectRequestDto;
  selectedRequestId: string = ''
  get externalStatusId() {
    return LicenseProjectRequestStatusEnum;
  }
  get ButtonType() {
    return ButtonType;
  }
  RequestNotes: RequestNotesData | null = null;
  StudyDaysProgressSetting: CircularProgressSetting = new CircularProgressSetting();

  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [
      {
        icon: '',
        title: 'بيانات الطلب',
        Component: ProjectLicenseRequestDataComponent, //RequestDataComponent,
        disabled: false,
        isVisible: true,
        id: 'ProjectLicenseRequestDataComponent'
      },
      {
        icon: '',
        title: 'ملاحظات الطلب',
        Component: ProjectLicenseRequestNotesComponent, //RequestNotesComponent,
        disabled: false,
        isVisible: true,
        id: 'ProjectLicenseRequestNotesComponent'
      },
      {
        icon: '',
        title: 'سجل أحداث الطلب',
        Component: ProjectLicenseRequestTimeLineComponent,
        disabled: false,
        isVisible: true,
        id: 'ProjectLicenseRequestTimeLineComponent'
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
  requestDetailsRoute: string = ''
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
  };
  ngOnInit() {
    this.updateTabContent();
    this.getSelectedRequestIdFromLocalStorage();
    this.observePopupEvents();
    this.observeRequestNotes();
  }

  private updateTabContent() {
    this._tabsService.updateTabContent(this.tabContent);
  }

  private getSelectedRequestIdFromLocalStorage() {
    let licenseProjectRequestId = this.licenseProjectService.getSelectedActiveProjectRequestIdFromLocalStorage();
    if (licenseProjectRequestId) {
      this.selectedRequestId = licenseProjectRequestId;
      this.getRequestHeaderDetails()
    }
  }



  private updateDataVisibilityOfLicenseProject() {
    let data: string[] = []
    this._dataVisibilityOfLicenseProjectService.updateDataVisibilityOfLicenseProject(
      data
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
        item.isVisable = this.selectedRequest.licenseProjectRequestEventStatus.allowCompile;
        item.isDisables = false;
      });
    }
  }

  private observeRequestNotes(): void {
    this.subscriptions.push(
      this._requestNotesService.RequestNotes$.subscribe(
        (res: RequestNotesData | null) => {
          if (res) this.RequestNotes = res;
        }
      )
    );
  }
  editRequest() {
    console.log(this.selectedRequest);

    this.redirectRequestSummary(this.selectedRequest.id, this.selectedRequest.licenseProjectRequestTypeId)
  }

  redirectRequestSummary(id: string, requestType: number) {
    
    this.projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(id)
    switch (requestType) {
      case LicenseProjectRequestTypeEnum.CancelLicense:
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.cancelLicenseSummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ReActivateLicense:
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.reactivaiteLicenseSummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangePlan:
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanSummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeEngineering:
        
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changeEngineerSummary}`;
        break;
      case LicenseProjectRequestTypeEnum.IncreaseOrDecreaseUnitsNumberOrProjectArea:
        
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changespaceorunitssummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeApprovedBuyerOrTenantContractsOfProject:
        
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changebuyerortenantcontractsummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeProjectName:
        
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changeprojectnamesummary}`;
        break;
      case LicenseProjectRequestTypeEnum.AddingDelegator:
        
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.addingdelegatorsummary}`;
        break;
      case LicenseProjectRequestTypeEnum.RemovingDelegator:
        
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.removingdelegatorsummary}`;
        break;
      case LicenseProjectRequestTypeEnum.ChangeOrAddLicenseProjectUnitModel:
        
        this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changeoraddunitmodelsummary}`;
        break;

        case LicenseProjectRequestTypeEnum.ChangeAccountant:
          this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.charteredAccountantRequestSummary}`;
        break;

        case LicenseProjectRequestTypeEnum.ChangeAccountKeeper:
          this.requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.accountKeeperRequestSummary}`;
        break;


    }
    this._router.navigate([this.requestDetailsRoute]);
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
      this._projectLicenseServiceDetailsService.getRequestHeaderDetails(this.selectedRequestId).subscribe(response => {
        if (response) {
          this.selectedRequest = response;
          this._projectLicenseServiceDetailsService.selectRequest$.next(response);
          this.updateDayProgressSettings()
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
        (this.selectedRequest.licenseProjectRequestEventStatus.allowCustomerFeedbackRemainingStudyPeriod /
          this.selectedRequest.licenseProjectRequestEventStatus.allowCustomerFeedbackPeriod) *
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
      })
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
      })
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
        })
    );
  }

  private emitDataIsUpdate() {
    this._projectLicenseServiceDetailsService.dataIsUpdate.emit();
  }

  private showNotificationOFsentNotes() {
    this._toastrService.success('تم إرسال الملاحظات بنجاح!');
  }


  ngOnDestroy(): void {
    // this.resetSelectRequest();
    // this.resetDataVisibilityOfLicenseProject();
    //this.licenseProjectService.clearActiveProjectRequestFromLocalStorage();
    this._projectLicenseServiceDetailsService.selectRequest$.next(null);
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}
