import { Component, OnInit } from '@angular/core';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { LicenseProjectEngineeringInfrastructureDto, MasterLicenseProjectEngineeringSupervisionPlannedReportDto } from '../../dataModels/master-license-project-engineering-supervision-planned-report-dto';
import {
  LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto,
} from '../../dataModels/master-license-project-engineering-supervision-planned-report-create-update-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../services/license-project-engineering-supervision-planned-report-detail.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';

@Component({
  selector: 'app-add-infrastructure-rates',
  templateUrl: './add-infrastructure-rates.component.html',
  styleUrls: ['./add-infrastructure-rates.component.scss']
})

export class AddInfrastructureRatesComponent implements OnInit {
    baseUrl = `${environment.baseURL}/`;
    subscriptions: Subscription[] = [];
    licenseProjectEngineeringSupervisionPlannedReportDetailList?: LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto[];
    currenrYear?: number;
    years?: number[];
    licenseProjectEngineeringInfrastructure?: LicenseProjectEngineeringInfrastructureDto;
    // masterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdate?: MasterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdateDto;
    
    addInfrastructureRatesForm =
      this._formBuilder.group({
        infrastructureContractor: this._formBuilder.control<string | null>(null, [
        Validators.required,
        ]),
        infrastructureConsultant: this._formBuilder.control<string | null>(null, [
          Validators.required,
        ]),
        infrastructureCost: this._formBuilder.control<number | null>(null, [
          Validators.required,
          Validators.pattern(Configuration.validators.decimal),
          Validators.min(0),
        ]),
      });
  
    get controls() {
      return this.addInfrastructureRatesForm.controls;
    }
  
    licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
    showValidation: boolean = false;
  
    constructor(
      private _licenseProjectEngineeringSupervisionPlannedReportDetailService: LicenseProjectEngineeringSupervisionPlannedReportDetailService,
      private _formBuilder: FormBuilder,
      private _sharedLicenseProjectService: SharedLicenseProjectService,
      private _toastrNotificationService: ToastrNotificatioService,
      private _popupService: PopupService
    ) {}
  
    ngOnInit(): void {
      this.getLicenseProjectIdStorage();
      this.observePopupEvents();
    }
  
    private getLicenseProjectIdStorage(): void {
      this.licenseProjectId =
        this._sharedLicenseProjectService.getLicenseProjectIdStorage();
      if (this.licenseProjectId) {
        this.GetByLicenseProjectId();
      }
    }
  
    GetByLicenseProjectId() {
      this.subscriptions.push(
        this._licenseProjectEngineeringSupervisionPlannedReportDetailService
          .GetLicenseProjectEngineeringDetails(this.licenseProjectId as string).subscribe((res) => {
            if (res) {
              this.addValuesToMainForm(res);
            }
          })
      );
    }
  
    addValuesToMainForm(obj: MasterLicenseProjectEngineeringSupervisionPlannedReportDto) {
      this.licenseProjectEngineeringInfrastructure = obj as LicenseProjectEngineeringInfrastructureDto;
      this.addInfrastructureRatesForm.patchValue(
        this.licenseProjectEngineeringInfrastructure as any
      );
     }
  
    save(): void {
      if (!this.addInfrastructureRatesForm.valid) {
        this.showValidation = true;
        return;
      }
  
      this.licenseProjectEngineeringInfrastructure =
        this.addInfrastructureRatesForm.value as {} as LicenseProjectEngineeringInfrastructureDto;
      this.licenseProjectEngineeringInfrastructure.id = this.licenseProjectId as string;
     
      this.subscriptions.push(
        this._licenseProjectEngineeringSupervisionPlannedReportDetailService.UpdateLicenseProjectEngineeringInfrastructure(this.licenseProjectEngineeringInfrastructure)
          .subscribe((res) => {
            if (res) {
              this._licenseProjectEngineeringSupervisionPlannedReportDetailService.licenseProjectEngineeringInfrastructure.emit(res);
              this._toastrNotificationService.showSuccess('تم الحفظ');
              this.closeDialogWithData(res);
            }
          })
      );
    }

    ngOnDestroy(): void {
      this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
  
    // popup
    observePopupEvents(): void {
      this.observecancelAction();
      this.observeconfirmAction();
    }
  
    private observecancelAction() {
      this.subscriptions.push(
        this._popupService.cancelAction.subscribe((res: PopupData) => {
        })
      );
    }
  
    private observeconfirmAction() {
      this.subscriptions.push(
        this._popupService.confirmAction.subscribe((res: PopupData) => {
          this.save();
        })
      );
    }
  
    private closeDialog(): void {
      this._popupService.dismissDialog();
    }
  
    private closeDialogWithData(data: any): void {
      this._popupService.dismissDialogWithData(data);
    }

  }
  