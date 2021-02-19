import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";

import { AboutUsComponent } from "./pages/aboutus/aboutus.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { HomeComponent } from "./pages/home/home.component";
// import { AboutUsComponent, ContactUsComponent, HomeComponent } from "./pages";



@NgModule({
declarations:[
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent
],
imports: [
CommonModule,
HomeRoutingModule
],
providers: [

],

})

export class HomeModule{
    constructor(){
        console.log('Home module loaded')
      }
}