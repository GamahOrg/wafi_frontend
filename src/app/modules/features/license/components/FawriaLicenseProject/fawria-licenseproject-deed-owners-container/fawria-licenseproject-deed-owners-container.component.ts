import { Component, OnDestroy, OnInit } from '@angular/core';
import { TermsPartType } from '../../../models/license-project-parties-additional-terms-model';
import { NextAndPreviusButtonsService } from '../../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { Subscription } from 'rxjs';
import { DeebOwnerList } from 'src/app/modules/features/real-estate-contributions-license/dataModels/project-land-owner.dto';
import { LicenseProjectPartiesAdditionalTermsService } from '../../../services/LicenseProjectPartiesAdditionalTerms.service';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { environment } from 'src/environments/environment';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDeedConfirmationDialogComponent } from '../delete-deed-confirmation-dialog/delete-deed-confirmation-dialog.component';

@Component({
  selector: 'app-fawria-licenseproject-deed-owners-container',
  templateUrl: './fawria-licenseproject-deed-owners-container.component.html',
  styleUrls: ['./fawria-licenseproject-deed-owners-container.component.scss'],
})
export class FawriaLicenseprojectDeedOwnersContainerComponent
  implements OnInit, OnDestroy
{
  TermsPartType: typeof TermsPartType = TermsPartType;
  subscriptions: Subscription[] = [];
  deebOwners: DeebOwnerList[] = [];
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  baseUrl = `${environment.baseURL}/`;

  constructor(
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private _toastrService: ToastrNotificatioService,
    private _licenseProjectPartiesAdditionalTermsService: LicenseProjectPartiesAdditionalTermsService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _dialog: MatDialog
  ) {}

  localization = {
    Owners: 'ملاك الصك',
    deleteSuccessfully: 'تم  المسح بنجاح',
  };

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.observeTabsButtons();
    this.updateSaveAsDraftBtnIsvisible();
  }

  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
    this.loadDeebOwners();
  }

  private loadDeebOwners() {
    this.subscriptions.push(
      this._licenseProjectPartiesAdditionalTermsService
        .GetDeedOwnersListAsync(this.licenseProjectId as string)
        .subscribe((result) => {
          if (result) {
            this.deebOwners = result.data as DeebOwnerList[];
          }
        })
    );
  }

  delete(id: string,index:number) {
    this.subscriptions.push(
      this._licenseProjectPartiesAdditionalTermsService.DeleteOwner(id).subscribe(res => {
        if (res.isDone) {
          this._toastrService.showSuccess(this.localization.deleteSuccessfully)
          this.loadDeebOwners();
        }
      })
    )
  }
  showDeleteConfirmation(id: string, index: number): void {
    const dialogRef = this._dialog.open(DeleteDeedConfirmationDialogComponent, {
      width: '659px',
      maxWidth: '90vw',
      disableClose: true,
      panelClass: 'delete-deed-dialog',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.delete(id, index);
      }
    });
  }

  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
        (res: null) => {
          // this.save(true)
          this.moveToNextTab();
        }
      )
    );
  }
  private observeSaveAsDraftIsClicked() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.saveAsDraftIsClicked.subscribe(
        (res: null) => {
          // this.save()
        }
      )
    );
  }
  private observeTabsButtons(): void {
    this.observeNextButtonIsCliced();
    this.observeSaveAsDraftIsClicked();
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false);
    this._nextAndPreviusButtonsService.nextBtnIsVisible.next(true);
  }
  private moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }
}
