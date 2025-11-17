import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetProjectUnitDetailsResponseDto } from '../../models/real-state-developer-dto';
import { RealStateDeveloperService } from '../../services/real-state-developer.service';
import { ContractNavigationService } from '../../services/contract-navigation.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.scss']
})
export class UnitDetailsComponent implements OnInit {
  @Input() unitCode: string = '';
  @Input() showAsModal: boolean = false;
  baseUrl = `${environment.baseURL}/`;

  unitDetails: GetProjectUnitDetailsResponseDto | null = null;
  loading = false;
  error: string | null = null;
  constructor(
    private realStateDeveloperService: RealStateDeveloperService,
    private router: Router,
    private route: ActivatedRoute,
    private contractNavigationService: ContractNavigationService
  ) {}

  ngOnInit(): void {
    if (!this.unitCode) {
      this.unitCode = this.route.snapshot.paramMap.get('unitCode') || '';
    }
    if (this.unitCode) {
      this.loadUnitDetails();
    }
  }

  loadUnitDetails(): void {
    this.loading = true;
    this.error = null;

    this.realStateDeveloperService.getUnitDetails(this.unitCode).subscribe({
      next: (response) => {
        if (response.isDone && response.data) {
          this.unitDetails = response.data;
        } else {
          this.error = 'فشل في تحميل تفاصيل الوحدة';
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message || 'حدث خطأ أثناء تحميل البيانات';
        this.loading = false;
        console.error('Error loading unit details:', error);
      }
    });
  }

  addNewContract(): void {
    // Navigate to add contract page
    this.router.navigate(['/wafi/license/add-contract', this.unitCode]);
  }

  viewContractDetails(contract: any): void {
    // Store contract data in service
    this.contractNavigationService.setContractData({
      contractId: contract.contractId,
      contractFileId: contract.contractFileId || '',
      unitCode: this.unitCode
    });

    // Navigate to contract details using Configuration
    this.router.navigate([
      Configuration.modules.wafi,
      Configuration.modules.license,
      Configuration.pages.license.viewContract,
      contract.contractId
    ]);
  }

  retry(): void {
    this.loadUnitDetails();
  }

  closeModal(): void {
    // Emit close event if used as modal
  }

}