import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, takeUntil } from "rxjs";
import { CoreResponseDTO } from "../../../../../core/models/core.model";
import { CreateUpdateSubDeveloperComponent } from "./create-update-sub-developer/create-update-sub-developer.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastrNotificatioService } from "../../../../../core/services/toastr-notification/toastr-notificatio.service";
import { LicenseProjectSubDeveloperDto } from '../../dataModels/license-project-sub-developer/license-project-sub-developer-dto';
import { LicenseProjectSubDeveloperService } from '../../services/license-project-sub-developer.service';
import { LicenseProjectSubDeveloperCreateUpdateDto } from '../../dataModels/license-project-sub-developer/license-project-sub-developer-create-update-dto';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';

@Component({
  selector: 'app-sub-developer',
  templateUrl: './sub-developer.component.html',
  styleUrls: ['./sub-developer.component.scss']
})
export class SubDeveloperComponent implements OnInit {
  list: CoreResponseDTO<LicenseProjectSubDeveloperDto[]> | undefined;
  listSubject: BehaviorSubject<CoreResponseDTO<LicenseProjectSubDeveloperDto[]> | undefined> = new BehaviorSubject<CoreResponseDTO<LicenseProjectSubDeveloperDto[]> | undefined>(undefined);
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  form!: FormGroup;
  localization = {
    HasSubDevelopers: "هل يوجد مطور / مطورين عقاريين للمشروع ؟",
    Yes: "نعم",
    No: "لا",
    AddNewSubDeveloper: "إضافة جديد",
    AddNewSubDeveloperLabel: "إضافة مطور فرعي جديد",
    MustAddNewSubDeveloper: "يجب إضافة مطور فرعي جديد",
    SubDeveloper: " مطور فرعي",
    DeveloperName: "اسم المفوض",
    DeveloperNameRequired: "هذا الحقل مطلوب",
    DeveloperEmail: "البريد الالكترونى للمفوض",
    DeveloperEmailRequired: "هذا الحقل مطلوب",
    DeveloperMobile: "رقم الجوال للمفوض",
    DeveloperMobileRequired: "هذا الحقل مطلوب",
    AgreementFile: "ملف الاتفاقية",
    AgreementFileRequired: "هذا الحقل مطلوب",
    NoData: "لا توجد بيانات",
    DeveloperLabel: "ادخل السجل التجاري للمطور العقاري",
    DeveloperRequired: "هذا الحقل مطلوب",
    DeveloperEmailNoCorrect: "هذا الحقل غير صحيح",
    DeveloperMobileNotCorrect: "هذا الحقل غير صحيح",
    PleaseAddAllRequiredFields: "نأمل ادخال كل الحقول اللازمة واعادة المحاولة",
    delegatorIdentityNumber:"رقم هوية مفوض المطور الفرعي ",
    licenseNumber:"رقم رخص المشروع الفرعي ",
    projectName:"اسم المشروع الفرعي",
  }

  constructor(
    public appService: LicenseProjectSubDeveloperService,
    public ngbModal: MatDialog,
    public formGroup: FormBuilder,
    public toastService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService

  ) { }


  private buildFormGroup() {
    this.form = this.formGroup.group({
      hasSubDevelopers: [this.list && this.list.data ? this.list.data.length >= 1 : false]
    })
  }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage()
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) {
      this.getList();
    }
  }

  open() {
    let modal = this.ngbModal.open(CreateUpdateSubDeveloperComponent);
    if (this.licenseProjectId) {
      this.onCloseModal(modal);
    }
  }

  onCloseModal(modal: MatDialogRef<CreateUpdateSubDeveloperComponent>) {
    modal.afterClosed().subscribe(result => {

      let object = result as LicenseProjectSubDeveloperCreateUpdateDto;
      object.licenseProjectId = this.licenseProjectId as string;
      this.appService.createAsync(object)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(() => {
          this.getList();
        });
    });
  }

  getList() {
    this.appService.getAsync(this.licenseProjectId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        this.list = result;
        this.listSubject.next(this.list);
        this.buildFormGroup();
      });
  }

  delete($event: LicenseProjectSubDeveloperDto) {
    this.appService.deleteAsync($event.id)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.getList();
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  // TabsButtons
  private observeNextButtonIsCliced() {
    // if (!(this.list && this.list.data?.length) && this.form.controls['hasSubDevelopers'].value == true) {
    //   this.toastService.showError(this.localization.MustAddNewSubDeveloper);
    //   return;
    // }

    // this._nextAndPreviusButtonsService.nextButtonIsClicked.pipe(takeUntil(this.destroyed$)).subscribe((res: null) => {
    //   this.moveToNextTab()
    // })
    this._nextAndPreviusButtonsService.nextButtonIsClicked.pipe(takeUntil(this.destroyed$)).subscribe((res: null) => {
      if (this.list?.data?.length == 0 && this.form.controls['hasSubDevelopers'].value == true) {
        this.toastService.showError(this.localization.MustAddNewSubDeveloper);
      } else {
        this.moveToNextTab()
      }
    })
  }
  
  moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false)
  }
}
