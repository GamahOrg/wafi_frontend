import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { ReactivaiteLicenseRequestProjectDetailsComponent } from '../reactivaite-license-request-project-details/reactivaite-license-request-project-details.component';
import { ReactivaiteLicenseRequestDeveloperDetailsComponent } from '../reactivaite-license-request-developer-details/reactivaite-license-request-developer-details.component';
import { ReactivateLicenseService } from '../../services/reactivate-license.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-reactivaite-license-main-data-details',
  templateUrl: './reactivaite-license-main-data-details.component.html',
  styleUrls: ['./reactivaite-license-main-data-details.component.scss']
})
export class ReactivaiteLicenseMainDataDetailsComponent implements OnInit {

  constructor(private _accordionService: AccordionService,
    private reactivateLicenseService: ReactivateLicenseService,
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
  ) { }
  subscriptions: Subscription[] = [];
  accordionContent: accordionContent = {
    oneAtATime: true,
    isAnimated: true,
    accordionComponentList: [],
  };
  ngOnInit() {
    this.updateAccordionContent()
    this.getRequestDetails();
  }

  getRequestDetails() {
    let requestId = this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (requestId) {
      this.reactivateLicenseService.getRequestDetails(requestId).subscribe(res => {
        this.reactivateLicenseService.selectedRequest$.next(res);
      })
    }
  }

  private updateAccordionContent(): void {
    this._accordionService.resetAccordionContentComponentList();
    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'بيانات المشروع',
      component: ReactivaiteLicenseRequestProjectDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'ReactivaiteLicenseRequestProjectDetailsComponent',
      isViewed: false,
      isRendered: false,
      isOpen: false,
      isDeletebtn: false,
    });

    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'البيانات من المطور العقارى',
      component: ReactivaiteLicenseRequestDeveloperDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'ReactivaiteLicenseRequestDeveloperDetailsComponent',
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
