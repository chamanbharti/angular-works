import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './part-1/home/home.component';
import { ContactComponent } from './part-1/contact/contact.component';
import { ProductComponent } from './part-1/product/product.component';
import { ErrorComponent } from './part-1/error/error.component';
import { PartOneRoutingModule } from './part-1/part-one-routing.module';
import { ProductDetailComponent } from './part-1/product-detail/product-detail.component';
import { ProductOverviewComponent } from './part-1/product-overview/product-overview.component';
import { ProductSpecComponent } from './part-1/product-spec/product-spec.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    ErrorComponent,
    ProductDetailComponent,
    ProductOverviewComponent,
    ProductSpecComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    PartOneRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
