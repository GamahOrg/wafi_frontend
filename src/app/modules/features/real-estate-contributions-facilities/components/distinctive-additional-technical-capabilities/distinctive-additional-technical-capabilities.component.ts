import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { PopupData } from 'src/app/shared/models/popup.model';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { environment } from 'src/environments/environment';
import { AdditionTechnicalCapabilitiesRequirementsDto } from '../../dataModels/additionTechnicalCapabilitiesRequirements.model';
import { AdditionTechnicalCapabilitiesRequirementsService } from '../../services/additionTechnicalCapabilitiesRequirements/addition-technical-capabilities-requirements.service';
import { DistinctiveAdditionalTechnicalCapabilitiesFormComponent } from '../distinctive-additional-technical-capabilities-form/distinctive-additional-technical-capabilities-form.component';
import { FileManagementService } from 'src/app/shared/services/fileManagement/file-management.service';

@Component({
  selector: 'app-distinctive-additional-technical-capabilities',
  templateUrl: './distinctive-additional-technical-capabilities.component.html',
  styleUrls: ['./distinctive-additional-technical-capabilities.component.scss']
})
export class DistinctiveAdditionalTechnicalCapabilitiesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  additionTechnicalCapability:AdditionTechnicalCapabilitiesRequirementsDto = new AdditionTechnicalCapabilitiesRequirementsDto();
  userData: customerResponse | null = null;

  constructor(private additionTechnicalCapabilitiesRequirementsService:AdditionTechnicalCapabilitiesRequirementsService,
     private _userDataService: UserDataService,private _popupService:PopupService,
     private _filemangementService : FileManagementService
     ) {  }


  ngOnInit() {
    this.obseveCustomerData();
    this.observeAdditionTechnicalCapabilityObj();
  }
  obseveCustomerData(): void{
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null)=>{
        this.userData = res
        if(this.userData){
          this.getFinancialCapabilities()
        }
      })
    )
  }
  getFinancialCapabilities(){
    this.subscriptions.push(
      //this.userData?.Id as string
      this.additionTechnicalCapabilitiesRequirementsService.GetByFacilityId(this.userData?.facilities[0].id as string).subscribe(res=>{
        if(res) {
          // this.additionTechnicalCapability = res;
          // this.additionTechnicalCapabilitiesRequirementsService.SetAdditionTechnicalCapabilityObj(this.additionTechnicalCapability);
        this.SetAdditionTechnicalCapabilityObj(res)
        }
      })
    )
  }
  SetAdditionTechnicalCapabilityObj(data: AdditionTechnicalCapabilitiesRequirementsDto){
    this.additionTechnicalCapabilitiesRequirementsService.SetAdditionTechnicalCapabilityObj(data);
  }
  openDialog(): void {
    let Data={
      panelClass: ['rega'],
      title: "متطلبات القدرات الفنيه الإضافيه",
      component: DistinctiveAdditionalTechnicalCapabilitiesFormComponent
    } as PopupData;
    let dialogRef = this._popupService.updatePopupData(Data);
    // dialogRef.afterClosed().subscribe(_=> this.observeAdditionTechnicalCapabilityObj());
  }
  observeAdditionTechnicalCapabilityObj(): void {
    this.subscriptions.push(
      this.additionTechnicalCapabilitiesRequirementsService.getAdditionTechnicalCapabilityObj().subscribe((additionTechnicalCapability) => {
        this.additionTechnicalCapability = additionTechnicalCapability;
      })
    )
  }

  deletFile(id : string){
    this._filemangementService.DeletFile(id).subscribe(res=>{
      if(res.isDone){
        this.getFinancialCapabilities()
      }
    })

  }
  ngOnDestroy(){
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
