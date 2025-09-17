import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SysRequestApprovalService } from '../../services/sysRequestApproval/sysRequestApproval.service';
import { SysRequestApprovalDto } from '../../models/sys-request-approval.dto';
import { PopupService } from '../../../shared/services/popup/popup.service';
import { PopupData } from '../../../shared/models/popup.model';

@Component({
  selector: 'app-request-approval',
  templateUrl: './request-approval.component.html',
  styleUrls: ['./request-approval.component.scss']
})
export class RequestApprovalComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  isApprovalRequired: boolean = false;
  sysRequestApproval: SysRequestApprovalDto[] = [];

  constructor(
    private sysRequestApprovalService: SysRequestApprovalService,
    private _popupService: PopupService
  ) { }

  ngOnInit() {
    this.getRequestApproval();
    this.observePopupEvents();
  }

  getRequestApproval() {
    return this.sysRequestApprovalService.getRequestApproval().subscribe((approval) => {
      if (approval) {
        this.sysRequestApprovalService.GetSysRequestApprovalList(approval.requestTypeId, approval.actionTypeId)
          .subscribe(response => {
            this.sysRequestApproval = response.data as SysRequestApprovalDto[];;
          })
      }
    }); 
  }

  areAllItemsApproved(): boolean {
    return this.sysRequestApproval.length > 0 && 
           this.sysRequestApproval.every(item => item.isApproved === true);
  }

  save(){
    if(this.areAllItemsApproved())
      this.sysRequestApprovalService.isApprovalRequired.emit(true);
    else
      this.sysRequestApprovalService.isApprovalRequired.emit(false);
  }

  observePopupEvents(): void {
    this.observeconfirmAction()
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save()
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
