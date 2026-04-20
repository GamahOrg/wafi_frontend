import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { RealStateDeveloperService } from '../../../services/real-state-developer.service';
import { LicenseProjectUnitCodeStatus } from '../../../models/real-state-developer-dto';

@Component({
  selector: 'app-change-unit-status-form',
  styleUrls: ['./change-unit-status-form.component.scss'],
  templateUrl: './change-unit-status-form.component.html',
})
export class ChangeUnitStatusFormComponent implements OnInit, OnDestroy {
  selectedStatus: LicenseProjectUnitCodeStatus = LicenseProjectUnitCodeStatus.NotSold;
  unitIds: string[] = [];
  LicenseProjectUnitCodeStatus = LicenseProjectUnitCodeStatus;
  subscriptions: Subscription[] = [];
  licenseProjectId: string = '';

  constructor(
    private _popupService: PopupService,
    private _realstateService: RealStateDeveloperService,
    private _toastrService: ToastrService,
    
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this._popupService.popupData.subscribe((data: PopupData) => {
        if (data?.data?.unitIds) {
          this.unitIds = data.data.unitIds;
        }
        if (data?.data?.licenseProjectId) {
          this.licenseProjectId = data.data.licenseProjectId;
        }
        if (data?.data?.unitStatus) {
          
          this.selectedStatus = data.data.unitStatus;
        }
      })
    );
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe(() => {
        this.changeStatus();
      })
    );
  }

  changeStatus(): void {
    this._realstateService.changeUnitsStatus({ unitsId: this.unitIds, status: this.selectedStatus, licenseProjectId: this.licenseProjectId })
      .subscribe((res) => {
        if (res.isDone) {
          debugger;
          this._toastrService.success('تم تغيير حالة الوحدات بنجاح');
          this._popupService.dismissDialog();
          // window.location.reload();
          
        }
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
          // window.location.reload();

  }
}
