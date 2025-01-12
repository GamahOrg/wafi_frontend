import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RequestService } from '../../services/requests/request-service.service';
import { facilityDTO } from '../../dataModels/request-details.model';
import { QualificationQualificatedAccountantDto } from '../../../facilities/dataModels/qualification-qualificated-accountant-dto';

@Component({
  selector:
    'app-request-accountants-completed-wafi-training-program-for-accounting-supervision',
  templateUrl:
    './request-accountants-completed-wafi-training-program-for-accounting-supervision.component.html',
  styleUrls: [
    './request-accountants-completed-wafi-training-program-for-accounting-supervision.component.scss',
  ],
})
export class RequestAccountantsCompletedWafiTrainingProgramForAccountingSupervisionComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  QualificationQualificatedAccountants: QualificationQualificatedAccountantDto[] | null = null;

  constructor(private _requestService: RequestService) { }
  ngOnInit(): void {
    this.updateQualificationQualificatedAccountants();
  }
  updateQualificationQualificatedAccountants() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (res && res[0].qualificationQualificatedAccountants) {
    //         this.QualificationQualificatedAccountants =
    //           res[0].qualificationQualificatedAccountants;
    //       }
    //     })
    // );
    this.subscriptions.push(
      this._requestService.AccountantsCompletedWafiTrainingProgramForAccountingSupervision$.subscribe((res: QualificationQualificatedAccountantDto[] | null) => {
        this.QualificationQualificatedAccountants = res;
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
