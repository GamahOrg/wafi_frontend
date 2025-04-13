import { Component } from '@angular/core';
import { LicenseProjectExpectedFundingSourceService } from '../../services/feasibilityStudyServices/license-project-expected-funding-source.service';
import { LicenseProjectExpectedFundingSourceDto } from '../../models/feasibilityStudyDtos/license-project-expected-funding-source-dto';
import { Subscription } from 'rxjs';
import { LicenseProjectFeasibilityStudyService } from '../../services/feasibilityStudyServices/license-project-feasibility-study.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectExpectedFundingSourceFormComponent } from '../license-project-expected-funding-source-form/license-project-expected-funding-source-form.component';
import { ToastrService } from 'ngx-toastr';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';

@Component({
  selector: 'app-license-project-expected-funding-source',
  templateUrl: './license-project-expected-funding-source.component.html',
  styleUrls: ['./license-project-expected-funding-source.component.scss']
})
export class LicenseProjectExpectedFundingSourceComponent {
  subscriptions: Subscription[] = [];
  licenseProjectExpectedFundingSources: LicenseProjectExpectedFundingSourceDto[] = []
  feasibilityStudyId: string = "";
  constructor(
    private _licenseProjectFeasibilityStudyService: LicenseProjectFeasibilityStudyService,
    private _licenseProjectExpectedFundingSourceService: LicenseProjectExpectedFundingSourceService,
    private _popupService: PopupService,
    private toastr: ToastrService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) {
  }
  ngOnInit(): void {
    this.GetByFeasibilityStudyId();
    this.getExpectedExpectedFundingSourcelist();
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }
  getExpectedExpectedFundingSourcelist(): void {
    this.subscriptions.push(
      this._licenseProjectExpectedFundingSourceService.getExpectedExpectedFundingSourcelist().subscribe((list) => {
        this.licenseProjectExpectedFundingSources = list;
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
          this._licenseProjectExpectedFundingSourceService.GetByFeasibilityStudyId(feasibilityStudyId).subscribe(res => {
            this.feasibilityStudyId = feasibilityStudyId
            this.licenseProjectExpectedFundingSources = res as LicenseProjectExpectedFundingSourceDto[];
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
    this.subscriptions.push(

      this._licenseProjectExpectedFundingSourceService.Delete(id).subscribe(res => {
        if (res && res.isDone)
          this.GetByFeasibilityStudyId();
      })
    )
  }
  openDialog(id: string): void {
    if (id) {
      let exp = this.licenseProjectExpectedFundingSources.filter(x => x.id == id)[0] as LicenseProjectExpectedFundingSourceDto;
      this._licenseProjectExpectedFundingSourceService.setProjectExpectedFundingSourceObj(exp);
    }
    else {
      let exp = new LicenseProjectExpectedFundingSourceDto;
      exp.licenseProjectFeasibilityStudyId = this.feasibilityStudyId;
      this._licenseProjectExpectedFundingSourceService.setProjectExpectedFundingSourceObj(exp);
    }

    let Data = {
      title: "مصادر التمويل المتوقعة",
      component: LicenseProjectExpectedFundingSourceFormComponent
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
