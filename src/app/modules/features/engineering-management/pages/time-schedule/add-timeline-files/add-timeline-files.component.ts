import { Component, OnDestroy, OnInit } from '@angular/core';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { Subscription } from 'rxjs';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
import { SysRequestApprovalService } from 'src/app/shared/services/sysRequestApproval/sysRequestApproval.service';
import { SysRequestApprovalActionTypeEnum, SysRequestApprovalDto, SysRequestApprovalTypeEnum } from 'src/app/shared/models/sys-request-approval.dto';
import { LicenseTimelineProgramDto } from '../../../models/filesdata.model';
import { TimelinefilesService } from '../../../services/timelinefiles.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';
import { LicenseProjectTimeScheduleOtherAttachment } from '../../../models/license-project-time-schedule-other-attachment';
import { timelinefilesModel } from '../../../models/timelinefiles.model';

@Component({
  selector: 'app-add-timeline-files',
  templateUrl: './add-timeline-files.component.html',
  styleUrls: ['./add-timeline-files.component.scss'],
  standalone:false
})
export class AddTimelineFilesComponent implements OnInit, OnDestroy {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  sysRequestApprovalList: SysRequestApprovalDto[] = [];
  licenseProjectId!: string | null;
  dateList!: string[]
  isFormSubmitted = false;
  uploadedfiles!: LicenseTimelineProgramDto;

  filesdataForm = this._formBuilder.group({
    id: [''],
    licenseProjectId: [''],
    monthDate: new FormControl<string | null>(null),
    threeDReportFileId: ['', Validators.required],
    generalSitePlanFileId: ['', Validators.required],
    primaveraFileId: ['', Validators.required],
    scheduleFileId: ['', Validators.required],
    workProgressCurveMonthlyAndCumulativePercentageOfCompletionFileId: ['', Validators.required],
    cashFlowCurveFileId: ['', Validators.required],
    employmentCountCurveFileId: ['', Validators.required],
    licenseProjectTimeScheduleOtherAttachments: [new Array<LicenseProjectTimeScheduleOtherAttachment>()],
    notes: ['']
  })

  mueltiFilesUploaderData: FileUploader = {
    multiple: true,
    allowedExtensionsText: 'pdf، jpg، jpeg، png، bmp، tiff، docx، xlsx، zip، rar، kmz، XER او dwg',
    allowedExtensions: ['.pdf', '.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.docx', '.xlsx', '.zip', '.rar', '.kmz', '.XER', '.dwg']
  } as FileUploader;

  pdfsingleFilesUploaderData: FileUploader = {
    multiple: false,
    allowedExtensionsText: 'PDF',
    allowedExtensions: ['.pdf'],
    size: 30720
  } as FileUploader;

  singleFilesUploaderData: FileUploader = {
    multiple: false,
    allowedExtensionsText: 'WORD',
    allowedExtensions: ['.doc', '.docx'],
    size: 30720

  } as FileUploader;

  execlsingleFilesUploaderData: FileUploader = {
    multiple: false,
    allowedExtensionsText: 'EXCEL',
    allowedExtensions: ['.xls', '.xlsx'],
    size: 30720

  } as FileUploader;

  showDate!: boolean

  primaveraFilesUploaderData: FileUploader = {
    multiple: false,
    allowedExtensionsText: 'XER',
    allowedExtensions:['.xer'],
    size: 30720
  } as FileUploader;

  licensetimesceduleId!: string

  localization = {
    threeDReportFile: "التقرير الثردي",
    generalSitePlanFile: "مخطط الموقع العام",
    primaveraFile: " البرنامج الزمني بصيغة البريمافيرا",
    scheduleFile: " البرنامج الزمني بصيغة pdf",
    workProgressCurveMonthlyAndCumulativePercentageOfCompletionFile: " منحنى تقدم الأعمال (نسبة الإنجاز الشهرية والتراكمية) اكسيل",
    cashFlowCurveFile: "منحنى التدفقات النقدية - اكسيل",
    employmentCountCurveFile: " منحنى عدد العمالة - اكسيل",
    licenseProjectTimeScheduleOtherAttachments: "مرفقات اخري (يمكنك تحميل أي عدد من المرفقات)",
    SaveSuccess: "تم الحفظ بنجاح",
    required: 'هذا الحقل مطلوب',
    fileType: 'يجب رفع ملف بصيغة',
    requiredFiles: 'نأمل رفع جميع الملفات',
    approvalRequired: 'يجب الموافقة على الاقرار اولا',
  }

  constructor(private _timelinefilesService: TimelinefilesService, private _popupService: PopupService, private _toastrNotificatioService: ToastrNotificatioService, private _formBuilder: FormBuilder,
    private _fileManagementService: FileManagementService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _sysRequestApprovalService: SysRequestApprovalService) {
    this.showDate = this._timelinefilesService.showDate;
  }

  ngOnInit(): void {
    this.getidValue()
    this.observeconfirmAction()
    this.getLicenseProjectIdStorage()
    this.getUploadedfiles()
    this.isShowData()
    this.getSysRequestApproval()
  }

  private isShowData() {
    if (this.showDate) {
      this.getTimeScheduleMonthList()
      this.filesdataForm.controls.monthDate.addValidators(Validators.required);
      this.filesdataForm.updateValueAndValidity();
    }
  }


