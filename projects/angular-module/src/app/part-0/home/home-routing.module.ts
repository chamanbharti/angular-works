import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/aboutus/aboutus.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';

// const routes: Routes = [
//   {   path: '',   component: HomeComponent   },
//   {   path: 'home',   component: HomeComponent   },
//   {   path: 'contactus',   component: ContactUsComponent   },
//   {   path: 'aboutus',   component: AboutUsComponent   },
// ];

@NgModule({
  imports: [
    //RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {

 }
