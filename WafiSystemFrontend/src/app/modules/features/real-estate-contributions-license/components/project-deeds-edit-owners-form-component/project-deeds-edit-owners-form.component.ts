import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeedOwnersDto, OwnersDto, ProjectLandDeedDto } from '../../dataModels/project-land-deed.dto';
import { ProjectLandDeedService } from '../../services/project-land-deed.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';

@Component({
  selector: 'app-project-deeds-edit-owners-form-component',
  templateUrl: './project-deeds-edit-owners-form-component.html',
  styleUrls: ['./project-deeds-edit-owners-form-component.scss']
})
export class ProjectDeedsEditOwnersFormComponent implements OnInit, OnDestroy{
  deedOwnerForm!: FormGroup;
  subscriptions: Subscription[] = [];
  updateDeedOwnersDto: OwnersDto = new OwnersDto();
  projectLandDeed: ProjectLandDeedDto = new ProjectLandDeedDto();
  licenseProjectId: string = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;

  localization = {
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
    owningArea: 'المساحة المملوكة',
    ownerNationalId: 'السجل /رقم الهوية',
    ownerName: 'الاسم',
    ownerMobileNumber: 'رقم الجوال',
  };


  constructor(private _projectLandDeedService: ProjectLandDeedService,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,) {
  }

  ngOnInit() {
    this.getLicenseProjectIdStorage()
    this.initForm();
    this.observeFormValueChanges();
    this._projectLandDeedService.getSubjectObj().subscribe((subjectObj) => {
      this.projectLandDeed = subjectObj;
      this.initRows(this.projectLandDeed.data.deedOwners);
    })
    this.observePopupEvents();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage() as string;
  }

  initForm() {
    this.deedOwnerForm = this._formBuilder.group({
      Rows: this._formBuilder.array([])
    });
  }

  private initRows(values: DeedOwnersDto[]) {
    values.forEach(owner => {
      let arrauItems = this._formBuilder.group({
        serial: [{ value: owner.serial, disabled: true }],
        ownerName: [{ value: owner.ownerName, disabled: true }],
        idNumber: [{ value: owner.idNumber, disabled: true }],
        idType: [{ value: owner.idType, disabled: true }],
        sexType: [{ value: owner.sexType, disabled: true }],
        birthDateYear: [{ value: owner.birthDateYear, disabled: true }],
        birthDateMonth: [{ value: owner.birthDateMonth, disabled: true }],
        birthDateDay: [{ value: owner.birthDateDay, disabled: true }],
        ownerType: [{ value: owner.ownerType, disabled: true }],
        nationality: [{ value: owner.nationality, disabled: true }],
        owningAmount: [{ value: owner.owningAmount, disabled: true }],
        owningArea: [{ value: owner.owningArea, disabled: true }],
        CONSTRAINED: [{ value: owner.CONSTRAINED, disabled: true }],
        hALT: [{ value: owner.hALT, disabled: true }],
        pAWNED: [{ value: owner.pAWNED, disabled: true }],
        tESTAMENT: [{ value: owner.tESTAMENT, disabled: true }],
        isSensitiveData: [{ value: owner.isSensitiveData, disabled: true }],
        mobileNo: [owner.mobileNo ? owner.mobileNo : '', [Validators.required]],
        id: [owner.id, [Validators.required]],
      })
      this.formArr.push(arrauItems);
    });
  }
  get formArr() {
    return this.deedOwnerForm.get("Rows") as FormArray;
  }
  
  observeFormValueChanges() {
    this.subscriptions.push(
      this.deedOwnerForm.valueChanges.subscribe(data => {
      this.initRows(data)
    }))

  }
  save(): void {
    if (!this.deedOwnerForm.valid) {
      this.showValidation = true;
      return;
    }

    this.deedOwnerForm.value.Rows.forEach((element: any) => {
      this.updateDeedOwnersDto.ownersList.push(element);
    })
    this.updateDeedOwnersDto.licenseProjectId = this.licenseProjectId;
    this.subscriptions.push(
      this._projectLandDeedService.UpdateDeedOwners(this.updateDeedOwnersDto).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)
          this._projectLandDeedService.SetSubjectListObjs(res.data as ProjectLandDeedDto[]);
          this._popupService.dismissDialog();
        }
        else
          this._toastrService.error(res.message);
      })
    )
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
        console.log("popup data", res)
        this.save();
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
