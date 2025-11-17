import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-list-tabs',
  templateUrl: './buyer-list-tabs.component.html',
  styleUrls: ['./buyer-list-tabs.component.scss']
})
export class BuyerListTabsComponent implements OnInit {
  activeTabIndex: number = 0;

  tabs = [
    {
      title: 'سجل المشتريين',
      id: 'buyer-list',
      index: 0
    },
    // {
    //   title: 'إجماليات سجل المشترين وحدات قائمة',
    //   id: 'buyer-totals',
    //   index: 1
    // },
    // {
    //   title: 'الوحدات الملغتة والمعاد بيعها',
    //   id: 'cancelled-and-resold-units',
    //   index: 2
    // },
    // {
    //   title: 'الوحدات الملغاة',
    //   id: 'cancelled-units',
    //   index: 3
    // },
    // {
    //   title: 'الوحدات المنجزة',
    //   id: 'completed-units',
    //   index: 4
    // }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  updateActiveTabIndex(event: any): void {
    this.activeTabIndex = event.index;
  }
}
