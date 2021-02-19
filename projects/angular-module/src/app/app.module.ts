import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './part-0/home/home.module';
import { AdminModule } from './part-0/admin/admin.module';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { GithubModule } from './part-0/github/github.module';
import { CoreModule } from './part-0/core/core.module';
import { SharedModule } from './part-0/shared/shared.module';
import { CustomPreloadingService } from './part-0/custom-preloading.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  // HomeModule,
   // AdminModule,
    // AppRoutingModule,
   // CoreModule,
   // GithubModule,
   // SharedModule,

   AppRoutingModule,
    NotFoundRoutingModule//this must be called last, because it contains not-found component
  ],
  providers: [
    CustomPreloadingService
  ],
  bootstrap: [AppComponent],
  entryComponents: [

  ]
})
export class AppModule {
  constructor(){
    console.log('App module loaded')
  }
}
