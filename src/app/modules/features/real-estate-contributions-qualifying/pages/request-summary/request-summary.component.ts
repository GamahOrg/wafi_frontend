import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import {
  RequestDetails,
  facilityDTO,
} from '../../dataModels/request-details.model';
import { RequestService } from '../../services/requests/request-service.service';
import {
  accordionComponent,
  accordionContent,
} from 'src/app/shared/models/accordion.model';
import { FormBuilder, Validators } from '@angular/forms';
import { CommercialRegistryComponent } from '../../components/commercial-registry/commercial-registry.component';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { RequestValidationPopupComponent } from '../../components/request-validation-popup/request-validation-popup.component';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData, notePopupData } from 'src/app/shared/models/popup.model';
import { QualificationServiceRequestService } from '../../services/qualification-type/qualification-service-request.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { RequestWafiTrainingComponent } from '../../components/request-wafi-training/request-wafi-training.component';
import { RequestNationalAddressesComponent } from '../../components/request-national-addresses/request-national-addresses.component';
import { RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent } from '../../components/request-accountants-completed-wafi-training-program-for-accounting-supervision/request-accountants-completed-wafi-training-program-for-accounting-supervision.component';
import { RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent } from '../../components/request-engineers-with-sufficient-training-for-the-engineering-consultant/request-engineers-with-sufficient-training-for-the-engineering-consultant.component';
import { RequestDistinctiveAdditionalTechnicalCapabilitiesComponent } from '../../components/request-distinctive-additional-technical-capabilities/request-distinctive-additional-technical-capabilities.component';
import { RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent } from '../../components/request-institutional-capabilities-and-additional-discriminatory-human-resources/request-institutional-capabilities-and-additional-discriminatory-human-resources.component';
import { RequestCertifiedFacilityEngineersComponent } from '../../components/request-certified-facility-engineers/request-certified-facility-engineers.component';
import { RequestTechnicalCapabilitiesRequirementsComponent } from '../../components/request-technical-capabilities-requirements/request-technical-capabilities-requirements.component';
import { RequestJobRequirementsAndHumanResourcesComponent } from '../../components/request-job-requirements-and-human-resources/request-job-requirements-and-human-resources.component';
import { RequestFinancialCapabilitiesRequirementsComponent } from '../../components/request-financial-capabilities-requirements/request-financial-capabilities-requirements.component';
import { RequestValidationService } from 'src/app/core/services/request-validation/request-validation.service';
import {
  RequestSuccessResponse,
  RequestValidation,
} from 'src/app/core/models/request-validation.model';
import { nationalAddressResponse } from '../../dataModels/national-address.model';
import { QualificationQualificatedAccountantDto } from '../../../facilities/dataModels/qualification-qualificated-accountant-dto';
import { QualifiedEngineersDto } from '../../../facilities/dataModels/qualified-engineers-dto';
import { AdditionTechnicalCapabilitiesRequirementsDto } from '../../../facilities/dataModels/additionTechnicalCapabilitiesRequirements.model';
import { QualificationAdditionInstitutionalCapacityAndHrRequirementDto } from '../../../facilities/dataModels/qualification-addition-institutional-capacity-and-hr-requirement-dto';
import { CertifiedEngineerDto } from '../../../facilities/dataModels/certified-engineer-dto';
import { QualificationTechnicalCapabilitiesRequirementFullDto } from '../../../facilities/dataModels/qualificationTechnicalCapabilitiesRequirement.model';
import { QualificationInstitutionalCapacityAndHrRequirementDto } from '../../../facilities/dataModels/qualificationInstitutionalCapacityAndHrRequirement.model';
import { financialCapabilityResponse } from '../../dataModels/financial-capability.model';
import { WafiTrainingDto } from '../../../facilities/dataModels/wafi-training-dto';
import { RequestPeriod } from '../../dataModels/enum/request-period.model';
import { RequestCodeEnum } from '../../dataModels/enum/request-code.model';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-request-summary',
  templateUrl: './request-summary.component.html',
  styleUrls: ['./request-summary.component.scss'],
})
export class RequestSummaryComponent implements OnDestroy {
  home = `../${Configuration.pages.facilities.facilityDashboard}`;
  requests = `../${Configuration.pages.realEstateContributionsQualifying.requests}`;
  createRequest = `../${Configuration.pages.realEstateContributionsQualifying.createRequest}/RED01`;
  confirmationicon = `../${Configuration.pages.realEstateContributionsQualifying.createRequest}/RED01`;
  subscriptions: Subscription[] = [];
  selectedRequest: null | RequestDetails = null;
  accordionContent: accordionContent = {
    oneAtATime: true,
    isAnimated: true,
    accordionComponentList: [
      {
        icon: '', // index = 0
        title: 'بيانات السجل التجاري',
        component: CommercialRegistryComponent,
        disabled: false,
        isVisible: false,
        id: 'CommercialRegistryComponent',
        isViewed: false,
      },
      {
        icon: '', // index = 1
        title: 'دريب الهيئة العامة للعقار للبيع على الخارطة',
        component: RequestWafiTrainingComponent,
        id: 'RequestWafiTrainingComponent',
        disabled: false,
        isVisible: false,
        isViewed: false,
      },
      {
        icon: '', // index = 2
        title: 'متطلبات القدرات المالية',
        component: RequestFinancialCapabilitiesRequirementsComponent,
        id: 'RequestFinancialCapabilitiesRequirementsComponent',
        disabled: false,
        isVisible: false,
        isViewed: false,
      },
      {
        icon: '', // index = 3
        title: ' متطلبات القدرات المؤسسية و الموارد البشرية',
        component: RequestJobRequirementsAndHumanResourcesComponent,
        id: 'RequestJobRequirementsAndHumanResourcesComponent',
        disabled: false,
        isVisible: false,
        isViewed: false,
      },
      {
        icon: '', // index = 4
        title: 'متطلبات القدرات الفنية',
        component: RequestTechnicalCapabilitiesRequirementsComponent,
        id: 'RequestTechnicalCapabilitiesRequirementsComponent',
        disabled: false,
        isVisible: false,
        isViewed: false,
      },
      {
        icon: '', // index = 5
        title: 'موظفين الشركة المعتمدين',
        component: RequestCertifiedFacilityEngineersComponent,
        id: 'RequestCertifiedFacilityEngineersComponent',
        disabled: false,
        isVisible: false,
        isViewed: false,
      },
      {
        icon: '', // index = 6
        title: 'القدرات المؤسسية والموارد الإضافية',
        component:
          RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent,
        id: 'RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent',
        disabled: false,
        isVisible: false,
        isViewed: false,
      },
      {
        icon: '', // index = 7
        title: 'القدارت الفنية الإضافية',
        component: RequestDistinctiveAdditionalTechnicalCapabilitiesComponent,
        id: 'RequestDistinctiveAdditionalTechnicalCapabilitiesComponent',
        disabled: false,
        isVisible: false,
        isViewed: false,
      },
      {
        icon: '', // index = 8
        title:
          'مهندسي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للبيع على الخارطة للاستشاري الهندسي',
        component:
          RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent,
        id: 'RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent',
        disabled: false,
        isVisible: false,
        isViewed: false,
      },
      {
        icon: '', // index = 9
        title:
          'محاسبي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للإشراف المحاسبي',
        component:
          RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent,
        id: 'RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent',
        disabled: false,
        isVisible: false,
        isViewed: false,
      },
      {
        icon: '', // index = 10
        title: 'عنوان المنشأة',
        component: RequestNationalAddressesComponent,
        id: 'RequestNationalAddressesComponent',
        disabled: false,
        isVisible: false,
        isViewed: false,
      },
    ] as accordionComponent[],
  };

