import { Component, Inject, LOCALE_ID } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { forkJoin, Subscription } from 'rxjs';
import { formatDate } from '@angular/common';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectEngineeringAccreditationStatusDto } from '../../../models/license-project-engineering-accreditation-status-dto';
import { accreditationStatus,  LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdateDto } from '../../../models/license-project-engineering-status-of-funds-required-from-entities-create-update-dto';
import { LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto } from '../../../models/license-project-engineering-status-of-funds-required-from-entities-dto';
import { LicenseProjectEngineeringServiceTypeDto } from '../../../models/license-project-engineering-service-type-dto';
import { LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService } from '../../../services/license-project-engineering-status-of-funds-required-from-entities.service';
@Component({
  selector: 'app-add-edit-project-delivery-phase-approvals',
  templateUrl: './add-edit-project-delivery-phase-approvals.component.html',
  styleUrls: ['./add-edit-project-delivery-phase-approvals.component.scss']
})
export class AddEditProjectDeliveryPhaseApprovalsComponent {
  subscriptions: Subscription[] = [];
  licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdate?: LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdateDto;
  licenseProjectEngineeringStatusOfFundsRequiredFromEntities?: LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto;
  licenseProjectEngineeringServiceTypeList?: LicenseProjectEngineeringServiceTypeDto[];
  licenseProjectEngineeringAccreditationStatusList?: LicenseProjectEngineeringAccreditationStatusDto[];
  accreditationStatus = accreditationStatus;
  licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesForm =
    this._formBuilder.group({
      serviceTypeId: this._formBuilder.control<number | null>(null, [Validators.required]),
      accreditationStatusId: this._formBuilder.control<number | null>(null, [Validators.required]),
      firstSubmissionDate: this._formBuilder.control<string | null>(null, [Validators.required]),
      lastSubmissionDate: this._formBuilder.control<string | null>(null, [Validators.required]),
      finalApprovalDate: this._formBuilder.control<string | null>(null),
      notes: this._formBuilder.control<string | null>(null, [Validators.required]),
    });

  get controls() {
    return this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesForm.controls;
  }

  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  licenseProjectEngineeringSupervisionPlannedReportDetailId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private _licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService: LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }

  ngOnInit(): void {
    this.observePopupEvents();
    this.loadComponentData();
    this.getLicenseProjectEngineeringStatusOfFundsRequiredFromEntities();
    this.getLicenseProjectEngineeringSupervisionPlannedReportDetailId();
  }


  private loadComponentData() {
    const requests = [
      this._licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService.getLicenseProjectEngineeringServiceTypeProjectDeliveryPhaseList(),
      this._licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService.getLicenseProjectEngineeringAccreditationStatusList(),

    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {
      this.licenseProjectEngineeringServiceTypeList = results[0] as LicenseProjectEngineeringServiceTypeDto[];
      this.licenseProjectEngineeringAccreditationStatusList = results[1] as LicenseProjectEngineeringAccreditationStatusDto[];

    });

    this.subscriptions.push(subscriptions);
  }

  getLicenseProjectEngineeringStatusOfFundsRequiredFromEntities() {
    this.subscriptions.push(
      this._licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService.getLicenseProjectEngineeringStatusOfFundsRequiredFromEntities().subscribe(res => {
        if (res) {
          debugger;
          this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities = res as LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto;
          if (this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities && this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities.id && this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities.id != "00000000-0000-0000-0000-000000000000") {
            this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesForm.patchValue(this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities as any)
            this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesForm.controls.firstSubmissionDate.setValue(formatDate(this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities.firstSubmissionDate, 'yyyy-MM-dd', this.locale));
            this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesForm.controls.lastSubmissionDate.setValue(formatDate(this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities.lastSubmissionDate, 'yyyy-MM-dd', this.locale));
            this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesForm.controls.finalApprovalDate.setValue(formatDate(this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities.finalApprovalDate, 'yyyy-MM-dd', this.locale));
          }
        }
      })
    )
  }

  getLicenseProjectEngineeringSupervisionPlannedReportDetailId() {
    this.subscriptions.push(
      this._licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService.getLicenseProjectEngineeringSupervisionPlannedReportDetailId().subscribe(res => {
        if (res) {
          debugger;
          this.licenseProjectEngineeringSupervisionPlannedReportDetailId = res as string;;

        }
      })
    )
  }
  save(): void {
    debugger;
    if (!this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesForm.valid) {
      this.showValidation = true;
      return;
    }
    if ((this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesForm.controls.accreditationStatusId.value == accreditationStatus.Released || this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesForm.controls.accreditationStatusId.value == accreditationStatus.Certified) && !this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesForm.controls.finalApprovalDate.value) {
      this.showValidation = true;
      return;
    }
    debugger;
    this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdate = this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesForm.value as {} as LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdateDto;
    this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdate.id = this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities?.id as string;
    this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportDetailId = this.licenseProjectEngineeringSupervisionPlannedReportDetailId as string;
    this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdate.serviceTypeId = Number(this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesForm.controls.serviceTypeId.value);
    this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdate.accreditationStatusId = Number(this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesForm.controls.accreditationStatusId.value);
    this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdate.isForDelivery = true;
    this.subscriptions.push(
      this._licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService.save(this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesCreateUpdate).subscribe((res) => {
        debugger;
        if (res?.isDone) {
          this._licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService.submitSuccessfullyEventEmitter.emit()
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }

      })
    )
  }
  private observeLicenseProjectEngineeringSupervisionActualReportForm() {
    this.subscriptions.push(
      this.licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesForm.valueChanges.subscribe(
        (changes) => {
        }))
  }
  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
        this.save()
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

}
