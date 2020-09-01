import { FormComponent } from './../../components/form/form.component';
import { TableComponent } from './../../components/table/table.component';
import { LoggedInGuard } from './../../guards/logged-in.guard';
import { UserAuthenticatedLayoutComponent } from './user-authenticated-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: UserAuthenticatedLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [LoggedInGuard]
      },
      {
        path: 'table',
        component: TableComponent,
        canActivate: [LoggedInGuard]
      },
      {
        path: 'form',
        component: FormComponent,
        canActivate: [LoggedInGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    CommonModule
  ],
  declarations: []
})
export class UserAuthenticatedLayoutRoutingModule { }