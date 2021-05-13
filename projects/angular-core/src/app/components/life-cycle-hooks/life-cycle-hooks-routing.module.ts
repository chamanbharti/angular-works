import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebugComponent } from './debug/debug.component';
import { HooksOneComponent } from './hooks-one/hooks-one.component';

const routes: Routes = [
  {path: 'hooks', component: HooksOneComponent},
  {path: 'debug', component: DebugComponent }
];

@NgModule({
  imports: [
  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LifeCycleHooksRoutingModule { }
