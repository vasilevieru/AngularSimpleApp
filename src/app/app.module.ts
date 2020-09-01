import { UserAuthenticatedLayoutModule } from './layouts/user-authenticated-layout/user-authenticated-layout.module';
import { UserNotAuthenticatedLayoutModule } from './layouts/user-not-authenticated-layout/user-not-authenticated-layout.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from './services';
import { HttpClientModule } from '@angular/common/http';

import { fakeBackendProvider } from './mock-backend/fake-backend';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    UserNotAuthenticatedLayoutModule,
    UserAuthenticatedLayoutModule,   
    FormsModule
  ],
  providers: [
    AuthenticationService,
    { provide: 'AUTH_TOKEN', useValue: 'token' },
    { provide: 'AUTH_USER', useValue: 'user' },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
