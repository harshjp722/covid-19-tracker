import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'country/:slug',
    loadChildren: () => import('./modules/view-country-details/view-country-details.module')
      .then(m => m.ViewCountryDetailsModule)
  },
  {
    path: 'india',
    loadChildren: () => import('./modules/india/india.module')
      .then(m => m.IndiaModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./modules/news/news.module')
      .then(m => m.NewsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
