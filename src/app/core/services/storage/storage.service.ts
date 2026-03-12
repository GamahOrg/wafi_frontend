import { Injectable } from '@angular/core';
import { TokenResponse } from 'src/app/shared/models/token-response.model';

@Injectable()
export class StorageService {
  constructor() { }

  public isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  saveTokens(token: TokenResponse): void {
    console.log("token",token)
    localStorage.setItem('token', token.accessToken);
    localStorage.setItem('refresh-token', token.refreshToken);
    localStorage.setItem('login-user-type', token.loginUserType?.toString() ? token.loginUserType?.toString() : '');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getRefreshToken(): string | null {
    return localStorage.getItem('refresh-token');
  }
  getLoginUserType(): string | null {
    return localStorage.getItem('login-user-type');
  }
  setIsFirstLoading(bool: boolean): void {
    localStorage.setItem('isFirstLoading', bool.toString());
  }
  getIsFirstLoading(): string | null {
    return localStorage.getItem('isFirstLoading');
  }
}
