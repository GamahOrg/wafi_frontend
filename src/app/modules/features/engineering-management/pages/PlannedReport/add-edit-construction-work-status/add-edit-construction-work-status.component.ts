import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseProjectEngineeringConstructionWorkStatusDto, SysLicenseRelativeWeightDto } from '../../../models/license-project-relative-weight-dto';
import { LicenseProjectRelativeWeightService } from '../../../services/license-project-relative-weight.service';
import { SharedLicenseProjectService } from '../../../services/shared-license-project.service';

@Component({
  selector: 'app-add-edit-construction-work-status',
  templateUrl: './add-edit-construction-work-status.component.html',
  styleUrls: ['./add-edit-construction-work-status.component.scss']
})

export class AddEditConstructionWorkStatusComponent implements OnInit {
  subscriptions: Subscription[] = [];
  showValidation: boolean = false;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  sysLicenseRelativeWeightList: SysLicenseRelativeWeightDto[] = [];
  licenseProjectEngineeringConstructionWorkStatus: LicenseProjectEngineeringConstructionWorkStatusDto = {} as LicenseProjectEngineeringConstructionWorkStatusDto;

  constructor(
    private _licenseProjectRelativeWeightService: LicenseProjectRelativeWeightService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
  ) { }


  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observePopupEvents();
  }

  constructionWorkStatusForm = this._formBuilder.group({
    weightId: this._formBuilder.control<string | null>(null, [Validators.required])
  });

  get controls() {
    return this.constructionWorkStatusForm.controls;
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    debugger
    if (this.licenseProjectId)
      this.getLicenseProjectEngineeringActualRelativeWeightDropdownList();
  }

  getLicenseProjectEngineeringActualRelativeWeightDropdownList(): void {
    this._licenseProjectRelativeWeightService.GetSysLicenseRelativeWeightByLicenceProjectId(this.licenseProjectId as string).subscribe(res => {
      if (res)
        this.sysLicenseRelativeWeightList = res;
    })
  };


  save() {
    if (this.constructionWorkStatusForm.invalid) {
      this._toastrNotificationService.showError("الرجاء ملئ الحقول المطلوبة");
      this.showValidation = true;
      return;
    }

    this.licenseProjectEngineeringConstructionWorkStatus = {
      licenseProjectId: this.licenseProjectId as string,
      licenseProjectRelativeWeightId: this.constructionWorkStatusForm.value.weightId as string
    };

    this._licenseProjectRelativeWeightService.SaveLicenseProjectEngineeringConstructionWorkStatus(this.licenseProjectEngineeringConstructionWorkStatus).subscribe(res => {
      if (res.isDone) {
        this._toastrNotificationService.showSuccess("تمت الإضافة بنجاح");
        this.closeDialog();
      }
    });
  }

  // popup
  observePopupEvents(): void {
    this.observeCancelAction()
    this.observeConfirmAction()
  }

  private observeCancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
      })
    )
  }

  private observeConfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        if (res.id === 'AddEditConstructionWorkStatusComponent')
          this.save()
      })
    )
  }

  private closeDialog(): void {
    this._popupService.dismissDialog()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

}
