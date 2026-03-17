import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectInstantLicenseDeedService } from 'src/app/modules/features/real-estate-contributions-license/services/project-instant-license-deed.service';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { UpdateTotalAreaForProjectDto } from 'src/app/modules/features/real-estate-contributions-license/dataModels/license-project-instant-deed-response-dto';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';

@Component({
  selector: 'app-fawria-update-building-flat-area',
  templateUrl: './fawria-update-building-flat-area.component.html',
  styleUrls: ['./fawria-update-building-flat-area.component.scss']
})
export class FawriaUpdateBuildingFlatAreaComponent implements OnInit {
  buildingAreaForm!: FormGroup;
  subscriptions: Subscription[] = [];
  updateTotalAreaForProjectDto: UpdateTotalAreaForProjectDto = {} as UpdateTotalAreaForProjectDto
  licenseProjectId: string = '';
  isUnit: boolean | null = null;

  constructor(
    private _projectInstantDeedService: ProjectInstantLicenseDeedService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.observePopupEvents();
    this.initializeForm();
    this.getLicenseProjectIdStorage();
    this.getPopupData();
  }

  private getPopupData(): void {
    const popupData = this._popupService.popupData.value;
    if (popupData && popupData.data) {
      this.isUnit = popupData.data.isUnit;
      if(this.isUnit)
        this.buildingAreaForm.get('totalBuildingFlatArea')?.clearAsyncValidators()
      else
        this.buildingAreaForm.get('totalUnits')?.clearAsyncValidators()

       this.buildingAreaForm.updateValueAndValidity()
    }
  }

  private initializeForm(): void {
    this.buildingAreaForm = this.fb.group({
      totalBuildingFlatArea: [null, [Validators.required, Validators.min(0)]],
      totalUnits: [null, [Validators.required, Validators.min(0)]]
    });
  }

  private getLicenseProjectIdStorage(): void {
    const licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (licenseProjectId) {
      this.licenseProjectId = licenseProjectId;
    }
  }

  updateTotalAreaForProject(){
    this.updateTotalAreaForProjectDto = {
      buildingFlatArea: this.buildingAreaForm.get('totalBuildingFlatArea')?.value,
      totalUnits: this.buildingAreaForm.get('totalUnits')?.value,
      licenseProjectId: this.licenseProjectId,
      isUnitData: this.isUnit as boolean
    }

    this._projectInstantDeedService.UpdateTotalAreaForProject(this.updateTotalAreaForProjectDto).subscribe((res) => {
      if (res.isDone) {
       this._toastrNotificationService.showSuccess('تم الحفظ بنجاح');
        this._popupService.dismissDialog();
        this._projectInstantDeedService.closeDialog.emit();
      }
    })
  }

  observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        this._popupService.dismissDialog();
      })
    );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.updateTotalAreaForProject();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  preventNegativeValue(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value && parseFloat(input.value) < 0) {
      input.value = '0';
      const controlName = input.id === 'totalBuildingFlatArea' ? 'totalBuildingFlatArea' : 'totalUnits';
      this.buildingAreaForm.get(controlName)?.setValue(0);
    }
  }

  preventNegativeInput(event: KeyboardEvent): void {
    if (event.key === '-' || event.key === 'Minus') {
      event.preventDefault();
    }
  }

}
