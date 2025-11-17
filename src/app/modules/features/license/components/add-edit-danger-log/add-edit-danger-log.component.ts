import { Component } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import {LicenseProjectRiskCreateUpdateDto, LicenseProjectRiskDto, SysContinuityDto, SysLicenseProjectRiskTypeDto, SysOwnerTypeDto, SysResponsiblePartyDto, SysRiskStatusDto } from '../../dataModels/license-project-risk-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { LookupEngineeringManagementService } from '../../services/lookup-engineering-management.service';
import { LicenseProjectRiskService } from '../../services/license-project-risk.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ActualValueReportPagingListDto } from '../../models/actual-value-report-paging-list-dto';
import { EngineeringSupervisionReportActualProjectStatusSummaryService } from '../../services/engineering-supervision-report-actual-project-status-summary.service';

@Component({
  selector: 'app-add-edit-danger-log',
  templateUrl: './add-edit-danger-log.component.html',
  styleUrls: ['./add-edit-danger-log.component.scss']
})
export class AddEditDangerLogComponent {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  licenseProjectRiskId: string | null = null;
  licenseProjectRiskData?: LicenseProjectRiskDto;
  licenseProjectRiskCreateUpdate?: LicenseProjectRiskCreateUpdateDto;
  probabilityList?: number[] = [1, 2, 3, 4, 5]
  effectList: number[] = [1, 2, 3, 4, 5]
  continuityList?: SysContinuityDto[]
  licenseProjectRiskTypeList?: SysLicenseProjectRiskTypeDto[]
  riskStatusList?: SysRiskStatusDto[]
  responsiblePartyList?: SysResponsiblePartyDto[]
  ownerTypeList?: SysOwnerTypeDto[]
  flag: boolean = false;
  licenseProjectDangerLogForm = this._formBuilder.group({
    description: this._formBuilder.control<string | null>(null, [Validators.required]),
    riskTypeId: this._formBuilder.control<number | null>(null, [Validators.required]),
    continuityId: this._formBuilder.control<number | null>(null, [Validators.required]),
    effect: this._formBuilder.control<number | null>(null, [Validators.required]),
    probability: this._formBuilder.control<number | null>(null, [Validators.required]),
    effectDescription: this._formBuilder.control<string | null>(null, [Validators.required]),
    responsePlanContainmentStrategy: this._formBuilder.control<string | null>(null, [Validators.required]),
    solutionOwnerId: this._formBuilder.control<number | null>(null, [Validators.required]),
    riskStatusId: this._formBuilder.control<number | null>(null, [Validators.required]),
    riskResponsiblePartyIds: this._formBuilder.control<number[] | null>(null, [Validators.required]),
    projectName: this._formBuilder.control<string | null>(null),
    projectCode: this._formBuilder.control<string | null>(null),
    area: this._formBuilder.control<string | null>(null),
    city: this._formBuilder.control<string | null>(null),
    priority: this._formBuilder.control<string | null>(null),


  });
  actualValueReport?:ActualValueReportPagingListDto;
  showValidation: boolean = false;
  get controls() {
    return this.licenseProjectDangerLogForm.controls;
  }
  get riskResponsiblePartyIds() {
    return this.licenseProjectDangerLogForm.controls['riskResponsiblePartyIds']

  }
  constructor(
    private _engineeringSupervisionReportActualProjectStatusSummaryService: EngineeringSupervisionReportActualProjectStatusSummaryService,
    private _lookupEngineeringManagementService: LookupEngineeringManagementService,
    private _licenseProjectRiskService: LicenseProjectRiskService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,

  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.getLicenseProjectRiskId();
    this.observePopupEvents();
    this.observelicenseProjectDangerLogForm();
    this.getmonthData();

  }
 getmonthData() {
    
    this.subscriptions.push(
      this._engineeringSupervisionReportActualProjectStatusSummaryService.getmonthDate().subscribe(res => {
        
        if (res) {
          
          this.actualValueReport= res as ActualValueReportPagingListDto;
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
  private getLicenseProjectRiskId() {
    this.subscriptions.push(
      this._licenseProjectRiskService.getLicenseProjectRiskId().subscribe((res) => {
        this.licenseProjectRiskId = res;
        if (this.licenseProjectRiskId)
          this.getLicenseProjectRiskById();
      })
    )
  }

  private getLicenseProjectRiskById() {
    
    this.subscriptions.push(
      this._licenseProjectRiskService.getLicenseProjectRiskById(this.licenseProjectRiskId as string).subscribe((res) => {
        this.licenseProjectRiskData = res as LicenseProjectRiskDto;
        
        this.addValuesToForm(this.licenseProjectRiskData);
      })
    )
  }
  addValuesToForm(licenseProjectRisk: LicenseProjectRiskDto) {
    
    if (licenseProjectRisk.id && licenseProjectRisk.id != "00000000-0000-0000-0000-000000000000") {
      this.licenseProjectDangerLogForm.patchValue(licenseProjectRisk as any);
      let riskResponsiblePartyIds: number[] = [];
      if (licenseProjectRisk && licenseProjectRisk.licenseProjectRiskResponsibleParties) {
        licenseProjectRisk.licenseProjectRiskResponsibleParties.forEach(item => {
          riskResponsiblePartyIds.push(item.responsiblePartyId);
        });
      }
      this.licenseProjectDangerLogForm.controls.riskResponsiblePartyIds.setValue(riskResponsiblePartyIds);
    }
  }
  loadComponentData(): void {

    const requests = [
      this._lookupEngineeringManagementService.getSysContinuities(),
      this._lookupEngineeringManagementService.getSysLicenseProjectRiskTypes(),
      this._lookupEngineeringManagementService.getSysRiskStatus(),
      this._lookupEngineeringManagementService.GetSysResponsibleParties(),
      this._lookupEngineeringManagementService.getSysOwnerTypes(),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.continuityList = results[0] as SysContinuityDto[];
        this.licenseProjectRiskTypeList = results[1] as SysLicenseProjectRiskTypeDto[];
        this.riskStatusList = results[2] as SysRiskStatusDto[];
        this.responsiblePartyList = results[3] as SysResponsiblePartyDto[];
        this.ownerTypeList = results[4] as SysOwnerTypeDto[];
      }
    });
    this.subscriptions.push(subscriptions);
  }
  save(): void {
    
    if (!this.licenseProjectDangerLogForm.valid) {
      this.showValidation = true;
      return;
    }

    this.licenseProjectRiskCreateUpdate = this.licenseProjectDangerLogForm.value as {} as LicenseProjectRiskCreateUpdateDto;
    this.licenseProjectRiskCreateUpdate.licenseProjectId = this.licenseProjectId as string;
    this.licenseProjectRiskCreateUpdate.id = this.licenseProjectRiskData?.id as string;
    this.licenseProjectRiskCreateUpdate.licenseProjectEngineeringSupervisionPlannedReportDetailId = this.actualValueReport?.id as string;

    
   

    this.subscriptions.push(
      this._licenseProjectRiskService.save(this.licenseProjectRiskCreateUpdate).subscribe((res) => {

        if (res?.isDone) {
          this._licenseProjectRiskService.submitSuccessfullyEventEmitter.emit()
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
  private observelicenseProjectDangerLogForm() {
    this.subscriptions.push(

      this.licenseProjectDangerLogForm.valueChanges.subscribe(changes => {
        
        if (changes.probability && changes.effect) {
          let priorityValue: string = '';
          let multiplyValue = changes.effect * changes.probability;
          // if (multiplyValue >= 20 && multiplyValue <= 25) {
          //   priorityValue = "عالي جدا"
          // }
          // else if (multiplyValue >= 15 && multiplyValue <= 19) {
          //   priorityValue = "عالي"
          // }
          // else if (multiplyValue >= 6 && multiplyValue <= 14) {
          //   priorityValue = "متوسط"
          // }
          // else if (multiplyValue >= 1 && multiplyValue <= 5) {
          //   priorityValue = "قليل"
          // }
          this.licenseProjectDangerLogForm.controls.priority.setValue(multiplyValue.toString());
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
