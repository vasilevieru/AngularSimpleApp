import { LocalStorageService } from './../services/local-storage.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JWTTokenService } from '../services/jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(private loginService: LoginService,
    private authStorageService: LocalStorageService,
    private jwtService: JWTTokenService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {
    if (this.jwtService.getUser()) {
      if (this.jwtService.isTokenExpired()) {
        // Should Redirect Sig-In Page
      } else {
        return true;
      }
    } else {
      return new Promise((resolve) => {
        this.loginService.signIncallBack().then((e) => {
          resolve(true);
        }).catch((e) => {
          // Should Redirect Sign-In Page
        });
      });
    }
  }
}
