import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiaListComponent } from './india-list/india-list.component';


const routes: Routes = [
  {
    path: '',
    component: IndiaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndiaRoutingModule { }
