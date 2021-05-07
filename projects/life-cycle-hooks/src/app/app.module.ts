import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WaringAlertComponent } from './waring-alert/waring-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'projects/angular-ag-grid/src/app/app-routing.module';
import { ServerElementComponent } from './databinding/server-element/server-element.component';
import { CockpitComponent } from './databinding/cockpit/cockpit.component';
import { BasicHighlightDirective } from './highlight-directive/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight-directive/better-highlight.directive';
import { UnlessDirective } from './unless-directive/unless.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WaringAlertComponent,
    SuccessAlertComponent,
    ServerElementComponent,
    CockpitComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
