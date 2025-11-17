import { EventEmitter, Injectable } from '@angular/core';
import { LicenseDetails, LicenseRequestProcessingLogData } from '../../models/license-details.model';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { licenseProjectAddresses, licenseProjectDeeds, licenseProjectDesignFiles, licenseProjectPlanAccordingApprovedStandardsFiles, licenseProjectServices, licenseProjectZones } from '../../models/project-units';
import { LicenseProjectCharteredAccountantFullDto } from '../../models/LicenseProjectCharteredAccountantFullDto';
import { LicenseProjectEngineeringConsultantFullDto } from '../../models/LicenseProjectEngineeringConsultantFullDto';
import { LicenseProjectFeasibilityStudyFullDto } from '../../models/LicenseProjectFeasibilityStudyFullDto';
import { LicenseProjectRealStateMarketerFullDto } from '../../models/LicenseProjectRealStateMarketerFullDto';
import { LicenseProjectSubDeveloperFullDto } from '../../models/license-project-sub-developer-full-dto';
import { AccountKeeperDto, LicenseProject, LicenseProjectLandDataDto, LicenseProjectMainDataDto, ProjectRealStateDeveloperDto } from '../../models/license-project.model';
import { SysLicenseBeneficiaryContractFormListDto } from '../../dataModels/sys-license-beneficiary-contract-form-list-dto';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { HttpClient } from '@angular/common/http';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { LicenseProjectOwnershipApprovedDocumentDto } from '../../models/license-project-ownership-approved-document-dto';
import { ExternalProjectDataDto, ProjectDocumentDataDto } from '../../models/external-project-data-dto';
import { CompileWithLogFilesDto } from '../../dataModels/compile-with-log-files-dto';
import { requestPhase } from '../../../qualifying/dataModels/request-details.model';
import { LicenseProjectRelativeWeightDto } from '../../dataModels/license-project-quantities-table-file-and-relative-weight-dto';
import { LicenseProjectDelegatorsDto, LicenseProjectMainRealStateDeveloperDto } from '../../dataModels/project-real-state-developer.dto';
import { licenseProjectZoneCaculations } from '../../models/license-project-zone-caculations';
import { LicenseProjectExternalAddressDto } from '../../dataModels/project-external-address.model';
import { BankingAccountDto } from '../../dataModels/banking-account-dto';
import { LicenseProjectExhibitionDto } from '../../dataModels/license-project-exhibition-dto';
import { VisitorEngineeringConsultantDto } from '../../dataModels/visitor-engineering-consultant-dto';
import { BeneficiaryContractFormAdditionalTermsDto } from '../../models/beneficiary-contract-form-additional-terms-dto';
import { LicenseProjectDeveloperDto } from '../../dataModels/license-project-developer-dto';
import { LicenseProjectRequestAttachmentDto } from '../../dataModels/license-project-request-attachment-dto';
import { LicenseProjectDetachedUnit, LicenseProjectDetachedUnitRequestDetails } from '../../dataModels/license-project-detached-unit.model';
import { LicenseProjectFinancialStatementDto } from '../../models/LicenseProjectFinancialStatementDto';
import { LicenseProjectPromissoryNoteDto } from '../../dataModels/license-project-promissory-note.model';
import { LicenseProjectSubDeveloperDto } from '../../dataModels/license-project-sub-developer/license-project-sub-developer-dto';
import { ProjectLandDeedDto } from '../../dataModels/project-land-deed.dto';
import { CertifiedLicenseDataDto } from '../../models/certified-license-data-dto';
import { LicenseProjectBusinessPaymentModel, LicenseProjectBusinessPaymentTemplateModel } from '../../models/business-payment.model';

@Injectable()
export class LicenseDetailsService {
  selectRequest$: BehaviorSubject<LicenseDetails | null> = new BehaviorSubject<LicenseDetails | null>(null);
  certifiedLicenseData$: BehaviorSubject<CertifiedLicenseDataDto | null> = new BehaviorSubject<CertifiedLicenseDataDto | null>(null);
  licenseProjectAddresses$: BehaviorSubject<licenseProjectAddresses[] | null> = new BehaviorSubject<licenseProjectAddresses[] | null>(null);
  licenseProjectExternalAddresses$: BehaviorSubject<LicenseProjectExternalAddressDto[] | null> = new BehaviorSubject<LicenseProjectExternalAddressDto[] | null>(null);
  licenseProjectCharteredAccountants$: BehaviorSubject<LicenseProjectCharteredAccountantFullDto[] | null> = new BehaviorSubject<LicenseProjectCharteredAccountantFullDto[] | null>(null);
  licenseProjectConstructionLicenses$: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  licenseProjectEngineeringConsultants$: BehaviorSubject<LicenseProjectEngineeringConsultantFullDto[] | null> = new BehaviorSubject<LicenseProjectEngineeringConsultantFullDto[] | null>(null);
  licenseProjectDeeds$: BehaviorSubject<ProjectLandDeedDto[] | null> = new BehaviorSubject<ProjectLandDeedDto[] | null>(null);
  licenseProjectDesignFiles$: BehaviorSubject<licenseProjectDesignFiles[] | null> = new BehaviorSubject<licenseProjectDesignFiles[] | null>(null);
  licenseProjectFeasibilityStudies$: BehaviorSubject<LicenseProjectFeasibilityStudyFullDto[] | null> = new BehaviorSubject<LicenseProjectFeasibilityStudyFullDto[] | null>(null);
  licenseProjectPlanAccordingApprovedStandardsFiles$: BehaviorSubject<licenseProjectPlanAccordingApprovedStandardsFiles[] | null> = new BehaviorSubject<licenseProjectPlanAccordingApprovedStandardsFiles[] | null>(null);
  licenseProjectQuantitiesTableFiles$: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  licenseProjectServices$: BehaviorSubject<licenseProjectServices[] | null> = new BehaviorSubject<licenseProjectServices[] | null>(null);
  licenseProjectZones$: BehaviorSubject<licenseProjectZones[] | null> = new BehaviorSubject<licenseProjectZones[] | null>(null);
  licenseProjectRealStateMarketers$: BehaviorSubject<LicenseProjectRealStateMarketerFullDto[] | null> = new BehaviorSubject<LicenseProjectRealStateMarketerFullDto[] | null>(null);
  licenseProjectSubDevelopers$: BehaviorSubject<LicenseProjectSubDeveloperDto[] | null> = new BehaviorSubject<LicenseProjectSubDeveloperDto[] | null>(null);
  projectAccountKeeper$: BehaviorSubject<AccountKeeperDto | null> = new BehaviorSubject<AccountKeeperDto | null>(null);
  projectRealStateDeveloper$: BehaviorSubject<ProjectRealStateDeveloperDto | null> = new BehaviorSubject<ProjectRealStateDeveloperDto | null>(null);
  projectMainData$: BehaviorSubject<LicenseProjectMainDataDto | null> = new BehaviorSubject<LicenseProjectMainDataDto | null>(null);
  lincenseProjectData$: BehaviorSubject<LicenseProject | null> = new BehaviorSubject<LicenseProject | null>(null);
  projectLandData$: BehaviorSubject<LicenseProjectLandDataDto | null> = new BehaviorSubject<LicenseProjectLandDataDto | null>(null);
  sysLicenseBeneficiary$: BehaviorSubject<SysLicenseBeneficiaryContractFormListDto | null> = new BehaviorSubject<SysLicenseBeneficiaryContractFormListDto | null>(null);
  externalProjectData$: BehaviorSubject<ExternalProjectDataDto | null> = new BehaviorSubject<ExternalProjectDataDto | null>(null);
  showTabsButton$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  requestPhases$: BehaviorSubject<requestPhase[]> = new BehaviorSubject<requestPhase[]>([]);

  licenseProjectRelativeWeights$: BehaviorSubject<LicenseProjectRelativeWeightDto[] | null> = new BehaviorSubject<LicenseProjectRelativeWeightDto[] | null>(null);
  financialGuaranteeOfProjectOwnershipFile$: BehaviorSubject<SysFileManagerCreateUpdateDto | null> = new BehaviorSubject<SysFileManagerCreateUpdateDto | null>(null);
  licenseProjectDelegator$: BehaviorSubject<LicenseProjectDelegatorsDto[] | null> = new BehaviorSubject<LicenseProjectDelegatorsDto[] | null>(null);
  financialStatement$: BehaviorSubject<LicenseProjectFinancialStatementDto[] | null> = new BehaviorSubject<LicenseProjectFinancialStatementDto[] | null>(null);

  licenseProjectZoneCaculations$: BehaviorSubject<licenseProjectZoneCaculations | null> = new BehaviorSubject<licenseProjectZoneCaculations | null>(null);
  licenseProjectMainRealStateDeveloper$: BehaviorSubject<LicenseProjectMainRealStateDeveloperDto[] | null> = new BehaviorSubject<LicenseProjectMainRealStateDeveloperDto[] | null>(null);
  beneficiaryContractFormAdditionalTerms$: BehaviorSubject<BeneficiaryContractFormAdditionalTermsDto[] | null> = new BehaviorSubject<BeneficiaryContractFormAdditionalTermsDto[] | null>(null);
  licenseProjectBusinessPaymentDto$: BehaviorSubject<LicenseProjectBusinessPaymentModel[] | null> = new BehaviorSubject<LicenseProjectBusinessPaymentModel[] | null>(null);
  projectDocumentData$: BehaviorSubject<ProjectDocumentDataDto | null> = new BehaviorSubject<ProjectDocumentDataDto | null>(null);
  bankingAccount$: BehaviorSubject<BankingAccountDto | null> = new BehaviorSubject<BankingAccountDto | null>(null);
  licenseProjectExhibitions$: BehaviorSubject<LicenseProjectExhibitionDto[] | null> = new BehaviorSubject<LicenseProjectExhibitionDto[] | null>(null);
  visitorEngineeringConsultant$: BehaviorSubject<VisitorEngineeringConsultantDto[] | null> = new BehaviorSubject<VisitorEngineeringConsultantDto[] | null>(null);
  licenseProjectDeveloper$: BehaviorSubject<LicenseProjectDeveloperDto[] | null> = new BehaviorSubject<LicenseProjectDeveloperDto[] | null>(null);
  licenseProjectRequestAttachment$: BehaviorSubject<LicenseProjectRequestAttachmentDto[] | null> = new BehaviorSubject<LicenseProjectRequestAttachmentDto[] | null>(null);

  licenseProjectDetachedUnit$: BehaviorSubject<LicenseProjectDetachedUnitRequestDetails[] | null> = new BehaviorSubject<LicenseProjectDetachedUnitRequestDetails[] | null>(null);
  licenseProjectPromissoryNotes$: BehaviorSubject<LicenseProjectPromissoryNoteDto[] | null> = new BehaviorSubject<LicenseProjectPromissoryNoteDto[] | null>(null);
  dataIsUpdate: EventEmitter<null> = new EventEmitter<null>()
  saveQWTable: EventEmitter<null> = new EventEmitter<null>()
  QWTableCompiledSuccessfully: EventEmitter<null> = new EventEmitter<null>()
  constructor(private _httpClient: HttpClient) { }

  GetLicenseRequestHeaderByRequestId(requestId: string): Observable<LicenseDetails | null> {
    return this._httpClient.get<CoreResponseDTO<LicenseDetails>>(`${Configuration.APIs.LicenseRequestHeader.GetFacilityByRequestId}/${requestId}`).pipe(
      map((res: CoreResponseDTO<LicenseDetails>) => {
        if (res.data) {
          return res.data as LicenseDetails;
        } else {
          return null
        }
      })
    );
  }

  GetRequestTypeById(requestHeaderId: string | null): Observable<string | null> {
    return this._httpClient.get<CoreResponseDTO<string| null>>(`${Configuration.APIs.LicenseRequestHeader.GetRequestTypeById}/${requestHeaderId}`).pipe(
      map((res: CoreResponseDTO<string | null>) => {
        if (res.data) {
          return res.data as string;
        } else {
          return null
        }
      })
    );
  }

  GetFacilityByProcessingRequestData(
    requestId: string
  ): Observable<LicenseRequestProcessingLogData | null> {
    return this._httpClient
      .get<CoreResponseDTO<LicenseRequestProcessingLogData>>(
        `${Configuration.APIs.LicenseRequestHeader.GetFacilityByProcessingRequestData}/${requestId}`
      )
      .pipe(
        map((res: CoreResponseDTO<LicenseRequestProcessingLogData>) => {
          if (res.data) {
            return res.data as LicenseRequestProcessingLogData;
          } else {
            return null;
          }
        })
      );
  }
  
  
  compile(requestId: string, notes: string, processingLogId: number): Observable<boolean> {
    return this._httpClient.post<CoreResponseDTO<any>>(`${Configuration.APIs.LicenseRequestService.Compile}`, { requestId, notes, processingLogId }).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone as boolean;
      })
    );
  }
  compileConditionalApproval(model: CompileWithLogFilesDto, processingLogId: number): Observable<boolean> {
    return this._httpClient.post<CoreResponseDTO<any>>(`${Configuration.APIs.LicenseRequestService.CompileConditionalApproval}`, { ...model, processingLogId }).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone as boolean;
      })
    );
  }
  compileQWTable(requestId: string, notes: string, processingLogId: number): Observable<boolean> {
    return this._httpClient.post<CoreResponseDTO<any>>(`${Configuration.APIs.LicenseRequestService.CompileQWTable}`, { requestId, notes, processingLogId }).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone as boolean;
      })
    );
  }
  compileGuaranteeLetterActivation(model: CompileWithLogFilesDto, processingLogId: number): Observable<boolean> {
    return this._httpClient.post<CoreResponseDTO<any>>(`${Configuration.APIs.LicenseRequestService.CompileGuaranteeLetterActivation}`, { ...model, processingLogId }).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone as boolean;
      })
    );
  }
  compileDeedMarginalization(model: CompileWithLogFilesDto, processingLogId: number): Observable<boolean> {
    return this._httpClient.post<CoreResponseDTO<any>>(`${Configuration.APIs.LicenseRequestService.CompileDeedMarginalization}`, { ...model, processingLogId }).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone as boolean;
      })
    );
  }
  compileOpenBankAccount(model: CompileWithLogFilesDto, processingLogId: number): Observable<boolean> {
    return this._httpClient.post<CoreResponseDTO<any>>(`${Configuration.APIs.LicenseRequestService.CompileOpenBankAccount}`, { ...model, processingLogId }).pipe(
      map((res: CoreResponseDTO<any>) => {
        return res.isDone as boolean;
      })
    );
  }
}
