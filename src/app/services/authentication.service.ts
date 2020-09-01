import { User } from './../models/user.model';
import { Injectable, Inject } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private loggedIn$ = new BehaviorSubject<boolean>(this.getJWTToken() !== null ? true : false);

  constructor(private http: HttpClient, @Inject('AUTH_TOKEN') private authToken: string,
    @Inject('AUTH_USER') private authUser: string) { }

  login(email: string, password: string): void {
    this.http.post('/api/login', { email: email, password: password })
      .subscribe((response: any) => {
        localStorage.setItem(this.authUser, response.user);
        localStorage.setItem(this.authToken, response.token);
        this.loggedIn$.next(true);
      }, () => {
        this.loggedIn$.next(false);
      });
  }

  getUser(): User {
    return new User(JSON.parse(localStorage.getItem(this.authUser)));
  }

  getJWTToken(): string {
    return localStorage.getItem(this.authToken);
  }

  isLoggedIn(): BehaviorSubject<boolean> {
    return this.loggedIn$;
  }

  logout(): void {
    localStorage.removeItem(this.authToken);
    localStorage.removeItem(this.authUser);
    this.loggedIn$.next(false);
  }
}
