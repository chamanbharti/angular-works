import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleHooksRoutingModule } from './life-cycle-hooks-routing.module';
import { HooksOneComponent } from './hooks-one/hooks-one.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HooksOneComponent],
  imports: [
    CommonModule,
    FormsModule,
    LifeCycleHooksRoutingModule
  ],
  exports:[HooksOneComponent]
})
export class LifeCycleHooksModule { }
