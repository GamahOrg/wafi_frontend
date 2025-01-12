import { Component, OnInit, type OnDestroy } from '@angular/core';
import  { Subscription } from 'rxjs';
import { LicenseRequestTabCode } from '../../../license/models/tab-code.model';
import  { DataVisibilityOfLicenseProjectService } from '../../../license/services/data-visibility-of-license-project/data-visibility-of-license-project.service';
import { ReactivaiteLicenseRequestProjectSummaryComponent } from '../reactivaite-license-request-project-summary/reactivaite-license-request-project-summary.component';
import { ReactivaiteLicenseRequestDeveloperSummaryComponent } from '../reactivaite-license-request-developer-summary/reactivaite-license-request-developer-summary.component';

@Component({
  selector: 'app-reactivaite-license-request-main-data-summary',
  templateUrl: './reactivaite-license-request-main-data-summary.component.html',
  styleUrls: ['./reactivaite-license-request-main-data-summary.component.scss']
})
export class ReactivaiteLicenseRequestMainDataSummaryComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  mainTabsComponentList = [
    {
      icon: '',
      title: 'بيانات المشروع',
      Component: ReactivaiteLicenseRequestProjectSummaryComponent,
      disabled: false,
      id: 'CancelLicenseProjectSummaryComponent',
      errNum: 0,
      tabCode: LicenseRequestTabCode.ProjectData,
      tabErrors: [],
      isVisible: true,
    },
    {
      icon: '',
      title:'البيانات من المطور',
      Component: ReactivaiteLicenseRequestDeveloperSummaryComponent,
      disabled: false,
      id: 'CancelLicenseDeveloperSummaryComponent',
      errNum: 0,
      tabCode: LicenseRequestTabCode.DeveloperData,
      tabErrors: [],
      isVisible: true,
    },    
   
  ];
  constructor(
    private _dataVisibilityOfLicenseProjectService: DataVisibilityOfLicenseProjectService,
  ) { };
  ngOnInit(): void {
    this.getDataVisibilityOfLicenseProject();
  }
  private getDataVisibilityOfLicenseProject() {
    this._dataVisibilityOfLicenseProjectService.getDataVisibilityOfLicenseProjectForCertainTab(this.subscriptions, this.mainTabsComponentList, false, true)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
