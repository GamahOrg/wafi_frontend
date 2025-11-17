import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-developer-approval-details',
  templateUrl: './developer-approval-details.component.html',
  styleUrls: ['./developer-approval-details.component.scss']
})
export class DeveloperApprovalDetailsComponent implements OnInit, OnDestroy {
  approvalId: string | null = null;
  approvalDetails: any = null;
  isLoading: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.approvalId = this.route.snapshot.paramMap.get('id');
    if (this.approvalId) {
      this.loadApprovalDetails();
    }
  }

  loadApprovalDetails(): void {
    this.isLoading = true;
    // TODO: Implement API call to load approval details
    this.isLoading = false;
  }

  goBack(): void {
    this.router.navigate(['/license/developer-approvals-list']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
