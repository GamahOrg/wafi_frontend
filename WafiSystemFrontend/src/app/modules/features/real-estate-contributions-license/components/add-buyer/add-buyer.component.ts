import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { LicenseProjectBuyerCreateUpdateDto } from '../../models/license-project-buyer-create-update-dto';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseProjectBuyerService } from '../../services/license-project-buyer.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { LicenseProjectBuyerStatusEnum } from '../../models/license-project-buyer-list-paging-dto';

@Component({
  selector: 'app-add-buyer',
  templateUrl: './add-buyer.component.html',
  styleUrls: ['./add-buyer.component.scss']
})
export class AddBuyerComponent {
  subscriptions: Subscription[] = [];
  licenseProjectBuyerCreateUpdate?: LicenseProjectBuyerCreateUpdateDto;
  licenseProjectBuyerForm = this._formBuilder.group({
    name: this._formBuilder.control<string | null>(null, [Validators.required]),
    nIDNumber: this._formBuilder.control<string | null>(null, [Validators.required]),
    mobile: this._formBuilder.control<string | null>(null, [Validators.required]),
  });
  licenseProjectBuyerStatus=LicenseProjectBuyerStatusEnum;
  contractFileId?:string;
  facilityId?:string;
  userData?:customerResponse;
  showValidation: boolean = false;
  get controls() {
    return this.licenseProjectBuyerForm.controls;
  }
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  constructor(
    private _licenseProjectBuyerService: LicenseProjectBuyerService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private _userDataService: UserDataService,


  ) { }
  ngOnInit(): void {
    this.observePopupEvents();
    this.obseveCustomerData();

  }
  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res as customerResponse;
        if(this.userData && this.userData.facilities)
          
            this.facilityId=this.userData.facilities[0].id;
      })
    )
  }
  save(): void {
    
    if (!this.licenseProjectBuyerForm.valid) {
      this.showValidation = true;
      return;
    }

    this.licenseProjectBuyerCreateUpdate = this.licenseProjectBuyerForm.value as {} as LicenseProjectBuyerCreateUpdateDto;
    this.licenseProjectBuyerCreateUpdate.facilityId = this.facilityId as string;
    this.licenseProjectBuyerCreateUpdate.contractFileId = this.contractFileId as string;
    this.licenseProjectBuyerCreateUpdate.StatusId= this.licenseProjectBuyerStatus.New;
    this.subscriptions.push(
      this._licenseProjectBuyerService.saveBuyer(this.licenseProjectBuyerCreateUpdate).subscribe((res) => {

        if (res?.isDone) {
          this._licenseProjectBuyerService.submitSuccessfullyEventEmitter.emit()
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }

      })
    )
  }
  onExistContractFileUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.contractFileId= data.id
    });
  }
  // popup
  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res)
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log(res)
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
