import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TableComponent } from './../../components/table/table.component';
import { FormComponent } from './../../components/form/form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthenticatedLayoutComponent } from './user-authenticated-layout.component';
import { UserAuthenticatedLayoutRoutingModule } from './user-authenticated-layout-routing.module';
import { SidenavComponent } from 'src/app/components/sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule, } from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [
    UserAuthenticatedLayoutComponent,
    SidenavComponent,
    FormComponent,
    TableComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    UserAuthenticatedLayoutRoutingModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatFormFieldModule,
    CKEditorModule,
  ],
  exports: [
    SidenavComponent,
    TableComponent,
    DashboardComponent
  ]
})
export class UserAuthenticatedLayoutModule { }
