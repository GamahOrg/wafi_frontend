import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../../services/storage/storage.service';
import { Configuration } from '../../configurations/shared.config';

@Injectable()
export class TokenGuard implements CanActivate {
  constructor(private _storageService: StorageService, private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var isAuthenticated = this._storageService.isAuthenticated();

      if (isAuthenticated) {
        //console.log('TokenAuthGuardGuard', 'fe token');
        this._router.navigate(['']);
        return isAuthenticated;
      } else {
        //console.log('TokenAuthGuardGuard', 'mafesh token');
        return !isAuthenticated;
      }
  }
  
}
