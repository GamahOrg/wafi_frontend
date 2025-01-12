import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { LoginUserTypeEnum } from 'src/app/modules/auth/models/login.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  subscriptions: Subscription[] = [];
  baseUrl = `${environment.baseURL}/`;
  baseImagePath: string = "./assets/images/layout/header/";
  userData: customerResponse | null = null;
  loginUserType: string | null = '' ;
  loginUserTypeEnum: LoginUserTypeEnum | null = null;
  localization={
    beta: "اطلاق تجريبي"
  }
  links = Configuration;
  constructor( private _userDataService: UserDataService,private _storageService: StorageService, private _router: Router){}
  ngOnInit(): void {
    this.getLoginUserType();
    this.obseveCustomerData();
  }
  obseveCustomerData(): void{
    this.subscriptions.push(
      this._userDataService.getCustomerData().subscribe((res: customerResponse | null)=>{
        this.userData = res
      })
    )
  }
  logout(): void {
    this.clearLocalStorage();
    this.navigateToLogin()
  }
  getLoginUserType(): void {
    this.loginUserType =  this._storageService.getLoginUserType()
    this.loginUserTypeEnum = Number(this.loginUserType ) as LoginUserTypeEnum;
  }
  private navigateToLogin(): void {
    // this._router.navigate([`${Configuration.modules.auth}/${Configuration.pages.auth.wafiService}`])
    this._router.navigate([`${Configuration.modules.landing}`])
  }
  private clearLocalStorage(): void {
    localStorage.clear()
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
