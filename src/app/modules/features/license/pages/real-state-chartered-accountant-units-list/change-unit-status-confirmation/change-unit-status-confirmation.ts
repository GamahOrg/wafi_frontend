import { Component, OnDestroy } from "@angular/core";
import { PopupService } from "src/app/shared/services/popup/popup.service";
import { ChangeUnitStatusFormComponent } from "../change-unit-status-form/change-unit-status-form.component";
import { PopupData } from "src/app/shared/models/popup.model";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-change-unit-status-confirmation',
    templateUrl: './change-unit-status-confirmation.html',
    styleUrls: ['./change-unit-status-confirmation.scss']
})
export class ChangeUnitStatusConfirmationComponent implements OnDestroy {

    unitDatails: any; 
  private subscriptions: Subscription[] = [];

    constructor(
    private _popupService: PopupService,
        
    ) {}

    ngOnInit(): void {
        this.observeUnitData();
    }
  
    observeUnitData(): void {

    this.subscriptions.push(
        this._popupService.popupData.subscribe((data) => {
            this.unitDatails = data.data;
        }),
        this._popupService.confirmAction.subscribe(
            (popup) => {
                if(popup.id == 'changeStatusConfirmation'){
                    this.confirmChangeStatus();
                }
            }
        )
    )

    }
       

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    confirmChangeStatus(): void {
        this._popupService.closeDialog.emit(); 
        this._popupService.updatePopupData({
            id: 'changeUnitStatusForm',
            title: 'يرجي تحديد حالة الوحدة',
            component: ChangeUnitStatusFormComponent,
            submitButtonTitle: 'تأكيد',
            disableClose: true,
            data: { unitIds: this.unitDatails.unitIds , licenseProjectId: this.unitDatails.licenseProjectId },
          } as PopupData);
    
          
        }
}