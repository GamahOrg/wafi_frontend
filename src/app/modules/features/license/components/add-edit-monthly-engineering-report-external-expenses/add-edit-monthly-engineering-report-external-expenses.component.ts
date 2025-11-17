import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments, MonthlyEngineeringReportExternalExpensesDto } from '../../models/monthly-engineering-report-external-expenses-model';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { MonthlyEngineeringReportExternalExpensesService } from '../../services/monthly-engineering-report-external-expenses.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { environment } from 'src/environments/environment';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-add-edit-monthly-engineering-report-external-expenses',
  templateUrl: './add-edit-monthly-engineering-report-external-expenses.component.html',
  styleUrls: ['./add-edit-monthly-engineering-report-external-expenses.component.scss']
})
export class AddEditMonthlyEngineeringReportExternalExpensesComponent implements OnInit {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  showValidation: boolean = false;
  monthlyEngineeringReportExternalExpenses: MonthlyEngineeringReportExternalExpensesDto = {} as MonthlyEngineeringReportExternalExpensesDto;
  licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments: LicenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments[] = [];
  licenseProjectEngineeringSupervisionPlannedReportDetailId: string = '00000000-0000-0000-0000-000000000000';
  monthlyEngineeringReportExternalExpensesId: string = '00000000-0000-0000-0000-000000000000';

  constructor(
    private _monthlyEngineeringReportExternalExpensesService: MonthlyEngineeringReportExternalExpensesService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }

  monthlyEngineeringReportExternalExpensesForm = this._formBuilder.group({
    expenseDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    amount: this._formBuilder.control<number | null>(null, [Validators.required]),
    description: this._formBuilder.control<string | null>(null, [Validators.required]),
    licenseProjectTimeScheduleOtherAttachments: [new Array<LicenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments>()],
  });
  
  get controls() {
    return this.monthlyEngineeringReportExternalExpensesForm.controls;
  }
  
  mueltiFilesUploaderData: FileUploader = {
    multiple: true,
    allowedExtensionsText: 'pdf، jpg، jpeg، png، ',
    allowedExtensions: ['.pdf', '.jpg', '.jpeg', '.png']
  } as FileUploader;

  onMonthlyEngineeringReportExternalExpensesAttachmentFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;

    if (!this.licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments)
      this.licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments = [];
    
    if (!this.monthlyEngineeringReportExternalExpenses) {
      this.monthlyEngineeringReportExternalExpenses = {} as MonthlyEngineeringReportExternalExpensesDto;
    }
    
    if (!this.monthlyEngineeringReportExternalExpenses.licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments) {
      this.monthlyEngineeringReportExternalExpenses.licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments = [];
    }

    
    filesData.eventRes.data.forEach((data: any) => {
      const attachmentItem: LicenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments = {
        licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseId: this.licenseProjectEngineeringSupervisionPlannedReportDetailId,
        id: '00000000-0000-0000-0000-000000000000',
        attachmentFileId: data.id,
      };

      // Add to both arrays
      this.licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments.push(attachmentItem);
      this.monthlyEngineeringReportExternalExpenses.licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments!.push({...attachmentItem});
    });
  }
  
  ngOnInit(): void {
    this.observePopupEvents();
    this.getLicenseProjectEngineeringSupervisionPlannedReportDetailId();
  }

  getLicenseProjectEngineeringSupervisionPlannedReportDetailId(){
    this.subscriptions.push(
      this._monthlyEngineeringReportExternalExpensesService.getLicenseProjectEngineeringSupervisionPlannedReportDetailId().subscribe((id: string | null) => {
        if (id) {
          this.licenseProjectEngineeringSupervisionPlannedReportDetailId = id;
          if (this.licenseProjectEngineeringSupervisionPlannedReportDetailId !== '00000000-0000-0000-0000-000000000000')
            this.getMonthlyEngineeringReportExternalExpensesId();
        }
      })
    );
  }
  
  getMonthlyEngineeringReportExternalExpensesId(){
    
    this.subscriptions.push(
      this._monthlyEngineeringReportExternalExpensesService.getMonthlyEngineeringReportExternalExpensesId().subscribe((id: string | null) => {
        if (id) {
          this.monthlyEngineeringReportExternalExpensesId = id;
          if (this.monthlyEngineeringReportExternalExpensesId !== '00000000-0000-0000-0000-000000000000') {
            this._monthlyEngineeringReportExternalExpensesService.GetMonthlyEngineeringReportExternalExpensesById(this.monthlyEngineeringReportExternalExpensesId).subscribe((res: MonthlyEngineeringReportExternalExpensesDto) => {
              this.monthlyEngineeringReportExternalExpenses = res;
              this.monthlyEngineeringReportExternalExpensesForm.patchValue({
                expenseDate: this.monthlyEngineeringReportExternalExpenses.expenseDate as string,
                amount: this.monthlyEngineeringReportExternalExpenses.amount,
                description: this.monthlyEngineeringReportExternalExpenses.description,
              });
              this.licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments = 
                this.monthlyEngineeringReportExternalExpenses.licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments || [];
            })
          }
        }
      })
    );
  }
  
  save(): void {
    
    if (!this.monthlyEngineeringReportExternalExpensesForm.valid ||
        !this.licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments ||
        this.licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments.length == 0) {
      this.showValidation = true;
      return;
    }

    this.monthlyEngineeringReportExternalExpenses = this.monthlyEngineeringReportExternalExpensesForm.value as {} as MonthlyEngineeringReportExternalExpensesDto;
    this.monthlyEngineeringReportExternalExpenses.id = this.monthlyEngineeringReportExternalExpensesId as string;
    this.monthlyEngineeringReportExternalExpenses.licenseProjectEngineeringSupervisionPlannedReportDetailId = this.licenseProjectEngineeringSupervisionPlannedReportDetailId as string;
    this.monthlyEngineeringReportExternalExpenses.licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments = [];
    this.monthlyEngineeringReportExternalExpenses.licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments =
    this.licenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments as LicenseProjectEngineeringSupervisionPlannedReportDetailExternalExpenseAttachments[];

    this.subscriptions.push(
      this._monthlyEngineeringReportExternalExpensesService.SaveOrUpdateMonthlyEngineeringReportExternalExpenses(this.monthlyEngineeringReportExternalExpenses)
        .subscribe((res) => {
          if (res.isDone) {
            this._toastrNotificationService.showSuccess('تم الحفظ');
            this.closeDialog();
          }
        })
    );
  }

   // popup
  observePopupEvents(): void {
    this.observeCancelAction()
    this.observeConfirmAction()
  }

  private observeCancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeConfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        if(res.id === 'AddEditMonthlyEngineeringReportExternalExpensesComponent')
          this.save()
      })
    )
  }

  getDateNow(): string{
    const dateNow: string = new Date().toISOString().substring(0, 10);
    const [year, month, day] = dateNow.split('-');
    return `${day}/${month}/${year}`;
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

}
