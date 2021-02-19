import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './nested-component/child/child.component';
import { NestedComponentRoutingModule } from './nested-component/nested-component-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   NestedComponentRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
