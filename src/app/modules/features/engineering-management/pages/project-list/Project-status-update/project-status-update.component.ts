import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ProjectStatusDto } from 'src/app/shared/models/projectstatus.dto';
import { LicenseRequestHeaderDto } from '../../../models/license-request-header-dto';
import { ProjectListService } from '../../../services/project-list.service';
import { SysProjectStatusService } from '../../../services/sys-projectstatus.service';

@Component({
  selector: 'app-project-status-update',
  templateUrl: './project-status-update.component.html',
  styleUrls: ['./project-status-update.component.scss'],
})
export class ProjectStatusUpdateComponent {
  subscriptions: Subscription[] = [];
  statuses: ProjectStatusDto[] = [];
  selectedProject?: LicenseRequestHeaderDto;
  showValidation: boolean = false;
  statusId: string = "";

  ProjectStatusForm = this._formBuilder.group({
    statusId: ['', [Validators.required]],
  });

  constructor(
    private _sysProjectStatusService: SysProjectStatusService,
    private _projectListService: ProjectListService,
    private _formBuilder: FormBuilder,
    private _popupService: PopupService,
    private _toastrNotificatioService: ToastrNotificatioService
  ) { }

  ngOnInit(): void {
    this.getProject();
    this.getProjectStatuses();
    this.observePopupEvents();
  }

  get controls() {
    return this.ProjectStatusForm.controls;
  }

  private getProject(): void {
    this.subscriptions.push(
      this._projectListService.getProject().subscribe((res: LicenseRequestHeaderDto | null) => {
        if (res) {
          this.selectedProject = res;
          this.ProjectStatusForm.controls.statusId.setValue(res.licenseProject.sysLicenseProjectStatus.id);
        }
      })
    );
  }

  private getProjectStatuses(): void {
    this.subscriptions.push(
      this._sysProjectStatusService.GetStatusListDropDown().subscribe((res) => {
        if (res) {
          this.statuses = res.data || [];;
        }
      })
    );
  }

  save(): void {
    if (!this.ProjectStatusForm.valid) {
      this.showValidation = true;
      return;
    }

    const projectId = this.selectedProject?.licenseProject.id;
    const statusId = this.ProjectStatusForm.controls.statusId.value as string;

    if (!projectId) return;
    
    this.subscriptions.push(

      this._projectListService.UpdateLicenseProjectStatus(projectId, statusId).subscribe((res) => {
        if (res.isDone) {
          this._projectListService.submitSuccessfullyEventEmitter.emit();
          this._toastrNotificatioService.showSuccess('تم تحديث حالة المشروع بنجاح');
          this.closeDialog();
        }
      })
    );
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  observePopupEvents(): void {
    this.observeCancelAction();
    this.observeConfirmAction();
  }

  private observeCancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe(() => {
        this.closeDialog();
      })
    );
  }

  private observeConfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe(() => {
        this.save();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
