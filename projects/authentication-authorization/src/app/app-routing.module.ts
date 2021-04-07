import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthRouteGuard } from './part1/shared/auth.route.guard';

const routes: Routes = [
  // lazy loading
  {path: '', loadChildren: () => import('./part1/home/home.module').then(_ => _.HomeModule)},
  {path: 'login', loadChildren: () => import('./part1/login/login.module').then(_ => _.LoginModule),
   canActivate: [AuthRouteGuard]
  },
  {path: 'dashboard', loadChildren: () => import('./part1/dashboard/dashboard.module').then(_ => _ .DashboardModule),
  // canActivate: [AuthRouteGuard]
  },

  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
