import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LincenseRequestProjectService } from '../../services/lincense-request-project.service';
import { CreateLicenseRequestProjectDto } from '../../../license/models/create-license-project-request-dto';
import { LicenseRequestTypes } from '../../../license/models/lincense-request-project-dto';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { licenseProjectByFacilityIdDto } from '../../../license/models/license-project-by-facilityid-dto';

@Component({
  selector: 'app-add-project-license-request-component',
  templateUrl: './add-project-license-request-component.component.html',
  styleUrls: ['./add-project-license-request-component.component.scss'],
})
export class AddProjectLicenseRequestComponentComponent
  implements OnInit, OnDestroy
{
  form: FormGroup;
  subscriptions: Subscription[] = [];

  @Input() licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  @Input() facilityId: string = '00000000-0000-0000-0000-000000000000';

  showValidation: boolean = false;
  requestTypes: LicenseRequestTypes[] = [];
  licenseProjects: licenseProjectByFacilityIdDto[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private _popupService: PopupService,
    private _userDataService: UserDataService,
    private _licenseRequestService: LincenseRequestProjectService
  ) {
    this.form = this._formBuilder.group({
      requestType: ['', Validators.required],
      licenseProject: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.observePopupEvents();
    this.getRequestTypes();
    this.obseveCustomerData();
    this.getLicenseProjectByFacilityId();
  }

  getRequestTypes(): void {
    this._licenseRequestService.getLicenseRequestTypes().subscribe(
      (response: any) => {
        this.requestTypes = response || [];
      },
      (error: any) => {
        this._toastrNotificationService.showError(
          'Failed to load request types'
        );
      }
    );
  }
  getLicenseProjectByFacilityId(): void {
    this._licenseRequestService
      .getLicenseProjectByFacilityId(this.facilityId)
      .subscribe(
        (response: any) => {
          this.licenseProjects = response || [];
        },
        (error: any) => {
          this._toastrNotificationService.showError(
            'Failed to load license project'
          );
        }
      );
  }
  observePopupEvents(): void {
    this.observeconfirmAction();
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    );
  }

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.facilityId = res?.facilities[0]?.id || '';
        })
    );
  }

  save(): void {
    if (this.form.invalid) {
      this.showValidation = true;
      this._toastrNotificationService.showError('Please select a request type');
      return;
    }

    const requestPayload: CreateLicenseRequestProjectDto = {
      licenseProjectId: this.form.get('licenseProject')?.value,
      facilityId: this.facilityId,
      licenseProjectRequestTypeId: +this.form.get('requestType')?.value,
    };

    this._licenseRequestService.createLicenseRequest(requestPayload).subscribe(
      (response: any) => {
        this._toastrNotificationService.showSuccess('تم إنشاء الطلب بنجاح!');
        this.getLicensesProjectRequestList();
        this.closeDialog();
      },
      (error: any) => {
        this._toastrNotificationService.showError('خطأ في إنشاء الطلب.');
      }
    );
  }
  private getLicensesProjectRequestList(): void {
    this._licenseRequestService
      .getLicensesProjectRequestList(1, 10, this.facilityId)
      .subscribe();
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
