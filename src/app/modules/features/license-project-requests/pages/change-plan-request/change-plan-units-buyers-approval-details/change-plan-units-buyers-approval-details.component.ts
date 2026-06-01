import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangePlanApprovalDetailsDto, ChangePlanApprovalService, ChangePlanSoldUnitApprovalStatusEnum, ChangePlanSoldUnitPagedDto } from '../../../services/change-plan-approval.service';
import { environment } from '../../../../../../../environments/environment';
import { Router } from '@angular/router';
import { PaginationService } from '../../../../../../shared/services/pagination/pagination.service';
import { PopupService } from '../../../../../../shared/services/popup/popup.service';
import { ToastrNotificatioService } from '../../../../../../core/services/toastr-notification/toastr-notificatio.service';
import { pagination } from '../../../../../../shared/models/pagination.model';
import { confirmationPopupData } from '../../../../../../shared/models/popup.model';
import { RequestNotesService } from '../../../../../../shared/services/requestNotes/request-notes.service';
import { UserDataService } from '../../../../../../core/services/user-data/user-data.service';
import { customerResponse } from '../../../../../../shared/models/customer.model';

@Component({
  selector: 'app-change-plan-units-buyers-approval-details',
  templateUrl: './change-plan-units-buyers-approval-details.component.html',
  styleUrls: ['./change-plan-units-buyers-approval-details.component.scss']
})
export class ChangePlanUnitsBuyersApprovalDetailsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  id: string = '';
  details: ChangePlanApprovalDetailsDto | null = null;
  baseUrl = `${environment.baseURL}/`;
  soldUnitsPagination: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  soldUnits: ChangePlanSoldUnitPagedDto[] = [];
  showActionButtons = true;
  private readonly CancelledDueToBuyerRejectionStatusId = 21;
  nidnumber: string = '';


  constructor(
    private _router: Router,
    private _service: ChangePlanApprovalService,
    private _paginationService: PaginationService,
    private _popupService: PopupService,
    private _toastr: ToastrNotificatioService,
    private _requestNotesService: RequestNotesService,
    private _userDataService: UserDataService,

  ) { }

  ngOnInit(): void {
    this.id = this._service.getSelectedChangePlanId() || '';
    const approvalStatus = this._service.getSelectedApprovalStatus();
    this.showActionButtons = approvalStatus === ChangePlanSoldUnitApprovalStatusEnum.PendingApproval;
    if (this.id) {
      this.loadDetails();
      this.watchPaginationActions();
      this.initCustomerData();
    }
  }
  private initCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        if (res) {
         
          this.nidnumber = res.nidnumber;
          

        }
      })
    );
  }
  private watchPaginationActions(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.soldUnitsPagination.currentPage !== nextPage) {
          this.soldUnitsPagination.currentPage = nextPage;
          this.loadSoldUnits();
        }
      })
    );
  }
  loadDetails(): void {
    const facilityTypeCategory = this._service.getFacilityTypeCategory() ?? undefined;
    const facilityId = this._service.getSelectedFacilityId() ?? undefined;
    this.subscriptions.push(
      this._service.getApprovalDetails(this.id, facilityTypeCategory, facilityId).subscribe((res) => {
        this.details = res;
        if (res) {
          if (res.statusId === this.CancelledDueToBuyerRejectionStatusId) {
            this.showActionButtons = false;
          }
          this.loadSoldUnits();
        }
      })
    );
  }

  loadSoldUnits(): void {
   // this.nidnumber = "1013183239";
    this.subscriptions.push(
      this._service
        .getSoldUnitsPagedForBuyer({
          changePlanRequestId: this.id,
          pageNumber: this.soldUnitsPagination.currentPage,
          pageSize: this.soldUnitsPagination.pageSize,
          nIDNumber: this.nidnumber
        })
        .subscribe((res) => {
          if (res.isDone && res.data) {
            this.soldUnits = res.data.results;
            this.soldUnitsPagination.pageSize = res.data.pageSize;
            this.soldUnitsPagination.totalCount = res.data.totalCount;
            this.soldUnitsPagination.pageCount = res.data.pageCount;
            this._paginationService.updatePaginationData(this.soldUnitsPagination);
          }
        })
    );
  }
  onApprove(): void {
    if (!this.details) return;
    const data: confirmationPopupData = {
      id: 'change-plan-sold-unit-approve',
      popupType: 'primary',
      title: `تأكيد الموافقة على طلب تغيير خطة مشروع ${this.details.projectName || ''}`,
      staticMessage: `هل أنت متأكد من الموافقة على طلب تغيير خطة مشروع ${this.details.projectName || ''}؟`,
      dynamicMessage: '',
      acceptButtonText: 'تأكيد',
    };
    this._popupService.updateConfirmationPopupData(data);

    const sub = this._popupService.confirmAction.subscribe((result: any) => {
      if (result && (result as confirmationPopupData).id === 'change-plan-sold-unit-approve') {
        this._popupService.dismissDialog();
        this.submitApproval();
        sub.unsubscribe();
      }
    });
    this.subscriptions.push(sub);
  }

  private submitApproval(): void {
    if (!this.details) return;
    const soldUnitIds = this.soldUnits.map(u => u.id);
    if (soldUnitIds.length === 0) return;

    this.subscriptions.push(
      this._service.updateChangePlanSoldUnitsApprovalStatusAsync({
        licenseProjectChangePlanRequestId: this.details.id,
        changePlanSoldUnitIds: soldUnitIds,
        approvalStatus: ChangePlanSoldUnitApprovalStatusEnum.Approved,
        rejectionReason: null,
      }).subscribe((res) => {
        if (res.isDone) {
          this._toastr.showSuccess('تم تسجيل موافقتك بنجاح');
          this.showActionButtons = false;
          this.loadDetails();
        }
      })
    );
  }
  onReject(): void {
    if (!this.details) return;
    const data: confirmationPopupData = {
      id: 'change-plan-sold-unit-reject',
      popupType: 'primary',
      title: 'ما هو سبب رفض طلب تغيير خطة المشروع؟',
      staticMessage: '',
      dynamicMessage: '',
      acceptButtonText: 'ارسال سبب الرفض',
    };
    this._popupService.updateRejectionConfirmationPopupData(data);

    const sub = this._popupService.confirmAction.subscribe((result: any) => {
      if (result && result.id === 'change-plan-sold-unit-reject') {
        this._popupService.dismissDialog();
        const reason = this._requestNotesService.RequestNotes$.getValue()?.notes || '';
        this.submitRejection(reason);
        sub.unsubscribe();
      }
    });
    this.subscriptions.push(sub);
  }

  private submitRejection(reason: string): void {
    if (!this.details) return;
    const soldUnitIds = this.soldUnits.map(u => u.id);
    if (soldUnitIds.length === 0) return;

    this.subscriptions.push(
      this._service.updateChangePlanSoldUnitsApprovalStatusAsync({
        licenseProjectChangePlanRequestId: this.details.id,
        changePlanSoldUnitIds: soldUnitIds,
        approvalStatus: ChangePlanSoldUnitApprovalStatusEnum.Rejected,
        rejectionReason: reason,
      }).subscribe((res) => {
        if (res.isDone) {
          this._toastr.showSuccess('تم تسجيل رفضك، وتم إلغاء الطلب');
          this.showActionButtons = false;
          this.loadDetails();
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

}
