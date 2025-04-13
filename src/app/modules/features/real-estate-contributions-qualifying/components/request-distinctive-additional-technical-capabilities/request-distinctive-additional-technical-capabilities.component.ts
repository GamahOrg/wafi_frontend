import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdditionTechnicalCapabilitiesRequirementsDto } from '../../../facilities/dataModels/additionTechnicalCapabilitiesRequirements.model';
import { RequestService } from '../../services/requests/request-service.service';
import { facilityDTO } from '../../dataModels/request-details.model';

@Component({
  selector: 'app-request-distinctive-additional-technical-capabilities',
  templateUrl:
    './request-distinctive-additional-technical-capabilities.component.html',
  styleUrls: [
    './request-distinctive-additional-technical-capabilities.component.scss',
  ],
})
export class RequestDistinctiveAdditionalTechnicalCapabilitiesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  additionTechnicalCapability: AdditionTechnicalCapabilitiesRequirementsDto | null =
    null;
  constructor(private _requestService: RequestService) { }

  ngOnInit(): void {
    this.updateadditionTechnicalCapability();
  }

  updateadditionTechnicalCapability() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (res && res[0].additionTechnicalCapabilitiesRequirements)
    //         this.additionTechnicalCapability =
    //           res[0].additionTechnicalCapabilitiesRequirements[0];
    //     })
    // );
    this.subscriptions.push(
      this._requestService.DistinctiveAdditionalTechnicalCapabilities$.subscribe((res: AdditionTechnicalCapabilitiesRequirementsDto[] | null) => {
        if (res) this.additionTechnicalCapability = res[0];
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
