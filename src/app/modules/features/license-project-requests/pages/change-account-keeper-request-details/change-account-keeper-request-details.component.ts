import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { AccountKeeperRequestDetailsComponent } from '../../components/account-keeper-request-details/account-keeper-request-details.component';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { ChangeLicenseProjectAccountKeeperService } from '../../services/change-account-keeper-request.service';

@Component({
  selector: 'app-change-account-keeper-request-details',
  templateUrl: './change-account-keeper-request-details.component.html',
  styleUrls: ['./change-account-keeper-request-details.component.scss']
})
export class ChangeAccountKeeperRequestDetailsComponent implements OnInit {
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
    private _changeLicenseProjectAccountKeeperService: ChangeLicenseProjectAccountKeeperService,
  ) {}
  ngOnInit(): void {
    this.getRequestDetails();
    this.updateAccordionContent();
  }
  getRequestDetails() {
    let id = this.projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (id) {
      this._changeLicenseProjectAccountKeeperService.getChangeAccountKeeperDetails(id).subscribe(res => {
        this._changeLicenseProjectAccountKeeperService.selectedRequest$.next(res);
      })
    }
  }
  private updateAccordionContent(): void {
    this._accordionService.resetAccordionContentComponentList();
    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'بيانات الطلب',
      component: AccountKeeperRequestDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'AccountKeeperRequestDetailsComponent',
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
