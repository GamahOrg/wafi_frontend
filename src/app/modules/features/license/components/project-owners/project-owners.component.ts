import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { ProjectLandOwnerDto, SaveDeedLandOwnersDto } from '../../dataModels/project-land-owner.dto';
import { environment } from 'src/environments/environment';
import { DropDownNameDto } from '../../dataModels/drop-down-name.dto';
import { ProjectLandOwnerService } from '../../services/project-land-owner.service';
import { ToastrService } from 'ngx-toastr';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ProjectLandDeedService } from '../../services/project-land-deed.service';
import { ProjectLandDeedDto } from '../../dataModels/project-land-deed.dto';
import { PopupData } from 'src/app/shared/models/popup.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-project-owners',
  templateUrl: './project-owners.component.html',
  styleUrls: ['./project-owners.component.scss']
})

export class ProjectOwnersComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  projectOwners: ProjectLandOwnerDto[] = [];
  projectLandDeed: ProjectLandDeedDto = new ProjectLandDeedDto();
  baseUrl = `${environment.baseURL}/`;
  ownerTypes: DropDownNameDto[] = [];
  selectedOwnerIds: string[] = [];

  constructor(private _projectOwnerservice: ProjectLandOwnerService,
    private _projectLandDeedService: ProjectLandDeedService,
    private _toastrService: ToastrService,
    private _popupService: PopupService,
    private _toastrNotificationService: ToastrNotificatioService,) { }

  ngOnInit() {
    this.observePopupEvents();
    this.loadComponentData();
  }

  localization = {
    title: 'إضافة مالك من قائمة الملاك',
    typeId: 'نوع المالك',
    nationalId: 'السجل /رقم الهوية',
    CRA: 'رقم السجل التجاري',
    name: 'الاسم',
    mobileNumber: 'رقم الجوال',
    agreementFileId: 'ملف الاتفاقية بين المطور عقاري ومالك الأرض',
    addOwnerFromList: 'إضافة المالك من القائمه',
    ownerAdded: 'تمت إضافة المالك',
    requiredErrorMsg: 'حقل مطلوب',
    save: 'حفظ البيانات',
    savedSuccessfully: 'تم الحفظ',
    dateValidator: 'يجب ان يكون تاريخ الرخصة اقل من تاريخ الحالي',
  };

  private loadComponentData() {
    this._projectLandDeedService.getSubjectObj().subscribe((subjectObj) => {
      this.projectLandDeed = subjectObj;
    })
    const requests = [
      this._projectOwnerservice.GetByLicenseProjectId(this.projectLandDeed.licenseProjectsId),
      this._projectOwnerservice.GetSysLicenseProjectLandOwnerTypeDropDown(),
      this._projectOwnerservice.GetByDeedId(this.projectLandDeed.id),
    ];

    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.projectOwners = results[0] as ProjectLandOwnerDto[];
        this.ownerTypes = results[1] as DropDownNameDto[];
        let deedOwners = results[2] as ProjectLandOwnerDto[];
        deedOwners.forEach(x => {
          this.selectOwner(x.id, true);
        })
        this.projectOwners.forEach(x => {
          x.typeName = this.ownerTypes.find(t => t.id == x.typeId)?.name;
        });
      }
    });
    this.subscriptions.push(subscriptions);
  }

  selectOwner(ownerId: string, selected: boolean) {
    let owner = this.projectOwners.find(x => x.id == ownerId);
    if (owner) owner.selected = selected;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  observePopupEvents(): void {
    this.observecancelAction()
    this.observeconfirmAction()
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        this._popupService.dismissDialog();
      })
    )
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.save();
      })
    )
  }

  save(): void {
    let saveDeedLandOwners: SaveDeedLandOwnersDto = new SaveDeedLandOwnersDto();
    saveDeedLandOwners.deedId = this.projectLandDeed.id;
    saveDeedLandOwners.listOfOwnerIds = this.projectOwners.filter(x => x.selected).map(x => x.id);
    saveDeedLandOwners.licenseProjectsId = this.projectLandDeed.licenseProjectsId;
    this.subscriptions.push(
      this._projectOwnerservice.SaveListOfDeedOwners(saveDeedLandOwners).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully);
          this._projectLandDeedService.SetSubjectListObjs(res.data as ProjectLandDeedDto[]);
          this._popupService.dismissDialog();
        }
        else
          this._toastrNotificationService.showError(res.message);
      })
    )
  }
}
