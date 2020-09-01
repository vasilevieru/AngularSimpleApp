import { LoggedInGuard } from './guards/logged-in.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/layouts/user-not-authenticated-layout/user-not-authenticated-layout.module#UserNotAuthenticatedLayoutModule',
  },
  {
    path: '*', 
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: 'app/layouts/user-authenticated-layout/user-authenticated-layout.module#UserAuthenticatedLayoutModule',
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
