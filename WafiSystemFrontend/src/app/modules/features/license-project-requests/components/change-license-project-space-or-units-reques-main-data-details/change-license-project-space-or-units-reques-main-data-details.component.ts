import { Component } from '@angular/core';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { ChangeLicenseProjectSpaceOrUnitsRequesMainDataSummaryComponent } from '../change-license-project-space-or-units-reques-main-data-summary/change-license-project-space-or-units-reques-main-data-summary.component';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { Subscription } from 'rxjs';
import { ChangeLicenseProjectSpaceOrUnitsDetailsComponent } from '../change-license-project-space-or-units-details/change-license-project-space-or-units-details.component';

@Component({
  selector: 'app-change-license-project-space-or-units-reques-main-data-details',
  templateUrl: './change-license-project-space-or-units-reques-main-data-details.component.html',
  styleUrls: ['./change-license-project-space-or-units-reques-main-data-details.component.scss']
})
export class ChangeLicenseProjectSpaceOrUnitsRequesMainDataDetailsComponent {
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
      component: ChangeLicenseProjectSpaceOrUnitsDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'ChangeLicenseProjectSpaceOrUnitsDetailsComponent',
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
