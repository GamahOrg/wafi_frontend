import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { Configuration } from '../../../../../core/configurations/shared.config';
import { PopupNoteComponent } from 'src/app/shared/components/popup-note/popup-note.component';
import { PopupService } from 'src/app/shared/services/popup/popup.service';
import { RoadmapComponent } from '../../components/roadmap/roadmap.component';
import { PopupData } from 'src/app/shared/models/popup.model';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-facility-dashboard',
  templateUrl: './facility-dashboard.component.html',
  styleUrls: ['./facility-dashboard.component.scss'],
  
})
export class FacilityDashboardComponent implements OnInit {
  userData: customerResponse | null = null;
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  facilityProfileLink: string = `../${Configuration.pages.facilities.facilityProfile}`;
  // imageUrl!: string | undefined
  constructor(
    public dialog: MatDialog,
    private _userDataService: UserDataService,
    private _popupService: PopupService,
  ) { }
  localization = {
    PleaseCompleteAccountInformation:'الرجاء إكمال بيانات الملف الشخصي الخاص بك ورفع جميع المستندات المطلوبة. سيتم استخدام هذه البيانات لتسهيل عملية تقديم الطلبات. يرجى مراعاة أن رقم السجل التجاري المستخدم حالياً هو ',
    CompleteDataLinkText: 'إستكمال البيانات',
    welcome: 'مرحبا بك !',
  };
  ngOnInit(): void {
    this.obseveCustomerData();
    // this.openDialog();
  }
  private obseveCustomerData(): void {
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null) => {
        this.userData = res
        console.log('userData', this.userData)
      })
    )
  }

  openDialog(): void {
    let popupData = {
      panelClass: ['Roadmap'],
      id: '',
      title: '',
      component: RoadmapComponent,
      buttons: []
    };
    this._popupService.updatePopupData(popupData as PopupData);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
