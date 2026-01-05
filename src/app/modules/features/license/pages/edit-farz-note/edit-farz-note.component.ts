import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { LincenseProjectZonesComponent } from '../../components/Zones/lincense-project-zones/lincense-project-zones.component';
import { ProjectUnitCodesComponent } from '../../components/project-unit-codes/project-unit-codes.component';
import { TabCode } from '../../models/tab-code.model';
import { LicenseRequestHeaderService } from '../../services/license-request-header.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import {
  confirmationPopupData,
  PopupData,
} from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-edit-farz-note',
  templateUrl: './edit-farz-note.component.html',
  styleUrls: ['./edit-farz-note.component.scss'],
})
export class EditFarzNoteComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  licenseProjectId: string = '00000000-0000-0000-0000-000000000000';
  farzRejectionReason: string = '';

  mainTabsComponentList = [
    {
      icon: '',
      title: 'الزون و بلوكات وعمائر',
      Component: LincenseProjectZonesComponent,
      disabled: false,
      id: 'BlocksAndbuildingsAndunitsComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectZone,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'أكواد وحدات المشروع',
      Component: ProjectUnitCodesComponent,
      disabled: false,
      id: 'ProjectUnitCodesComponent',
      errNum: 0,
      tabCode: TabCode.licenseProjectCodes,
      tabErrors: [],
      isVisible: true,
    },
  ];

  tabContent: Tabs = {
    verticalTabs: false,
    activeTabIndex: 0,
    tabsComponentList: this.mainTabsComponentList,
  };

  constructor(
    private _tabsService: TabsService,
    private _requestService: LicenseRequestHeaderService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _popupService: PopupService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.updateTabContent();
    this.observeconfirmAction();
    this.getSelectedRequestIdFromLocalStorage();
  }

  private updateTabContent() {
    this._tabsService.updateTabContent(this.tabContent);
    this._tabsService.updateActiveTabIndex(0);
  }

  private getSelectedRequestIdFromLocalStorage() {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage() as string;
    if (this.licenseProjectId) {
      this.getFarzRejectionReason();
    }
  }

  private getFarzRejectionReason() {
    this.subscriptions.push(
      this._requestService
        .GetFarzRejectionReason(this.licenseProjectId)
        .subscribe((res) => {
          this.farzRejectionReason = res as string;
        })
    );
  }

  openConfirmtionSendTOFarzDialog() {
    let obj = {
      staticMessage: 'هل انت متأكد من اعادة ارسال الطلب لفرز',
      dynamicMessage: '',
      secondeStaticMessage: '',
      acceptButtonText: 'نعم',
    } as confirmationPopupData;
    this._popupService.updateConfirmationPopupData(obj);
  }

  private updateFarzStatus() {
    this.subscriptions.push(
      this._requestService
        .UpdateFarzStatus(this.licenseProjectId)
        .subscribe((res) => {
          if (res.isDone) {
            this.setSelectedRequestIdInLocalStorage(res.data.id as string);
            this.closeDialog();
            if (res.data) {
              this._sharedLicenseProjectService.setLicenseTypeCodeInLocalStorage(
                res.data.typeCode
              );

              this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(
                res.data.id
              );

              this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
                res.data.licenseProjectId
              );

              this._sharedLicenseProjectService.setfacilityIdInLocalStorage(
                res.data.facilityId
              );

              let route = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.fawriaLicenseDetails}`;
              this._router.navigateByUrl(
                `${Configuration.modules.wafi}/${Configuration.modules.license}/fawria-license-complate`
              );
            }

            // else {
            //   const licenseDetailsRoute = `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.lincenseDetails}`;
            //   this._router.navigate([licenseDetailsRoute]);
            // }
          }
        })
    );
  }

  setSelectedRequestIdInLocalStorage(selectedRequestId: string) {
    if (selectedRequestId)
      this._sharedLicenseProjectService.setLicenseRequestIdInLocalStorage(
        selectedRequestId as string
      );
    else
      this._sharedLicenseProjectService.setLicenseProjectIdInLocalStorage(
        this.licenseProjectId as string
      );
  }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.updateFarzStatus();
      })
    );
  }

  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  ngOnDestroy(): void {
    this._sharedLicenseProjectService.removeAvailabilityToUpdateFarzfromLocalStorage();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
