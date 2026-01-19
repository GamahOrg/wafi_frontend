import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { AccordionService } from 'src/app/shared/services/accordion/accordion.service';
import { ZonesBlocksBuildingAndUnitsService } from 'src/app/modules/features/license/services/zones-blocks-building-units/zones-blocks-building-and-units.service';
import { CorrectionProjectUnitsComponent } from '../correction-project-units/correction-project-units.component';
import { SharedLicenseProjectService } from 'src/app/modules/features/license/services/sharedLicenseProject/shared-license-project.service';
import { UnitCorrectionService } from '../../../../../services/unit-correction/unit-correction.service';
import { Zone } from '../../../../../models/zone.model';


@Component({
  selector: 'app-correction-add-zone',
  templateUrl: './correction-add-zone.component.html',
  styleUrls: ['./correction-add-zone.component.scss'],
})
export class CorrectionAddZoneComponent implements OnInit, OnDestroy {
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
    private _accordionService: AccordionService,
    private unitCorrectionService: UnitCorrectionService
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
        this.saveZones();
        //this.submitAddingZoneForm();
      })
    );
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  saveZones(): void {
    if (this.addingZoneForm?.invalid) {
      this.showValidation = true;
      this._toastrNotificationService.showError(
        this.localization.PleaseAddAllRequiredFields
      );
      this.addingZoneForm?.markAllAsTouched();
      return;
    }


    const formValue = this.addingZoneForm.value as Zone;

    const newZone: Zone = {
      ...formValue,
      id: formValue.id || crypto.randomUUID(),
      numberOfBuilings: formValue.numberOfBuilings ?? 0,
      numberOfBlocks: formValue.numberOfBlocks ?? 0,
    };

    const currentZones = this.unitCorrectionService.zonesData$.getValue() ?? [];
    const isDuplicate = currentZones?.some(z => z.code === newZone.code) ;

    if (isDuplicate) {
      this._toastrNotificationService.showError('هذا الزون موجود بالفعل');
      return;
    }

 
    const updatedZones = [...currentZones, newZone];
 
    this.unitCorrectionService.setZonesTabData(updatedZones);

   
    this.closeDialog();

    
    const addZoneId = newZone.id;
    const accordionContent = {
      ...this._accordionService.accordionContent.value,
      accordionComponentList: updatedZones.map((zone: Zone) => ({
        icon: '',
        title: `${this.localization.zoneNumber} - ${zone.code}`,
        component: CorrectionProjectUnitsComponent,
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
  }



  //submitAddingZoneForm(): void {
  //  if (this.addingZoneForm?.invalid) {
  //    this.showValidation = true;
  //    this._toastrNotificationService.showError(
  //      this.localization.PleaseAddAllRequiredFields
  //    );
  //    this.addingZoneForm?.markAllAsTouched();
  //    return;
  //  }
  //  this.addingZoneForm.value.licenseProjectsId = this.licenseProjectId;
  //  this.subscriptions.push(
  //    this._zonesBlocksBuildingAndUnitsService
  //      .Save(this.addingZoneForm.value as Zone)
  //      .subscribe({
  //        next: (res: Zone[] | null) => {
  //          if (res && res.length > 0) {
  //            this.updateProjectZones(res);
  //            this.closeDialog();
  //            const addZoneId = res.find(
  //              (e) => e.code == this.addingZoneForm.value.code
  //            )?.id;
  //            const accordionContent = {
  //              ...this._accordionService.accordionContent.value,
  //              accordionComponentList: res.map((zone: Zone) => ({
  //                icon: '',
  //                title: `${this.localization.zoneNumber} - ${zone.code}`,
  //                component: CorrectionProjectUnitsComponent,
  //                disabled: false,
  //                isVisible: true,
  //                id: zone.id,
  //                isViewed: zone.id === addZoneId,
  //                isRendered: zone.id === addZoneId,
  //                isOpen: zone.id === addZoneId,
  //                isDeletebtn: true,
  //                deleteDynamicMsg: '"هل انت متأكد من حذف الزون"',
  //              })),
  //            };
  //            this._accordionService.resetAccordionContentComponentList();
  //            this._accordionService.updateAccordionContent(accordionContent);

  //            // this._accordionService.clickOnAccordionHeader.emit(accordionComponent)
  //          }
  //        },
  //        error: (err) => {
  //          console.log(err);
  //        },
  //        complete: () => {
  //          if (this.popupData.id == 'AddZoneComponent') {
  //            this.closeDialog();
  //          }
  //        },
  //      })
  //  );
  //}
  private updateProjectZones(zones: Zone[]) {
    this._zonesBlocksBuildingAndUnitsService.updateProjectZones(zones);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
