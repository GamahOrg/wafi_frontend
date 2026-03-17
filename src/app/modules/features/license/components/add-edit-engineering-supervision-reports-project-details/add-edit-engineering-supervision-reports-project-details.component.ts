import { Component } from '@angular/core';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { MasterLicenseProjectEngineeringSupervisionPlannedReportDto } from '../../dataModels/master-license-project-engineering-supervision-planned-report-dto';
import {
  LicenseProjectEngineeringSupervisionPlannedReportAttachmentCreateUpdateDto,
  LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto,
  MasterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdateDto,
} from '../../dataModels/master-license-project-engineering-supervision-planned-report-create-update-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../services/license-project-engineering-supervision-planned-report-detail.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';

@Component({
  selector: 'app-add-edit-engineering-supervision-reports-project-details',
  templateUrl:
    './add-edit-engineering-supervision-reports-project-details.component.html',
  styleUrls: [
    './add-edit-engineering-supervision-reports-project-details.component.scss',
  ],
})
export class AddEditEngineeringSupervisionReportsProjectDetailsComponent {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  licenseProjectEngineeringSupervisionPlannedReportDetailList?: LicenseProjectEngineeringSupervisionPlannedReportDetailCreateUpdateDto[];
  currenrYear?: number;
  years?: number[];
  masterLicenseProjectEngineeringSupervisionPlannedReport?: MasterLicenseProjectEngineeringSupervisionPlannedReportDto;
  masterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdate?: MasterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdateDto;
  
  licenseProjectEngineeringSupervisionPlannedReportForm =
    this._formBuilder.group({
      expectedConstructionCost: this._formBuilder.control<number | null>(null, [
        Validators.required,
        Validators.pattern(Configuration.validators.decimal),
        Validators.min(0),
      ]),
      contractor: this._formBuilder.control<string | null>(null, [
        Validators.required,
      ]),
      contractualStartDate: this._formBuilder.control<string | null>(null, [
        Validators.required,
      ]),
      contractualFinishDate: this._formBuilder.control<string | null>(null, [
        Validators.required,
      ]),
    });

  get controls() {
    return this.licenseProjectEngineeringSupervisionPlannedReportForm.controls;
  }

  mueltiFilesUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;
  licenseProjectEngineeringSupervisionPlannedReportAttachmentFiles: LicenseProjectEngineeringSupervisionPlannedReportAttachmentCreateUpdateDto[] = [];

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
    this.masterLicenseProjectEngineeringSupervisionPlannedReport = obj as MasterLicenseProjectEngineeringSupervisionPlannedReportDto;
    this.licenseProjectEngineeringSupervisionPlannedReportForm.patchValue(
      this.masterLicenseProjectEngineeringSupervisionPlannedReport as any
    );
    this.licenseProjectEngineeringSupervisionPlannedReportAttachmentFiles = this.masterLicenseProjectEngineeringSupervisionPlannedReport
      .licenseProjectEngineeringSupervisionPlannedReportAttachments as LicenseProjectEngineeringSupervisionPlannedReportAttachmentCreateUpdateDto[];
  }

  save(): void {
    if (!this.licenseProjectEngineeringSupervisionPlannedReportForm.valid ||
        !this.licenseProjectEngineeringSupervisionPlannedReportAttachmentFiles ||
        this.licenseProjectEngineeringSupervisionPlannedReportAttachmentFiles.length == 0) {
      this.showValidation = true;
      return;
    }

    this.masterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdate =
      this.licenseProjectEngineeringSupervisionPlannedReportForm.value as {} as MasterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdateDto;
    this.masterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdate.id =this.licenseProjectId as string;
    this.masterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportAttachments =
      this.licenseProjectEngineeringSupervisionPlannedReportAttachmentFiles as LicenseProjectEngineeringSupervisionPlannedReportAttachmentCreateUpdateDto[];

    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService.SaveLicenseProjectEngineeringDetails(this.masterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdate)
        .subscribe((res) => {
          if (res) {
            this._toastrNotificationService.showSuccess('تم الحفظ');
            this.closeDialogWithData(res);
          }
        })
    );
  }

  private observelicenseProjectEngineeringSupervisionPlannedReportForm() {
    this.subscriptions.push(
      this.licenseProjectEngineeringSupervisionPlannedReportForm.valueChanges.subscribe(
        (changes) => {}
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  onLicenseProjectEngineeringSupervisionPlannedReportAttachmentFilesUploaded(filesData: any) {
    if (filesData.eventRes.data.length == 0) {
      this.licenseProjectEngineeringSupervisionPlannedReportAttachmentFiles = [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.licenseProjectEngineeringSupervisionPlannedReportAttachmentFiles)
      this.licenseProjectEngineeringSupervisionPlannedReportAttachmentFiles = [];
    
    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectEngineeringSupervisionPlannedReportAttachmentFiles.push({
          generalSiteMapFileId: data.id,
          id: '00000000-0000-0000-0000-000000000000',
          licenseProjectId: this.licenseProjectId as string,
      });
    });
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

  getDateNow(): string{
    const dateNow: string = new Date().toISOString().substring(0, 10);
    const [year, month, day] = dateNow.split('-');
    return `${day}/${month}/${year}`;
  }
  
}
