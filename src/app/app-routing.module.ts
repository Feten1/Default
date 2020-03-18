import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { GroupsComponent } from './myPages/groups/groups.component';
import { BasicLoginComponent } from './pages/auth/login/basic-login/basic-login.component';
import { TasksComponent } from './myPages/tasks/tasks.component';
import { SpmComponent } from './myPages/spm/spm.component';
import { AddUserComponent } from './myPages/add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo :"authentification",
    pathMatch: 'full'
  },
  {
    path: 'authentification',
    component:  BasicLoginComponent
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      /*{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },*/ {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule)
      }, {
        path: 'basic',
        loadChildren: () => import('./pages/ui-elements/basic/basic.module').then(m => m.BasicModule)
      }, {
        path: 'notifications',
        loadChildren: () => import('./pages/ui-elements/advance/notifications/notifications.module').then(m => m.NotificationsModule)
      }, {
        path: 'bootstrap-table',
        loadChildren: () => import('./pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module').then(m => m.BasicBootstrapModule),
      }, {
        path: 'map',
        loadChildren: () => import('./pages/map/google-map/google-map.module').then(m => m.GoogleMapModule),
      }, {
        path: 'user',
        loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule)
      }, {
        path: 'simple-page',
        loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule)
      }, {
        path: 'Groups',
        component: GroupsComponent
      }, {
        path: 'tasks',
        component: TasksComponent
      }, {
        path: 'SPM',
        component: SpmComponent
      }
      , {
        path: 'add_user',
        component: AddUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
