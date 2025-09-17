import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseProjectRecommendationService } from '../../../service/license-project-recommendation-service';
import { LicenseProjectRecommendationDto } from '../../../models/license-project-recommendations';

@Component({
  selector: 'app-recommendation-view',
  templateUrl: './recommendation-view.component.html',
  styleUrls: ['./recommendation-view.component.scss'],
  standalone:false
})
export class RecommendationViewComponent implements OnInit, OnDestroy {

  licenseProjectRecommendation!: LicenseProjectRecommendationDto;
  subscriptions: Subscription[] = [];

  localization = {
    recommendationText: 'نص التوصية / المقترح: ',
    responsibleParty: 'الجهة المسئولة: ',
    expectedImplementationDate: 'تاريخ التنفيذ المتوقع: ',
    status: 'الحالة: ',
    notes: 'ملاحظات: ',
  }

  constructor(private _popupService: PopupService,
    private _licenseProjectRecommendationService: LicenseProjectRecommendationService) { }

  ngOnInit() {
    this._licenseProjectRecommendationService.getViewRecommendation().subscribe((subjectObj) => {
      this.licenseProjectRecommendation = subjectObj;
    })
    this.observePopupEvents();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        this._popupService.dismissDialog();
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log("popup data", res)
      })
    )
  }
}
