import { ChangeDetectorRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { FormBuilder, Validators } from '@angular/forms';
import { SysFileManagerCreateUpdateDto } from 'src/app/shared/models/sys-file-manager-create-update-dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ActualValueReportPagingListDto } from '../../../models/actual-value-report-paging-list-dto';
import {
  LicenseProjectEngineeringActualReportMonthDetailsDto,
  LicenseProjectEngineeringSupervisionPlannedActualReportDetailDto,
} from '../../../models/license-project-engineering-actual-report-month-details-dto';
import {
  LicenseProjectDto,
  LicenseProjectEngineeringSupervisionPlannedReportDetailImageDto,
  LicenseProjectEngineeringSupervisionPlannedReportDetailMapDto,
  LicenseProjectEngineeringSupervisionPlannedReportDetailVideoDto,
} from '../../../models/license-project-engineering-actual-report-details-dto';
import { LicenseProjectEngineeringActualReportMonthDetailsCreateUpdateDto } from '../../../models/license-project-engineering-actual-report-month-details-create-update-dto';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../../services/engineering-supervision-report-actual-project-status-summary.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';
@Component({
  selector: 'app-add-edit-actual-value-work-statues-report',
  templateUrl: './add-edit-actual-value-work-statues-report.component.html',
  styleUrls: ['./add-edit-actual-value-work-statues-report.component.scss'],
})
export class AddEditActualValueWorkStatuesReportComponent {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  actualValueReport?: ActualValueReportPagingListDto;
  //التباين الخاص بنسبة الانجاز الفعلىة
  actualAchievementMemorial?: number;
  //نسب الإنجاز الفعلىة التراكمية
  cumulativeActualAchievementRates?: number;
  //التباين الخاص بالتراكمية
  cumulativeInsurance?: number;
  //التأخير(اليوم)
  delayByDay?: number;
  //إجمالي التكلفة الفعلىة حتى تاريخه (ريال سعودي)
  totalActualCostToDate?: number = 0;
  //معدل الأداء الزمني
  SPI?: number;
  //معدل الأداء المالي
  CPI?: number;
  //حالة المشروع الزمني
  projectTimelineStatus: string = '';
  projectTimelineStatusColor?: string;
  //حالة المشروع المالي
  financialProjectStatus: string = '';
  financialProjectStatusColor?: string;
  //التباين الخاص بالعمالة
  laborMemorial?: number;

  licenseProjectEngineeringSupervisionActualReportForm =
    this._formBuilder.group({
      projectMonthlyActualCompletionRate: this._formBuilder.control<
        number | null
      >(null, [Validators.required]),
      approvedExtensionPerDay: this._formBuilder.control<number | null>(null, [
        Validators.required,
      ]),
      monthlyTotalActualEmployees: this._formBuilder.control<number | null>(
        null,
        [Validators.required]
      ),
      actualMonthCost: this._formBuilder.control<number | null>(null, [
        Validators.required,
      ]),
      delayReasons: [''],
      expectedEndDateFromTimelineUpdate: this._formBuilder.control<
        string | null
      >(null, [Validators.required]),
    });

  get controls() {
    return this.licenseProjectEngineeringSupervisionActualReportForm.controls;
  }

  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;
  licenseProjectEngineeringActualReportMonthDetails?: LicenseProjectEngineeringActualReportMonthDetailsDto;
  licenseProjectEngineeringSupervisionActualMonthReportDetailObj?: LicenseProjectEngineeringSupervisionPlannedActualReportDetailDto;
  // تفرير الإشراف الهندسي الشهري صور المشروع
  licenseProjectEngineeringSupervisionPlannedReportDetailImages: LicenseProjectEngineeringSupervisionPlannedReportDetailImageDto[] =
    [];
  // تفرير الإشراف الهندسي الشهري فيديو المشروع
  licenseProjectEngineeringSupervisionPlannedReportDetailVideos: LicenseProjectEngineeringSupervisionPlannedReportDetailVideoDto[] =
    [];
  // تفرير الإشراف الهندسي الشهري خريطة موقع عام المشروع
  licenseProjectEngineeringSupervisionPlannedReportDetailMaps: LicenseProjectEngineeringSupervisionPlannedReportDetailMapDto[] =
    [];
  monthDate?: Date;
  mueltiFilesUploaderImagesData: FileUploader = {
    multiple: true,
    size: 51200,
  } as FileUploader;
  mueltiFilesUploaderVideosData: FileUploader = {
    multiple: true,
    size: 256000,
  } as FileUploader;
  mueltiFilesUploaderMapesData: FileUploader = {
    multiple: true,
    size: 51200,
  } as FileUploader;

  licenseProject?: LicenseProjectDto;
  licenseProjectEngineeringActualReportMonthDetailsCreateUpdate?: LicenseProjectEngineeringActualReportMonthDetailsCreateUpdateDto;

  constructor(
    private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService
  ) {}

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observePopupEvents();
    this.observeLicenseProjectEngineeringSupervisionActualReportForm();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) this.getMonthDate();
  }

  getMonthDate() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectStatusSummaryService
        .getmonthDate()
        .subscribe((res) => {
          if (res) {
            this.actualValueReport = res as ActualValueReportPagingListDto;
            this.monthDate = this.actualValueReport.monthDate as Date;
            this.getActualProjectStatusMonthDetails();
          }
        })
    );
  }

  private observeLicenseProjectEngineeringSupervisionActualReportForm() {
    this.subscriptions.push(
      this.licenseProjectEngineeringSupervisionActualReportForm.valueChanges.subscribe(
        (changes) => {
          if (this.licenseProjectEngineeringActualReportMonthDetails) {
            if (
              changes.approvedExtensionPerDay &&
              this
                .licenseProjectEngineeringSupervisionActualMonthReportDetailObj
            ) {
              let date = new Date(
                this.licenseProjectEngineeringActualReportMonthDetails.contractualFinishDate
              );
              this.licenseProjectEngineeringSupervisionActualMonthReportDetailObj.contractualEndDateAdjustedBasedOnApprovedExtension =
                new Date(
                  date.getTime() +
                    changes.approvedExtensionPerDay * 24 * 60 * 60 * 1000
                );
            }

            this.reEvaluateTimePerofamanceRate();

            // if (
            //   changes.projectMonthlyActualCompletionRate &&
            //   this
            //     .licenseProjectEngineeringSupervisionActualMonthReportDetailObj
            // ) {
            //   this.actualAchievementMemorial =
            //     Number(changes.projectMonthlyActualCompletionRate) -
            //     this
            //       .licenseProjectEngineeringSupervisionActualMonthReportDetailObj
            //       .projectMonthlyPlannedCompletionRate;
            //   this.cumulativeActualAchievementRates =
            //     Number(changes.projectMonthlyActualCompletionRate) +
            //     this.licenseProjectEngineeringActualReportMonthDetails
            //       .cumulativeActualAmountPriorToThatMonth;
            //   this.cumulativeInsurance =
            //     this.cumulativeActualAchievementRates -
            //     this.licenseProjectEngineeringActualReportMonthDetails
            //       .cumulativeAmountPriorToThatMonth;
            //   this.SPI =
            //     Number(this.cumulativeActualAchievementRates) /
            //     this.licenseProjectEngineeringActualReportMonthDetails
            //       .cumulativeAmountPriorToThatMonth;

            //   if (this.SPI && this.SPI > 1) {
            //     this.projectTimelineStatus = 'متقدم';
            //     this.projectTimelineStatusColor = 'green';
            //   } else if (this.SPI && this.SPI == 1) {
            //     this.projectTimelineStatus = 'طبقا للبرنامج الزمني ';
            //     this.projectTimelineStatusColor = 'lightgreen';
            //   } else if (this.SPI && this.SPI > 0.9 && this.SPI < 1) {
            //     this.projectTimelineStatus = 'تأخير بسيط';
            //     this.projectTimelineStatusColor = 'yellow';
            //   } else if (this.SPI && this.SPI >= 0.8 && this.SPI < 0.9) {
            //     this.projectTimelineStatus = 'تأخير متوسط';
            //     this.projectTimelineStatusColor = 'orange';
            //   } else if (this.SPI && this.SPI >= 0.5 && this.SPI < 0.8) {
            //     this.projectTimelineStatus = 'تأخير شديد';
            //     this.projectTimelineStatusColor = 'red';
            //   } else if (this.SPI && this.SPI > 0.5) {
            //     this.projectTimelineStatus = 'خطر التعثر';
            //     this.projectTimelineStatusColor = 'brown';
            //   }
            // }

            if (
              changes.expectedEndDateFromTimelineUpdate &&
              changes.expectedEndDateFromTimelineUpdate !=
                '0001-01-01T00:00:00' &&
              this
                .licenseProjectEngineeringSupervisionActualMonthReportDetailObj
            ) {
              const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds

              let contractualEndDateAdjustedBasedOnApprovedExtension = new Date(
                this.licenseProjectEngineeringSupervisionActualMonthReportDetailObj.contractualEndDateAdjustedBasedOnApprovedExtension
              );
              let expectedEndDateFromTimelineUpdate = new Date(
                changes.expectedEndDateFromTimelineUpdate
              );
              this.delayByDay = Math.ceil(
                Math.abs(
                  (contractualEndDateAdjustedBasedOnApprovedExtension.getTime() -
                    expectedEndDateFromTimelineUpdate.getTime()) /
                    oneDay
                )
              );
              debugger;

              if (
                expectedEndDateFromTimelineUpdate <
                contractualEndDateAdjustedBasedOnApprovedExtension
              ) {
                this.delayByDay = 0;
              }
            }

            if (
              changes.actualMonthCost == null &&
              this
                .licenseProjectEngineeringSupervisionActualMonthReportDetailObj
            )
              this.totalActualCostToDate =
                this.licenseProjectEngineeringSupervisionActualMonthReportDetailObj.totalActualCostToDate;

            if (
              changes.actualMonthCost &&
              this
                .licenseProjectEngineeringSupervisionActualMonthReportDetailObj
            ) {
              this.totalActualCostToDate = 0;
              this.totalActualCostToDate =
                this
                  .licenseProjectEngineeringSupervisionActualMonthReportDetailObj
                  .totalActualCostToDate + changes.actualMonthCost;

              if (
                this.cumulativeActualAchievementRates &&
                this.totalActualCostToDate &&
                this.licenseProjectEngineeringActualReportMonthDetails
                  .expectedConstructionCost
              )
                // this.CPI = this.cumulativeActualAchievementRates / this.totalActualCostToDate /
                //   this.licenseProjectEngineeringActualReportMonthDetails.expectedConstructionCost;
                this.reEvaluateCPI();

              //   this.CPI =
              //     this.cumulativeActualAchievementRates /
              //     100 /
              //     (this.licenseProjectEngineeringActualReportMonthDetails
              //       .licenseProjectEngineeringSupervisionActualMonthReportDetails
              //       .totalPlannedCostToDate /
              //       this.licenseProjectEngineeringActualReportMonthDetails
              //         .expectedConstructionCost);

              // if (this.CPI && this.CPI > 1) {
              //   this.financialProjectStatus = 'أقل من الخطة المالية';
              //   this.financialProjectStatusColor = 'green';
              // } else if (this.CPI && this.CPI == 1) {
              //   this.financialProjectStatus = 'طبقا للخطة المالية';
              //   this.financialProjectStatusColor = 'lightgreen';
              // } else if (this.CPI && this.CPI > 0.9 && this.CPI < 1) {
              //   this.financialProjectStatus = 'تخطى بسيط للخطة ';
              //   this.financialProjectStatusColor = 'yellow';
              // } else if (this.CPI && this.CPI >= 0.8 && this.CPI < 0.9) {
              //   this.financialProjectStatus = 'تخطى متوسط للخطة';
              //   this.financialProjectStatusColor = 'orange';
              // } else if (this.CPI && this.CPI < 0.8) {
              //   this.financialProjectStatus = 'تخطى شديد للخطة المالية';
              //   this.financialProjectStatusColor = 'red';
              // }
            }

            if (
              changes.monthlyTotalActualEmployees &&
              this
                .licenseProjectEngineeringSupervisionActualMonthReportDetailObj
            )
              this.laborMemorial =
                changes.monthlyTotalActualEmployees -
                this
                  .licenseProjectEngineeringSupervisionActualMonthReportDetailObj
                  .monthlyTotalPlannedEmployees;
          }
        }
      )
    );
  }

  reEvaluateTimePerofamanceRate(){
    debugger
     if (
              this.controls.projectMonthlyActualCompletionRate &&
              this.licenseProjectEngineeringSupervisionActualMonthReportDetailObj &&
                this.licenseProjectEngineeringActualReportMonthDetails
            ) {
              this.actualAchievementMemorial =
                Number(this.controls.projectMonthlyActualCompletionRate.value) -
                this
                  .licenseProjectEngineeringSupervisionActualMonthReportDetailObj
                  .projectMonthlyPlannedCompletionRate;
              this.cumulativeActualAchievementRates =
                Number(this.controls.projectMonthlyActualCompletionRate.value) +
                this.licenseProjectEngineeringActualReportMonthDetails
                  .cumulativeActualAmountPriorToThatMonth;
              this.cumulativeInsurance =
                this.cumulativeActualAchievementRates -
                this.licenseProjectEngineeringActualReportMonthDetails
                  .cumulativeAmountPriorToThatMonth;
              this.SPI =
                Number(this.cumulativeActualAchievementRates) /
                this.licenseProjectEngineeringActualReportMonthDetails
                  .cumulativeAmountPriorToThatMonth;

              if (this.SPI && this.SPI > 1) {
                this.projectTimelineStatus = 'متقدم';
                this.projectTimelineStatusColor = 'green';
              } else if (this.SPI && this.SPI == 1) {
                this.projectTimelineStatus = 'طبقا للبرنامج الزمني ';
                this.projectTimelineStatusColor = 'lightgreen';
              } else if (this.SPI && this.SPI > 0.9 && this.SPI < 1) {
                this.projectTimelineStatus = 'تأخير بسيط';
                this.projectTimelineStatusColor = 'yellow';
              } else if (this.SPI && this.SPI >= 0.8 && this.SPI < 0.9) {
                this.projectTimelineStatus = 'تأخير متوسط';
                this.projectTimelineStatusColor = 'orange';
              } else if (this.SPI && this.SPI >= 0.5 && this.SPI < 0.8) {
                this.projectTimelineStatus = 'تأخير شديد';
                this.projectTimelineStatusColor = 'red';
              } else if (this.SPI && this.SPI > 0.5) {
                this.projectTimelineStatus = 'خطر التعثر';
                this.projectTimelineStatusColor = 'brown';
              }else if (this.SPI && this.SPI < 0.5) {
                this.projectTimelineStatus ='خطر التعثر'
                this.projectTimelineStatusColor = 'brown';
              }
            }

  }

  reEvaluateCPI() {
    debugger;
    debugger;
    if (
      this.cumulativeActualAchievementRates &&
      this.licenseProjectEngineeringActualReportMonthDetails &&
      this.totalActualCostToDate
    ) {
      this.CPI =
        this.cumulativeActualAchievementRates /
        100 /
        (this.totalActualCostToDate /
          this.licenseProjectEngineeringActualReportMonthDetails
            .expectedConstructionCost);

      // this.CPI =
      //   ((this.cumulativeActualAchievementRates / 100) *
      //     this.licenseProjectEngineeringActualReportMonthDetails
      //       .expectedConstructionCost) /
      //   this.totalActualCostToDate;

      this.CPI = parseFloat(this.CPI.toFixed(2));
    }

    if (this.CPI && this.CPI > 1) {
      this.financialProjectStatus = 'أقل من الخطة المالية';
      this.financialProjectStatusColor = 'green';
    } else if (this.CPI && this.CPI == 1) {
      this.financialProjectStatus = 'طبقا للخطة المالية';
      this.financialProjectStatusColor = 'lightgreen';
    } else if (this.CPI && this.CPI > 0.9 && this.CPI < 1) {
      this.financialProjectStatus = 'تخطى بسيط للخطة ';
      this.financialProjectStatusColor = 'yellow';
    } else if (this.CPI && this.CPI >= 0.8 && this.CPI < 0.9) {
      this.financialProjectStatus = 'تخطى متوسط للخطة';
      this.financialProjectStatusColor = 'orange';
    } else if (this.CPI && this.CPI < 0.8) {
      this.financialProjectStatus = 'تخطى شديد للخطة المالية';
      this.financialProjectStatusColor = 'red';
    }
  }

  getActualProjectStatusMonthDetails() {
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectStatusSummaryService
        .getActualProjectStatusMonthDetails(
          this.licenseProjectId as string,
          this.monthDate as Date
        )
        .subscribe((res) => {
          if (res) {
            this.licenseProjectEngineeringActualReportMonthDetails = res;
            if (this.licenseProjectEngineeringActualReportMonthDetails) {
              this.totalActualCostToDate =
                this.licenseProjectEngineeringActualReportMonthDetails.licenseProjectEngineeringSupervisionActualMonthReportDetails.totalActualCostToDate;

              this.licenseProjectEngineeringSupervisionActualMonthReportDetailObj =
                this.licenseProjectEngineeringActualReportMonthDetails
                  .licenseProjectEngineeringSupervisionActualMonthReportDetails as LicenseProjectEngineeringSupervisionPlannedActualReportDetailDto;

              this.licenseProjectEngineeringSupervisionPlannedReportDetailImages =
                this.licenseProjectEngineeringSupervisionActualMonthReportDetailObj.licenseProjectEngineeringSupervisionPlannedReportDetailImages;

              this.licenseProjectEngineeringSupervisionPlannedReportDetailVideos =
                this.licenseProjectEngineeringSupervisionActualMonthReportDetailObj.licenseProjectEngineeringSupervisionPlannedReportDetailVideos;

              this.licenseProjectEngineeringSupervisionPlannedReportDetailMaps =
                this.licenseProjectEngineeringSupervisionActualMonthReportDetailObj.licenseProjectEngineeringSupervisionPlannedReportDetailMaps;

              this.licenseProjectEngineeringSupervisionActualMonthReportDetailObj.expectedEndDateFromTimelineUpdate =
                new Date(
                  this.licenseProjectEngineeringSupervisionActualMonthReportDetailObj.expectedEndDateFromTimelineUpdate
                );
              this.licenseProjectEngineeringSupervisionActualReportForm.patchValue(
                this
                  .licenseProjectEngineeringSupervisionActualMonthReportDetailObj as any
              );
            }
          }
        })
    );
  }

  onExistImageFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.licenseProjectEngineeringSupervisionPlannedReportDetailImages)
      this.licenseProjectEngineeringSupervisionPlannedReportDetailImages = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectEngineeringSupervisionPlannedReportDetailImages.push({
        imageFileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        imageFile: new SysFileManagerCreateUpdateDto(),
      });
    });
  }

  onExistVideoFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.licenseProjectEngineeringSupervisionPlannedReportDetailVideos)
      this.licenseProjectEngineeringSupervisionPlannedReportDetailVideos = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectEngineeringSupervisionPlannedReportDetailVideos.push({
        videoFileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        videoFile: new SysFileManagerCreateUpdateDto(),
      });
    });
  }

  onExistMapFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    if (!this.licenseProjectEngineeringSupervisionPlannedReportDetailMaps)
      this.licenseProjectEngineeringSupervisionPlannedReportDetailMaps = [];
    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectEngineeringSupervisionPlannedReportDetailMaps.push({
        mapFileId: data.id,
        id: '00000000-0000-0000-0000-000000000000',
        mapFile: new SysFileManagerCreateUpdateDto(),
      });
    });
  }

  save(): void {
    if (
      !this.licenseProjectEngineeringSupervisionActualReportForm.valid ||
      this.licenseProjectEngineeringSupervisionPlannedReportDetailImages
        .length == 0 ||
      this.licenseProjectEngineeringSupervisionPlannedReportDetailVideos
        .length == 0 ||
      this.licenseProjectEngineeringSupervisionPlannedReportDetailMaps.length ==
        0
    ) {
      this.showValidation = true;
      return;
    }

    this.licenseProjectEngineeringActualReportMonthDetailsCreateUpdate = this
      .licenseProjectEngineeringSupervisionActualReportForm
      .value as {} as LicenseProjectEngineeringActualReportMonthDetailsCreateUpdateDto;
    this.licenseProjectEngineeringActualReportMonthDetailsCreateUpdate.licenseProjectId =
      this.licenseProjectId as string;
    this.licenseProjectEngineeringActualReportMonthDetailsCreateUpdate.id = this
      .licenseProjectEngineeringActualReportMonthDetails
      ?.licenseProjectEngineeringSupervisionActualMonthReportDetails
      .id as string;
    this.licenseProjectEngineeringActualReportMonthDetailsCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportDetailImages =
      this.licenseProjectEngineeringSupervisionPlannedReportDetailImages;
    this.licenseProjectEngineeringActualReportMonthDetailsCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportDetailVideos =
      this.licenseProjectEngineeringSupervisionPlannedReportDetailVideos;
    this.licenseProjectEngineeringActualReportMonthDetailsCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportDetailMaps =
      this.licenseProjectEngineeringSupervisionPlannedReportDetailMaps;
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectStatusSummaryService
        .SaveLicenseProjectEngineeringActualReportMonthDetails(
          this.licenseProjectEngineeringActualReportMonthDetailsCreateUpdate
        )
        .subscribe((res) => {
          if (res?.isDone) {
            this._engineeringSupervisionReportActualProjectStatusSummaryService.submitSuccessfullyEventEmitter.emit();
            this._toastrNotificationService.showSuccess('تم الحفظ');
            this.closeDialog();
          }
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
      this._popupService.cancelAction.subscribe((res: PopupData) => {})
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
