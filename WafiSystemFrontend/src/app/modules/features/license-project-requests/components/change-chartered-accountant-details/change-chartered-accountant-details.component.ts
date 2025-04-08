import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeCharteredAccountantRequestService } from '../../services/change-chartered-account-request';
import { ChangeCharteredAccountantRequestDetailsDto } from '../../models/change-chartered-accountant-request-details-dto';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { ChangeCharteredAccountRequestDetailsComponent } from '../../pages/change-chartered-account-request-details/change-chartered-account-request-details.component';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-change-chartered-accountant-details',
  templateUrl: './change-chartered-accountant-details.component.html',
  styleUrls: ['./change-chartered-accountant-details.component.scss'],
})
export class ChangeCharteredAccountantDetailsComponent implements OnInit {
  changeRequestDetails: ChangeCharteredAccountantRequestDetailsDto | any;

  constructor(
    private _accordionService: AccordionService,
    private _changeCharteredAccountantRequestService: ChangeCharteredAccountantRequestService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
  ) {}
  subscriptions: Subscription[] = [];
  accordionContent: accordionContent = {
    oneAtATime: true,
    isAnimated: true,
    accordionComponentList: [],
  };
  ngOnInit(): void {
    this.getRequestDetails();
    this.updateAccordionContent();
  }
  getRequestDetails() {
    let id = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (id) {
      this._changeCharteredAccountantRequestService.getChareteredAccountantRequestDetails(id).subscribe(res => {
        this._changeCharteredAccountantRequestService.selectedRequest$.next(res);
      })
    }
  }
  private updateAccordionContent(): void {
    this._accordionService.resetAccordionContentComponentList();
    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'بيانات الطلب',
      component: ChangeCharteredAccountRequestDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'ChangeCharteredAccountRequestDetailsComponent',
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
