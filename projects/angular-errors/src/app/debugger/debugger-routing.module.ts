import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpressionChangeComponent } from './expression-change/expression-change.component';

const routes: Routes = [
  {path: 'expression', component: ExpressionChangeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebuggerRoutingModule { }
