import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tabs } from 'src/app/shared/models/tabs.model';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { TabCode } from '../../models/tab-code.model';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { CorrectionZonesBlocksBuildingsComponent } from '../../components/correction-units/correction-zones-blocks-buildings/correction-zones-blocks-buildings.component';
import { CorrectionUnitTypesComponent } from '../../components/correction-units/correction-unit-types/correction-unit-types.component';
import { CorrectionProjectUnitCodesComponent } from '../../components/correction-units/correction-project-unit-codes/correction-project-unit-codes.component';
import { CorrectingUnitsService } from '../../services/correct-units/correcting-units.service';
import { confirmationPopupData, PopupData } from 'src/app/shared/models/popup.model';
import { Configuration } from 'src/app/core/configurations/shared.config';

@Component({
  selector: 'app-edit-correction-farz-note',
  templateUrl: './edit-correction-farz-note.component.html',
  styleUrls: ['./edit-correction-farz-note.component.scss'],
})
export class EditCorrectionFarzNoteComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  correctionUnitRequestId: string = '00000000-0000-0000-0000-000000000000';
  farzRejectionReason:string = '';

  mainTabsComponentList = [
    {
      icon: '',
      title: 'الزون والبلوكات والعمائر',
      Component: CorrectionZonesBlocksBuildingsComponent,
      disabled: false,
      id: 'CorrectionZonesBlocksBuildings',
      errNum: 0,
      tabCode: TabCode.correctionZonesBlocksBuildings,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'أنواع الوحدات بالبلوك / العمارة',
      Component: CorrectionUnitTypesComponent,
      disabled: false,
      id: 'CorrectionUnitTypes',
      errNum: 0,
      tabCode: TabCode.correctionUnitTypes,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'اكواد وحدات المشروع',
      Component: CorrectionProjectUnitCodesComponent,
      disabled: false,
      id: 'CorrectionProjectUnitCodes',
      errNum: 0,
      tabCode: TabCode.correctionProjectUnitCodes,
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
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _correctionUnitHeaderService: CorrectingUnitsService,
    private _popupService: PopupService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.checkAllowToResendFarz();
    this.updateTabContent();
    this.observeconfirmAction();
    this.getCorrectionUnitRequestIdFromLocalStorage();
  }

  checkAllowToResendFarz(){
   let allowed= this._sharedLicenseProjectService.getCorrectionAvailabilityToUpdateFarzFromLocalStorage();
   if(allowed==null || allowed==false){
     this._router.navigateByUrl(
       `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.correctionLicenseProjectRequestDetails}`
      );
    }
  }

  private updateTabContent() {
    this._tabsService.updateTabContent(this.tabContent);
    this._tabsService.updateActiveTabIndex(0);
  }

  private getCorrectionUnitRequestIdFromLocalStorage() {
    this.correctionUnitRequestId =
      this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage() as string;
      if (this.correctionUnitRequestId) {
      this.getFarzRejectionReason();
    }
  }
  private getFarzRejectionReason() {
    this.subscriptions.push(
      this._correctionUnitHeaderService
        .GetFarzRejectionReason(this.correctionUnitRequestId)
        .subscribe((res) => {
          this.farzRejectionReason = res as string;
        })
    );
  }
  openConfirmtionSendTOFarzDialog() {
    let obj = {
      staticMessage: 'هل انت متأكد من اعادة إرسال الطلب لفرز',
      dynamicMessage: '',
      secondeStaticMessage: '',
      acceptButtonText: 'نعم',
    } as confirmationPopupData;
    this._popupService.updateConfirmationPopupData(obj);
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }
  setSelectedRequestIdInLocalStorage(selectedRequestId: string) {
      this._sharedLicenseProjectService.setCorrectionUnitRequestIdInLocalStorage(
        this.correctionUnitRequestId as string
      );
  }
 private updateFarzStatus() {
    this.subscriptions.push(
      this._correctionUnitHeaderService
        .UpdateFarzStatus(this.correctionUnitRequestId)
        .subscribe((res) => {
          if (res.isDone) {
            this.closeDialog();
            if (res.data) {
              this._sharedLicenseProjectService.setLicenseTypeCodeInLocalStorage(
                res.data.typeCode
              );

              this._sharedLicenseProjectService.setCorrectionUnitRequestIdInLocalStorage(
                res.data.id
              );

              this._sharedLicenseProjectService.setfacilityIdInLocalStorage(
                res.data.facilityId
              );
              this._router.navigateByUrl(
                `${Configuration.modules.wafi}/${Configuration.modules.license}/${Configuration.pages.license.correctionLicenseProjectRequestDetails}`
              );
            }
          }
        })
    );
  }
  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        this.updateFarzStatus();
      })
    );
  }

  ngOnDestroy(): void {
    this._sharedLicenseProjectService.removeCorrectionAvailabilityToUpdateFarzfromLocalStorage();
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
