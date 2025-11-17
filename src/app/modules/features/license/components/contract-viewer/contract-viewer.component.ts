import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contract-viewer',
  templateUrl: './contract-viewer.component.html',
  styleUrls: ['./contract-viewer.component.scss']
})
export class ContractViewerComponent implements OnInit, OnDestroy {
  contractFileId: string = '';

  retryLoadContract = () => this.loadContractPdf();

  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    console.log('ContractViewerComponent initialized');

    // Get contract file ID from route params
    this.subscription.add(
      this.route.queryParams.subscribe(params => {
        this.contractFileId = params['fileId'] || '';
        if (!this.contractFileId) {
          console.error('No contract file ID provided');
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Navigate back to previous page
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * Load contract PDF (for retry callback)
   */
  loadContractPdf(): void {
    // Force reload by clearing and resetting the fileId
    if (this.contractFileId) {
      const tempId = this.contractFileId;
      this.contractFileId = '';
      setTimeout(() => {
        this.contractFileId = tempId;
      }, 100);
    }
  }
}
