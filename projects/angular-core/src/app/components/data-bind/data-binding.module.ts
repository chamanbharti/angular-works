import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { CounterComponent } from './counter/counter.component';
import { DataBindingRoutingModule } from './data-binding-routing.module';
import { ModelChangeComponent } from './model-change/model-change.component';



@NgModule({
  declarations: [DataBindingComponent, TwoWayBindComponent, CounterComponent, ModelChangeComponent],
  imports: [
    CommonModule,
    FormsModule,
    DataBindingRoutingModule
  ],
  exports: [DataBindingComponent,TwoWayBindComponent,CounterComponent]
})
export class DataBindingModule { }
