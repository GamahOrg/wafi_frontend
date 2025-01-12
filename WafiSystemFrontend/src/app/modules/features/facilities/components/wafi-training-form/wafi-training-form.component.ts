import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { WafiTrainingCreateUpdateDto } from '../../dataModels/wafi-training-dto';
import { WafiTrainingService } from '../../services/wafiTraining/wafi-training.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';

@Component({
  selector: 'app-wafi-training-form',
  templateUrl: './wafi-training-form.component.html',
  styleUrls: ['./wafi-training-form.component.scss']
})
export class WafiTrainingFormComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  wafiTraining: WafiTrainingCreateUpdateDto = new WafiTrainingCreateUpdateDto();
  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  mueltiFilesUploaderData: FileUploader = {
    multiple: true
  } as FileUploader;

  userData: customerResponse | null = null;

  constructor(
    private _service: WafiTrainingService,
    // public dialogRef: MatDialogRef<PopupComponent>,
    private _userDataService: UserDataService,
    private _popupService: PopupService,
    private _filemangementService: FileManagementService
  ) { }

  ngOnInit(): void {
    this.obseveCustomerData()
    this.observeSubjectObj();
    this.observePopupEvents()
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

  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        console.log("this.userData", this.userData)
        // if(this.userData){
        //   this.GetByFacilityId();
        // }
      })
    )
  }

  observeSubjectObj(): void {
    this.subscriptions.push(
      this._service.getSubjectObj().subscribe((obj) => {
        if (obj && obj.id) this.GetById(obj.id);
      })
    )
  }

  GetById(id: string) {
    this.subscriptions.push(
      this._service.GetById(id).subscribe((res) => {
        if (res) this.wafiTraining = res;
        console.log("this.wafiTraining", this.wafiTraining)
      })
    )
  }

  save(): void {
    if (!this.wafiTraining.facilityId) this.wafiTraining.facilityId = this.userData?.facilities[0].id as string
    this.subscriptions.push(
      this._service.Save(this.wafiTraining).subscribe(res => {
        if (res.isDone && res.data) {
          this._service.SetSubjectObj(res.data);
          this.closeDialog();
        }
        // else
        //   alert(res.message);
      })
    )
  }

  onMarketerFileUploaded(fileRemovedData: any) {
    this.wafiTraining.marketerTrainingCertificateFileId = fileRemovedData.eventRes.data[0].id;
  }

  onRealEstateDevelopmentFileUploaded(fileRemovedData: any) {
    this.wafiTraining.realEstateDevelopmentTrainingCertificateFileId = fileRemovedData.eventRes.data[0].id;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

}

