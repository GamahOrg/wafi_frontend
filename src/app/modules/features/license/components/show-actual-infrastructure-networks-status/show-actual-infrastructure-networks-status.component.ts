import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { EngineeringSupervisionPlannedReportActualInfrastructureService } from '../../services/engineering-supervision-planned-report-actual-infrastructure.service';
import { ActualLicenseProjectInfrastructureNetworksStatusDto } from '../../dataModels/actual-license-project-infrastructure-networks-status-dto';

@Component({
  selector: 'app-show-actual-infrastructure-networks-status',
  templateUrl: './show-actual-infrastructure-networks-status.component.html',
  styleUrls: ['./show-actual-infrastructure-networks-status.component.scss']
})
export class ShowActualInfrastructureNetworksStatusComponent {
subscriptions: Subscription[] = [];
actualLicenseProjectInfrastructureNetworksStatus?:ActualLicenseProjectInfrastructureNetworksStatusDto;
showValidation: boolean = false;

  constructor(
    private _engineeringSupervisionPlannedReportActualInfrastructureService: EngineeringSupervisionPlannedReportActualInfrastructureService,
  ) { }

  ngOnInit(): void {
    this.getActualLicenseProjectInfrastructureNetworksStatus();
  }


 

  getActualLicenseProjectInfrastructureNetworksStatus() {
    this.subscriptions.push(
      this._engineeringSupervisionPlannedReportActualInfrastructureService.getActualLicenseProjectInfrastructureNetworksStatusDto().subscribe(res => {
        if (res) {
        
         this.actualLicenseProjectInfrastructureNetworksStatus=res as ActualLicenseProjectInfrastructureNetworksStatusDto; 
        }
      })
    )
  }


 
 
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
  }
}
