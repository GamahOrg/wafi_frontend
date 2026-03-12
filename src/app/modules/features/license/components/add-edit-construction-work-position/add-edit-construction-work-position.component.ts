import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConstructionWorkStatusCreateUpdateDto } from '../../dataModels/construction-work-status-create-update-dto';
import { LicenseProjectEngineeringSupervisionPlannedReportDetailService } from '../../services/license-project-engineering-supervision-planned-report-detail.service';
import { QualityAndBusinessProgressService } from '../../services/quality-and-business-progress.service';
import { FormArray, FormBuilder } from '@angular/forms';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import {
  ConstructionWorkStatusDto,
  MasterConstructionWorkStatusDto,
} from '../../dataModels/master-construction-work-status-dto';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-add-edit-construction-work-position',
  templateUrl: './add-edit-construction-work-position.component.html',
  styleUrls: ['./add-edit-construction-work-position.component.scss'],
})
export class AddEditConstructionWorkPositionComponent {
  subscriptions: Subscription[] = [];
  constructionWorkStatusCreateUpdateList: ConstructionWorkStatusCreateUpdateDto[] =
    [];
  currenrYear?: number;
  elementName?: string;
  years?: number[];
  licenseProjectEngineeringConstructionWorkPositionForm =
    this._formBuilder.group({
      currenrYear: [null as number | null],
      licenseProjectEngineeringConstructionWorkStatus: this._formBuilder.array(
        []
      ),
    });
  get controls() {
    return this.licenseProjectEngineeringConstructionWorkPositionForm.controls;
  }
  get licenseProjectEngineeringConstructionWorkStatusFormArr() {
    return this.licenseProjectEngineeringConstructionWorkPositionForm.get(
      'licenseProjectEngineeringConstructionWorkStatus'
    ) as FormArray;
  }

  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  licenseProjectRelativeWeightId: string | null =
    '00000000-0000-0000-0000-000000000000';
  showValidation: boolean = false;
  constructionWorkStatusCompletionRate?: number;

  constructor(
    private _licenseProjectEngineeringSupervisionPlannedReportDetailService: LicenseProjectEngineeringSupervisionPlannedReportDetailService,
    private _qualityAndBusinessProgressService: QualityAndBusinessProgressService,
    private _formBuilder: FormBuilder,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService
  ) {}

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.getlicenseProjectRelativeWeightId();
    this.observePopupEvents();
    this.observeFormArr();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  private getlicenseProjectRelativeWeightId(): void {
    this.subscriptions.push(
      this._qualityAndBusinessProgressService
        .getLicenseProjectRelativeWeightId()
        .subscribe((id) => {
          this.licenseProjectRelativeWeightId = id as string;
          if (this.licenseProjectRelativeWeightId)
            this.GetLicenseProjectEngineeringDetails();
        })
    );
  }
  GetLicenseProjectEngineeringDetails() {
    this.subscriptions.push(
      this._licenseProjectEngineeringSupervisionPlannedReportDetailService
        .GetLicenseProjectEngineeringDetails(this.licenseProjectId as string)
        .subscribe((res) => {
          if (res) {
            this.years = this.getYearsBetween(
              new Date(res.startOn),
              new Date(res.endOn)
            );
            if (this.years && this.years.length != 0 && !this.currenrYear)
              this.currenrYear = this.years[0] as number;
            this.licenseProjectEngineeringConstructionWorkPositionForm.controls.currenrYear.setValue(
              this.currenrYear as number
            );
            this.GetlicenseProjectRelativeWeightList();
          }
        })
    );
  }

  GetlicenseProjectRelativeWeightList(): void {
    this.subscriptions.push(
      this._qualityAndBusinessProgressService
        .GetlicenseProjectRelativeWeightList(
          this.licenseProjectId as string,
          this.licenseProjectRelativeWeightId as string,
          this.currenrYear as number
        )
        .subscribe((res: MasterConstructionWorkStatusDto | null) => {
          if (res) {
            this.constructionWorkStatusCompletionRate =
              res.constructionWorkStatusCompletionRate;
            this.addValuesToArrayForm(
              res.constructionWorkStatusList as ConstructionWorkStatusDto[],
              res.constructionWorkStatusCompletionRate as number
            );
          }
        })
    );
  }
  save(): void {
    this.constructionWorkStatusCreateUpdateList = this
      .licenseProjectEngineeringConstructionWorkPositionForm.controls
      .licenseProjectEngineeringConstructionWorkStatus
      .value as ConstructionWorkStatusCreateUpdateDto[];

    this.subscriptions.push(
      this._qualityAndBusinessProgressService
        .SavelicenseProjectRelativeWeightRates(
          this.constructionWorkStatusCreateUpdateList
        )
        .subscribe((res) => {
          if (res || res == 0) {
            this._toastrNotificationService.showSuccess('تم حفظ بيانات السنة');
            this.GetlicenseProjectRelativeWeightList();
          }
        })
    );
  }

