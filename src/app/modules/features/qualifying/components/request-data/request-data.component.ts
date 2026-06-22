import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommercialRegistryComponent } from '../commercial-registry/commercial-registry.component';
import {
  accordionComponent,
  accordionContent,
} from 'src/app/shared/models/accordion.model';
import { RequestWafiTrainingComponent } from '../request-wafi-training/request-wafi-training.component';
import { RequestFinancialCapabilitiesRequirementsComponent } from '../request-financial-capabilities-requirements/request-financial-capabilities-requirements.component';
import { RequestJobRequirementsAndHumanResourcesComponent } from '../request-job-requirements-and-human-resources/request-job-requirements-and-human-resources.component';
import { RequestTechnicalCapabilitiesRequirementsComponent } from '../request-technical-capabilities-requirements/request-technical-capabilities-requirements.component';
import { RequestCertifiedFacilityEngineersComponent } from '../request-certified-facility-engineers/request-certified-facility-engineers.component';
import { RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent } from '../request-institutional-capabilities-and-additional-discriminatory-human-resources/request-institutional-capabilities-and-additional-discriminatory-human-resources.component';
import { RequestDistinctiveAdditionalTechnicalCapabilitiesComponent } from '../request-distinctive-additional-technical-capabilities/request-distinctive-additional-technical-capabilities.component';
import { RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent } from '../request-engineers-with-sufficient-training-for-the-engineering-consultant/request-engineers-with-sufficient-training-for-the-engineering-consultant.component';
import { RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent } from '../request-accountants-completed-wafi-training-program-for-accounting-supervision/request-accountants-completed-wafi-training-program-for-accounting-supervision.component';
import { RequestNationalAddressesComponent } from '../request-national-addresses/request-national-addresses.component';
import { Subscription } from 'rxjs';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { RequestService } from '../../services/requests/request-service.service';
import {
  RequestDetails,
  facilityDTO,
} from '../../dataModels/request-details.model';
import { WafiTrainingDto } from '../../../facilities/dataModels/wafi-training-dto';
import { financialCapabilityResponse } from '../../dataModels/financial-capability.model';
import { QualificationInstitutionalCapacityAndHrRequirementDto } from '../../../facilities/dataModels/qualificationInstitutionalCapacityAndHrRequirement.model';
import { QualificationTechnicalCapabilitiesRequirementFullDto } from '../../../facilities/dataModels/qualificationTechnicalCapabilitiesRequirement.model';
import { CertifiedEngineerDto } from '../../../facilities/dataModels/certified-engineer-dto';
import { AdditionTechnicalCapabilitiesRequirementsDto } from '../../../facilities/dataModels/additionTechnicalCapabilitiesRequirements.model';
import { QualificationAdditionInstitutionalCapacityAndHrRequirementDto } from '../../../facilities/dataModels/qualification-addition-institutional-capacity-and-hr-requirement-dto';
import { QualificationQualificatedAccountantDto } from '../../../facilities/dataModels/qualification-qualificated-accountant-dto';
import { QualifiedEngineersDto } from '../../../facilities/dataModels/qualified-engineers-dto';
import { nationalAddressResponse } from '../../dataModels/national-address.model';
import { UserDataService } from '../../../../../core/services/user-data/user-data.service';
import { FacilityTypeCategory, customerResponse } from '../../../../../shared/models/customer.model';

