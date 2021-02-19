import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './home/pages/aboutus/aboutus.component';
import { ContactUsComponent } from './home/pages/contact-us/contact-us.component';
import { HomeComponent } from './home/pages/home/home.component';



@NgModule({
  declarations: [AboutUsComponent, ContactUsComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class Part0Module { }
