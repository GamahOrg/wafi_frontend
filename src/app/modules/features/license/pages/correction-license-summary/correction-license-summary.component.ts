import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { TabCode } from '../../models/tab-code.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { CorrectionLicenseProjectDeedsContainerComponent } from '../../components/correction-units/correction-license-project-deeds-container/correction-license-project-deeds-container.component';
import { CorrectionUnitsAndDesignsContainerComponent } from '../../components/correction-units/correction-units-and-designs-container/correction-units-and-designs-container.component';
import {
  RequestSuccessResponse,
  RequestValidation,
} from '../../dataModels/request-validation.model';
import {
  confirmationPopupData,
  notePopupData,
  PopupData,
} from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { CorrectionLicenseRequestValidationPopupComponent } from '../../components/correction-units/correction-license-request-validation-popup/correction-license-request-validation-popup.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { ProjectApprovalsService } from '../../services/licenseProjects/project-approvals.service';
import { CorrectingUnitsService } from '../../services/correct-units/correcting-units.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-correction-license-summary',
  templateUrl: './correction-license-summary.component.html',
  styleUrls: ['./correction-license-summary.component.scss'],
})
export class CorrectionLicenseSummaryComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  requestSubmittedSuccessfully: boolean = false;
  disabledSend: boolean = false;
  availabilityToUpdate: boolean = false;
  editFarzNoteRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.correctionFarzNote}`;

  localization = {
    pageTitle: 'تصحيح بيانات الوحدات',
    tab1Title: 'الصكوك ورخص البناء',
    tab2Title: 'الوحدات والتصاميم المعمارية',
    send: 'إرسال الطلب',
    farzRejectionMessage: 'تعذر القبول لوجود ملاحظات!',
    handleFarzNotes: 'معالجة ملاحظات فرز',
    farzApprovedMessage: 'قبول الطلب من فرز.',
    farzWarningMessage: 'قيد المراجعة من قبل فرز.',
    integrationFailedMessage: 'تعذر التكامل لسبب تقني!',
    ResendToFarz: 'إعادة المحاولة',
  };

  mainTabsComponentList: tabsComponent[] = [
    {
      number: 1,
      title: 'الصكوك ورخص البناء',
      Component: CorrectionLicenseProjectDeedsContainerComponent,
      disabled: false,
      id: 'CorrectionDeedsAndLicenses',
      errNum: 0,
      tabCode: TabCode.correctionDeedsAndLicenses,
      tabErrors: [],
      isVisible: true,
      isCompleted: false,
    },
    {
      number: 2,
      title: 'الوحدات والتصاميم المعمارية',
      Component: CorrectionUnitsAndDesignsContainerComponent,
      disabled: false,
      id: 'CorrectionUnitsAndDesigns',
      errNum: 0,
      tabCode: TabCode.correctionUnitsAndDesigns,
      tabErrors: [],
      isVisible: true,
      isCompleted: false,
    },
  ];

  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [],
  };

  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  completedTapCodes: string[] = [];

  constructor(
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _tabsService: TabsService,
    private _popupService: PopupService,
    private _correctionRequestHeader: CorrectingUnitsService,
    private _projectApprovalsService: ProjectApprovalsService,
    private _router: Router,
  ) {}
  allowCompile: boolean = false;
  ngOnInit(): void {
    // Initialize tabs immediately without backend dependency

    //--
    this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
      'dce3de54-014d-4cad-be4f-ebb6fc6fd004',
    );
    this.allowCompile =
      this._sharedLicenseProjectService.getAllowCorrectionCompileFromLocalStorage();
    this.updateTabContent();
    this.getLicenseProjectIdStorage();
    this.getApprovalSubject();
    this.getAvailabilityToUpdateFromLocalStorage();
  }

  handleFarzNotes(): void {
    this._sharedLicenseProjectService.setCorrectionAvailabilityToUpdateFarzInLocalStorage(
      true,
    );
    // Navigate to edit farz notes page
    this._router.navigate([this.editFarzNoteRoute]);
  }
  private getAvailabilityToUpdateFromLocalStorage() {
    this.availabilityToUpdate =
      this._sharedLicenseProjectService.getAvailabilityToUpdateCorrectionFarzFromLocalStorage() as boolean;
  }

  getApprovalSubject(): void {
    this.subscriptions.push(
      this._projectApprovalsService
        .getApprovalSubject()
        .subscribe((disabledSend) => {
          this.disabledSend = disabledSend as boolean;
        }),
    );
  }
  // private observeUpdateCompletedTapCodes() {
  //   this._correctionRequestHeader.updateCompletedTapCodesIsClicked.subscribe(
  //     (res) => {
  //       this.GetCompletedLicenseProjectProfileTaps();
  //     }
  //   );
  // }

  GetCompletedLicenseProjectProfileTaps() {
    if (
      !this.licenseProjectId ||
      this.licenseProjectId === '00000000-0000-0000-0000-000000000000'
    ) {
      return;
    }
    this._dataVisibilityOfLicenseProjectService
      .GetCompletedLicenseProjectProfileTaps(this.licenseProjectId!)
      .subscribe((res) => {
        this.completedTapCodes = res;

        this.mainTabsComponentList.forEach((tab) => {
          if (tab.tabCode && this.completedTapCodes.includes(tab.tabCode)) {
            tab.isCompleted = true;
          }
        });
      });
  }

  private observeDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainTab(
      this.subscriptions,
      this.mainTabsComponentList,
      true,
      false,
    );
  }

  private updateTabContent() {
    this.tabContent.tabsComponentList = this.mainTabsComponentList;
    this._tabsService.updateTabContent(this.tabContent);
    this._tabsService.updateActiveTabIndex(0);
    this._tabsService.updateActiveVerticalTabIndex(0);
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (
      this.licenseProjectId &&
      this.licenseProjectId !== '00000000-0000-0000-0000-000000000000'
    ) {
      // Only call backend methods if we have a valid license project ID
      this.GetLicenseRequestHeadersByLicenseProjectId();
      this.GetCompletedLicenseProjectProfileTaps();
      //this.observeUpdateCompletedTapCodes();
      // Note: Not calling observeDataVisibilityOfLicenseProject() to keep tabs visible without backend dependency
      //this.observeUpdateCompletedPercentage();
    }
  }
  openConfirmaDialog(): void {
    let Data = {
      popupType: 'success',
      // imagePath: 'assets/images/auth/ForgotPass.svg',
      title: 'تم إرسال الطلب بنجاح',
      staticMessage: '',
      dynamicMessage: '',
      buttonText: 'متابعة الطلب',
      buttonLink: `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseList}`,
    } as notePopupData;
    this._popupService.updateNotePopupData(Data);
  }
  send() {
    let requestId =
      this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage();
    if (!requestId) return;
    this.openSendConfirmationPopup(requestId);
  }

  private openSendConfirmationPopup(requestId: string): void {
    const confirmationData: confirmationPopupData = {
      popupType: 'primary',
      id: 'sendCorrectionRequest',
      title: '',
      staticMessage: 'سيقوم النظام بحذف جميع الرخص الانشائية الغير مرتبطة بصك  <br> بالضغط على زر «تأكيد»، أقرّ بصحة جميع البيانات والمعلومات المدخلة',
      dynamicMessage: '',
      acceptButtonText: 'تأكيد',
    };

    this._popupService.updateConfirmationPopupData(confirmationData);

    const confirmSub = this._popupService.confirmAction.subscribe((data) => {
      if (
        data &&
        (data as confirmationPopupData).id === 'sendCorrectionRequest'
      ) {
        this._popupService.dismissDialog();
        this.submitRequest(requestId);
        confirmSub.unsubscribe();
      }
    });

    this.subscriptions.push(confirmSub);
  }

  private submitRequest(requestId: string): void {
    this.subscriptions.push(
      this._correctionRequestHeader
        .create(requestId, [
          TabCode.correctionDeedsAndLicenses,
          TabCode.correctionUnitsAndDesigns,
        ])
        .subscribe((res: any) => {
          if (res) {
            // if ('id' in res && 'requestCode' in res && 'typeCode' in res) {
            if (res.isDone) {
              //this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(res.licenseProjectId);
              this.requestSubmittedSuccessfully = true;
              // this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(res.id);
              this.openConfirmaDialog();
            } else {
              this.updateRequestValidation(res.data as RequestValidation);
              this.openValidationDialog();
            }
          }
        }),
    );
  }
  private updateRequestValidation(data: RequestValidation) {
    this._correctionRequestHeader.updateRequestValidation(
      data as RequestValidation,
    );
  }
  openValidationDialog(): void {
    let Data = {
      title: `التحقق من بيانات المشروع`,
      component: CorrectionLicenseRequestValidationPopupComponent,
      id: 'CorrectionLicenseRequestValidationPopupComponent',
      buttons: [
        {
          icon: '',
          title: 'إلغاء',
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openNotesDialog()
        },
        {
          icon: '',
          title: 'إستكمال البيانات',
          actionType: ButtonType.confirm,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openAssignEmployeeDialog()
        },
      ],
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  private GetLicenseRequestHeadersByLicenseProjectId() {
    this.subscriptions.push(
      this._dataVisibilityOfLicenseProjectService
        .GetLicenseProjectProfileCompleteTap(
          this.licenseProjectId as string,
          true,
        )
        .subscribe((res: string[]) => {
          this.updateDataVisibilityOfLicenseProject(res);
        }),
    );
  }

  private updateDataVisibilityOfLicenseProject(data: string[]) {
    this._dataVisibilityOfLicenseProjectService.updateDataVisibilityOfLicenseProject(
      data,
    );
  }

  resetDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.resetDataVisibilityOfLicenseProject();
  }

  ngOnDestroy(): void {
    this._sharedLicenseProjectService.removeAllowCorrectionCompilefromLocalStorage();
    // this._sharedLicenseProjectService.removeCorrectionUnitRequestIdfromLocalStorage();
    this.resetDataVisibilityOfLicenseProject();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
