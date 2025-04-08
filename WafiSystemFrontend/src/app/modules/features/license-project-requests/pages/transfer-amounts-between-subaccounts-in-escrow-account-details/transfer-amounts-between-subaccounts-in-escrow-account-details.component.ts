import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { accordionContent } from 'src/app/shared/models/accordion.model';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { TransferAmountsBetweenSubaccountsInEscrowaccountRequestService } from '../../services/transfer-amounts-between-subaccounts-in-escrowaccount-request.service';
import { TransferAmountDetailsComponent } from '../../components/transfer-amount-details/transfer-amount-details.component';

@Component({
  selector:
    'app-transfer-amounts-between-subaccounts-in-escrow-account-details',
  templateUrl:
    './transfer-amounts-between-subaccounts-in-escrow-account-details.component.html',
  styleUrls: [
    './transfer-amounts-between-subaccounts-in-escrow-account-details.component.scss',
  ],
})
export class TransferAmountsBetweenSubaccountsInEscrowAccountDetailsComponent
  implements OnInit, OnDestroy
{
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
    private projectRequestLocalStorageService: ProjectRequestLocalStorageService,
    private transferAmountsService: TransferAmountsBetweenSubaccountsInEscrowaccountRequestService
  ) {}
  ngOnInit(): void {
    this.updateAccordionContent();
  }

  private updateAccordionContent(): void {
    
    if (this.accordionContent.accordionComponentList.length > 0) {
      return;
    }
    this._accordionService.resetAccordionContentComponentList();
    this.accordionContent?.accordionComponentList.push({
      icon: '',
      title: 'بيانات الطلب',
      component: TransferAmountDetailsComponent,
      disabled: false,
      isVisible: true,
      id: 'TransferAmountDetailsComponent',
      isViewed: false,
      isRendered: false,
      isOpen: false,
      isDeletebtn: false,
    });

    this._accordionService.updateAccordionContent(
      this.accordionContent as accordionContent
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
