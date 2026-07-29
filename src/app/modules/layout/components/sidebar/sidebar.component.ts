import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { LanguageService } from 'src/app/core/services/language/language.service';
import { customerResponse, facilityResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { LoginUserTypeEnum } from 'src/app/modules/auth/models/login.model';
import { LicenseProjectBuyerService } from 'src/app/modules/features/license/services/license-project-buyer.service';
import { CoreResponseDTO } from 'src/app/core/models/core.model';
import { QualificationType } from 'src/app/modules/features/qualifying/dataModels/enum/qualification-request-type';
import { FacilityTypeCategory } from 'src/app/shared/models/customer.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { MatDialog } from '@angular/material/dialog';
import { UnsavedChangesDialogComponent } from 'src/app/core/guards/unsaved-changes-guard/unsaved-changes-dialog/unsaved-changes-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  hideSideBar: boolean = true;
  @Output() sidebarToggled = new EventEmitter<void>();

  baseUrl = `${environment.baseURL}/`;
  loginUserType: string | null = '';
  loginUserTypeEnum: LoginUserTypeEnum | null = null;
  LoginUserTypeEnum = LoginUserTypeEnum
  isAccountant: boolean = false;
  isEngineer: boolean = false;
  isDeveloper: boolean = false;
  isFacilityTypeCategoryDeveloper: boolean = false;
  currentUrl: string = '';
  subscriptions: Subscription[] = [];
  panelOpenState = false;
  baseImagePath: string = './assets/images/layout/sidebar/';
  userData: customerResponse | null = null;
  links = {

    complaintsAndReport: `${Configuration.modules.wafi}/${Configuration.modules.complaintsAndReport}`,
    complaintsReports: `/${Configuration.pages.complaintsAndReport.complaintsReports}`,
    charteredaccountprojectlist: `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.charteredaccount}`,
    qualifying: `${Configuration.modules.wafi}/${Configuration.modules.qualifying}`,
    qualifyingReqs: `/${Configuration.pages.qualifying.requests}`,
    qualifyingReqList: `/${Configuration.pages.qualifying.requestList}`,
    qualifyingCertificates: `/${Configuration.pages.qualifying.qualifyingCertificates}`,
    facilities: `${Configuration.modules.wafi}/${Configuration.modules.facilities}/${Configuration.pages.facilities.facilityDashboard}`,
    facilityProfile: `${Configuration.modules.wafi}/${Configuration.modules.facilities}/${Configuration.pages.facilities.facilityProfile}`,
    dashboard: `${Configuration.modules.wafi}/${Configuration.modules.facilities}/${Configuration.pages.facilities.Dashboard}`,
    userManagement: `${Configuration.modules.wafi}/${Configuration.modules.userManagement}`,
    userProfile: `/${Configuration.pages.userManagement.userProfile}`,
    licenseUnderStudy: `/${Configuration.pages.license.licenseUnderStudy}`,
    license: `${Configuration.modules.wafi}/${Configuration.modules.license}`,
    licenseTypes: `/${Configuration.pages.license.lincenseTypes}`,
    lincenseList: `/${Configuration.pages.license.lincenseList}`,
    lincenseCertificates: `/${Configuration.pages.license.lincenseCertificates}`,
    lincenseRequestApprovals: `/${Configuration.pages.license.lincenseRequestApprovals}`,
    developerApprovalsList: '/developer-approvals-list',
    projectList: `/${Configuration.pages.license.projectList}`,
    renewLicensesList: `/${Configuration.pages.license.RenewLicensesList}`,
    renewQualifyingList: `/${Configuration.pages.qualifying.renewQualifyingList}`,
    licenseProjectFawriaDeveloperList: `/${Configuration.pages.license.licenseProjectFawriaDeveloperList}`,
    training: `${Configuration.modules.wafi}/${Configuration.modules.training}`,
    trainingTypes: `/${Configuration.pages.training.trainingTypes}`,
    trainingList: `/${Configuration.pages.training.trainingList}`,
    trainingCertificates: `/${Configuration.pages.training.trainingCertificates}`,
    buyerList: `/${Configuration.pages.license.buyerList}`,
    contractdocumentation: `/${Configuration.pages.license.contractdocumentation}`,
    licensecertificatetemplate: `/${Configuration.pages.license.licensecertificatetemplate}`,
    zones: `/${Configuration.pages.license.zones}`,
    itemsLog: `/${Configuration.pages.license.itemsLog}`,

    engineeringManagement: `${Configuration.modules.wafi}/${Configuration.modules.engineeringManagement}`,

    employeeCreateLicense: `/${Configuration.pages.license.employeeCreateLicense}`,
    employeeLicenseList: `/${Configuration.pages.license.employeeLicenseList}`,

    lincenceProjectRequest: `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}`,
    lincenceProjectRequestList: `/${Configuration.pages.licenseProjectRequests.licenseProjectRequestList}`,
    createLincenceProjectRequestList: `/${Configuration.pages.licenseProjectRequests.licenseProjectRequests}`,
    changePlanListApprovals: `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanListApprovals}`,
    changeAccountntListApprovals: `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changeAccountantListApprovals}`,
    changePlanDeedOwnerApprovals: `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanDeedOwnerApprovals}`,

    developerProjects: `${Configuration.modules.wafi}/${Configuration.modules.engineeringManagement}/${Configuration.pages.license.developerProjectList}`,
    recommendationLogsList: `${Configuration.modules.wafi}/${Configuration.modules.engineeringManagement}/${Configuration.pages.license.recommendationLogsList}`,
    contractRequestList: `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.contractRequestList}`,
    searchExchangeDocumentsList: `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.searchExchangeDocumentsList}`,
    supervisionFees: `/${Configuration.pages.license.supervisionFees}`,
    changePlanUnitsBuyersApprovalList: `${Configuration.modules.wafi}/${Configuration.modules.licenseProjectRequests}/${Configuration.pages.licenseProjectRequests.changePlanUnitsBuyersApprovalList}`,
    supervisionFeeInvoices: `/${Configuration.pages.license.supervisionFeeInvoices}`,

  };

  constructor(
    private _languageService: LanguageService,
    private _userDataService: UserDataService,
    private _storageService: StorageService,
    private router: Router,
    private _tabsService: TabsService,
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getLoginUserType();
    this.currentUrl = this.router.url;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  toggleSidebar(): void {
    this.hideSideBar = !this.hideSideBar;
    this.sidebarToggled.emit();
  }
  getLoginUserType(): void {
    this.loginUserType = this._storageService.getLoginUserType()
    this.loginUserTypeEnum = Number(this.loginUserType) as LoginUserTypeEnum;
    this.obseveCustomerData()
  }
  obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService
        .getCustomerData()
        .subscribe((res: customerResponse | null) => {
          this.userData = res;
          if (this.userData && this.userData.facilities && this.userData.facilities.length > 0) {
            this.isFacilityTypeCategoryDeveloper =
              this.userData.facilities[0].facilityTypeCategory === FacilityTypeCategory.Developer;
            this.checkIfAccountantFacility(this.userData.facilities[0].id);
          }
        })
    );
  }
  public checkIfAccountantFacility(facilityId: string): void {
    this.subscriptions.push(
      this._userDataService.getFacilityQualificationTypeCode(facilityId).subscribe((res: string | null) => {
        this.isAccountant = res == QualificationType.accountantQualificationRequest;
        this.isEngineer = res == QualificationType.engineeringConsultantQualificationRequest;
        this.isDeveloper = res == QualificationType.realStateDeveloperQualificationRequest ||
          res == QualificationType.realEstateDeveloperSpecializingInRealEstateParticipation;
      })
    )
  }
  public updateDefaultFacility(facility: facilityResponse, index: number) {
    this.userData?.facilities.splice(index, 1);
    this.userData?.facilities.unshift(facility);
    if (facility.facilityTypeCategory === null) {
      this._userDataService.updateCustomerData(this.userData as customerResponse)
      this._userDataService.setSelectedFacilityIdInLocalStorage(facility.id);
      this._userDataService.removeFacilityTypeCategoryFromLocalStorage();
      this.redirectToFacilityCategoryTypeSetup();
    }else{
      this._userDataService.removeFacilityTypeCategoryFromLocalStorage();
      this._userDataService.updateCustomerData(this.userData as customerResponse)
      this._userDataService.setSelectedFacilityIdInLocalStorage(facility.id);
      this._userDataService.setFacilityTypeCategoryInLocalStorage(facility.facilityTypeCategory as FacilityTypeCategory);
    }
  }


  public getFacilityCategoryType(facilityId: string) {
    this._userDataService.getFacilityTypeCategory(facilityId).subscribe((res: FacilityTypeCategory | null) => {
      this.isFacilityTypeCategoryDeveloper = res === FacilityTypeCategory.Developer;
    })
  }


  public redirectToFacilityCategoryTypeSetup(): void {
    this.router.navigate([`${Configuration.modules.wafi}/${Configuration.modules.facilities}/${Configuration.pages.facilities.facilityTypeSetup}`]);
  }

  /**
   * Check if contract request menu should be active
   * Active when route includes: contract-request-details, contract-request-list
   */
  isContractRequestMenuActive(): boolean {
    return this.currentUrl.includes('contract-request-details') ||
      this.currentUrl.includes('contract-request-list');
  }

  /**
   * Check if licensed projects menu should be active
   * Active when route includes: recommendations-logs-list, real-state-developer-units-list, unit-details
   */
  isLicensedProjectsMenuActive(): boolean {
    return this.currentUrl.includes('recommendations-logs-list') ||
      this.currentUrl.includes('real-state-developer-units-list') ||
      this.currentUrl.includes('unit-details');
  }

  /**
   * Navigate with unsaved changes check
   * Shows confirmation dialog if there are unsaved changes
   */
  navigateWithCheck(route: string, event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (this._tabsService.getUnsavedChanges()) {
      const dialogRef = this._dialog.open(UnsavedChangesDialogComponent, {
        width: '600px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        panelClass: 'confirmation-dialog',
        disableClose: true,
        hasBackdrop: true,
        autoFocus: false,
      });

      dialogRef.afterClosed().subscribe((canLeave: boolean) => {
        if (canLeave) {
          this._tabsService.setUnsavedChanges(false);
          this.router.navigate([route]);
        }
      });
    } else {
      this.router.navigate([route]);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
