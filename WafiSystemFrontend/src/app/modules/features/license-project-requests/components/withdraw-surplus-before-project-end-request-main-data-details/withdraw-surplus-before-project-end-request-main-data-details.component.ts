import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { WithdrawSurplusBeforeProjectEndRequestMainDataComponent } from '../withdraw-surplus-before-project-end-request-main-data/withdraw-surplus-before-project-end-request-main-data.component';
import { WithdrawSurplusBeforeProjectEndDetailsComponent } from '../withdraw-surplus-before-project-end-details/withdraw-surplus-before-project-end-details.component';

@Component({
  selector: 'app-withdraw-surplus-before-project-end-request-main-data-details',
  templateUrl: './withdraw-surplus-before-project-end-request-main-data-details.component.html',
  styleUrls: ['./withdraw-surplus-before-project-end-request-main-data-details.component.scss']
})
export class WithdrawSurplusBeforeProjectEndRequestMainDataDetailsComponent {
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
      component: WithdrawSurplusBeforeProjectEndDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'WithdrawSurplusBeforeProjectEndDetailsComponent',
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
