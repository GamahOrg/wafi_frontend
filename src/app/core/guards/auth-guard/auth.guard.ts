import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Configuration } from '../../configurations/shared.config';
import { StorageService } from '../../services/storage/storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _storageService: StorageService, private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      var isAuthenticated = this._storageService.isAuthenticated();

      // if (!isAuthenticated) {
      //   //console.log('TokenAuthGuardGuard', 'mafesh token');
      //   // this._router.navigate([Configuration.modules.auth]);
      //   this._router.navigate([Configuration.modules.landing]);
      //   return !isAuthenticated;
      // } else {
      //   //console.log('TokenAuthGuardGuard', 'fe token');
      //   return isAuthenticated;
      // }
      return true
  }
  
}
