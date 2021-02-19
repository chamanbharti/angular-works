import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedComponentRoutingModule } from './nested-component-routing.module';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [ChildComponent, ParentComponent],
  imports: [
    CommonModule,
    NestedComponentRoutingModule
  ],
  //exports: [ChildComponent,ParentComponent]
})
export class NestedComponentModule { }
