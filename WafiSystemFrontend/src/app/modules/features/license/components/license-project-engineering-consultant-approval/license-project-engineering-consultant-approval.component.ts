import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseRequestApprovalsService } from '../../services/license-request-approvals/license-request-approvals.service';
import { LicenseProjectEngineeringConsultantApproval } from '../../dataModels/license-project-engineering-consultant-approval.model';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-license-project-engineering-consultant-approval',
  templateUrl: './license-project-engineering-consultant-approval.component.html',
  styleUrls: ['./license-project-engineering-consultant-approval.component.scss']
})
export class LicenseProjectEngineeringConsultantApprovalComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  engineeringConsultantApproval!: LicenseProjectEngineeringConsultantApproval;
  baseUrl = `${environment.baseURL}/`;
  constructor(private _licenseRequestApprovalsService: LicenseRequestApprovalsService) { }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.subscriptions.push(
      this._licenseRequestApprovalsService.getLicenseProjectEngineeringConsultantApprovalBS().subscribe((obj) => {
        this.engineeringConsultantApproval = obj as LicenseProjectEngineeringConsultantApproval;
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}










