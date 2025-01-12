import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommercialRegistryComponent } from '../commercial-registry/commercial-registry.component';
import { accordionComponent, accordionContent } from 'src/app/shared/models/accordion.model';
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
import { RequestDetails, facilityDTO } from '../../dataModels/request-details.model';
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

@Component({
  selector: 'app-request-data',
  templateUrl: './request-data.component.html',
  styleUrls: ['./request-data.component.scss']
})
export class RequestDataComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
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
        title: 'مهندسي الشركة المعتمدين',
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
        title: 'مهندسي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للبيع على الخارطة للاستشاري الهندسي',
        component:
          RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent,
        id: 'RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent',
        disabled: false,
        isVisible: false,
        isViewed: false,
      },
      {
        icon: '', // index = 9
        title: 'محاسبي الشركة الحاصلين على برنامج تدريب الهيئة العامة للعقار للإشراف المحاسبي',
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

  constructor(
    private _accordionService: AccordionService,
    private _requestService: RequestService) { }
  ngOnInit(): void {
    this.getSeclectRequest();
    this.observeDataIsUpdated();
    this.updateAccordionContent();
  }
  private updateAccordionContent() {
    this._accordionService.updateAccordionContent(this.accordionContent);
  }
  observeDataIsUpdated() {
    this.subscriptions.push(
      this._requestService.dataIsUpdate.subscribe(res => {
        this.getSeclectRequest()
      })
    )
  }
  getSeclectRequest() {
    this.subscriptions.push(
      this._requestService.seclectRequest$.subscribe((res: RequestDetails[] | null) => {
        if (res && res.length > 0) {
          this.updateAllBehaviorSubject(res[0])
        }
      })
    )
  }
  private updateAllBehaviorSubject(requestDetails: RequestDetails): void {
    console.log("requestDetails", requestDetails)
    if (requestDetails.facilities) this.updateEmployeeFacilityBasicInfoComponent(requestDetails.facilities)
    if (requestDetails.facilities.qualificationQualificatedAccountants) this.updateEmployeeAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent(requestDetails.facilities.qualificationQualificatedAccountants)
    if (requestDetails.facilities.qualificationQualificatedEngineers) this.updateEmployeeEngineersWithSufficientTrainingForTheEngineeringConsultantComponent(requestDetails.facilities.qualificationQualificatedEngineers)
    if (requestDetails.facilities.qualificationNationalAddressDetailDto && requestDetails.facilities.qualificationNationalAddressDetailDto.length > 0) this.updateEmployeeNationalAddressesComponent(requestDetails.facilities.qualificationNationalAddressDetailDto)
    if (requestDetails.facilities.qualificationAdditionInstitutionalCapacityAndHrRequirements && requestDetails.facilities.qualificationAdditionInstitutionalCapacityAndHrRequirements.length > 0) this.updateEmployeeInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent(requestDetails.facilities.qualificationAdditionInstitutionalCapacityAndHrRequirements)
    if (requestDetails.facilities.additionTechnicalCapabilitiesRequirements && requestDetails.facilities.additionTechnicalCapabilitiesRequirements.length > 0) this.updateEmployeeDistinctiveAdditionalTechnicalCapabilitiesComponent(requestDetails.facilities.additionTechnicalCapabilitiesRequirements)
    if (requestDetails.facilities.qualificationCertifiedEngineers && requestDetails.facilities.qualificationCertifiedEngineers.length > 0) this.updateEmployeeCertifiedFacilityEngineersComponent(requestDetails.facilities.qualificationCertifiedEngineers)
    if (requestDetails.facilities.technicalCapabilitiesRequirements && requestDetails.facilities.technicalCapabilitiesRequirements.length > 0) this.updateEmployeeTechnicalCapabilitiesRequirementsComponent(requestDetails.facilities.technicalCapabilitiesRequirements)
    if (requestDetails.facilities.qualificationWafiTrainings && requestDetails.facilities.qualificationWafiTrainings.length > 0) this.updateEmployeeWafiTrainingComponent(requestDetails.facilities.qualificationWafiTrainings)
    if (requestDetails.facilities.qualificationFinancialCapabilityRequirements && requestDetails.facilities.qualificationFinancialCapabilityRequirements.length > 0) this.updateEmployeeFinancialCapabilitiesRequirementsComponent(requestDetails.facilities.qualificationFinancialCapabilityRequirements)
    if (requestDetails.facilities.qualificationInstitutionalCapacityAndHrRequirements && requestDetails.facilities.qualificationInstitutionalCapacityAndHrRequirements.length > 0) this.updateEmployeeJobRequirementsAndHumanResourcesComponent(requestDetails.facilities.qualificationInstitutionalCapacityAndHrRequirements)
  }
  updateEmployeeFacilityBasicInfoComponent(facilities: facilityDTO): void {
    console.log("updateEmployeeFacilityBasicInfoComponent", facilities)
    this._requestService.FacilityBasicInfo$.next(facilities)
    this.accordionContent.accordionComponentList[0].isVisible = true;
  }
  updateEmployeeWafiTrainingComponent(WafiTraining: WafiTrainingDto[]): void {
    this._requestService.WafiTraining$.next(WafiTraining)
    this.accordionContent.accordionComponentList[1].isVisible = true;
  }
  updateEmployeeFinancialCapabilitiesRequirementsComponent(qualificationFinancialCapabilityRequirements: financialCapabilityResponse[]): void {
    this._requestService.FinancialCapabilitiesRequirements$.next(qualificationFinancialCapabilityRequirements)
    this.accordionContent.accordionComponentList[2].isVisible = true;
  }
  updateEmployeeJobRequirementsAndHumanResourcesComponent(qualificationInstitutionalCapacityAndHrRequirements: QualificationInstitutionalCapacityAndHrRequirementDto[]): void {
    this._requestService.JobRequirementsAndHumanResources$.next(qualificationInstitutionalCapacityAndHrRequirements)
    this.accordionContent.accordionComponentList[3].isVisible = true;
  }
  updateEmployeeTechnicalCapabilitiesRequirementsComponent(technicalCapabilitiesRequirements: QualificationTechnicalCapabilitiesRequirementFullDto[]): void {
    this._requestService.TechnicalCapabilitiesRequirements$.next(technicalCapabilitiesRequirements)
    this.accordionContent.accordionComponentList[4].isVisible = true;
  }
  updateEmployeeCertifiedFacilityEngineersComponent(qualificationCertifiedEngineers: CertifiedEngineerDto[]): void {
    this._requestService.CertifiedFacilityEngineers$.next(qualificationCertifiedEngineers)
    this.accordionContent.accordionComponentList[5].isVisible = true;
  }
  updateEmployeeInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent(qualificationAdditionInstitutionalCapacityAndHrRequirements: QualificationAdditionInstitutionalCapacityAndHrRequirementDto[]): void {
    this._requestService.InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources$.next(qualificationAdditionInstitutionalCapacityAndHrRequirements)
    this.accordionContent.accordionComponentList[6].isVisible = true;
  }
  updateEmployeeDistinctiveAdditionalTechnicalCapabilitiesComponent(additionTechnicalCapabilitiesRequirements: AdditionTechnicalCapabilitiesRequirementsDto[]): void {
    this._requestService.DistinctiveAdditionalTechnicalCapabilities$.next(additionTechnicalCapabilitiesRequirements)
    this.accordionContent.accordionComponentList[7].isVisible = true;

  }
  updateEmployeeEngineersWithSufficientTrainingForTheEngineeringConsultantComponent(qualificationQualificatedEngineers: QualifiedEngineersDto[]): void {
    this._requestService.EngineersWithSufficientTrainingForTheEngineeringConsultan$.next(qualificationQualificatedEngineers)
    this.accordionContent.accordionComponentList[8].isVisible = true;
  }
  updateEmployeeAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent(qualificationQualificatedAccountants: QualificationQualificatedAccountantDto[]): void {
    this._requestService.AccountantsCompletedWafiTrainingProgramForAccountingSupervision$.next(qualificationQualificatedAccountants)
    this.accordionContent.accordionComponentList[9].isVisible = true;
  }
  updateEmployeeNationalAddressesComponent(qualificationNationalAddressDetailDto: nationalAddressResponse[]): void {
    this._requestService.NationalAddresses$.next(qualificationNationalAddressDetailDto)
    this.accordionContent.accordionComponentList[10].isVisible = true;
  }
  ngOnDestroy(): void {
    this._requestService.seclectRequest$.next(null);
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
