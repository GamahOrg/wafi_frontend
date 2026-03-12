import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../services/popup/popup.service';
import { RatingTypeEnum } from '../../models/enums/rating.enum';
import { Subscription, take } from 'rxjs';
import { PopupData } from '../../models/popup.model';
import { RatingService } from '../../services/rating/rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  // for stars rating
  fiveStar = [1, 2, 3, 4, 5];
  selectedRate = 0;

  // for numbers rating
  tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ratingType: RatingTypeEnum = RatingTypeEnum.PlatformUsability;
  RatingTypeEnum = RatingTypeEnum;
  notes!: string;
  subscriptions: Subscription[] = [];
  popupData!: PopupData;
  constructor(
    private _popupService: PopupService,
    private _ratingService: RatingService,
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this._popupService.popupData.pipe(take(1)).subscribe((data) => {
        this.popupData = data;
        if (data.data) {
          this.ratingType = data.data.ratingType;
        }
      }),
    );
    this._ratingService.currentRatingData.next({
      ratingValue: this.selectedRate,
      notes: this.notes,
      browserType: this.getCurrentBrowser(),
      id: this.popupData.id ?? '',
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
  onRateChange(value: number) {
    this.selectedRate = value;
    this.pushCurrentData();
  }

  // 📝 when user types notes
  onNotesChange(value: string) {
    this.notes = value;
    this.pushCurrentData();
  }

  private pushCurrentData() {
    this._ratingService.currentRatingData.next({
      ratingValue: this.selectedRate,
      notes: this.notes,
      browserType: this.getCurrentBrowser(),
      id: this.popupData.id ?? '',
    });
  }

  getCurrentBrowser(): string {
    const userAgent: string = navigator.userAgent;

    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
      return 'Chrome';
    }

    if (userAgent.includes('Firefox')) {
      return 'Firefox';
    }

    if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
      return 'Safari';
    }

    if (userAgent.includes('Edg')) {
      return 'Edge';
    }

    if (userAgent.includes('OPR') || userAgent.includes('Opera')) {
      return 'Opera';
    }

    return 'Unknown';
  }
}
