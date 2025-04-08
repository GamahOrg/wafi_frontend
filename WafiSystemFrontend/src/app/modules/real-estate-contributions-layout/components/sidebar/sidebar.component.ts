import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LanguageService } from 'src/app/core/services/language/language.service';
import { customerResponse, facilityResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { NavigationEnd, Router } from '@angular/router';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { LoginUserTypeEnum } from 'src/app/modules/real-estate-contributions-auth/models/login.model';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { QualificationType } from 'src/app/modules/features/qualifying/dataModels/enum/qualification-request-type';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  hideSideBar: boolean = true;
  
  currentLang: string = '';  baseUrl = `${environment.baseURL}/`;
  currentUrl: string = '';
  isAccountant: boolean = false;
  isEngineer: boolean = false;
  isDeveloper: boolean = false;
  loginUserType: string | null = '' ;
  loginUserTypeEnum: LoginUserTypeEnum | null = null;
  LoginUserTypeEnum = LoginUserTypeEnum  
  subscriptions: Subscription[] = [];
  panelOpenState = false;
  baseImagePath: string = './assets/images/layout/sidebar/';
  userData: customerResponse | null = null;
  links = {
    charteredaccountprojectlist:`${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsLicense}/${Configuration.pages.realEstateContributionslicense.charteredaccount}`,
    qualifying: `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsQualifying}`,
    qualifyingReqs: `/${Configuration.pages.realEstateContributionsQualifying.requests}`,
    qualifyingReqList: `/${Configuration.pages.realEstateContributionsQualifying.requestList}`,
    qualifyingCertificates: `/${Configuration.pages.realEstateContributionsQualifying.qualifyingCertificates}`,
    license: `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsLicense}`,
    licenseTypes: `/${Configuration.pages.realEstateContributionslicense.lincenseTypes}`,
    lincenseList: `/${Configuration.pages.realEstateContributionslicense.lincenseList}`,
    lincenseRequestApprovals: `/${Configuration.pages.realEstateContributionslicense.lincenseRequestApprovals}`,
    lincenseCertificates: `/${Configuration.pages.realEstateContributionslicense.lincenseCertificates}`,
    facilityProfile: `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsFacilities}/${Configuration.pages.realEstateContributionsFacilities.facilityProfile}`,
    facilities: `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionsFacilities}/${Configuration.pages.realEstateContributionsFacilities.facilityDashboard}`,
    userManagement : `${Configuration.modules.realEstateContributions}/${Configuration.modules.realEstateContributionUserManagement}`,
    userProfile : `/${Configuration.pages.realEstateContributionUserManagement.userProfile}`,
    projectList: `/${Configuration.pages.realEstateContributionslicense.projectList}`,
    renewLicensesList: `/${Configuration.pages.realEstateContributionslicense.RenewLicensesList}`,
    renewQualifyingList:`/${Configuration.pages.realEstateContributionsQualifying.renewQualifyingList}`,

    employeeCreateLicense: `/${Configuration.pages.realEstateContributionslicense.employeeCreateLicense}`,
    employeeLicenseList: `/${Configuration.pages.realEstateContributionslicense.employeeLicenseList}`,
    buyerList: `/${Configuration.pages.license.buyerList}`,
    contractdocumentation: `/${Configuration.pages.license.contractdocumentation}`,
  };


  constructor(
    private _languageService: LanguageService,
    private _userDataService: UserDataService,
    private router: Router,
    private _storageService: StorageService,
  ) {
    _languageService.currentLang.subscribe((lang) => (this.currentLang = lang));
  }

  ngOnInit(): void {
    this.getLoginUserType();
    this.obseveCustomerData();
    this.currentUrl = this.router.url;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }
  getLoginUserType(): void {
    this.loginUserType =  this._storageService.getLoginUserType()
    this.loginUserTypeEnum = Number(this.loginUserType ) as LoginUserTypeEnum;
    this.obseveCustomerData()
  }
  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if(this.userData && this.userData.facilities && this.userData.facilities.length >0)
            this.checkIfAccountantFacility(this.userData.facilities[0].id)
        })
    );
  }

  checkIfAccountantFacility(facilityId: string): void {
    this.subscriptions.push(
      this._userDataService.getFacilityQualificationTypeCode(facilityId).subscribe((res: string | null) => {
        this.isAccountant = res == QualificationType.accountantQualificationRequest;
        this.isEngineer = res == QualificationType.engineeringConsultantQualificationRequest;
        this.isDeveloper = res == QualificationType.realStateDeveloperQualificationRequest ||
        res == QualificationType.realEstateDeveloperSpecializingInRealEstateParticipation;
      })
    )
  }
  updateDefaultFacility(facility: facilityResponse, index: number) {
    this.userData?.facilities.splice(index, 1);
    this.userData?.facilities.unshift(facility);
        this._userDataService.updateCustomerData(this.userData as customerResponse)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
