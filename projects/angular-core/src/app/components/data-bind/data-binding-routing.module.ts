import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ModelChangeComponent } from './model-change/model-change.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';


const routes: Routes = [
{path: 'databind', component: DataBindingComponent},
{path: 'twoway', component: TwoWayBindComponent},
{path: 'counter', component: CounterComponent},
{path: 'modelChange', component: ModelChangeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingRoutingModule { }
