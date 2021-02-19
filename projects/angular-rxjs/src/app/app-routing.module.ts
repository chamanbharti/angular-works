import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './part-1/callback/callback.component';
import { AllComponent } from './part-1/observable/all/all.component';
import { CustomObservableComponent } from './part-1/observable/custom-observable/custom-observable.component';
import { FromEventComponent } from './part-1/observable/from-event/from-event.component';
import { FromComponent } from './part-1/observable/from/from.component';
import { IntervalComponent } from './part-1/observable/interval/interval.component';
import { OfComponent } from './part-1/observable/of/of.component';
import { TimerComponent } from './part-1/observable/timer/timer.component';
import { ToArrayComponent } from './part-1/observable/to-array/to-array.component';
import { PromiseComponent } from './part-1/promise/promise.component';

const routes: Routes = [
  {path: 'callback', component: CallbackComponent},
  {path: 'promise', component: PromiseComponent},
  {path: 'observable', component: CustomObservableComponent, children: [
    // {path: 'all', component: AllComponent},
    {path: '', component: AllComponent},
    {path: 'fromEvent', component: FromEventComponent},
    {path: 'interval', component: IntervalComponent},
    {path: 'timer', component: TimerComponent},
    {path: 'of', component: OfComponent},
    {path: 'from', component: FromComponent},
    {path: 'toArray', component: ToArrayComponent},
    {path: 'custom', component: CustomObservableComponent}
  ]},
  {path: '**', redirectTo: 'callback'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
