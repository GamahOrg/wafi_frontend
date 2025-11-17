import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  LicenseProjectBusinessPaymentInstallmentModel,
  LicenseProjectBusinessPaymentModel
} from '../../models/business-payment.model';
import { LicenseDetailsService } from '../../services/license-details/license-details.service';

@Component({
  selector: 'app-view-business-payment-templates',
  templateUrl: './view-business-payment-templates.component.html',
  styleUrls: ['./view-business-payment-templates.component.scss']
})
export class ViewBusinessPaymentTemplatesComponent implements OnInit, OnDestroy {
  paymentInstallments: LicenseProjectBusinessPaymentInstallmentModel[] = [];
  paymentTemplates: LicenseProjectBusinessPaymentModel[] = [];
  selectedTemplate: LicenseProjectBusinessPaymentModel | null = null;
  selectedTemplateId: string | null = null;

  subscriptions: Subscription[] = [];

  constructor(private _licenseDetailService: LicenseDetailsService) {}

  ngOnInit(): void {
    this.updateEngineeringConsultants();
  }

  private updateEngineeringConsultants(): void {
    this.subscriptions.push(
      this._licenseDetailService.licenseProjectBusinessPaymentDto$.subscribe((res: LicenseProjectBusinessPaymentModel[] | null) => {
        if (res) {
          this.paymentTemplates = res as LicenseProjectBusinessPaymentModel[];
        }
      })
    )
  }

  selectTemplate(templateId: string): void {
    this.selectedTemplateId = templateId;
    this.selectedTemplate = this.paymentTemplates.find(t => t.id === templateId) || null;
    if (this.selectedTemplate?.paymentInstallments) {
      this.paymentInstallments = this.selectedTemplate.paymentInstallments || [];
    } else {
      this.paymentInstallments = [];
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}