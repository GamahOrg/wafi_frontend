import { Component } from '@angular/core';
import { RemovingDelegatorMainDataSummaryComponent } from '../removing-delegator-main-data-summary/removing-delegator-main-data-summary.component';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { Subscription } from 'rxjs';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { RemovingDelegatorDetailsComponent } from '../removing-delegator-details/removing-delegator-details.component';

@Component({
  selector: 'app-removing-delegator-main-data-details',
  templateUrl: './removing-delegator-main-data-details.component.html',
  styleUrls: ['./removing-delegator-main-data-details.component.scss']
})
export class RemovingDelegatorMainDataDetailsComponent {
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
      component: RemovingDelegatorDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'RemovingDelegatorDetailsComponent',
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
