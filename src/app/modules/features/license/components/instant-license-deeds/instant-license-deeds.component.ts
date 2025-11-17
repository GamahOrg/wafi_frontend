import { Component } from '@angular/core';
import { ProjectInstantLicenseDeedService } from '../../../real-estate-contributions-license/services/project-instant-license-deed.service';
import { LicenseProjectInstantDeedResponseDto } from '../../../real-estate-contributions-license/dataModels/license-project-instant-deed-response-dto';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { DisableItemConfirmationComponent } from '../../../../../shared/components/disable-item-confirmation/disable-item-confirmation.component';
import { PopupService } from '../../../../../shared/services/popup/popup.service';
import { BeneficiaryContractFormAdditionalTermsDto } from '../../models/beneficiary-contract-form-additional-terms-dto';
import { MatDialog } from '@angular/material/dialog';
import { confirmationPopupData } from '../../../../../shared/models/popup.model';

@Component({
  selector: 'app-instant-license-deeds',
  templateUrl: './instant-license-deeds.component.html',
  styleUrls: ['./instant-license-deeds.component.scss']
})
export class InstantLicenseDeedsComponent {
  subscriptions: Subscription[] = [];

  projectDeeds: LicenseProjectInstantDeedResponseDto[] = [];
 
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  constructor(private _projectInstantDeedService: ProjectInstantLicenseDeedService,
    private _toastrService: ToastrService,
    private _popupService: PopupService,
    private _dialog: MatDialog,

    ) { }

  localization = {
    title: 'صكوك أرض المشروع',
    deedNo: 'رقم الصك',
    deedDate: 'تاريخ الصك',
    ownersNo: 'عدد الملاك',
    constructionLicensenumber: 'رقم رخصة البناء',
    addNewDeed: 'اضافة صكوك',
    projectTitle: 'عنوان المشروع',
    cityName: 'اسم المدينة',
    districtName: 'اسم الحي',
    savedSuccessfully: 'تم الحفظ',

  };
  ngOnInit(): void {

    this.loadComponentData();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  private loadComponentData() {
    this.subscriptions.push(
      this._projectInstantDeedService
        .GetInstantDeedsByLicenseProjectId('4FFE453E-FD58-45DE-AC11-245CB36FFB76')
        .subscribe((res) => {
          if (res) this.projectDeeds = res;
        })
    );
  }
  instantDeedObj!: LicenseProjectInstantDeedResponseDto;

  confirmDeleteInstantDeed(
    deed: LicenseProjectInstantDeedResponseDto
  ): void {

    this.instantDeedObj = deed;
    const confirmationData: confirmationPopupData = {
      id: deed.id,
      staticMessage: 'هل أنت متأكد من حذف الصك؟',
      dynamicMessage :''
      

    };
    const dialogRef =
      this._popupService.updateConfirmationPopupData(confirmationData);


    // Subscribe to confirm action
    const confirmSub = this._popupService.confirmAction.subscribe((data) => {

      this.delete(deed.id);
      dialogRef.close();
      confirmSub.unsubscribe(); // clean up to avoid memory leaks
    });
  }
  delete(id: string) {

    // Call delete first
    this.subscriptions.push(
      this._projectInstantDeedService.DeleteInstantDeed(id).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)

          this.loadComponentData();

          // Show confirmation popup after successful delete
          const dialogRef = this._dialog.open(DisableItemConfirmationComponent, {
            width: '600px',
            disableClose: true,
            panelClass: 'disable-item-confirmation-dialog'
          });
        }
        else
          this._toastrService.error(res.message);
      })
    )
  }

}
