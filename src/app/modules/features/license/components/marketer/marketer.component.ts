import { Component, OnInit } from '@angular/core';
import { CoreResponseDTO } from "../../../../../core/models/core.model";
import { BehaviorSubject, ReplaySubject, takeUntil } from "rxjs";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ToastrNotificatioService } from "../../../../../core/services/toastr-notification/toastr-notificatio.service";
import { LicenseProjectRealStateMarketerDto } from "../../dataModels/license-project-real-state-marketer/license-project-real-state-marketer-dto";
import { LicenseProjectRealStateMarketerService } from "../../dataModels/license-project-real-state-marketer/license-project-real-state-marketer-service";
import { LicenseProjectRealStateMarketerAgreementFile, LicenseProjectRealStateMarketerCreateUpdateDto } from "../../dataModels/license-project-real-state-marketer/license-project-real-state-marketer-create-update-dto";
import { CreateUpdateMarketerComponent } from "./create-update-marketer/create-update-marketer.component";
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';

@Component({
  selector: 'app-marketer',
  templateUrl: './marketer.component.html',
  styleUrls: ['./marketer.component.scss']
})
export class MarketerComponent implements OnInit {
  list: CoreResponseDTO<LicenseProjectRealStateMarketerDto[]> | undefined;
  listSubject: BehaviorSubject<CoreResponseDTO<LicenseProjectRealStateMarketerDto[]> | undefined> = new BehaviorSubject<CoreResponseDTO<LicenseProjectRealStateMarketerDto[]> | undefined>(undefined);
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  form!: FormGroup;
  localization = {
    RealEstateMarketer: "مسوق المشروع",
    HasRealEstateMarketer: "هل يوجد مسوق للمشروع",
    Yes: "نعم",
    No: "لا",
    AddNewMarketer: "إضافة جديد",
    AddNewSubDeveloperLabel: "إضافة مسوق عقاري جديد",
    DeveloperName: "اسم المفوض",
    LicenseNumber: "رقم رخصة المسوق عقاري",
    LicenseNumberRequired: "هذا الحقل مطلوب",
    DeveloperNameRequired: "هذا الحقل مطلوب",
    DeveloperEmail: "البريد الالكترونى للمفوض",
    DeveloperEmailRequired: "هذا الحقل مطلوب",
    DeveloperMobile: "رقم الجوال للمفوض",
    DeveloperMobileRequired: "هذا الحقل مطلوب",
    AgreementFile: "عقد المسوق عقاري ",
    AgreementFileRequired: "هذا الحقل مطلوب",
    NoData: "لا توجد بيانات",
    DeveloperLabel: "ادخل السجل التجاري للمسوق عقاري",
    DeveloperRequired: "هذا الحقل مطلوب",
    DeveloperEmailNoCorrect: "هذا الحقل غير صحيح",
    DeveloperMobileNotCorrect: "هذا الحقل غير صحيح",
    PleaseAddAllRequiredFields: "نأمل ادخال كل الحقول اللازمة واعادة المحاولة",
    MustAddNewMarkter: "يجب إضافة مسوق"
  }
  activeTabIndex: number = 0;
  constructor(
    public appService: LicenseProjectRealStateMarketerService, public ngbModal: MatDialog,
    public formGroup: FormBuilder,
    public toastService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) { }


  private buildFormGroup() {
    this.form = this.formGroup.group({
      hasMarketers: [this.list && this.list.data ? this.list.data.length >= 1 : false]
    })
  }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
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
    let modal = this.ngbModal.open(CreateUpdateMarketerComponent);
    if (this.licenseProjectId) {
      this.onCloseModal(modal);
    }
  }

  onCloseModal(modal: MatDialogRef<CreateUpdateMarketerComponent>) {
    modal.afterClosed().subscribe(result => {
      let resultObject = result as any;
      let LicenseProjectRealStateMarketerCreateUpdateObj = {} as LicenseProjectRealStateMarketerCreateUpdateDto;
      LicenseProjectRealStateMarketerCreateUpdateObj.licenseProjectId = this.licenseProjectId as string;
      LicenseProjectRealStateMarketerCreateUpdateObj.licenseNumber = String(resultObject.licenseNumber);
      LicenseProjectRealStateMarketerCreateUpdateObj.id = "00000000-0000-0000-0000-000000000000";
      LicenseProjectRealStateMarketerCreateUpdateObj.realStateMarketerId = resultObject.realStateMarketerId;
      LicenseProjectRealStateMarketerCreateUpdateObj.licenseProjectRealStateMarketerAgreementFiles = [];
      resultObject.realStateMarketerAgreementFiles.forEach((item: string) => {
        let obj = {} as LicenseProjectRealStateMarketerAgreementFile;
        obj.id = "00000000-0000-0000-0000-000000000000";
        obj.licenseProjectRealStateMarketerId == "00000000-0000-0000-0000-000000000000";
        obj.agreementFileId = item;
        LicenseProjectRealStateMarketerCreateUpdateObj.licenseProjectRealStateMarketerAgreementFiles.push(obj);
      });

      this.appService.createAsync(LicenseProjectRealStateMarketerCreateUpdateObj)
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

  delete($event: LicenseProjectRealStateMarketerDto) {

    this.appService.deleteAsync($event.id)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.getList();
      });
  }
  // TabsButtons
  private observeNextButtonIsCliced() {
    // if (!(this.list && this.list.data?.length) && this.form.controls['hasMarketers'].value == true) {
    //   this.toastService.showError(this.localization.MustAddNewMarkter);
    //   return;
    // }

    //   this._nextAndPreviusButtonsService.nextButtonIsClicked.pipe(takeUntil(this.destroyed$)).subscribe((res: null) => {
    //     this.moveToNextTab()
    //   })
    this._nextAndPreviusButtonsService.nextButtonIsClicked.pipe(takeUntil(this.destroyed$)).subscribe((res: null) => {
      if (this.list?.data?.length == 0 && this.form.controls['hasMarketers'].value == true) {
        this.toastService.showError(this.localization.MustAddNewMarkter);
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
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
