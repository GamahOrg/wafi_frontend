import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { licenseProjectConstructionLicenses } from '../../models/project-units';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-project-construction-licenses',
  templateUrl: './license-project-construction-licenses.component.html',
  styleUrls: ['./license-project-construction-licenses.component.scss']
})
export class LicenseProjectConstructionLicensesComponent implements OnInit {

  constructionLicenses!: licenseProjectConstructionLicenses[];
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;

  constructor(private _licenseDetailsService: LicenseDetailsService) { }

  ngOnInit(): void {
    this.updateConstructionLicenset()
  }
  private updateConstructionLicenset(): void {
    this.subscriptions.push(
      this._licenseDetailsService.licenseProjectConstructionLicenses$.subscribe((res: licenseProjectConstructionLicenses[] | null) => {
        if (res && res.length) {
          this.constructionLicenses = res;
          this.setBefor7();
        }
      })
    )
  }

  setBefor7() {
    this.constructionLicenses.forEach(licenseProjectConstructionLicenses => {
      licenseProjectConstructionLicenses.before7 = new Date(licenseProjectConstructionLicenses.issueOn) < new Date(2017, 6, 1);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }


  localization = {
    constructionLicensetype: 'نوع الرخص الإنشائيه',
    issueOn: 'تاريخ الرخصه',
    licenseFile: 'ملفات الرخصه الإنشائيه',
    licenseNumber: 'رقم الرخصه',
    before7: 'قبل 1-7',
    after7: 'بعد 1-7',
  };

}

