import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QualificationInstitutionalCapacityAndHrRequirementDto } from '../../../facilities/dataModels/qualificationInstitutionalCapacityAndHrRequirement.model';
import { RequestService } from '../../services/requests/request-service.service';
import { facilityDTO } from '../../dataModels/request-details.model';
import { CertifiedEngineerDto } from '../../../facilities/dataModels/certified-engineer-dto';

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
  certifiedEngineers: CertifiedEngineerDto[] | null = null;
  qualificationEngineers: CertifiedEngineerDto[] = [];
  courseEngineers: CertifiedEngineerDto[] = [];
  constructor(private _requestService: RequestService) { }

  ngOnInit(): void {
    this.updateQualificationAdditionInstitutionalCapacityAndHrRequirement();
    this.updateCertifiedFacilityEngineers();
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
  updateCertifiedFacilityEngineers() {

    this.subscriptions.push(
      this._requestService.CertifiedFacilityEngineers$.subscribe((res: CertifiedEngineerDto[] | null) => {

        this.certifiedEngineers = res ?? [];
        // Engineers with qualificationEngineerType = 1
        this.qualificationEngineers = this.certifiedEngineers.filter(
          x => x.qualificationEngineerType === 1
        );

        // Engineers with courses
        this.courseEngineers = this.certifiedEngineers.filter(
          x => x.hasCourses === true
        );
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