  onChangeYear(data: any) {
    this.currenrYear = Number(data.target.value);
    this.save();
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

  addValuesToArrayForm(
    constructionWorkStatusDtoList: ConstructionWorkStatusDto[],
    constructionWorkStatusCompletionRate: number
  ) {
    this.licenseProjectEngineeringConstructionWorkPositionForm.controls.licenseProjectEngineeringConstructionWorkStatus.clear();
    // set Values into FormArr
    constructionWorkStatusDtoList.forEach((item) => {
      this.elementName = item.elementName;
      let currentIndex = constructionWorkStatusDtoList.findIndex(
        (constructionWorkStatus: ConstructionWorkStatusDto) =>
          constructionWorkStatus.monthDate === item.monthDate
      );
      if (
        item.id == '00000000-0000-0000-0000-000000000000' ||
        item.monthlyPlannedCompletionPercentage == null ||
        item.monthlyPlannedCompletionPercentage == 0
      )
        constructionWorkStatusCompletionRate = this.constructionWorkStatusCompletionRate as number;
      if (currentIndex == 0) {
        let firstObj = constructionWorkStatusDtoList[currentIndex];
        firstObj.cumulativeplannedcompletionpercentage =
          (item.monthlyPlannedCompletionPercentage as number) +
          constructionWorkStatusCompletionRate;
      } else {
        let lastobj = constructionWorkStatusDtoList[currentIndex - 1];
        item.cumulativeplannedcompletionpercentage =
          (item.monthlyPlannedCompletionPercentage as number) +
          (lastobj.cumulativeplannedcompletionpercentage as number);
      }
      let currentobj = this._formBuilder.group({
        id: item.id,
        licenseProjectEngineeringSupervisionPlannedReportDetailId:
          item.licenseProjectEngineeringSupervisionPlannedReportDetailId,
        licenseProjectRelativeWeightId: item.licenseProjectRelativeWeightId,
        monthDate: item.monthDate,
        monthName: item.monthName,
        monthlyPlannedCompletionPercentage:
          item.monthlyPlannedCompletionPercentage,
        cumulativeplannedcompletionpercentage:
          item.cumulativeplannedcompletionpercentage,
      });
      this.licenseProjectEngineeringConstructionWorkStatusFormArr.push(
        currentobj
      );
    });
  }

  // popup
  observePopupEvents(): void {
    this.observeconfirmAction();
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res);
        this.save();
      })
    );
  }
 
  private observeFormArr() {
    this.licenseProjectEngineeringConstructionWorkStatusFormArr.valueChanges.subscribe(
      (Arr) => {
        console.log(Arr);
        Arr.forEach((item: any) => {
          if (item && item.monthlyPlannedCompletionPercentage) {
            let currentIndex = Arr.findIndex(
              (x: any) => x.monthDate === item.monthDate
            ) as number;
            let newValue = Arr[currentIndex];
            if (currentIndex == 0)
              newValue.cumulativeplannedcompletionpercentage =
                (item.monthlyPlannedCompletionPercentage as number) +
                (this.constructionWorkStatusCompletionRate as number);
            else {
              let lastValue = Arr[currentIndex - 1];
              newValue.cumulativeplannedcompletionpercentage =
                (item.monthlyPlannedCompletionPercentage as number) +
                (lastValue.cumulativeplannedcompletionpercentage as number);
            }

            this.licenseProjectEngineeringConstructionWorkStatusFormArr
              .at(currentIndex)
              .patchValue(newValue, { emitEvent: false });

            for (let i = currentIndex + 1; i < Arr.length; i++) {
              Arr[i].cumulativeplannedcompletionpercentage = 
                (Arr[i].monthlyPlannedCompletionPercentage as number) + 
                (item.cumulativeplannedcompletionpercentage as number);

              this.licenseProjectEngineeringConstructionWorkStatusFormArr
              .at(i)
              .patchValue(Arr[i], { emitEvent: false });
            }
            
          }
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
