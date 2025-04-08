import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { ChangeEngineerDetailsComponent } from '../change-engineer-details/change-engineer-details.component';

@Component({
  selector: 'app-change-engineer-main-data-details',
  templateUrl: './change-engineer-main-data-details.component.html',
  styleUrls: ['./change-engineer-main-data-details.component.scss']
})
export class ChangeEngineerMainDataDetailsComponent {
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
      component: ChangeEngineerDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'ChangeEngineerDetailsComponent',
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
