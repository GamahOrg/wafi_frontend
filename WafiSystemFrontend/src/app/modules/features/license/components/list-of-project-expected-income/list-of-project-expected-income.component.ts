import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectFeasibilityStudyService } from '../../services/feasibilityStudyServices/license-project-feasibility-study.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { Subscription } from 'rxjs';
import { LicenseProjectExpectedIncomeDto } from '../../models/feasibilityStudyDtos/license-project-expected-income-dto';
import { LicenseProjectExpectedIncomeService } from '../../services/feasibilityStudyServices/license-project-expected-income.service';
import { LicenseProjectExpectedIncomeFormComponentComponent } from '../license-project-expected-income-form-component/license-project-expected-income-form-component.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrService } from 'ngx-toastr';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-list-of-project-expected-income',
  templateUrl: './list-of-project-expected-income.component.html',
  styleUrls: ['./list-of-project-expected-income.component.scss']
})
export class ListOfProjectExpectedIncomeComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectExpectedIncomes: LicenseProjectExpectedIncomeDto[] = []
  feasibilityStudyId: string = "";
  constructor(
    private _licenseProjectFeasibilityStudyService: LicenseProjectFeasibilityStudyService,
    private _licenseProjectExpectedIncomeService: LicenseProjectExpectedIncomeService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) { }

  ngOnInit(): void {
    this.GetByFeasibilityStudyId();
    this.getExpectedIncomeSubjectListlist()
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }

  getExpectedIncomeSubjectListlist(): void {
    this.subscriptions.push(
      this._licenseProjectExpectedIncomeService.getExpectedIncomeSubjectListlist().subscribe((list) => {
        this.licenseProjectExpectedIncomes = list;
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
          this._licenseProjectExpectedIncomeService.GetByFeasibilityStudyId(feasibilityStudyId).subscribe(res => {
            this.feasibilityStudyId = feasibilityStudyId
            this.licenseProjectExpectedIncomes = res as LicenseProjectExpectedIncomeDto[];
          })
        }
        else {
          this._toastrNotificationService.showError(" يجب استكمال البيانات السابقة ");
        }
      })
    )
  }

  delete(id: string) {
    if (id) {
      this.subscriptions.push(
        this._licenseProjectExpectedIncomeService.Delete(id).subscribe(res => {
          if (res.isDone)
            this.GetByFeasibilityStudyId();
        })
      )
    }
  }

  openDialog(id: string): void {
    if (id) {
      let exp = this.licenseProjectExpectedIncomes.filter(x => x.id == id)[0] as LicenseProjectExpectedIncomeDto;
      this._licenseProjectExpectedIncomeService.setProjectExpectedIncomeObj(exp);
    }
    else {
      let exp = new LicenseProjectExpectedIncomeDto;
      exp.licenseProjectFeasibilityStudyId = this.feasibilityStudyId;
      this._licenseProjectExpectedIncomeService.setProjectExpectedIncomeObj(exp);
    }
    let Data = {
      title: "الدخل المتوقع للمشروع",
      component: LicenseProjectExpectedIncomeFormComponentComponent,
      id: "LicenseProjectExpectedIncomeFormComponentComponent"
    } as PopupData;
    this._popupService.updatePopupData(Data);
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
