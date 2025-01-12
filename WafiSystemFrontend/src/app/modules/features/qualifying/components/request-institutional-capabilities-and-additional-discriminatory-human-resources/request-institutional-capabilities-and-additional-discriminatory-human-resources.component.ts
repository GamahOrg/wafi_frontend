import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestService } from '../../services/requests/request-service.service';
import { QualificationAdditionInstitutionalCapacityAndHrRequirementDto } from '../../../facilities/dataModels/qualification-addition-institutional-capacity-and-hr-requirement-dto';
import { facilityDTO } from '../../dataModels/request-details.model';

@Component({
  selector:
    'app-request-institutional-capabilities-and-additional-discriminatory-human-resources',
  templateUrl:
    './request-institutional-capabilities-and-additional-discriminatory-human-resources.component.html',
  styleUrls: [
    './request-institutional-capabilities-and-additional-discriminatory-human-resources.component.scss',
  ],
})
export class RequestInstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResourcesComponent
  implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  QualificationAdditionInstitutionalCapacityAndHrRequirement: QualificationAdditionInstitutionalCapacityAndHrRequirementDto | null = null;

  constructor(private _requestService: RequestService) { }

  ngOnInit(): void {
    this.updateQualificationAdditionInstitutionalCapacityAndHrRequirement();
  }

  updateQualificationAdditionInstitutionalCapacityAndHrRequirement() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (
    //         res &&
    //         res[0].qualificationAdditionInstitutionalCapacityAndHrRequirements
    //       )
    //         this.QualificationAdditionInstitutionalCapacityAndHrRequirement =
    //           res[0].qualificationAdditionInstitutionalCapacityAndHrRequirements[0];
    //     })
    // );
    this.subscriptions.push(
      this._requestService.InstitutionalCapabilitiesAndAdditionalDiscriminatoryHumanResources$.subscribe((res: QualificationAdditionInstitutionalCapacityAndHrRequirementDto[] | null) => {
        if (res) this.QualificationAdditionInstitutionalCapacityAndHrRequirement = res[0];
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