@Component({
  selector: 'app-request-data',
  templateUrl: './request-data.component.html',
  styleUrls: ['./request-data.component.scss'],
})
export class RequestDataComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  accordionContent: accordionContent = {
    oneAtATime: true,
    isAnimated: true,
    accordionComponentList: [
      {
        icon: '', // index = 0
        title: 'البيانات الأساسية',
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
  userData: customerResponse | null = null;
  facilityTypeCategory: FacilityTypeCategory | null = null;

  constructor(
    private _accordionService: AccordionService,
    private _requestService: RequestService,
    private _userDataService: UserDataService,

  ) {}
  ngOnInit(): void {
    this.getSeclectRequest();
    this.observeDataIsUpdated();
    this.updateAccordionContent();
    this.obseveCustomerData();
  }
  obseveCustomerData() {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (this.userData) {
            this.facilityTypeCategory =
              this.userData.facilities[0].facilityTypeCategory ?? null;
            console.log("this.facilityTypeCategory=", this.facilityTypeCategory);
            if (this.facilityTypeCategory) {
              this.getSeclectRequest();
            }
          }
        }),
    );
  }
  
  private updateAccordionContent() {
    this._accordionService.updateAccordionContent(this.accordionContent);
  }
  observeDataIsUpdated() {
    this.subscriptions.push(
      this._requestService.dataIsUpdate.subscribe((res) => {
        this.getSeclectRequest();
      }),
    );
  }
  getSeclectRequest() {
    this.subscriptions.push(
      this._requestService.seclectRequest$.subscribe(
        (res: RequestDetails[] | null) => {
          if (res && res.length > 0) {
            
            if (this.facilityTypeCategory) {
              
              if (this.facilityTypeCategory == FacilityTypeCategory.Developer) {
                this.updateEmployeeFacilityBasicInfoComponent(res[0].facilities);

                // القدرات المالية - always visible for developer
                this.accordionContent.accordionComponentList[2].isVisible = true;
                if (res[0].facilities.qualificationFinancialCapabilityRequirements &&
                  res[0].facilities.qualificationFinancialCapabilityRequirements.length > 0) {
                  this.updateEmployeeFinancialCapabilitiesRequirementsComponent(
                    res[0].facilities.qualificationFinancialCapabilityRequirements,
                  );
                }

                // القدرات الفنية - always visible for developer
                this.accordionContent.accordionComponentList[4].isVisible = true;
                if (res[0].facilities.technicalCapabilitiesRequirements &&
                  res[0].facilities.technicalCapabilitiesRequirements.length > 0) {
                  this.updateEmployeeTechnicalCapabilitiesRequirementsComponent(
                    res[0].facilities.technicalCapabilitiesRequirements,
                  );
                }

                // القدرات المؤسسية و الموارد البشرية - always visible for developer
                this.accordionContent.accordionComponentList[3].isVisible = true;
                if (res[0].facilities
                  .qualificationInstitutionalCapacityAndHrRequirements &&
                  res[0].facilities
                    .qualificationInstitutionalCapacityAndHrRequirements.length > 0) {
                  this.updateEmployeeJobRequirementsAndHumanResourcesComponent(
                    res[0].facilities
                      .qualificationInstitutionalCapacityAndHrRequirements,
                  );
                  if (
                    res[0].facilities.qualificationCertifiedEngineers &&
                    res[0].facilities.qualificationCertifiedEngineers.length > 0
                  )
                    this._requestService.CertifiedFacilityEngineers$.next(
                      res[0].facilities.qualificationCertifiedEngineers,
                    );
                }

                // موظفين الشركة المعتمدين - always visible for developer
                this.accordionContent.accordionComponentList[5].isVisible = true;
                if (res[0].facilities.qualificationCertifiedEngineers &&
                  res[0].facilities.qualificationCertifiedEngineers.length > 0) {
                  this.updateEmployeeCertifiedFacilityEngineersComponent(
                    res[0].facilities.qualificationCertifiedEngineers,
                  );
                }

                // عنوان المنشأة - always visible for developer
                this.accordionContent.accordionComponentList[10].isVisible = true;
                if (res[0].facilities.qualificationNationalAddressDetails &&
                  res[0].facilities.qualificationNationalAddressDetails.length > 0) {
                  this.updateEmployeeNationalAddressesComponent(
                    res[0].facilities.qualificationNationalAddressDetails,
                  );
                }

              }

              if (
                this.facilityTypeCategory == FacilityTypeCategory.Accountant
              ) {

                this.updateEmployeeFacilityBasicInfoComponent(res[0].facilities);

                // محاسبي المكتب المعتمدين - always visible for accountant
                this.accordionContent.accordionComponentList[5].isVisible = true;
                this.accordionContent.accordionComponentList[5].title = 'محاسبي المكتب المعتمدين';
                if (
                  res[0].facilities.qualificationCertifiedEngineers &&
                  res[0].facilities.qualificationCertifiedEngineers.length > 0
                ) {
                  this.updateEmployeeCertifiedFacilityEngineersComponent(
                    res[0].facilities.qualificationCertifiedEngineers.filter(
                      x => x.qualificationEngineerType === 2
                    ),
                  );
                }

                // عنوان المنشأة - always visible for accountant
                this.accordionContent.accordionComponentList[10].isVisible = true;
                if (res[0].facilities.qualificationNationalAddressDetails &&
                  res[0].facilities.qualificationNationalAddressDetails.length > 0) {
                  this.updateEmployeeNationalAddressesComponent(
                    res[0].facilities.qualificationNationalAddressDetails,
                  );
                }

              }
              if (
                this.facilityTypeCategory == FacilityTypeCategory.Engineering
              ) {
                this.updateEmployeeFacilityBasicInfoComponent(res[0].facilities);

                // مهندسين المكتب المعتمدين - always visible for Engineering
                this.accordionContent.accordionComponentList[5].isVisible = true;
                this.accordionContent.accordionComponentList[5].title = 'مهندسين المكتب المعتمدين';
                if (
                  res[0].facilities.qualificationCertifiedEngineers &&
                  res[0].facilities.qualificationCertifiedEngineers.length > 0
                ) {
                  this.updateEmployeeCertifiedFacilityEngineersComponent(
                    res[0].facilities.qualificationCertifiedEngineers.filter(
                      x => x.qualificationEngineerType === 1
                    ),
                  );
                }

                // عنوان المنشأة - always visible for Engineering
                this.accordionContent.accordionComponentList[10].isVisible = true;
                if (res[0].facilities.qualificationNationalAddressDetails &&
                  res[0].facilities.qualificationNationalAddressDetails.length > 0) {
                  this.updateEmployeeNationalAddressesComponent(
                    res[0].facilities.qualificationNationalAddressDetails,
                  );
                }

              }
            }
            //this.updateAllBehaviorSubject(res[0]);
          }
        },
      ),
    );
  }
  private updateAllBehaviorSubject(requestDetails: RequestDetails): void {
    console.log('requestDetails', requestDetails);
    const typeCode = requestDetails.qualificationRequestType?.typeCode;
    const isAccountant = typeCode === 'Acc';
    const isDeveloper = typeCode === 'RED01';
    const isEngineering = typeCode === 'EC';

    // index 0: بيانات السجل التجاري - visible for all
    if (requestDetails.facilities)
      this.updateEmployeeFacilityBasicInfoComponent(requestDetails.facilities);
    // index 9: محاسبي الشركة - hidden for Developer and Engineering
    if (
      !isDeveloper &&
      !isEngineering &&
      requestDetails.facilities.qualificationQualificatedAccountants
    )
      this.updateEmployeeAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent(
        requestDetails.facilities.qualificationQualificatedAccountants,
      );
    // index 8: مهندسي الشركة - hidden for Developer and Accountant
    if (
      !isDeveloper &&
      !isAccountant &&
      requestDetails.facilities.qualificationQualificatedEngineers
    )
      this.updateEmployeeEngineersWithSufficientTrainingForTheEngineeringConsultantComponent(
        requestDetails.facilities.qualificationQualificatedEngineers,
      );
    // index 10: عنوان المنشأة - visible for all
    if (
      requestDetails.facilities.qualificationNationalAddressDetailDto &&
      requestDetails.facilities.qualificationNationalAddressDetailDto.length > 0
    )
      this.updateEmployeeNationalAddressesComponent(
        requestDetails.facilities.qualificationNationalAddressDetailDto,
      );
    // index 6: القدرات المؤسسية والموارد الإضافية - hidden for all types
    if (
      !isDeveloper &&
      !isEngineering &&
      !isAccountant &&
      requestDetails.facilities
        .qualificationAdditionInstitutionalCapacityAndHrRequirements &&
      requestDetails.facilities
        .qualificationAdditionInstitutionalCapacityAndHrRequirements.length > 0
    )
      this.updateEmployeeInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent(
        requestDetails.facilities
          .qualificationAdditionInstitutionalCapacityAndHrRequirements,
      );
    // index 7: القدارت الفنية الإضافية - hidden for all types
    if (
      !isDeveloper &&
      !isEngineering &&
      !isAccountant &&
      requestDetails.facilities.additionTechnicalCapabilitiesRequirements &&
      requestDetails.facilities.additionTechnicalCapabilitiesRequirements
        .length > 0
    )
      this.updateEmployeeDistinctiveAdditionalTechnicalCapabilitiesComponent(
        requestDetails.facilities.additionTechnicalCapabilitiesRequirements,
      );
    // index 5: موظفين الشركة المعتمدين - visible for all
    if (
      requestDetails.facilities.qualificationCertifiedEngineers &&
      requestDetails.facilities.qualificationCertifiedEngineers.length > 0
    )
      this.updateEmployeeCertifiedFacilityEngineersComponent(
        requestDetails.facilities.qualificationCertifiedEngineers,
      );
    // index 4: متطلبات القدرات الفنية - hidden for Accountant
    if (
      !isAccountant &&
      requestDetails.facilities.technicalCapabilitiesRequirements &&
      requestDetails.facilities.technicalCapabilitiesRequirements.length > 0
    )
      this.updateEmployeeTechnicalCapabilitiesRequirementsComponent(
        requestDetails.facilities.technicalCapabilitiesRequirements,
      );
    // index 1: تدريب الهيئة العامة للعقار - hidden for Accountant
    if (
      !isAccountant &&
      requestDetails.facilities.qualificationWafiTrainings &&
      requestDetails.facilities.qualificationWafiTrainings.length > 0
    )
      this.updateEmployeeWafiTrainingComponent(
        requestDetails.facilities.qualificationWafiTrainings,
      );
    // index 2: متطلبات القدرات المالية - hidden for Accountant and Engineering
    if (
      !isAccountant &&
      !isEngineering &&
      requestDetails.facilities.qualificationFinancialCapabilityRequirements &&
      requestDetails.facilities.qualificationFinancialCapabilityRequirements
        .length > 0
    )
      this.updateEmployeeFinancialCapabilitiesRequirementsComponent(
        requestDetails.facilities.qualificationFinancialCapabilityRequirements,
      );
    // index 3: متطلبات القدرات المؤسسية والموارد البشرية - hidden for Accountant and Engineering
    if (
      !isAccountant &&
      !isEngineering &&
      requestDetails.facilities
        .qualificationInstitutionalCapacityAndHrRequirements &&
      requestDetails.facilities
        .qualificationInstitutionalCapacityAndHrRequirements.length > 0
    )
      this.updateEmployeeJobRequirementsAndHumanResourcesComponent(
        requestDetails.facilities
          .qualificationInstitutionalCapacityAndHrRequirements,
      );
  }
  updateEmployeeFacilityBasicInfoComponent(facilities: facilityDTO): void {
    console.log('updateEmployeeFacilityBasicInfoComponent', facilities);
    this._requestService.FacilityBasicInfo$.next(facilities);
    this.accordionContent.accordionComponentList[0].isVisible = true;
  }
  updateEmployeeWafiTrainingComponent(WafiTraining: WafiTrainingDto[]): void {
    this._requestService.WafiTraining$.next(WafiTraining);
    this.accordionContent.accordionComponentList[1].isVisible = true;
  }
  updateEmployeeFinancialCapabilitiesRequirementsComponent(
    qualificationFinancialCapabilityRequirements: financialCapabilityResponse[],
  ): void {
    this._requestService.FinancialCapabilitiesRequirements$.next(
      qualificationFinancialCapabilityRequirements,
    );
    this.accordionContent.accordionComponentList[2].isVisible = true;
  }
  updateEmployeeJobRequirementsAndHumanResourcesComponent(
    qualificationInstitutionalCapacityAndHrRequirements: QualificationInstitutionalCapacityAndHrRequirementDto[],
  ): void {
    this._requestService.JobRequirementsAndHumanResources$.next(
      qualificationInstitutionalCapacityAndHrRequirements,
    );
    this.accordionContent.accordionComponentList[3].isVisible = true;
  }
  updateEmployeeTechnicalCapabilitiesRequirementsComponent(
    technicalCapabilitiesRequirements: QualificationTechnicalCapabilitiesRequirementFullDto[],
  ): void {
    this._requestService.TechnicalCapabilitiesRequirements$.next(
      technicalCapabilitiesRequirements,
    );
    this.accordionContent.accordionComponentList[4].isVisible = true;
  }
  updateEmployeeCertifiedFacilityEngineersComponent(
    qualificationCertifiedEngineers: CertifiedEngineerDto[],
  ): void {
    this._requestService.CertifiedFacilityEngineers$.next(
      qualificationCertifiedEngineers,
    );
    this.accordionContent.accordionComponentList[5].isVisible = true;
  }
  updateEmployeeInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent(
    qualificationAdditionInstitutionalCapacityAndHrRequirements: QualificationAdditionInstitutionalCapacityAndHrRequirementDto[],
  ): void {
    this._requestService.InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources$.next(
      qualificationAdditionInstitutionalCapacityAndHrRequirements,
    );
    this.accordionContent.accordionComponentList[6].isVisible = true;
  }
  updateEmployeeDistinctiveAdditionalTechnicalCapabilitiesComponent(
    additionTechnicalCapabilitiesRequirements: AdditionTechnicalCapabilitiesRequirementsDto[],
  ): void {
    this._requestService.DistinctiveAdditionalTechnicalCapabilities$.next(
      additionTechnicalCapabilitiesRequirements,
    );
    this.accordionContent.accordionComponentList[7].isVisible = true;
  }
  updateEmployeeEngineersWithSufficientTrainingForTheEngineeringConsultantComponent(
    qualificationQualificatedEngineers: QualifiedEngineersDto[],
  ): void {
    this._requestService.EngineersWithSufficientTrainingForTheEngineeringConsultan$.next(
      qualificationQualificatedEngineers,
    );
    this.accordionContent.accordionComponentList[8].isVisible = true;
  }
  updateEmployeeAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent(
    qualificationQualificatedAccountants: QualificationQualificatedAccountantDto[],
  ): void {
    this._requestService.AccountantsCompletedWafiTrainingProgramForAccountingSupervision$.next(
      qualificationQualificatedAccountants,
    );
    this.accordionContent.accordionComponentList[9].isVisible = true;
  }
  updateEmployeeNationalAddressesComponent(
    qualificationNationalAddressDetailDto: nationalAddressResponse[],
  ): void {
    this._requestService.NationalAddresses$.next(
      qualificationNationalAddressDetailDto,
    );
    this.accordionContent.accordionComponentList[10].isVisible = true;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
