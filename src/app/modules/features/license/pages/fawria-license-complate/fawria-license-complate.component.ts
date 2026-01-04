import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { FawriaArchitecturalUnitsAndDesignsComponent } from '../../components/fawria-architectural-units-and-designs/fawria-architectural-units-and-designs.component';
import { FawriaEngineeringSupervisionStaffComponent } from '../../components/fawria-engineering-supervision-staff/fawria-engineering-supervision-staff.component';
import { FawriaUnifiedSalesModelComponent } from '../../components/fawria-unified-sales-model/fawria-unified-sales-model.component';
import { FawriaEscrowAccountComponent } from '../../components/fawria-escrow-account/fawria-escrow-account.component';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseRequestService } from '../../services/license-request.service';
import {
  FarzStatusWhenNaturalTypeUnitDto,
  RequestSuccessResponse,
  RequestValidation,
} from '../../dataModels/request-validation.model';
import { PopupData, confirmationPopupData, notePopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseRequestValidationPopupComponent } from '../../components/license-request-validation-popup/license-request-validation-popup.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { ProjectApprovalsService } from '../../services/licenseProjects/project-approvals.service';
import { TabCode } from '../../models/tab-code.model';
import { EditorRequestNotesOnlyComponent } from 'src/app/shared/components/editor-request-notes-only/editor-request-notes-only.component';
import { ApprovalComponent } from '../../components/approval/approval.component';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { GoogleAnalyticsService } from 'src/app/shared/services/GoogleAnalytics.service';
import { RequestStep } from '../fawria-license-details/fawria-license-details.component';
import { ProjectQuantitiesTableComponent } from '../../components/project-quantities-table/project-quantities-table.component';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectCompletionData } from '../../dataModels/license-project-model.dto';
import { FarzRequestStatusEnum } from '../../models/license-details.model';
import { LicenseRequestHeaderService } from '../../services/license-request-header.service';

