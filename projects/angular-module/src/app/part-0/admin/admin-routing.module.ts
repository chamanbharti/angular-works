import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RightsComponent } from './rights/rights.component';
import { UserComponent } from './user/user.component';

//const routes: Routes = [
  // {   path: 'dashboard',   component: DashboardComponent   },
  // {   path: 'user',   component: UserComponent   },
  // {   path: 'rights',   component: RightsComponent   },


  // {
  //   path: 'admin', component: AdminComponent,
  //   children: [
  //               {   path: 'dashboard',   component: DashboardComponent   },
  //               {   path: 'user',   component: UserComponent   },
  //               {   path: 'rights',   component: RightsComponent   }
  //             ]

  // }
//   {
//     path: 'admin', component: AdminComponent,
//     children: [
//                 {   path: 'dashboard',   loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),  },
//                 {   path: 'user',   loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),  },
//                 {   path: 'rights',   loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),  }
//               ]

//   }
// ];

@NgModule({
  imports: [
    //RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
