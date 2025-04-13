import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ZonesBlocksBuildingAndUnitsService } from '../../services/zones-blocks-building-units/zones-blocks-building-and-units.service';
import { Zone } from '../../models/zone.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { ProjectUnitsComponent } from '../project-units/project-units.component';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.scss'],
})
export class AddZoneComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  basicInfoForm: any;
  showValidation: boolean = false;

  popupData: PopupData = {} as PopupData;

  constructor(
    private _popupService: PopupService,
    private _zonesBlocksBuildingAndUnitsService: ZonesBlocksBuildingAndUnitsService,
    private _formBuilder: FormBuilder,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _accordionService: AccordionService
  ) {}

  addingZoneForm = this._formBuilder.group({
    licenseProjectsId: [
      '00000000-0000-0000-0000-000000000000',
      Validators.required,
    ],
    code: ['', Validators.required],
    id: ['00000000-0000-0000-0000-000000000000', Validators.required],
  });

  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  get getAddingZoneFormControls(): FormControl<any> {
    return this.basicInfoForm.controls;
  }

  localization = {
    addingNewZone: "إضافة زون جديدة",
    addingNewZonePlaceholder: "أكتب رقم الزون",
    addingNewZoneHint: "يمكنك إضافة اكثر من زون وغير مسموح بتكرار الرقم ",
    PleaseAddAllRequiredFields:'نأمل ادخال كل الحقول اللازمة واعادة المحاولة',
    requiredErrorMsg: 'حقل مطلوب',
    zoneNumber: 'زون رقم ',
  };

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observePopupEvents();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }

  get controls() {
    return this.addingZoneForm.controls;
  }

  // popup
  private observePopupEvents(): void {
    this.observecancelAction();
    this.observeconfirmAction();
  }

  private observecancelAction() {
    this.subscriptions.push(
      this._popupService.cancelAction.subscribe((res: PopupData) => {
        console.log(res);
      })
    );
  }

  private observeconfirmAction() {
    console.log('add zone observeconfirmAction');
    //
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        console.log('observeconfirmAction', res);
        this.submitAddingZoneForm();
      })
    );
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  submitAddingZoneForm(): void {
    if (this.addingZoneForm?.invalid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(
        this.localization.PleaseAddAllRequiredFields
      );
      this.addingZoneForm?.markAllAsTouched();
      return;
    }
    this.addingZoneForm.value.licenseProjectsId = this.licenseProjectId;
    this.subscriptions.push(
      this._zonesBlocksBuildingAndUnitsService
        .Save(this.addingZoneForm.value as Zone)
        .subscribe({
          next: (res: Zone[] | null) => {
            if (res && res.length > 0) {
              this.updateProjectZones(res);
              this.closeDialog();
              const addZoneId = res.find(
                (e) => e.code == this.addingZoneForm.value.code
              )?.id;
              const accordionContent = {
                ...this._accordionService.accordionContent.value,
                accordionComponentList: res.map((zone: Zone) => ({
                  icon: '',
                  title: `${this.localization.zoneNumber} - ${zone.code}`,
                  component: ProjectUnitsComponent,
                  disabled: false,
                  isVisible: true,
                  id: zone.id,
                  isViewed: zone.id === addZoneId,
                  isRendered: zone.id === addZoneId,
                  isOpen: zone.id === addZoneId,
                  isDeletebtn: true,
                  deleteDynamicMsg: '"هل انت متأكد من حذف الزون"',
                })),
              };
              this._accordionService.resetAccordionContentComponentList();
              this._accordionService.updateAccordionContent(accordionContent);

              // this._accordionService.clickOnAccordionHeader.emit(accordionComponent)
            }
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            if (this.popupData.id == 'AddZoneComponent') {
              this.closeDialog();
            }
          },
        })
    );
  }
  private updateProjectZones(zones: Zone[]) {
    this._zonesBlocksBuildingAndUnitsService.updateProjectZones(zones);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
