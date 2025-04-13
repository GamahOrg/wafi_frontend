import { Component, OnInit, OnDestroy } from '@angular/core';
import { financialCapabilityResponse } from '../../dataModels/financial-capability.model';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { RequestService } from '../../services/requests/request-service.service';
import { facilityDTO } from '../../dataModels/request-details.model';

@Component({
  selector: 'app-request-financial-capabilities-requirements',
  templateUrl: './request-financial-capabilities-requirements.component.html',
  styleUrls: ['./request-financial-capabilities-requirements.component.scss'],
})
export class RequestFinancialCapabilitiesRequirementsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  financialCapability: financialCapabilityResponse | null = null;

  constructor(private _requestService: RequestService) { }
  
  ngOnInit(): void {
    this.updateFinancialCapability();
  }
  // updateFinancialCapability() {
  //   this.subscriptions.push(
  //     this._requestService
  //       .getFacility()
  //       .subscribe((res: facilityDTO[] | null) => {
  //         if (res && res[0].qualificationFinancialCapabilityRequirements)
  //           this.financialCapability =
  //             res[0].qualificationFinancialCapabilityRequirements[0];
  //       })
  //   );
  // }

  updateFinancialCapability() {
    this.subscriptions.push(
      this._requestService.FinancialCapabilitiesRequirements$.subscribe((res: financialCapabilityResponse[] | null) => {
        if (res) this.financialCapability = res[0];
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
