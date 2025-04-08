import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { LiftingTheMarkOnThePropertyTitleDeedRequestService } from '../../services/lifting-the-mark-on-the-property-title-deed.service';
import { LiftingTheMarkOnThePropertyTitleDeedDetailsComponent } from '../../components/lifting-the-mark-on-the-property-title-deed-details/lifting-the-mark-on-the-property-title-deed-details.component';

@Component({
  selector: 'app-lifting-the-mark-on-the-property-title-deed-request-details',
  templateUrl: './lifting-the-mark-on-the-property-title-deed-request-details.component.html',
  styleUrls: ['./lifting-the-mark-on-the-property-title-deed-request-details.component.scss']
})
export class LiftingTheMarkOnThePropertyTitleDeedRequestDetailsComponent {
subscriptions: Subscription[] = [];
  id: string | null = '';
  accordionContent: accordionContent = {
    oneAtATime: true,
    isAnimated: true,
    accordionComponentList: [],
  };
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private _accordionService: AccordionService,
    private projectRequestLocalStorageService : ProjectRequestLocalStorageService,
    private _liftingTheMarkOnThePropertyTitleDeedRequestService: LiftingTheMarkOnThePropertyTitleDeedRequestService,
  ) {}
  ngOnInit(): void {
    this.updateAccordionContent();
    this.getRequestDetails();
  }
  getRequestDetails() {
    let id = this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (id) {
      this._liftingTheMarkOnThePropertyTitleDeedRequestService.getDetails(id).subscribe(res => {
        this._liftingTheMarkOnThePropertyTitleDeedRequestService.selectedRequest$.next(res);
      })
    }
  }
  private updateAccordionContent(): void {
    this._accordionService.resetAccordionContentComponentList();
    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'بيانات الطلب',
      component: LiftingTheMarkOnThePropertyTitleDeedDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'LiftingTheMarkOnThePropertyTitleDeedDetailsComponent',
      isViewed: false,
      isRendered: false,
      isOpen: false,
      isDeletebtn: false,
    });

    this._accordionService.updateAccordionContent(
      this.accordionContent as accordionContent
    );
  }
}
