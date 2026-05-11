import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import {
  customerResponse,
  FacilityTypeCategory,
} from 'src/app/shared/models/customer.model';
import {
  FacilityBusinessTypeDto,
  FacilityTypeCategoryDto,
  UpdateFacilityTypeCategoryDto,
} from '../../dataModels/facility-type-setup.model';
import { FacilityTypeSetupService } from '../../services/facilityTypeSetup/facility-type-setup.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-facility-type-setup',
  templateUrl: './facility-type-setup.component.html',
  styleUrls: ['./facility-type-setup.component.scss'],
})
export class FacilityTypeSetupComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  userData: customerResponse | null = null;
  facilityBusinessTypes: FacilityBusinessTypeDto[] = [];
  facilityTypeCategories: FacilityTypeCategoryDto[] = [];
  selectedCategory: FacilityTypeCategoryDto | null = null;
  showIncompatibleAlert: boolean = false;
  showAllBusinessTypes: boolean = false;
  isLoading: boolean = false;

  readonly categoryIcons: Record<number, SafeHtml> = {
    [FacilityTypeCategory.Developer]: this.sanitizer
      .bypassSecurityTrustHtml(`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66732 27.667C3.93094 27.667 3.33398 28.2639 3.33398 29.0003C3.33398 29.7367 3.93094 30.3337 4.66732 30.3337L27.334 30.3337C28.0704 30.3337 28.6673 29.7367 28.6673 29.0003C28.6673 28.2639 28.0704 27.667 27.334 27.667H26.334L26.334 8.00033C26.334 6.87557 26.2766 5.90464 26.0979 5.09093C25.9166 4.26589 25.5972 3.54001 25.0291 2.97189C24.461 2.40376 23.7351 2.08436 22.91 1.90312C22.0963 1.72436 21.1254 1.66699 20.0007 1.66699L12.0007 1.66699C10.8759 1.66699 9.90496 1.72436 9.09125 1.90312C8.26622 2.08436 7.54034 2.40376 6.97221 2.97189C6.40408 3.54001 6.08469 4.26589 5.90344 5.09093C5.72468 5.90464 5.66732 6.87557 5.66732 8.00033L5.66732 27.667H4.66732ZM11.6673 27.667L11.6673 25.0003C11.6673 24.4311 11.6911 23.9165 11.7723 23.4728C11.854 23.0268 12.0067 22.5764 12.3208 22.1995C12.9729 21.4169 13.9884 21.3337 14.8895 21.3337H17.1118C18.0129 21.3337 19.0284 21.4169 19.6805 22.1995C19.9946 22.5764 20.1473 23.0268 20.229 23.4728C20.3102 23.9165 20.334 24.4311 20.334 25.0003V27.667H18.334V25.0003C18.334 24.4665 18.3098 24.0961 18.2617 23.833C18.2139 23.5722 18.1557 23.4938 18.1441 23.4798C18.1394 23.4742 18.1335 23.468 18.1174 23.4585C18.0985 23.4475 18.0576 23.4276 17.9797 23.407C17.811 23.3626 17.5448 23.3337 17.1118 23.3337H14.8895C14.4565 23.3337 14.1903 23.3626 14.0216 23.407C13.9437 23.4276 13.9029 23.4475 13.8839 23.4585C13.8678 23.468 13.8619 23.4742 13.8572 23.4798C13.8456 23.4938 13.7874 23.5722 13.7397 23.833C13.6915 24.0961 13.6673 24.4665 13.6673 25.0003L13.6673 27.667H11.6673ZM14.0007 7.00033C13.4484 7.00033 13.0007 7.44804 13.0007 8.00033C13.0007 8.55261 13.4484 9.00033 14.0007 9.00033H18.0007C18.5529 9.00033 19.0007 8.55261 19.0007 8.00033C19.0007 7.44804 18.5529 7.00033 18.0007 7.00033L14.0007 7.00033ZM14.0007 11.667C13.4484 11.667 13.0007 12.1147 13.0007 12.667C13.0007 13.2193 13.4484 13.667 14.0007 13.667L18.0007 13.667C18.5529 13.667 19.0007 13.2193 19.0007 12.667C19.0007 12.1147 18.5529 11.667 18.0007 11.667L14.0007 11.667ZM14.0007 16.3337C13.4484 16.3337 13.0007 16.7814 13.0007 17.3337C13.0007 17.8859 13.4484 18.3337 14.0007 18.3337H18.0007C18.5529 18.3337 19.0007 17.8859 19.0007 17.3337C19.0007 16.7814 18.5529 16.3337 18.0007 16.3337L14.0007 16.3337Z" fill="#005257"/>
</svg>`),
    [FacilityTypeCategory.Accountant]: this.sanitizer
      .bypassSecurityTrustHtml(`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.667 3.66699C19.989 3.66699 17.5068 4.19305 15.5772 5.09428C13.9533 5.85268 11.7679 6.33366 9.33366 6.33366C7.98432 6.33366 6.70684 6.18575 5.55692 5.92237C3.78833 5.51729 1.66699 6.72937 1.66699 8.81895V23.1817C1.66699 24.2957 1.84355 25.3446 2.42224 26.1987C3.02064 27.0819 3.94284 27.6045 5.1104 27.8719C6.41298 28.1702 7.84054 28.3337 9.33366 28.3337C12.0116 28.3337 14.4939 27.8076 16.4235 26.9064C18.0473 26.148 20.2328 25.667 22.667 25.667C24.0163 25.667 25.2938 25.8149 26.4437 26.0783C28.2123 26.4834 30.3337 25.2713 30.3337 23.1817V8.81895C30.3337 7.75648 30.1907 6.71303 29.6294 5.85026C29.0437 4.94988 28.113 4.40882 26.8903 4.12876C25.5877 3.83041 24.1601 3.66699 22.667 3.66699ZM16.0003 20.0003C18.2095 20.0003 20.0003 18.2095 20.0003 16.0003C20.0003 13.7912 18.2095 12.0003 16.0003 12.0003C13.7912 12.0003 12.0003 13.7912 12.0003 16.0003C12.0003 18.2095 13.7912 20.0003 16.0003 20.0003ZM7.33366 16.0003C8.07004 16.0003 8.66699 16.5973 8.66699 17.3337V17.3456C8.66699 18.082 8.07004 18.679 7.33366 18.679C6.59728 18.679 6.00033 18.082 6.00033 17.3456V17.3337C6.00033 16.5973 6.59728 16.0003 7.33366 16.0003ZM26.0003 14.6566C26.0003 13.9202 25.4034 13.3232 24.667 13.3232C23.9306 13.3232 23.3337 13.9202 23.3337 14.6566V14.6686C23.3337 15.4049 23.9306 16.0019 24.667 16.0019C25.4034 16.0019 26.0003 15.4049 26.0003 14.6686V14.6566Z" fill="#005257"/>
</svg>`),
    [FacilityTypeCategory.Engineering]: this.sanitizer
      .bypassSecurityTrustHtml(`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.4079 1.66699C19.8586 1.66699 21.8 1.667 23.3186 1.871C24.8813 2.08166 26.1466 2.52431 27.1453 3.52165C28.1426 4.52031 28.5853 5.78567 28.796 7.34834C29 8.86701 29 10.8083 29 13.259V18.7417C29 21.1923 29 23.1336 28.796 24.6523C28.5853 26.215 28.1426 27.4803 27.1453 28.479C26.1466 29.4763 24.8813 29.919 23.3186 30.1297C21.8 30.3337 19.8586 30.3337 17.4079 30.3337H14.5921C12.1414 30.3337 10.2 30.3337 8.68138 30.1297C7.11871 29.919 5.85335 29.4763 4.85469 28.479C3.85735 27.4803 3.4147 26.215 3.20404 24.6523C3.00004 23.1336 3 21.1923 3 18.7417L3 13.259C3 10.8083 3.00004 8.86701 3.20404 7.34834C3.4147 5.78567 3.85735 4.52031 4.85469 3.52165C5.85335 2.52431 7.11871 2.08166 8.68138 1.871C10.2 1.667 12.1414 1.66699 14.5921 1.66699L17.4079 1.66699ZM8.33333 9.00033C8.33333 8.44833 8.78133 8.00033 9.33333 8.00033L22.6667 8.00033C23.2187 8.00033 23.6667 8.44833 23.6667 9.00033C23.6667 9.55233 23.2187 10.0003 22.6667 10.0003H22.3906C22.5893 10.2217 22.8574 10.531 23.1267 10.8843C23.3947 11.2336 23.6813 11.6457 23.9053 12.0697C24.116 12.4697 24.3333 12.9923 24.3333 13.5337C24.3333 15.203 23.0507 16.667 21.3333 16.667C19.616 16.667 18.3333 15.203 18.3333 13.5337C18.3333 12.9923 18.5507 12.4697 18.7613 12.0697C18.9853 11.6457 19.272 11.2336 19.54 10.8843C19.8093 10.531 20.0774 10.2217 20.276 10.0003H17L17 17.391C17.388 17.5283 17.6667 17.8977 17.6667 18.3337C17.6667 18.8857 17.2187 19.3337 16.6667 19.3337H15.3333C14.7813 19.3337 14.3333 18.8857 14.3333 18.3337C14.3333 17.8977 14.612 17.5283 15 17.391L15 10.0003L11.724 10.0003C11.9226 10.2217 12.1907 10.531 12.46 10.8843C12.728 11.2336 13.0147 11.6457 13.2387 12.0697C13.4493 12.4697 13.6667 12.9923 13.6667 13.5337C13.6667 15.203 12.384 16.667 10.6667 16.667C8.94933 16.667 7.66667 15.203 7.66667 13.5337C7.66667 12.9923 7.884 12.4697 8.09466 12.0697C8.31866 11.6457 8.60531 11.2336 8.87331 10.8843C9.14264 10.531 9.41071 10.2217 9.60938 10.0003H9.33333C8.78133 10.0003 8.33333 9.55233 8.33333 9.00033ZM10.6667 21.3337C9.93067 21.3337 9.33333 21.931 9.33333 22.667C9.33333 23.403 9.93067 24.0003 10.6667 24.0003H21.3333C22.0693 24.0003 22.6667 23.403 22.6667 22.667C22.6667 21.931 22.0693 21.3337 21.3333 21.3337H10.6667Z" fill="#005257"/>
</svg>`),
  };

  constructor(
    private _userDataService: UserDataService,
    private _facilityTypeSetupService: FacilityTypeSetupService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _router: Router,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.observeCustomerData();
  }

  observeCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (this.userData?.facilities?.length) {
            this.loadFacilityData();
          }
        }),
    );
  }

  loadFacilityData(): void {
    const facilityId = this.userData!.facilities[0].id;
    this.subscriptions.push(
      this._facilityTypeSetupService
        .GetFacilityBusinessesAndCategoryTypes(facilityId)
        .subscribe((res) => {
          if (res) {
            this.facilityBusinessTypes = res.facilityBusinessTypes;
            this.facilityTypeCategories = res.facilityTypeCategories;
            this.autoSelectDefault();
          }
        }),
    );
  }

  autoSelectDefault(): void {
    const compatibleCategories = this.facilityTypeCategories.filter(
      (c) => c.isCompatible,
    );
    if (compatibleCategories.length === 1) {
      this.selectedCategory = compatibleCategories[0];
    }
  }

  selectCategory(category: FacilityTypeCategoryDto): void {
    if (!category.isCompatible) {
      this.showIncompatibleAlert = true;
      return;
    }
    this.showIncompatibleAlert = false;
    this.selectedCategory = category;
  }

  isCategorySelected(category: FacilityTypeCategoryDto): boolean {
    return this.selectedCategory?.enumValue === category.enumValue;
  }

  toggleShowAll(): void {
    this.showAllBusinessTypes = !this.showAllBusinessTypes;
  }

  get displayedBusinessTypes(): FacilityBusinessTypeDto[] {
    if (this.showAllBusinessTypes) {
      return this.facilityBusinessTypes;
    }
    return this.facilityBusinessTypes.slice(0, 3);
  }

  save(): void {
    if (!this.selectedCategory) {
      this._toastrNotificationService.showError('يرجى اختيار نوع المنشأة');
      return;
    }

    if (!this.selectedCategory.isCompatible) {
      this._toastrNotificationService.showError('غير متوافق مع أنشطة المنشأة');
      return;
    }

    this.isLoading = true;
    const dto: UpdateFacilityTypeCategoryDto = {
      facilityId: this.userData!.facilities[0].id,
      facilityTypeCategory: this.selectedCategory.enumValue,
    };

    this.subscriptions.push(
      this._facilityTypeSetupService
        .UpdateFacilityTypeCategory(dto)
        .subscribe((res) => {
          this.isLoading = false;
          if (res.isDone) {
            // Update user data locally
            this.userData!.facilities[0].facilityTypeCategory =
              this.selectedCategory!.enumValue;
            this._userDataService.updateCustomerData(this.userData!);
            this._userDataService.setFacilityTypeCategoryInLocalStorage(
              this.selectedCategory!.enumValue,
            );

            this._toastrNotificationService.showSuccess(
              'تم حفظ نوع المنشأة بنجاح',
            );
            this._router.navigate([
              `${Configuration.modules.wafi}/${Configuration.modules.facilities}/${Configuration.pages.facilities.facilityDashboard}`,
            ]);
          }
        }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
