import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectRequestStatusEnum } from '../../enums/license-project-request-status.enum';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';
import { RequestTemplateDetailsDto } from '../../models/request-template-details-dto';
import { RequestTemplateService } from '../../services/request-template.service';
import { environment } from 'src/environments/environment';
import { EditRequestTemplateComponent } from '../edit-request-template/edit-request-template.component';
@Component({
  selector: 'app-request-template-summary',
  templateUrl: './request-template-summary.component.html',
  styleUrls: ['./request-template-summary.component.scss']
})
export class RequestTemplateSummaryComponent {
subscriptions: Subscription[] = [];
  id: string | null = '';
  changeRequestDetails: RequestTemplateDetailsDto[] | any;
  baseUrl = `${environment.baseURL}/`;
  constructor(
    private _requestTemplateService: RequestTemplateService,
    private _popupService: PopupService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,

  ) {}
  showButton: boolean = false;
  showEditButton() {
    this.showButton =
      this.changeRequestDetails[0].header.externalRequestStatusId ===
        LicenseProjectRequestStatusEnum.UnderCreation ||
      this.changeRequestDetails[0].header.externalRequestStatusId ===
        LicenseProjectRequestStatusEnum.CustomerFeedback;
  }
  ngOnInit(): void {
    this.getCharteredAccountId();
    this.observeDataIsUpdated();
  }
  getCharteredAccountId() {
    this.id = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    this.ObserveSelectedRequest();
  }
  observeDataIsUpdated() {
    this.subscriptions.push(
      this._requestTemplateService.dataIsUpdate.subscribe(res => {
        this.ObserveSelectedRequest()
      }));
  }
  ObserveSelectedRequest() {
    this.subscriptions.push(
      this._requestTemplateService.getDetails(this.id!).subscribe(
        (res:any) => {
          this.changeRequestDetails = res;
          this.showEditButton();
        }
      )
    );
  }
  openDialog(): void {
    let Data = {
      title: 'تعديل البيانات ',
      component: EditRequestTemplateComponent,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
