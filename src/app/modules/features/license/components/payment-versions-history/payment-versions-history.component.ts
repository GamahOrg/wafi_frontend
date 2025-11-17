import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectBusinessPaymentService } from '../../services/business-payment.service';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { LicenseProjectBusinessPaymentVersionDto } from '../../models/business-payment.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-versions-history',
  templateUrl: './payment-versions-history.component.html',
  styleUrls: ['./payment-versions-history.component.scss']
})
export class PaymentVersionsHistoryComponent implements OnInit, OnDestroy {
  @Output() onClose = new EventEmitter<void>();

  paymentVersions: LicenseProjectBusinessPaymentVersionDto[] = [];
  loading = false;
  subscriptions: Subscription[] = [];
  expandedVersionIds: Set<string> = new Set();

  constructor(
    private licenseProjectBusinessPaymentService: LicenseProjectBusinessPaymentService,
    private sharedLicenseProjectService: SharedLicenseProjectService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadPaymentVersions();
  }

  loadPaymentVersions(): void {
    this.loading = true;

    const projectId = this.sharedLicenseProjectService.getLicenseProjectIdStorage();

    if (!projectId) {
      console.warn('No project ID found');
      this.toastrService.error('لا يوجد مشروع محدد');
      this.loading = false;
      return;
    }

    const subscription = this.licenseProjectBusinessPaymentService
      .getLicenseProjectBusinessPaymentVersions(projectId)
      .subscribe({
        next: (versions) => {
          if (versions) {
            this.paymentVersions = versions;
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading payment versions:', error);
          this.toastrService.error('فشل في تحميل سجل خطط الدفع');
          this.loading = false;
        }
      });

    this.subscriptions.push(subscription);
  }

  toggleVersion(versionId: string): void {
    if (this.expandedVersionIds.has(versionId)) {
      this.expandedVersionIds.delete(versionId);
    } else {
      this.expandedVersionIds.add(versionId);
    }
  }

  isExpanded(versionId: string): boolean {
    return this.expandedVersionIds.has(versionId);
  }

  close(): void {
    this.onClose.emit();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
