import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectFeasibilityStudyDto } from '../../models/feasibilityStudyDtos/license-project-feasibility-study-dto';
import { Subscription } from 'rxjs';
import { LicenseProjectFeasibilityStudyService } from '../../services/feasibilityStudyServices/license-project-feasibility-study.service';
import { LicenseProjectFeasibilityStudyCreateUpdateDto } from '../../models/feasibilityStudyDtos/license-project-feasibility-study-create-update-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { LicenseProjectProposedScheduleFileCreateUpdateDto } from '../../models/feasibilityStudyDtos/license-project-proposed-schedule-file-create-update-dto';
import { LicenseProjectMarketingPlanFileCreateUpdateDto } from '../../models/feasibilityStudyDtos/license-project-marketing-plan-file-create-update-dto';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { environment } from 'src/environments/environment';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ToastrService } from 'ngx-toastr';
import { LicenseProjectFeasibilityStudyFileCreateUpdateDto } from '../../models/feasibilityStudyDtos/license-project-feasibility-study-file-create-update-dto';

@Component({
  selector: 'app-price-financial-analysis',
  templateUrl: './price-financial-analysis.component.html',
  styleUrls: ['./price-financial-analysis.component.scss'],
})
export class PriceFinancialAnalysisComponent implements OnInit, OnDestroy {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  licenseProjectFeasibilityStudyDto: LicenseProjectFeasibilityStudyDto =
    new LicenseProjectFeasibilityStudyDto();
  licenseProjectFeasibilityStudyCreateUpdateDto: LicenseProjectFeasibilityStudyCreateUpdateDto =
    new LicenseProjectFeasibilityStudyCreateUpdateDto();
  licenseProjectFeasibilityStudyForm = this._formBuilder.group({
    landTotalSpace: this._formBuilder.control<number | null>({
      value: null,
      disabled: true,
    }),
    landSpace: this._formBuilder.control<number | null>(null, [
      Validators.required,
      Validators.pattern(Configuration.validators.decimal),
      Validators.min(0),
    ]),
    residentialLandSpace: this._formBuilder.control<number | null>(null, [
      Validators.required,
      Validators.pattern(Configuration.validators.decimal),
      Validators.min(0),
    ]),
    totalProjectValue: this._formBuilder.control<number | null>(null, [
      Validators.required,
      Validators.pattern(Configuration.validators.decimal),
      Validators.min(0),
    ]),
    constructionCost: this._formBuilder.control<number | null>(null, [
      Validators.required,
      Validators.pattern(Configuration.validators.decimal),
      Validators.min(0),
    ]),
    consultantCost: this._formBuilder.control<number | null>(null, [
      Validators.required,
      Validators.pattern(Configuration.validators.decimal),
      Validators.min(0),
    ]),
    landPrice: this._formBuilder.control<number | null>(null, [
      Validators.required,
      Validators.pattern(Configuration.validators.decimal),
      Validators.min(0),
    ]),
    administrativeFees: this._formBuilder.control<number | null>(null, [
      Validators.required,
      Validators.pattern(Configuration.validators.decimal),
      Validators.min(0),
    ]),
    marketingFees: this._formBuilder.control<number | null>(null, [
      Validators.required,
      Validators.pattern(Configuration.validators.decimal),
      Validators.min(0),
    ]),
    profits: this._formBuilder.control<number | null>(null, [
      Validators.required,
      Validators.pattern(Configuration.validators.decimal),
      Validators.min(0),
    ]),
    assumptionsOnWhichTheStudyIsBased: ['', [Validators.required]],
    phoneNumber: [
      '',
      [
        Validators.required,
        Validators.pattern(Configuration.validators.PhoneNumber),
      ],
    ],
    mobileNumber: [
      '',
      [
        Validators.required,
        Validators.pattern(Configuration.validators.PhoneNumber),
      ],
    ],
    entityName: ['', [Validators.required]],
    emailAddress: ['', [Validators.required, Validators.email]],
  });
  mueltiFilesUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  licenseProjectProposedScheduleFiles: LicenseProjectProposedScheduleFileCreateUpdateDto[] =
    [];
  licenseProjectMarketingPlanFiles: LicenseProjectMarketingPlanFileCreateUpdateDto[] =
    [];
  licenseProjectFeasibilityStudyFiles: LicenseProjectFeasibilityStudyFileCreateUpdateDto[] =
    [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;
  get controls() {
    return this.licenseProjectFeasibilityStudyForm.controls;
  }
  constructor(
    private _licenseProjectFeasibilityStudyService: LicenseProjectFeasibilityStudyService,
    private _formBuilder: FormBuilder,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _toastrService: ToastrService,
  ) {}
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.GetByLicenseProjectId();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    // this.licenseProjectFeasibilityStudyDto.licenseProjectId = this.licenseProjectId as string;
  }
  GetByLicenseProjectId() {
    this.subscriptions.push(
      this._licenseProjectFeasibilityStudyService
        .GetByLicenseProjectId(this.licenseProjectId as string)
        .subscribe((res) => {
          if (res) {
            this.licenseProjectFeasibilityStudyDto =
              res as LicenseProjectFeasibilityStudyDto;
            this.licenseProjectFeasibilityStudyForm.patchValue(
              this.licenseProjectFeasibilityStudyDto,
            );
            this.licenseProjectMarketingPlanFiles =
              this.licenseProjectFeasibilityStudyDto.licenseProjectMarketingPlanFiles;
            this.licenseProjectProposedScheduleFiles =
              this.licenseProjectFeasibilityStudyDto.licenseProjectProposedScheduleFiles;
            this.licenseProjectFeasibilityStudyFiles =
              this.licenseProjectFeasibilityStudyDto.licenseProjectFeasibilityStudyFiles;
            this._licenseProjectFeasibilityStudyService.setFeasibilityStudyId(
              this.licenseProjectFeasibilityStudyDto.id,
            );
          }
        }),
    );
  }

