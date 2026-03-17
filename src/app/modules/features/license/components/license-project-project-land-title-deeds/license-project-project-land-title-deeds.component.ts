import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { licenseProjectDeeds } from '../../models/project-units';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { ProjectLandDeedDto } from '../../dataModels/project-land-deed.dto';
import { ShowOwnerListComponent } from '../show-owner-list/show-owner-list.component';
import { ProjectLandDeedService } from '../../services/project-land-deed.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';

@Component({
  selector: 'app-license-project-project-land-title-deeds',
  templateUrl: './license-project-project-land-title-deeds.component.html',
  styleUrls: ['./license-project-project-land-title-deeds.component.scss']
})
export class LicenseProjectProjectLandTitleDeedsComponent {
  deeds!: ProjectLandDeedDto[];

  localization = {
    title: 'صكوك أرض المشروع',
    newOwner: 'إضافة مالك جديد',
    existOwner: 'إضافة مالك من قائمة الملاك',
    space: '(متر مربع) مساحة الصك',
    typeId: 'نوع الصك',
    number: 'رقم الصك',
    imageFileId: 'صوره الصك',
    issueOn: 'تاريخ الصك',
    ownersCount: 'الملاك',
    requiredErrorMsg: 'حقل مطلوب',
    save: 'حفظ البيانات',
    savedSuccessfully: 'تم الحفظ',
    dateValidator: 'يجب أن يكون تاريخ الرخصة اقل من تاريخ الحالي',
    send: "إرسال الطلب",
    owners: "الملاك",
    showowners: "عرض الملاك",
    close: 'إغلاق'
  };

  subscriptions: Subscription[] = [];

  constructor(private _licenseDetailsService: LicenseDetailsService, private _projectDeedService: ProjectLandDeedService,
    private _popupService: PopupService,) { }

  ngOnInit(): void {
    this.updateLicenseProjectDeeds()
  }

  private updateLicenseProjectDeeds(): void {
    this.subscriptions.push(
      this._licenseDetailsService.licenseProjectDeeds$.subscribe((res: ProjectLandDeedDto[] | null) => {
        if (res && res.length) {
          this.deeds = res;
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  openShowOwnerListDialog(license: ProjectLandDeedDto | undefined): void {
    this._projectDeedService.SetSubjectObj(license as ProjectLandDeedDto);
    let Data = {
      title: this.localization.showowners,
      component: ShowOwnerListComponent,
      id: "ShowOwnerListComponent",
      buttons: [
        {
          icon: "",
          title: this.localization.close,
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
        },
      ]
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
}
