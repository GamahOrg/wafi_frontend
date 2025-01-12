import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QualifiedEngineersDto } from '../../../facilities/dataModels/qualified-engineers-dto';
import { RequestService } from '../../services/requests/request-service.service';
import { facilityDTO } from '../../dataModels/request-details.model';

@Component({
  selector:
    'app-request-engineers-with-sufficient-training-for-the-engineering-consultant',
  templateUrl:
    './request-engineers-with-sufficient-training-for-the-engineering-consultant.component.html',
  styleUrls: [
    './request-engineers-with-sufficient-training-for-the-engineering-consultant.component.scss',
  ],
})
export class RequestEngineersWithSufficientTrainingForTheEngineeringConsultantComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  QualifiedEngineers: QualifiedEngineersDto[] | null = null;

  constructor(private _requestService: RequestService) { }

  ngOnInit(): void {
    this.updateQualifiedEngineers();
  }

  updateQualifiedEngineers() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (res && res[0].qualificationQualificatedEngineers) {
    //         this.QualifiedEngineers = res[0].qualificationQualificatedEngineers;
    //       }
    //     })
    // );
    this.subscriptions.push(
      this._requestService.EngineersWithSufficientTrainingForTheEngineeringConsultan$.subscribe((res: QualifiedEngineersDto[] | null) => {
        this.QualifiedEngineers = res;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