  private getidValue() {
    this.filesdataForm.patchValue({ id: this._popupService.popupData.value.id })
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId)
      this.filesdataForm.patchValue({ licenseProjectId: this.licenseProjectId })
  }

  private getTimeScheduleMonthList() {
    this.subscriptions.push(
      this._timelinefilesService.GetTimeScheduleMonthList(this.licenseProjectId).subscribe(res => {
        this.dateList = res.data ?? []
      })
    )
  }

  onSelectedDateChanged(event: any) {
    if (event.target.value)
      this.filesdataForm.controls.monthDate.setValue(event.target.value);
  }

  onValueChange(value: string | null) {
    this.filesdataForm.controls.notes.setValue(value)
  }

  getUploadedfiles() {
    this.subscriptions.push(
      this._timelinefilesService.timeshecduledDetails$.subscribe(res => {
        this.uploadedfiles = res
      })
    )
    this.filesdataForm.patchValue(this.uploadedfiles)
  }

  ongeneralSitePlanFileUploaded($event: any) {
    this.filesdataForm.patchValue({ generalSitePlanFileId: $event.eventRes.data[0].id })
  }

  onthreeDReportFileUploaded($event: any) {
    this.filesdataForm.patchValue({ threeDReportFileId: $event.eventRes.data[0].id })
  }

  onprimaveraFileUploaded($event: any) {
    this.filesdataForm.patchValue({ primaveraFileId: $event.eventRes.data[0].id })
  }

  onscheduleFileUploaded($event: any) {
    this.filesdataForm.patchValue({ scheduleFileId: $event.eventRes.data[0].id })
  }

  onworkProgressCurveMonthlyAndCumulativePercentageOfCompletionFileUploaded($event: any) {
    this.filesdataForm.patchValue({ workProgressCurveMonthlyAndCumulativePercentageOfCompletionFileId: $event.eventRes.data[0].id })
  }

  oncashFlowCurveFileUploaded($event: any) {
    this.filesdataForm.patchValue({ cashFlowCurveFileId: $event.eventRes.data[0].id })
  }

  onemploymentCountCurveFileUploaded($event: any) {
    this.filesdataForm.patchValue({ employmentCountCurveFileId: $event.eventRes.data[0].id })
  }

  onlicenseProjectTimeScheduleOtherAttachmentsFileUploaded($event: any) {
    let attachmentFiles: LicenseProjectTimeScheduleOtherAttachment[] = this.filesdataForm.value.licenseProjectTimeScheduleOtherAttachments ?? [];

    $event.eventRes.data.forEach((file: any) => {
      attachmentFiles.push({
        id: file.id,
        licenseProjectTimeScheduleId: this._popupService.popupData.value.id as string,
        otherAttachmentFileId: file.id
      });
    });

    this.filesdataForm.patchValue({ licenseProjectTimeScheduleOtherAttachments: attachmentFiles })
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save()
      })
    )
  }

  deletFile(controlName: string, id: any) {
    this.subscriptions.push(
      this._fileManagementService.DeletFile(id).subscribe(res => {
        if (res.isDone) {
          if (controlName == 'licenseProjectTimeScheduleOtherAttachments') {
            const attachmentFiles = this.filesdataForm.value.licenseProjectTimeScheduleOtherAttachments
            this.filesdataForm.patchValue({ licenseProjectTimeScheduleOtherAttachments: attachmentFiles?.filter(file => file.id != id) })
          }
          else
            this.filesdataForm.get<string>(controlName)?.setValue('');
        }
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }

  getSysRequestApproval() {
    this.subscriptions.push(
      this._sysRequestApprovalService.GetSysRequestApprovalList(SysRequestApprovalTypeEnum.TimeSchedule, SysRequestApprovalActionTypeEnum.SendRequest).subscribe(res => {
        if (res && res.isDone)
          this.sysRequestApprovalList = res.data as SysRequestApprovalDto[];
      })
    )
  }

  areAllItemsApproved(): boolean {
    return this.sysRequestApprovalList.length > 0 &&
      this.sysRequestApprovalList.every(item => item.isApproved === true);
  }

  save() {
    this.isFormSubmitted = true;

    if (!this.areAllItemsApproved()) {
      this._toastrNotificatioService.showError(this.localization.approvalRequired)
      return;
    }

    if (!this.filesdataForm.valid) {
      this._toastrNotificatioService.showError(this.localization.requiredFiles)
      return;
    }
    if (this._popupService.popupData.value.id) {
      this.subscriptions.push(
        this._timelinefilesService.CompileAsync(this.filesdataForm.value as timelinefilesModel).subscribe(res => {
          if (res.isDone) {
            this.successAction(res.data?.id)
          }
        })
      )
    } else {
      this.subscriptions.push(
        this._timelinefilesService.CreateAsync(this.filesdataForm.value as timelinefilesModel).subscribe(res => {
          if (res.isDone) {
            this.successAction(res.data?.id)
          }
        })
      )
    }
  }


  private successAction(id: string | undefined) {
    this._timelinefilesService.submitSuccessfullyEventEmitter.emit(id)
    this.closeDialog()
    this._toastrNotificatioService.showSuccess(this.localization.SaveSuccess)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}


