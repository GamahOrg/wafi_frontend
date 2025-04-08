import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { ChangeOrAddLicenseProjectUnitModelRequestMainDataComponent } from '../change-or-add-license-project-unit-model-request-main-data/change-or-add-license-project-unit-model-request-main-data.component';
import { ChangeOrAddLicenseProjectUnitModelDetailsComponent } from '../change-or-add-license-project-unit-model-details/change-or-add-license-project-unit-model-details.component';

@Component({
  selector: 'app-change-or-add-license-project-unit-model-request-main-data-details',
  templateUrl: './change-or-add-license-project-unit-model-request-main-data-details.component.html',
  styleUrls: ['./change-or-add-license-project-unit-model-request-main-data-details.component.scss']
})
export class ChangeOrAddLicenseProjectUnitModelRequestMainDataDetailsComponent {
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
      component: ChangeOrAddLicenseProjectUnitModelDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'ChangeOrAddLicenseProjectUnitModelDetailsComponent',
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
