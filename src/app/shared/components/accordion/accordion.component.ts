import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  accordionComponent,
  accordionContent,
} from '../../models/accordion.model';
import { AccordionService } from '../../services/accordion/accordion.service';
import { Subscription } from 'rxjs';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupService } from '../../services/popup/popup.service';
import { PopupData } from '../../models/popup.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  AccordionContent: accordionContent = new accordionContent();
  selectedItemId: any;
  constructor(
    private _accordionService: AccordionService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService
  ) {}

  ngOnInit(): void {
    this.observeAccordionContent();
    this.observePopupEvents();
  }

  observeAccordionContent(): void {
    this.subscriptions.push(
      this._accordionService
        .getAccordionContent()
        .subscribe((content: accordionContent) => {
          this.AccordionContent = content;
        })
    );
  }
  public onClickOnTitle(opened: boolean, component: accordionComponent) {
    if (component && opened) {
      this._accordionService.clickOnAccordionHeader.emit(component);
    }
  }
  public updateisRendered(index: number) {
    if (this.AccordionContent.oneAtATime) {
      this.AccordionContent.accordionComponentList.map((accordionComponent) => {
        accordionComponent.isRendered = false;
      });
      this.AccordionContent.accordionComponentList[index].isRendered = true;
    } else {
      this.AccordionContent.accordionComponentList[index].isRendered =
        !this.AccordionContent.accordionComponentList[index].isRendered;
    }
  }
  public updateisViewed(index: number) {
    if (this.AccordionContent.oneAtATime) {
      this.AccordionContent.accordionComponentList[index].isViewed = true;
    } else {
      this.AccordionContent.accordionComponentList[index].isViewed =
        !this.AccordionContent.accordionComponentList[index].isViewed;
    }
  }

  confirmDelete(id: any, index: number) {
    this.selectedItemId = id;
    let deleteConfirmationObj = {
      id: 'deleteItem',
      staticMessage: '',
      dynamicMessage:
        this.AccordionContent.accordionComponentList[index].deleteDynamicMsg ??
        '',
      secondeStaticMessage: '',
    };
    this._popupService.updateConfirmationPopupData(deleteConfirmationObj);
  }

  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        if (res.id == 'deleteItem') this._popupService.dismissDialog();
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        if (res.id == 'deleteItem') {
          this._popupService.dismissDialog();
          this._accordionService.updateDeleteAccordionItem(this.selectedItemId);
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.AccordionContent.accordionComponentList.forEach(
      (accordionComponent) => {
        accordionComponent.isRendered = false;
      }
    );
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
