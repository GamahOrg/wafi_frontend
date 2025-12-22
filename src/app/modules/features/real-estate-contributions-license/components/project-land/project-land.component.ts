import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { ProjectLandDto } from '../../dataModels/project-land.dto';
import { ProjectLandService } from '../../services/licenseProjects/project-land.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';

@Component({
  selector: 'app-project-land',
  templateUrl: './project-land.component.html',
  styleUrls: ['./project-land.component.scss']
})
export class ProjectLandComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  projectLand: ProjectLandDto = new ProjectLandDto();
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;
  qualificationDegree: number = 0;
  facilityId: string | null = "00000000-0000-0000-0000-000000000000";
  typeCode: string = ''
  constructor(
    private _projectLandService: ProjectLandService,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _userDataService: UserDataService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) { }

  projectLandForm = this._formBuilder.group({
    id: ['00000000-0000-0000-0000-000000000000', [Validators.required]],
    landTotalSpace: [0, [Validators.required, Validators.min(0)]],
    landValue: [0, [Validators.required, Validators.min(0)]],
    buildingFlatArea: [0, [Validators.required, Validators.min(0)]],
    landOwnerApproval: [true, [Validators.required]],
    sellingSpace: [0, [Validators.required, Validators.min(0)]],
  })
  get controls() {
    return this.projectLandForm.controls;
  }
  ngOnInit() {
    this.getCustomerData()
    this.getLicenseProjectIdStorage()
    this.observeForm();
    this.loadComponentData();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible()
  }
  getCustomerData() {
    this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
      this.facilityId = res?.facilities[0].id as string;
      this.getQualificationDegree()
    })
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  getQualificationDegree() {
        this.typeCode = this._sharedLicenseProjectService.getQualificationTypeCodeStorage() as string;
    if(this.typeCode) {
    this._projectLandService.GetQualificationDegree(this.facilityId as string , this.typeCode).subscribe({
      next: (degree) => {
        this.qualificationDegree = degree as number;
      },
      error: (err) => {
        console.error('Error fetching qualification degree:', err);
      }
    });
  }
  }
  localization = {
    PleaseAddAllRequiredFields:
      'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    title: 'بيانات أرض المشروع',
    landTotalSpace: 'مساحة المشروع حسب الصك',
    landValue: 'قيمة الأرض التقديرية',
    buildingFlatArea: ' مساحة مسطح البناء للمشروع ',
    landOwnerApproval: 'موافقة مالك الأرض / مالك منفعتها على تهميش صك الأرض',
    accept: 'موافق',
    addanotherinsurance: 'تقديم ضمانات اخرى',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
    MinValueError: 'قيمة الحقل يجب الا تقل عن صفر',
    sellingSpace: 'المساحة البيعية',
    qualificationDegree: 'درجة التأهيل',
  };

  private loadComponentData() {
    const requests = [
      this._projectLandService.GetLandDataByLicenseProjectId(this.licenseProjectId as string),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      this.setResponseToForm(results[0].data as ProjectLandDto);
    });
    this.subscriptions.push(subscriptions);
  }
  setResponseToForm(res: ProjectLandDto): void {
    this.projectLandForm.patchValue({ ...res });
    this.projectLand = res;
  }
  observeForm(): void {
    this.subscriptions.push(
      this.projectLandForm.valueChanges.subscribe(changes => {
        this.projectLand = this.projectLandForm.value as ProjectLandDto;
        this.projectLand.facilityId = this.facilityId as string
        this.projectLand.qualificationDegree = this.qualificationDegree as number      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  save(moveToNextTab: boolean = false): void {
    if (!this.projectLandForm.valid) {
      this._toastrService.showError(this.localization.PleaseAddAllRequiredFields);
      this.showValidation = true;
      return;
    }
    
    if (!this.projectLand.id) this.projectLand.id = '00000000-0000-0000-0000-000000000000';

    if (this.facilityId)
      this.projectLand.facilityId = this.facilityId;

    this.subscriptions.push(
      this._projectLandService.SaveLandData(this.projectLand).subscribe(res => {
        if (res.isDone) {
          this._toastrService.showSuccess(this.localization.savedSuccessfully)
          this.setResponseToForm(res.data as ProjectLandDto);
          if (moveToNextTab) this.moveToNextTab();
        }
        // else
        //   this._toastrService.showError(res.message);
      })
    )
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

  setApproval(approved: boolean) {
    this.controls.landOwnerApproval.setValue(approved);
  }

}
