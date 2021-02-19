import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { CustomPreloadingService } from './part-0/custom-preloading.service';

const appRoutes: Routes = [

  //lazy loading
  {path: 'admin', loadChildren: './part-0/admin/admin.module#AdminModule'},
  {path: 'home', loadChildren: './part-0/home/home.module#HomeModule'},
  {path: 'contactus', loadChildren: './part-0/home/home.module#HomeModule'},
  {path: 'aboutus', loadChildren: './part-0/home/home.module#HomeModule'},
  {path: 'github', loadChildren: './part-0/github/github.module#GithubModule',data:{preload: true, delay:5000}},
  {path: 'list', loadChildren: './part-0/github/github.module#GithubModule'}


  // {path: 'admin', loadChildren: () => import('./part-0/admin/admin.module').then(m => m.AdminModule)},
  // {path: 'home', loadChildren: () => import('./part-0/home/home.module').then(m => m.HomeModule)},
  // {path: 'contactus', loadChildren: () => import('./part-0/home/home.module').then(m => m.HomeModule)},
  // {path: 'aboutus', loadChildren: () => import('./part-0/home/home.module').then(m => m.HomeModule)},
  // {path: 'github', loadChildren: () => import('./part-0/github/github.module').then(m => m.GithubModule)},
  // {path: 'list', loadChildren: () => import('./part-0/github/github.module').then(m => m.GithubModule)}

 ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: CustomPreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
