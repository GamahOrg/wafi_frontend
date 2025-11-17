import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseRequestApprovalsService } from '../../services/license-request-approvals/license-request-approvals.service';
import { LicenseProjectCharteredAccountantApproval } from '../../dataModels/license-project-chartered-accountant-approval.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-license-project-chartered-accountant-approval',
  templateUrl: './license-project-chartered-accountant-approval.component.html',
  styleUrls: ['./license-project-chartered-accountant-approval.component.scss']
})
export class LicenseProjectCharteredAccountantApprovalComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  projectCharteredData!: LicenseProjectCharteredAccountantApproval | null;
  baseUrl = `${environment.baseURL}/`;

  constructor(private _licenseRequestApprovalsService: LicenseRequestApprovalsService) { }

  ngOnInit(): void {
    this.getLicenseprojectCharteredData()
  }

  agreementFile: any = null;

  getLicenseprojectCharteredData() {
    this.subscriptions.push(
      this._licenseRequestApprovalsService.getLicenseProjectCharteredAccountantApprovalBS().subscribe(res => {
        console.log('=== Full Response ===', res);
        console.log('agreementFile from response:', res?.agreementFile);
        console.log('agreementFile.id:', res?.agreementFile?.id);
        console.log('agreementFile.filePath:', res?.agreementFile?.filePath);
        console.log('agreementFile.fileDescription:', res?.agreementFile?.fileDescription);

        this.projectCharteredData = res;

        // Check if agreementFile exists (more lenient check)
        if (res?.agreementFile) {
          this.agreementFile = res.agreementFile;
          console.log('✓ Agreement file assigned:', this.agreementFile);
        } else {
          this.agreementFile = null;
          console.log('✗ No agreement file in response');
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
