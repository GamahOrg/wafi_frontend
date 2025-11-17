import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject, takeUntil, finalize, Subscription } from 'rxjs';
import { RealStateDeveloperService } from '../../services/real-state-developer.service';
import { GetProjectUnitContractDetailsResponseDto } from '../../models/real-state-developer-dto';

@Component({
  selector: 'app-contract-readonly-view',
  templateUrl: './contract-readonly-view.component.html',
  styleUrls: ['./contract-readonly-view.component.scss']
})
export class ContractReadonlyViewComponent implements OnInit, OnDestroy {
  contractDetails: GetProjectUnitContractDetailsResponseDto | null = null;
  contractId: string = '';
  activeTab: 'unit-details' | 'sales-contract' = 'unit-details';
  isLoadingPdf: boolean = false;
  pdfLoadError: string = '';
  contractFileId: string = '';
  retryLoadContract = () => this.loadContractPdf();
  private subscription: Subscription = new Subscription();

  // UI state properties
  isLoading: boolean = false;
  errorMessage: string = '';

  // Subscription management
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private realEstateService: RealStateDeveloperService
  ) {}

  ngOnInit(): void {
    this.initializeComponent();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
 loadContractPdf(): void {
    // this.isLoadingPdf = true;
    this.pdfLoadError = '';
    this.contractFileId = '';

    this.subscription.add(
      this.realEstateService.getContractDetails(this.contractId).subscribe({
        next: (response) => {
          this.isLoadingPdf = false;

          if (response.isDone && response.data) {
            // Use contractFileId if available
            if (response.data.contractFileId) {
              this.contractFileId =  response.data.contractFileId;
            } else {
              this.pdfLoadError = 'معرف الملف غير متوفر';
            }
          } else {
            this.pdfLoadError = 'فشل في تحميل العقد';
          }
        },
        error: (error) => {
          this.isLoadingPdf = false;
          this.pdfLoadError = error.message || 'حدث خطأ أثناء تحميل العقد';
          console.error('Error loading contract:', error);
        }
      })
    );
  }
  /**
   * Initialize component and load contract details
   */
  private initializeComponent(): void {
    this.contractId = this.route.snapshot.paramMap.get('id') || '';

    if (!this.contractId) {
      this.errorMessage = 'لم يتم العثور على معرف العقد';
      return;
    }

    this.loadContractDetails();
  }

  /**
   * Load readonly contract details using GetContractDetails API
   */
  loadContractDetails(): void {
    if (!this.contractId) {
      this.errorMessage = 'معرف العقد غير موجود';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.realEstateService
      .getContractDetails(this.contractId)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (res) => {
          if (res?.data) {
            this.contractDetails = res.data as GetProjectUnitContractDetailsResponseDto;
            if(this.contractDetails)
              this.loadContractPdf()
          } else {
            this.errorMessage = 'لم يتم العثور على تفاصيل العقد';
          }
        },
        error: (error) => {
          console.error('Error loading contract details:', error);
          this.errorMessage = 'حدث خطأ أثناء تحميل تفاصيل العقد';
        }
      });
  }

  /**
   * Switch between tabs
   * @param tab - The tab to switch to
   */
  switchTab(tab: 'unit-details' | 'sales-contract'): void {
    this.activeTab = tab;
    this.scrollToTop();
  }

  /**
   * Check if a tab is active
   * @param tab - The tab to check
   * @returns boolean indicating if the tab is active
   */
  isActiveTab(tab: 'unit-details' | 'sales-contract'): boolean {
    return this.activeTab === tab;
  }

  /**
   * Scroll to top of the page
   */
  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Navigate back to previous page
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * Format currency value
   * @param value - The value to format
   * @returns formatted string
   */
  formatCurrency(value: number): string {
    if (!value) return '-';
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR'
    }).format(value);
  }

  /**
   * Format date value
   * @param date - The date to format
   * @returns formatted date string
   */
  formatDate(date: string | Date): string {
    if (!date) return '-';
    return new Date(date).toLocaleDateString('ar-SA');
  }
}