@Component({
  selector: 'app-fawria-license-complate',
  templateUrl: './fawria-license-complate.component.html',
  styleUrls: ['./fawria-license-complate.component.scss'],
})
export class FawriaLicenseComplateComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  requestSteps: RequestStep[] = [
    {
      title: 'إنشاء طلب الترخيص رقم 133132323328',
      status: 'completed',
      statusText: 'تم الإنشاء',
      date: '20/20/2020',
    },
    {
      title: 'إرسال الإخطارات لبنك المضمون',
      status: 'current',
      statusText: 'قيد الانتظار',
    },
    {
      title: 'إرسال الإخطارات للمحاسب والمستشار',
      status: 'pending',
      statusText: 'قيد الانتظار',
    },
    {
      title: 'فتح حساب الضمان',
      status: 'pending',
      statusText: 'قيد الانتظار',
    },
    {
      title: 'سداد الفاتورة',
      status: 'pending',
      statusText: 'قيد الانتظار',
    },
    {
      title: 'تهميش المضمون',
      status: 'pending',
      statusText: 'قيد الانتظار',
    },
    {
      title: 'إصدار الرخصة',
      status: 'pending',
      statusText: 'قيد الانتظار',
    },
  ];

  localization = {
    editPaymentandAdditionalTermsTitle: 'تعديل الدفعات و البنود الإضافية',
    send: 'إرسال الطلب',
    verify: 'استكمال ملف المشروع',
    approvalDecisions: 'الموافقه على الاقرارات',
    farzRejectionMessage: 'تعذر القبول لوجود ملاحظات!',
    handleFarzNotes: 'معالجة ملاحظات فرز',
    farzApprovedMessage: 'قبول الطلب من فرز.',
    farzWarningMessage: 'قيد المراجعة من قبل فرز.',
    integrationFailedMessage:'تعذر التكامل لسبب تقني!',
    ResendToFarz:'إعادة المحاولة'

  };
  showFarzRejectionAlert: boolean = false;
  hideFarzSuccessBanner: boolean = false;
  hideFarzWarningBanner: boolean = false;
  mainTabsComponentList: tabsComponent[] = [
    {
      number: 1,
      title: 'الوحدات والتصاميم المعمارية',
      Component: FawriaArchitecturalUnitsAndDesignsComponent,
      disabled: false,
      id: 'MainData',
      errNum: 0,
      tabCode: TabCode.fawriaArchitecturalUnitsAndDesigns,
      tabErrors: [],
      isVisible: true,
      isCompleted: false
    },
    {
      number: 2,
      title: 'جدول الكميات',
      Component: ProjectQuantitiesTableComponent,
      disabled: false,
      id: 'ProjectData',
      errNum: 0,
      tabCode: TabCode.fawriaProjectQuantitiesTable,
      tabErrors: [],
      isVisible: true,
      isCompleted: false
    },
    {
      number: 3,
      title: 'كادر الإشراف الهندسي',
      Component: FawriaEngineeringSupervisionStaffComponent,
      disabled: false,
      id: 'FeasibilityStudy',
      errNum: 0,
      tabCode: TabCode.fawriaEngineeringSupervisionStaff,
      tabErrors: [],
      isVisible: true,
      isCompleted: false
    },
    {
      number: 4,
      title: 'نموذج البيع الموحد',
      Component: FawriaUnifiedSalesModelComponent,
      disabled: false,
      id: 'ProjectParties',
      errNum: 0,
      tabCode: TabCode.fawriaUnifiedSalesModel,
      tabErrors: [],
      isVisible: true,
      isCompleted: false
    },
    {
      number: 5,
      title: 'تفعيل حساب الضمان',
      Component: FawriaEscrowAccountComponent,
      disabled: false,
      id: 'fawriaEscrowAccount',
      errNum: 0,
      tabCode: TabCode.fawriaEscrowAccount,
      tabErrors: [],
      isVisible: true,
      isCompleted: false
    },
  ];
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [],
  };
  disabledSend: boolean = false;
  requestSubmittedSuccessfully: boolean = false;
  requestValidationData: RequestValidation | null = null;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  availabilityToUpdate: boolean = false;
  editFarzNoteRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.farzNote}`;

  constructor(
    private _licenseRequestService: LicenseRequestService,
    private _toastrNotificatioService: ToastrNotificatioService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _requestService: LicenseRequestHeaderService,
    private _projectApprovalsService: ProjectApprovalsService,
    private _googleAnalyticsService: GoogleAnalyticsService,
    private _tabsService: TabsService,
    private _router: Router,
  ) { }
  ngOnInit(): void {
    this.updateTabContent();
    this.getLicenseProjectIdStorage();
    this.observeDataVisibilityOfLicenseProject();
    this.getApprovalSubject();
    this.getAvailabilityToUpdateFromLocalStorage();
    this.observeUpdateCompletedPercentage();
    this.observeconfirmAction()
    // this.observePopupEvents();
    this._googleAnalyticsService.trackEvent(
      'License Loading',
      'License Summary View Page',
      'License Summary'
    );
    this._googleAnalyticsService.trackEvent(
      'Testing',
      'License Summary View Page',
      'License Summary'
    );

  
  }

  observeUpdateCompletedPercentage() {
    this._licenseRequestService.updatedCompletePercentage.subscribe(res => {
      this.GetIsProfileCompleted();
      this.GetCompletedLicenseProjectProfileTaps();
    })
  }

  completedTapCodes: string[] = [];
  private observeUpdateCompletedTapCodes() {
    this._licenseRequestService.updateCompletedTapCodesIsClicked.subscribe(
      (res) => {
        this.GetCompletedLicenseProjectProfileTaps();
      }
    );
  }

  GetCompletedLicenseProjectProfileTaps() {
    this._dataVisibilityOfLicenseProjectService
      .GetCompletedLicenseProjectProfileTaps(this.licenseProjectId!)
      .subscribe((res) => {
        
        this.completedTapCodes = res;

        // Update isCompleted for tabs that are in completedTapCodes
        this.mainTabsComponentList.forEach(tab => {
          if (tab.tabCode && this.completedTapCodes.includes(tab.tabCode)) {
            tab.isCompleted = true;
          }
        });

      });
  }

  private getAvailabilityToUpdateFromLocalStorage() {
    this.availabilityToUpdate =
      this._sharedLicenseProjectService.getAvailabilityToUpdateFromLocalStorage() as boolean;
  }

  getApprovalSubject(): void {
    this.subscriptions.push(
      this._projectApprovalsService
        .getApprovalSubject()
        .subscribe((disabledSend) => {
          this.disabledSend = disabledSend as boolean;
        })
    );
  }

  private observeDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainTab(
      this.subscriptions,
      this.mainTabsComponentList,
      true,
      false
    );
  }

  private updateTabContent() {
    this.tabContent.tabsComponentList = this.mainTabsComponentList;
    this._tabsService.updateTabContent(this.tabContent);
    this._tabsService.updateActiveTabIndex(0);
    this._tabsService.updateActiveVerticalTabIndex(0);
  }

  private removeLicenseProjectIdfromLocalStorage(): void {
    localStorage.removeItem('licenseProjectId');
  }

  private resetRequestValidation() {
    this._licenseRequestService.updateRequestValidation(null);
  }
  private GetLicenseRequestHeadersByLicenseProjectId() {
    this.subscriptions.push(
      this._dataVisibilityOfLicenseProjectService
        .GetLicenseProjectProfileCompleteTap(
          this.licenseProjectId as string,
          true
        )
        .subscribe((res: string[]) => {
          this.updateDataVisibilityOfLicenseProject(res);
        })
    );
  }

  private updateDataVisibilityOfLicenseProject(data: string[]) {
    this._dataVisibilityOfLicenseProjectService.updateDataVisibilityOfLicenseProject(
      data
    );
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.GetLicenseRequestHeadersByLicenseProjectId();
      this.GetCompletedLicenseProjectProfileTaps();
      this.observeUpdateCompletedTapCodes();
      this.GetFarzStatusWhenNaturalTypeUnit();
      this.GetIsProfileCompleted();
    }
  }

  resetDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.resetDataVisibilityOfLicenseProject();
  }

  farzRequestStatus = FarzRequestStatusEnum;
  typeCode: string | null = null;
  // licenseProjectId: string | null = null;
  farzStatusWhenNaturalTypeUnit: FarzStatusWhenNaturalTypeUnitDto = {} as FarzStatusWhenNaturalTypeUnitDto
  GetFarzStatusWhenNaturalTypeUnit() {
    this.subscriptions.push(
      this._licenseRequestService.GetFarzStatusWhenNaturalTypeUnit(this.licenseProjectId as string).subscribe((res: FarzStatusWhenNaturalTypeUnitDto | null) => {
        if (res) {
          
          this.farzStatusWhenNaturalTypeUnit = res;
          // Check if status indicates rejection (you may need to adjust this condition based on actual status values)
          if (res.licenseProjectFarzRequestStatusId) {
            this.showFarzRejectionAlert = true;
          }
        }
      })
    );
  }

  verify() {
    let licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (!licenseProjectId) return;
    this.subscriptions.push(
      this._licenseRequestService.SendFawriaLicenseByProjectId(licenseProjectId, [TabCode.fawriaProjectQuantitiesTable, TabCode.fawriaEngineeringSupervisionStaff, TabCode.fawriaUnifiedSalesModel, TabCode.fawriaArchitecturalUnitsAndDesigns, TabCode.fawriaEscrowAccount]).subscribe((res: RequestValidation | RequestSuccessResponse | null) => {
        if (res) {
          
          if ('id' in res && 'requestCode' in res && 'typeCode' in res) {
            this.typeCode = res.typeCode
            this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(res.licenseProjectId);
            this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(res.id);
            this._toastrNotificatioService.showSuccess('تم الحفظ والتحقق بنجاح')
            this._licenseRequestService.updateCompletedTapCodesIsClicked.emit();
            this._licenseRequestService.updatedCompletePercentage.emit();
            this.GetIsProfileCompleted();
            // this.openConfirmaDialog(res.requestCode as string);
          } else {
            this.updateRequestValidation(res as RequestValidation);
            this.openValidationDialog();
          }
        }
      })
    )
  }

  isProfileCompleted: boolean = false;
  completedProfilePercentage: number = 0
  isProjectHasUnitForFarzIntegration: boolean = false;
  GetIsProfileCompleted() {
    let licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (!licenseProjectId) return;
    this.subscriptions.push(
      this._licenseRequestService.GetLicenseProjectCompletionData(licenseProjectId).subscribe((res: LicenseProjectCompletionData | null) => {
        if (res?.isProfileCompleted)
          this._sharedLicenseProjectService.setIsProfileCompletedInLocalStorage('true');
        else if (!res?.isProfileCompleted)
          this._sharedLicenseProjectService.setIsProfileCompletedInLocalStorage('false');

        if (res) {
          this.isProfileCompleted = res.isProfileCompleted;
          this.completedProfilePercentage = Math.min(100, Math.max(0, res.completedProfilePercentage));
          this.isProjectHasUnitForFarzIntegration = res.isProjectHasUnitForFarzIntegration
        }

      })
    )
  }

  isUpdatePaymentTermsModalFlag: boolean = false;

  public openPaymentTermsModal(): void {
    let licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (!licenseProjectId) return;

    this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(licenseProjectId);

    this.isUpdatePaymentTermsModalFlag = true;

    const navigationPath = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.paymentTermsTabs}`;
    this._router.navigate([navigationPath], { queryParams: { isOpenedWhenComplated: 'true' } });
  }


  handleFarzNotes(): void {

    // if (this.selectedRequest) {
    //   this._sharedLicenseProjectService.setLicenseAvailabilityToUpdateInLocalStorage(
    //     this.selectedRequest.licenseProject.availabilityToUpdate
    //   );
    //   this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
    //     this.selectedRequest.licenseProjectId
    //   );
    //   this._sharedLicenseProjectService.setfacilityIdInLocalStorage(
    //     this.selectedRequest.facilityId
    //   );
    
    let licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (!licenseProjectId) return;
    this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(licenseProjectId);

    this._sharedLicenseProjectService.setLicenseAvailabilityToUpdateFarzInLocalStorage(true);


    // Navigate to edit farz notes page
    this._router.navigate([this.editFarzNoteRoute]);
  }

  closeFarzSuccessBanner(): void {
    this.hideFarzSuccessBanner = true;
  }

  closeFarzWarningBanner(): void {
    this.hideFarzWarningBanner = true;
  }

  send() {
    let licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (!licenseProjectId) return;
    this.subscriptions.push(
      this._licenseRequestService
        .SendByProjectId(licenseProjectId)
        .subscribe((res: RequestValidation | RequestSuccessResponse | null) => {
          if (res) {
            if ('id' in res && 'requestCode' in res && 'typeCode' in res) {
              this.typeCode = res.typeCode;
              this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
                res.licenseProjectId
              );
              this.requestSubmittedSuccessfully = true;
              this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(
                res.id
              );
              this.openConfirmaDialog(res.requestCode as string);
            } else {
              this.updateRequestValidation(res as RequestValidation);
              this.openValidationDialog();
            }
          }
        })
    );
  }
  approvalDecisions() { }
  public openCompilNotesDialog() {
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

  licenseLink(): string {
    if (this.typeCode === 'FSRSU') {
      this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
        this.licenseProjectId as string
      );
      return `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseList}`;
    } else
      return `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseDetails}`;
    return '';
  }
  openConfirmaDialog(res: string): void {
    // Check if it's a fawria license type
    if (this.typeCode === 'FSRSU') {
      // Show regular success popup
      let Data = {
        imagePath: 'assets/images/auth/ForgotPass.svg',
        title: 'تم إرسال الطلب بنجاح !',
        staticMessage: 'تم إنشاء الاتفاقيات بين الأطراف وفي انتظار موافقتهم',
        dynamicMessage: res,
        buttonText: 'متابعة طلبك',
        buttonLink: this.licenseLink(),

        // surveyTitle:'نأمل منكم تقييم تجربتكم عبر الرابط التالي',
        // surveyLink:'https://survey.rega.gov.sa/s/cma9hk9c3000ec1es1bwvq82d'
      } as notePopupData;
      this._popupService.updateNotePopupData(Data);

      // Show fawria certificate popup
      // let fawriaData = {
      //   title: "",
      //   component: FawriaCertificateComponent,
      //   id: "FawriaCertificateComponent",
      //   disableClose: true
      // } as PopupData;
      // this._popupService.updatePopupData(fawriaData);
    } else {
      // Show regular success popup
      let Data = {
        imagePath: 'assets/images/auth/ForgotPass.svg',
        title: 'تم ارسال الطلب بنجاح',
        staticMessage: 'تم ارسال طلبك بنجاح ويمكنك عرض الطلب',
        dynamicMessage: res,
        buttonText: 'عرض الطلب',
        buttonLink: this.licenseLink(),

        surveyTitle: 'نأمل منكم تقييم تجربتكم عبر الرابط التالي',
        surveyLink: 'https://survey.rega.gov.sa/s/cma9hk9c3000ec1es1bwvq82d',
      } as notePopupData;
      this._popupService.updateNotePopupData(Data);
    }
  }
  openValidationDialog(): void {
    let Data = {
      title: `التحقق من بيانات المشروع`,
      component: LicenseRequestValidationPopupComponent,
      id: 'LicenseRequestValidationPopupComponent',
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
  // popup
  // private observePopupEvents(): void {
  //   // this.observecancelAction()
  //   this.observeconfirmAction()
  // }
  // private observeconfirmAction() {
  //   this.subscriptions.push(
  //     this._popupService.confirmAction.subscribe((res: PopupData) => {
  //       if(res.id == "LicenseRequestValidationPopupComponent"){
  //         this.closeDialog();
  //       }
  //     })
  //   )
  // }
  // private closeDialog(): void {
  //   this._popupService.dismissDialog()
  // }
  private updateRequestValidation(data: RequestValidation) {
    this._licenseRequestService.updateRequestValidation(
      data as RequestValidation
    );
  }
  private removeAvailabilityToUpdatefromLocalStorage(): void {
    this._sharedLicenseProjectService.removeAvailabilityToUpdatefromLocalStorage();
  }

  ngOnDestroy(): void {
    // this.removeAvailabilityToUpdatefromLocalStorage();
    // if(!this.isUpdatePaymentTermsModalFlag) this.removeLicenseProjectIdfromLocalStorage();
    this.resetRequestValidation();
    this.resetDataVisibilityOfLicenseProject();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  // popup
  // private observePopupEvents(): void {
  //   this.observecancelAction();
  //   this.observeconfirmAction();
  // }
  // private observecancelAction() {
  //   this.subscriptions.push(
  //     this._popupService.cancelAction.subscribe((res: PopupData) => {
  //       console.log(res);
  //     })
  //   );
  // }

  // private observeconfirmAction() {
  //   this.subscriptions.push(
  //     this._popupService.confirmAction.subscribe((res: PopupData) => {
  //       switch (res.id) {
  //         case ButtonType.allowCompile:
  //           this.compile();
  //           break;
  //         }
  //     })
  //   );
  // }
  // private compile() {
  //   this.subscriptions.push(
  //     this._licenseDetailsService
  //       .compile(
  //         this.selectedRequestID as string,
  //         this.RequestNotes?.notes as string,
  //         this.selectedRequest?.licenseRequestCustomerHeaderEventStatus.allowCompileId as number
  //       )
  //       .subscribe((res: boolean) => {
  //         if (res) {
  //           this.closeDialog();
  //           this.emitDataIsUpdate();
  //           this.getLicenseRequestHeaderByRequestId();
  //           this.showNotificationOFsentNotes();
  //         }
  //       })
  //   );
  // }
  openApprovalDialog(): void {
    let Data = {
      title:
        'يجب الموافقه على جميع الاقرارات الخاصة بالرخصة حتى يتم ارسال الطلب',
      component: ApprovalComponent,
      id: 'ApprovalComponent',
      disableClose: true,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  openConfirmtionSendTOFarzDialog() {
    let obj = {
      id: 'sendToFarzConfirmation',
      staticMessage: "هل انت متأكد من اعادة ارسال الطلب لفرز",
      dynamicMessage: "",
      secondeStaticMessage: '',
      acceptButtonText: 'نعم'
    } as confirmationPopupData
    this._popupService.updateConfirmationPopupData(obj);
  }

    private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        if (res.id === 'sendToFarzConfirmation') {
          this.updateFarzStatus();
        }
      })
    )
  }


  private updateFarzStatus() {
    let licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (!licenseProjectId) return;

    this.subscriptions.push(
      this._requestService.UpdateFarzStatus(licenseProjectId).subscribe(
        (res) => {

          if (res.isDone) {
            this.setSelectedRequestIdInLocalStorage(res.data.id as string);
            this.closeDialog();
            if (res.data) {
              this.isProjectHasUnitForFarzIntegration=false;
          }
        }
        }
      )
    );
  }

  setSelectedRequestIdInLocalStorage(selectedRequestId: string) {
    if (selectedRequestId)
      this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(selectedRequestId as string)
    else
      this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(this.licenseProjectId as string)
  }


  private closeDialog(): void {
    this._popupService.dismissDialog()
  }
}
