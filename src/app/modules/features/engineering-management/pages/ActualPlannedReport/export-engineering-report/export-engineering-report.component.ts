import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ActualValueReportPagingListDto, ExportReportRequestDto } from '../../../models/actual-value-report-paging-list-dto';
import { ActualValueReportService } from '../../../services/actual-value-report.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';

@Component({
  selector: 'app-export-engineering-report',
  templateUrl: './export-engineering-report.component.html',
  styleUrls: ['./export-engineering-report.component.scss'],
})
export class ExportEngineeringReportComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';

  updateMonthSubmittedForm = this._formBuilder.group({
    monthDate: this._formBuilder.control<Date | null>(null),
    isMonthly: this._formBuilder.control<boolean | null>(true, [Validators.required]),
    currenrYear: this._formBuilder.control<number | null>(null),
    quarterNumber: this._formBuilder.control<number | null>(null),
  });

  actualValueReportList?: ActualValueReportPagingListDto[];

  yearsList: number[] = [];
  quartersList = [
    { name: 'الربع الأول', value: 1 },
    { name: 'الربع الثاني', value: 2 },
    { name: 'الربع الثالث', value: 3 },
    { name: 'الربع الرابع', value: 4 }
  ];
  showValidation: boolean = false;

  get controls() {
    return this.updateMonthSubmittedForm.controls;
  }

  constructor(
    private _actualValueReportService: ActualValueReportService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService
  ) {}

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observePopupEvents();
  }

  onReportTypeChange(): void {
    const monthDateControl = this.updateMonthSubmittedForm.get('monthDate'); // ✅ Correct
    const selectedYearControl = this.updateMonthSubmittedForm.get('currenrYear');
    const selectedQuarterControl = this.updateMonthSubmittedForm.get('quarterNumber');

    if (this.controls.isMonthly.value === true) {
      // Monthly report selected
      monthDateControl?.setValidators([Validators.required]); // ✅ Correct
      selectedYearControl?.clearValidators();
      selectedQuarterControl?.clearValidators();
    } else {
      // Quarterly report selected
      monthDateControl?.clearValidators();
      selectedYearControl?.setValidators([Validators.required]);
      selectedQuarterControl?.setValidators([Validators.required]);
  }

  // Update validity
  monthDateControl?.updateValueAndValidity();
  selectedYearControl?.updateValueAndValidity();
  selectedQuarterControl?.updateValueAndValidity();
  }
  
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getActualLookUpValues();
      this.onReportTypeChange();
    }
  }

  private getActualLookUpValues() {
    this.subscriptions.push(
      this._actualValueReportService
        .GetCertifiedValueReportLookUpList(this.licenseProjectId as string).subscribe((res) => {
          this.actualValueReportList = res as ActualValueReportPagingListDto[];
          
          // Extract unique years from monthDate
          this.yearsList = [...new Set(
            this.actualValueReportList
              .map(item => new Date(item.monthDate).getFullYear())
              .filter(year => !isNaN(year))
          )].sort((a, b) => b - a); // Sort descending (newest first)
        })
    );
  }

  save(): void {

    if (!this.updateMonthSubmittedForm.valid) {
      this.showValidation = true;
      return;
    }
    const dto : ExportReportRequestDto = {
      licenseProjectId: this.licenseProjectId as string,
      monthDate: this.updateMonthSubmittedForm.value.monthDate as Date || null,
      isMonthly: this.updateMonthSubmittedForm.value.isMonthly as boolean,
      currenrYear: this.updateMonthSubmittedForm.value.currenrYear != null ? this.updateMonthSubmittedForm.value.currenrYear as number 
      : this.updateMonthSubmittedForm.value.monthDate as Date != null ? new Date(this.updateMonthSubmittedForm.value.monthDate as Date).getFullYear()
      : null,
      quarterNumber: this.updateMonthSubmittedForm.value.quarterNumber as number || null,
    }
    
    this.subscriptions.push(
      this._actualValueReportService
        .generateReport(dto)
        .subscribe({
          next: (blob: Blob) => {
            // Create download link for PDF
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `تقرير_المشروع_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.pdf`;
            link.click();
            window.URL.revokeObjectURL(url);
            
            this._toastrNotificationService.showSuccess('تم إنشاء التقرير بنجاح');
            this.closeDialog();
          },
          // error: (error) => {
          //   this._toastrNotificationService.showError('حدث خطأ في إنشاء التقرير');
          // }
        })
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
