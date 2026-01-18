import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { NextAndPreviusButtonsService } from 'src/app/modules/features/license/services/next-and-previous-buttons/next-and-previus-buttons.service';
import { ConstructionLicenseService } from 'src/app/modules/features/license/services/licenseProjects/construction-license.service';
import { ConstructionLicenseDto } from 'src/app/modules/features/license/dataModels/construction-license.dto';
import { CorrectionConstructionLicenseFormComponent } from '../correction-construction-license-form/correction-construction-license-form.component';
import { SharedLicenseProjectService } from 'src/app/modules/features/license/services/sharedLicenseProject/shared-license-project.service';
import { UnitCorrectionService } from 'src/app/modules/features/license/services/unit-correction/unit-correction.service';

@Component({
  selector: 'app-correction-construction-licenses',
  templateUrl: './correction-construction-licenses.component.html',
  styleUrls: ['./correction-construction-licenses.component.scss'],
})
export class CorrectionConstructionLicensesComponent
  implements OnInit, OnDestroy
{
  subscriptions: Subscription[] = [];
  constructionLicenses: ConstructionLicenseDto[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';
  constructor(
    private _constructionLicenseService: ConstructionLicenseService,
    private _toastrService: ToastrService,
    private _popupService: PopupService,
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _nextAndPreviusButtonsService: NextAndPreviusButtonsService,
    private unitCorrectionService: UnitCorrectionService
  ) {}
  ngOnInit() {
    this.getLicenseProjectIdStorage();
    this.loadComponentData();
    this.observeNextButtonIsCliced();
  }
  private getLicenseProjectIdStorage(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
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
    this.subscriptions.push(
      this.unitCorrectionService
        .getConstructionLicensesTabData()
        .subscribe((results) => {
          if (results) {
            this.constructionLicenses = results as ConstructionLicenseDto[];
            this._constructionLicenseService.SetSubjectListObjs(
              this.constructionLicenses
            );
            this._constructionLicenseService
              .getSubjectListObjs()
              .subscribe((subjectObj) => {
                this.constructionLicenses = subjectObj;
                this.setBefor7();
                this.constructionLicenses.forEach(
                  (x) => (this.totalLandTotalSpace += x.landTotalSpace)
                );
              });
          }
        })
    );
    // const requests = [
    //   this._constructionLicenseService.GetByLicenseProjectId(this.licenseProjectId as string),
    // ];
    // const subscriptions = forkJoin(requests).subscribe((results) => {
    //   if (results) {
    //     this.constructionLicenses = results[0] as ConstructionLicenseDto[];
    //     this._constructionLicenseService.SetSubjectListObjs(this.constructionLicenses);
    //     this._constructionLicenseService.getSubjectListObjs().subscribe((subjectObj) => {
    //       this.constructionLicenses = subjectObj;
    //       this.setBefor7();
    //       this.constructionLicenses.forEach(x => this.totalLandTotalSpace += x.landTotalSpace)

    //     })
    //   }
    // });
    // this.subscriptions.push(subscriptions);
  }
  setBefor7() {
    this.constructionLicenses.forEach((x) => {
      if (x.issueOn) x.before7 = new Date(x.issueOn) < new Date(2020, 7, 1);
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
    this._constructionLicenseService.SetSubjectObj(
      license as ConstructionLicenseDto
    );
    let Data = {
      title: this.localization.title,
      component: CorrectionConstructionLicenseFormComponent,
    } as PopupData;
    this._popupService.updatePopupData(Data);
  }
  delete(id: string) {
    this.subscriptions.push(
      this._constructionLicenseService.Delete(id).subscribe((res) => {
        if (res.isDone) {
          this._toastrService.success(this.localization.savedSuccessfully);
          let index = this.constructionLicenses.findIndex((x) => x.id == id);
          if (index != -1) this.constructionLicenses.splice(index, 1);
        } else this._toastrService.error(res.message);
      })
    );
  }
  // TabsButtons
  private observeNextButtonIsCliced() {
    this.subscriptions.push(
      this._nextAndPreviusButtonsService.nextButtonIsClicked.subscribe(
        (res: null) => {
          this.moveToNextTab();
        }
      )
    );
  }
  moveToNextTab(): void {
    this._nextAndPreviusButtonsService.moveToNextTab.emit();
  }
}
