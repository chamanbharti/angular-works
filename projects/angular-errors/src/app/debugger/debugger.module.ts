import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebuggerRoutingModule } from './debugger-routing.module';
import { ExpressionChangeComponent } from './expression-change/expression-change.component';


@NgModule({
  declarations: [ExpressionChangeComponent],
  imports: [
    CommonModule,
    DebuggerRoutingModule
  ]
})
export class DebuggerModule { }
