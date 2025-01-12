import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { licenseProjectZoneCaculations } from '../../models/license-project-zone-caculations';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-project-units-statement',
  templateUrl: './project-units-statement.component.html',
  styleUrls: ['./project-units-statement.component.scss']
})
export class ProjectUnitsStatementComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  LicenseProjectZoneCaculations: licenseProjectZoneCaculations | null = null;
  localization = {
    title: 'بيان وحدات المشروع',
    totalZonesCount: "إجمالي عدد الزون بالمشروع",
    totalBuildingsCount: "إجمالي عدد العمائر بالمشروع",
    totalBlocksCount: "إجمالي عدد البلوكات بالمشروع",
    totalCountOfEveryUnit: "العدد الإجمالي لكل نوع من أنواع الوحدات",
    totalUnitsCount: "إجمالي عدد وحدات المشروع"
  }
  constructor(private _licenseDetailsService: LicenseDetailsService) { }
  ngOnInit(): void {
    this.observeLicenseProjectZoneCaculations()
  }
  observeLicenseProjectZoneCaculations() {
    this.subscriptions.push(
      this._licenseDetailsService.licenseProjectZoneCaculations$.subscribe((res: licenseProjectZoneCaculations | null) => {
        this.LicenseProjectZoneCaculations = res
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
