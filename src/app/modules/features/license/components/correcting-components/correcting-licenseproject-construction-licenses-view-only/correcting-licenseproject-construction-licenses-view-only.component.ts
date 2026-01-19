import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SharedLicenseProjectService } from '../../../services/sharedLicenseProject/shared-license-project.service';
import { ConstructionLicenseService } from '../../../services/licenseProjects/construction-license.service';
import { ConstructionLicenseDto } from '../../../dataModels/construction-license.dto';

@Component({
  selector: 'app-correcting-licenseproject-construction-licenses-view-only',
  templateUrl: './correcting-licenseproject-construction-licenses-view-only.component.html',
  styleUrls: ['./correcting-licenseproject-construction-licenses-view-only.component.scss']
})
export class CorrectingLicenseprojectConstructionLicensesViewOnlyComponent implements OnInit, OnDestroy {

  constructionLicenses: ConstructionLicenseDto[] = [];
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  licenseProjectId: string | null = '00000000-0000-0000-0000-000000000000';

  constructor(
    private _constructionLicenseService: ConstructionLicenseService,
    private _sharedLicenseProjectService: SharedLicenseProjectService
  ) { }

  ngOnInit(): void {
    this.getCorrectionUnitRequestIdFromLocalStorage();
    this.loadConstructionLicenses();
  }

  private getCorrectionUnitRequestIdFromLocalStorage(): void {
    this.licenseProjectId = this._sharedLicenseProjectService.getCorrectionUnitRequestIdFromLocalStorage();
  }

  private loadConstructionLicenses(): void {
    if (!this.licenseProjectId || this.licenseProjectId === '00000000-0000-0000-0000-000000000000') {
      return;
    }

    const sub = this._constructionLicenseService
      .GetByLicenseProjectId(this.licenseProjectId)
      .subscribe({
        next: (res: ConstructionLicenseDto[] | undefined) => {
          if (res) {
            this.constructionLicenses = res;
            this.setBefor7();
          }
        },
        error: (err: any) => {
          console.error('Error loading construction licenses:', err);
        },
      });

    this.subscriptions.push(sub);
  }

  setBefor7() {
    this.constructionLicenses.forEach(license => {
      if (license.issueOn) {
        license.before7 = new Date(license.issueOn) < new Date(2017, 6, 1);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  localization = {
    title: 'رخص البناء',
    constructionLicensetype: 'نوع الرخص الإنشائية',
    issueOn: 'تاريخ الرخصة',
    licenseFile: 'ملفات الرخصة الإنشائية',
    licenseNumber: 'رقم الرخصة',
    before7: 'قبل 1-7',
    after7: 'بعد 1-7',
    landTotalSpace: 'مساحة مسطح البناء',
  };
}
