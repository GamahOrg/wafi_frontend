import { Component } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailDto, MasterLicenseProjectEngineeringSupervisionPlannedReportDto } from '../../../models/master-license-project-engineering-supervision-planned-report-dto';
import { EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto } from '../../../models/engineering-supervision-planned-report-detail-for-infrastructure-monthly-dto';
import { MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto } from '../../../models/master-license-project-engineering-supervision-planned-details-dto';
import { MasterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdateDto } from '../../../models/master-license-project-engineering-supervision-planned-report-create-update-dto';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../../services/license-project-engineering-supervision-planned-report-detail.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';
import { LicenseProjectInfrastructureNetworksStatusService } from '../../../services/license-project-infrastructure-networks-status.service';
import { AddEditEngineeringInfrastructureRatesComponent } from '../add-edit-engineering-infrastructure-rates/add-edit-engineering-infrastructure-rates.component';
import { AddInfrastructureRatesComponent } from '../add-infrastructure-rates/add-infrastructure-rates.component';
import { AddEditItemsOnMonthComponent } from '../add-edit-items-on-month/add-edit-items-on-month.component';

@Component({
  selector: 'app-infra-structure',
  templateUrl: './infra-structure.component.html',
  styleUrls: ['./infra-structure.component.scss']
})
export class InfraStructureComponent {
  subscriptions: Subscription[] = [];
  currenrYear?: number;
  years?: number[];
  cumulativeAmountPriorToThatYear?: number;
  durationOfContractualInfrastructureWorksMonths!: string;

  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;
  engineerinSupervisionPlannedReportAllowToEdit: boolean = false;
  licenseProjectEngineeringSupervisionPlannedReportDetailDtoList?: LicenseProjectEngineeringSupervisionPlannedReportDetailDto[]
  engineeringSupervisionPlannedReportDetailForInfrastructureMonthlyList?: EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto[];
  masterLicenseProjectEngineeringSupervisionPlannedDetails?: MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto

  licenseProjectEngineeringInfrastructure?: MasterLicenseProjectEngineeringSupervisionPlannedReportDto;
  masterLicenseProjectEngineeringSupervisionPlannedReport?: MasterLicenseProjectEngineeringSupervisionPlannedReportDto;
  masterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdate?: MasterLicenseProjectEngineeringSupervisionPlannedReportCreateUpdateDto;

  constructor(
    private _licenseProjectEngineeringSupervisionPlannedReportDetailService: LicenseProjectEngineeringSupervisionPlannedReportDetailService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _licenseProjectInfrastructureNetworksStatusService: LicenseProjectInfrastructureNetworksStatusService,
  ) { }

  ngOnInit(): void {
    this.getEngineerinSupervisionPlannedReportAllowToEdit();
    this.getLicenseProjectIdStorage();
    this.observeconfirmAction();
  }

