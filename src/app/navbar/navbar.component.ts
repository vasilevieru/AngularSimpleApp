import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services';
import { Observable } from 'rxjs';
import { Location } from "@Angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();
  
  isNavbarOpen = false;
  isAuthorizedSubscription: Subscription;
  isAuthorized: Boolean = false;
  currentUrl: string;
  //isAuthenticated = false;

  constructor(
    private authService: AuthenticationService,
    public router: Router,
    private location: Location) { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isNavbarOpen= !this.isNavbarOpen;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  isAuthenticated(): Observable<boolean> {
    return this.authService.isLoggedIn();
  }
}
