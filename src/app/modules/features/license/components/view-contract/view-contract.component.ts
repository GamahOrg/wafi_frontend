import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RealStateDeveloperService } from '../../services/real-state-developer.service';
import { ContractNavigationService } from '../../services/contract-navigation.service';
import { GetProjectUnitContractDetailsResponseDto } from '../../models/real-state-developer-dto';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html',
  styleUrls: ['./view-contract.component.scss']
})
export class ViewContractComponent implements OnInit, OnDestroy {
  contractId: string = '';
  contractFileId: string = '';
  baseUrl = `${environment.baseURL}/`;
  isLoadingPdf: boolean = false;
  pdfLoadError: string = '';
  private subscription: Subscription = new Subscription();
  retryLoadContract = () => this.loadContractPdf();

  constructor(
    private realStateDeveloperService: RealStateDeveloperService,
    private contractNavigationService: ContractNavigationService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.contractId = this.route.snapshot.paramMap.get('contractId') || '';

    // Try to get contract data from service first
    const contractData = this.contractNavigationService.getContractData();

    if (contractData && contractData.contractId === this.contractId) {
      // Use data from service - set file ID directly
      this.contractFileId = contractData.contractFileId;
    } else {
      // If no data from service, load from API
      this.loadContractPdf();
    }
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.subscription.unsubscribe();
  }

  loadContractPdf(): void {
    this.isLoadingPdf = true;
    this.pdfLoadError = '';
    this.contractFileId = '';

    this.subscription.add(
      this.realStateDeveloperService.getContractDetails(this.contractId).subscribe({
        next: (response) => {
          this.isLoadingPdf = false;

          if (response.isDone && response.data) {
            // Use contractFileId if available
            if (response.data.contractFileId) {
              this.contractFileId = response.data.contractFileId;
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

  goBack(): void {
    this.location.back();
  }
}
