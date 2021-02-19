import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';
import { ProductComponent } from './product/product.component';
//import {APP_BASE_HREF} from '@angular/common';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  // {path: 'product', component: ProductComponent},
  // {path: 'product/:id', component: ProductDetailComponent},
  {path: 'product', component: ProductComponent,
  children: [
              {path: 'detail/:id', component: ProductDetailComponent,
              children: [
                          {path: 'overview', component: ProductOverviewComponent},
                          {path: 'spec', component: ProductSpecComponent},
                          {path: '', redirectTo:'overview', pathMatch: 'full'}
                        ]

              }
  ]
},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes)                 /*path location strategy */
    //   RouterModule.forRoot(routes, {useHash: true})/*Hash location strategy */
  ],
  exports: [RouterModule],
  //providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
})
export class PartOneRoutingModule { }
