import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SupervisionFeesService } from '../../services/supervision-fees.service';

@Component({
  selector: 'app-supervision-fee-invoice-details',
  templateUrl: './supervision-fee-invoice-details.component.html',
  styleUrls: ['./supervision-fee-invoice-details.component.scss'],
})
export class SupervisionFeeInvoiceDetailsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  details: any = null;
  isLoading = true;

  get isLand(): boolean {
    return this.details?.projectUnitTypeId === 1;
  }

  get unitLabel(): string {
    return this.isLand ? 'الأراضي' : 'الوحدات';
  }

  constructor(private _supervisionFeesService: SupervisionFeesService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this._supervisionFeesService.selectedInvoiceId$.subscribe((calcId) => {
        if (calcId) {
          this.loadDetails(calcId);
        }
      })
    );
  }

  loadDetails(calcId: string): void {
    this.isLoading = true;
    this.subscriptions.push(
      this._supervisionFeesService.getInvoiceDetails(calcId).subscribe((res) => {
        this.details = res;
        this.isLoading = false;
      })
    );
  }

  getStatusClass(status: number): string {
    switch (status) {
      case 1: return 'green';
      case 2: return 'red';
      case 3: return 'black';
      default: return 'orange';
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
