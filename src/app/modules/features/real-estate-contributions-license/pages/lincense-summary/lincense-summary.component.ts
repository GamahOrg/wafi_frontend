import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tabs, tabsComponent } from 'src/app/shared/models/tabs.model';
import { MainDataComponent } from '../../components/main-data/main-data.component';
import { ProjectDataComponent } from '../../components/project-data/project-data.component';
import { FeasibilityStudyComponent } from '../../components/feasibility-study/feasibility-study.component';
import { ProjectPartiesComponent } from '../../components/project-parties/project-parties.component';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseRequestService } from '../../services/license-request.service';
import {
  RequestSuccessResponse,
  RequestValidation,
} from '../../dataModels/request-validation.model';
import { PopupData, notePopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseRequestValidationPopupComponent } from '../../components/license-request-validation-popup/license-request-validation-popup.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { DataVisibilityOfLicenseProjectService } from '../../services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { ProjectApprovalsService } from '../../services/licenseProjects/project-approvals.service';
import { TabCode } from '../../models/tab-code.model';
import { ApprovalComponent } from '../../components/approval/approval.component';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-lincense-summary',
  templateUrl: './lincense-summary.component.html',
  styleUrls: ['./lincense-summary.component.scss'],
})
export class LincenseSummaryComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  availabilityToUpdate: boolean = false;
  localization = {
    send: "إرسال الطلب",
    approvalDecisions:"الموافقة على الإقرارات",
  };
  mainTabsComponentList: tabsComponent[] = [
    {
      icon: 'person',
      title: 'البيانات الأساسية',
      Component: MainDataComponent,
      disabled: false,
      id: 'MainData',
      errNum: 0,
      tabCode: TabCode.mainData,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: 'holiday_village',
      title: 'بيانات المشروع',
      Component: ProjectDataComponent,
      disabled: false,
      id: 'ProjectData',
      errNum: 0,
      tabCode: TabCode.projectData,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: 'insert_drive_file',
      title: 'دراسة الجدوى',
      Component: FeasibilityStudyComponent,
      disabled: false,
      id: 'FeasibilityStudy',
      errNum: 0,
      tabCode: TabCode.feasibilityStudy,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: 'people',
      title: 'أطراف المشروع',
      Component: ProjectPartiesComponent,
      disabled: false,
      id: 'ProjectParties',
      errNum: 0,
      tabCode: TabCode.projectParties,
      tabErrors: [],
      isVisible: true,
    },
  ]
  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: [],
  };
  disabledSend:boolean=false;
  requestSubmittedSuccessfully:boolean=false;
  requestValidationData: RequestValidation | null = null;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  constructor(
    private _licenseRequestService: LicenseRequestService,
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _projectApprovalsService:ProjectApprovalsService
  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observeDataVisibilityOfLicenseProject();
    this.getApprovalSubject();
    this.getAvailabilityToUpdateFromLocalStorage();
  }

  private getAvailabilityToUpdateFromLocalStorage() {
    this.availabilityToUpdate = this._sharedLicenseProjectService.getAvailabilityToUpdateFromLocalStorage() as boolean;
  }
  getApprovalSubject():void{
    this.subscriptions.push(
      this._projectApprovalsService.getApprovalSubject().subscribe((disabledSend) => {
        this.disabledSend = disabledSend as boolean;
      })
    )
  }

  private observeDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainTab(this.subscriptions, this.mainTabsComponentList, true, false)
  }

  private removeLicenseProjectIdfromLocalStorage(): void {
    localStorage.removeItem('licenseProjectId');
  }

  private resetRequestValidation() {
    this._licenseRequestService.updateRequestValidation(null);
  }
  private GetLicenseRequestHeadersByLicenseProjectId() {
    this.subscriptions.push(
      this._dataVisibilityOfLicenseProjectService.GetLicenseRequestHeadersByLicenseProjectId(this.licenseProjectId as string).subscribe((res: string[]) => {
        this.updateDataVisibilityOfLicenseProject(res)
      })
    )
  }
  private updateDataVisibilityOfLicenseProject(data: string[]) {
    this._dataVisibilityOfLicenseProjectService.updateDataVisibilityOfLicenseProject(data)
  }
  private getLicenseProjectIdStorage(): void {
    
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) this.GetLicenseRequestHeadersByLicenseProjectId()
  }
  resetDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.resetDataVisibilityOfLicenseProject()
  }
  send() {
    
    let licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (!licenseProjectId) return;
    this.subscriptions.push(
      this._licenseRequestService.SendByProjectId(licenseProjectId).subscribe((res: RequestValidation | RequestSuccessResponse | null) => {
        if (res) {
          if ('id' in res && 'requestCode' in res) {
            this.requestSubmittedSuccessfully=true;
            this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(res.id); 
            this.openConfirmaDialog(res.requestCode as string);
          } else {
            this.updateRequestValidation(res as RequestValidation);
            this.openValidationDialog();
          }
        }
      })
    )
  }
  approvalDecisions()
  {

  }

  openConfirmaDialog(res: string): void {
    let Data = {
      imagePath: 'assets/images/auth/ForgotPass-rega.svg',
      title: 'تم انشاء الطلب بنجاح',
      staticMessage: 'تم انشاء طلبك بنجاح ويمكنك عرض الطلب',
      dynamicMessage: res,
      buttonText: 'عرض الطلب',
      buttonLink:
      Configuration.modules.realEstateContributions +
      '/' +
        Configuration.modules.realEstateContributionsLicense +
        '/' +
        Configuration.pages.realEstateContributionslicense.lincenseDetails,
        
        surveyTitle:'نأمل منكم تقييم تجربتكم عبر الرابط التالي',
        surveyLink:'https://survey.rega.gov.sa/s/cma9hk9c3000ec1es1bwvq82d'
    } as notePopupData;
    this._popupService.updateNotePopupData(Data);
  }
  openValidationDialog(): void {
    let Data = {
      title:
        `التحقق من بيانات المشروع`,
      component: LicenseRequestValidationPopupComponent,
      id:"LicenseRequestValidationPopupComponent",
      buttons: [
        {
          icon: "",
          title: "إلغاء",
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openNotesDialog()
        },
        {
          icon: "",
          title: "إستكمال البيانات",
          actionType: ButtonType.confirm,
          isVisable: true,
          isDisables: false,
          // onclick: () => this.openAssignEmployeeDialog()
        },
      ]
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
    this._sharedLicenseProjectService.removeAvailabilityToUpdatefromLocalStorage()
  }
  ngOnDestroy(): void {
    this.removeAvailabilityToUpdatefromLocalStorage()
    this.removeLicenseProjectIdfromLocalStorage();
    this.resetRequestValidation();
    this.resetDataVisibilityOfLicenseProject();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  openApprovalDialog(): void {

    let Data = {
      title: "يجب الموافقة على جميع الإقرارات الخاصة بالرخصة حتى يتم إرسال الطلب",
      component: ApprovalComponent,
      id: "ApprovalComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
}
