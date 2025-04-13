import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReplayFromProjectMangerDto } from '../../dataModels/replay-from-project-manger-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { LicenseProjectQualityNoticeService } from '../../services/license-project-quality-notice.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectQualityNoticeReplyService } from '../../services/license-project-quality-notice-reply.service';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-add-replay-from-project-manger',
  templateUrl: './add-replay-from-project-manger.component.html',
  styleUrls: ['./add-replay-from-project-manger.component.scss']
})
export class AddReplayFromProjectMangerComponent {
  subscriptions: Subscription[] = [];
  licenseProjectQualityNoticeId: string | null =null;
  replayFromProjectManger?:ReplayFromProjectMangerDto;
  
  
  replayFromProjectMangerForm = this._formBuilder.group({
    notes:this._formBuilder.control<string | null>(null, [Validators.required]),
   
  });
  showValidation:boolean=false;
  get controls() {
    return this.replayFromProjectMangerForm.controls;
  }
  constructor(
    private _licenseProjectQualityNoticeService: LicenseProjectQualityNoticeService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private _licenseProjectQualityNoticeReplyService:LicenseProjectQualityNoticeReplyService
  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observePopupEvents();
  }
  private getLicenseProjectIdStorage(): void {
    this._licenseProjectQualityNoticeService.getLicenseProjectQualityNoticeId().subscribe(licenseProjectQualityNoticeId=>{
      this.licenseProjectQualityNoticeId=licenseProjectQualityNoticeId
    });
  }
  addReplayFromResponsibleEngineer(): void {
  
    if (!this.replayFromProjectMangerForm.valid)
      {
      this.showValidation = true;
      return;
      }
   
    this.replayFromProjectManger = this.replayFromProjectMangerForm.value  as {} as ReplayFromProjectMangerDto;
    this.replayFromProjectManger.licenseProjectQualityNoticeId = this.licenseProjectQualityNoticeId as string;
    this.subscriptions.push(
      this._licenseProjectQualityNoticeReplyService.AddReplayFromProjectManger(this.replayFromProjectManger).subscribe((res) => {
       
        if (res?.isDone) {
          this._toastrNotificationService.showSuccess('تم الحفظ');
          this.closeDialog();
        }
      })
    )
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
          this.addReplayFromResponsibleEngineer()
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
