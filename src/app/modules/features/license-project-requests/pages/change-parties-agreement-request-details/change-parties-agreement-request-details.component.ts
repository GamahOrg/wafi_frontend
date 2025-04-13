import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { ChangePartiesAgreementRequestService } from '../../services/change-parties-agreement-request.service';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { ChangePartiesAgreementDetailsComponent } from '../../components/change-parties-agreement-details/change-parties-agreement-details.component';

@Component({
  selector: 'app-change-parties-agreement-request-details',
  templateUrl: './change-parties-agreement-request-details.component.html',
  styleUrls: ['./change-parties-agreement-request-details.component.scss']
})
export class ChangePartiesAgreementRequestDetailsComponent {
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
    private _changePartiesAgreementRequestService: ChangePartiesAgreementRequestService,
  ) {}
  ngOnInit(): void {
    this.updateAccordionContent();
    this.getRequestDetails();
  }
  getRequestDetails() {
    let id = this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (id) {
      this._changePartiesAgreementRequestService.getChangePartiesAgreementDetails(id).subscribe(res => {
        this._changePartiesAgreementRequestService.selectedRequest$.next(res);
      })
    }
  }
  private updateAccordionContent(): void {
    this._accordionService.resetAccordionContentComponentList();
    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'بيانات الطلب',
      component: ChangePartiesAgreementDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'ChangePartiesAgreementDetailsComponent',
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
