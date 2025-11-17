import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectFeasibilityStudyDto } from '../../../models/feasibilityStudyDtos/license-project-feasibility-study-dto';
import { Subscription } from 'rxjs';
import { LicenseProjectFeasibilityStudyService } from '../../../services/feasibilityStudyServices/license-project-feasibility-study.service';
import { LicenseProjectFeasibilityStudyCreateUpdateDto, LicenseProjectFeasibilityStudySaveDto } from '../../../models/feasibilityStudyDtos/license-project-feasibility-study-create-update-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { LicenseProjectProposedScheduleFileCreateUpdateDto } from '../../../models/feasibilityStudyDtos/license-project-proposed-schedule-file-create-update-dto';
import { LicenseProjectMarketingPlanFileCreateUpdateDto } from '../../../models/feasibilityStudyDtos/license-project-marketing-plan-file-create-update-dto';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { environment } from 'src/environments/environment';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ToastrService } from 'ngx-toastr';
import { LicenseProjectFeasibilityStudyFileCreateUpdateDto } from '../../../models/feasibilityStudyDtos/license-project-feasibility-study-file-create-update-dto';

@Component({
  selector: 'app-fawria-licenseproject-feasibility-study-view-only',
  templateUrl: './fawria-licenseproject-feasibility-study-view-only.component.html',
  styleUrls: ['./fawria-licenseproject-feasibility-study-view-only.component.scss']
})
export class FawriaLicenseprojectFeasibilityStudyViewOnlyComponent implements OnInit, OnDestroy {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  licenseProjectFeasibilityStudyDto: LicenseProjectFeasibilityStudyDto = new LicenseProjectFeasibilityStudyDto();
  licenseProjectFeasibilityStudyCreateUpdateDto: LicenseProjectFeasibilityStudySaveDto = new LicenseProjectFeasibilityStudySaveDto();

