import { Component, OnDestroy, OnInit } from '@angular/core';
import { TermsPartType } from '../../../models/license-project-parties-additional-terms-model';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fawria-licenseproject-deed-owners-container',
  templateUrl: './fawria-licenseproject-deed-owners-container.component.html',
  styleUrls: ['./fawria-licenseproject-deed-owners-container.component.scss'],
})
export class FawriaLicenseprojectDeedOwnersContainerComponent
  implements OnInit, OnDestroy
{
  TermsPartType: typeof TermsPartType = TermsPartType;
  subscriptions: Subscription[] = [];

  constructor(
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }


  ngOnInit(): void {
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }

  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
        (res: null) => {
          // this.save(true)
          this.moveToNextTab();
        }
      )
    );
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(
        (res: null) => {
          // this.save()
        }
      )
    );
  }
  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked();
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }
}
