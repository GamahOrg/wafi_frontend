import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { ChangeLicenseProjectBuyerOrTenantContractRequestMainDataSummaryComponent } from '../change-license-project-buyer-or-tenant-contract-request-main-data-summary/change-license-project-buyer-or-tenant-contract-request-main-data-summary.component';
import { ChangeLicenseProjectBuyerOrTenantContractDetailsComponent } from '../change-license-project-buyer-or-tenant-contract-details/change-license-project-buyer-or-tenant-contract-details.component';

@Component({
  selector: 'app-change-license-project-buyer-or-tenant-contract-request-main-data-details',
  templateUrl: './change-license-project-buyer-or-tenant-contract-request-main-data-details.component.html',
  styleUrls: ['./change-license-project-buyer-or-tenant-contract-request-main-data-details.component.scss']
})
export class ChangeLicenseProjectBuyerOrTenantContractRequestMainDataDetailsComponent {
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
      component: ChangeLicenseProjectBuyerOrTenantContractDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'ChangeLicenseProjectBuyerOrTenantContractDetailsComponent',
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
