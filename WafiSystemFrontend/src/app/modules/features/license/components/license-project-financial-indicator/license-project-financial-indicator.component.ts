import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectFinancialIndicatorDto } from '../../models/feasibilityStudyDtos/license-project-financial-indicator-dto';
import { LicenseProjectFinancialIndicatorService } from '../../services/feasibilityStudyServices/license-project-financial-indicator.service';
import { Subscription } from 'rxjs';
import { LicenseProjectFeasibilityStudyService } from '../../services/feasibilityStudyServices/license-project-feasibility-study.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectFinancialIndicatorFormComponent } from '../license-project-financial-indicator-form/license-project-financial-indicator-form.component';
import { ToastrService } from 'ngx-toastr';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-license-project-financial-indicator',
  templateUrl: './license-project-financial-indicator.component.html',
  styleUrls: ['./license-project-financial-indicator.component.scss']
})
export class LicenseProjectFinancialIndicatorComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectFinancialIndicators: LicenseProjectFinancialIndicatorDto[] = []
  feasibilityStudyId: string = "";

  constructor(
    private _licenseProjectFeasibilityStudyService: LicenseProjectFeasibilityStudyService,
    private _licenseProjectFinancialIndicatorService: LicenseProjectFinancialIndicatorService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) { }

  ngOnInit(): void {
    this.GetByFeasibilityStudyId();
    this.getFinancialIndicatorSubjectListlist();
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }

  getFinancialIndicatorSubjectListlist(): void {
    this.subscriptions.push(
      this._licenseProjectFinancialIndicatorService.getFinancialIndicatorSubjectListlist().subscribe((list) => {
        this.licenseProjectFinancialIndicators = list;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

  GetByFeasibilityStudyId(): void {
    this.subscriptions.push(
      this._licenseProjectFeasibilityStudyService.getFeasibilityStudyId().subscribe((feasibilityStudyId) => {
        if (feasibilityStudyId && (Object.keys(feasibilityStudyId).length != 0)) {
          this._licenseProjectFinancialIndicatorService.GetByFeasibilityStudyId(feasibilityStudyId).subscribe(res => {
            this.feasibilityStudyId = feasibilityStudyId
            this.licenseProjectFinancialIndicators = res as LicenseProjectFinancialIndicatorDto[];
          })
        }
        else {
          this._toastrNotificationService.showError(" يجب استكمال البيانات السابقة ");
        }
      })
    )
  }

  delete(id: string) {
    this.subscriptions.push(
      this._licenseProjectFinancialIndicatorService.Delete(id).subscribe(res => {
        if (res && res.isDone)
          this.GetByFeasibilityStudyId();
      })
    )
  }

  openDialog(id: string): void {
    if (id) {
      let exp = this.licenseProjectFinancialIndicators.filter(x => x.id == id)[0] as LicenseProjectFinancialIndicatorDto;
      this._licenseProjectFinancialIndicatorService.setProjectFinancialIndicatorObj(exp);
    }
    else {
      let exp = new LicenseProjectFinancialIndicatorDto;
      exp.licenseProjectFeasibilityStudyId = this.feasibilityStudyId;
      this._licenseProjectFinancialIndicatorService.setProjectFinancialIndicatorObj(exp);
    }

    let Data = {
      title: "ملخص بأهم النتائج والمؤشرات المالية للمشروع",
      component: LicenseProjectFinancialIndicatorFormComponent
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
  }

  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.moveToNextTab()
      })
    )
  }

  moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }

  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false)
  }

}
