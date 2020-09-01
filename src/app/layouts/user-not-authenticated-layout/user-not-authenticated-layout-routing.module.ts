import { UserNotAuthenticatedLayoutComponent } from './user-not-authenticated-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/components/login/login.component';
import { HomeComponent } from 'src/app/components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: UserNotAuthenticatedLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }),
    CommonModule
  ],
  declarations: []
})
export class UserNotAuthenticatedLayoutRoutingModule { }