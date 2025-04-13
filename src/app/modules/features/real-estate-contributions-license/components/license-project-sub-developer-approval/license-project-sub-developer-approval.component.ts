import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import { LicenseRequestApprovalsService } from '../../services/license-request-approvals/license-request-approvals.service';
import { LicenseProjectSubDeveloperApproval } from '../../dataModels/license-project-sub-developer-approval.model';
import { environment } from 'src/environments/environment';
import { LicenseRequestApprovalsService } from '../../services/license-request-approval/license-request-approvals.service';

@Component({
  selector: 'app-license-project-sub-developer-approval',
  templateUrl: './license-project-sub-developer-approval.component.html',
  styleUrls: ['./license-project-sub-developer-approval.component.scss']
})
export class LicenseProjectSubDeveloperApprovalComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  subDeveloperData! : LicenseProjectSubDeveloperApproval | null
  baseUrl = `${environment.baseURL}/`;

  constructor(private _licenseRequestApprovalsService: LicenseRequestApprovalsService) { }
  
  ngOnInit(): void {
    this.getprojectsub()
   }
  
  getprojectsub(){
    this.subscriptions.push(
      this._licenseRequestApprovalsService.getLicenseProjectSubDeveloperApprovalBS().subscribe(res=>{
        this.subDeveloperData = res
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}