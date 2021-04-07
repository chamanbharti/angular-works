import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JwtModule } from './part1/jwt/jwt.module';
import { HomeRoutingModule } from './part1/home/home-routing.module';
import { AuthService } from './part1/shared/auth.service';
import { DashboardModule } from './part1/dashboard/dashboard.module';
import { AuthRouteGuard } from './part1/shared/auth.route.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule,
    HomeRoutingModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
