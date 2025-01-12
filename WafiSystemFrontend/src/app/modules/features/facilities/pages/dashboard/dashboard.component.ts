import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { CustomerDashBoardDto } from '../../dataModels/customer-dash-board-dto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  customerDashBoard?:CustomerDashBoardDto;
  subscriptions: Subscription[] = [];
  constructor( private _dashboardService: DashboardService) { }

  ngOnInit(): void {
    this._dashboardService.getCustomerDashboardData().subscribe((res) => {
      this.customerDashBoard = res as CustomerDashBoardDto;
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
