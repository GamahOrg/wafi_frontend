import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { CahngePlaneRequestDetailsService } from '../../../services/cahnge-plane-request-details.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import {
  ChangePlanDeedOwnerDto,
  ChangePlanDeedOwnerApprovalStatusEnum,
} from '../../../models/change-plan-deed-owner.model';
import { notePopupData } from 'src/app/shared/models/popup.model';
import { ChangePlanApprovalService } from '../../../services/change-plan-approval.service';

@Component({
  selector: 'app-change-plan-deed-owners-status',
  templateUrl: './change-plan-deed-owners-status.component.html',
  styleUrls: ['./change-plan-deed-owners-status.component.scss'],
})
export class ChangePlanDeedOwnersStatusComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  deedOwners: ChangePlanDeedOwnerDto[] = [];
  searchText = '';
  isLoading = false;
  approvalStatusEnum = ChangePlanDeedOwnerApprovalStatusEnum;

  private searchSubject = new Subject<string>();
  private changePlanRequestId: string = '';



  constructor(
    private _changePlanService: CahngePlaneRequestDetailsService,
    private _popupService: PopupService,
    private _changePlanApprovalService: ChangePlanApprovalService,

  ) { }

  ngOnInit(): void {

    this.getChangePlanRequestId();
    this.setupSearch();
  }

  private getChangePlanRequestId(): void {



    this.changePlanRequestId = this._changePlanApprovalService.getSelectedChangePlanId() || '';
    if (this.changePlanRequestId) {
      this.loadDeedOwners();
    }

    //this.subscriptions.push(
    //  this._changePlanService.getLicenseProjectRequestChangePlan().subscribe((data) => {
    //    // this.changePlanRequestId = '9EA686D5-47C0-4DD2-8E1D-1938FC0E17DB';
    //    if (data?.id) {
    //      this.changePlanRequestId = data.id;
    //      this.loadDeedOwners();
    //    }
    //  })
    //);
  }

  private setupSearch(): void {
    this.subscriptions.push(
      this.searchSubject
        .pipe(debounceTime(300), distinctUntilChanged())
        .subscribe((searchText) => {
          this.searchText = searchText;
          this.loadDeedOwners();
        })
    );
  }

  loadDeedOwners(): void {
    if (!this.changePlanRequestId) return;

    this.isLoading = true;
    this.subscriptions.push(
      this._changePlanService
        .getDeedOwnersByRequestId(this.changePlanRequestId, this.searchText || undefined)
        .subscribe((data: ChangePlanDeedOwnerDto[]) => {
          this.deedOwners = data;
          this.isLoading = false;
        })
    );
  }

  onSearchChange(searchText: string): void {
    this.searchSubject.next(searchText);
  }

  getStatusLabel(status: ChangePlanDeedOwnerApprovalStatusEnum): string {
    switch (status) {
      case ChangePlanDeedOwnerApprovalStatusEnum.PendingApproval:
        return 'قيد الانتظار';
      case ChangePlanDeedOwnerApprovalStatusEnum.Approved:
        return 'موافق';
      case ChangePlanDeedOwnerApprovalStatusEnum.Rejected:
        return 'مرفوض';
      default:
        return '';
    }
  }

  showRejectionReason(reason: string | null): void {
    if (!reason) return;
    const noteData: notePopupData = {
      title: 'أسباب الرفض',
      popupType: 'primary',
      dynamicMessage: reason,
    };
    this._popupService.updateNotePopupData(noteData);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
