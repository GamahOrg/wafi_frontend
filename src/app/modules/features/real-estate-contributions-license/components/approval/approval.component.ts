import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApprovalDto } from '../../models/approval';
import { ProjectApprovalsService } from '../../services/licenseProjects/project-approvals.service';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { ToastrService } from 'ngx-toastr';
import { SharedLicenseProjectService } from '../../services/sharedLicenseProject/shared-license-project.service';
import { PopupData } from 'src/app/shared/models/popup.model';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent {
  subscriptions: Subscription[] = [];
  approvalList:ApprovalDto[]=[];
  showValidation:boolean=false;
  licenseProjectId: string | null = "00000000-0000-0000-0000-000000000000";
/**
 *
 */
constructor(
  private _projectApprovalsService: ProjectApprovalsService,
  private _popupService: PopupService,
  private toastr:ToastrService,
  private _sharedLicenseProjectService: SharedLicenseProjectService,
  )
{

}
ngOnDestroy(): void {
  this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
}
ngOnInit(): void {
  this.getLicenseProjectIdStorage();
  this.GetProjectApprovalsByProjectId();
  this.observePopupEvents()
}
private getLicenseProjectIdStorage(): void {
  this.licenseProjectId = this._sharedLicenseProjectService.getLicenseProjectIdStorage();
}
GetProjectApprovalsByProjectId() {
  this.subscriptions.push(
    this._projectApprovalsService.GetProjectApprovalsByProjectId(this.licenseProjectId as string).subscribe(res => {


      if (res && res.data?.length != 0) {
        this.approvalList=[];
        res.data?.forEach(item => {
          let obj:ApprovalDto=new ApprovalDto();
          obj.discerption=item;
          this.approvalList.push(obj)
        });
      }

    })
  )
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

checkValue(event:any,i:number)
{
 let obj= this.approvalList[i];
 obj.isChecked=event.target.checked;
}
private observeconfirmAction() {
  
  this.subscriptions.push(
    this._popupService.confirmAction.subscribe((res: PopupData) => {

      if (res.id == "ApprovalComponent"){
        
        if(!this.approvalList.every(item => item.isChecked === true))
        {

          this.showValidation=true;
          return;
        }
        this._projectApprovalsService.SetApprovalSubject(true);
        this.toastr.success("تم الموافقه على جميع الاقرارات الخاصة بالرخصة");
        this.closeDialog();
      }
    })
  )
}
private closeDialog(): void {
  this._popupService.dismissDialog()
}
}
