import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { ReplaySubject, takeUntil } from "rxjs";
import { QualificationTypeCode } from "../../../../../../core/enums/qualification-type-code";
import {
  LicenseProjectEngineeringConsultantService
} from "../../../services/license-project-engineering-consultant.service";
import { FacilityShortDto } from '../../../models/facility-short-dto';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';

// this component is shared for all whose need validate on CRN
@Component({
  selector: 'app-engineering-consultant-customer-info',
  templateUrl: './engineering-consultant-customer-info.component.html',
  styleUrls: ['./engineering-consultant-customer-info.component.scss']
})
export class EngineeringConsultantCustomerInfoComponent implements OnInit, OnDestroy {
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  @Input() form!: FormGroup;
  @Input() code: QualificationTypeCode = QualificationTypeCode.ContributionEngineeringConsultant;
  @Input() label: string = "";
  @Input() buttonName: string = "";
  @Input() requiredMessage: string = "";
  @Output() onChange: EventEmitter<FacilityShortDto> = new EventEmitter<FacilityShortDto>();
  facility: FacilityShortDto | undefined = undefined;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  localizations = {
    FacilityName: "اسم المنشأة",
    FacilityType: "نوع المنشأة",
    CertificateNumber: "رقم شهادة التأهيل",
    LicenseNumber: "رقم الرخصة",
  }

  constructor(public engineeringConsultantService: LicenseProjectEngineeringConsultantService,
    private _sharedLicenseProjectService: SharedLicenseProjectService) {
  }

  get controls() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  validate() {

    let commercialRegister = this.controls['commercialRegister'].value;
    if (commercialRegister) {


      this.engineeringConsultantService.validateCommercialRegister(commercialRegister, this.code,this.licenseProjectId)
        .pipe(takeUntil(this.destroyed$))
        .subscribe((result) => {

          if (result && result.data) {
            this.facility = result.data;
            this.onChange.emit(this.facility);
          }
        }, () => {
          this.onChange.emit(this.facility);
        });
    }

  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
