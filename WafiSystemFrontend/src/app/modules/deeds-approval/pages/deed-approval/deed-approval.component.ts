import { Component, OnInit } from '@angular/core';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectLandOwnerInfoDto } from '../../models/licenseProject-land-owner.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { LicenseProjectLandOwnerService } from '../../services/Approve-Owner/licenseProject-land-owner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ApproveDeedOwnerDto } from '../../models/approve-deed-owner';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-deed-approval',
  templateUrl: './deed-approval.component.html',
  styleUrls: ['./deed-approval.component.scss']
})
export class DeedApprovalComponent implements OnInit {

  licenseProjectLandOwnerInfoDto: LicenseProjectLandOwnerInfoDto | null = null;;
  approveDeedOwnerDto: ApproveDeedOwnerDto = new ApproveDeedOwnerDto();
  showValidation: boolean = false;
  approve: boolean = false;
  localization = {
    facilityData: 'بيانات المطور العقاري',
    yes: "نعم",
    no: 'لا',
    title: 'الموافقة على الاتفاقية مع المطور العقاري',
    deedData: 'بيانات الصك',
    number: 'رقم الصك',
    issueOn: 'تاريخ الصك',
    typeId: 'نوع مالك الأرض',
    nationalId: 'رقم هوية مالك الصك / مالك منفعتها',
    CRA: 'رقم السجل التجاري',
    name: 'اسم مالك الصك /مالك منفعتها',
    mobileNumber: 'رقم جوال مالك الصك /مالك منفعتها',
    agreementFileId: 'ملف الاتفاقية بين المطور العقاري ومالك الأرض',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    numberPattern: 'من فضلك ادخل رقم صحيح',
    requiredErrorMsg: 'حقل مطلوب',
    save: 'حفظ البيانات',
    savedSuccessfully: 'تم الحفظ',
    dateValidator: 'يجب ان يكون تاريخ الرخصة اقل من تاريخ الحالي',
    or: "او",
    enter: "دخول",
    accept: 'موافق',
    realEstateContributions: "المساهمات العقارية",
    wafi: "الهيئة العامة للعقار",
    agreement: 'الموافقة على الاتفاقية',
    appTitle: "تهميش الصكوك"
  }
  singleFileUploaderData: FileUploader = {
    multiple: true,
  } as FileUploader;
  projectLandOwnerForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    agreementFileId: [],
    isApproved: [1],
  })
  get controls() {
    return this.projectLandOwnerForm.controls;
  }
  constructor(private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _licenseProjectLandOwnerService: LicenseProjectLandOwnerService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private titleService:Title
  ) {
  
  }

  private setAppTitle() {
    this.titleService.setTitle(this.localization.appTitle);
  }
  /**
   * navigateToWafiLogin
   */
  public navigateToWafiLogin(): void {
    this._router.navigateByUrl(`${Configuration.modules.auth}`);
  }
  /**
   * navigateToRealEstateContributionsLogin
   */
  public navigateToRealEstateContributionsLogin() {
    this._router.navigateByUrl(`${Configuration.modules.realEstateContributionsAuth}/${Configuration.pages.realEstateContributionsAuth.login}`);

  }

  ngOnInit() {
    this.setAppTitle();
    let id = this._activeRoute.snapshot.params['Id'];
    this.approveDeedOwnerDto.id = id;
    if (id) {
      this._licenseProjectLandOwnerService.getLicenseProjectLandOwnerInfo(id).subscribe((data: LicenseProjectLandOwnerInfoDto | null) => {
        this.licenseProjectLandOwnerInfoDto = data;
        console.log(data);

      });
    }
  }

  onFileUploaded(fileData: any) {
    this.approveDeedOwnerDto.agreementFileId = fileData.eventRes.data[0].id;
    this.controls.agreementFileId.setValue(fileData.eventRes.data[0].id);
  }


  save() {

    console.log('this.controls.isApproved.value');
    console.log(this.controls.isApproved.value);
    console.log(this.controls.agreementFileId.value);

    if (this.approveDeedOwnerDto.agreementFileId == null) {
      this.showValidation = true;
      this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
      return;
    }

    this.approveDeedOwnerDto.isApproved = this.controls.isApproved.value == 1;
    this._licenseProjectLandOwnerService.approveOwner(this.approveDeedOwnerDto).subscribe(data => {
      console.log(data);
      this.approve = true;
      this._toastrNotificationService.showSuccess(this.localization.savedSuccessfully)
    });
  }

}