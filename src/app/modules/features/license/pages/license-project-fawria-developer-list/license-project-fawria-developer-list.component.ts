import { Component, OnInit, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import {
  AddLicenseProjectFawriaDto,
  FacilityInfoForProjectFawriaDto,
  LicenseProjectFawriaDeveloperListDto,
} from '../../models/FawriaLicenseProject/add-fawria-license-project-contact-info-request-dto';
import { LicenseProjectFawriaDeveloperService } from '../../services/license-project-fawria-developer.service';
import { pagination, Pagination } from 'src/app/shared/models/pagination.model';
import { PaginationService } from 'src/app/shared/services/pagination/pagination.service';
import { DisableItemConfirmationComponent } from '../../../../../shared/components/disable-item-confirmation/disable-item-confirmation.component';
import { confirmationPopupData } from '../../../../../shared/models/popup.model';
import { PopupService } from '../../../../../shared/services/popup/popup.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-license-project-fawria-developer-list',
  templateUrl: './license-project-fawria-developer-list.component.html',
  styleUrls: ['./license-project-fawria-developer-list.component.scss'],
})
export class LicenseProjectFawriaDeveloperListComponent
  implements OnInit, OnDestroy
{
  @ViewChild('addDeveloperModal') addDeveloperModal!: TemplateRef<any>;
  dialogRef?: MatDialogRef<any>;
  reqList: Pagination<LicenseProjectFawriaDeveloperListDto[]> =
    {} as Pagination<LicenseProjectFawriaDeveloperListDto[]>;
  searchForm: FormGroup;
  addForm: FormGroup;
  facilityInfo: FacilityInfoForProjectFawriaDto | null = null;
  isSearching: boolean = false;
  showAddForm: boolean = false;
  errorMessage:string = ''
  subscriptions: Subscription[] = [];
  newPageNo: number = 1;
  pagintationData: pagination = {
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    totalCount: 0,
  };
  constructor(
    private _licenseProjectFawriaService: LicenseProjectFawriaDeveloperService,
    private _fb: FormBuilder,
    private _paginationService: PaginationService,
    private _toastr: ToastrNotificatioService,
    private _dialog: MatDialog,
    private _popupService: PopupService,
    private _toastrService: ToastrService,

  ) {
    this.searchForm = this._fb.group({
      commercialRegisterNumber: ['', [Validators.required]],
    });

    this.addForm = this._fb.group({
      facilityId: ['', [Validators.required]],
    });
  }


  localization = {

    deletedSuccessfully: 'تم حذف المطور بنجاح',

  };

  ngOnInit(): void {
    this.loadDevelopers();
    this.watchPagechanged();
  }

  private updateRequestList(
    TypeListView: Pagination<LicenseProjectFawriaDeveloperListDto[]>
  ): void {
    this.reqList = TypeListView;
    this.setPaginationData(
      this.reqList.pageSize,
      this.reqList.totalCount,
      this.reqList.pageCount
    );
  }

  private setPaginationData(
    pageSize: number,
    total: number,
    pageCount: number
  ): void {
    this.pagintationData.pageCount = pageCount;
    this.pagintationData.pageSize = pageSize;
    this.pagintationData.totalCount = total;
    this._paginationService.updatePaginationData(this.pagintationData);
  }
  loadDevelopers(): void {
    this.subscriptions.push(
      this._licenseProjectFawriaService
        .getAll(this.pagintationData.currentPage, this.pagintationData.pageSize)
        .subscribe(
          (res: Pagination<LicenseProjectFawriaDeveloperListDto[]>) => {
            this.updateRequestList(
              res as Pagination<LicenseProjectFawriaDeveloperListDto[]>
            );
          }
        )
    );
  }


  confirmDeleteDeveloper(
    developer: LicenseProjectFawriaDeveloperListDto
  ): void {


    const confirmationData: confirmationPopupData = {
      id: developer.id,
      staticMessage: 'هل أنت متأكد من حذف المطور؟',
      dynamicMessage: developer.employeeName ?? '',
      popupType:'primary'

    };
    const dialogRef =
      this._popupService.updateConfirmationPopupData(confirmationData);


    // Subscribe to confirm action
    const confirmSub = this._popupService.confirmAction.subscribe((data) => {

      this.delete(developer.id);
      dialogRef.close();
      confirmSub.unsubscribe(); // clean up to avoid memory leaks
    });
  }
  delete(id: string) {
   
    this.subscriptions.push(
      this._licenseProjectFawriaService.deleteLicenseProjectEngineeringWorksExamination(id).subscribe(res => {
        if (res.isDone) {
          //delete here
          console.log("delete here ");
          this._toastrService.success(this.localization.deletedSuccessfully);

          this.loadDevelopers();

       
        }
        else
          this._toastr.showError(res.message);
      })
    )
  }

  /**
   * Search for facility by commercial register number
   */
  searchFacility(): void {
    if (this.searchForm.invalid) {
      this._toastr.showError('الرجاء إدخال رقم السجل التجاري');
      return;
    }

    const commercialRegisterNumber = this.searchForm.get(
      'commercialRegisterNumber'
    )?.value;
    this.isSearching = true;
    this.facilityInfo = null;

    this.subscriptions.push(
      this._licenseProjectFawriaService
        .checkCommercialRegisterNumber(commercialRegisterNumber)
        .subscribe({
          next: (response) => {
            if (response.isDone && response.data) {
              this.facilityInfo = response.data;
              this.showAddForm = true;
              this.addForm.patchValue({
                facilityId: response.data.facilityId,
              });
              this._toastr.showSuccess('تم العثور على المنشأة');
            } else {
             this.errorMessage = response.message
              
              this.showAddForm = false;
            }
            this.isSearching = false;
          },
          error: (error) => {
            this._toastr.showError('حدث خطأ أثناء البحث');
            this.isSearching = false;
            this.showAddForm = false;
            console.error('Error searching facility:', error);
          },
        })
    );
  }

  /**
   * Add license project fawria
   */
  addLicenseProject(): void {
    if (this.addForm.invalid) {
      this._toastr.showError('الرجاء إدخال جميع البيانات المطلوبة');
      return;
    }

    const data: AddLicenseProjectFawriaDto = this.addForm.value;

    this.subscriptions.push(
      this._licenseProjectFawriaService
        .addLicenseProjectFawria(data)
        .subscribe({
          next: (response) => {
            if (response.isDone) {
              this._toastr.showSuccess('تم إضافة المطور بنجاح');
              this.closeModal();
              this.loadDevelopers();
            } else {
              this._toastr.showError(response.message || 'فشل في إضافة المطور');
            }
          },
          error: (error) => {
            this._toastr.showError('حدث خطأ أثناء إضافة المطور');
            console.error('Error adding license project:', error);
          },
        })
    );
  }

  /**
   * Open add developer modal
   */
  openAddModal(): void {
    this.resetForms();
    this.dialogRef = this._dialog.open(this.addDeveloperModal, {
      width: '875px',
      maxWidth: '90vw',
      maxHeight: '90vh',
      disableClose: true,
      panelClass: 'custom-dialog-container',
      hasBackdrop: true,
      autoFocus: true
    });

    // Prevent backdrop click from closing the dialog
    this.dialogRef.backdropClick().subscribe(() => {
      // Do nothing - prevents backdrop click from closing the dialog
    });
  }

  /**
   * Close modal
   */
  closeModal(): void {
    this.resetForms();
    this.dialogRef?.close();
  }

  /**
   * Reset forms and facility info
   */
  resetForms(): void {
    this.searchForm.reset();
    this.addForm.reset();
    this.facilityInfo = null;
    this.showAddForm = false;
  }
  watchPaginationActions(): void {
    this.watchPagechanged();
    this.watchPaginationClicked();
  }
  private watchPagechanged(): void {
    this.subscriptions.push(
      this._paginationService.getPageChanged().subscribe((pageNo) => {
        this.newPageNo = pageNo;
      })
    );
  }
  private watchPaginationClicked(): void {
    this.subscriptions.push(
      this._paginationService.getPageClicked().subscribe((nextPage: number) => {
        if (this.pagintationData.currentPage != nextPage) {
          this.loadNextPage(nextPage);
          this.pagintationData.currentPage = this.newPageNo;
        }
      })
    );
  }
  private loadNextPage(nextPage: number): void {
    this.pagintationData.currentPage = nextPage;
    this.loadDevelopers();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.dialogRef?.close();
  }
}
