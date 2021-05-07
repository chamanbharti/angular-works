import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartOneRoutingModule } from './part-one-routing.module';
import { FormOneComponent } from './template-driven/form-one/form-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OneWayBindingComponent } from './template-driven/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './template-driven/two-way-binding/two-way-binding.component';
import { FormGroupComponent } from './template-driven/form-group/form-group.component';
import { RadioButtonComponent } from './template-driven/radio-button/radio-button.component';
import { PatchValueComponent } from './template-driven/patch-value/patch-value.component';
import { ReactiveComponent } from './reactive-form/reactive/reactive.component';
import { FormArrayComponent } from './reactive-form/form-array/form-array.component';


@NgModule({
  declarations: [
    FormOneComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    FormGroupComponent,
    RadioButtonComponent,
    PatchValueComponent,
    ReactiveComponent,
    FormArrayComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PartOneRoutingModule
  ]
})
export class PartOneModule { }
