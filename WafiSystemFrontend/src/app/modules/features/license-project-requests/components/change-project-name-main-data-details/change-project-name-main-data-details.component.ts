import { Component } from '@angular/core';
import { ChangeProjectNameMainDataSummaryComponent } from '../change-project-name-main-data-summary/change-project-name-main-data-summary.component';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { Subscription } from 'rxjs';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { ChangeProjectNameDetailsComponent } from '../change-project-name-details/change-project-name-details.component';

@Component({
  selector: 'app-change-project-name-main-data-details',
  templateUrl: './change-project-name-main-data-details.component.html',
  styleUrls: ['./change-project-name-main-data-details.component.scss']
})
export class ChangeProjectNameMainDataDetailsComponent {
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
      component: ChangeProjectNameDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'ChangeProjectNameDetailsComponent',
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
