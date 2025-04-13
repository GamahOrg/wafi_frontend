import { Component, OnInit } from '@angular/core';
import  { Subscription } from 'rxjs';
import  { accordionContent } from 'src/app/shared/models/accordion.model';
import  { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { CancelLicenseProjectDetailsComponent } from '../cancel-license-project-details/cancel-license-project-details.component';
import { CancelLicenseDeveloperDetailsComponent } from '../cancel-license-developer-details/cancel-license-developer-details.component';
import { CancelLicenseAccountantDetailsComponent } from '../cancel-license-accountant-details/cancel-license-accountant-details.component';
import { CancelLicenseEngineeringDetailsComponent } from '../cancel-license-engineering-details/cancel-license-engineering-details.component';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { CancelLicenseRequestService } from '../../services/cancel-license-request.service';

@Component({
  selector: 'app-cancel-license-main-data-details',
  templateUrl: './cancel-license-main-data-details.component.html',
  styleUrls: ['./cancel-license-main-data-details.component.scss']
})
export class CancelLicenseMainDataDetailsComponent implements OnInit {

  constructor(  private _accordionService: AccordionService,
    private cancelLicenseRequestService: CancelLicenseRequestService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService) { }
  subscriptions: Subscription[] = [];
  accordionContent: accordionContent = {
    oneAtATime: true,
    isAnimated: true,
    accordionComponentList: [],
  };
  ngOnInit() {
    this.updateAccordionContent()
    this.getRequestDetails()
  }

  private updateAccordionContent(): void {
    this._accordionService.resetAccordionContentComponentList();
    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'بيانات المشروع',
      component: CancelLicenseProjectDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'CancelLicenseProjectDetailsComponent',
      isViewed: false,
      isRendered: false,
      isOpen: false,
      isDeletebtn: false,
    });

    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'البيانات من المطور العقارى',
      component: CancelLicenseDeveloperDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'CancelLicenseDeveloperDetailsComponent',
      isViewed: false,
      isRendered: false,
      isOpen: false,
      isDeletebtn: false,
    });
    
    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'البيانات من الاستشارى الهندسى ',
      component: CancelLicenseEngineeringDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'CancelLicenseEngineeringDetailsComponent',
      isViewed: false,
      isRendered: false,
      isOpen: false,
      isDeletebtn: false,
    });

    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'البيانات من المحاسب القانونى',
      component: CancelLicenseAccountantDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'CancelLicenseAccountantDetailsComponent',
      isViewed: false,
      isRendered: false,
      isOpen: false,
      isDeletebtn: false,
    });
    this._accordionService.updateAccordionContent(
      this.accordionContent as accordionContent
    );
  }

  getRequestDetails() {
    let requestId = this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (requestId) {
      this.cancelLicenseRequestService.getLicenseProjectDetailsById(requestId).subscribe(res => {
        this.cancelLicenseRequestService.selectedRequest$.next(res);
      })
    }
  }
}
