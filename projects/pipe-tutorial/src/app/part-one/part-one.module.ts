import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartOneRoutingModule } from './part-one-routing.module';
import { HelloComponent } from './hello/hello.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HelloComponent,
    ShortenPipe,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PartOneRoutingModule
  ],
  exports: [FormsModule]
})
export class PartOneModule { }
