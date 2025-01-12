import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { environment } from 'src/environments/environment';
import { LicenseProjectDeveloperCreateUpdateDto, LicenseProjectDeveloperDto } from '../../dataModels/license-project-developer-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { QualificationTypeCode } from 'src/app/core/enums/qualification-type-code';
import { FacilityShortDto } from '../../models/facility-short-dto';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { LicenseProjectDeveloperService } from '../../services/license-project-developer.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { LicenseProjectEngineeringConsultantService } from '../../services/license-project-engineering-consultant.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';

@Component({
  selector: 'app-project-developer',
  templateUrl: './project-developer.component.html',
  styleUrls: ['./project-developer.component.scss']
})
export class ProjectDeveloperComponent implements OnInit, OnDestroy {
  baseUrl = `${environment.baseURL}/`;
  subscriptions: Subscription[] = [];
  licenseProjectDeveloperDto: LicenseProjectDeveloperDto = new LicenseProjectDeveloperDto();
  licenseProjectDeveloperCreateUpdateDto: LicenseProjectDeveloperCreateUpdateDto = new LicenseProjectDeveloperCreateUpdateDto();
  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;
  form = this._formBuilder.group({
    commercialRegister: this._formBuilder.control<string | null>(null, [Validators.required, Validators.pattern(Configuration.validators.numberOnly)]),
  });
  developerForm = this._formBuilder.group({
    licenseNumber: this._formBuilder.control<string | null>(null, [Validators.pattern(Configuration.validators.numberOnly)]),
    delegatorEmail: this._formBuilder.control<string | null>(null, [Validators.required, Validators.email]),
    delegatorIdentityNumber: this._formBuilder.control<string | null>(null, [Validators.required, Validators.pattern(Configuration.validators.numberOnly)]),
    delegatorMobile: this._formBuilder.control<string | null>(null, [Validators.required, Validators.pattern(Configuration.validators.PhoneNumber)]),
    delegatorName: this._formBuilder.control<string | null>(null, [Validators.required]),
    developerAgreementFileId: this._formBuilder.control<string | null>(null, [Validators.required]),
    id: ['']
  });
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;
  showCommercialRegister: boolean = false;
  code: QualificationTypeCode = QualificationTypeCode.DependantRealEstate;
  facility: FacilityShortDto | undefined = undefined;
  userData: customerResponse | null = null;
  constructor(
    private _licenseProjectDeveloperService: LicenseProjectDeveloperService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _formBuilder: FormBuilder,
    private _engineeringConsultantService: LicenseProjectEngineeringConsultantService,
    private _userDataService: UserDataService, 
    public _toastService: ToastrNotificatioService,
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
      this._licenseProjectDeveloperService.GetByLicenseProjectId(this.licenseProjectId as string).subscribe(res => {
        if (res) {
          this.licenseProjectDeveloperDto = res as LicenseProjectDeveloperDto;

          if (this.licenseProjectDeveloperDto.developerAgreementFileId) {
            this.showCommercialRegister = true;
            this.facility = this.licenseProjectDeveloperDto.developerLicenseProject;
            this.licenseProjectDeveloperCreateUpdateDto.developerAgreementFileId =
              this.licenseProjectDeveloperDto.developerAgreementFileId;
            this.licenseProjectDeveloperCreateUpdateDto.id =
              this.licenseProjectDeveloperDto.id;
            this.developerForm.patchValue(this.licenseProjectDeveloperDto);
          }
          else
            this.showCommercialRegister = false;

        }
      })
    )

  }

  save(moveToNextTab: boolean = false): void {

    if (!this.developerForm.valid) {
      this._toastService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.showValidation = true;
      return;
    }

    this.licenseProjectDeveloperCreateUpdateDto = this.developerForm.value as LicenseProjectDeveloperCreateUpdateDto;
    this.licenseProjectDeveloperCreateUpdateDto.developerLicenseProjectId = this.userData?.facilities[0].id as string;
    this.licenseProjectDeveloperCreateUpdateDto.licenseProjectId = this.licenseProjectId as string;
    this.licenseProjectDeveloperCreateUpdateDto.id = this.licenseProjectDeveloperDto.id ? this.licenseProjectDeveloperCreateUpdateDto.id : "00000000-0000-0000-0000-000000000000";
    this.subscriptions.push(
      this._licenseProjectDeveloperService.Save(this.licenseProjectDeveloperCreateUpdateDto).subscribe(res => {
        if (res) {

          this.licenseProjectDeveloperDto = res as LicenseProjectDeveloperDto;
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

  onExistDeveloperFilesUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.developerForm.controls.developerAgreementFileId.setValue(data.id as string);
    });
  }
}
