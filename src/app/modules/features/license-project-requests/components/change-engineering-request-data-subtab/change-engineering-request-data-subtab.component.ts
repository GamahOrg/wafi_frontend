import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChangeEngineeringRequestFullDetailsDto } from '../../models/change-engineering-request';
import { ChangeEngineeringPlanService } from '../../services/change-engineering-plan.service';
import { ProjectRequestLocalStorageService } from '../../services/project-request-local-storage.service';

@Component({
  selector: 'app-change-engineering-request-data-subtab',
  templateUrl: './change-engineering-request-data-subtab.component.html',
  styleUrls: ['./change-engineering-request-data-subtab.component.scss'],
})
export class ChangeEngineeringRequestDataSubtabComponent implements OnInit, OnDestroy {
  requestDetails: ChangeEngineeringRequestFullDetailsDto | null = null;
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;

  constructor(
    private _changeEngineeringPlanService: ChangeEngineeringPlanService,
    private _projectRequestLocalStorageService: ProjectRequestLocalStorageService,
  ) {}

  ngOnInit(): void {
    const requestId = this._projectRequestLocalStorageService.getSelectedProjectLicenseRequestIdFromLocalStorage();
    if (requestId) {
      this.subscriptions.push(
        this._changeEngineeringPlanService.getDetailsById(requestId).subscribe(res => {
          this.requestDetails = res;
        })
      );
    }
  }

  getStatusClass(statusId?: number | null): string {
    switch (statusId) {
      case 2: case 5: return 'green';
      case 1: case 4: return 'orange';
      case 3: return 'red';
      default: return '';
    }
  }

  ngOnDestroy(): void { this.subscriptions.forEach(s => s.unsubscribe()); }
}