  licenseProjectFeasibilityStudyForm = this._formBuilder.group({
    totlaAreaOfCommonAreas: this._formBuilder.control<number | null>(null, [Validators.required, Validators.min(0)]),
    infrastructureDevelopmentCosts: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    totalConstructionCosts: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    totalNonConstructionCosts: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    totalLandCost: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    totalSalesValue: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    totalProjectCosts: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    expectedNetProfit: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    averageSalesPricePerMeter: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    averageConstructionCostPerMeter: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
  });
  mueltiFilesUploaderData: FileUploader = {
    multiple: true
  } as FileUploader;
  licenseProjectProposedScheduleFiles: LicenseProjectProposedScheduleFileCreateUpdateDto[] = [];
  licenseProjectMarketingPlanFiles: LicenseProjectMarketingPlanFileCreateUpdateDto[] = [];
  licenseProjectFeasibilityStudyFiles: LicenseProjectFeasibilityStudyFileCreateUpdateDto[] = [];
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
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
  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage()
    this.GetByLicenseProjectId();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
    this.disableFormForViewOnly();
  }

  private disableFormForViewOnly(): void {
    this.licenseProjectFeasibilityStudyForm.disable();
  }


  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    // this.licenseProjectFeasibilityStudyDto.licenseProjectId = this.licenseProjectId as string;
  }
  GetByLicenseProjectId() {
    this.subscriptions.push(
      this._licenseProjectFeasibilityStudyService.GetByLicenseProjectId(this.licenseProjectId as string).subscribe(res => {
        if (res) {
          this.licenseProjectFeasibilityStudyDto = res as LicenseProjectFeasibilityStudyDto;
          this.licenseProjectFeasibilityStudyForm.patchValue(this.licenseProjectFeasibilityStudyDto);
          this.licenseProjectMarketingPlanFiles = this.licenseProjectFeasibilityStudyDto.licenseProjectMarketingPlanFiles;
          this.licenseProjectProposedScheduleFiles = this.licenseProjectFeasibilityStudyDto.licenseProjectProposedScheduleFiles;
          this.licenseProjectFeasibilityStudyFiles=this.licenseProjectFeasibilityStudyDto.licenseProjectFeasibilityStudyFiles;
          this._licenseProjectFeasibilityStudyService.setFeasibilityStudyId(this.licenseProjectFeasibilityStudyDto.id);

          // Format numbers with commas after loading data
          setTimeout(() => this.formatAllNumberInputs(), 0);
        }
      })
    )
  }

  save(moveToNextTab: boolean = false): void {
    if (!this.licenseProjectFeasibilityStudyForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError('لم يتم إدخال جميع الحقول الإلزامية، يرجى استكمال البيانات المطلوبة');
      this.licenseProjectFeasibilityStudyForm?.markAllAsTouched();
      return;
    }
    this.licenseProjectFeasibilityStudyCreateUpdateDto = this.licenseProjectFeasibilityStudyForm.value as LicenseProjectFeasibilityStudySaveDto;
    this.licenseProjectFeasibilityStudyCreateUpdateDto.id = this.licenseProjectFeasibilityStudyDto.id;
    this.licenseProjectFeasibilityStudyCreateUpdateDto.licenseProjectId = this.licenseProjectId as string;


    this.licenseProjectFeasibilityStudyCreateUpdateDto.id = this.licenseProjectFeasibilityStudyCreateUpdateDto.id ? this.licenseProjectFeasibilityStudyCreateUpdateDto.id : "00000000-0000-0000-0000-000000000000";
    this.subscriptions.push(
      this._licenseProjectFeasibilityStudyService.SaveFawriaFeasibilityStudy(this.licenseProjectFeasibilityStudyCreateUpdateDto).subscribe(res => {
        if (res.isDone) {
          this.licenseProjectFeasibilityStudyDto = res.data as LicenseProjectFeasibilityStudyDto;
          this._licenseProjectFeasibilityStudyService.setFeasibilityStudyId(this.licenseProjectFeasibilityStudyDto.id);
          this._toastrService.success('تم حفظ الطلب كمسودة، يمكنك استكماله لاحقا');
          if (moveToNextTab) this.moveToNextTab()
        }
      else{
        this._toastrNotificationService.showError(res.message);
      }
      })
    )
  }


  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        // View-only mode: just move to next tab without saving
        this.moveToNextTab()
      })
    )
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe((res: null) => {
        // View-only mode: save is disabled
        return;
      })
    )
  }
  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked()
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

  onExistProjectProposedScheduleFilesUploaded(filesData: any) {
    // View-only mode: file upload is disabled
    return;
  }
  onExistLicenseProjectFeasibilityStudyFilesUploaded(filesData: any) {
    // View-only mode: file upload is disabled
    return;
  }
  onExistProjectMarketingPlanFilesUploaded(filesData: any) {
    // View-only mode: file upload is disabled
    return;
  }

  // Convert Arabic-Indic numerals to English numerals
  convertArabicToEnglishNumbers(event: any): void {
    const input = event.target as HTMLInputElement;
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let value = input.value;
    arabicNumbers.forEach((arabic, index) => {
      value = value.replace(new RegExp(arabic, 'g'), englishNumbers[index]);
    });

    if (value !== input.value) {
      input.value = value;
      // Trigger value change in the form control
      const controlName = input.getAttribute('formControlName');
      if (controlName) {
        this.licenseProjectFeasibilityStudyForm.get(controlName)?.setValue(value);
      }
    }
  }

  // Format number with thousand separators
  formatNumberWithCommas(event: any): void {
    const input = event.target as HTMLInputElement;
    const controlName = input.getAttribute('formControlName');

    if (!controlName) return;

    // Remove all commas and non-numeric characters except decimal point
    let numericValue = input.value.replace(/,/g, '').replace(/[^\d.]/g, '');

    // Convert Arabic numbers to English
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    arabicNumbers.forEach((arabic, index) => {
      numericValue = numericValue.replace(new RegExp(arabic, 'g'), englishNumbers[index]);
    });

    // Update form control with numeric value (without commas)
    if (numericValue) {
      this.licenseProjectFeasibilityStudyForm.get(controlName)?.setValue(parseFloat(numericValue), { emitEvent: false });
    } else {
      this.licenseProjectFeasibilityStudyForm.get(controlName)?.setValue(null, { emitEvent: false });
    }

    // Format with commas for display
    const parts = numericValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    input.value = parts.join('.');
  }

  // Handle focus - remove commas for editing
  onNumberInputFocus(event: any): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/,/g, '');
  }

  // Handle blur - add commas for display
  onNumberInputBlur(event: any): void {
    this.formatNumberWithCommas(event);
  }

  // Format all number inputs with commas
  formatAllNumberInputs(): void {
    const numberFields = [
      'totlaAreaOfCommonAreas',
      'infrastructureDevelopmentCosts',
      'totalConstructionCosts',
      'totalNonConstructionCosts',
      'totalLandCost',
      'totalSalesValue',
      'totalProjectCosts',
      'expectedNetProfit',
      'averageSalesPricePerMeter',
      'averageConstructionCostPerMeter'
    ];

    numberFields.forEach(fieldName => {
      const value = this.licenseProjectFeasibilityStudyForm.get(fieldName)?.value;
      if (value) {
        const input = document.getElementById(`control-${fieldName}`) as HTMLInputElement;
        if (input) {
          const parts = value.toString().split('.');
          parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          input.value = parts.join('.');
        }
      }
    });
  }
}
