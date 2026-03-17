import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseProjectMainRealStateDeveloperCreateUpdateDto, LicenseProjectMainRealStateDeveloperDto } from '../../dataModels/project-real-state-developer.dto';
import { LicenseProjectMainRealStateDeveloperService } from '../../services/license-project-main-real-state-developer.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LicenseProjectEngineeringConsultantService } from '../../services/license-project-engineering-consultant.service';
import { QualificationTypeCode } from 'src/app/core/enums/qualification-type-code';
import { FacilityShortDto } from '../../models/facility-short-dto';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-main-real-state-developer',
  templateUrl: './main-real-state-developer.component.html',
  styleUrls: ['./main-real-state-developer.component.scss']
})
export class MainRealStateDeveloperComponent implements OnInit, OnDestroy {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  licenseProjectMainRealStateDeveloperDto: LicenseProjectMainRealStateDeveloperDto = new LicenseProjectMainRealStateDeveloperDto();
  licenseProjectMainRealStateDeveloperCreateUpdateDto: LicenseProjectMainRealStateDeveloperCreateUpdateDto = new LicenseProjectMainRealStateDeveloperCreateUpdateDto();

  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;

  form = this._formBuilder.group({
    commercialRegister: this._formBuilder.control<string | null>(null, [Validators.required, Validators.pattern(Configuration.validators.numberOnly), Validators.min(0)]),
  });

  developerForm = this._formBuilder.group({
    mainRealStateDeveloperLicenseNumber: this._formBuilder.control<string | null>(null, [Validators.required, Validators.min(0)]),
  });

  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;
  showFileValidation: boolean = false;
  showCommercialRegister: boolean = false;
  code: QualificationTypeCode = QualificationTypeCode.DependantRealEstate;
  facility: FacilityShortDto | undefined = undefined;
  userData: customerResponse | null = null;
  constructor(
    public _toastService: ToastrNotificatioService,
    private _licenseProjectMainRealStateDeveloperService: LicenseProjectMainRealStateDeveloperService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _formBuilder: FormBuilder,
    private _engineeringConsultantService: LicenseProjectEngineeringConsultantService,
    private _userDataService: UserDataService,
  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.getCustomerData();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }


  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    if (this.licenseProjectId) this.GetByLicenseProjectId();
  }
  getCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
      })
    )
  }
  get controls() {
    return this.form.controls;
  }
  get developerControls() {
    return this.developerForm.controls;
  }
  GetByLicenseProjectId() {
    this.subscriptions.push(
      this._licenseProjectMainRealStateDeveloperService.GetByLicenseProjectId(this.licenseProjectId as string).subscribe(res => {
        if (res) {
          this.licenseProjectMainRealStateDeveloperDto = res[0] as LicenseProjectMainRealStateDeveloperDto;

          if (this.licenseProjectMainRealStateDeveloperDto && this.licenseProjectMainRealStateDeveloperDto.mainRealStateDeveloperAgreementFileId) {
            this.showCommercialRegister = true;
            this.facility = this.licenseProjectMainRealStateDeveloperDto.mainRealStateDeveloper;
            this.licenseProjectMainRealStateDeveloperCreateUpdateDto.mainRealStateDeveloperAgreementFileId =
              this.licenseProjectMainRealStateDeveloperDto.mainRealStateDeveloperAgreementFileId;
            this.licenseProjectMainRealStateDeveloperCreateUpdateDto.id =
              this.licenseProjectMainRealStateDeveloperDto.id;
            this.developerForm.controls.mainRealStateDeveloperLicenseNumber.setValue(this.licenseProjectMainRealStateDeveloperDto.mainRealStateDeveloperLicenseNumber);

          }
          else
            this.showCommercialRegister = false;

        }
      })
    )

  }

  save(moveToNextTab: boolean = false): void {
    console.log("this.developerForm", this.developerForm)
    if (!this.developerForm.valid) {
      this._toastService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.showValidation = true;
      return;
    }
    console.log("this.licenseProjectMainRealStateDeveloperCreateUpdateDto.mainRealStateDeveloperAgreementFileId", this.licenseProjectMainRealStateDeveloperCreateUpdateDto.mainRealStateDeveloperAgreementFileId ? "true" : "false");

    if (!this.licenseProjectMainRealStateDeveloperCreateUpdateDto.mainRealStateDeveloperAgreementFileId) {
      this._toastService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.showFileValidation = true;
      return;
    }

    this.licenseProjectMainRealStateDeveloperCreateUpdateDto.mainRealStateDeveloperId = this.userData?.facilities[0].id as string;
    this.licenseProjectMainRealStateDeveloperCreateUpdateDto.mainRealStateDeveloperLicenseNumber = this.developerForm.controls.mainRealStateDeveloperLicenseNumber.value as string;
    this.licenseProjectMainRealStateDeveloperCreateUpdateDto.licenseProjectId = this.licenseProjectId as string;
    this.licenseProjectMainRealStateDeveloperCreateUpdateDto.id = this.licenseProjectMainRealStateDeveloperDto && this.licenseProjectMainRealStateDeveloperDto.id ? this.licenseProjectMainRealStateDeveloperCreateUpdateDto.id : "00000000-0000-0000-0000-000000000000";
    
    this.subscriptions.push(
      this._licenseProjectMainRealStateDeveloperService.Save(this.licenseProjectMainRealStateDeveloperCreateUpdateDto).subscribe(res => {
        if (res) {

          this.licenseProjectMainRealStateDeveloperDto = res[0] as LicenseProjectMainRealStateDeveloperDto;
          if (moveToNextTab) this.moveToNextTab()
        }
      })
    )
  }

  validate() {
    let commercialRegister = this.controls['commercialRegister'].value;
    if (commercialRegister) {

      this._engineeringConsultantService.validateCommercialRegister(commercialRegister, this.code, this.licenseProjectId)
        .subscribe((result) => {

          if (result && result.data) {

            let customer = result.data as any;
            this.facility = customer.facility;
            if (this.facility)
              this.showCommercialRegister = true;
            else
              this.showCommercialRegister = false;
          }
        });
    }
  }
  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.save(true)
      })
    )
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe((res: null) => {
        this.save()
      })
    )
  }
  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked()
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(true)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }

  onExistMainRealStateDeveloperFilesUploaded(filesData: any) {
    console.log("filesData", filesData);
    console.log("!filesData.eventRes.data || !filesData.eventRes.data.length", !filesData.eventRes.data || !filesData.eventRes.data.length)
    if (filesData.eventRes.data.length == 0) {
      this.licenseProjectMainRealStateDeveloperCreateUpdateDto.mainRealStateDeveloperAgreementFileId = "";
      this.showFileValidation = true
      return;
    }
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectMainRealStateDeveloperCreateUpdateDto.mainRealStateDeveloperAgreementFileId = data.id as string;
      this.showFileValidation = false
      console.log("this.licenseProjectMainRealStateDeveloperCreateUpdateDto.mainRealStateDeveloperAgreementFileId ", this.licenseProjectMainRealStateDeveloperCreateUpdateDto.mainRealStateDeveloperAgreementFileId)
    });
  }
}
