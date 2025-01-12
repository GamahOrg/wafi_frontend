import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { customerResponse } from 'src/app/shared/models/customer.model';
import { UserDataService } from 'src/app/core/services/user-data/user-data.service';
import { Configuration } from 'src/app/core/configurations/shared.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  subscriptions: Subscription[] = [];
  baseImagePath: string = "./assets/images/layout/header/";
  userData: customerResponse | null = null;

  constructor( private _userDataService: UserDataService, private _router: Router){}
  ngOnInit(): void {
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
  private navigateToLogin(): void {
    // this._router.navigate([''])
    // this._router.navigate([`${Configuration.modules.realEstateContributionsAuth}/${Configuration.pages.realEstateContributionsAuth.login}`])
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
