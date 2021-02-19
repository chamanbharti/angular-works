import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PromiseComponent } from './part-1/promise/promise.component';
import { CallbackComponent } from './part-1/callback/callback.component';
import { AllComponent } from './part-1/observable/all/all.component';
import { FromEventComponent } from './part-1/observable/from-event/from-event.component';
import { IntervalComponent } from './part-1/observable/interval/interval.component';
import { TimerComponent } from './part-1/observable/timer/timer.component';
import { OfComponent } from './part-1/observable/of/of.component';
import { FromComponent } from './part-1/observable/from/from.component';
import { ToArrayComponent } from './part-1/observable/to-array/to-array.component';
import { CustomObservableComponent } from './part-1/observable/custom-observable/custom-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    CallbackComponent,
    AllComponent,
    // rxjs components
    FromEventComponent,
    IntervalComponent,
    TimerComponent,
    OfComponent,
    FromComponent,
    ToArrayComponent,
    CustomObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
