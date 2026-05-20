import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Configuration } from '../../configurations/shared.config';
import { UserDataService } from '../../services/user-data/user-data.service';
import { StorageService } from '../../services/storage/storage.service';
import { ToastrNotificatioService } from '../../services/toastr-notification/toastr-notificatio.service';
import {
  customerResponse,
  FacilityTypeCategory,
} from 'src/app/shared/models/customer.model';
import { LoginUserTypeEnum } from 'src/app/modules/auth/models/login.model';

@Injectable()
export class FacilityTypeCategoryGuard implements CanActivate {
  constructor(
    private _userDataService: UserDataService,
    private _storageService: StorageService,
    private _toastrNotificationService: ToastrNotificatioService,
    private _router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | boolean | UrlTree {
    if (!this._storageService.isAuthenticated()) {
      return true;
    }

    const loginUserType = Number(this._storageService.getLoginUserType()) as LoginUserTypeEnum;

    // Individual users (احد الافراد) don't need facility type selection
    if (loginUserType === LoginUserTypeEnum.finalBeneficiary) {
      return true;
    }

    return this._userDataService.GetCustomer(loginUserType).pipe(
      map((userData: customerResponse | null) => {
        const facilityTypeCategory =
          this._userDataService.getFacilityTypeCategoryFromLocalStorage();

        const selectedFacilityId = this._userDataService.getSelectedFacilityIdFromLocalStorage();
        let userFacilityTypeCategory: FacilityTypeCategory | undefined;
        if (userData?.facilities && userData.facilities.length > 0) {
          if (selectedFacilityId) {
            userFacilityTypeCategory =
              userData.facilities.find(x => x.id == selectedFacilityId)?.facilityTypeCategory;
          } else {

            userFacilityTypeCategory =
              userData.facilities[0].facilityTypeCategory;
          }
        }

        if (facilityTypeCategory == null && userFacilityTypeCategory == null) {
          this._toastrNotificationService.showInfo('يجب اختيار نوع المنشأة أولاً');
          return this._router.createUrlTree([
            `${Configuration.modules.wafi}/${Configuration.modules.facilities}/${Configuration.pages.facilities.facilityTypeSetup}`,
          ]);
        }

        if (facilityTypeCategory == null && userFacilityTypeCategory != null) {
          this._userDataService.setFacilityTypeCategoryInLocalStorage(userFacilityTypeCategory);
          this._userDataService.removeSelectedFacilityIdFromLocalStorage();
        }

        return true;
      }),
    );
  }
}
