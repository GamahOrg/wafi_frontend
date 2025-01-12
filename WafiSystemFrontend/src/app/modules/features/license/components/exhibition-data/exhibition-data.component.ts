import { Component } from '@angular/core';
import { LicenseProjectExhibitionDto } from '../../dataModels/license-project-exhibition-dto';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { ExhibitionDataService } from '../../services/exhibition-data.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { environment } from 'src/environments/environment';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-exhibition-data',
  templateUrl: './exhibition-data.component.html',
  styleUrls: ['./exhibition-data.component.scss']
})
export class ExhibitionDataComponent {
  licenseProjectId: string = "";
  licenseProjectExhibitionDto: LicenseProjectExhibitionDto = new LicenseProjectExhibitionDto();
  subscriptions: Subscription[] = [];
  showValidation: boolean = false;
  baseUrl = `${environment.baseURL}/`;
  singleFilesUploaderData: FileUploader = {
    multiple: false
  } as FileUploader;
  licenseProjectExhibitionDataForm = this._formBuilder.group({
    id: [''],
    exhibitionName: this._formBuilder.control<string | null>(null, [Validators.required]),
    headquarter: this._formBuilder.control<string | null>(null, [Validators.required]),
    leaseContractFileId: this._formBuilder.control<string | null>(null, [Validators.required]),
    showPeriod: this._formBuilder.control<number | null>(null, [Validators.required, Validators.pattern(Configuration.validators.numberOnly)]),
    participationDate: this._formBuilder.control<string | null>(null, [Validators.required]),
  });
  localization = {
    title: 'بيانات المعرض',
    exhibitionName: "المعرض",
    headquarter: "مقر المعرض",
    showPeriod: "فترة العرض (يوم)",
    participationDate: "تاريخ المشاركة ",
    leaseContractFile: "عقد استئجار أو حجز المعرض",
    requiredErrorMsg: 'حقل مطلوب',
    yes: 'نعم',
    no: 'لا',
    savedSuccessfully: 'تم الحفظ',
    PleaseAddAllRequiredFields: 'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
  };
  constructor(
    private _exhibitionDataService: ExhibitionDataService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _formBuilder: FormBuilder,
    private _toastrNotificationService: ToastrNotificatioService,
    private _toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage() as string;
    if (this.licenseProjectId) this.GetByLicenseProjectId();
  }
  GetByLicenseProjectId() {
    this.subscriptions.push(
      this._exhibitionDataService.GetProjectExhibitionByLicenseProjectId(this.licenseProjectId as string).subscribe((res) => {
        this.licenseProjectExhibitionDto = res.data as LicenseProjectExhibitionDto;
        this.setResponseToForm(this.licenseProjectExhibitionDto);
      }));

  }
  setResponseToForm(res: LicenseProjectExhibitionDto): void {
    res.participationDate = new Date(res.participationDate);
    this.licenseProjectExhibitionDataForm.patchValue(res as any);
  }
  get controls() {
    return this.licenseProjectExhibitionDataForm.controls;
  }
  save(moveToNextTab: boolean = false): void {
    if (!this.licenseProjectExhibitionDataForm.valid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
      this.licenseProjectExhibitionDataForm?.markAllAsTouched();
      return;
    }
    this.licenseProjectExhibitionDto = this.licenseProjectExhibitionDataForm.value as any;
    if (!this.licenseProjectExhibitionDto.id) this.licenseProjectExhibitionDto.id = '00000000-0000-0000-0000-000000000000';
    this.licenseProjectExhibitionDto.licenseProjectId = this.licenseProjectId;
    this.subscriptions.push(
      this._exhibitionDataService.SaveProjectExhibition(this.licenseProjectExhibitionDto).subscribe(res => {
        if (res.isDone) {
          this.licenseProjectExhibitionDto = res.data as LicenseProjectExhibitionDto;
          this._toastrService.success('تم الحفظ')
          if (moveToNextTab) this.moveToNextTab()
        }
        else {
          this._toastrNotificationService.showError(res.message)
        }
      })
    )
  }

  onExistLeaseContractFileUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    this.licenseProjectExhibitionDataForm.controls.leaseContractFileId.setValue(filesData.eventRes.data[0].id);
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
}
