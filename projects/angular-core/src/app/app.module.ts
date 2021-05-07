import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataBindingRoutingModule } from './components/data-bind/data-binding-routing.module';
import { DataBindingModule } from './components/data-bind/data-binding.module';
import { LifeCycleHooksModule } from './components/life-cycle-hooks/life-cycle-hooks.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    DataBindingModule,
    DataBindingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
