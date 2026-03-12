import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PopupService } from '../../services/popup/popup.service';
import { PromptPopupData } from '../../models/popup.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-popup-propmt',
  templateUrl: './popup-propmt.component.html',
  styleUrls: ['./popup-propmt.component.scss']
})
export class PopupPropmtComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  promptPopupData = {} as PromptPopupData;

  constructor(
    public dialogRef: MatDialogRef<PopupPropmtComponent>,
    private _popupService: PopupService,
  ) { }

  ngOnInit(): void {
    this.observePopupData();
  }

  observePopupData(): void {
    this.subscriptions.push(
      this._popupService.promptPopupData.subscribe((data: PromptPopupData) => {
        this.promptPopupData = data;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
