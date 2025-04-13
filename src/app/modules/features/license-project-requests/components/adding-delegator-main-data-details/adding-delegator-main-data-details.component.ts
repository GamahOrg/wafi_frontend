import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { AddingDelegatorMainDataSummaryComponent } from '../adding-delegator-main-data-summary/adding-delegator-main-data-summary.component';
import { AddingDelegatorDetailsComponent } from '../adding-delegator-details/adding-delegator-details.component';

@Component({
  selector: 'app-adding-delegator-main-data-details',
  templateUrl: './adding-delegator-main-data-details.component.html',
  styleUrls: ['./adding-delegator-main-data-details.component.scss']
})
export class AddingDelegatorMainDataDetailsComponent {
  constructor(  private _accordionService: AccordionService,) { }
  subscriptions: Subscription[] = [];
  accordionContent: accordionContent = {
    oneAtATime: true,
    isAnimated: true,
    accordionComponentList: [],
  };
  ngOnInit() {
    this.updateAccordionContent()
  }

  private updateAccordionContent(): void {
    this._accordionService.resetAccordionContentComponentList();
    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'تفاصيل الطلب',
      component: AddingDelegatorDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'AddingDelegatorDetailsComponent',
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
