import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './layouts/auth-layout.component';
import { FullLayoutComponent } from './layouts/full-layout.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home'
    },
  },
  {
    path: '',
    component: AuthLayoutComponent,
    data: {
      title: 'Authentication'
    },
    children: [
      {
        path: '',
        loadChildren: './authentication/authentication.module#AuthenticationModule',
      }
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: '',
        loadChildren: './transfer/transfer.module#TransferModule'
      },
        {
          path: '',
          loadChildren: './recipient-list/recipient-list.module#RecipientListModule'
        },
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
