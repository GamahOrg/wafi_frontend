import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Subscription } from 'rxjs';
import { LicenseRequestTypeService } from '../../services/license-request-type.service';
import { SysLicenseRequestTypeGroupingDto } from '../../models/sys-license-request-type-grouping-dto';
import { LicenseProjectFawriaDeveloperService } from '../../services/license-project-fawria-developer.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { customerResponse } from '../../models/employee-registration-dto';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { LoginUserTypeEnum } from 'src/app/modules/auth/models/login.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LicenseRequestTypeTypeCodeEnum } from '../../enums/license-requestType-typeCode.model';

@Component({
  selector: 'app-lincense-types',
  templateUrl: './lincense-types.component.html',
  styleUrls: ['./lincense-types.component.scss'],
})
export class LincenseTypesComponent {
  requestSummeryLink: string = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.createLincense}`;
  subscriptions: Subscription[] = [];
  SysLicenseRequestTypes: any[] = [];
  userType: any = ''
  userTypeEnum = LoginUserTypeEnum
  licenseTypeCodeEnum = LicenseRequestTypeTypeCodeEnum
  SysLicenseRequestTypeGrouping: SysLicenseRequestTypeGroupingDto =
    new SysLicenseRequestTypeGroupingDto();

  trustedSvg: SafeHtml = '';
  constructor(
    private router: Router,
    private _licenseRequestTypeService: LicenseRequestTypeService,
    private _sharedLocalStorage: StorageService,
    private _licenseProjectFawriaDeveloperService: LicenseProjectFawriaDeveloperService,
    private _userDataService: UserDataService,
    private sanitizer: DomSanitizer
  ) { }

  // currentLicense: number = 0;
  // showLicensesByIndex(index: number) {
  //   this.currentLicense = index;
  // }

  navogateToCreateRequest(Code: string): void {
    this.router.navigate([this.requestSummeryLink, Code]);
  }

  ngOnInit(): void {
    this.getCustomerData();
  }

  userData: customerResponse | null = null;
  isFawriaLicenseAllowFlag: boolean = false;
  getCustomerData() {
    this.userType = this._sharedLocalStorage.getLoginUserType()
    if (this.userType) {
      this.subscriptions.push(
        this._userDataService
          .getCustomerData()
          .subscribe((res: customerResponse | null) => {
            this.userData = res;
            if (
              this.userData &&
              this.userData.facilities &&
              this.userData.facilities.length > 0
            ) {
              if (+this.userType != this.userTypeEnum.Employee && this.userData) {
                this.IsFawriaLicenseAllow(this.userData.facilities[0].id);
              }
            }
            else if (+this.userType === this.userTypeEnum.Employee && this.userData) {
              this.getAllSysLicenseRequestTypes();
            }
          })
      );
    }
  }

  IsFawriaLicenseAllow(facilityId: string) {
    this.subscriptions.push(
      this._licenseProjectFawriaDeveloperService
        .IsFawriaLicenseAllow(facilityId)
        .subscribe((res) => {
          this.isFawriaLicenseAllowFlag = res;
          this.getAllSysLicenseRequestTypes();
        })
    );
  }

  getAllSysLicenseRequestTypes(): void {
    this.subscriptions.push(
      this._licenseRequestTypeService
        .GetAllGroupingLicense()
        .subscribe((Types) => {
          this.SysLicenseRequestTypeGrouping = Types;
          // if (!this.isFawriaLicenseAllowFlag) {
          //   this.SysLicenseRequestTypeGrouping.sale =
          //     this.SysLicenseRequestTypeGrouping.sale.filter(
          //       (type) => type.typeCode !== 'FSRSU'
          //     );
          // }

          this.SysLicenseRequestTypeGrouping.sale.map((type) => {
            const rawSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75 17.1838C8.75 17.3864 8.75 17.4877 8.7977 17.5618C8.84539 17.636 8.94451 17.6811 9.14275 17.7714C9.36402 17.8723 9.6448 18.0102 10.0237 18.1986L10.3227 18.3473C10.7359 18.5528 10.9425 18.6555 11.0425 18.5737C11.1425 18.4919 11.0793 18.2563 10.9529 17.7851C10.6351 16.6004 10.6536 15.2596 11.2758 13.805C11.8512 12.4598 12.8427 11.3933 14.0418 10.6923C14.1452 10.6319 14.197 10.6016 14.2235 10.5554C14.25 10.5092 14.25 10.4517 14.25 10.3366V4.07979C14.25 3.89894 14.25 3.80852 14.205 3.73592C14.16 3.66332 14.0791 3.62306 13.9171 3.54254L11.1426 2.16295C10.4736 1.8303 9.92553 1.55778 9.45232 1.3752C9.16028 1.26252 9.01425 1.20618 8.88544 1.29069L8.87522 1.2977C8.75 1.38746 8.75 1.55645 8.75 1.89444L8.75 17.1838Z" fill="#005257"/>
            <path d="M22.75 11.0975C22.75 11.5503 22.75 11.7767 22.6333 11.8302C22.5166 11.8837 22.3358 11.7277 21.9743 11.4158C20.7405 10.3514 19.1388 9.75 17.5015 9.75C17.0827 9.75 16.6662 9.78934 16.2576 9.86571C16.0155 9.91097 15.8945 9.93359 15.8222 9.87362C15.75 9.81364 15.75 9.69578 15.75 9.46006L15.75 4.33964C15.75 4.24511 15.8268 4.16857 15.9214 4.16857L18.0529 4.16857C18.9506 4.16854 19.7008 4.16851 20.2966 4.25039C20.9275 4.33708 21.4955 4.52797 21.9503 4.99278C22.4028 5.45531 22.5866 6.0292 22.6704 6.66607C22.7501 7.27181 22.75 8.03568 22.75 8.95563V11.0975Z" fill="#005257"/>
            <path d="M7.13415 1.37599C7.25 1.46607 7.25 1.62984 7.25 1.95737L7.25 17.3124C7.25 17.5016 7.25 17.5962 7.20624 17.668C7.16247 17.7399 7.07195 17.7867 6.89091 17.8802C6.6546 18.0023 6.40134 18.1492 6.11822 18.3135C5.49919 18.6726 4.92742 19.0043 4.5015 19.1966C4.0707 19.3911 3.60335 19.539 3.11024 19.451C2.57688 19.3558 2.09802 19.0693 1.75833 18.6479C1.44676 18.2613 1.34327 17.783 1.2964 17.3069C1.24998 16.8355 1.24999 16.2326 1.25 15.5035V7.26437C1.24999 6.71324 1.24998 6.24689 1.28747 5.86053C1.32728 5.45023 1.4134 5.07159 1.61998 4.70898C1.82705 4.3455 2.10848 4.07999 2.44084 3.84C2.75247 3.61497 3.15062 3.38402 3.6187 3.11251L4.90724 2.36503C5.55431 1.98964 6.08426 1.68221 6.54509 1.46938C6.81999 1.34242 6.95744 1.27893 7.08779 1.34634C7.10282 1.3541 7.1208 1.36561 7.13415 1.37599Z" fill="#005257"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.654 14.3948C13.4801 12.4634 15.4459 11.2499 17.5005 11.2499C19.5552 11.2499 21.521 12.4634 22.3471 14.3948C23.1191 16.1997 22.6917 17.7489 21.8415 19.0369C21.1499 20.0844 20.1381 21.0162 19.2659 21.8193C19.1126 21.9604 18.9636 22.0977 18.8214 22.2308C18.4633 22.5661 17.9893 22.7499 17.5005 22.7499C17.0118 22.7499 16.5378 22.5662 16.1797 22.2308L16.178 22.2293C16.0281 22.0881 15.8705 21.9424 15.708 21.7922C14.8446 20.9942 13.8457 20.0711 13.1612 19.0365C12.3099 17.7497 11.881 16.2019 12.654 14.3948ZM15.5 16.4999C15.5 15.3953 16.3914 14.4999 17.4911 14.4999H17.5089C18.6086 14.4999 19.5 15.3953 19.5 16.4999C19.5 17.6044 18.6086 18.4999 17.5089 18.4999H17.4911C16.3914 18.4999 15.5 17.6044 15.5 16.4999Z" fill="#005257"/>
            </svg>`;
            type.iconHTML = this.sanitizer.bypassSecurityTrustHtml(rawSvg);
            return type;
          });
          this.SysLicenseRequestTypeGrouping.rent.map((type) => {
            const rawSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75 17.1838C8.75 17.3864 8.75 17.4877 8.7977 17.5618C8.84539 17.636 8.94451 17.6811 9.14275 17.7714C9.36402 17.8723 9.6448 18.0102 10.0237 18.1986L10.3227 18.3473C10.7359 18.5528 10.9425 18.6555 11.0425 18.5737C11.1425 18.4919 11.0793 18.2563 10.9529 17.7851C10.6351 16.6004 10.6536 15.2596 11.2758 13.805C11.8512 12.4598 12.8427 11.3933 14.0418 10.6923C14.1452 10.6319 14.197 10.6016 14.2235 10.5554C14.25 10.5092 14.25 10.4517 14.25 10.3366V4.07979C14.25 3.89894 14.25 3.80852 14.205 3.73592C14.16 3.66332 14.0791 3.62306 13.9171 3.54254L11.1426 2.16295C10.4736 1.8303 9.92553 1.55778 9.45232 1.3752C9.16028 1.26252 9.01425 1.20618 8.88544 1.29069L8.87522 1.2977C8.75 1.38746 8.75 1.55645 8.75 1.89444L8.75 17.1838Z" fill="#005257"/>
            <path d="M22.75 11.0975C22.75 11.5503 22.75 11.7767 22.6333 11.8302C22.5166 11.8837 22.3358 11.7277 21.9743 11.4158C20.7405 10.3514 19.1388 9.75 17.5015 9.75C17.0827 9.75 16.6662 9.78934 16.2576 9.86571C16.0155 9.91097 15.8945 9.93359 15.8222 9.87362C15.75 9.81364 15.75 9.69578 15.75 9.46006L15.75 4.33964C15.75 4.24511 15.8268 4.16857 15.9214 4.16857L18.0529 4.16857C18.9506 4.16854 19.7008 4.16851 20.2966 4.25039C20.9275 4.33708 21.4955 4.52797 21.9503 4.99278C22.4028 5.45531 22.5866 6.0292 22.6704 6.66607C22.7501 7.27181 22.75 8.03568 22.75 8.95563V11.0975Z" fill="#005257"/>
            <path d="M7.13415 1.37599C7.25 1.46607 7.25 1.62984 7.25 1.95737L7.25 17.3124C7.25 17.5016 7.25 17.5962 7.20624 17.668C7.16247 17.7399 7.07195 17.7867 6.89091 17.8802C6.6546 18.0023 6.40134 18.1492 6.11822 18.3135C5.49919 18.6726 4.92742 19.0043 4.5015 19.1966C4.0707 19.3911 3.60335 19.539 3.11024 19.451C2.57688 19.3558 2.09802 19.0693 1.75833 18.6479C1.44676 18.2613 1.34327 17.783 1.2964 17.3069C1.24998 16.8355 1.24999 16.2326 1.25 15.5035V7.26437C1.24999 6.71324 1.24998 6.24689 1.28747 5.86053C1.32728 5.45023 1.4134 5.07159 1.61998 4.70898C1.82705 4.3455 2.10848 4.07999 2.44084 3.84C2.75247 3.61497 3.15062 3.38402 3.6187 3.11251L4.90724 2.36503C5.55431 1.98964 6.08426 1.68221 6.54509 1.46938C6.81999 1.34242 6.95744 1.27893 7.08779 1.34634C7.10282 1.3541 7.1208 1.36561 7.13415 1.37599Z" fill="#005257"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.654 14.3948C13.4801 12.4634 15.4459 11.2499 17.5005 11.2499C19.5552 11.2499 21.521 12.4634 22.3471 14.3948C23.1191 16.1997 22.6917 17.7489 21.8415 19.0369C21.1499 20.0844 20.1381 21.0162 19.2659 21.8193C19.1126 21.9604 18.9636 22.0977 18.8214 22.2308C18.4633 22.5661 17.9893 22.7499 17.5005 22.7499C17.0118 22.7499 16.5378 22.5662 16.1797 22.2308L16.178 22.2293C16.0281 22.0881 15.8705 21.9424 15.708 21.7922C14.8446 20.9942 13.8457 20.0711 13.1612 19.0365C12.3099 17.7497 11.881 16.2019 12.654 14.3948ZM15.5 16.4999C15.5 15.3953 16.3914 14.4999 17.4911 14.4999H17.5089C18.6086 14.4999 19.5 15.3953 19.5 16.4999C19.5 17.6044 18.6086 18.4999 17.5089 18.4999H17.4911C16.3914 18.4999 15.5 17.6044 15.5 16.4999Z" fill="#005257"/>
            </svg>`;
            type.iconHTML = this.sanitizer.bypassSecurityTrustHtml(rawSvg);
            return type;
          });
          this.SysLicenseRequestTypeGrouping.marketing.map((type) => {
            const rawSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75 17.1838C8.75 17.3864 8.75 17.4877 8.7977 17.5618C8.84539 17.636 8.94451 17.6811 9.14275 17.7714C9.36402 17.8723 9.6448 18.0102 10.0237 18.1986L10.3227 18.3473C10.7359 18.5528 10.9425 18.6555 11.0425 18.5737C11.1425 18.4919 11.0793 18.2563 10.9529 17.7851C10.6351 16.6004 10.6536 15.2596 11.2758 13.805C11.8512 12.4598 12.8427 11.3933 14.0418 10.6923C14.1452 10.6319 14.197 10.6016 14.2235 10.5554C14.25 10.5092 14.25 10.4517 14.25 10.3366V4.07979C14.25 3.89894 14.25 3.80852 14.205 3.73592C14.16 3.66332 14.0791 3.62306 13.9171 3.54254L11.1426 2.16295C10.4736 1.8303 9.92553 1.55778 9.45232 1.3752C9.16028 1.26252 9.01425 1.20618 8.88544 1.29069L8.87522 1.2977C8.75 1.38746 8.75 1.55645 8.75 1.89444L8.75 17.1838Z" fill="#005257"/>
            <path d="M22.75 11.0975C22.75 11.5503 22.75 11.7767 22.6333 11.8302C22.5166 11.8837 22.3358 11.7277 21.9743 11.4158C20.7405 10.3514 19.1388 9.75 17.5015 9.75C17.0827 9.75 16.6662 9.78934 16.2576 9.86571C16.0155 9.91097 15.8945 9.93359 15.8222 9.87362C15.75 9.81364 15.75 9.69578 15.75 9.46006L15.75 4.33964C15.75 4.24511 15.8268 4.16857 15.9214 4.16857L18.0529 4.16857C18.9506 4.16854 19.7008 4.16851 20.2966 4.25039C20.9275 4.33708 21.4955 4.52797 21.9503 4.99278C22.4028 5.45531 22.5866 6.0292 22.6704 6.66607C22.7501 7.27181 22.75 8.03568 22.75 8.95563V11.0975Z" fill="#005257"/>
            <path d="M7.13415 1.37599C7.25 1.46607 7.25 1.62984 7.25 1.95737L7.25 17.3124C7.25 17.5016 7.25 17.5962 7.20624 17.668C7.16247 17.7399 7.07195 17.7867 6.89091 17.8802C6.6546 18.0023 6.40134 18.1492 6.11822 18.3135C5.49919 18.6726 4.92742 19.0043 4.5015 19.1966C4.0707 19.3911 3.60335 19.539 3.11024 19.451C2.57688 19.3558 2.09802 19.0693 1.75833 18.6479C1.44676 18.2613 1.34327 17.783 1.2964 17.3069C1.24998 16.8355 1.24999 16.2326 1.25 15.5035V7.26437C1.24999 6.71324 1.24998 6.24689 1.28747 5.86053C1.32728 5.45023 1.4134 5.07159 1.61998 4.70898C1.82705 4.3455 2.10848 4.07999 2.44084 3.84C2.75247 3.61497 3.15062 3.38402 3.6187 3.11251L4.90724 2.36503C5.55431 1.98964 6.08426 1.68221 6.54509 1.46938C6.81999 1.34242 6.95744 1.27893 7.08779 1.34634C7.10282 1.3541 7.1208 1.36561 7.13415 1.37599Z" fill="#005257"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.654 14.3948C13.4801 12.4634 15.4459 11.2499 17.5005 11.2499C19.5552 11.2499 21.521 12.4634 22.3471 14.3948C23.1191 16.1997 22.6917 17.7489 21.8415 19.0369C21.1499 20.0844 20.1381 21.0162 19.2659 21.8193C19.1126 21.9604 18.9636 22.0977 18.8214 22.2308C18.4633 22.5661 17.9893 22.7499 17.5005 22.7499C17.0118 22.7499 16.5378 22.5662 16.1797 22.2308L16.178 22.2293C16.0281 22.0881 15.8705 21.9424 15.708 21.7922C14.8446 20.9942 13.8457 20.0711 13.1612 19.0365C12.3099 17.7497 11.881 16.2019 12.654 14.3948ZM15.5 16.4999C15.5 15.3953 16.3914 14.4999 17.4911 14.4999H17.5089C18.6086 14.4999 19.5 15.3953 19.5 16.4999C19.5 17.6044 18.6086 18.4999 17.5089 18.4999H17.4911C16.3914 18.4999 15.5 17.6044 15.5 16.4999Z" fill="#005257"/>
            </svg>`;
            type.iconHTML = this.sanitizer.bypassSecurityTrustHtml(rawSvg);
            return type;
          });
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
