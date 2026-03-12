import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerShortDto } from '../../models/facility-short-dto';
import { LicenseRequestHeaderDto } from '../../dataModels/license-request-header-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectListService } from '../../services/project-list.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrNotificatioService } from 'src/app/core/services/toastr-notification/toastr-notificatio.service';
import { PopupData } from 'src/app/shared/models/popup.model';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';

@Component({
  selector: 'app-project-list-form',
  templateUrl: './project-list-form.component.html',
  styleUrls: ['./project-list-form.component.scss']
})
export class ProjectListFormComponent {
  subscriptions: Subscription[] = [];
  customers: CustomerShortDto[] | null = null;
  manager?:LicenseRequestHeaderDto;
  managerId:string="";
  userData: customerResponse | null = null;
  showValidation:boolean=false;
  ProjectManagerForm = this._formBuilder.group({
    managerId: [null as string | null, [Validators.required]],
  })
/**
 *
 */
constructor( private _projectMangerService: ProjectListService, private _formBuilder: FormBuilder,
  private _userDataService: UserDataService,
  private _toastrNotificatioService: ToastrNotificatioService,private _popupService: PopupService,) {

  
}
ngOnInit(): void {
  this.getCustomerData()
  this.getProject();
  this.observePopupEvents();
}
getCustomerData() {

  this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
    this.userData = res;    
  })
}

get controls() {
  return this.ProjectManagerForm.controls;
}
GetSubCustomers(): void {
  this.subscriptions.push(
    // this._projectMangerService.GetSubCustomers().subscribe((res: CustomerShortDto[] | null) => {
    //   this.customers = res

    // })
    this._projectMangerService.GetFacilitySubCustomers(this.userData?.facilities[0].id!).subscribe((res: CustomerShortDto[] | null) => {
      this.customers = res

    })
  )
} 

private getProject(): void {

  this.subscriptions.push(
    this._projectMangerService.getProject().subscribe((res: LicenseRequestHeaderDto | null) => {
      if (res) {
       
        this.manager = res;
        this.ProjectManagerForm.controls.managerId.setValue(this.manager.licenseProject.licenseProjectEngineeringConsultants[0].projectManagerCustomerId);
      }
    }))
    this.GetSubCustomers();
  }
save(): void 
{
 
     if (!this.ProjectManagerForm.valid)
      {
       this.showValidation = true; 
        return;
      }
      this.subscriptions.push(
        this._projectMangerService.UpdateProjectManagerOnProject(this.ProjectManagerForm.controls.managerId.value as string,this.manager?.licenseProject.id as string).subscribe(res => {
          
          if(res.isDone)
          {
           
            this._projectMangerService.submitSuccessfullyEventEmitter.emit()
           this._toastrNotificatioService.showSuccess("تم التعديل بنجاح");
           this.closeDialog();
          }
        })
        )

}
private closeDialog(): void {
  this._popupService.dismissDialog()
}
observePopupEvents(): void {
  this.observecancelAction()
  this.observeconfirmAction()
}

private observecancelAction() {
  this.subscriptions.push(
    this._popupService.cancelAction.subscribe((res: PopupData) => {
      this._popupService.dismissDialog();
    })
  )
}

private observeconfirmAction() {
  this.subscriptions.push(
    this._popupService.confirmAction.subscribe((res: PopupData) => {
      this.save();
    })
  )
}
ngOnDestroy(): void {
  this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe())
}
}
