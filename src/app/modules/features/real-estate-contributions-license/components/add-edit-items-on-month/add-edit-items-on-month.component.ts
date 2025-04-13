import { Component } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto } from '../../models/engineering-supervision-planned-report-detail-for-infrastructure-monthly-dto';
import { SysLicenseInfrastructureElementDto } from '../../models/sys-license-infrastructure-element-dto';
import { LicenseProjectInfrastructureNetworksStatusDto } from '../../models/license-project-infrastructure-networks-status-dto';
import { LicenseProjectInfrastructureNetworksStatusCreateUpdateDto } from '../../models/license-project-infrastructure-networks-status-create-update-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectInfrastructureNetworksStatusService } from '../../services/license-project-infrastructure-networks-status.service';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../services/license-project-engineering-supervision-planned-report-detail.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-add-edit-items-on-month',
  templateUrl: './add-edit-items-on-month.component.html',
  styleUrls: ['./add-edit-items-on-month.component.scss']
})
export class AddEditItemsOnMonthComponent {
  subscriptions: Subscription[] = [];
  engineeringSupervisionPlannedReportDetailForInfrastructureMonthly?: EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto;
  sysLicenseInfrastructureElementList?: SysLicenseInfrastructureElementDto[]
  licenseProjectInfrastructureNetworksStatusList: LicenseProjectInfrastructureNetworksStatusDto[] = [];
  licenseProjectInfrastructureNetworksStatusCreateUpdateList?: LicenseProjectInfrastructureNetworksStatusCreateUpdateDto[];
  showValidation: boolean = false;
  engineerinSupervisionPlannedReportAllowToEdit: boolean = false;
  itemsOnMonthForm = this._formBuilder.group({
    sysLicenseInfrastructureElementId: this._formBuilder.control<string | null>(null, [Validators.required]),
    monthlyPlannedCompletionPercentage: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),
    itemCost: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.decimal), Validators.min(0)]),

  })
  constructor(
    private _formBuilder: FormBuilder,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _licenseProjectInfrastructureNetworksStatusService: LicenseProjectInfrastructureNetworksStatusService,
    private _licenseProjectEngineeringSupervisionPlannedReportDetailService: LicenseProjectEngineeringSupervisionPlannedReportDetailService,

  ) { }

  ngOnInit(): void {
    this.getEngineeringSupervisionPlannedReportDetailForInfrastructureMonthly();
    this.observePopupEvents();
    this.getEngineerinSupervisionPlannedReportAllowToEdit();
  }
  get controls() {
    return this.itemsOnMonthForm.controls
  }
  getEngineerinSupervisionPlannedReportAllowToEdit() {
    this.subscriptions.push(

      this._licenseProjectEngineeringSupervisionPlannedReportDetailService.getEngineerinSupervisionPlannedReportAllowToEdit().subscribe((engineerinSupervisionPlannedReportAllowToEdit) => {
        this.engineerinSupervisionPlannedReportAllowToEdit = engineerinSupervisionPlannedReportAllowToEdit as boolean;

      })
    )
  }

  private getEngineeringSupervisionPlannedReportDetailForInfrastructureMonthly(): void {

    this.subscriptions.push(
      this._licenseProjectInfrastructureNetworksStatusService.getEngineeringSupervisionPlannedReportDetailForInfrastructureMonthly().subscribe((data: EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto | null) => {
        this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthly = data as EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto;
        if (this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthly) {
          this.loadComponentData();
        }
      }));
  }
  loadComponentData(): void {

    const requests = [
      this._licenseProjectInfrastructureNetworksStatusService.GetLicenseInfrastructureElement(this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthly?.monthDate as Date, this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthly?.licenseProjectId as string),
      this._licenseProjectInfrastructureNetworksStatusService.GetInfrastructureNetworksStatusByLicenseProjectEngineeringSupervisionPlannedReportDetailId(this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthly?.id as string),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {

        this.sysLicenseInfrastructureElementList = results[0] as SysLicenseInfrastructureElementDto[];
        this.licenseProjectInfrastructureNetworksStatusList = results[1] as LicenseProjectInfrastructureNetworksStatusDto[];

        // Caculate relativeWeight && cumulativeplannedcompletionpercentage
        if (this.licenseProjectInfrastructureNetworksStatusList && this.licenseProjectInfrastructureNetworksStatusList.length > 0) {
          this.licenseProjectInfrastructureNetworksStatusList.forEach(licenseProjectInfrastructureNetworksStatu => {
            licenseProjectInfrastructureNetworksStatu.relativeWeight = (licenseProjectInfrastructureNetworksStatu.itemCost as number) / (this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthly?.infrastructureCost as number);
            licenseProjectInfrastructureNetworksStatu.cumulativeplannedcompletionpercentage = (licenseProjectInfrastructureNetworksStatu.cumulativeplannedcompletionpercentage as number) + (licenseProjectInfrastructureNetworksStatu.monthlyPlannedCompletionPercentage as number)
          });
        }
      }
    });
    this.subscriptions.push(subscriptions);

  }
  addRow(): void {

    if (this.itemsOnMonthForm.valid) {

      let licenseProjectInfrastructureNetworksStatu = {} as LicenseProjectInfrastructureNetworksStatusDto;
      let itemsOnMonth = this.itemsOnMonthForm.value;

      //Get Value From Form
      licenseProjectInfrastructureNetworksStatu.licenseProjectEngineeringSupervisionPlannedReportDetailId = this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthly?.id as string;
      licenseProjectInfrastructureNetworksStatu.sysLicenseInfrastructureElementId = itemsOnMonth.sysLicenseInfrastructureElementId as string;
      licenseProjectInfrastructureNetworksStatu.itemCost = itemsOnMonth.itemCost as number;
      licenseProjectInfrastructureNetworksStatu.monthName = this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthly?.monthName as string;
      licenseProjectInfrastructureNetworksStatu.monthlyPlannedCompletionPercentage = itemsOnMonth.monthlyPlannedCompletionPercentage as number;

      //  Caculate relativeWeight
      licenseProjectInfrastructureNetworksStatu.relativeWeight = (itemsOnMonth.itemCost as number) / (this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthly?.infrastructureCost as number);
      // Caculate   cumulativeplannedcompletionpercentage
      let sysLicenseInfrastructureElement = this.sysLicenseInfrastructureElementList?.filter(sysLicenseInfrastructureElement => sysLicenseInfrastructureElement.id === licenseProjectInfrastructureNetworksStatu.sysLicenseInfrastructureElementId)[0];
      licenseProjectInfrastructureNetworksStatu.itemName = sysLicenseInfrastructureElement?.elementName as string;
      licenseProjectInfrastructureNetworksStatu.cumulativeplannedcompletionpercentage = sysLicenseInfrastructureElement?.cumulativeplannedcompletionpercentage as number + (licenseProjectInfrastructureNetworksStatu.monthlyPlannedCompletionPercentage as number)
      //check if item not Existing in list
      if (this.licenseProjectInfrastructureNetworksStatusList
        && this.licenseProjectInfrastructureNetworksStatusList.length > 0
        && this.licenseProjectInfrastructureNetworksStatusList.some(licenseProjectInfrastructureNetworksStatus => licenseProjectInfrastructureNetworksStatus.sysLicenseInfrastructureElementId === licenseProjectInfrastructureNetworksStatu.sysLicenseInfrastructureElementId)) {
        this.showError("لا يمكن اضافة نفس البند على نفس الشهر مرتين");
        return
      }
      this.licenseProjectInfrastructureNetworksStatusList.push(licenseProjectInfrastructureNetworksStatu);
      this.itemsOnMonthForm.reset();


    }
  }
  save() {

    if (this.licenseProjectInfrastructureNetworksStatusList && this.licenseProjectInfrastructureNetworksStatusList.length > 0) {
      this.licenseProjectInfrastructureNetworksStatusCreateUpdateList = this.licenseProjectInfrastructureNetworksStatusList;
      this.subscriptions.push(
        this._licenseProjectInfrastructureNetworksStatusService.Save(this.licenseProjectInfrastructureNetworksStatusCreateUpdateList as LicenseProjectInfrastructureNetworksStatusCreateUpdateDto[]).subscribe(
          (res) => {

            this.showSuccess("تم حفظ بنود الشهر ");
            this.closeDialog();


          })
      )
    }
  }
  delete(id: string, index: number) {

    if (id) {
      this.subscriptions.push(
        this._licenseProjectInfrastructureNetworksStatusService.Delete(id).subscribe(res => {
          if (res.isDone)

            this.showSuccess("تم حذف البند من على الشهر");
          this.licenseProjectInfrastructureNetworksStatusList?.splice(index, 1);
        })
      )
    }
    else
      this.licenseProjectInfrastructureNetworksStatusList?.splice(index, 1);

  }
  showSuccess(message: string) {
    this._toastrNotificationService.showSuccess(message);
  }
  showError(message: string) {
    this._toastrNotificationService.showError(message);
  }
  observePopupEvents(): void {
    this.observeconfirmAction()
  }



  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
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
