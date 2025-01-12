import { Component, OnDestroy, OnInit } from '@angular/core';
import { LicenseProjectDelegatorsDto } from '../../dataModels/project-real-state-developer.dto';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LicenseProjectDelegatorService } from '../../services/license-project-delegator.service';
import { ToastrService } from 'ngx-toastr';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';
import { DelegatorFormComponent } from '../delegator-form/delegator-form.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
@Component({
  selector: 'app-delegator-list',
  templateUrl: './delegator-list.component.html',
  styleUrls: ['./delegator-list.component.scss']
})
export class DelegatorListComponent implements OnInit, OnDestroy{
  licenseProjectDelegators: LicenseProjectDelegatorsDto []=[];
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  showValidation: boolean = false;
  subscriptions: Subscription[] = [];
  /**
   *
   */
  constructor(
    private _licenseProjectDelegatorService: LicenseProjectDelegatorService,
    private _popupService: PopupService,
    private _toastrService: ToastrService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) { }
  ngOnInit(): void {
    this.getLicenseProjectIdStorage();
    this.GetProjectDelegatorByLicenseProjectId();
    this.getdelegatorlist();
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  getdelegatorlist(): void {
    this.subscriptions.push(
      this._licenseProjectDelegatorService.getdelegatorlist().subscribe((list) => {
        this.licenseProjectDelegators = list;
      })
    )
  }

  GetProjectDelegatorByLicenseProjectId(): void {

    this.subscriptions.push(
      this._licenseProjectDelegatorService.GetProjectDelegatorByLicenseProjectId(this.licenseProjectId as string).subscribe((res) => {
        if (res.isDone) {
          this.licenseProjectDelegators = res.data as LicenseProjectDelegatorsDto[];
        }
      })
    )
  }

  deleteDelegator(index: number): void {
    let delegator=this.licenseProjectDelegators[index];
    this._licenseProjectDelegatorService.deleteDelegator(delegator.id).subscribe(res => {
      if(res.isDone)
      this.licenseProjectDelegators.splice(index, 1);
    })
  }



  openDialog(): void {
      let exp = new LicenseProjectDelegatorsDto;
      exp.licenseProjectId = this.licenseProjectId as string;
      this._licenseProjectDelegatorService.setdelegatorObj(exp);
    let Data = {
      title: "المفوضون بالتوقيع على وثيقة الصرف",
      component: DelegatorFormComponent
    } as PopupData;
    this._popupService.updatePopupData(Data);

  }
  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe((res: null) => {
        this.moveToNextTab()
      })
    )
  }
  moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit()
  }
  private updateSaveAsDraftBtnIsvisible(): void {
    this._nextAndPreviusButtonsService.saveAsDraftBtnIsvisible.next(false)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
