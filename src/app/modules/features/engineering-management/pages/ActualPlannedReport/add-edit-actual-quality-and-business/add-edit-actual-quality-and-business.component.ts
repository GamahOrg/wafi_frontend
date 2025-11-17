import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdateDto } from '../../../models/license-project-engineering-actual-quality-plan-and-assurance-create-update-dto';
import { LicenseProjectEngineeringActualQualityPlanAndAssuranceDto } from '../../../models/license-project-engineering-actual-quality-plan-and-assurance-dto';
import { SysLicenseProjectQualityStatusDto } from '../../../models/sys-license-project-quality-status-dto';
import { EngineeringSupervisionReportActualQualityAndBusinessService } from '../../../services/engineering-supervision-report-actual-quality-and-business.service';

@Component({
  selector: 'app-add-edit-actual-quality-and-business',
  templateUrl: './add-edit-actual-quality-and-business.component.html',
  styleUrls: ['./add-edit-actual-quality-and-business.component.scss'],
})
export class AddEditActualQualityAndBusinessComponent {
  subscriptions: Subscription[] = [];
  licenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdate?: LicenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdateDto;
  licenseProjectEngineeringSupervisionActualReportQualityAndBusinessForm =
    this._formBuilder.group({
      qualityManagementPlanStatusId: this._formBuilder.control<number | null>(
        null,
        [Validators.required]
      ),
      qualityManagementProceduresAndModelsId: this._formBuilder.control<
        number | null
      >(null, [Validators.required]),
      examinationAndTestPlanId: this._formBuilder.control<number | null>(null, [
        Validators.required,
      ]),
      actualMonthlyConsultantEngineerStaffAccordingPlan:
        this._formBuilder.control<number | null>(0, [Validators.required]),
      actualMonthlyConsultantInspectorStaffAccordingPlan:
        this._formBuilder.control<number | null>(0, [Validators.required]),
      methodStatementsId: this._formBuilder.control<number | null>(null, [
        Validators.required,
      ]),
    });

  get controls() {
    return this
      .licenseProjectEngineeringSupervisionActualReportQualityAndBusinessForm
      .controls;
  }

  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;
  licenseProjectEngineeringActualQualityPlanAndAssurance?: LicenseProjectEngineeringActualQualityPlanAndAssuranceDto;
  licenseProjectQualityStatusList?: SysLicenseProjectQualityStatusDto[];

  constructor(
    private _engineeringSupervisionReportActualQualityAndBusinessService: EngineeringSupervisionReportActualQualityAndBusinessService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService
  ) {}

  ngOnInit(): void {
    this.observePopupEvents();
    //  this.observeLicenseProjectEngineeringSupervisionActualReportForm();
    this.getLicenseProjectEngineeringActualQualityFirstParte();
    this.getLicenseProjectQualityStatusList();
  }

  getLicenseProjectQualityStatusList() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService
        .getLicenseProjectQualityStatusList()
        .subscribe((res) => {
          if (res) {
            this.licenseProjectQualityStatusList =
              res as SysLicenseProjectQualityStatusDto[];
          }
        })
    );
  }

  getLicenseProjectEngineeringActualQualityFirstParte() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService
        .getLicenseProjectEngineeringActualQualityPlanAndAssuranceObj()
        .subscribe((res) => {
          if (res) {
            this.licenseProjectEngineeringActualQualityPlanAndAssurance =
              res as LicenseProjectEngineeringActualQualityPlanAndAssuranceDto;
            this.licenseProjectEngineeringSupervisionActualReportQualityAndBusinessForm.patchValue(
              this.licenseProjectEngineeringActualQualityPlanAndAssurance as any
            );
          }
        })
    );
  }

  save(): void {
    if (
      !this
        .licenseProjectEngineeringSupervisionActualReportQualityAndBusinessForm
        .valid
    ) {
      this.showValidation = true;
      return;
    }

    this.licenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdate =
      this
        .licenseProjectEngineeringSupervisionActualReportQualityAndBusinessForm
        .value as {} as LicenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdateDto;
    this.licenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdate.id =
      this.licenseProjectEngineeringActualQualityPlanAndAssurance?.id as string;
    this.licenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdate.qualityManagementPlanStatusId =
      Number(
        this.licenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdate
          .qualityManagementPlanStatusId
      );
    this.licenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdate.qualityManagementProceduresAndModelsId =
      Number(
        this.licenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdate
          .qualityManagementProceduresAndModelsId
      );
    this.licenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdate.examinationAndTestPlanId =
      Number(
        this.licenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdate
          .examinationAndTestPlanId
      );
    this.licenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdate.methodStatementsId =
      Number(
        this.licenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdate
          .methodStatementsId
      );
    this.subscriptions.push(
      this._engineeringSupervisionReportActualQualityAndBusinessService
        .saveLicenseProjectEngineeringActualQualityPlanAndAssurance(
          this
            .licenseProjectEngineeringActualQualityPlanAndAssuranceCreateUpdate
        )
        .subscribe((res) => {
          if (res?.isDone) {
            this._engineeringSupervisionReportActualQualityAndBusinessService.submitSuccessfullyEventEmitter.emit();
            this._toastrNotificationService.showSuccess('تم الحفظ');
            this.closeDialog();
          }
        })
    );
  }
  private observeLicenseProjectEngineeringSupervisionActualReportForm() {
    this.subscriptions.push(
      this.licenseProjectEngineeringSupervisionActualReportQualityAndBusinessForm.valueChanges.subscribe(
        (changes) => {}
      )
    );
  }
  // popup
  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res);
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res);
        this.save();
      })
    );
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
