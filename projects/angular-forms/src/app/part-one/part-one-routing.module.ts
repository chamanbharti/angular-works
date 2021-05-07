import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormOneComponent } from './template-driven/form-one/form-one.component';
import { OneWayBindingComponent } from './template-driven/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './template-driven/two-way-binding/two-way-binding.component';
import { FormGroupComponent } from './template-driven/form-group/form-group.component';
import { RadioButtonComponent } from './template-driven/radio-button/radio-button.component';
import { PatchValueComponent } from './template-driven/patch-value/patch-value.component';
import { ReactiveComponent } from './reactive-form/reactive/reactive.component';
import { FormArrayComponent } from './reactive-form/form-array/form-array.component';

const routes: Routes = [
  {path: '', component: FormOneComponent},
  {path: 'one-way', component: OneWayBindingComponent},
  {path: 'two-way', component: TwoWayBindingComponent},
  {path: 'form-group', component: FormGroupComponent},
  {path: 'radio', component: RadioButtonComponent},
  {path: 'patch-value', component: PatchValueComponent},
  {path: 'reactive-form', component: ReactiveComponent},
  {path: 'form-array', component: FormArrayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartOneRoutingModule { }
