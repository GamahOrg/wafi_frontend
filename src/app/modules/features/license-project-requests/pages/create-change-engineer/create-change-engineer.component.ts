import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectDDL } from '../../../license/models/license-project-by-facilityid-dto';
import { ChangeLicenseProjectEngineeringRequestDto } from '../../models/change-license-project-engineering-request-dto';
import { environment } from 'src/environments/environment';
import { ChangeLicenseProjectEngineeringRequestCreateUpdateDto } from '../../models/change-license-project-engineering-request-create-update-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ChangeLicenseProjectEngineeringRequestService } from '../../services/change-license-project-engineering-request.service';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { DatePipe } from '@angular/common';
import { LicenseProjectRequestTypeEnum } from '../../enums/license-project-request-type.enum';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { QualificationType } from '../../../qualifying/dataModels/enum/qualification-request-type';
import { FacilityShortDto } from '../../models/request-header-details';
import { LicenseProjectService } from '../../services/license-project.service';
import { LicenseProjectDetailsDto } from '../../models/license-project.model';

@Component({
  selector: 'app-create-change-engineer',
  templateUrl: './create-change-engineer.component.html',
  styleUrls: ['./create-change-engineer.component.scss']
})
export class CreateChangeEngineerComponent {

  subscriptions: Subscription[] = [];
  licenseProjects: LicenseProjectDDL[] = [];
  licenseProjectRequestId?: string;
  LicenseProjectRequestTypeEnum = LicenseProjectRequestTypeEnum;
  qualificationTypeEnum = QualificationType;
  changeLicenseProjectEngineeringRequest?: ChangeLicenseProjectEngineeringRequestDto;
  baseUrl = `${environment.baseURL}/`;
  changeLicenseProjectEngineeringRequestCreateUpdate?: ChangeLicenseProjectEngineeringRequestCreateUpdateDto;
  changeEngineeringForm = this._formBuilder.group({
    commercialRegister: ['', [Validators.required]],
    licenseProjectId: ['', [Validators.required]],
    reasons: ['', [Validators.required]],
    engineeringFacilityId: ['']
  });
  showValidation: boolean = false;
  price?: number;
  showFormValidation: boolean = false;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  newEngineeringFacility?: FacilityShortDto | null = null;
  projectDetails?: LicenseProjectDetailsDto;
  showDetails: boolean = false;
  alternativeConsultingOfficeAgreementId?: string;
  clearanceEngineeringConsultantFileId?: string;
  previousConsultingOfficeReportId?: string;
  facilityId: string = '00000000-0000-0000-0000-000000000000';
  get controls() {
    return this.changeEngineeringForm.controls;
  }

  constructor(
    private _changeLicenseProjectEngineeringRequestService: ChangeLicenseProjectEngineeringRequestService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _userDataService: UserDataService,
    private _toastrNotificationService: ToastrNotificatioService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private _licenseRequestService: LincenseRequestProjectService,
    private _licenseProjectService: LicenseProjectService,
  ) {

  }
  ngOnInit(): void {
    this.obseveCustomerData();
    this.observePrice();
  }
  private observePrice(): void {
    this.subscriptions.push(
      this._licenseRequestService.getLicenseProjectRequestPrice(this.changeEngineeringForm.controls.licenseProjectId.value as string, LicenseProjectRequestTypeEnum.ChangeEngineering).subscribe((res: any) => {
        this.price = res;
      })
    )
  }

  getLicenseProjectByType(): void {
    this._licenseRequestService
      .getLicenseProjectByType(this.facilityId, LicenseProjectRequestTypeEnum.ChangeEngineering)
      .subscribe(
        (response: any) => {
          this.licenseProjects = response || [];
        },
      );
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.facilityId = res?.facilities[0]?.id || '';
          this.getLicenseProjectByType();
        })
    );
  }
  getLicenseDetails(): void {
    if (!this.changeEngineeringForm.controls.licenseProjectId.value) {
      return;
    }
    this.subscriptions.push(
      this._licenseProjectService.getLicenseProjectDetails(this.changeEngineeringForm.controls.licenseProjectId.value).subscribe((res: LicenseProjectDetailsDto) => {
        this.projectDetails = res
        this.showDetails = true;
      })
    );
  }

  onExistAlternativeConsultingOfficeAgreementFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.alternativeConsultingOfficeAgreementId = data.id;
    });
  }

  onExistclearanceEngineeringConsultantFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.clearanceEngineeringConsultantFileId = data.id;
    });
  }
  onExistPreviousConsultingOfficeReportFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.previousConsultingOfficeReportId = data.id;
    });
  }

  clearCommercialRegister() {
    this.controls.engineeringFacilityId.setValue(null);
    this.newEngineeringFacility = null;
  }

  validateCommercialRegister(): void {
    debugger;

    let commercialRegister = this.controls.commercialRegister.value;

    if (!commercialRegister) {
      this._toastrNotificationService.showError('برجاء ادخل السجل التجاري للاستشاري الهندسي الجديد والضغط على تحقق ')
    }
    if (commercialRegister) {
      this.subscriptions.push(
        this._changeLicenseProjectEngineeringRequestService.validateCommercialRegister(commercialRegister as string,
          this.qualificationTypeEnum.engineeringConsultantQualificationRequest as string, this.changeEngineeringForm.controls.licenseProjectId.value as string).subscribe((res) => {

            if (res) {
              debugger;
              this.newEngineeringFacility = res.facility as FacilityShortDto;
              this.changeEngineeringForm.controls.engineeringFacilityId.setValue(this.newEngineeringFacility.id as string);
            }

          })
      )
    }
  }


  save(): void {

    let charteredAccountantFacilityId = this.controls.engineeringFacilityId.value;

    if (!charteredAccountantFacilityId) {
      this._toastrNotificationService.showError('برجاء ادخل السجل التجاري للاستشاري الهندسي الجديد والضغط على تحقق ')
    }

    debugger;
    if (
      !this.changeEngineeringForm.controls.reasons.value ||
      !this.alternativeConsultingOfficeAgreementId ||
      !this.clearanceEngineeringConsultantFileId ||
      !this.previousConsultingOfficeReportId || !this.changeEngineeringForm.controls.commercialRegister.value
    ) {
      this.showValidation = true;
      return;
    }

    this.changeLicenseProjectEngineeringRequestCreateUpdate = {} as ChangeLicenseProjectEngineeringRequestCreateUpdateDto;
    this.changeLicenseProjectEngineeringRequestCreateUpdate.facilityId = this.facilityId;
    this.changeLicenseProjectEngineeringRequestCreateUpdate.engineeringFacilityId = this.changeEngineeringForm.controls.engineeringFacilityId.value as string;
    this.changeLicenseProjectEngineeringRequestCreateUpdate.licenseProjectId = this.changeEngineeringForm.controls.licenseProjectId.value as string;
    this.changeLicenseProjectEngineeringRequestCreateUpdate.reasons = this.changeEngineeringForm.controls.reasons.value as string;
    this.changeLicenseProjectEngineeringRequestCreateUpdate.alternativeConsultingOfficeAgreementId = this.alternativeConsultingOfficeAgreementId as string;
    this.changeLicenseProjectEngineeringRequestCreateUpdate.clearanceEngineeringConsultantFileId = this.clearanceEngineeringConsultantFileId as string;
    this.changeLicenseProjectEngineeringRequestCreateUpdate.previousConsultingOfficeReportId = this.previousConsultingOfficeReportId as string;
    this.subscriptions.push(
      this._changeLicenseProjectEngineeringRequestService.save(this.changeLicenseProjectEngineeringRequestCreateUpdate).subscribe((res) => {

        if (res) {
          
          this._changeLicenseProjectEngineeringRequestService.setLicenseProjectRequestChangeEngineer(res as ChangeLicenseProjectEngineeringRequestDto);
          this._toastrNotificationService.showSuccess('تم انشاء الطلب بنجاح');
          this.projectRequestLocalStorageService.setSelectedSelectedProjectLicenseRequestIdInLocalStorage(res?.licenseProjectRequestId!)
          let requestDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changeEngineerSummary}`;
          this._router.navigate([requestDetailsRoute]);
        }

      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
