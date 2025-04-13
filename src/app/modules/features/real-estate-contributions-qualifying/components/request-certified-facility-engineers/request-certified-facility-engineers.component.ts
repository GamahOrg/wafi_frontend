import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CertifiedEngineerDto } from '../../../facilities/dataModels/certified-engineer-dto';
import { RequestService } from '../../services/requests/request-service.service';
import { facilityDTO } from '../../dataModels/request-details.model';

@Component({
  selector: 'app-request-certified-facility-engineers',
  templateUrl: './request-certified-facility-engineers.component.html',
  styleUrls: ['./request-certified-facility-engineers.component.scss'],
})
export class RequestCertifiedFacilityEngineersComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  certifiedEngineers: CertifiedEngineerDto[] | null = null;

  constructor(private _requestService: RequestService) { }
  ngOnInit(): void {
    this.updateCertifiedFacilityEngineers();
  }
  updateCertifiedFacilityEngineers() {
    // this.subscriptions.push(
    //   this._requestService
    //     .getFacility()
    //     .subscribe((res: facilityDTO[] | null) => {
    //       if (res && res[0].qualificationCertifiedEngineers) {
    //         this.certifiedEngineers = res[0].qualificationCertifiedEngineers;
    //       }
    //     })
    // );
    this.subscriptions.push(
      this._requestService.CertifiedFacilityEngineers$.subscribe((res: CertifiedEngineerDto[] | null) => {
        
        this.certifiedEngineers = res;
      })
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