  save(moveToNextTab: boolean = false): void {
    if (!this.licenseProjectFeasibilityStudyForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(
        'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
      );
      this.licenseProjectFeasibilityStudyForm?.markAllAsTouched();
      return;
    }
    this.licenseProjectFeasibilityStudyCreateUpdateDto = this
      .licenseProjectFeasibilityStudyForm
      .value as LicenseProjectFeasibilityStudyCreateUpdateDto;
    this.licenseProjectFeasibilityStudyCreateUpdateDto.id =
      this.licenseProjectFeasibilityStudyDto.id;
    this.licenseProjectFeasibilityStudyCreateUpdateDto.licenseProjectId = this
      .licenseProjectId as string;
    this.licenseProjectFeasibilityStudyCreateUpdateDto.licenseProjectMarketingPlanFiles =
      this.licenseProjectMarketingPlanFiles;
    this.licenseProjectFeasibilityStudyCreateUpdateDto.licenseProjectProposedScheduleFiles =
      this.licenseProjectProposedScheduleFiles;
    this.licenseProjectFeasibilityStudyCreateUpdateDto.licenseProjectFeasibilityStudyFiles =
      this.licenseProjectFeasibilityStudyFiles;

    this.licenseProjectFeasibilityStudyCreateUpdateDto.id = this
      .licenseProjectFeasibilityStudyCreateUpdateDto.id
      ? this.licenseProjectFeasibilityStudyCreateUpdateDto.id
      : '00000000-0000-0000-0000-000000000000';
    this.subscriptions.push(
      this._licenseProjectFeasibilityStudyService
        .Save(this.licenseProjectFeasibilityStudyCreateUpdateDto)
        .subscribe((res) => {
          if (res.isDone) {
            this.licenseProjectFeasibilityStudyDto =
              res.data as LicenseProjectFeasibilityStudyDto;
            this._licenseProjectFeasibilityStudyService.setFeasibilityStudyId(
              this.licenseProjectFeasibilityStudyDto.id,
            );
            this._toastrService.success('تم الحفظ');
            if (moveToNextTab) this.moveToNextTab();
          } else {
            this._toastrNotificationService.showError(res.message);
          }
        }),
    );
  }

  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
        (res: null) => {
          this.save(true);
        },
      ),
    );
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(
        (res: null) => {
          this.save();
        },
      ),
    );
  }
  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked();
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  onExistProjectProposedScheduleFilesUploaded(filesData: any) {
    if (filesData.eventRes.data.length === 0) {
      this.licenseProjectProposedScheduleFiles = [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.licenseProjectProposedScheduleFiles)
      this.licenseProjectProposedScheduleFiles = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectProposedScheduleFiles.push({
        proposedScheduleFileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        licenseProjectFeasibilityStudyId: this.licenseProjectFeasibilityStudyDto
          .id
          ? this.licenseProjectFeasibilityStudyDto.id
          : '00000000-0000-0000-0000-000000000000',
      });
    });
  }
  onExistLicenseProjectFeasibilityStudyFilesUploaded(filesData: any) {
    if (filesData.eventRes.data.length === 0) {
      this.licenseProjectFeasibilityStudyFiles = [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.licenseProjectFeasibilityStudyFiles)
      this.licenseProjectFeasibilityStudyFiles = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectFeasibilityStudyFiles.push({
        feasibilityStudyFileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        licenseProjectFeasibilityStudyId: this.licenseProjectFeasibilityStudyDto
          .id
          ? this.licenseProjectFeasibilityStudyDto.id
          : '00000000-0000-0000-0000-000000000000',
      });
    });
  }
  onExistProjectMarketingPlanFilesUploaded(filesData: any) {
    if (filesData.eventRes.data.length === 0) {
      this.licenseProjectMarketingPlanFiles = [];
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.licenseProjectMarketingPlanFiles)
      this.licenseProjectMarketingPlanFiles = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectMarketingPlanFiles.push({
        marketingPlanFileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        licenseProjectFeasibilityStudyId: this.licenseProjectFeasibilityStudyDto
          .id
          ? this.licenseProjectFeasibilityStudyDto.id
          : '00000000-0000-0000-0000-000000000000',
      });
    });
  }

  DeleteFile(fileId: string) {
    if (!fileId) return;

    this.subscriptions.push(
      this._licenseProjectFeasibilityStudyService
        .DeleteFile(this.licenseProjectId as string, fileId)
        .subscribe({
          next: () => {
            this._toastrService.success('تم حذف الملف بنجاح');

            this.licenseProjectFeasibilityStudyDto.licenseProjectProposedScheduleFiles =
              (
                this.licenseProjectFeasibilityStudyDto
                  .licenseProjectProposedScheduleFiles || []
              ).filter((x) => x.proposedScheduleFileId !== fileId);

            this.licenseProjectFeasibilityStudyDto.licenseProjectMarketingPlanFiles =
              (
                this.licenseProjectFeasibilityStudyDto
                  .licenseProjectMarketingPlanFiles || []
              ).filter((x) => x.marketingPlanFileId !== fileId);

            this.licenseProjectFeasibilityStudyDto.licenseProjectFeasibilityStudyFiles =
              (
                this.licenseProjectFeasibilityStudyDto
                  .licenseProjectFeasibilityStudyFiles || []
              ).filter((x) => x.feasibilityStudyFileId !== fileId);
          },
          error: () => {
            this._toastrService.error('حدث خطأ أثناء حذف الملف');
          },
        }),
    );
  }
}
