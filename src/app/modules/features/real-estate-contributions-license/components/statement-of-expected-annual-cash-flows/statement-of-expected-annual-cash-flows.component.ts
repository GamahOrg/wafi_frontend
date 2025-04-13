import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectAnnualCashFlowDto } from '../../models/feasibilityStudyDtos/license-project-annual-cash-flow-dto';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseProjectFeasibilityStudyService } from '../../services/feasibilityStudyServices/license-project-feasibility-study.service';
import { LicenseProjectAnnualCashFlowService } from '../../services/feasibilityStudyServices/license-project-annual-cash-flow.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { StatementOfExpectedAnnualCashFlowsFormComponent } from '../statement-of-expected-annual-cash-flows-form/statement-of-expected-annual-cash-flows-form.component';
import { ToastrService } from 'ngx-toastr';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';

@Component({
  selector: 'app-statement-of-expected-annual-cash-flows',
  templateUrl: './statement-of-expected-annual-cash-flows.component.html',
  styleUrls: ['./statement-of-expected-annual-cash-flows.component.scss']
})
export class StatementOfExpectedAnnualCashFlowsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectAnnualCashFlows: LicenseProjectAnnualCashFlowDto[] = []
  feasibilityStudyId: string = "";
  constructor(
    private _licenseProjectFeasibilityStudyService: LicenseProjectFeasibilityStudyService,
    private _licenseProjectAnnualCashFlowService: LicenseProjectAnnualCashFlowService,
    private toastr: ToastrService,
    private _popupService: PopupService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) {
  }
  ngOnInit(): void {
    this.GetByFeasibilityStudyId();
    this.getExpectedAnnualCashFlowlist()
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }
  getExpectedAnnualCashFlowlist(): void {
    this.subscriptions.push(
      this._licenseProjectAnnualCashFlowService.getExpectedAnnualCashFlowlist().subscribe((list) => {
        this.licenseProjectAnnualCashFlows = list;
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
          this._licenseProjectAnnualCashFlowService.GetByFeasibilityStudyId(feasibilityStudyId).subscribe(res => {
            this.feasibilityStudyId = feasibilityStudyId
            this.licenseProjectAnnualCashFlows = res as LicenseProjectAnnualCashFlowDto[];
          })
        }
        else {
          this.toastr.warning(
            " يجب استكمال البيانات السابقة "
          );
        }
      })
    )
  }

  delete(id: string) {
    if (id) {
      this.subscriptions.push(

        this._licenseProjectAnnualCashFlowService.Delete(id).subscribe(res => {
          if (res.isDone)
            this.GetByFeasibilityStudyId();
        })
      )
    }

  }
  openDialog(id: string): void {
    if (id) {
      let exp = this.licenseProjectAnnualCashFlows.filter(x => x.id == id)[0] as LicenseProjectAnnualCashFlowDto;
      this._licenseProjectAnnualCashFlowService.setProjectAnnualCashFlowObj(exp);
    }
    else {
      let exp = new LicenseProjectAnnualCashFlowDto;
      exp.licenseProjectFeasibilityStudyId = this.feasibilityStudyId;
      this._licenseProjectAnnualCashFlowService.setProjectAnnualCashFlowObj(exp);
    }

    let Data = {
      title: "بيان بالتدفقات النقدية السنوية المتوقعة",
      component: StatementOfExpectedAnnualCashFlowsFormComponent
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
