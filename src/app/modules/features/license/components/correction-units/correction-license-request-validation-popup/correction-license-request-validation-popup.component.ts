import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestValidation } from '../../../dataModels/request-validation.model';
import { TabsError } from 'src/app/core/models/request-validation.model';
import { tabError, tabsComponent } from 'src/app/shared/models/tabs.model';
import { Subscription } from 'rxjs';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { TabCode } from '../../../models/tab-code.model';
import { CorrectingUnitsService } from '../../../services/correct-units/correcting-units.service';

@Component({
  selector: 'app-correction-license-request-validation-popup',
  templateUrl: './correction-license-request-validation-popup.component.html',
  styleUrls: ['./correction-license-request-validation-popup.component.scss'],
})
export class CorrectionLicenseRequestValidationPopupComponent
  implements OnInit, OnDestroy
{
  validationError: RequestValidation | null = null;
  generalErrorTab: TabsError | undefined;
  // Correction Flow Tabs Only
  mainTabsComponentList: tabsComponent[] = [
    {
      icon: '',
      title: 'الصكوك ورخص البناء',
      disabled: false,
      id: 'CorrectionDeedsAndLicenses',
      errNum: 0,
      tabCode: TabCode.correctionLicenseProjectDeeds,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title: 'الوحدات والتصاميم المعمارية',
      disabled: false,
      id: 'CorrectionUnitsAndDesigns',
      errNum: 0,
      tabCode: TabCode.correctionUnitsAndDesigns,
      tabErrors: [],
      isVisible: true,
    },
    // {
    //   icon: '',
    //   title: 'الصكوك',
    //   disabled: false,
    //   id: 'CorrectionLicenseProjectDeeds',
    //   errNum: 0,
    //   tabCode: TabCode.correctionLicenseProjectDeeds,
    //   tabErrors: [],
    //   isVisible: true,
    // },
    // {
    //   icon: '',
    //   title:  'الرخص الإنشائية (البناء)',
    //   disabled: false,
    //   id: 'CorrectionConstructionLicenses',
    //   errNum: 0,
    //   tabCode: TabCode.correctionConstructionLicenses,
    //   tabErrors: [],
    //   isVisible: true,
    // },
    // {
    //   icon: '',
    //   title: 'الزون والبلوكات والعمائر',
    //   disabled: false,
    //   id: 'CorrectionZonesBlocksBuildings',
    //   errNum: 0,
    //   tabCode: TabCode.correctionZonesBlocksBuildings,
    //   tabErrors: [],
    //   isVisible: true,
    // },
    // {
    //   icon: '',
    //   title: 'أنواع الوحدات بالبلوك / العمارة',
    //   disabled: false,
    //   id: 'CorrectionUnitTypes',
    //   errNum: 0,
    //   tabCode: TabCode.correctionUnitTypes,
    //   tabErrors: [],
    //   isVisible: true,
    // },
    // {
    //   icon: '',
    //   title:  'اكواد وحدات المشروع',
    //   disabled: false,
    //   id: 'CorrectionProjectUnitCodes',
    //   errNum: 0,
    //   tabCode: TabCode.correctionProjectUnitCodes,
    //   tabErrors: [],
    //   isVisible: true,
    // },
    // {
    //   icon: '',
    //   title: 'التصاميم المعمارية والمخططات الهندسية',
    //   disabled: false,
    //   id: 'CorrectionArchitecturalDesigns',
    //   errNum: 0,
    //   tabCode: TabCode.correctionArchitecturalDesigns,
    //   tabErrors: [],
    //   isVisible: true,
    // },
  ];

  tabsComponentList: tabsComponent[] = [];
  subscriptions: Subscription[] = [];
  constructor(
    private _popupService: PopupService,
    private _correctingUnitsService: CorrectingUnitsService,
  ) {}

  ngOnInit(): void {
    this.observeValidationError();
    this.observePopupEvents();
  }
  private getTabCodesHasValidtionError() {
    this.tabsComponentList = [];
    // For correction flow, filter tabs directly from validation error response
    if (this.validationError && this.validationError.tabs) {
      const errorTabCodes = this.validationError.tabs.map(tab => tab.tabCode);
      this.mainTabsComponentList.forEach((tab) => {
        if (errorTabCodes.includes(tab.tabCode as string)) {
          this.tabsComponentList.push(tab);
        }
      });
    }
  }
  // popup
  observePopupEvents(): void {
    // this.observecancelAction();
    this.observeconfirmAction();
  }

  // private observecancelAction() {
  //   this.subscriptions.push(
  //     this._popupService.cancelAction.subscribe((res: PopupData) => {
  //       // console.log(res);
  //     })
  //   );
  // }

  private observeconfirmAction() {
    this.subscriptions.push(
      this._popupService.confirmAction.subscribe((res: PopupData) => {
        if (res.id == 'CorrectionLicenseRequestValidationPopupComponent') {
          this.closeDialog();
        }
      })
    );
  }
  private closeDialog(): void {
    this._popupService.dismissDialog();
  }

  private observeValidationError(): void {
    this.subscriptions.push(
      this._correctingUnitsService
        .getRequestValidation()
        .subscribe((res: RequestValidation | null) => {
          this.validationError = res;
          this.validateTabs();
          this.setTabErrorMsgArr();
          this.getTabCodesHasValidtionError();
        })
    );
  }
  private validateTabs() {
    this.mainTabsComponentList.map((t: tabsComponent) => {
      return (t.errNum = this.getTabErrors(t.tabCode as string));
    });
  }
  private getTabErrors(tabCode: string) {
    let errsNum = 0;
    if (this.validationError) {
      errsNum =
        this.validationError.tabs.find(
          (tab: TabsError) => tab.tabCode === tabCode
        )?.tabErrors.length ?? 0;
    }
    return errsNum;
  }

  private setTabErrorMsgArr() {
    this.mainTabsComponentList.map((tab: tabsComponent) => {
      // find tab by tab code
      tab.tabErrors = this.getTabByTabCode(tab.tabCode as string) as tabError[];
    });
  }
  private getTabByTabCode(TabCode: string): tabError[] {
    let tabErrorsMsg = [] as tabError[];
    if (this.validationError) {
      this.validationError.tabs.map((tab: TabsError) => {
        if (tab.tabCode === TabCode) {
          tabErrorsMsg = tab.tabErrors;
        }
      });
    }
    return tabErrorsMsg;
  }
  getGeneralErrorTab() {
    if (
      this.validationError &&
      this.validationError.tabs &&
      this.validationError.tabs.length
    )
      this.generalErrorTab = this.validationError.tabs.find(
        (x) => x.tabCode == 'General'
      );
    return this.generalErrorTab;
  }
  checkNotGeneralErrorTabsExist() {
    if (
      this.validationError &&
      this.validationError.tabs &&
      this.validationError.tabs.length
    ) {
      let notGeneralError = this.validationError.tabs.find(
        (x) => x.tabCode != 'General'
      );
      return notGeneralError ? true : false;
    }
    return false;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
