import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { DropDownSubUnitTypeDto } from '../../dataModels/drop-down-name.dto';
import { LicenseProjectDetachedUnitRequestDetails } from '../../dataModels/license-project-detached-unit.model';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-license-project-detachedt-units',
  templateUrl: './license-project-detachedt-units.component.html',
  styleUrls: ['./license-project-detachedt-units.component.scss']
})
export class LicenseProjectDetachedtUnitsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  detachedUnits: LicenseProjectDetachedUnitRequestDetails[] | null = null;
  unitTypeLookup: DropDownSubUnitTypeDto[] | null = null
  localization = {
    title: 'وحدات المشروع',
    subUnitsType: "اضاقة أنواع الوحدات",
    subUnitCount: "عدد وحدات",
    actions: "إجراءات",
    errorMsg: "حدث خطأ"
  };

  constructor(
    private _licenseDetailsService: LicenseDetailsService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.subscriptions.push(
      this._licenseDetailsService.licenseProjectDetachedUnit$
        .subscribe(
          res => {
            this.detachedUnits = res as LicenseProjectDetachedUnitRequestDetails[] | null;
          }
        )
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
