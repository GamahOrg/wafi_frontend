import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto } from '../../dataModels/license-project-engineering-status-of-funds-required-from-entities-dto';
import { LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService } from '../../services/license-project-engineering-status-of-funds-required-from-entities.service';

@Component({
  selector: 'app-show-design-phase-credits',
  templateUrl: './show-design-phase-credits.component.html',
  styleUrls: ['./show-design-phase-credits.component.scss']
})
export class ShowDesignPhaseCreditsComponent {
 subscriptions: Subscription[] = [];
  licenseProjectEngineeringStatusOfFundsRequiredFromEntities?:LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto;
  
    constructor(
      private _licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService: LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService,
    ) { }
  
    ngOnInit(): void {
      this.getLicenseProjectEngineeringStatusOfFundsRequiredFromEntities();
    }
  
  
    
  
      getLicenseProjectEngineeringStatusOfFundsRequiredFromEntities() {
      this.subscriptions.push(
        this._licenseProjectEngineeringStatusOfFundsRequiredFromEntitiesService.getLicenseProjectEngineeringStatusOfFundsRequiredFromEntities().subscribe(res => {
          if (res) {
          debugger;
           this.licenseProjectEngineeringStatusOfFundsRequiredFromEntities=res as LicenseProjectEngineeringStatusOfFundsRequiredFromEntitiesDto; 
          
          }
        })
      )
    }
  
 

  
  
}
