import { Component } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectProblemDto } from '../../../models/license-project-problem-dto';
import { LicenseProjectProblemCreateUpdateDto } from '../../../models/license-project-problem-create-update-dto';
import { SysLevelTypeDto, SysLicenseProjectRiskTypeDto, SysOwnerTypeDto } from '../../../models/license-project-problem-paging-dto';
import { SysProblemStatusDto } from '../../../models/sys-problem-status-dto';
import { SysResponsiblePartyDto } from '../../../models/license-project-risk-dto';
import { ActualValueReportPagingListDto } from '../../../models/actual-value-report-paging-list-dto';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../../services/engineering-supervision-report-actual-project-status-summary.service';
import { LookupEngineeringManagementService } from '../../../services/lookup-engineering-management.service';
import { LicenseProjectProblemService } from '../../../services/license-project-problem.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';

@Component({
  selector: 'app-add-edit-problem-log',
  templateUrl: './add-edit-problem-log.component.html',
  styleUrls: ['./add-edit-problem-log.component.scss']
})
export class AddEditProblemLogComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  licenseProjectProblemId: string | null = null;
  licenseProjectProblemData?: LicenseProjectProblemDto;
  licenseProjectProblemCreateUpdate?: LicenseProjectProblemCreateUpdateDto;
  licenseProjectProblemTypeList?: SysLicenseProjectRiskTypeDto[]
  ProblemStatusList?: SysProblemStatusDto[]
  responsiblePartyList?: SysResponsiblePartyDto[]
  ownerTypeList?: SysOwnerTypeDto[]
  SysLevelTypeList?: SysLevelTypeDto[]
  flag: boolean = false;
  actualValueReport?: ActualValueReportPagingListDto;
  licenseProjectProblemLogForm = this._formBuilder.group({
    projectName: this._formBuilder.control<string | null>(null),
    projectCode: this._formBuilder.control<string | null>(null),
    area: this._formBuilder.control<string | null>(null),
    city: this._formBuilder.control<string | null>(null),
    description: this._formBuilder.control<string | null>(null, [Validators.required]),
    problemTypeId: this._formBuilder.control<number | null>(null, [Validators.required]),
    levelTypeId: this._formBuilder.control<number | null>(null, [Validators.required]),
    riskOwnerId: this._formBuilder.control<number | null>(null, [Validators.required]),
    statusId: this._formBuilder.control<number | null>(null, [Validators.required]),
    licenseProjectProblemResponsiblePartyIds: this._formBuilder.control<number[] | null>(null, [Validators.required]),
    issueDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    expectedClosureDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    actualClosureDate: this._formBuilder.control<string | null>(null, [Validators.required]),
    recommendedAction: this._formBuilder.control<string | null>(null, [Validators.required]),


  });
  showValidation: boolean = false;
  get controls() {
    return this.licenseProjectProblemLogForm.controls;
  }
  get licenseProjectProblemResponsiblePartyIds(): FormControl {
    return this.licenseProjectProblemLogForm.controls['licenseProjectProblemResponsiblePartyIds']
  }
  constructor(
    private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
    private _lookupEngineeringManagementService: LookupEngineeringManagementService,
    private _licenseProjectProblemService: LicenseProjectProblemService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,

  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.getLicenseProjectProblemId();
    this.observePopupEvents();
    this.getmonthData();

  }

  getmonthData() {
    debugger;
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectStatusSummaryService.getmonthDate().subscribe(res => {
        debugger;
        if (res) {
          debugger;
          this.actualValueReport = res as ActualValueReportPagingListDto;
        }
      })
    )
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.loadComponentData();
    }
  }
  private getLicenseProjectProblemId() {
    this.subscriptions.push(
      this._licenseProjectProblemService.getLicenseProjectProblemId().subscribe((res) => {
        this.licenseProjectProblemId = res;
        if (this.licenseProjectProblemId)
          this.getLicenseProjectProblemById();
      })
    )
  }

  private getLicenseProjectProblemById() {

    this.subscriptions.push(
      this._licenseProjectProblemService.getLicenseProjectProblemById(this.licenseProjectProblemId as string).subscribe((res) => {
        this.licenseProjectProblemData = res as LicenseProjectProblemDto;

        this.addValuesToForm(this.licenseProjectProblemData);
      })
    )
  }
  addValuesToForm(licenseProjectProblem: LicenseProjectProblemDto) {

    if (licenseProjectProblem.id && licenseProjectProblem.id != "00000000-0000-0000-0000-000000000000") {
      this.licenseProjectProblemLogForm.patchValue(licenseProjectProblem as any);
      let ProblemResponsiblePartyIds: number[] = [];
      if (licenseProjectProblem && licenseProjectProblem.licenseProjectProblemResponsibleParties) {
        licenseProjectProblem.licenseProjectProblemResponsibleParties.forEach(item => {
          ProblemResponsiblePartyIds.push(item.responsiblePartyId);
        });
      }
      this.licenseProjectProblemLogForm.controls.licenseProjectProblemResponsiblePartyIds.setValue(ProblemResponsiblePartyIds);
    }
  }
  loadComponentData(): void {

    const requests = [
      this._lookupEngineeringManagementService.getSysProblemStatus(),
      this._lookupEngineeringManagementService.getSysLicenseProjectRiskTypes(),
      this._lookupEngineeringManagementService.GetSysResponsibleParties(),
      this._lookupEngineeringManagementService.getSysOwnerTypes(),
      this._lookupEngineeringManagementService.getSysLevelType(),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.ProblemStatusList = results[0] as SysProblemStatusDto[];
        this.licenseProjectProblemTypeList = results[1] as SysLicenseProjectRiskTypeDto[];
        this.responsiblePartyList = results[2] as SysResponsiblePartyDto[];
        this.ownerTypeList = results[3] as SysOwnerTypeDto[];
        this.SysLevelTypeList = results[4] as SysLevelTypeDto[];


      }
    });
    this.subscriptions.push(subscriptions);
  }
  save(): void {

    if (!this.licenseProjectProblemLogForm.valid) {
      this.showValidation = true;
      return;
    }

    this.licenseProjectProblemCreateUpdate = this.licenseProjectProblemLogForm.value as {} as LicenseProjectProblemCreateUpdateDto;
    this.licenseProjectProblemCreateUpdate.licenseProjectId = this.licenseProjectId as string;
    this.licenseProjectProblemCreateUpdate.id = this.licenseProjectProblemData?.id as string;
    this.licenseProjectProblemCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportDetailId = this.actualValueReport?.id as string;


    this.subscriptions.push(
      this._licenseProjectProblemService.save(this.licenseProjectProblemCreateUpdate).subscribe((res) => {

        if (res?.isDone) {
          this._licenseProjectProblemService.submitSuccessfullyEventEmitter.emit()
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }

      })
    )
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
