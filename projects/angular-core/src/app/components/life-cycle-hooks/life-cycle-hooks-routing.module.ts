import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HooksOneComponent } from './hooks-one/hooks-one.component';

const routes: Routes = [
  {path: 'hooks', component: HooksOneComponent}
];

@NgModule({
  imports: [
    GtagModule
    ,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LifeCycleHooksRoutingModule { }
