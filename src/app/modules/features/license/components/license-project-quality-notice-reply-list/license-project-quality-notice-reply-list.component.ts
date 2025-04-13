import { Component } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { LicenseProjectQualityNoticeReplyDto } from '../../dataModels/license-project-quality-notice-reply-dto';
import { CheckAddingReplingDto } from '../../dataModels/check-adding-repling-dto';
import { LicenseProjectTimeScheduleOwnerType } from '../../dataModels/filesdata/filesdata.model';
import { LicenseProjectQualityNoticeService } from '../../services/license-project-quality-notice.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { LicenseProjectQualityNoticeReplyService } from '../../services/license-project-quality-notice-reply.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddReplayFromProjectMangerComponent } from '../add-replay-from-project-manger/add-replay-from-project-manger.component';

@Component({
  selector: 'app-license-project-quality-notice-reply-list',
  templateUrl: './license-project-quality-notice-reply-list.component.html',
  styleUrls: ['./license-project-quality-notice-reply-list.component.scss']
})
export class LicenseProjectQualityNoticeReplyListComponent {
  subscriptions: Subscription[] = [];
  licenseProjectQualityNoticId: string | null =null;
  licenseProjectQualityNoticeReplyList?:LicenseProjectQualityNoticeReplyDto[];
  checkAddingRepling?:CheckAddingReplingDto;
  licenseProjectTimeScheduleOwnerType=LicenseProjectTimeScheduleOwnerType;
  constructor(
    private _licenseProjectQualityNoticeService: LicenseProjectQualityNoticeService,
    private _popupService: PopupService,
    private _licenseProjectQualityNoticeReplyService:LicenseProjectQualityNoticeReplyService
  ) { }
  ngOnInit(): void {
    this.getLicenseProjectQualityNoticId();
  }



  private getLicenseProjectQualityNoticId() {
    this.subscriptions.push(
      this._licenseProjectQualityNoticeService.getLicenseProjectQualityNoticeId().subscribe((res) => {
        this.licenseProjectQualityNoticId=res;
          this.loadComponentData();

      })
    )
  }
  loadComponentData(): void {

    const requests = [
      this._licenseProjectQualityNoticeReplyService.checkAddingReplingByQualityNoticeId( this.licenseProjectQualityNoticId as string),
      this._licenseProjectQualityNoticeReplyService.getRepliesByQualityNoticId( this.licenseProjectQualityNoticId as string)
      
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        
        this.checkAddingRepling=results[0] as  CheckAddingReplingDto;
        this.licenseProjectQualityNoticeReplyList=results[1] as LicenseProjectQualityNoticeReplyDto[];
      }
    });
    this.subscriptions.push(subscriptions);
  }
   openAddReplayFromProjectMangerDialog(): void {
    let Data = {
      title: "إضافة رد",
      component: AddReplayFromProjectMangerComponent,
      id: "AddReplayFromProjectMangerComponent",
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }  
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}

