import { Component, OnInit } from '@angular/core';
import { ChangeplanLicenseRequestAccountantDetailsComponent } from '../changeplan-license-request-accountant-details/changeplan-license-request-accountant-details.component';
import  { accordionContent } from 'src/app/shared/models/accordion.model';
import { ChangeplanLicenseRequestEngineeringDetailsComponent } from '../changeplan-license-request-engineering-details/changeplan-license-request-engineering-details.component';
import { ChangeplanLicenseRequestDeveloperDetailsComponent } from '../changeplan-license-request-developer-details/changeplan-license-request-developer-details.component';
import { ChangeplanLicenseRequestProjectDetailsComponent } from '../changeplan-license-request-project-details/changeplan-license-request-project-details.component';
import  { Subscription } from 'rxjs';
import  { AccordionService } from 'src/app/shared/services/accordion/accordion.service';

@Component({
  selector: 'app-changeplan-license-request-main-data-details',
  templateUrl: './changeplan-license-request-main-data-details.component.html',
  styleUrls: ['./changeplan-license-request-main-data-details.component.scss']
})
export class ChangeplanLicenseRequestMainDataDetailsComponent implements OnInit {

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
      title: 'بيانات المشروع',
      component: ChangeplanLicenseRequestProjectDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'ChangeplanLicenseRequestProjectDetailsComponent',
      isViewed: false,
      isRendered: false,
      isOpen: false,
      isDeletebtn: false,
    });

    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'البيانات من المطور العقارى',
      component: ChangeplanLicenseRequestDeveloperDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'ChangeplanLicenseRequestDeveloperDetailsComponent',
      isViewed: false,
      isRendered: false,
      isOpen: false,
      isDeletebtn: false,
    });
    
    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'البيانات من الاستشارى الهندسى ',
      component: ChangeplanLicenseRequestEngineeringDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'ChangeplanLicenseRequestEngineeringDetailsComponent',
      isViewed: false,
      isRendered: false,
      isOpen: false,
      isDeletebtn: false,
    });

    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'البيانات من المحاسب القانونى',
      component: ChangeplanLicenseRequestAccountantDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'ChangeplanLicenseRequestAccountantDetailsComponent',
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
