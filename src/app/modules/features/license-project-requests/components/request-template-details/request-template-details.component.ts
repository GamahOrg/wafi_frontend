import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { RequestTemplateDetailComponent } from '../request-template-detail/request-template-detail.component';

@Component({
  selector: 'app-request-template-details',
  templateUrl: './request-template-details.component.html',
  styleUrls: ['./request-template-details.component.scss'],
})
export class RequestTemplateDetailsComponent {
  constructor(private _accordionService: AccordionService) {}
  subscriptions: Subscription[] = [];
  accordionContent: accordionContent = {
    oneAtATime: true,
    isAnimated: true,
    accordionComponentList: [],
  };
  ngOnInit() {
    this.updateAccordionContent();
  }

  private updateAccordionContent(): void {
    this._accordionService.resetAccordionContentComponentList();
    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'تفاصيل الطلب',
      component: RequestTemplateDetailComponent,
      disabled: false,
      isVisible: true,
      id: 'RequestTemplateDetailComponent',
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
