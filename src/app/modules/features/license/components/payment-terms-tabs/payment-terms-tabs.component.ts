import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-terms-tabs',
  templateUrl: './payment-terms-tabs.component.html',
  styleUrls: ['./payment-terms-tabs.component.scss']
})
export class PaymentTermsTabsComponent implements OnInit {
  activeTabIndex: number = 0;
  isOpenedWhenComplated: boolean = false;

  tabs = [
    {
      title: 'البنود الإضافية',
      id: 'additional-terms',
      index: 0
    },
    {
      title: 'الدفعات المالية',
      id: 'business-payment',
      index: 1
    },

  ];

  constructor(
    private location: Location,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      this.isOpenedWhenComplated = params['isOpenedWhenComplated'] === 'true';
    });
  }

  /**
   * Navigate back to previous page
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * Set active tab
   */
  setActiveTab(index: number): void {
    this.activeTabIndex = index;
  }

  /**
   * Check if tab is active
   */
  isTabActive(index: number): boolean {
    return this.activeTabIndex === index;
  }
}