  getEngineerinSupervisionPlannedReportAllowToEdit() {
    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService.getEngineerinSupervisionPlannedReportAllowToEdit().subscribe(res => {
        if (res)
          this.engineerinSupervisionPlannedReportAllowToEdit = res;
      })
    )
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.GetLicenseProjectEngineeringDetails();
    }
  }

  GetLicenseProjectEngineeringDetails() {
    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService.GetLicenseProjectEngineeringDetails(this.licenseProjectId as string).subscribe(res => {
        if (res) {
          this.licenseProjectEngineeringInfrastructure = res as MasterLicenseProjectEngineeringSupervisionPlannedReportDto;
          this.durationOfContractualInfrastructureWorksMonths = Number((((new Date(this.licenseProjectEngineeringInfrastructure?.contractualFinishDate).getTime() - new
            Date(this.licenseProjectEngineeringInfrastructure.contractualStartDate).getTime()) / (1000 * 60 * 60 * 24)) * 12) / 365).toFixed(3);
          this.years = this.getYearsBetween(new Date(res.contractualStartDate), new Date(res.contractualFinishDate));
          this.loadComponentData();
        }
      })
    )
  }

  loadComponentData(): void {
    if (this.years && this.years.length != 0 && !this.currenrYear)
      this.currenrYear = this.years[0] as number;

    const requests = [
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService.GetLicenseProjectEngineeringInfrastructureRates(this.licenseProjectId as string, this.currenrYear as number),
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService.GetEngineeringSupervisionPlannedReportDetailForInfrastructureMonthly(this.licenseProjectId as string, this.currenrYear as number),
    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.masterLicenseProjectEngineeringSupervisionPlannedDetails = results[0] as MasterLicenseProjectEngineeringSupervisionPlannedDetailsDto;
        this.cumulativeAmountPriorToThatYear = this.masterLicenseProjectEngineeringSupervisionPlannedDetails.cumulativeAmountPriorToThatYear;
        this.addValuesToLicenseProjectEngineeringSupervisionPlannedReportDetailList(this.masterLicenseProjectEngineeringSupervisionPlannedDetails.licenseProjectEngineeringSupervisionPlannedReportDetails, this.masterLicenseProjectEngineeringSupervisionPlannedDetails.cumulativeAmountPriorToThatYear);
        this.engineeringSupervisionPlannedReportDetailForInfrastructureMonthlyList = results[1] as EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto[];
      }
    });
    this.subscriptions.push(subscriptions);
  }

  onChangeYear(data: any) {
    this.currenrYear = Number(data.target.value);
    this.loadComponentData();
  }

  getYearsBetween(startDate: Date, endDate: Date): number[] {
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    years.sort((a, b) => a - b); // Sort in ascending order
    return years;
  }

  addValuesToLicenseProjectEngineeringSupervisionPlannedReportDetailList(licenseProjectEngineeringSupervisionPlannedReportDetailList: LicenseProjectEngineeringSupervisionPlannedReportDetailDto[], cumulativeAmountPriorToThatYear: number) {
    // Caculate the cumulative planned completionper centage
    licenseProjectEngineeringSupervisionPlannedReportDetailList.forEach(item => {
      let currentIndex = licenseProjectEngineeringSupervisionPlannedReportDetailList.findIndex((licenseProjectEngineeringSupervisionPlannedReportDetail) => licenseProjectEngineeringSupervisionPlannedReportDetail.monthDate === item.monthDate);

      if (item.id == '00000000-0000-0000-0000-000000000000' || (item.infrastructureMonthlyPlannedCompletionRate == null || item.infrastructureMonthlyPlannedCompletionRate == 0))
        cumulativeAmountPriorToThatYear = 0;
      if (currentIndex == 0) {
        let firstObj = licenseProjectEngineeringSupervisionPlannedReportDetailList[currentIndex];
        firstObj.cumulativeplannedcompletionpercentage = item.infrastructureMonthlyPlannedCompletionRate as number + cumulativeAmountPriorToThatYear;
      }
      else {
        let lastobj = licenseProjectEngineeringSupervisionPlannedReportDetailList[currentIndex - 1];
        item.cumulativeplannedcompletionpercentage = (item.infrastructureMonthlyPlannedCompletionRate as number) + (lastobj.cumulativeplannedcompletionpercentage as number);
      }
      this.licenseProjectEngineeringSupervisionPlannedReportDetailDtoList = licenseProjectEngineeringSupervisionPlannedReportDetailList;
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

  openAddEditEngineeringInfrastructureRatesDialog(): void {
    let Data = {
      title: "تعديل بيانات البنيه التحتيه",
      component: AddEditEngineeringInfrastructureRatesComponent,
      id: "AddEditEngineeringInfrastructureRatesComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  openAddInfrastructureRatesDialog(): void {
    let Data = {
      title: "تحديث بيانات البنيه التحتيه",
      component: AddInfrastructureRatesComponent,
      id: "AddInfrastructureRatesComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  openAddEditModifyTermsDialog(month: any): void {
    this._licenseProjectInfrastructureNetworksStatusService.setEngineeringSupervisionPlannedReportDetailForInfrastructureMonthly
      (month as EngineeringSupervisionPlannedReportDetailForInfrastructureMonthlyDto);
    let Data = {
      title: "تعديل البنود على الشهر",
      component: AddEditItemsOnMonthComponent,
      id: "AddEditItemsOnMonthComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        if (res.id === "AddInfrastructureRatesComponent") {
          this._licenseProjectEngineeringSupervisionPlannedReportDetailService.licenseProjectEngineeringInfrastructure.subscribe((infrastructure: MasterLicenseProjectEngineeringSupervisionPlannedReportDto | null) => {
            if (infrastructure) {
              this.licenseProjectEngineeringInfrastructure = infrastructure;
              this.durationOfContractualInfrastructureWorksMonths = Number((((new Date(this.licenseProjectEngineeringInfrastructure?.contractualFinishDate).getTime() - new
                Date(this.licenseProjectEngineeringInfrastructure.contractualStartDate).getTime()) / (1000 * 60 * 60 * 24)) * 12) / 365).toFixed(3);
            }
          })
        }
        else
          this.GetLicenseProjectEngineeringDetails();
      })
    )
  }

}
