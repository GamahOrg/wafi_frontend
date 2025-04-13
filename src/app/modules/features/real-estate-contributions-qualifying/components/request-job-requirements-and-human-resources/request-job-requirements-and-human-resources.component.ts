import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QualificationInstitutionalCapacityAndHrRequirementDto } from '../../../facilities/dataModels/qualificationInstitutionalCapacityAndHrRequirement.model';
import { RequestService } from '../../services/requests/request-service.service';
import { facilityDTO } from '../../dataModels/request-details.model';

@Component({
  selector: 'app-request-job-requirements-and-human-resources',
  templateUrl: './request-job-requirements-and-human-resources.component.html',
  styleUrls: ['./request-job-requirements-and-human-resources.component.scss'],
})
export class RequestJobRequirementsAndHumanResourcesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  qualificationInstitutionalCapacityAndHrRequirement: QualificationInstitutionalCapacityAndHrRequirementDto | null =
    null;

  constructor(private _requestService: RequestService) {}
  ngOnInit(): void {
    this.updateQualificationAdditionInstitutionalCapacityAndHrRequirement();
  }
  updateQualificationAdditionInstitutionalCapacityAndHrRequirement() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (res && res[0].qualificationInstitutionalCapacityAndHrRequirements)
    //         this.qualificationInstitutionalCapacityAndHrRequirement =
    //           res[0].qualificationInstitutionalCapacityAndHrRequirements[0];
    //     })
    // );
    this.subscriptions.push(
      this._requestService.JobRequirementsAndHumanResources$.subscribe((res: QualificationInstitutionalCapacityAndHrRequirementDto[] | null) => {
       if (res) this.qualificationInstitutionalCapacityAndHrRequirement = res[0];
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
