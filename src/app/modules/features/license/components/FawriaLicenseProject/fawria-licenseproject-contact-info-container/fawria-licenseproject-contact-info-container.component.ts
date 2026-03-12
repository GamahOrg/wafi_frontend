import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerShortDto } from '../../../models/facility-short-dto';
import { Subscription, forkJoin } from 'rxjs';
import { customerResponse } from '../../../../../../shared/models/customer.model';
import { UserDataService } from '../../../../../../core/services/user-data/user-data.service';
import { ProjectRealStateDeveloperDto } from '../../../dataModels/project-real-state-developer.dto';
import { ProjectRealStateDeveloperService } from '../../../services/licenseProjects/project-real-state-developer.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Configuration } from '../../../../../../core/configurations/shared.config';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { FawriaLicenseProjectContactInfoService } from '../../../services/licenseProjects/fawria-license-project-contact-info.service';
import { ToastrNotificatioService } from '../../../../../../core/services/toastr-notification/toastr-notificatio.service';
import { ToastrService } from 'ngx-toastr';
import { AddFawriaLicenseprojectContactInfoRequestDto } from '../../../models/FawriaLicenseProject/add-fawria-license-project-contact-info-request-dto';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { LicenseRequestService } from '../../../services/license-request.service';

@Component({
  selector: 'app-fawria-licenseproject-contact-info-container',
  templateUrl: './fawria-licenseproject-contact-info-container.component.html',
  styleUrls: ['./fawria-licenseproject-contact-info-container.component.scss'],
})
export class FawriaLicenseprojectContactInfoContainerComponent
  implements OnInit, OnDestroy
{
  subscriptions: Subscription[] = [];

  subCustomerList: CustomerShortDto[] = [];
  userData: customerResponse | null = null;
  isExistingValidation: boolean = false;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  projectRealStateDeveloper: ProjectRealStateDeveloperDto =
    new ProjectRealStateDeveloperDto();
  showValidation: boolean = false;
  fawriaLicenseprojectContactInfoDto!: AddFawriaLicenseprojectContactInfoRequestDto;
  showDateOfBirthAlert: boolean = false;

  private readonly EMPTY_GUID = '00000000-0000-0000-0000-000000000000';

  constructor(
    private _projectRealStateDeveloperService: ProjectRealStateDeveloperService,
    private _userDataService: UserDataService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _formBuilder: FormBuilder,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _fawriaLicenseProjectContactInfoService: FawriaLicenseProjectContactInfoService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _toastrService: ToastrService,
    private _licenseRequestService: LicenseRequestService,
    private _tabsService: TabsService,
  ) {}

  ngOnInit() {
    this.getCustomerData();
    this.getLicenseProjectIdStorage();
    this.observeForm();
    this.loadComponentData();
    this.observeTabsButtons();
    this.loadExistingContactInfo();
    this.observeDelegatorChange();
    this.updateSaveAsDraftBtnIsvisible();
  }

  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
    this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  observeForm(): void {
    this.subscriptions.push(
      this.projectContactsDataForm.valueChanges.subscribe((changes) => {
        if (this.projectContactsDataForm.dirty) {
          this._tabsService.setUnsavedChanges(true);
        }
        this.projectRealStateDeveloper = this.projectContactsDataForm
          .value as ProjectRealStateDeveloperDto;
      }),
    );
  }
  localization = {
    delegatorData: 'بيانات مفوض طلب الرخصة',
    delegatorName: 'اسم المفوض',
    requiredErrorMsg: 'هذا الحقل مطلوب',
    officerData: 'بيانات ضابط الاتصال للمشروع',
    officerName: 'اسم ضابط الاتصال',
    title: 'بيانات التواصل',
    PleaseAddAllRequiredFields:
      'لم يتم إدخال جميع الحقول الإلزامية، يرجى استكمال البيانات المطلوبة',
    savedSuccessfully: 'تم الحفظ بنجاح',
  };

  projectContactsDataForm = this._formBuilder.group({
    id: [this.EMPTY_GUID, [Validators.required]],
    delegatorCustomerId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
    officerCustomerId: this._formBuilder.control<string | null>(null, [
      Validators.required,
    ]),
  });

  get controls() {
    return this.projectContactsDataForm.controls;
  }
  getCustomerData() {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          this.isExistingValidation = this.userData?.isEmployee as boolean;
        }),
    );
  }

  private loadExistingContactInfo(): void {
    if (!this.licenseProjectId || this.licenseProjectId === this.EMPTY_GUID) {
      return;
    }

    const sub = this._fawriaLicenseProjectContactInfoService
      .GetFawriaContactsInfoByProjectId(this.licenseProjectId)
      .subscribe({
        next: (res) => {
          if (res && (res.delegatorCustomerId || res.contactCustomerId)) {
            // ✅ تحويل GUID الفارغ إلى null
            const delegatorId =
              res.delegatorCustomerId === this.EMPTY_GUID
                ? null
                : res.delegatorCustomerId;
            const officerId =
              res.contactCustomerId === this.EMPTY_GUID
                ? null
                : res.contactCustomerId;

            this.projectContactsDataForm.patchValue({
              delegatorCustomerId: delegatorId,
              officerCustomerId: officerId,
            });

            if (delegatorId) {
              this.checkDelegatorDateOfBirth(delegatorId);
            }
          } else {
            console.log('No existing contact info found, ready to add new');
          }
        },
        error: (err) => {
          console.error('Error fetching contact info:', err);
        },
      });

    this.subscriptions.push(sub);
  }

  facilityId: string = '00000000-0000-0000-0000-000000000000';
  private loadComponentData() {
    this.facilityId = this.userData?.isEmployee
      ? '00000000-0000-0000-0000-000000000000'
      : this.userData?.facilities[0].id!;

    if (
      this.facilityId == undefined ||
      this.facilityId == '00000000-0000-0000-0000-000000000000'
    )
      this.facilityId =
        this._sharedLicenseProjectService.getFacilityIdFromLocalStorage() ??
        '00000000-0000-0000-0000-000000000000';

    const requests = [
      // this._projectRealStateDeveloperService.GetProjectRealStateDeveloperByLicenseProjectId(this.licenseProjectId as string),
      this._projectRealStateDeveloperService.GetFacilitySubCustomers(
        this.facilityId,
      ),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      this.subCustomerList = results[0] as CustomerShortDto[];
    });
    this.subscriptions.push(subscriptions);
  }

  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked();
  }
  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
        (res: null) => {
          this.save(true);
        },
      ),
    );
  }

  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(
        (res: null) => {
          this.save();
        },
      ),
    );
  }
  save(moveToNextTab: boolean = false): void {
    // Ensure the developer ID is always set
    //if (!this.projectRealStateDeveloper.id) {
    //  this.projectRealStateDeveloper.id = '00000000-0000-0000-0000-000000000000';
    //}
    if (
      this.projectContactsDataForm.invalid ||
      !this.projectContactsDataForm.controls.delegatorCustomerId.value || // ✅ تحقق من empty string
      !this.projectContactsDataForm.controls.officerCustomerId.value
    ) {
      this.showValidation = true;
      this._toastrNotificationService.showError(
        this.localization.PleaseAddAllRequiredFields,
      );
      this.projectContactsDataForm.markAllAsTouched();
      return;
    }

    if (
      this.projectContactsDataForm.invalid ||
      this.projectContactsDataForm.controls.delegatorCustomerId.value ===
        '00000000-0000-0000-0000-000000000000' ||
      this.projectContactsDataForm.controls.officerCustomerId.value ===
        '00000000-0000-0000-0000-000000000000'
    ) {
      this.showValidation = true;
      this.projectContactsDataForm.controls.delegatorCustomerId.setValue(null);
      this.projectContactsDataForm.controls.officerCustomerId.setValue(null);
      this._toastrNotificationService.showError(
        this.localization.PleaseAddAllRequiredFields,
      );
      this.projectContactsDataForm.markAllAsTouched();
      return;
    }

    if (!this.fawriaLicenseprojectContactInfoDto) {
      this.fawriaLicenseprojectContactInfoDto = {
        licenseProjectId: '',
        contactCustomerId: '',
        delegatorCustomerId: '',
      };
    }
    /* console.log("this.licenseProjectId=", this.licenseProjectId);*/
    this.fawriaLicenseprojectContactInfoDto.licenseProjectId =
      this.licenseProjectId ?? '';
    this.fawriaLicenseprojectContactInfoDto.contactCustomerId =
      this.projectContactsDataForm.get('officerCustomerId')?.value ?? '';
    this.fawriaLicenseprojectContactInfoDto.delegatorCustomerId =
      this.projectContactsDataForm.get('delegatorCustomerId')?.value ?? '';

    const saveSubscription = this._fawriaLicenseProjectContactInfoService
      .SaveFawriaLicenseProjectContactInfo(
        this.fawriaLicenseprojectContactInfoDto,
      )
      .subscribe({
        next: (res) => {
          if (res.isDone) {
            this.projectContactsDataForm.markAsPristine();
            this._tabsService.setUnsavedChanges(false);
            this._licenseRequestService.updateCompletedTapCodesIsClicked.emit();
            this._toastrNotificationService.showSuccess('تم الحفظ');
            if (moveToNextTab) {
              this.moveToNextTab();
            }
          } else {
            this._toastrNotificationService.showError(res.message);
          }
        },
        error: (err) => {
          //this._toastrNotificationService.showError(this.localization.PleaseAddAllRequiredFields);
          console.error('SaveFawriaLicenseProjectContactInfo error:', err);
        },
      });

    // Keep track of subscription to clean up later
    this.subscriptions.push(saveSubscription);
  }

  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }

  setResponseToForm(res: ProjectRealStateDeveloperDto): void {
    this.projectContactsDataForm.patchValue({ ...res });
  }

  private observeDelegatorChange(): void {
    this.subscriptions.push(
      this.controls.delegatorCustomerId.valueChanges.subscribe(
        (delegatorId) => {
          this.checkDelegatorDateOfBirth(delegatorId);
        },
      ),
    );
  }

  private checkDelegatorDateOfBirth(delegatorId: string | null): void {
    this.showDateOfBirthAlert = false;

    if (!delegatorId) {
      return;
    }

    const selectedDelegator = this.subCustomerList.find(
      (customer) => customer.id === delegatorId,
    );

    if (selectedDelegator && !selectedDelegator.dateOfBirth) {
      this.showDateOfBirthAlert = true;
    }
  }

  ngOnDestroy() {
    this._tabsService.setUnsavedChanges(false);
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
