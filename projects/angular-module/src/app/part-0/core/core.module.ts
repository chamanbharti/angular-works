import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { GithubService } from './services/github.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  providers:[GithubService,HttpClientModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    console.log('CoreModule loaded')
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }
}
