import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExpectedAnnualBalanceSheetService } from '../../services/feasibilityStudyServices/expected-annual-balance-sheet.service';
import { Subscription } from 'rxjs';
import { LicenseProjectAnnualBalanceSheetDto } from '../../models/feasibilityStudyDtos/license-project-annual-balance-sheet-dto';
import { LicenseProjectFeasibilityStudyService } from '../../services/feasibilityStudyServices/license-project-feasibility-study.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ExpectedAnnualBalanceSheetFormComponent } from '../expected-annual-balance-sheet-form/expected-annual-balance-sheet-form.component';
import { ToastrService } from 'ngx-toastr';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
@Component({
  selector: 'app-expected-annual-balance-sheet',
  templateUrl: './expected-annual-balance-sheet.component.html',
  styleUrls: ['./expected-annual-balance-sheet.component.scss']
})
export class ExpectedAnnualBalanceSheetComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectAnnualBalanceSheets: LicenseProjectAnnualBalanceSheetDto[] = []
  feasibilityStudyId: string = "";
  constructor(
    private _licenseProjectFeasibilityStudyService: LicenseProjectFeasibilityStudyService,
    private _licenseProjectExpectedAnnualBalanceSheetService: ExpectedAnnualBalanceSheetService,
    private _popupService: PopupService,
    private toastr: ToastrService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) {
  }
  ngOnInit(): void {
    this.GetByFeasibilityStudyId();
    this.getExpectedAnnualBalanceSheetlist()
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }
  getExpectedAnnualBalanceSheetlist(): void {
    this.subscriptions.push(
      this._licenseProjectExpectedAnnualBalanceSheetService.getExpectedAnnualBalanceSheetlist().subscribe((list) => {
        this.licenseProjectAnnualBalanceSheets = list;
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
          this._licenseProjectExpectedAnnualBalanceSheetService.GetByFeasibilityStudyId(feasibilityStudyId).subscribe(res => {
            this.feasibilityStudyId = feasibilityStudyId
            this.licenseProjectAnnualBalanceSheets = res as LicenseProjectAnnualBalanceSheetDto[];
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

        this._licenseProjectExpectedAnnualBalanceSheetService.Delete(id).subscribe(res => {
          if (res && res.isDone)
            this.GetByFeasibilityStudyId();
        })
      )
    }

  }
  openDialog(id: string): void {

    if (id) {
      let exp = this.licenseProjectAnnualBalanceSheets.filter(x => x.id == id)[0] as LicenseProjectAnnualBalanceSheetDto;
      this._licenseProjectExpectedAnnualBalanceSheetService.setProjectAnnualBalanceSheetObj(exp);
    }
    else {
      let exp = new LicenseProjectAnnualBalanceSheetDto;
      exp.licenseProjectFeasibilityStudyId = this.feasibilityStudyId;
      this._licenseProjectExpectedAnnualBalanceSheetService.setProjectAnnualBalanceSheetObj(exp);
    }

    let Data = {
      title: "الميزانية العمومية السنوية المتوقعة",
      component: ExpectedAnnualBalanceSheetFormComponent
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
