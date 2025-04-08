import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { Configuration } from '../../../../../core/configurations/shared.config';
@Component({
  selector: 'app-facility-dashboard',
  templateUrl: './facility-dashboard.component.html',
  styleUrls: ['./facility-dashboard.component.scss'],
})
export class FacilityDashboardComponent implements OnInit {
  userData: customerResponse | null = null;
  subscriptions: Subscription[] = [];
  facilityProfileLink: string = `../${Configuration.pages.realEstateContributionsFacilities.facilityProfile}`;
  imageUrl:string = "assets/images/dashboaed/card-welcome.svg"
  constructor(
    public dialog: MatDialog,
    private _userDataService: UserDataService
  ) {}
  localization = {
    PleaseCompleteAccountInformation:'يرجى استكمال بيانات الملف الشخصي الموحد الخاص بك في منصة خدمات التطوير عقاري وإدراج جميع المستندات، ليتم استخدام البيانات في تسهيل عملية تقديم الطلبات، يرجى مراعاة أن رقم السجل التجاري المستخدم حالياً هو',
    CompleteDataLinkText: 'إستكمال البيانات',
    welcome: 'مرحبا بك !',
  };
  ngOnInit(): void {
    this.obseveCustomerData();
    
    // this.openDialog();
  }
  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null)=>{
        this.userData = res
        console.log('userData', this.userData)
      })
    )
  }

  openDialog(): void {
    this.dialog.open(PopupComponent, {
      width: '80vw',
      height: '80vh',
      panelClass: ['rega']
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
