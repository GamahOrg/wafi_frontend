import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { QualificationFacilityCertificationCreateUpdateDto, QualificationFacilityCertificationDto } from '../../dataModels/qualification-facility-certification-dto';
import { QualificationFacilityCertificationService } from '../../services/qualificationFacilityCertification/qualification-facility-certification.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';

@Component({
  selector: 'app-qualification-facility-certification-form',
  templateUrl: './qualification-facility-certification-form.component.html',
  styleUrls: ['./qualification-facility-certification-form.component.scss']
})
export class QualificationFacilityCertificationFormComponent {
  userData: customerResponse | null = null;
  subscriptions: Subscription[] = [];
  qualificationFacilityCertification: QualificationFacilityCertificationCreateUpdateDto = new QualificationFacilityCertificationCreateUpdateDto();
  qualificationFacilityCertificationList: QualificationFacilityCertificationDto[] = [];
  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;

  constructor(private _userDataService: UserDataService,
    private _popupService: PopupService,
    private qualificationFacilityCertificationService: QualificationFacilityCertificationService,
    // public dialogRef: MatDialogRef<PopupComponent>,
  ) { }

  ngOnInit(): void {
    this.obseveCustomerData();
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
        // if(this.userData){
        //   this.GetByFacilityId();
        // }
      })
    )
  }

  save(): void {
    this.qualificationFacilityCertification.facilityId = this.userData?.facilities[0].id as string;
    this.subscriptions.push(
      this.qualificationFacilityCertificationService.Create(this.qualificationFacilityCertification).subscribe(res => {
        if (res) {
          this.qualificationFacilityCertificationService.setListOfObjects(res);
          this.closeDialog();
        }
      })
    )
  }

  onFileRemoved(fileRemovedData: any) {
    let file = fileRemovedData.eventRes.file;
  }

  onFileUploaded(fileRemovedData: any) {
    this.qualificationFacilityCertification.certificationFileId = fileRemovedData.eventRes.data[0].id;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}

