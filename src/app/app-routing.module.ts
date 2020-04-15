import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'world-o-meter',
    loadChildren: () => import('./modules/world-ometer/world-ometer.module')
      .then(m => m.WorldOMeterModule)
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
