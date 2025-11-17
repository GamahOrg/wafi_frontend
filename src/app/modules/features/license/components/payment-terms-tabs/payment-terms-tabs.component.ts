import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-payment-terms-tabs',
  templateUrl: './payment-terms-tabs.component.html',
  styleUrls: ['./payment-terms-tabs.component.scss']
})
export class PaymentTermsTabsComponent implements OnInit {
  activeTabIndex: number = 0;

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

  constructor(private location: Location) { }

  ngOnInit(): void {
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
