import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { ProjectLandDeedDto } from '../../dataModels/project-land-deed.dto';
import { environment } from 'src/environments/environment';
import { ProjectLandDeedService } from '../../services/project-land-deed.service';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import {
  DropDownNameDto,
  DropDownSubUnitTypeDto,
} from '../../dataModels/drop-down-name.dto';
import { ProjectLandTitleDeedsFormComponent } from '../project-land-title-deeds-form/project-land-title-deeds-form.component';
import { ProjectDeedsOwnerFormComponent } from '../project-deeds-owner-form/project-deeds-owner-form.component';
import { ProjectOwnersComponent } from '../project-owners/project-owners.component';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ShowOwnerListComponent } from '../show-owner-list/show-owner-list.component';
import { ButtonType } from 'src/app/shared/models/enums/button-type.model';
import { ProjectDeedsEditOwnersFormComponent } from '../project-deeds-edit-owners-form-component/project-deeds-edit-owners-form.component';

@Component({
  selector: 'app-project-land-title-deeds',
  templateUrl: './project-land-title-deeds.component.html',
  styleUrls: ['./project-land-title-deeds.component.scss'],
})
export class ProjectLandTitleDeedsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  projectDeeds: ProjectLandDeedDto[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  deedTypes: DropDownSubUnitTypeDto[] = [];
  constructor(
    private _projectDeedService: ProjectLandDeedService,
    private _toastrService: ToastrService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) {}

  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.loadComponentData();
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }
  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
        (res: null) => {
          this.moveToNextTab();
        }
      )
    );
  }
  moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  localization = {
    title: 'صكوك أرض المشروع',
    newOwner: 'إضافة مالك جديد',
    existOwner: 'إضافة مالك من قائمة الملاك',
    typeId: 'نوع الصك',
    number: 'رقم الصك',
    imageFileId: 'صوره الصك',
    issueOn: 'تاريخ الصك',
    ownersCount: 'الملاك',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
    dateValidator: 'يجب أن يكون تاريخ الرخصة اقل من تاريخ الحالي',
    owners: 'الملاك',
    showowners: 'عرض الملاك',
    close: 'إغلاق',
  };
  private loadComponentData() {
    const requests = [
      this._projectDeedService.GetByLicenseProjectId(
        this.licenseProjectId as string
      ),
      this._projectDeedService.GetSysLicenseProjectLandOwnerDeedTypeDropDown(),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.projectDeeds = results[0] as ProjectLandDeedDto[];
        this.deedTypes = results[1] as DropDownSubUnitTypeDto[];
        this._projectDeedService.SetSubjectListObjs(this.projectDeeds);
        this._projectDeedService
          .getSubjectListObjs()
          .subscribe((subjectObj) => {
            this.projectDeeds = subjectObj;
            this.projectDeeds.forEach((x) => {
              x.typeName = this.deedTypes.find((t) => t.id == x.typeId)?.name;
            });
          });
      }
    });

    this.subscriptions.push(subscriptions);
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  openDialog(license: ProjectLandDeedDto | undefined): void {
    if (!license || !license.id) {
      license = new ProjectLandDeedDto();
      license.licenseProjectsId = this.licenseProjectId as string;
    }
    this._projectDeedService.SetSubjectObj(license as ProjectLandDeedDto);
    let Data = {
      title: this.localization.title,
      component: ProjectLandTitleDeedsFormComponent,
      id: 'ProjectLandTitleDeedsFormComponent',
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  openEditOwnerDialog(license: ProjectLandDeedDto | undefined): void {
    if (!license || !license.id) {
      license = new ProjectLandDeedDto();
      license.licenseProjectsId = this.licenseProjectId as string;
    }
    this._projectDeedService.SetSubjectObj(license as ProjectLandDeedDto);
    let Data = {
      title: this.localization.title,
      component: ProjectDeedsEditOwnersFormComponent,
      id: 'ProjectDeedsEditOwnersFormComponent',
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  openLanOwnerDialog(license: ProjectLandDeedDto | undefined): void {
    this._projectDeedService.SetSubjectObj(license as ProjectLandDeedDto);
    let Data = {
      title: this.localization.newOwner,
      component: ProjectDeedsOwnerFormComponent,
      id: 'ProjectDeedsOwnerFormComponent',
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  openShowOwnerListDialog(license: ProjectLandDeedDto | undefined): void {
    this._projectDeedService.SetSubjectObj(license as ProjectLandDeedDto);
    let Data = {
      title: this.localization.showowners,
      component: ShowOwnerListComponent,
      id: 'ShowOwnerListComponent',
      buttons: [
        {
          icon: '',
          title: this.localization.close,
          actionType: ButtonType.cancel,
          isVisable: true,
          isDisables: false,
        },
      ],
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }

  openExistingLandOwnersDialog(license: ProjectLandDeedDto | undefined): void {
    this._projectDeedService.SetSubjectObj(license as ProjectLandDeedDto);
    let Data = {
      title: this.localization.existOwner,
      component: ProjectOwnersComponent,
      id: 'ProjectOwnersComponent',
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  delete(id: string) {
    this.subscriptions.push(
      this._projectDeedService.Delete(id).subscribe((res) => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully);
          let index = this.projectDeeds.findIndex((x) => x.id == id);
          if (index != -1) this.projectDeeds.splice(index, 1);
        } else this._toastrService.error(res.message);
      })
    );
  }
}
