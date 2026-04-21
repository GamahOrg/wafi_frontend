import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QualificationTechnicalCapabilitiesRequirementFullDto } from '../../../facilities/dataModels/qualificationTechnicalCapabilitiesRequirement.model';
import { RequestService } from '../../services/requests/request-service.service';
import { facilityDTO } from '../../dataModels/request-details.model';

@Component({
  selector: 'app-request-technical-capabilities-requirements',
  templateUrl: './request-technical-capabilities-requirements.component.html',
  styleUrls: ['./request-technical-capabilities-requirements.component.scss'],
})
export class RequestTechnicalCapabilitiesRequirementsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  technicalCapabilities: QualificationTechnicalCapabilitiesRequirementFullDto | null = null;

  constructor(private _requestService: RequestService) { }

  ngOnInit(): void {
    this.updateTechnicalCapabilities();
  }

  updateTechnicalCapabilities() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (res && res[0].technicalCapabilitiesRequirements)
    //         this.technicalCapabilities =
    //           res[0].technicalCapabilitiesRequirements[0];
    //     })
    // );
    this.subscriptions.push(
      this._requestService.TechnicalCapabilitiesRequirements$.subscribe((res: QualificationTechnicalCapabilitiesRequirementFullDto[] | null) => {
        if (res) {
          this.technicalCapabilities = res[0];
          console.log("this.technicalCapabilities=", this.technicalCapabilities);
        } 
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