  requestValidationData: RequestValidation | null = null;
  userData: customerResponse | null = null;
  period: number = 0;
  periodString: string = '';
  code: string = '';
  RequestCode: string = '';
  renewRequest: boolean = false;
  facilityId: string = '';
  constructor(
    private _router: Router,
    private _requestService: RequestService,
    private _requestValidationService: RequestValidationService,
    private _userDataService: UserDataService,
    private _FB: FormBuilder,
    private _acoordionService: AccordionService,
    private _popupService: PopupService,
    private _qualificationServiceRequestService: QualificationServiceRequestService,
    private _activatedRoute: ActivatedRoute,
    private _toastrNotificatioService: ToastrNotificatioService
  ) {}

  ngOnInit(): void {
    this.observeRouterParams();
    this.updateAccordionContent();
    this.obseveCustomerData();
    this.observePopupEvents();
    this.getFacilityId();
  }
  getFacilityId() {
    this.facilityId =
      this._requestService.getFacilityIdFromLocalStorage() as string;
  }
  // popup
  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        // console.log(res)
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        // console.log(res)
        this.navigateToFacilityProfile();
        // this.closeDialog()
      })
    );
  }
  navigateToFacilityProfile(): void {
    // console.log(`/${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsFacilities}/${Configuration.pages.realEstateContributionsFacilities.facilityProfile}`)
    // this._router.navigate([`/${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsFacilities}/${Configuration.pages.realEstateContributionsFacilities.facilityProfile}`])

    if (this.renewRequest) {
      this._router.navigate([
        `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsFacilities}/${Configuration.pages.realEstateContributionsFacilities.facilityProfileWithRenewRequest}`,
      ]);
    } else {
      this._router.navigate([
        `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsFacilities}/${Configuration.pages.realEstateContributionsFacilities.facilityProfile}`,
      ]);
    }
  }
  observeRouterParams() {
    this.subscriptions.push(
      this._activatedRoute.params.subscribe((params) => {
        this.period = params['period'];
        this.code = params['code'] as RequestCodeEnum;
        this.periodString = RequestPeriod[this.period] as string;
        this.RequestCode =
          RequestCodeEnum[this.code as keyof typeof RequestCodeEnum];
        this.renewRequest =
          this._activatedRoute.snapshot.url[0].path ==
          Configuration.pages.qualifying.renewRequestSummary;
      })
    );
  }
  private updateAccordionContent() {
    this._acoordionService.updateAccordionContent(this.accordionContent);
  }

  declarationForm = this._FB.group({
    data: [false, Validators.required],
    resposability: [false, Validators.requiredTrue],
    promise: [false, Validators.requiredTrue],
  });

  obseveCustomerData() {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (this.userData && this.code) {
            this.getDraftRequest();
          }
        })
    );
  }

  getDraftRequest() {
    this.subscriptions.push(
      this._requestService
        .GetDraftRequestByFacilityId(
          this.userData?.facilities[0].id as string,
          this.code
        )
        .subscribe((facilities: facilityDTO[]) => {
          this.updateAllBehaviorSubject(facilities);
        })
    );
  }
  private updateAllBehaviorSubject(facilities: facilityDTO[]): void {
    if (facilities[0])
      this.updateEmployeeFacilityBasicInfoComponent(facilities[0]);
    if (facilities[0].qualificationQualificatedAccountants)
      this.updateEmployeeAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent(
        facilities[0].qualificationQualificatedAccountants
      );
    if (facilities[0].qualificationQualificatedEngineers)
      this.updateEmployeeEngineersWithSufficientTrainingForTheEngineeringConsultantComponent(
        facilities[0].qualificationQualificatedEngineers
      );
    if (
      facilities[0].qualificationNationalAddressDetailDto &&
      facilities[0].qualificationNationalAddressDetailDto.length > 0
    )
      this.updateEmployeeNationalAddressesComponent(
        facilities[0].qualificationNationalAddressDetailDto
      );
    if (
      facilities[0]
        .qualificationAdditionInstitutionalCapacityAndHrRequirements &&
      facilities[0].qualificationAdditionInstitutionalCapacityAndHrRequirements
        .length > 0
    )
      this.updateEmployeeInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent(
        facilities[0]
          .qualificationAdditionInstitutionalCapacityAndHrRequirements
      );
    if (
      facilities[0].additionTechnicalCapabilitiesRequirements &&
      facilities[0].additionTechnicalCapabilitiesRequirements.length > 0
    )
      this.updateEmployeeDistinctiveAdditionalTechnicalCapabilitiesComponent(
        facilities[0].additionTechnicalCapabilitiesRequirements
      );
    if (
      facilities[0].qualificationCertifiedEngineers &&
      facilities[0].qualificationCertifiedEngineers.length > 0
    )
      this.updateEmployeeCertifiedFacilityEngineersComponent(
        facilities[0].qualificationCertifiedEngineers
      );
    if (
      facilities[0].technicalCapabilitiesRequirements &&
      facilities[0].technicalCapabilitiesRequirements.length > 0
    )
      this.updateEmployeeTechnicalCapabilitiesRequirementsComponent(
        facilities[0].technicalCapabilitiesRequirements
      );
    if (
      facilities[0].qualificationWafiTrainings &&
      facilities[0].qualificationWafiTrainings.length > 0
    )
      this.updateEmployeeWafiTrainingComponent(
        facilities[0].qualificationWafiTrainings
      );
    if (
      facilities[0].qualificationFinancialCapabilityRequirements &&
      facilities[0].qualificationFinancialCapabilityRequirements.length > 0
    )
      this.updateEmployeeFinancialCapabilitiesRequirementsComponent(
        facilities[0].qualificationFinancialCapabilityRequirements
      );
    if (
      facilities[0].qualificationInstitutionalCapacityAndHrRequirements &&
      facilities[0].qualificationInstitutionalCapacityAndHrRequirements.length >
        0
    )
      this.updateEmployeeJobRequirementsAndHumanResourcesComponent(
        facilities[0].qualificationInstitutionalCapacityAndHrRequirements
      );
  }
  updateEmployeeFacilityBasicInfoComponent(facilities: facilityDTO): void {
    this._requestService.FacilityBasicInfo$.next(facilities);
    this.accordionContent.accordionComponentList[0].isVisible = true;
  }
  updateEmployeeWafiTrainingComponent(WafiTraining: WafiTrainingDto[]): void {
    this._requestService.WafiTraining$.next(WafiTraining);
    this.accordionContent.accordionComponentList[1].isVisible = true;
  }
  updateEmployeeFinancialCapabilitiesRequirementsComponent(
    qualificationFinancialCapabilityRequirements: financialCapabilityResponse[]
  ): void {
    this._requestService.FinancialCapabilitiesRequirements$.next(
      qualificationFinancialCapabilityRequirements
    );
    this.accordionContent.accordionComponentList[2].isVisible = true;
  }
  updateEmployeeJobRequirementsAndHumanResourcesComponent(
    qualificationInstitutionalCapacityAndHrRequirements: QualificationInstitutionalCapacityAndHrRequirementDto[]
  ): void {
    this._requestService.JobRequirementsAndHumanResources$.next(
      qualificationInstitutionalCapacityAndHrRequirements
    );
    this.accordionContent.accordionComponentList[3].isVisible = true;
  }
  updateEmployeeTechnicalCapabilitiesRequirementsComponent(
    technicalCapabilitiesRequirements: QualificationTechnicalCapabilitiesRequirementFullDto[]
  ): void {
    this._requestService.TechnicalCapabilitiesRequirements$.next(
      technicalCapabilitiesRequirements
    );
    this.accordionContent.accordionComponentList[4].isVisible = true;
  }
  updateEmployeeCertifiedFacilityEngineersComponent(
    qualificationCertifiedEngineers: CertifiedEngineerDto[]
  ): void {
    this._requestService.CertifiedFacilityEngineers$.next(
      qualificationCertifiedEngineers
    );
    this.accordionContent.accordionComponentList[5].isVisible = true;
  }
  updateEmployeeInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent(
    qualificationAdditionInstitutionalCapacityAndHrRequirements: QualificationAdditionInstitutionalCapacityAndHrRequirementDto[]
  ): void {
    this._requestService.InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources$.next(
      qualificationAdditionInstitutionalCapacityAndHrRequirements
    );
    this.accordionContent.accordionComponentList[6].isVisible = true;
  }
  updateEmployeeDistinctiveAdditionalTechnicalCapabilitiesComponent(
    additionTechnicalCapabilitiesRequirements: AdditionTechnicalCapabilitiesRequirementsDto[]
  ): void {
    this._requestService.DistinctiveAdditionalTechnicalCapabilities$.next(
      additionTechnicalCapabilitiesRequirements
    );
    this.accordionContent.accordionComponentList[7].isVisible = true;
  }
  updateEmployeeEngineersWithSufficientTrainingForTheEngineeringConsultantComponent(
    qualificationQualificatedEngineers: QualifiedEngineersDto[]
  ): void {
    this._requestService.EngineersWithSufficientTrainingForTheEngineeringConsultan$.next(
      qualificationQualificatedEngineers
    );
    this.accordionContent.accordionComponentList[8].isVisible = true;
  }
  updateEmployeeAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent(
    qualificationQualificatedAccountants: QualificationQualificatedAccountantDto[]
  ): void {
    this._requestService.AccountantsCompletedWafiTrainingProgramForAccountingSupervision$.next(
      qualificationQualificatedAccountants
    );
    this.accordionContent.accordionComponentList[9].isVisible = true;
  }
  updateEmployeeNationalAddressesComponent(
    qualificationNationalAddressDetailDto: nationalAddressResponse[]
  ): void {
    this._requestService.NationalAddresses$.next(
      qualificationNationalAddressDetailDto
    );
    this.accordionContent.accordionComponentList[10].isVisible = true;
  }
  public createOrRenewRequest(): void {
    if (this.renewRequest) {
      this.Renew();
    } else {
      this.creatRequest();
    }
  }
  creatRequest(): void {
    this.requestValidationData = null;
    this.subscriptions.push(
      this._qualificationServiceRequestService
        .Create(
          this.userData?.facilities[0].id as string,
          this.code,
          this.period
        )
        .subscribe((res) => {
          if (res.requestCode && res.id) {
            this.setRequestIdInLocalStorage(res.id);
            this.openConfirmaDialog(res.requestCode);
          } else {
            this.requestValidationData = res;
            this.checkGeneralErrorTabsIsExist();
          }
        })
    );
  }
  Renew(): void {
    this.requestValidationData = null;
    this.subscriptions.push(
      this._qualificationServiceRequestService
        .Renew(this.facilityId as string, this.code, this.period)
        .subscribe((res) => {
          if (res.requestCode && res.id) {
            this.setRequestIdInLocalStorage(res.id);
            this.openRenewConfirmaDialog(res.requestCode);
          } else {
            this.requestValidationData = res;
            this.checkGeneralErrorTabsIsExist();
          }
        })
    );
  }
  private checkGeneralErrorTabsIsExist() {
    if (
      this.requestValidationData &&
      this.requestValidationData.tabs &&
      this.requestValidationData.tabs.length
    ) {
      if (this.requestValidationData.tabs.find((x) => x.tabCode == 'General')) {
        this._toastrNotificatioService.showError(
          this.requestValidationData.tabs[0].tabErrors[0].errorMessage
        );
      } else {
        this.updateRequestValidation(this.requestValidationData);
        this.openValidationDialog();
        this.updateQualificationRequestData();
      }
    }
  }
  private updateQualificationRequestData(): void {
    this._requestValidationService.updateQualificationRequestData({
      period: this.period,
      type: this.code,
    });
  }
  private updateRequestValidation(data: RequestValidation) {
    this._requestValidationService.updateRequestValidation(
      data as RequestValidation
    );
  }

  openValidationDialog(): void {
    let Data = {
      panelClass: ['rega'],
      title: `التحقق من بيانات طلب
          ${this.RequestCode} `,
      component: RequestValidationPopupComponent,
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

  setRequestIdInLocalStorage(id: string) {
    this._requestService.setSelectedRequestIdInLocalStorage(id);
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
        Configuration.modules.realEstateContributionsQualifying +
        '/' +
        Configuration.pages.realEstateContributionsQualifying.requestDetails,
        
        surveyTitle:'نأمل منكم تقييم تجربتكم عبر الرابط التالي',
        surveyLink:'https://survey.rega.gov.sa/s/cma9hk9c3000ec1es1bwvq82d'
    } as notePopupData;
    this._popupService.updateNotePopupData(Data);
  }
  openRenewConfirmaDialog(res: string): void {
    let Data = {
      imagePath: 'assets/images/auth/ForgotPass.svg',
      title: 'تم إنشاء طلب التجديد بنجاح',
      staticMessage: 'تم إرسال طلب التجديد بنجاح ويمكنك عرض الطلب',
      dynamicMessage: res,
      buttonText: 'عرض الطلب',
      buttonLink:
        Configuration.modules.realEstateContributions +
        '/' +
        Configuration.modules.realEstateContributionsQualifying +
        '/' +
        Configuration.pages.realEstateContributionsQualifying.requestDetails,
        
        surveyTitle:'نأمل منكم تقييم تجربتكم عبر الرابط التالي',
        surveyLink:'https://survey.rega.gov.sa/s/cma9hk9c3000ec1es1bwvq82d'
    } as notePopupData;
    this._popupService.updateNotePopupData(Data);
  }
  cancelRequest() {
    this._router.navigate([
      `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsQualifying}/${Configuration.pages.realEstateContributionsQualifying.requests}`,
    ]);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
