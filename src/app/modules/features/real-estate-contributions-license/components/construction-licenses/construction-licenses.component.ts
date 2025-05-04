import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { ConstructionLicenseDto } from '../../dataModels/construction-license.dto';
import { environment } from 'src/environments/environment';
import { ConstructionLicenseService } from '../../services/licenseProjects/construction-license.service';
import { ToastrService } from 'ngx-toastr';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ConstructionLicenseFormComponent } from '../construction-license-form/construction-license-form.component';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseRequestService } from '../../services/license-request.service';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';
import { NextAndPreviusButtonsService } from '../../services/next-and-previous-buttons/next-and-previus-buttons.service';

@Component({
  selector: 'app-construction-licenses',
  templateUrl: './construction-licenses.component.html',
  styleUrls: ['./construction-licenses.component.scss']
})

export class ConstructionLicensesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  constructionLicenses: ConstructionLicenseDto[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
  constructor(
    private _constructionLicenseService: ConstructionLicenseService,
    private _toastrService: ToastrService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService
  ) { }
  ngOnInit() {
    this.getLicenseProjectIdStorage()
    this.loadComponentData();
    this.updateSaveAsDraftBtnIsvisible();
    this.observeNextButtonIsCliced();
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }
  localization = {
    title: 'بيانات الرخص الإنشائية',
    constructionLicensetype: 'نوع الرخص الإنشائية',
    issueOn: 'تاريخ الرخصة',
    licenseFile: 'ملفات الرخصة الإنشائية',
    licenseNumber: 'رقم الرخصة',
    landTotalSpace: 'مساحة مسطح البناء',
    before7: 'قبل 1-7',
    after7: 'بعد 1-7',
    requiredErrorMsg: 'حقل مطلوب',
    savedSuccessfully: 'تم الحفظ',
    dateValidator: 'يجب ان يكون تاريخ الرخصة اقل من تاريخ الحالي',
    letterType: 'خطاب تعهد إتمام',
  };
  totalLandTotalSpace: number = 0;

  private loadComponentData() {
    const requests = [
      this._constructionLicenseService.GetByLicenseProjectId(this.licenseProjectId as string),
    ];
    const subscriptions = forkJoin(requests).subscribe((results) => {
      if (results) {
        this.constructionLicenses = results[0] as ConstructionLicenseDto[];
        this._constructionLicenseService.SetSubjectListObjs(this.constructionLicenses);
        this._constructionLicenseService.getSubjectListObjs().subscribe((subjectObj) => {
          this.constructionLicenses = subjectObj;
          this.setBefor7();
          this.constructionLicenses.forEach(x =>  this.totalLandTotalSpace += x.landTotalSpace )

        })
      }
    });
    this.subscriptions.push(subscriptions);
  }
  setBefor7() {
    this.constructionLicenses.forEach(x => {
      if (x.issueOn)
      x.before7 = new Date(x.issueOn) < new Date(2020, 7, 1);
    });
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
  openDialog(license: ConstructionLicenseDto | undefined): void {
    if (!license || !license.id) {
      license = new ConstructionLicenseDto();
      license.licenseProjectsId = this.licenseProjectId as string;
    }
    this._constructionLicenseService.SetSubjectObj(license as ConstructionLicenseDto);
    let Data = {
      title: this.localization.title,
      component: ConstructionLicenseFormComponent
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  delete(id: string) {
    this.subscriptions.push(
      this._constructionLicenseService.Delete(id).subscribe(res => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully)
          let index = this.constructionLicenses.findIndex(x => x.id == id);
          if (index != -1)
            this.constructionLicenses.splice(index, 1);
        }
        else
          this._toastrService.error(res.message);
      })
    )
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
}
