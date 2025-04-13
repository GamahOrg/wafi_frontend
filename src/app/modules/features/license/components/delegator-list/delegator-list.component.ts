import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectDelegatorCreateUpdateDto, LicenseProjectDelegatorsDto } from '../../dataModels/project-real-state-developer.dto';
import { forkJoin, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseProjectDelegatorService } from '../../services/license-project-delegator.service';
import { ToastrService } from 'ngx-toastr';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { DelegatorFormComponent } from '../delegator-form/delegator-form.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerShortDto } from '../../models/facility-short-dto';
import { AccountKeeperDto } from '../../models/license-project.model';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { FileUploader } from 'src/app/shared/models/file-uploader.model';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
@Component({
  selector: 'app-delegator-list',
  templateUrl: './delegator-list.component.html',
  styleUrls: ['./delegator-list.component.scss']
})
export class DelegatorListComponent implements OnInit, OnDestroy {
  licenseProjectDelegators: LicenseProjectDelegatorsDto[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;
  subscriptions: Subscription[] = [];
  subCustomerList?: CustomerShortDto[];
  accountKeeper = {} as AccountKeeperDto;
  userData: customerResponse | null = null;
  facility: any;
  customerName: string | undefined = "";
  singleFileUploaderData: FileUploader = {
    multiple: false,
  } as FileUploader;

  LicenseProjectDelegatorCreateUpdateDto: LicenseProjectDelegatorCreateUpdateDto = new LicenseProjectDelegatorCreateUpdateDto();

  /**
   *
   */
  constructor(
    private _licenseProjectDelegatorService: LicenseProjectDelegatorService,
    private _popupService: PopupService,
    private _formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _userDataService: UserDataService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) { }
  ngOnInit(): void {
    this.getCustomerData();
    this.GetLicenseProjectByIdAsync();
    this.observeForm();
    this.getLicenseProjectIdStorage();
    this.GetProjectDelegatorByLicenseProjectId();
    this.getdelegatorlist();
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }

  licenseProjectDelegatorForm = this._formBuilder.group({
    id: [''],
    licenseProjectId: [''],
    signModelFileId: this._formBuilder.control<string | null>(null, [Validators.required]),
    delegatorCustomerId: this._formBuilder.control<string | null>(null, [Validators.required]),
    delegatorAcknowledgment: this._formBuilder.control<boolean | null>(false, [Validators.required]),

  })

  get controls() {
    return this.licenseProjectDelegatorForm.controls;
  }

  observeForm(): void {
    this.subscriptions.push(
      this.licenseProjectDelegatorForm.valueChanges.subscribe(changes => {
        let customerId = this.licenseProjectDelegatorForm.value.delegatorCustomerId as string;
        this.customerName = this.subCustomerList?.filter(x => x.id == customerId)[0].fullName;
      })
    )
  }

  delegatorSignModelFileUploaded(filesData: any) {
    if (!filesData.eventRes.data || !filesData.eventRes.data.length) return;
    filesData.eventRes.data.forEach((data: any) => {
      this.licenseProjectDelegatorForm.controls.signModelFileId.setValue(data.id as string);
    });
  }
  save(): void {
    debugger
    if (this.licenseProjectDelegatorForm?.invalid) {
      this._toastrNotificationService.showError('نأمل ادخال كل الحقول اللازمة واعادة المحاولة');
      this.licenseProjectDelegatorForm?.markAllAsTouched();
      this.showValidation = true;
      return;
    }

    if (this.controls.licenseProjectId.value) {
      this.LicenseProjectDelegatorCreateUpdateDto = this.licenseProjectDelegatorForm.value as LicenseProjectDelegatorCreateUpdateDto;
      if (!this.LicenseProjectDelegatorCreateUpdateDto.delegatorAcknowledgment) {
        this.toastr.error("نأمل الموافقه على الاقرار حتى يتم تسجيل المفوض");
        this.showValidation = true;
        return;
      }
      this.LicenseProjectDelegatorCreateUpdateDto.id = this.LicenseProjectDelegatorCreateUpdateDto.id ? this.LicenseProjectDelegatorCreateUpdateDto.id : "00000000-0000-0000-0000-000000000000";
      this.LicenseProjectDelegatorCreateUpdateDto.signModelFileId = this.licenseProjectDelegatorForm.controls.signModelFileId.value as string;
      this.subscriptions.push(
        this._licenseProjectDelegatorService.SaveProjectDelegator(this.LicenseProjectDelegatorCreateUpdateDto).subscribe(res => {
          if (res.isDone) {
            this._licenseProjectDelegatorService.setdelegatorList(res.data as LicenseProjectDelegatorsDto[]);
            this.clearForm();
          }
        })
      )
    }
  }

  clearForm() {
    this.licenseProjectDelegatorForm.reset();
  }

  getCustomerData() {

    this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
      this.userData = res
      if (this.userData) {

        this.facility = this.userData?.facilities[0];
      }
    })
  }
  GetLicenseProjectByIdAsync() {

    const requests =
      [
        this._licenseProjectDelegatorService.GetLicenseProjectByIdAsync(this._sharedLicenseProjectService.getLicenseProjectIdStorage() as string),
        // this._licenseProjectDelegatorService.GetSubCustomers(),
        this._licenseProjectDelegatorService.GetFacilitySubCustomers(this.userData?.facilities[0].id!),
      ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results[0]) {

        this.accountKeeper = results[0] as AccountKeeperDto;
        if (!this.accountKeeper) {

          this.toastr.error("نأمل التأكد من ادخال بيانات أمين الحساب");
          return;
        }
      }

      this.subCustomerList = results[1] as CustomerShortDto[];
    }
    )
    this.subscriptions.push(subscriptions);
    this.subscriptions.push(
      this._licenseProjectDelegatorService.GetLicenseProjectByIdAsync(this._sharedLicenseProjectService.getLicenseProjectIdStorage() as string).subscribe((res: any) => {

        this.controls.licenseProjectId.setValue(res.id);

      })
    )
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  getdelegatorlist(): void {
    this.subscriptions.push(
      this._licenseProjectDelegatorService.getdelegatorlist().subscribe((list) => {
        this.licenseProjectDelegators = list;
      })
    )
  }

  GetProjectDelegatorByLicenseProjectId(): void {

    this.subscriptions.push(
      this._licenseProjectDelegatorService.GetProjectDelegatorByLicenseProjectId(this.licenseProjectId as string).subscribe((res) => {
        if (res.isDone) {
          this.licenseProjectDelegators = res.data as LicenseProjectDelegatorsDto[];
        }
      })
    )
  }

  deleteDelegator(index: number): void {
    let delegator = this.licenseProjectDelegators[index];
    this._licenseProjectDelegatorService.deleteDelegator(delegator.id).subscribe(res => {
      if (res.isDone)
        this.licenseProjectDelegators.splice(index, 1);
    })
  }



  openDialog(): void {
    let exp = new LicenseProjectDelegatorsDto;
    exp.licenseProjectId = this.licenseProjectId as string;
    this._licenseProjectDelegatorService.setdelegatorObj(exp);
    let Data = {
      title: "المفوضون بالتوقيع على وثيقة الصرف",
      component: DelegatorFormComponent
    } as PopupData;
    this._popupService.updatePopupData(Data);

  }
  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.moveToNextTab()
      })
    )
  }
  moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
