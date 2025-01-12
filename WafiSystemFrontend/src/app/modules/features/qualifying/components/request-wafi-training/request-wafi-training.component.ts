import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WafiTrainingDto } from '../../../facilities/dataModels/wafi-training-dto';
import { RequestService } from '../../services/requests/request-service.service';
import { facilityDTO } from '../../dataModels/request-details.model';

@Component({
  selector: 'app-request-wafi-training',
  templateUrl: './request-wafi-training.component.html',
  styleUrls: ['./request-wafi-training.component.scss'],
})
export class RequestWafiTrainingComponent implements OnInit {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  // wafiTraining: WafiTrainingDto[] = [];
  wafiTraining: WafiTrainingDto | null = null
  constructor(private _requestService: RequestService) { }

  ngOnInit(): void {
    // this.updateWafiTraining();
    this.updateWafiTraining()
  }

  updateWafiTraining() {
    this.subscriptions.push(
      this._requestService.WafiTraining$.subscribe((res: WafiTrainingDto[] | null) => {
        if (res) this.wafiTraining = res[0];
      })
    )
  }
  
  // updateWafiTraining() {
  //   this.subscriptions.push(
  //     this._requestService
  //       .getFacility()
  //       .subscribe((res: facilityDTO[] | null) => {
  //         if (res) this.wafiTraining = res[0].qualificationWafiTrainings!;
  //       })
  //   );
  // }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
