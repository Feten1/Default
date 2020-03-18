import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layout/admin/title/title.component';
import { AuthComponent } from './layout/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GroupsComponent } from './myPages/groups/groups.component';
import { BasicBootstrapComponent } from './pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.component';
import { BasicLoginComponent } from './pages/auth/login/basic-login/basic-login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TasksComponent } from './myPages/tasks/tasks.component';
import { SpmComponent } from './myPages/spm/spm.component';
import { AddUserComponent } from './myPages/add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    GroupsComponent,
    SpmComponent,
    BasicBootstrapComponent,
    BasicLoginComponent,
    TasksComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
