import { IndiaDetailsComponent } from './india-details/india-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiaListComponent } from './india-list/india-list.component';


const routes: Routes = [
  {
    path: '',
    component: IndiaListComponent
  },
  {
    path: ':state',
    component: IndiaDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndiaRoutingModule { }
