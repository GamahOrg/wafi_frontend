import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { ObjectionToSupervisionAndFollowupCostsRequestService } from '../../services/objection-to-supervision-and-followup-costs-request.service';
import { ObjectionToSupervisionAndFollowupCostsDetailsComponent } from '../../components/objection-to-supervision-and-followup-costs-details/objection-to-supervision-and-followup-costs-details.component';

@Component({
  selector: 'app-objection-to-supervision-and-followup-costs-request-details',
  templateUrl: './objection-to-supervision-and-followup-costs-request-details.component.html',
  styleUrls: ['./objection-to-supervision-and-followup-costs-request-details.component.scss']
})
export class ObjectionToSupervisionAndFollowupCostsRequestDetailsComponent implements OnInit {
subscriptions: Subscription[] = [];
  id: string | null = '';
  accordionContent: accordionContent = {
    oneAtATime: true,
    isAnimated: true,
    accordionComponentList: [],
  };
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private _accordionService: AccordionService,
    private projectRequestLocalStorageService : ProjectRequestLocalStorageService,
    private _objectionToSupervisionAndFollowupCostsRequestService: ObjectionToSupervisionAndFollowupCostsRequestService,
  ) {}
  ngOnInit(): void {
    this.updateAccordionContent();
    this.getRequestDetails();
  }
  getRequestDetails() {
    let id = this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (id) {
      this._objectionToSupervisionAndFollowupCostsRequestService.getDetails(id).subscribe(res => {
        this._objectionToSupervisionAndFollowupCostsRequestService.selectedRequest$.next(res);
      })
    }
  }
  private updateAccordionContent(): void {
    this._accordionService.resetAccordionContentComponentList();
    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'بيانات الطلب',
      component: ObjectionToSupervisionAndFollowupCostsDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'ObjectionToSupervisionAndFollowupCostsDetailsComponent',
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
