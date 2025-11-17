import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { CharteredAccountProjectService } from '../../services/chareted-account-project-service';
import { CharteredAccountProjectStatistics, LicenseProjectBuyerTotalDto } from '../../models/chartered-account-project-statistics.model';

interface StatItem {
  label: string;
  value: string;
  isCurrency?: boolean;
}

@Component({
  selector: 'app-chartered-account-project-total',
  templateUrl: './chartered-account-project-total.component.html',
  styleUrls: ['./chartered-account-project-total.component.scss'],
})
export class CharteredAccountProjectTotalComponent implements OnInit {
  subscriptions: Subscription[] = [];
  licenseProjectId: string | null = '';
  isLoading: boolean = false;
  allStatistics: StatItem[] = [];

  constructor(
    private _sharedLicenseProjectService: SharedLicenseProjectService,
    private _charteredAccountProjectService: CharteredAccountProjectService
  ) {}

  ngOnInit(): void {
    this.getLicenseProjectId();
    if (this.licenseProjectId) {
      this.loadStatistics();
    }
  }

  private getLicenseProjectId(): void {
    this.licenseProjectId =
      this._sharedLicenseProjectService.getLicenseProjectIdStorage();
  }

  private loadStatistics(): void {
    this.isLoading = true;
    this.subscriptions.push(
      this._charteredAccountProjectService
        .GetProjectStatistics(this.licenseProjectId as string)
        .subscribe({
          next: (data: LicenseProjectBuyerTotalDto) => {
            this.prepareStatistics(data);
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error loading statistics:', error);
            this.isLoading = false;
            // Load default values on error
            this.loadDefaultStatistics();
          },
        })
    );
  }

  private prepareStatistics(data: LicenseProjectBuyerTotalDto): void {
    // Create flattened array of statistics for 2-column grid display
    // Items are added in pairs (right column, left column) to match the design
    this.allStatistics = [
      {
        label: 'عدد الوحدات المباعة',
        value: data.totalSoldUnitsCount.toString(),
        isCurrency: false,
      },
      {
        label: 'قيمة الوحدات المباعة',
        value: data.totalSoldUnitsValue.toString(),
        isCurrency: true,
      },
      {
        label: 'إجمالي ضريبة التصرفات العقارية (0.05)',
        value: data.totalSoldUnitsValue.toString(),
        isCurrency: true,
      },
      {
        label: 'إجمالي قيمة الوحدات شاملة ضريبة التصرفات العقارية',
        value: data.totalSoldUnitsValueIncludingTax.toString(),
        isCurrency: true,
      },
      {
        label: 'إجمالي المبلغ المتبقي من قيمة الوحدات',
        value: data.totalRemainingAmountOfUnitsValue.toString(),
        isCurrency: true,
      },
      {
        label: 'مبلغ الإشراف',
        value: data.totalSupervisionAmount.toFixed(2).toString(),
        isCurrency: true,
      },
      {
        label: 'أعلى سعر بيع',
        value: (data.highestSalePrice).toString(),
        isCurrency: true,
      },
      {
        label: 'أقل سعر بيع',
        value: (data.lowestSalePrice).toString(),
        isCurrency: true,
      },
      {
        label: 'متوسط سعر بيع',
        value: (data.averageSalePrice).toString(),
        isCurrency: true,
      },
      {
        label: 'متوسط سعر المتر',
        value: (data.averageSalePrice).toString(),
        isCurrency: true,
      },
      {
        label: 'الوسيط (Median)',
        value: (data.medianSalePrice).toString(),
        isCurrency: true,
      },
    ];
  }

  private loadDefaultStatistics(): void {
    // Fallback to empty statistics
    this.allStatistics = [
      { label: 'عدد الوحدات المباعة', value: '0', isCurrency: false },
      { label: 'قيمة الوحدات المباعة', value: '0', isCurrency: true },
      { label: 'إجمالي ضريبة التصرفات العقارية (0.05)', value: '0', isCurrency: true },
      { label: 'إجمالي قيمة الوحدات شاملة ضريبة التصرفات العقارية', value: '0', isCurrency: true },
      { label: 'إجمالي المبلغ المتبقي من قيمة الوحدات', value: '0', isCurrency: true },
      { label: 'مبلغ الإشراف', value: '0', isCurrency: true },
      { label: 'أعلى سعر بيع', value: '0', isCurrency: true },
      { label: 'أقل سعر بيع', value: '0', isCurrency: true },
      { label: 'متوسط سعر بيع', value: '0', isCurrency: true },
      { label: 'متوسط سعر المتر', value: '0', isCurrency: true },
      { label: 'الوسيط (Median)', value: '0', isCurrency: true },
    ];
  }

  private formatCurrency(value: number | undefined): string {
    if (!value || value === 0) return '0';
    return value.toLocaleString('ar-SA');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
  
}
