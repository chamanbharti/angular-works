import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { RightsComponent } from './rights/rights.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [AdminComponent, UserComponent, RightsComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
  constructor(){
    console.log('Admin Module loaded')
  }
}
