import { Component } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { AddReplayFromProjectMangerComponent } from '../add-replay-from-project-manger/add-replay-from-project-manger.component';
import { LicenseProjectQualityNoticeReplyService } from '../../../services/license-project-quality-notice-reply.service';
import { LicenseProjectQualityNoticeService } from '../../../services/license-project-quality-notice.service';
import { LicenseProjectQualityNoticeReplyDto } from '../../../models/license-project-quality-notice-reply-dto';
import { CheckAddingReplingDto } from '../../../models/check-adding-repling-dto';
import { LicenseProjectTimeScheduleOwnerType } from '../../../enums/LicenseProjectTimeScheduleOwnerType.enum';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { QualificationType } from 'src/app/modules/features/qualifying/dataModels/enum/qualification-request-type';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';

@Component({
  selector: 'app-license-project-quality-notice-reply-list',
  templateUrl: './license-project-quality-notice-reply-list.component.html',
  styleUrls: ['./license-project-quality-notice-reply-list.component.scss'],
  standalone: false
})
export class LicenseProjectQualityNoticeReplyListComponent {
  subscriptions: Subscription[] = [];
  licenseProjectQualityNoticId: string | null = null;
  licenseProjectQualityNoticeReplyList?: LicenseProjectQualityNoticeReplyDto[];
  checkAddingRepling?: CheckAddingReplingDto;
  licenseProjectTimeScheduleOwnerType = LicenseProjectTimeScheduleOwnerType;
  userData: customerResponse | null = null;
  constructor(
    private _licenseProjectQualityNoticeService: LicenseProjectQualityNoticeService,
    private _popupService: PopupService,
    private _customerService: UserDataService,
    private _licenseProjectQualityNoticeReplyService: LicenseProjectQualityNoticeReplyService
  ) { }
  ngOnInit(): void {
    this.obseveCustomerData()
    this.getLicenseProjectQualityNoticId();
  }


  obseveCustomerData(): void {
    this.subscriptions.push(
      this._customerService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (this.userData && this.userData.facilities && this.userData.facilities.length > 0)
            this.checkIfAccountantFacility(this.userData.facilities[0].id)
        })
    );
  }

  isDeveloper: boolean = false;
  public checkIfAccountantFacility(facilityId: string): void {
    this.subscriptions.push(
      this._customerService.getFacilityQualificationTypeCode(facilityId).subscribe((res: string | null) => {
        this.isDeveloper = res == QualificationType.realStateDeveloperQualificationRequest ||
          res == QualificationType.realEstateDeveloperSpecializingInRealEstateParticipation;
      })
    )
  }


  private getLicenseProjectQualityNoticId() {
    this.subscriptions.push(
      this._licenseProjectQualityNoticeService.getLicenseProjectQualityNoticeId().subscribe((res) => {
        this.licenseProjectQualityNoticId = res;
        this.loadComponentData();

      })
    )
  }
  loadComponentData(): void {

    const requests = [
      this._licenseProjectQualityNoticeReplyService.checkAddingReplingByQualityNoticeId(this.licenseProjectQualityNoticId as string),
      this._licenseProjectQualityNoticeReplyService.getRepliesByQualityNoticId(this.licenseProjectQualityNoticId as string)

    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {

        this.checkAddingRepling = results[0] as CheckAddingReplingDto;
        this.licenseProjectQualityNoticeReplyList = results[1] as LicenseProjectQualityNoticeReplyDto[];
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

