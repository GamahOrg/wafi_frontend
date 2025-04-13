import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';
import { LicenseProjectRealStateMarketerFullDto } from '../../models/LicenseProjectRealStateMarketerFullDto';
@Component({
  selector: 'app-license-request-marketer',
  templateUrl: './license-request-marketer.component.html',
  styleUrls: ['./license-request-marketer.component.scss']
})
export class LicenseRequestMarketerComponent implements OnInit,OnDestroy{
  LicenseProjectRealStateMarketers:LicenseProjectRealStateMarketerFullDto[]=[];
  subscriptions: Subscription[] = [];
  /**
   *
   */
  constructor(private _licenseDetailService: LicenseDetailsService) {}

  ngOnInit(): void {
    this.updateEngineeringConsultants();
  }
  private updateEngineeringConsultants(): void {
    
    this.subscriptions.push(
      this._licenseDetailService.licenseProjectRealStateMarketers$.subscribe((res: LicenseProjectRealStateMarketerFullDto[] | null) => {
        if (res) {
          
          this.LicenseProjectRealStateMarketers = res;
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
