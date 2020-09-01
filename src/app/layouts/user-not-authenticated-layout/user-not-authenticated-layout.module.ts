import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './../../components/login/login.component';
import { UserNotAuthenticatedLayoutComponent } from './user-not-authenticated-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNotAuthenticatedLayoutRoutingModule } from './user-not-authenticated-layout-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    UserNotAuthenticatedLayoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    UserNotAuthenticatedLayoutRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
  ]
})
export class UserNotAuthenticatedLayoutModule { }
